// import Sit from "./Sit";
// import Deal from "./Deal";
// import Cards from "./Cards";
// import Turn from "./Turn";
// import Stand from "./Stand";
// import Page from "./Page";

import Sit from "./Sit";
import Page from "./Page";
import Deal from "./Deal";
import Stand from "./Stand";
import Cards from "./Cards";
import Turn from "./Turn";

const Blackjack = () => {

    return (
        <div>
            <Sit/>
            <Page/>
            <div className="flex">
                <Deal/>
                <Stand/>
            </div>
            <Cards/>
            <Turn/>
        </div>
    )
}

export default Blackjack;
