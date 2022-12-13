const ratingCard = document.querySelector('.rating');
const thankyouCard = document.querySelector('.thankyou');
const submitBtn = document.querySelector('.rating .submit-btn');
const ratingResult = document.querySelector('#rating-result');
submitBtn.addEventListener('click', handleClickSubmit);
let rating = 0;

function handleClickSubmit() {
    // only want to update cards when rating is set
    if (rating >= 1 && rating <= 5) {

        // make the rating card inactive to display thankyou card
        if (ratingCard.classList.contains('active')) {
            ratingCard.classList.remove('active');
        }

        // make the rating card appear
        if (!thankyouCard.classList.contains('active')) {
            thankyouCard.classList.add('active');
        }

        // display rating
        ratingResult.textContent = rating;

        // reset rating (might be redundant)
        rating = 0;
    }
}

const ratingBtn = document.querySelectorAll('.rating-btn');
ratingBtn.forEach(btn => {
    btn.addEventListener('click', handleClickRating);
});

function handleClickRating() {

    // clear previously selected buttons
    ratingBtn.forEach(btn => {
        if (btn.classList.contains('selected')) {
            btn.classList.remove('selected');
        }
    });

    // make button appear selected and update rating's value
    this.classList.add('selected');
    rating = this.value;
}