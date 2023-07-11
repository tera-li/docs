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
```nginx
# ~代表匹配时区分大小写
location ~ .*\.(html|htm|gif|jpg|jpeg|bmp|png|ico|txt|js|css){
    # 指向文件服务器目录
    root   /nginx/static_resources;
    expires 7d;
}
```
## 压缩
## 缓存
## 跨域