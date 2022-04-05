import Bet from "./Bet";
import Round from "./Round";
import TotalWin from "./TotalWin";
import Balance from "./Balance";

const Page = () => {

    return (
        <div>
            <Balance/>
            <Bet/>
            <Round/>
            <TotalWin/>
        </div>
    )
}

export default Page;
