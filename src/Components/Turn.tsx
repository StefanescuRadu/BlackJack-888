import {BALANCE, SESSION_ID, ROUND_ENDED, WIN_AMOUNT, PLAYER_CARDS, DEALER_CARDS} from "../Store";
import {fetchPost} from "../Util";
import {useAtom} from "jotai";

const Turn = () => {

    const [balance, setBalance] = useAtom(BALANCE);
    const [session] = useAtom(SESSION_ID);
    const [roundEnded,setRoundEnded] = useAtom(ROUND_ENDED);
    const [winAmount,setWinAmount] = useAtom(WIN_AMOUNT);
    const [playerCards,setPlayerCards] = useAtom(PLAYER_CARDS)
    const [dealerCards,setDealerCards] = useAtom(DEALER_CARDS)

    const handleFetch = async (e:any) => {
        const response = await fetchPost("/turn", {
            "action": e.targe.value,
            "sessionId": session
        })
        // @ts-ignore
        setDealerCards(cards => [...cards, response!.data["dealerCards"]])
        // @ts-ignore
        setPlayerCards(cards => [...cards, response!.data["playerCard"]])
        setRoundEnded(response!.data["roundEnded"])
        setWinAmount(response!.data["winAmount"])
        setBalance(response!.data["currentBalance"])

    }
    return (
        <div>
            {session &&
            <>
                <button value="hit"  onClick={ e => handleFetch(e)}>Hit</button>
                <button value="stay" onClick={ e=> handleFetch(e)}>Stay</button>
                {roundEnded && <h1>Win amount: {winAmount}</h1>}
            </>}
        </div>


    )
}
export default Turn;
