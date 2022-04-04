import {DEALER_CARDS, SESSION_ID, PLAYER_CARDS, ROUND_ENDED, WIN_AMOUNT, BET} from "../Store";
import {fetchPost} from "../Util";
import {useAtom} from "jotai";

const Deal = () => {

    const [session] = useAtom(SESSION_ID);
    const [dealerCards,setDealerCards] = useAtom(DEALER_CARDS);
    const [playerCards,setPlayerCards] = useAtom(PLAYER_CARDS);
    const [roundEnded,setRoundEnded] = useAtom(ROUND_ENDED);
    const [winAmount,setWinAmount] = useAtom(WIN_AMOUNT);
    const [bet] = useAtom(BET);


    const handleDeal = async () => {
        const response = await fetchPost("/deal", {
            "bet": bet,
            "sessionId": session
        })
        setDealerCards(response!.data["dealerCards"])
        setPlayerCards(response!.data["playerCards"])
        setRoundEnded(response!.data["roundEnded"])
        setWinAmount(response!.data["winAmount"])
    }
    return (
        <div>
            {session &&
            <>
                <button onClick={handleDeal}>Deal</button>
            </>}
        </div>



    )
}
export default Deal;
