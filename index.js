//data
var teams = [
    {
        "teamlogo": "MI",
        "teamname": "Mumbai Indians",
        "teamicon": "images/MI.png",
        "playercount": 4,
        "topbatsman": "Rohit Sharma",
        "topBowler": null,
        "championsowncount": 2,
        "players": [
            {
                "id": 0,
                "playerName": "Hardhik Pandya",
                "playerphoto": "images/player/hardhik.png",
                "from": "MI",
                "price": "6.50 cr",
                "isplaying": true,
                "description": "All Rounder"
            },
            {
                "id": 2,
                "playerName": "Yuvraj Singh",
                "playerphoto": "images/player/yuvraj.png",
                "from": "MI",
                "price": "1 cr",
                "isplaying": false,
                "description": "Batsman"
            },
            {
                "id": 5,
                "playerName": "Rohit Sharma",
                "playerphoto": "images/player/rohit.png",
                "from": "MI",
                "price": "6.50 cr",
                "isplaying": true,
                "description": "Batsman"
            },
            {
                "id": 6,
                "playerName": "Ishan Kishan",
                "playerphoto": "images/player/ishan.png",
                "from": "MI",
                "price": "2.50 cr",
                "isplaying": true,
                "description": "Batsman"
            }
        ]
    },
    {
        "teamlogo": "CSK",
        "teamname": "Chennai Super kings",
        "teamicon": "images/CSk.png",
        "playercount": 1,
        "topbatsman": "MS Dhoni",
        "topBowler": null,
        "championsowncount": 3,
        "players": [{
            "id": 7,
            "playerName": "MS Dhoni",
            "playerphoto": "images/player/dhoni.png",
            "from": "CSK",
            "price": "8 cr",
            "isplaying": true,
            "description": "Batsman"
        }]
    },
    {
        "teamlogo": "RCB",
        "teamname": "Royal Challengers Bangalore",
        "teamicon": "images/RCB.png",
        "playercount": 2,
        "topbatsman": "Virat Kohli",
        "topBowler": null,
        "championsowncount": 0,
        "players": [
            {
                "id": 1,
                "playerName": "Virat Kohli",
                "playerphoto": "images/player/virat.png",
                "from": "RCb",
                "price": "8 cr",
                "isplaying": true,
                "description": "Batsman"
            },
            {
                "id": 4,
                "playerName": "Glen Maxwell",
                "playerphoto": "images/player/maxwell.png",
                "from": "RCB",
                "price": "14.25 cr",
                "isplaying": true,
                "description": "All Rounder"
            }
        ]
    },
    {
        "teamlogo": "RR",
        "teamname": "Rajasthan Royals",
        "teamicon": "images/RR.png",
        "playercount": 2,
        "topbatsman": null,
        "topBowler": null,
        "championsowncount": 0,
        "players": [{
            "id": 3,
            "playerName": "Chris Moris",
            "playerphoto": "images/player/morish.png",
            "from": "RR",
            "price": "16.25 cr",
            "isplaying": true,
            "description": "All Rounder"
        }]
    },
    {
        "teamlogo": "SRH",
        "teamname": "Sunrisers Hyderabad",
        "teamicon": "images/SRH.png",
        "playercount": 2,
        "topbatsman": null,
        "topBowler": null,
        "championsowncount": 1,
        "players": []
    },
    {
        "teamlogo": "KKR",
        "teamname": "Kolkata Knight Riders",
        "teamicon": "images/KKR.png",
        "playercount": 2,
        "topbatsman": null,
        "topBowler": null,
        "championsowncount": 2,
        "players": []
    },
    {
        "teamlogo": "DC",
        "teamname": "Delhi Capitals",
        "teamicon": "images/DC.png",
        "playercount": 2,
        "topbatsman": null,
        "topBowler": null,
        "championsowncount": 0,
        "players": []
    },
    {
        "teamlogo": "PK",
        "teamname": "Punjab Kings",
        "teamicon": "images/PK.png",
        "playercount": 2,
        "topbatsman": null,
        "topBowler": null,
        "championsowncount": 0,
        "players": []
    }
];





function loadDoc() {

    let teamDetails = JSON.parse(window.localStorage.getItem('teams'));
    console.log(teamDetails);
    if (teamDetails != null && teamDetails.length > 0) {
        // index.html
        let grid = document.getElementById("teams-grid");
        teamDetails.forEach((item) => {
            let teamCards = document.createElement("div");
            teamCards.className = 'TeamCards';
            teamCards.innerHTML = '<div class="TeamImage"><img src="' + item.teamicon + '"></div>';
            teamCards.innerHTML += '<div class="title"><h1>' + item.teamlogo + '</h1></div>';
            teamCards.innerHTML += '<a href="TeamDetails.html?' + item.teamlogo + '" class="yo">read more</a>';
            grid.appendChild(teamCards);
        });
    } else {
        window.localStorage.setItem('teams', JSON.stringify(teams));
        loadDoc();
    }
}




function TeamLoadDoc() {
    let teamId = window.location.href.split('?')[1];
    console.log(teamId);
    // teamdetails.html
    let container = document.getElementById("container");
    let teamDetls = JSON.parse(window.localStorage.getItem('teams'));
    teamDetls.forEach((item) => {
        if (item.teamlogo === teamId) {
            let teamdetails = document.createElement("div");
            teamdetails.className = 'TeamDetails';
            console.log(item);
            if (item.teamname != null)
                teamdetails.innerHTML += '<div class="teamname"><h6 class="details">Team name : </h6>' + item.teamname + '</div>';

            if (item.teamicon != null)
                teamdetails.innerHTML += '<div class="teamicon-1"><img src="' + item.teamicon + '"</div>';

            if (item.playercount != null)
                teamdetails.innerHTML += '<div class="playercount"><h6 class="details">Player Count : <br></h6>' + item.playercount + '</div>';

            if (item.topbatsman != null)
                teamdetails.innerHTML += '<div class="topbatsman"><h6 class="details">Top Batsman : </h6>' + item.topbatsman + '</div>';

            if (item.topBowler != null)
                teamdetails.innerHTML += '<div class="topbowler"><h6 class="details">Top Bowler :</h6>' + item.topBowler + '</div>';

            if (item.championsowncount != null)
                teamdetails.innerHTML += '<div class="championsowncount"><h6 class="details">Champions Own Count :</h6>' + item.championsowncount + '</div>';

            if (item.players != null) {
                teamdetails.innerHTML += '<h6 class="details">Players :</h6>';
                for (let i = 0; i < item.players.length; i++) {
                    teamdetails.innerHTML += '<a href=PlayerDetails.html?' + item.players[i].id + '>' +
                        //card code start
                        '<h3>' + item.players[i].playerName + '</h3>'
                        //card code end
                        + '</a>';
                }
            }
            container.appendChild(teamdetails);
        }

    });
}
