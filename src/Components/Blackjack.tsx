import Sit from "./Sit";
import Deal from "./Deal";
import Cards from "./Cards";
import Bet from "./Bet";
import Turn from "./Turn";
import Stand from "./Stand";

const Blackjack = () => {


    return (
        <div>
            <Sit/>
            <Bet/>
            <Deal/>
            <Cards/>
            <Turn/>
            <Stand/>
        </div>

    )
}

export default Blackjack;
