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
    add_header  Cache-Control  max-age=3600;
    expires 7d;
    # 指向文件服务器目录
    root   /nginx/static_resources;
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

    # 优先返回.gz静态文件
    gzip_static on;
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
    proxy_cache_path /nginx/cache levels=1:2 keys_zone=hot_cache:128m inactive=3d max_size=2g;
    
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
## IP黑白名单
```nginx
http{
    # 屏蔽该文件中的所有IP
    include /nginx/IP/BlocksIP.conf; 
    server{
        location xxx {
            # 某一系列接口只开放给白名单中的IP
            include /nginx/IP/WhiteIP.conf; 
        }
    }
}

# --------黑名单: BlocksIP.conf---------
deny 192.177.12.222; # 屏蔽192.177.12.222访问
deny 192.177.44.201; # 屏蔽192.177.44.201访问
deny 127.0.0.0/8; # 屏蔽127.0.0.1到127.255.255.254网段中的所有IP访问

# --------白名单: WhiteIP.conf---------
allow 192.177.12.222; # 允许192.177.12.222访问
allow 192.177.44.201; # 允许192.177.44.201访问
allow 127.45.0.0/16; # 允许127.45.0.1到127.45.255.254网段中的所有IP访问
deny all; # 除开上述IP外，其他IP全部禁止访问
```
## 跨域
```nginx
# 协议+域名+端口 同源策略
location / {
    # 允许跨域的请求，可以自定义变量$http_origin，*表示所有
    add_header 'Access-Control-Allow-Origin' *;
    # 允许携带cookie请求
    add_header 'Access-Control-Allow-Credentials' 'true';
    # 允许跨域请求的方法：GET,POST,OPTIONS,PUT
    add_header 'Access-Control-Allow-Methods' 'GET,POST,OPTIONS,PUT';
    # 允许请求时携带的头部信息，*表示所有
    add_header 'Access-Control-Allow-Headers' *;
    # 允许发送按段获取资源的请求
    add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
    # 一定要有！！！否则Post请求无法进行跨域！
    # 在发送Post跨域请求前，会以Options方式发送预检请求，服务器接受时才会正式请求
    if ($request_method = 'OPTIONS') {
        add_header 'Access-Control-Max-Age' 1728000;
        add_header 'Content-Type' 'text/plain; charset=utf-8';
        add_header 'Content-Length' 0;
        # 对于Options方式的请求返回204，表示接受跨域请求
        return 204;
    }
}
```
## 防盗链设计
```nginx
# 在动静分离的location中开启防盗链机制
location ~ .*\.(html|htm|gif|jpg|jpeg|bmp|png|ico|txt|js|css){
    # 最后面的值在上线前可配置为允许的域名地址
    valid_referers blocked 192.168.12.129;
    if ($invalid_referer) {
        # 可以配置成返回一张禁止盗取的图片
        # rewrite   ^/ http://xx.xx.com/NO.jpg;
        # 也可直接返回403
        return   403;
    }
    
    root   /nginx/static_resources;
    expires 7d;
}
```
## 文件传输配置
| 配置参数项 | 配置释义 |
| :--- | :--- |
| client_max_body_size | 设置请求体允许的最大体积 |
| client_header_timeout | 等待客户端发送一个请求头的超时时间 |
| client_body_timeout | 设置读取请求体的超时时间 |
| proxy_read_timeout | 设置请求被后端服务器读取时，Nginx等待的最长时间 |
| proxy_send_timeout | 设置后端向Nginx返回响应时的超时时间 |

## 性能优化
- 打开长连接配置
```nginx
upstream xxx {
    # 长连接数
    keepalive 32;
    # 每个长连接提供的最大请求数
    keepalived_requests 100;
    # 每个长连接没有新的请求时，保持的最长时间
    keepalive_timeout 60s;
}
```
- 开启零拷贝技术
```nginx
sendfile on; # 开启零拷贝机制
```
- 开启无延迟或多包共发机制
```nginx
tcp_nodelay on;
tcp_nopush on;
```
- 调整Worker工作进程
```nginx
# 自动根据CPU核心数调整Worker进程数量
worker_processes auto;

# 每个Worker能打开的文件描述符，最少调整至1W以上，负荷较高建议2-3W
worker_rlimit_nofile 20000;
```
- 开启CPU亲和机制
```nginx
worker_cpu_affinity auto;
```
- 开启epoll模型及调整并发连接数
```nginx
events {
    # 使用epoll网络模型
    use epoll;
    # 调整每个Worker能够处理的连接数上限
    worker_connections  10240;
}
```
