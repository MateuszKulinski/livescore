import React, {
  useState,
  useEffect
} from 'react';

function Match(props) {
  const [homeTeam, setHomeTeam] = useState(props.match.homeTeam.name);
  const [awayTeam, setAwayTeam] = useState(props.match.awayTeam.name);

  useEffect(async () => {
    console.log(props.match.awayTeam.name);
  }, [])
  return ( <li>{homeTeam} vs {awayTeam}</li>)
}

export default Match;