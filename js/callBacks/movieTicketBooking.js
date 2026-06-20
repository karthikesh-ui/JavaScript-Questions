/*
Q5. Movie Ticket Booking

Create a function bookTicket() that prints:

Booking Ticket...

Then executes a callback that prints:

Ticket Booked Successfully
*/

function bookTicket(callback) {

    console.log("Booking Ticket...");

    callback();
}

bookTicket(function() {
    console.log("Ticket Booked Successfully");
});

/*
Output:

Booking Ticket...
Ticket Booked Successfully
*/