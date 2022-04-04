import {TOTAL_WIN_AMOUNT,SESSION_ID,ROUNDS_PLAYED} from "../Store";
import {fetchPost} from "../Util";
import {useAtom} from "jotai";

const Stand = () => {


    const [session,setSession] = useAtom(SESSION_ID);
    const [roundsPlayed,setRoundsPlayed] = useAtom(ROUNDS_PLAYED);
    const [totalWin,setTotalWin] = useAtom(TOTAL_WIN_AMOUNT);

    const handleStand = async () =>{
        const response = await fetchPost("/stand", {
            "sessionId": session
        })
        setSession(null);
        setRoundsPlayed(response!.data["roundsPlayed"])
        setTotalWin(response!.data["winAmount"])
    }


    return (
        <div>
            {!session &&
            <>
                <button onClick={handleStand}>Stand</button>
                <p>You have played {roundsPlayed} rounds!</p>
                <p>You have won a total of {totalWin} $</p>
            </>}
        </div>



    )
}
export default Stand;
