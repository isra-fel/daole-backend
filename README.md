# Backend for Daoleme

## API

### /user
- POST - signup
  - input: {username, password, email}
  - output:
    - success: 201 Created (with cookie)
    - fail: 409 Conflict, 400 Bad Request
- PUT - update user setting *
  - input: {password} or {email}
  - output:
    - success: 200 OK
    - fail: 400 Bad Request

### /user/signin
- POST - signin
  - input: {username, password}
  - output:
    - success: 200 OK (with cookie)
    - fail: 401 Unauthorized

### /user/signout
- GET - signout *
  - output: 200 OK

### /delivery
- GET - list deliveries *
  - output: [{}]

### /delivery/${delivery-id}
- PUT - create delivery *
  - input: {company, alias, isPinned, isReceived}
  - output:
    - success: 201 Created
    - fail: 409 Conflict, 400 Bad Request
- PUT - edit delivery *
  - input: {isPinned} or {isReceived} or {alias}
  - output:
    - success: 200 OK
    - fail: 400 Bad Request, 404 Not Found
- DELETE - remove favourite *
  - output:
    - success: 200 OK
    - fail: 404 Not Found

Starred (*) APIs need authentication, the others do not. If these APIs are called without credentials (session), the server will return a 401 Unauthorized.