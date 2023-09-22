## 身份认证
- session
  - Session Cookies 是存储在服务器内存中，耗费大量的资源
  - cookie 默认情况下，跨域是不会携带cookie的，需要修改请求 `xhrFields: { withCredentials: true }`
- jwt
  - Header.payload.signature
  - 认证信息不存在后端，后端只做身份验证，通过则返回数据，降低服务器查询次数
  ```json
  // Header 标头
  {
    "alg": "HS256",
    "typ": "JWT"
  }
  // payload 有效载荷
  {
    "id": "1234567890",
    "exp": "1234567890",
    "name": "name",
    "admin": true
  }
  // signature 签名
  HMACSHA256(base64UrlEncode(Header) + "." + base64UrlEncode(payload), secret)

  // 把 Header、Payload、Signature 三个部分拼成一个字符串，每个部分之间用"点"（.）分隔

  // request 请求
  Authorization: Bearer <token>
  ```