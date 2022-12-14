function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games, group, fase) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =

createCard(
  "13/12",
  "Semifinal",
  createGame("argentina", "3 x 0", "croatia"))+

  createCard(
    "14/12",
    "Semifinal",
    createGame("france", "16:00", "morocco")
  ) +

  createCard(
    "17/12",
    "Terceiro lugar",
    createGame("croatia", "12:00", "morocco")
  )+


  createCard(
    "18/12",
    "Final",
    createGame("france", "12:00", "argentina")
  )

  
