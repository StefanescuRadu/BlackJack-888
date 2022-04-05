import {
    BALANCE,
    BET,
    DEALER_CARDS,
    PLAYER_CARDS,
    ROUND_ENDED,
    ROUNDS_PLAYED,
    SESSION_ID,
    TOTAL_WIN_AMOUNT,
    WIN_AMOUNT
} from "../Store";
import {fetchPost} from "../Util";
import {useAtom} from "jotai";

const Stand = () => {


    const [session, setSession] = useAtom(SESSION_ID);
    const [, setRoundsPlayed] = useAtom(ROUNDS_PLAYED);
    const [, setTotalWin] = useAtom(TOTAL_WIN_AMOUNT);
    const [roundEnded] = useAtom(ROUND_ENDED);
    const [, setPlayerCards] = useAtom(PLAYER_CARDS);
    const [, setDealerCards] = useAtom(DEALER_CARDS);
    const [, setWinAmount] = useAtom(WIN_AMOUNT);
    const [, setBet] = useAtom(BET);
    const [, setBalance] = useAtom(BALANCE);

    const handleStand = async () => {
        const response = await fetchPost("/stand", {
            "sessionId": session
        })
        setSession(null);
        setRoundsPlayed(response!.data["roundsPlayed"]);
        setTotalWin(response!.data["winAmount"]);
        setPlayerCards([]);
        setDealerCards([]);
        setWinAmount(null);
        setBet(null);
        setBalance(10);
    }

    return (
        <div>
            {session && roundEnded &&
            <div>
                <button onClick={handleStand}>Stand</button>
            </div>}
        </div>


    )
}
export default Stand;
