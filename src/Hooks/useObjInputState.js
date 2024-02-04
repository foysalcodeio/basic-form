import { useState } from "react"

const useObjInputState = (defaultValue=null) =>  {
    const [value, setValue] = useState(defaultValue)
    const onChange = (e) => {
        setValue(e.target.value)
    }
    return{
        value, 
        onChange
    }
}

export default useObjInputState;