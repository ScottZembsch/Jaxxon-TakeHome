
# MOCK STORE ASSESMENT

A quick rough skeleton of a eCommerce store front.

## Installation

* Fork/Clone repo to your local machine
* Access the repo in your IDE of choice
* Run 'npm i' to install dependencies
* Run 'npm run dev' to spin up the development server
* Click the provided link in the terminal to view application on the browser

## About The Module

The module is a react app that is spun up with Vite.

Users can browse items, see more details on specific items, and add items to cart.

## Documentation

The app consists of 3 main components.

- The Header component
- The Card component
- The Modal component

### Header Component
The Header component contains the store name title as well as a 'Cart' button.

The cart button will dynamically display the items in the cart. When clicked it will console.log the names of the items in the cart.

### Card Component
The Card component contains each items information such as name, price, product image, and a short description. The Card also contains a 'View Details' button which will open a modal with additional details about the product.

### Modal Component
The Modal component contains a larger product image, name, price, full description, and a 'Add To Cart' button. The 'Add To Cart' button will add the product to state, which can be accessed by clicking the 'Cart' button on the main page which will log the current items in the cart. 


## Styling
This application is styled using Tailwind. I have utilized both inline styling as well as custom class stlying to showcase my knowledge of both techniques. The Modal component is styled using custom classes and can be accessed in the 'App.css' file. The rest of the app utilizes inline styling.

## Strech Features
Below is a list of stretch features that I would complete if more time were allotted.
#### Cart
* Implement object sotrage with key value pair as item : quantity
* Check if item is in cart for item incrementation or decrementation
* View cart modal
* Delete items from cart
#### Modal
* Blur background so modal is easier to View
* Click outside of modal to close functionality
#### Styling
* Overhaul on styling to create a visualy stunning user experience


# Conclusion
I decided to use Vite because of its fast and easy workflow for getting a project up and running. I used React for dynamic rendering of content on the client side, as well as its ability to create reusable components. I used JavaScript but would refactor to TypeScript for its type safety and ability to catch bugs during compile time rather than runtime, as well as its consistency with GraphQL. Because of the simple nature of the application, I decided to use state to hold dynamic information rather than using a more robust state management system like Redux or Jotai. Since I chose to only use native React, the structure of the application utilizes 'prop drilling' to pass data through components. If there were more complexity to this application and more nested components, I would have opted for a state management library to assist in the state management for better readability and simplicity. I chose the components that I did to create as much separation of concerns as possible without being too complex. As for the styling, I used both inline styles and custom classes to showcase my knowledge of both techniques.

In no way is this application (functionality or styling) finished to production standards, but this showcases the rough idea.

