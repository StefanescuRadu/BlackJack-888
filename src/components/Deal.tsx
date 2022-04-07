import {BALANCE, BET, DEALER_CARDS, PLAYER_CARDS, ROUND_ENDED, SESSION_ID, WIN_AMOUNT} from "../Store";
import {fetchPost} from "../Util";
import {useAtom} from "jotai";
import {useEffect} from "react";

const Deal = () => {

    const [session] = useAtom(SESSION_ID);
    const [, setDealerCards] = useAtom(DEALER_CARDS);
    const [playerCards, setPlayerCards] = useAtom(PLAYER_CARDS);
    const [roundEnded, setRoundEnded] = useAtom(ROUND_ENDED);
    const [winAmount, setWinAmount] = useAtom(WIN_AMOUNT);
    const [bet, setBet] = useAtom(BET);
    const [, setBalance] = useAtom(BALANCE);

    const handleDeal = async () => {
        const response = await fetchPost("/deal", {
            "bet": bet,
            "sessionId": session
        })
        setDealerCards(response!.data["dealerCards"])
        setPlayerCards(response!.data["playerCards"])
        setRoundEnded(response!.data["roundEnded"])
        setWinAmount(response!.data["winAmount"])
        setBalance(response!.data["currentBalance"])
    }

    useEffect(() => {
        if (winAmount) {
            setTimeout(() => {
                setBet(null);
                setDealerCards([])
                setWinAmount(null);
                setPlayerCards([]);
            }, 5000)
        }
    }, [winAmount, setBet, setDealerCards, setWinAmount, setPlayerCards])

    return (
        <div>
            {session && roundEnded && playerCards.length === 0 &&
            <div>
                {bet && <button onClick={handleDeal}>Deal</button>}
            </div>}
        </div>
    )
}

export default Deal;
