import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Brother = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>This is brother</h2>
            <p>Money : {money}</p>
            <button onClick={ () => setMoney(money+2000)}>Add 2 thousand</button>
        </div>
    );
};

export default Brother;