# Backend for Daoleme

## API

### /user
- POST - signup
  - input: {username, password, email}
  - output: ?
- PUT - update password *
  - input: {password}
  - output: ?

### /user/signin
- POST - signin
  - input: {username, password}
  - output: ?

### /user/signout
- GET - signout *
  - output: ?

### /delivery
- GET - list deliveries *
  - output: [{}]

### /delivery/${delivery-id}
- PUT - create delivery *
  - input: {company, isPinned, isReceived}
  - output: ?
- PUT - edit delivery *
  - {isPinned} or {isReceived} or both
- DELETE - remove favourite *

Starred (*) APIs need authentication, the others do not.