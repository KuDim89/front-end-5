"use strict";

function isEmpty(obj) {
    for(var key in myDog) {
        if (myDog.hasOwnProperty(key)) {
            return false;
        }
    }

    return true;
}

var myDog = {};
alert (isEmpty(myDog));
myDog["color"] = "brown";
alert (isEmpty(myDog));



