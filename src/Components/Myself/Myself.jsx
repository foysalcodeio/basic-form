import Lover from "../Lover/Lover";

const Myself = ({asset}) => {
    return (
        <div>
            <h2>myself</h2>
            <section className="flex">
                <Lover asset={asset} />
            </section>
        </div>
    );
};

export default Myself;