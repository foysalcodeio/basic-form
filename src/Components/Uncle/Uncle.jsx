import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={`primi`} asset={asset} />
                <Cousin name={`Mukta`} />
            </section>
        </div>
    );
};

export default Uncle;