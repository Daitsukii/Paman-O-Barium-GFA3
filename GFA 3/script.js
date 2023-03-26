// Random Number Generator
var num1 = Math.round(Math.random() * 20);
var num2 = Math.round(Math.random() * 20);
var num3 = Math.round(Math.random() * 20);

// Objects
var map1 = "<strong class=\"bmtxt\">Blue Moon</strong>";
var map2 = "<strong class=\"ssrtxt\">Sandswept Ruins</strong>";
var map3 = "<strong class=\"avmtxt\">Active Volcanic Mines</strong>";

// Display
document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;
document.getElementById("num3").innerHTML = num3;

// Largest Number
function displayLargest(num, map1, map2, map3) {
    if (map3 === undefined) {
        if (map2 === undefined) {
            // Only one
            document.getElementById("largest").innerHTML = "The map with the most survivors (<strong>" + num + "</strong>) in the past hour is " + map1 + ".";
        } else {
            // Two
            document.getElementById("largest").innerHTML = "The maps with the most survivors (<strong>" + num + "</strong>) in the past hour are " + map1 + " and " + map2 + ".";
        }
    } else {
        // All
        document.getElementById("largest").innerHTML = "The maps with the most survivors (<strong>" + num + "</strong>) in the past hour are " + map1 + ", " + map2 + " and " + map3 + ".";
    }
}
if (num1 > num2) {
    if (num1 > num3) {
        // num1 largest
        displayLargest(num1, map1);
    } else if (num1 == num3) {
        // num1 and num3 largest
        displayLargest(num1, map1, map3);
    } else {
        // num3 largest
        displayLargest(num3, map3);
    }
} else if (num1 == num2) {
    if (num1 == num3) {
        // All largest
        displayLargest(num1, map1, map2, map3);
    } else {
        // num1 and num2 largest
        displayLargest(num1, map1, map2);
    }
} else {
    if (num2 > num3) {
        // num2 largest
        displayLargest(num2, map2);
    } else if (num2 == num3) {
        // num2 and num3 largest
        displayLargest(num2, map2, map3);
    } else {
        // num3 largest
        displayLargest(num3, map3);
    }
}

// Letter
var letter = String.fromCharCode(64 + num1);
if (letter == "@") {
    letter = "A";
}
document.getElementById("letter").innerHTML = "The first letter of the username of the player that got the fastest time in <strong class=\"bmtxt\">Blue Moon</strong> is <strong>" + letter + "</strong>.";

// Time
var totalMins = num2 * num3;
var hrs = Math.floor(totalMins / 60);
var mins = totalMins % 60;
if (hrs == 0) {
    if (mins == 1) {
        document.getElementById("time").innerHTML = "The time it took for them to complete <strong class=\"bmtxt\">Blue Moon</strong> ever since its release is <strong>" + mins + " minute</strong>.";
    } else {
        document.getElementById("time").innerHTML = "The time it took for them to complete <strong class=\"bmtxt\">Blue Moon</strong> ever since its release is <strong>" + mins + " minutes</strong>.";
    }
} else if (hrs == 1) {
    if (mins == 0) {
        document.getElementById("time").innerHTML = "The time it took for them to complete <strong class=\"bmtxt\">Blue Moon</strong> ever since its release is <strong>" + hrs + " hour</strong> (" + totalMins + " minutes).";
    } else if (mins == 1) {
        document.getElementById("time").innerHTML = "The time it took for them to complete <strong class=\"bmtxt\">Blue Moon</strong> ever since its release is <strong>" + hrs + " hour and " + mins + " minute</strong> (" + totalMins + " minutes).";
    } else {
        document.getElementById("time").innerHTML = "The time it took for them to complete <strong class=\"bmtxt\">Blue Moon</strong> ever since its release is <strong>" + hrs + " hour and " + mins + " minutes</strong> (" + totalMins + " minutes).";
    }
} else {
    if (mins == 0) {
        document.getElementById("time").innerHTML = "The time it took for them to complete <strong class=\"bmtxt\">Blue Moon</strong> ever since its release is <strong>" + hrs + " hours</strong> (" + totalMins + " minutes).";
    } else if (mins == 1) {
        document.getElementById("time").innerHTML = "The time it took for them to complete <strong class=\"bmtxt\">Blue Moon</strong> ever since its release is <strong>" + hrs + " hours and " + mins + " minute</strong> (" + totalMins + " minutes).";
    } else {
        document.getElementById("time").innerHTML = "The time it took for them to complete <strong class=\"bmtxt\">Blue Moon</strong> ever since its release is <strong>" + hrs + " hours and " + mins + " minutes</strong> (" + totalMins + " minutes).";
    }
}