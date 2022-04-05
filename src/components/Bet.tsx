import {BALANCE, BET, BET_VALUES, SESSION_ID,ROUND_ENDED} from "../Store";
import {useAtom} from "jotai";

const Bet = () => {

    const [bet, setBet] = useAtom(BET);
    const [betValues] = useAtom(BET_VALUES);
    const [balance] = useAtom(BALANCE);
    const [session] = useAtom(SESSION_ID);
    const [roundEnded] = useAtom(ROUND_ENDED);

    const handleBet = (e: any) => {
        setBet(e.target.value)
    }

    return (

        <div>
            {session && roundEnded &&
            <div>
                {bet && <p>Bet value: {bet}</p>}
                {betValues!.map((bet,index) => {
                    if(balance! >=bet){
                        return <button key={index}  value={bet} onClick={e => handleBet(e)}>{bet}</button>
                    }
                })}
            </div>
            }
        </div>
    )
}

export default Bet;
