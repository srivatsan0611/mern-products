# Product Listing Application
Built using the MERN Stack (MongoDB, ExpressJS, ReactJS and NodeJS) 

## Overview

The MERN Products Application is a full-stack web app that makes it easy to manage a product inventory with simple CRUD (Create, Read, Update, Delete) operations. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and deployed on Render, it’s designed to be both functional and user-friendly.

This project is an attempt of mine to dive into the essentials of full-stack development.

## Key Features

- Create Products: Add new products to the inventory with relevant details.
- Read Products: View a list of all products or search for specific products.
- Update Products: Modify details of existing products.
- Delete Products: Remove products from the inventory.
- Responsive Design: The application is fully responsive and works on all devices.
- Deployed on Render: The application is deployed and can be accessed live.

## Getting Started

#### Prerequisites
Before you begin, ensure you have the following installed:

    Node.js (v14.x or higher)
    npm (v6.x or higher)
    MongoDB (local or cloud instance)

#### Installation

1. Clone the repo
   ```
   git clone https://github.com/srivatsan0611/mern-products.git
   cd mern-products
   ```
2. Install the dependencies
   ```
   npm run build
   ```
   The package-json already has the commands to build the dependencies listed under the "build" script so yeah.
3. Create a .env
   ```
   MONGO_URI=your_mongo_database_uri
   PORT=5000
   ```

#### Usage
You will end up having to run the front-end and the back-end separately in the deployment mode. So I suggest opening two concurrent terminals. 

1. Backend
   ```
   cd backend
   npm run dev
   ```
2. Frontend
   ```
   cd frontend
   npm run dev
   ```

And all you need to do is open up the front-end local host that's mentioned in the terminal and you'll be able to use it.

## Deployment

This app was deployed on Render (Really easily). So in case you don't want to go through all that work just to simply test it out, you can always head to:
https://mern-products-srivatsan.onrender.com/

In case the time at which you click this, it isn't up and running, please do contact me :)

## Contributing

I mean, I know this is probably the most basic MERN Application and that it's intended for me to learn it's fundamentals and not deploy it full fledged, Contributions are more than welcome tbh.
Please fork this repository and submit a pull request with your proposed changes.

### Future Work
So I'm putting this up under contributions because this could be an idea

- Implement Authentication mechanisms using OAuth / JWT.
- Create different personal displays for these Authorized Individuals.

Thanks for reading!
