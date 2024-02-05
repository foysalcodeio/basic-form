import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Lover = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Special Person</h2>
            <p>has : {asset}</p>
            <p>also has : {gift}</p>
        </div>
    );
};

export default Lover;