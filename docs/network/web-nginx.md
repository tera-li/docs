# Nginx

## 负载均衡
``` nginx
upstream nginx_boot{
   # 30s内检查心跳发送两次包，未回复就代表该机器宕机，请求分发权重比为1:2
   server 192.168.0.000:8080 weight=1 max_fails=2 fail_timeout=30s; 
   server 192.168.0.000:8090 weight=2 max_fails=2 fail_timeout=30s;
   # 这里的IP请配置成你WEB服务所在的机器IP
}

server {
    location / {
        root   html;
        index  index.html index.htm
        # 允许重新定义或者添加发往后端服务器的请求头IP
        proxy_set_header Host $host;
        # 它代表客户端，也就是HTTP的请求端真实的IP
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        # 请求交给名为nginx_boot的upstream上
        proxy_pass http://nginx_boot;
    }
}
```
## 动静分离
``` nginx
# ~代表匹配时区分大小写
location ~ .*\.(html|htm|gif|jpg|jpeg|bmp|png|ico|txt|js|css){
    # 指向文件服务器目录
    root   /nginx/static_resources;
    expires 7d;
}
```
## 压缩
``` nginx
http{
    # 开启压缩机制
    gzip on;
    # 指定会被压缩的文件类型(也可自己配置其他类型)
    gzip_types text/plain application/javascript text/css application/xml text/javascript image/jpeg image/gif image/png;
    # 设置压缩级别，越高资源消耗越大，但压缩效果越好
    gzip_comp_level 5;
    # 在头部中添加Vary: Accept-Encoding（建议开启）
    gzip_vary on;
    # 处理压缩请求的缓冲区数量和大小
    gzip_buffers 16 8k;
    # 对于不支持压缩功能的客户端请求不开启压缩机制
    gzip_disable "MSIE [1-6]\."; # 低版本的IE浏览器不支持压缩
    # 设置压缩响应所支持的HTTP最低版本
    gzip_http_version 1.1;
    # 设置触发压缩的最小阈值
    gzip_min_length 2k;
    # 关闭对后端服务器的响应结果进行压缩
    gzip_proxied off;
}
```
## 缓冲区
``` nginx
http{
    # 设置与后端服务器建立连接时的超时时间
    proxy_connect_timeout 10;
    # 设置从后端服务器读取响应数据的超时时间
    proxy_read_timeout 120;
    # 设置向后端服务器传输请求数据的超时时间
    proxy_send_timeout 10;
    # 是否启用缓冲机制
    proxy_buffering on;
    # 设置缓冲客户端请求数据的内存大小
    client_body_buffer_size 512k;
    # 为每个请求/连接设置缓冲区的数量和大小，默认4 4k/8k
    proxy_buffers 4 64k;
    # 设置用于存储响应头的缓冲区大小
    proxy_buffer_size 16k;
    # 在后端数据没有完全接收完成时，Nginx可以将busy状态的缓冲返回给客户端，该参数用来设置busy状态的buffer具体有多大，默认为 proxy_buffer_size * 2
    proxy_busy_buffers_size 128k;
    # 设置每次写数据到临时文件的大小限制
    proxy_temp_file_write_size 128k;
    # 当内存缓冲区存满时，可以将数据临时存放到磁盘，该参数是设置存储缓冲数据的目录
    proxy_temp_path /nginx/temp_buffer;
}
```
## 缓存
| 配置参数项 | 配置释义 | 语法/参数值 |
| :--- | :--- | :---: |
| proxy_cache_path | <li>path：缓存的路径地址。</li><li>levels：缓存存储的层次结构，最多允许三层目录。</li><li>use_temp_path：是否使用临时目录。</li><li>keys_zone：指定一个共享内存空间来存储热点Key(1M可存储8000个Key)。</li><li>inactive：设置缓存多长时间未被访问后删除（默认是十分钟）。</li><li>max_size：允许缓存的最大存储空间，超出后会基于LRU算法移除缓存，Nginx会创建一个Cache manager的进程移除数据，也可以通过purge方式。</li><li>manager_files：manager进程每次移除缓存文件数量的上限。</li><li>manager_sleep：manager进程每次移除缓存文件的时间上限。</li><li>manager_threshold：manager进程每次移除缓存后的间隔时间。</li><li>loader_files：重启Nginx载入缓存时，每次加载的个数，默认100。</li><li>loader_sleep：每次载入时，允许的最大时间上限，默认200ms。</li><li>loader_threshold：一次载入后，停顿的时间间隔，默认50ms。</li><li>purger：是否开启purge方式移除数据。</li><li>purger_files：每次移除缓存文件时的数量。</li><li>purger_sleep：每次移除时，允许消耗的最大时间。</li><li>purger_threshold：每次移除完成后，停顿的间隔时间。</li> | proxy_cache_path <ol>path</ol> <ol>[levels=levels]</ol> <ol>[use_temp_path=on&off]</ol> <ol>[keys_zone=name:size]</ol> <ol>[inactive=time]</ol> <ol>[max_size=size]</ol> <ol>[manager_files=number]</ol> <ol>[manager_sleep=time]</ol> <ol>[manager_threshold=time]</ol> <ol>[loader_files=number]</ol> <ol>[loader_sleep=time]</ol> <ol>[loader_threshold=time]</ol> <ol>[purger=on&off]</ol> <ol>[purger_files=number]</ol> <ol>[purger_sleep=time]</ol> <ol>[purger_threshold=time]</ol> |
| proxy_cache | 开启或关闭代理缓存，开启时需要指定一个共享内存区域 | <ol>proxy_cache zone & off</ol> <ol>zone为内存区域的名称，即上面中keys_zone设置的名称</ol> |
| proxy_cache_key | 定义如何生成缓存的键 | <ol>proxy_cache_key $scheme$proxy_host$request_uri</ol> |
| proxy_cache_valid | 缓存生效的状态码与过期时间 | <ol>proxy_cache_valid 200 302 30m</ol> <ol>code为状态码，time为有效时间，可以根据状态码设置不同的缓存时间</ol> |
| proxy_cache_min_uses | 设置资源被请求多少次后被缓存 | <ol>proxy_cache_key $scheme$proxy_host$request_uri</ol> |
| proxy_cache_use_stale | 当后端出现异常时，是否允许Nginx返回缓存作为响应 | <ol>proxy_cache_use_stale error</ol> <ol>error为错误类型，可配置timeout & invalid_header & updating & http_500</ol> |
| proxy_cache_lock | 对于相同的请求，是否开启锁机制，只允许一个请求发往后端 | <ol>proxy_cache_lock on & off</ol> |
| proxy_cache_lock_timeout | 配置锁超时机制，超出规定时间后会释放请求 | <ol>proxy_cache_lock_timeout time</ol> |
| proxy_cache_methods | 设置对于那些HTTP方法开启缓存 | <ol>proxy_cache_methods GET</ol> <ol>method为请求方法类型，如GET、HEAD等</ol> |
| proxy_no_cache | 定义不存储缓存的条件，符合时不会保存 | <ol>proxy_no_cache string</ol> <ol>string为条件，例如$cookie_nocache $arg_nocache $arg_comment</ol> |
| proxy_cache_bypass | 定义不读取缓存的条件，符合时不会从缓存中读取 | <ol>proxy_cache_bypass string</ol> <ol>string为条件，例如$cookie_nocache $arg_nocache $arg_comment</ol> |
| add_header | 往响应头中添加字段信息 | <ol>add_header fieldName fieldValue</ol> <ol>$upstream_cache_status：记录了缓存是否命中的信息，存在多种情况</ol><li>MISS：请求未命中缓存</li><li>HIT：请求命中缓存</li><li>EXPIRED：请求命中缓存但缓存已过期</li><li>STALE：请求命中了陈旧缓存</li><li>REVALIDDATED：Nginx验证陈旧缓存依然有效</li><li>UPDATING：命中的缓存内容陈旧，但正在更新缓存</li><li>BYPASS：响应结果是从原始服务器获取的</li> |

```nginx
http{
    # 设置缓存的目录，并且内存中缓存区名为hot_cache，大小为128m，
    # 三天未被访问过的缓存自动清楚，磁盘中缓存的最大容量为2GB。
    proxy_cache_path /soft/nginx/cache levels=1:2 keys_zone=hot_cache:128m inactive=3d max_size=2g;
    
    server{
        location / {
            # 使用名为nginx_cache的缓存空间
            proxy_cache hot_cache;
            # 对于200、206、304、301、302状态码的数据缓存1天
            proxy_cache_valid 200 206 304 301 302 1d;
            # 对于其他状态的数据缓存30分钟
            proxy_cache_valid any 30m;
            # 定义生成缓存键的规则（请求的url+参数作为key）
            proxy_cache_key $host$uri$is_args$args;
            # 资源至少被重复访问三次后再加入缓存
            proxy_cache_min_uses 3;
            # 出现重复请求时，只让一个去后端读数据，其他的从缓存中读取
            proxy_cache_lock on;
            # 上面的锁超时时间为3s，超过3s未获取数据，其他请求直接去后端
            proxy_cache_lock_timeout 3s;
            # 对于请求参数或cookie中声明了不缓存的数据，不再加入缓存
            proxy_no_cache $cookie_nocache $arg_nocache $arg_comment;
            # 在响应头中添加一个缓存是否命中的状态（便于调试）
            add_header Cache-status $upstream_cache_status;
        }
    }
}
```
## 跨域