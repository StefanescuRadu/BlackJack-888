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
import {useEffect} from "react";

const Stand = () => {


    const [session, setSession] = useAtom(SESSION_ID);
    const [, setRoundsPlayed] = useAtom(ROUNDS_PLAYED);
    const [, setTotalWin] = useAtom(TOTAL_WIN_AMOUNT);
    const [roundEnded] = useAtom(ROUND_ENDED);
    const [playerCards, setPlayerCards] = useAtom(PLAYER_CARDS);
    const [, setDealerCards] = useAtom(DEALER_CARDS);
    const [, setWinAmount] = useAtom(WIN_AMOUNT);
    const [, setBet] = useAtom(BET);
    const [balance, setBalance] = useAtom(BALANCE);

    const standOut = () => {
        setTimeout(() => {
            handleStand()
        }, 3000)
    }

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

    useEffect(() => {
        balance == 0 && standOut()

    }, [balance])

    return (
        <div>
            {session && roundEnded && playerCards.length == 0 &&
            <div>
                <button onClick={handleStand}>Stand</button>
            </div>}
        </div>


    )
}
export default Stand;
