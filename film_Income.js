function filmIncome(input) {
  let filmName = Number(input[0]);
  let dayCount = Number(input[1]); //брой дни
  let ticketsCount = Number(input[2]); // брой билети
  let ticketPrice = Number(input[3]); // цена на билет
  let procentageForCinema = Number(input[4]); //% за студиото
  let sumTicketsForDay = 0; //обща сума от билети за ден
  let allIncomeForAllPeriof = 0; // приход за целият период
  //   let incomePriceForStudio = 0; // % оставащ за студиото
  let allIncomeForTheFilm = 0; // общ приход от филма в лв

  sumTicketsForDay = ticketsCount * ticketPrice;
  allIncomeForAllPeriof = dayCount * sumTicketsForDay;
  procentageForCinema = (procentageForCinema * allIncomeForAllPeriof) / 100;
  allIncomeForTheFilm = allIncomeForAllPeriof - procentageForCinema;

  console.log(
    `The profi from the movie ${filmName} is ${allIncomeForTheFilm.toFixed(2)}`
  );
}
filmIncome(["The Programmer", "20", "500", "7.50", "7"]);
