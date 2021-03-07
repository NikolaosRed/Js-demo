showMessage("GET A GRIP")

changePercentOff(30);

const button = document.getElementById("on-click-button");
const reviewButton = document.getElementById("see-review");


button.addEventListener("click", function () {
    alert("This web page is still in development");
});

reviewButton.addEventListener("click", function () {
    const review = document.getElementById("review");
    
    if(review.classList.contains("d-none")){
      review.classList.remove("d-none");
      reviewButton.textContent = "Close Review";
    }else{
        review.classList.add("d-none");
        reviewButton.textContent = "Show Review";
    }
        
});