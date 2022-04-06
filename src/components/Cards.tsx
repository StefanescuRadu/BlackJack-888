import {DEALER_CARDS, PLAYER_CARDS, SESSION_ID} from "../Store";
import {useAtom} from "jotai";

const Cards = () => {

    const [dealerCards] = useAtom(DEALER_CARDS);
    const [playerCards] = useAtom(PLAYER_CARDS);
    const [session] = useAtom(SESSION_ID);

    return (
        <div>
            {session &&
            <div>
                {playerCards.length != 0 && <div>
                    <h1>Player Cards</h1>
                    <div className="flex">
                        {playerCards.map((card, index) => (
                            <div key={index} className="card">
                                <p>{card["rank"]}</p>
                                <p>{card["suite"]}</p>
                            </div>))}
                    </div>
                </div>}

                {dealerCards.length != 0 && <div>
                    <h1>Dealer Cards</h1>
                    <div className="flex">
                        {dealerCards.map((card, index) => (
                            <div key={index} className="card">
                                <p>{card["rank"]}</p>
                                <p>{card["suite"]}</p>
                            </div>))}
                    </div>
                </div>
                }
            </div>}
        </div>
    )
}

export default Cards;
