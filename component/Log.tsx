import { Player, Turn } from "@/data";

type LogProps = {
  turns: Turn[];
  players: Player[];
};

const Log: React.FC<LogProps> = ({ turns, players }) => {
  return (
    <>
      {turns.map((turn, index) => (
        <li key={index}>
          {players[index % players.length].name} selected ({turn.row},{turn.col}
          )
        </li>
      ))}
    </>
  );
};
export default Log;
