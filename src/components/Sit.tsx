import {BALANCE, BET_VALUES, SESSION_ID} from "../Store";
import {fetchPost} from "../Util";
import {useAtom} from "jotai";

const Sit = () => {

    const [balance, setBalance] = useAtom(BALANCE);
    const [session, setSession] = useAtom(SESSION_ID);
    const [, setBetValues] = useAtom(BET_VALUES);

    const handleChange = (e: any) => {
        setBalance(e.target.value)
    }
    const handleClick = async () => {
        const result = await fetchPost("/sit", {
            "balance": balance
        })
        setSession(result!.data["sessionId"]);
        setBetValues(result!.data["availableBetOptions"]);
    }

    return (
        <div>
            {!session &&
            <div>
                <h1>Blackjack!</h1>
                <p>Choose your balance</p>
                <input className="slider" type="range" min="10" max="1000" onChange={e => handleChange(e)}/>
                <button onClick={handleClick}>Sit</button>
            </div>}
        </div>
    )
}
export default Sit;
