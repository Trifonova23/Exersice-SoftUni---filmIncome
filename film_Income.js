function filmIncome(input) {
  let filmName = Number(input[0]);
  let dayCount = Number(input[1]); //Count days
  let ticketsCount = Number(input[2]); // Count tickets
  let ticketPrice = Number(input[3]); // Price tickets
  let procentageForCinema = Number(input[4]); //% for the studio
  let sumTicketsForDay = 0; //Total sum from teh tickets per day
  let allIncomeForAllPeriof = 0; //Income for all perios

  let allIncomeForTheFilm = 0; //Total income for the film

  sumTicketsForDay = ticketsCount * ticketPrice;
  allIncomeForAllPeriof = dayCount * sumTicketsForDay;
  procentageForCinema = (procentageForCinema * allIncomeForAllPeriof) / 100;
  allIncomeForTheFilm = allIncomeForAllPeriof - procentageForCinema;

  console.log(
    `The profi from the movie ${filmName} is ${allIncomeForTheFilm.toFixed(2)}`
  );
}
filmIncome(["The Programmer", "20", "500", "7.50", "7"]);
