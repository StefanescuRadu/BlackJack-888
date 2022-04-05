import {useAtom} from "jotai";
import {ROUND_ENDED, SESSION_ID, WIN_AMOUNT} from "../Store";

const Result = () => {

    const [session] = useAtom(SESSION_ID);
    const [roundEnded] = useAtom(ROUND_ENDED);
    const [winAmount] = useAtom(WIN_AMOUNT);

    return (
        <div>
            {session && roundEnded && winAmount! > 0 && <h1>You won: {winAmount}</h1>}
            {session && roundEnded && winAmount! < 0 && <h1>You lost: {winAmount}</h1>}
        </div>

    )
}

export default Result;
