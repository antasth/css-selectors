# TopSmart Application

## <img src="https://raw.githubusercontent.com/antasth/images-for-readme.md/main/CssSelectors/selectors1.png" width="90%"></img> <img src="https://raw.githubusercontent.com/antasth/images-for-readme.md/main/CssSelectors/selectors2.png" width="90%"></img>

---

[Deploy](https://antasth.github.io/css-selectors/)

---

## **About the project**

This project was developed as part of the RSSchool frontend course. [Link to task](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/rs-css.md). In this task we needed to create a simulator for learning CSS selectors. The simulator consists of several game levels. Each level includes a layout example and html code that corresponds to the current level. Some layout elements are highlighted using animation. The user's task is to write a CSS selector that matches all selected layout elements.  
Simulator prototype - [CSS Diner](https://flukeout.github.io/) application.

## **Features**

1. The code entry window  
   _In the code entry window, the user can type and submit for review a CSS selector that matches all selected layout elements. You can send the code for verification either by clicking on the Enter button in the window for entering the code, or by pressing the Enter key on the keyboard._
2. Animation
   _Corresponding animation is provided for correct and incorrect answers. If the answer is correct, the elements fly off the screen, and if the answer is incorrect, the window with the code will twitch._
3. Help button
   _The application has a Help button for those cases when the user cannot guess the desired selector. Clicking on the Help button displays the desired selector in the window for entering the code. The selector is displayed in the block for entering the code with the effect of text printing (smooth appearance of text letter by letter)._
4. Levels
   _In the block with a list of game levels, it is possible to go to a specific level by clicking on its number; next to each level it is displayed whether it was completed or not, or whether the level was completed using a hint. The current level is highlighted. When you reboot, the application opens at the same level. There is a button that allows you to reset your progress and start the game over again._
5. Automatic levels change
   _If the answer is correct, the user moves to the next level of the game, or a victory notification is displayed if the level is the last._

## **Technical requirements**

-   TypeScript is used to write application code.
-   The code is divided into modules.
-   webpack is used to build the code.
-   Eslint is used and configured for TypeScript checking.
-   The application is tested in the latest version of the Google Chrome browser.
-   For standard monitor screen resolutions up to 1024x768 inclusive, the application fits entirely on the screen without the appearance of a scroll bar. At lower screen resolutions, a vertical scroll bar may appear. The minimum page width at which the correct display of the application is checked is 500px.
-   Interactivity of elements that users can interact with, changing the appearance of the element itself and the state of the cursor on hover, using different styles for the active and inactive states of the element, smooth animations.

## **Stack**

-   HTML5
-   CSS3
-   Javascript
-   Typescript
-   Eslint
-   Prettier
-   Webpack
