import {BALANCE, BET, DEALER_CARDS, PLAYER_CARDS, ROUND_ENDED, SESSION_ID, WIN_AMOUNT} from "../Store";
import {fetchPost} from "../Util";
import {useAtom} from "jotai";

const Deal = () => {

    const [session] = useAtom(SESSION_ID);
    const [, setDealerCards] = useAtom(DEALER_CARDS);
    const [, setPlayerCards] = useAtom(PLAYER_CARDS);
    const [roundEnded, setRoundEnded] = useAtom(ROUND_ENDED);
    const [, setWinAmount] = useAtom(WIN_AMOUNT);
    const [bet] = useAtom(BET);
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
    return (
        <div>
            {session && roundEnded &&
            <div>
                {bet && <button onClick={handleDeal}>Deal</button>}
            </div>}
        </div>
    )
}
export default Deal;
