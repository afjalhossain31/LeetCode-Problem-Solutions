type Booking = {
  name: string;
  guests: number;
  time: string;
};

function formatBookingConfirmation(booking: Booking): string {
  return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
}

const booking: Booking = {
  name: "Abdullah Al",
  guests: 4,
  time: "7:00 PM",
};

const confirmationMessage = formatBookingConfirmation(booking);
console.log(confirmationMessage);