
# Challanges : 

# Challange 1 : 

1. Initialize state with the default value of the
        array pulled in from pads.js

2. Map over that state array and display each one
        as a <button> (CSS is already written for you)
        (Don't worry about using the "on" or "color" 
        properties yet)
    
# Challange 2 : 

    Challenge: use a ternary to determine the backgroundColor
    of the buttons

1. If darkMode is true, set them to "#222222"
2. If darkMode is false, set them to "#cccccc"

# Challange 3 : 

 
  
 1. Create a separate component called "Pad" and
    replace the `button` above with our <Pad /> component
 2. Pass the Pad component a prop called `color` with the
    value of the same name from the `padsData` objects
 3. In the Pad component, apply an inline style to the <button>
    to set the backgroundColor of the button.
 

 # Challange 4 :

    
    
     Our buttons got turned off by default! Update the code
     so if the button is "on", it has the className of "on".
     
    
# Challange 5:


     Challenge: Create a toggle() function that logs
      "clicked!" to the console
      
      Pass that function down to each of the Pad components
      and set it up so when they get clicked, the function runs
     
# Challange 6:


         
         Call setPads to update the state of the one pad that was
         clicked. 
         
         Map over the previous pads array, and if the current
         item you're iterating over has the same id as the `id` passed
         to this function, then return a new object with the `on` value
         set to the opposite of what it was before.
         
         Otherwise (if the ids don't match), just return the previous
         item as it was, unchanged.
         
# Small React Project 

- Understand passing data around react 



# Getting Started
Install the dependencies and run the project
```
npm install
npm start
```

Head over to https://vitejs.dev/ to learn more about configuring vite
## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!