import * as React from 'react';
import HouseRow from './houserow';
  /*
     This component will use the stateful searchStateFulVar from the 
   search component to filter the houseArray by their "country"
   property in the App component before they are passed as 
   props to the HouseList component

     This component will store the value of "search text box"
   in a local storage by using side effect.
    
     We'll use React's useEffect Hook to trigger the desired 
   side-effect each time the searchTerm changes

  */

  //There is a callback function in the App component called "searchHandler". 
  //This handler is passed as prop to SearchComponent when it is instantiated
  //in App component. The useState for this component is defined in App as well.
  //It looks like this:
  // const [searchTerm, setSearchTerm] = React.useState('');
  const Search = ({
    id,
    value,          //this prop was assigned {stateOfSearchComponent}
    type = 'text',
    onInputChange,
    isFocused,
    children,
    handleSearchSubmit
   }) => { 
     const inputRef = React.useRef();

    React.useEffect(() => {
       if (isFocused && inputRef.current) {
         inputRef.current.focus();
       }
     }, [isFocused]);

     return (
       <>
         <label htmlFor={id}>{children}</label>
         &nbsp;
         <input
           ref={inputRef}
           id={id}
           type={type}
           value={value}
           onInputChange={onInputChange}
         />
         <button //(AA) this button confirms the search and executes the data request.
        type="button"
        disabled={!value} //
        onClick={handleSearchSubmit} //CC
      >
        Submit
      </button>
       </>
     );
 };


export default Search;