import {DEALER_CARDS, PLAYER_CARDS} from "../Store";
import {useAtom} from "jotai";

const Cards = () => {

    const [dealerCards] = useAtom(DEALER_CARDS);
    const [playerCards] = useAtom(PLAYER_CARDS);

    return (
        <div>

            <h1>Player Cards</h1>
            {playerCards?.map(card => (
                <>
                    <p>{card["rank"]}</p>
                    <p>{card["suite"]}</p>
                </>
            ))}

            <h1>Dealer Cards</h1>
            {dealerCards?.map(card => (
                <>
                    <p>{card["rank"]}</p>
                    <p>{card["suite"]}</p>
                </>

            ))}

        </div>
    )
}

export default Cards;
