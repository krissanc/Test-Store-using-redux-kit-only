Netlify Build: https://main--euphonious-naiad-44d365.netlify.app/

This was fun to do and to explore - the redux kit. The main takeaway is that, while the redux kit is fun to use, it comes with limitations, such as not being able to subscribe to a particular property of the store object, or passing down the store to other components, because it has to be exported, which is fine in this project, but the react-redux kit, as well as the reduxjs/toolkit, offers a lot more versatility that I want to explore next. 

What I wanted to do was a store, an actual store, with a list of products. Then I wanted the user to click on a product and add it to a cart. The cart is located in a Navbar component which imports the store and displays the current count of items in the cart.

How I want to build upon this: 
-Add so that the user can press the cart and have a list of items, and the amount, be shown in a new little div. Usually that functionality exists in proffesional "store" sites, and I think I know how to build it. I just need some more time.
-Not have the cart icon move to the left once the count becomes double digits
-Have there be some visual feedback on the button when it is clicked

In the next project/exercise, I will be using the react-redux kit to build a store.
