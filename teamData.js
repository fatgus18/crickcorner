var teamPlayers = {};

function addPlayerToTeam(team, playerName) {
  if (!teamPlayers[team]) {
    teamPlayers[team] = [];
  }
  teamPlayers[team].push(playerName);
}

function updateTeamPages() {
  var teams = document.querySelectorAll('.team');
  teams.forEach(function(team) {
    var teamName = team.querySelector('h3').innerText;
    var players = teamPlayers[teamName];
    if (players && players.length > 0) {
      var playersList = document.createElement('ul');
      players.forEach(function(player) {
        var playerItem = document.createElement('li');
        playerItem.textContent = player;
        playersList.appendChild(playerItem);
      });
      team.appendChild(playersList);
    }
  });
}

function submitRegistration(event) {
  event.preventDefault(); 

  var fullName = document.getElementById("fullName").value;
  var teamSelection = document.getElementById("teamSelection").value;


  addPlayerToTeam(teamSelection, fullName);

  updateTeamPages();

  alert("Player information submitted!");
}

var submitButton = document.querySelector("#registrationForm button[type='submit']");
submitButton.addEventListener("click", submitRegistration);
