import {BALANCE, BET, BET_VALUES, ROUND_ENDED, SESSION_ID,PLAYER_CARDS} from "../Store";
import {useAtom} from "jotai";

const Bet = () => {

    const [bet, setBet] = useAtom(BET);
    const [betValues] = useAtom(BET_VALUES);
    const [balance] = useAtom(BALANCE);
    const [session] = useAtom(SESSION_ID);
    const [roundEnded] = useAtom(ROUND_ENDED);
    const [playerCards] = useAtom(PLAYER_CARDS);

    const handleBet = (e: any) => {
        setBet(e.target.value)
    }

    return (

        <div>
            {session && roundEnded && playerCards.length == 0 &&
            <div>
                {bet && <p>Bet value: {bet}</p>}
                {betValues!.map((bet, index) => {
                    if (balance! >= bet) {
                        return <button key={index} value={bet} onClick={e => handleBet(e)}>{bet}</button>
                    }
                })}
            </div>
            }
        </div>
    )
}

export default Bet;
