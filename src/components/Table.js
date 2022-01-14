import WhiteLogo from "../assets/w-logo.png";
import Players from "../assets/players.json";

export default function Table() {
  return (
    <>
      <div className="table-players">
        <img className="white-logo" src={WhiteLogo}></img>
        <h2>#Top 3 Premier League Soccers 2021-2022 </h2>
        {Players.map((player, index) => (
          <div key={index} className="soccer-row">
            <div className="rank">#{player.rank}</div>
            <img
              className="player-img"
              src={player["player-photo"]}
            ></img>
            <div className="player-name">{player["player-name"]}</div>
            <img className="player-team" src={player["team-url"]}></img>
            <img
              className="player-nation-team"
              src={player["nation-url"]}
            ></img>
            <div className="points">{player.goals}</div>
          </div>
        ))}
      </div>
    </>
  );
}
