import {useAtom} from "jotai";
import {BALANCE} from "../Store";

const Balance = () => {

    const [balance] = useAtom(BALANCE);

    return <h1>Balance: {balance}</h1>
}

export default Balance;
