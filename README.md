# e-commerce-rest-api
This project is REST-API server build for **[e-commerce-react-app](https://github.com/vasilignatov/e-commerce-react-app)** SPA.\
The project is built on the basis of **[express-boilerplate](https://github.com/vasilignatov/express-boilerplate)** 

## Endpoints

Available routes:

**Auth routes**\
`POST /auth/register` - Register route\
`POST /auth/login` - Login route\
`POST /auth/logout` - Logout route (Auth restriction)\
`POST /auth/refresh-token` - Refresh token route

**User routes**\
`GET /users/` - Get all users (Admin restriction)\
`POST /users/` - Create user (Admin restriction)\
`GET /users/:userId` - Get user (Auth restriction)\
`PUT /users/:userId` - Update route (Auth restriction)\
`DELETE /users/:userId` - Delete route (Auth restriction)

**Products routes**\
`GET /products/` - Get all products\
`POST /products/` - Create product (Admin restriction)\
`GET /products//last-added` - Get last 3 added products\
`GET /products/get-products-categories` - Get product categories separated by gender\
`GET /products/:id` - Get product by product id

**Orders routes**\
`GET /orders/` - Get all orders (Auth restriction)\
`GET /orders/:id` - Get all orders by order id (Auth restriction)\
`POST /orders/` - Create order (Admin restriction) (Auth restriction)

**Whishlist routes**\
`GET /whishlist/` - Get all orders (Auth restriction)\
`POST /whishlist/` - Add product to whishlist (Auth restriction)\
`DELETE /whishlist/` - Remove product from whishlist (Auth restriction)

**Team routes**\
`GET /team/` - Get all team members



