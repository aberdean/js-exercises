const setDate = () => {
  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds * 360) / 60) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes * 360) / 60) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  /** Ensure smooth transition of the hour hand */
  const hoursDegrees = (((hours * 360) / 12) + (minutes / 2)) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);
