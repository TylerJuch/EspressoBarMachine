var firstSpinnerVal, secondSpinnerVal, thirdSpinnerVal;
window.onload = function () {
    attachEventListeners();
};

function attachEventListeners() {
    document.getElementById("spinnerHandle").addEventListener("click", handleClick);
    document.getElementById("closePrizeBoxDiv").addEventListener("click", hidePrize);
};

var handleClick = function () {
    changeHandleImage();
    simulateSpin();
    checkForPrize();
}

function changeHandleImage() {
    var handle = document.getElementById("spinnerHandle");
    handle.style.backgroundImage = 'url("media/clicked_handle.png")';
    handle.removeEventListener("click", handleClick);

    window.setTimeout(function() {
        handle.removeAttribute("style");
        handle.addEventListener("click", handleClick);
    }, 3000);
}

function simulateSpin() {
    firstSpinnerVal = Math.floor(Math.random()*3);
    secondSpinnerVal = Math.floor(Math.random()*3);
    thirdSpinnerVal =  Math.floor(Math.random()*3);

    firstArr = ["coffee_maker.jpg", "teapot.jpg", "espresso_machine.jpg"];
    secondArr = ["coffee_filter.jpg", "tea_strainer.jpg", "espresso_tamper.jpg"];
    thirdArr = ["coffee_grounds.jpg", "loose_tea.jpg", "ground_espresso.jpg"];

    document.getElementById("firstSpinner").style.background = 'url("media/' +firstArr[firstSpinnerVal]+ '")';
    document.getElementById("secondSpinner").style.background = 'url("media/' +secondArr[secondSpinnerVal]+ '")'
    document.getElementById("thirdSpinner").style.background = 'url("media/' +thirdArr[thirdSpinnerVal]+ '")'
}

function checkForPrize() {
    if (firstSpinnerVal == secondSpinnerVal && secondSpinnerVal == thirdSpinnerVal) {
        document.getElementById("prizeBox").style.display = "block";
        document.getElementById("overlay").style.display = "block";
        document.getElementById("results").innerHTML = "You won!";

        prizeImgArray = ["coffee.jpg", "tea.jpg", "espresso.jpg"];
        prizeNameArray = ["Coffee", "Tea", "Espresso"];

        document.getElementById("prizeContainer").style.background = 'url("media/' +prizeImgArray[firstSpinnerVal]+ '")';
        document.getElementById("resultNameDiv").innerHTML = prizeNameArray[firstSpinnerVal];
    } else {
        document.getElementById("results").innerHTML = "You didn't win. Spin again!";
    }   
}

function removeBackgroundImage(targetElement) {
    targetElement.removeAttribute("style");
}

var hidePrize = function() {
    document.getElementById("prizeBox").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}