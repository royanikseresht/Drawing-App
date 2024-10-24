function LineToTool(){
	this.icon = "assets/ellipseTool.jpg";
	this.name = "ellipse";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){

		if(mouseIsPressed){
			if(startMouseX == -1){
                //this only gets called once when the mouse gets pressed and sets the line starting poing.
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;

                //this saves the current state of the canvas 
				loadPixels();
			}

			else{
                //when updatePixels is called, it updates the canvas back to the state it was when loadPixels was last called
                //in effect this will erase any lines that were drawn since the last time loadPixels was called, giving the
                //impression that the user is dragging the line rather than it being drawn every frame.
				updatePixels();
				ellipse((startMouseX + mouseX)/2, (startMouseY + mouseY) / 2, mouseX - startMouseX, mouseY - startMouseY);
			}

		}

		else if(drawing){
            //once the mouse is no longer being pressed, if we started to draw now we stop and get things set up to start over
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};
}