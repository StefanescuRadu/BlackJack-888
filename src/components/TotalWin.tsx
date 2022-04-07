import {useAtom} from "jotai";
import {ROUNDS_PLAYED, SESSION_ID, TOTAL_WIN_AMOUNT} from "../Store";

const TotalWin = () => {

    const [roundsPlayed] = useAtom(ROUNDS_PLAYED);
    const [session] = useAtom(SESSION_ID);
    const [totalWin] = useAtom(TOTAL_WIN_AMOUNT);

    return (
        <div>
            {roundsPlayed != null && !session &&
            <div>
                <p>You have played {roundsPlayed} rounds!</p>
                {totalWin! >= 0 && <p>You have won a total of {totalWin} $</p>}
                {totalWin! < 0 && <p>You have lost a total of {totalWin} $</p>}
            </div>
            }
        </div>
    )
}

export default TotalWin;
