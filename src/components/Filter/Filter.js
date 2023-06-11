import { useDispatch, useSelector } from "react-redux"

import { Input,  InputGroup, Box} from '@chakra-ui/react'


import { setFilter } from "redux/contacts/filtersSlice"

import { selectFilter } from "redux/contacts/selectors"

export const Filter=()=>{
    const dispatch=useDispatch()
    const filter=useSelector(selectFilter)
    
    return(<Box display='inline-grid' w='300px' justifyItems='center'>
    
      <p>Find contacts by name</p>

      <InputGroup mb='10px'>
    

    <Input type="text" name="filter"  value={filter}
    onChange={event=> dispatch(setFilter(event.target.value))} variant='filled'  pl='35px' mt='5px' mb='10px' />
    
  </InputGroup>

   
    </Box>)
}