import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetContext = createContext();
export const MoneyContext = createContext();

const Grandpa = () => {
    const [money, setMoney] = useState(1000)
    const asset = 'diamond';
    return (
        <div className="grandpa">
            <h2>Net money : {money}</h2>
            <h2>
                Grandpa
            </h2>
          <MoneyContext.Provider value={[money, setMoney]}>
          <AssetContext.Provider value="gold">
            <section className="flex">
                    <Dad asset={asset} />
                    <Uncle asset={asset} />
                    <Aunty />
            </section>
          </AssetContext.Provider>
          </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;


/**
 * create - use - provide
 * 
 * 1. Create a Context and export it
 * 2. Add provider for the context with a value. value could be anything
 * 3. useContext to access value in the context api
 */