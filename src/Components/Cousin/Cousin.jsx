import Lover from "../Lover/Lover";

const Cousin = ( {name, asset} ) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                {asset && <Lover asset={asset}></Lover>}
                {name === 'Mim' && <Lover asset={asset}></Lover>}
            </section>
        </div>
    );
};

export default Cousin;