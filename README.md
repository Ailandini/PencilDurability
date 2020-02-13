Pencil Durability Kata for Pillar/Accenture X.0<br>
Ansel Landini

The Pencil Durability Kata was an intermediate exercise geared toward creating class structures to mimic the usage of a pencil, and how that usage impacted the written word on a piece of paper.

To copy and run this kata be sure to have git and npm installed globally on your machine.<br>
Once you have cloned the repository and navigated to the project directory, run the commands:

npm install<br>
npm run test

npm install will load in all the project dependencies (including Mocha; the testing package utilized in this kata). <br>
npm run test will run all of the test files located in the project's test/ directory and print their names to the console.<br>
There is no need to build the project, but it can be built by running "npm run build".

Feel free to open the dist/index.html file and play around with it if you like. The frontend src/index.html and src/index.js are NOT meant to be graded in this Kata. These files were hastily thrown together to provide a visual testing aspect last minute. In a true implementation this would be removed once it was clear the functionality was correct. 

##IMPORT NOTES ABOUT IMPLEMENTATION##<br>
The Kata describes the workings of what I saw as two distinct classes. That of a Pencil(), and that of a piece of Paper(). <br>
As such I created and tested a JavaScript class for each, and packaged them as JavaScript Modules.<br>
The intended use case is that a user would add these import statements to the beginning of their javascript file:

import { Pencil } from './Pencil';<br>
import { Paper } from './Paper';    <-- where the location in '' is the location of the module. 

You're sure to notice that there is also a third class Passphrase().<br>
Passphrase() is not meant to be available to the user; it exists solely as a barrier between the client and the paper class. More Below:

Passphrase():<br>
Due to the nature of JavaScript, private functions are tricky (if not impossible) to implement in the context of classes.<br>
Check out https://www.sitepoint.com/javascript-private-class-fields/ for more information on this.<br>
Private functions aren't typically a necessity of JavaScript, in our case however, we don't want the user to be able to change what's written on our Paper() without using a Pencil(). Passphrase() is used as an idea for how to overcome this problem by causing Paper() functions (except Paper.Clear()) to do nothing unless provided a Passphrase parameter. All Pencil() classes that call Paper() functions provide a Passphrase as a parameter.

Length of Functions:<br>
The lack of private functions in JavaScript classes unfortunately causes problems in other areas as well.<br>
You'll notice that the Paper() and Pencil() functions are semi-lengthy and should certainly be thinner sliced. Unfortunately thin-slicing the functions makes those helper functions available to the user. And since we don't want the user to make updates to the Pencil() directly (for example, manually setting the Point Durability), I've kept all functionalities that deal directly with Pencil() properties within the Pencil() function calls.

##Optimization Notes##<br>
There are two behaviors in the Kata that are perhaps unideal, but were not specifically addressed in the instructions, and due to this I have left unchanged.

1. Editing over characters that are the same, still returns @. For example, if the Paper reads "H llo" where "e" has been erased. Editing with the string "ello" will make the paper read "He@@@" despite the fact that the "llo" of the original paper and the edit text are the same.

2. Editing with a text string that is longer than what has already been written changes all excess to "@". For example, if the paper reads "Hell " where "o" has been erased, and the edit text is "o!!!" the resulting Paper text will be "Hello@@@". 

In a true implementation, it is my opinion that these issues should be resolved, but for the purposes of the Kata, I have left them as is.

Thank you for taking the time to review my Kata! 
If you can provide detailed feedback, I would greatly appreciated it, as I am always looking to improve my TDD and general coding abilities. 
