fetch("https://fantasy.premierleague.com/api/my-team/43929/", {mode: 'no-cors'})
    .then(response => response.json())
    .then(data => {
        // Use data to create HTML elements
        let teamTable = document.getElementById("team-table");
        data.players.forEach(player => {
            let row = document.createElement("tr");
            let name = document.createElement("td");
            name.innerHTML = player.first_name + " " + player.second_name;
            row.appendChild(name);
            teamTable.appendChild(row);
        });
    });