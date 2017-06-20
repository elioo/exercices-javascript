// Algo that generate rectangles in the canvas

// Find canvas and set context
var canv = document.getElementById("canvasOne");
var canvctx = canv.getContext("2d");

// Setup variables
var mapArray = [] // Contains arrays with booleans values 

var initialise = {
    // Create the map with red rectangles
    "rects": function () {
        for (i = 0; i < mapArray.length; i++) {
            for (j = 0; j < mapArray[i].length; j++) {
                if ((mapArray[i][j])) {
                    canvctx.fillStyle = "red";
                    canvctx.fillRect(i * 10 + 30, j * 10 + 30, 10, 10);
                }
                canvctx.fillStyle = "black";
                canvctx.fillRect(i * 10 + 30, j * 10 + 30, 10, 1);
                canvctx.fillRect(i * 10 + 30, j * 10 + 30, 1, 10);
            }
            canvctx.font = "7px arial";
            canvctx.fillText(i, 10, i * 10 + 40);
            canvctx.fillText(i, i * 10 + 30, 20);
        }
    },

    // Create an array that compose the columns 
    "array": function () {
        for (i = 0; i < 60; i++) {
            mapArray.push([])
            // Push lines into columns
            for (j = 0; j < 60; j++) {
                mapArray[i].push(Math.random() < 0.01);
            }
        }
    }
}
initialise.array();
initialise.rects();


/*
    //////////////////////
    /// YOUR WORK HERE ///
    //////////////////////
    This function will be executed when you click on the start button. 
    Make your algo in this function
    mapArray[Xvalue][Yvalue]  (begin on 0 !!)(array into array)
*/
function startResolution() {
    var blueBoxesFromO = [];
    var found = false;
    for (var i = 0; i < 60 && !found; i++) { // Check la diagonale de (0;0) à (59;59)
        if (!mapArray[i][i]) {
            console.log("Bleu en (" + i + ";" + i + ")");
            blueBoxesFromO.push([i, i]);

        } else {
            console.log("Rouge en (" + i + ";" + i + ")");
            found = true;
        }
    }
    console.log("i est egal à " + i);
    var stop = false;
    for (var b = 0; b < blueBoxesFromO.length && !stop; b++) {
        var x = blueBoxesFromO[b][0];
        var y = blueBoxesFromO[b][1];
        for (var c = x - 1; c > 0 && c < x && !stop; c--) { // Boucle pour verifier les X
            if (mapArray[c][y]) {
                console.log("On s'arrete là");
                stop = true;
            }
        }
        for (var c = y - 1; c > 0 && c < y && !stop; c--) { // Boucle pour verifier les X
            if (mapArray[x][c]) {
                console.log("On s'arrete là");
                stop = true;
            }
        }
        if (stop) {
            var yFinal = y - 1;
            var xFinal = x - 1;
            console.log("Le carre maximum est a son cote inferieur droit en (" + xFinal + ";" + yFinal + ")");
            console.log("Il a pour aire " + xFinal * yFinal + "carres.");
            canvctx.fillStyle = "green";
            canvctx.fillRect(xFinal * 10 + 30, yFinal * 10 + 30, 10, 10);
        }
    }
    for (var d = 0; d < xFinal; d++) {
        canvctx.fillStyle = "green";
            canvctx.fillRect(d * 10 + 30, yFinal * 10 + 30, 10, 10);
    }
    for (var e = 0; e < yFinal; e++) {
        canvctx.fillStyle = "green";
            canvctx.fillRect(xFinal * 10 + 30, e * 10 + 30, 10, 10);
    }

}