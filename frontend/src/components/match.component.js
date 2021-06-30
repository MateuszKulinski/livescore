import React, {
  useState,
  useEffect
} from 'react';
import './../assets/match.scss'

function Match(props) {
  const [homeTeam, setHomeTeam] = useState(props.match.homeTeam.name);
  const [awayTeam, setAwayTeam] = useState(props.match.awayTeam.name);
  const [scoreHomeTeam, setScoreHomeTeam] = useState(props.match.score.fullTime.homeTeam);
  const [scoreAwayTeam, setScoreAwayTeam] = useState(props.match.score.fullTime.awayTeam);
  const [competitionName, setCompetitionName] = useState(props.match.competition.name);

  return (<div className="matchItem" title="Szczegóły">
    <div className="competitionsName">{competitionName}</div>
    <div className="particularMatch">
      <h6 className="particularClub">{homeTeam}</h6> <h6 className="particularScore">{scoreHomeTeam} - {scoreAwayTeam}</h6> <h6 className="particularClub">{awayTeam}</h6></div>
  </div>)
}

export default Match;