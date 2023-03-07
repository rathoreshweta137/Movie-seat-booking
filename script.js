
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  // copy selected seats into arr
 // map through array
// return a new array indexes

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  // spread operator

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
  
  setMovieData(movieSelect.selectedIndex, movieSelect.value);
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();

/*const container = document.querySelector('.container'); // var of name container , we are selecting class container from query selector
//const seats = document.querySelectorAll('.row.seat:not(.occupied)');   // qsall due to many classes of seat
//const seats = Array.from(document.querySelectorAll('.row.seat:not(.occupied)'));
const count = document.getElementById('count');  
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = + movieSelect.value; 

const seats = document.querySelectorAll('.seat:not(.occupied)');
const seatsArray = Array.from(seats);
const seatsIndex = seatsArray.map((seat) => parseInt(seat.id.split('-')[1]) - 1);
console.log(seatsIndex);

// save slected movie index and price
function setMovieData(movieIndex, moviePrice)
{
    localStorage.setItem('selectedMovieIndex' ,movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}


// update total and count
function updateSelectedCount() {
const selectedSeats = document.querySelectorAll('.row .seat.selected');

// const selectedSeats = document.querySelectorAll('.row .seat.selected');
    
    // copy selected seats into arr
    // map through array
    // return a new array indexes

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    console.log(seatsIndex); 

   const seatsIndex = [...selectedSeats].map(function(ans){
        return [...seats].indexOf(ans);
    }); // spread operator
    localStorage.setItem('selectedSeats ', JSON.stringify(seatsIndex));

    

 /*  const seatsIndex = [];
for (let i = 0; i < selectedSeats.length; i++) {
  const seatIndex = seats.indexOf(selectedSeats[i]);
  seatsIndex.push(seatIndex);
}
console.log(seatsIndex);*/

/*const seatsArray = Array.from(seats);
const seatsIndex = Array.from(selectedSeats).map((seat) => seatsArray.indexOf(seat));
console.log(seatsIndex)


    const selectedSeatscount = selectedSeats.length;
    count.innerText = selectedSeatscount;
    total.innerText = selectedSeatscount * ticketPrice;

}

// Get data from localstorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  
    if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          seat.classList.add('selected');
        }
      });
    }
  
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  
    if (selectedMovieIndex !== null) {
      movieSelect.selectedIndex = selectedMovieIndex;
    }
  }


// Movie select event
movieSelect.addEventListener('change', e => {
ticketPrice = +e.target.value;
setMovieData(e.target.selectedIndex, e.target.value);
updateSelectedCount();
});
// seat click event
container.addEventListener('click', (e) => {
   if(e.target.classList.contains('seat') &&
   !e.target.classList.contains('occupied'))
   {
      e.target.classList.toggle('selected');
      updateSelectedCount();
   }
});
*/