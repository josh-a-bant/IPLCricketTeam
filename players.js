playersDtl = [
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
    },
    {
        "id": 7,
        "playerName": "MS Dhoni",
        "playerphoto": "images/player/dhoni.png",
        "from": "CSK",
        "price": "8 cr",
        "isplaying": true,
        "description": "Batsman"
    },
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
    },
    {
        "id": 3,
        "playerName": "Chris Moris",
        "playerphoto": "images/player/morish.png",
        "from": "RR",
        "price": "16.25 cr",
        "isplaying": true,
        "description": "All Rounder"
    }
];


//playeretails
function PlayersLoadDoc() {
    let playerId = window.location.href.split('?')[1];
    let players = JSON.parse(window.localStorage.getItem('players'));

    if (players != null && players.length > 0) {
        console.log(playerId);
        let playerDetailsDiv = document.getElementById('playerdetails');

        players.forEach(element => {
            if (playerId == element.id) {
                //create html

                //name
                let playerName = document.createElement("div");
                playerName.className = 'name';
                playerName.innerHTML = ' <h3 class="details">Name :</h3> <h2 class="playername">' + element.playerName + '</h2>';
                playerDetailsDiv.appendChild(playerName);

                //player photo
                let playerPhoto = document.createElement("div");
                playerPhoto.className = 'playerphoto';
                playerPhoto.innerHTML = ' <h3 class="details"><img class="photo" src="' + element.playerphoto + '"</h2>';
                playerDetailsDiv.appendChild(playerPhoto);

                //teamName
                let teamName = document.createElement("div");
                teamName.className = 'team';
                teamName.innerHTML = ' <h3 class="details">Team :</h3> <h2 class="teamname">' + element.from + '</h2>';
                playerDetailsDiv.appendChild(teamName);

                //price
                let playerPrice = document.createElement("div");
                playerPrice.className = 'price';
                playerPrice.innerHTML = ' <h3 class="details">Price :</h3> <h2 class="amount">' + element.price + '</h2>';
                playerDetailsDiv.appendChild(playerPrice);

                //isPlaying
                let isPlaying = document.createElement("div");
                isPlaying.className = 'playingstatus';
                isPlaying.innerHTML = ' <h3 class="details">is Playing :</h3> <h2 class="status">' + element.isplaying + '</h2>';
                playerDetailsDiv.appendChild(isPlaying);

                //description
                let Description = document.createElement("div");
                Description.className = 'playingrole';
                Description.innerHTML = ' <h3 class="details">Playing Role :</h3> <h2 class="role">' + element.description + '</h2>';
                playerDetailsDiv.appendChild(Description);


            }

        });
    } else {
        window.localStorage.setItem('players', JSON.stringify(this.playersDtl));
        PlayersLoadDoc();
    }



}