import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Dad = ({ asset }) => {
    return (
        <div>
            <h2 className="flex">Dad</h2>
            <section>
                <Myself asset={asset} />
                <Brother />
                <Sister />
            </section>
        </div>
    );
};

export default Dad;