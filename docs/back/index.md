## 身份认证
- session
  - Session Cookies 是存储在服务器内存中，耗费大量的资源
  - cookie 默认情况下，跨域是不会携带cookie的，需要修改请求 `xhrFields: { withCredentials: true }`
- jwt
  - Header.playload.signature