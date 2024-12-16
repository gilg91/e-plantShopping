# Paradise Nursery Shopping App

This project is the **final assignment** for the IBM Software Development Certificate (Coursera). It is a React-based front-end application that serves as a shopping platform for "Paradise Nursery." Users can browse a variety of houseplants, add them to a shopping cart, adjust quantities, and review total costs before checkout.

## Project Features

### 1. Landing Page
- **Background Image:** A welcoming visual for the nursery.
- **About Section:** A brief paragraph about the company.
- **Get Started Button:** Links to the product listing page.

### 2. Product Listing Page
- Displays a variety of houseplants (at least six), organized into three or more categories.
- **Product Details:**
  - Thumbnail image
  - Plant name
  - Price
  - Add to Cart button
- **Header Features:**
  - **Dynamic Cart Icon:** Displays the total number of items in the cart.
  - Navigation links to the landing page and shopping cart.

### 3. Shopping Cart Page
- **Cart Details:**
  - Displays all added items, including:
    - Thumbnail image and plant name
    - Unit price
    - Total price per item type
  - Total number of items in the cart.
  - Total cost of all items in the cart.
- **Functionalities:**
  - **Quantity Adjustment:** Increase or decrease the quantity of each item.
  - **Delete Option:** Remove items from the cart.
  - **Buttons:** Continue shopping and checkout.
- **Dynamic Updates:** Cart icon and total reflect changes instantly.

---

## Technologies Used
- **Frontend:** React
- **State Management:** Redux Toolkit
- **Styling:** CSS
- **JavaScript Libraries:** React Hooks (`useState`, `useEffect`)

---


I focused on implementing the following features and components:

1. **`src/ProductList.jsx`:**
   - Developed the product listing functionality using React Hooks.
   - Dynamically rendered houseplants and their details.
   - Implemented the "Add to Cart" button logic.

2. **`src/CartSlice.jsx`:**
   - Built the Redux slice to manage cart state globally.
   - Wrote actions and reducers for adding, removing, and updating items in the cart.

3. **`src/CartItem.jsx`:**
   - Created the cart item component for rendering individual items.
   - Added functionality for updating item quantities and deleting items.

---

