import {BALANCE, DEALER_CARDS, PLAYER_CARDS, ROUND_ENDED, SESSION_ID, WIN_AMOUNT} from "../Store";
import {fetchPost} from "../Util";
import {useAtom} from "jotai";

const Turn = () => {

    const [, setBalance] = useAtom(BALANCE);
    const [session] = useAtom(SESSION_ID);
    const [roundEnded, setRoundEnded] = useAtom(ROUND_ENDED);
    const [, setWinAmount] = useAtom(WIN_AMOUNT);
    const [, setPlayerCards] = useAtom(PLAYER_CARDS)
    const [, setDealerCards] = useAtom(DEALER_CARDS)


    const handleStay = async () => {
        const response = await fetchPost("/turn", {
            "action": "stay",
            "sessionId": session
        })
        setDealerCards(response!.data["dealerCards"])
        setRoundEnded(response!.data["roundEnded"])
        setWinAmount(response!.data["winAmount"])
        setBalance(response!.data["currentBalance"])
    }

    const handleHit = async () => {
        const response = await fetchPost("/turn", {
            "action": "hit",
            "sessionId": session
        })
        setDealerCards(response!.data["dealerCards"])
        setPlayerCards(cards => [...cards, response!.data["playerCard"]])
        setRoundEnded(response!.data["roundEnded"])
        setWinAmount(response!.data["winAmount"])
        setBalance(response!.data["currentBalance"])
    }

    return (
        <div>
            {session && !roundEnded &&
            <div>
                <button value="hit" onClick={() => handleHit()}>Hit</button>
                <button value="stay" onClick={() => handleStay()}>Stay</button>
            </div>}
        </div>


    )
}
export default Turn;
