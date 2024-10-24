## Draw Application Case Study

Open the application in Brackets by dragging the folder from your Finder or Explorer into the Brackets window. Click on the live preview button to open the application in your browser. Try out all the tools in the drawing application; these are the four icons on the left of the screen. There is a freehand tool, a line draw tool, a spray can and a mirror draw tool. You’ll notice that the 'clear' and 'save' buttons don’t work yet. We’ll come to those soon.
Read through the files

Before you get started altering the application, read through the various files that make up the drawing application template. There are quite a few of them but several should be familiar.

*Index.html:* The outlines of the HTML content of the application. This is a bit more complex than some of the other HTML files you will have seen in p5.js programmes. Some of this application is built on the DOM and outside of the canvas. There are also a lot of script imports. These files make up the rest of the application, along with p5.dom and the style sheet.
*style.css:* The style sheet. As we are using the DOM, this handles the layout and look of the application. 
*sketch.js:* The p5.js sketch, which declares any global variables, setup and draw.
*p5.min.js:* The p5 library – thankfully we don’t have to know what goes on inside here!
*colourPalette.js and toolbox.js:* These are two container functions that have been written for you. You don’t need to fully understand them but you might want to use some of their properties. For example, selectedTool gets the current tool that has been selected by the user.
*helperFunctions.js:* A place to write functions that either don’t necessarily belong to objects or that you want to use multiple times. Right now, it contains click handlers for the 'clear' button and the 'save image' button.
*lineToTool.js, freehandTool.js and mirrorDrawTool.js:* All tools that appear in the tool box. 

For tools to work, they have to have: a property called 'icon', which is an URI for an image for the tool icon; a property called 'name', which is a string name for the tool; and a draw function.