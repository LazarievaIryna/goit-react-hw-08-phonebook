import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "redux/contacts/filtersSlice"

import { selectFilter } from "redux/contacts/selectors"

export const Filter=()=>{
    const dispatch=useDispatch()
    const filter=useSelector(selectFilter)
    
    return(<>
    
      <p>Find contacts by name</p>
    <input type="text" 
    name="filter"
    value={filter}
    onChange={event=> dispatch(setFilter(event.target.value))} 
    />
    </>)
}