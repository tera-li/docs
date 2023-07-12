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
## 缓存
## 跨域