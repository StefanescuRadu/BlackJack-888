import {BET, BET_VALUES,BALANCE} from "../Store";
import {useAtom} from "jotai";

const Bet = () => {

    const [bet, setBet] = useAtom(BET);
    const [betValues, setBetValues] = useAtom(BET_VALUES);
    const [balance] = useAtom(BALANCE);

    const handleBet = (e: any) => {
        setBet(e.target.value)
    }

    return (

        <div>
            <h1>Blackjack!</h1>
            <p>{balance}</p>
            <p>Bet value: {bet}</p>
            {betValues?.map(bet => (
                <button value={bet} onClick={e => handleBet(e)}>{bet}</button>
            ))}
        </div>

    )
}

export default Bet;
