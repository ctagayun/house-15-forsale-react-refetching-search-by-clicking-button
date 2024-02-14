/*
Concepts to Remember:
     Visit this link for the detailed explanation when useEffect fires:

     https://app.pluralsight.com/ilx/video-courses/9a3771fa-626e-4708-8634-c49cc8616922/4b5d269c-f9d9-4c3e-9806-ce1374a69d83/e36f10bb-acb4-4470-ae9e-285eb9031758    
  
 useEffect hook - whenever we use something that's outside the realm of React
  such API interaction, timer interactions, etc gives unpredictable results because it is 
  not PURE FUNCTION. For example api might not be available or 
  encounter error, we need to handle side-effects by useEffect hook.
    To perform an effect in the function component, React automatically 
  runs useEffect hook after running the components pure function and 
  the browser has been updated. 

    useEffect takes functions as paameters. In the fucntion, the effect 
  is performed. For example we can fetch data from an API for example
===============================================
Current Task Refetch Data:

   - make search a server-side search
    

    Since we fetch data with a predefined query (in this case: 'react'), 
    we consistently see stories related to "React." Despite having a 
    search feature, it can only filter existing stories. Therefore, 
    the search feature is termed a client-side search because it operates 
    solely on the available data, WITHOUT INTERACTING with the remote API.

    Hints:

      - delete searchHouses - (A)

      - The calculated value stateOfSearchComponent can be omitted as we 
    anticipate filtered data directly from the API.  (B)
    
      - In the data retrieval process, replace the hardcoded 'react' 
    with the dynamic searchTerm. (C)

      - add stateOfSearchComponent (D) to the dependency array of useEffect

===============================================
Previous Task: Using Reducer Hook
  
Interview Questions ReducerHook:
  Question: What is useReducer in React?
    Answer: useReducer is a React hook that manages complex 
    state logic in function components by dispatching actions 
    to update state.
      
  Question: How does useReducer differ from useState in React?
    Answer: While useState is simpler for managing individual 
    state variables, useReducer is more suitable for complex state 
    logic where multiple values depend on each other.

  Question: What is the basic structure of the useReducer hook?
    Answer: It returns the current state and a dispatch function 
    for triggering state updates, taking a reducer function and 
    an initial state as arguments.

  Question: What is a reducer function in useReducer?
    Answer: The reducer function is responsible for specifying how 
    the state should change in response to dispatched actions, 
    based on the current state and the action. Reducer function 
    is an argument to ReducerDispatch()

  Question: How is state updated using useReducer?
    Answer: State is updated by dispatching actions, and the reducer 
    function determines the new state based on the current state 
    and the action type.

  Question: Can useReducer replace all use cases of useState in React?
    Answer: While useReducer is powerful, it's not necessary for 
    all scenarios. useState is simpler and more suitable for managing 
    individual state variables. 

====================================================
Prev  Task: - show a loading indicator
     In order to show a loading indicator, one would need to introduce 
     a new stateful value. A boolean called isLoading may be the best solution.

     - When the side-effect which loads the data kicks in, set the stateful 
     boolean to true. Once the data loaded, set the stateful boolean to 
     false again.

     - In JSX, show a "Loading ..." text conditionally when the isLoading 
     boolean is set to true.

===================================================
Prev Task: Inline Handler in JSX:
  Task: The application renders a list of items and allows 
its users to filter the list via a search feature. Next the 
application should render a button next to each list item 
which allows its users to remove the item from the list.
  Optional Hints:

   -The list of items needs to become a stateful value 
   (here: stateful array) with useState in order to manipulate 
   it (e.g. removing an item) later.

   - Every list item renders a button with a click handler. 
   When clicking the button, the item gets removed from the 
   list by manipulating the state.

   - Since the stateful list resides in the App component, 
    one needs to use callback handlers to enable the Item 
    component to communicate up to the App component for 
    removing an item by its identifier.
===============================================================
 Previous Task: Side Effect    
    Note: Whenever we use something that's outside the realm of React
  such API interaction gives unpredictable results because it is 
  not PURE FUNCTION. For example api might not be available or 
  encounter error, we need to handle side-effects by useEffect hook.

    This exercise will implement a feature that will enable Search component
 to remember the most recent searched. 

    Let's implement this feature by using a side-effect to store the recent search 
 from the browser's local storage and retrieve it upon the initial component 
 initialization. First, use the local storage to store the searchTerm accompanied
  by an identifier whenever a user types into the HTML input field:

   What is useEffect?
      - Use useEffect Hook to trigger the desired side-effect each time 
     the searchTerm changes:

      - Use effect automatically runs after React completes running
      the component pure functions and the browser has been updated.
      In the function the "EFFECT" is performed. So we can fetch data
      from an API for example.
 ==============================================================
 Previous Task: React Controlled Components Task:
    - we modified the Search component. We added the value attribute
      
    <div className="float-start ">
            <label htmlFor="search">Search:</label>
            <input id="search" 
              value={props.search} <-- We added the value attribute
              type="text"
              onChange={props.onSearch}/> 
            <p> 
              Searching for <strong>{props.search}</strong>
            </p>
        </div>
    
    Here we added a "value" attribute instead of giving the 
    html element the freedom of keeping track of its internal state.
    Instead React uses state by leveraging the "value" attribute.
    Whenever the HTML search ox element emits change event the NEW VALUE 
    is WRITTEN to React states and RE-RENDERS the component. Then
    the HTML element uses the recent state as value again.
    
    - As a result because of the "value" attribute the input textbox 
      became EXPLICITLY controlled element and Search component became 
      IMPLICITLY a controlled component.

    Interview Questions:
      Question 1: What is a controlled component in React?
        Answer: A controlled component is a component whose 
               FORM elements are controlled by React state. 
                 
      Question 2: How do you create a controlled input in React?
       Answer: Set the input VALUE attribute to a state variable 
       and provide an onChange handler to update the state.

      Question 3: What is the role of the value prop in a controlled input element?
       Answer: The value prop sets the current value of the input, 
       making it a controlled component.

      Question 4: How do you handle a controlled checkbox in React?
         Answer: Use the checked attribute and provide an 
         onChange handler to update the corresponding state.

      Question 5: How do you clear the value of a controlled component?
        Answer: Set the state variable to an empty or null value to 
        clear the value of a controlled component.

      Question 6 : What are the potential downsides of using controlled 
      components?
        Answer: Controlled components can lead to verbose code, 
        especially in forms with many input elements. 
  ===============================================================     
  Previous Tasks:
    - create a search component
    - add code to display only the houses based on the search
      result.
    - add instantiation of Search component in App.jsx

  ===============================================================     
  Previous Task:
     - Create HouseList component
     - see discussion about React state in HouseList component.
     
  ===============================================================     

  Previous Task:
  Setup: 
    npm install bootstrap
    Once the installation is complete, we can include it in our app’s 
    entry file in main.jsx :
    --  Bootstrap CSS
    import "bootstrap/dist/css/bootstrap.min.css";
    -- Bootstrap Bundle JS
    import "bootstrap/dist/js/bootstrap.bundle.min";

    Now since we created the project with Vite, we can rely 
    on Vite's plugins to integrate ESLint properly. Run the 
    following command
       npm install vite-plugin-eslint --save-dev
    */
import * as React from 'react';
import './App.css'
import Header from "./header";
import List from './house/List';
import Search from './house/search';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';
/* The following  is a custom hook that will store the state in a 
  local storage. useStorageState which will keep the component's 
  state in sync with the browser's local storage.

This custom hook returns
  1. state 
  2. and a state updater function
and accepts an initial state as argument. 

  This is the custom hook before it was refactored to make it generic:
  const [searchTerm, setSearchTerm] = React.useState(''); 
    1. searchTerm renamed to 'value'
    2. setSearchTerm renamed to 'setValue'
*/
  const useStorageState = (key, initialState) => {
      const [value, setValue] = React.useState(
          localStorage.getItem('key') || initialState 
      );
      
      React.useEffect(() => {
        console.log('useEffect fired. Displaying value of dependency array ' + [ value, key]  );
          localStorage.setItem(key, value);  
          },
          [value, key]   //Dependency array
          ); //EOF useEffect
      
      //the returned values are returned as an array.
      return [value, setValue]; 
  
  } //EOF create custom hook
    
     
const App = () => {

   const welcome = {
     subject: 'List of ',
     title: 'Houses for Sale',
   };
 
  /* Call custom useStorageState hook to assign value to stateOfSearchComponent, 
  setSearchTerm */
  const [stateOfSearchComponent, setSearchTerm] =  useStorageState ( //<-- custom hook
    'search', //key
    'React',  //Initial state
    );

    //useState for state called URL - this is 
    //to be used in submit button to trigger search
    const [url, setUrl] = React.useState(
      `${API_ENDPOINT}${stateOfSearchComponent}`
    );

  /* Step 1: Steps in using React.useReducer:
      First create a reducer function called housesReducer.
   We will replace React.useState with React.useReducer.
      The reducer function is responsible for specifying how 
   the state should change in response to dispatched actions, 
   based on the current state and the action.
  */
  
   const housesReducer = (state, action) => { //always receives a state and action
      switch (action.type){ //this is what it means by reducer function
                            //specifies how should state change based
                            //on the "action" passed by the reducerDispatch()

        //Very impt: For every state transition, we return a new state object 
        //which contains all the key/value pairs from the current state object 
        //(via JavaScript's spread operator) and the new overwriting properties. 
        //For example, HOUSES_FETCH_FAILURE sets the isLoading boolean to false 
        //and sets the isError boolean to true, while keeping all the the other 
        //state intact (e.g. data alias houses).                     
        case 'HOUSES_FETCH_INIT':
          return {
            ...state,
            isLoading: true,
            isError: false,
          };

        case 'HOUSES_FETCH_FAILURE':
          return {
            ...state,
            isLoading: false,
            isError: true,
          };

        case 'HOUSES_FETCH_SUCCESS':
          return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload,
          };
        //case 'GET_HOUSES':
        //  return action.payload; //specifies how should state change  

        case 'DELETE_HOUSE':
          //return state.filter(
          //  (house) => action.payload.objectID !== house.objectID  
          //);
          //Observe how the DELETE_HOUSE action changed as well. 
          //It operates on the state.data, and no longer just on the 
          //plain state. The state is a complex object with data, isLoading, 
          //and error states rather than just a list of stories. This has 
          //to be solved in the remaining code by addressing the state as 
          //object and not as array anymore:
          return {
            ...state,
            data: state.data.filter(
              (house) => action.payload.objectID !== house.objectID
            ),
          };

        case 'ADD_HOUSE':
          return {
             ...state,
             data: state.action.payload 
          }

        default:
           throw new Error();
      }
       //action is always associated 
       //with a type and "payload".
       
      };

   // Step 2: In using REACT REDUCER:
   //First lets use a Reducer instead of const [houses, setHouses] = React.useState([]);
   //useState to manage state. The [] is the initial state

   //We will merge the following state into one reducer for a unified state
   //management:
   //Introduce another state called "isLoading" 
   //const [isLoading, setIsLoading] = React.useState(false);

   //Introduce another state called "isError"
   //const [isError, setIsError] = React.useState(false);

   //Since we cannot use the state updater functions from React's 
   //useState Hooks anymoreThe most straightforward approach is 
   //exchanging the state updater 
   //function with the dispatch function. Then the dispatch function 
   //receives a distinct type and a payload. 

   //const[houses, dispatchHouses] = React.useReducer(housesReducer, []);
   const[houses, dispatchHouses] = React.useReducer(
        housesReducer,
        {data: [], isLoading: false, isError: false} );

   //The new function receives a reducer function called "housesReducer"
   //(see line 251)
   //and empty array [] and returns an array with two items:
   //          houses (current state) and
   //          dispatchHouses (state updater function)
   //The updater function updates the state "houses" IMPLICITLY (A)
   //dispatching an "action" for the reducer, The "action" comes with:
   //
   //     1. Type
   //     2. and optional Payload
 
   

  /*Step 3: Handle all functions that modify state. 
     The first state transition function is 
          getAsyncHouses(). 
   
    It is a STATE transition becuase it fetches the data for the 'house" object.
    Modify useEffect to use "dispatchHouses" reducer function (B)
    We want to start off with an empty list of stories and simulate 
    fetching these stories asynchronously. In a new useEFFECT hook, call the 
    function and resolve the returned promise as a side-effect.*/
    React.useEffect(() => {   
       
     // if `stateOfSearchComponent` is not present  
     // e.g. null, empty string, undefined
     // do nothing
     // more generalized condition than searchTerm === ''
      if (!stateOfSearchComponent) return;   //(B)

      dispatchHouses({ type: 'HOUSES_FETCH_INIT' }); //type needed to be added to houseReducer
   
      fetch(`${API_ENDPOINT}${stateOfSearchComponent}`)  //(C) - dynamically append search criteria
      .then((response) => response.json())
      .then((result) => {
        dispatchHouses({
          type: 'HOUSES_FETCH_SUCCESS',
          payload: result.hits,
        });
      })
      .catch(() =>
        dispatchHouses({ type: 'HOUSES_FETCH_FAILURE' })
      );

      }, [stateOfSearchComponent]);  // (D) changed this from empty [] because we want
                              //we also want to run the side-effect when the 
                              //stateOfSearchComponent state changes
  /*  

    Next we write event handler which removes an item from HouseList
    Select the record from the state called 'houses' based on the filter
    Here, the JavaScript array's built-in filter method creates
    a new filtered array called 'house'.

      The filter() method takes a function as an argument, 
    which accesses each item in the array and returns /
    true or false. If the function returns true, meaning the condition is 
    met, the item stays in the newly created array; if the function 
    returns false, it's removed from the filtered array.

    Pass this handler to List component when instantiating the component

 STEP 4:The second state transition we want to handle using using 
    dispatchHouses() reducer function is:
         handleRemoveHouse().  
     It is another state transition becuase it deletes a record.

     This handler computes the new stories. It is the second state transition.
  It is valid to move this logic into the reducer function. Now the 
  reducer function has to cover this state in a conditional transition.
  See (B) in storiesReducer
    */
  const handleRemoveHouse = (item) => { 
       // const newHouses = houses.filter(   <== MOVE THIS LOGIC TO  HouseReducer()
       //  (house) => item.objectID !== house.objectID
       // );
      dispatchHouses({    //The second state transition that we need to handle is
                          //the DELETE record. This replaced setHouses(newHouses);
                          //Now add the TYPE and PAYLOAD and the business logic 
                          //to the HouseReducer() function to cover this new case.
        type: 'DELETE_HOUSE',
        payload: item,
      });
    };
  
  /*STEP 5:The third state transition we want to handle using  
     dispatchHouses() reducer function is: 
          handleAddHouse()  
    It is another state transition because it deletes a record.
   */
   
  //This is a function that call the state 
  //updater "setSearchTerm()" to update the state
  //called "stateOfSearchComponent" which contains 
  //the search criteria typed in the search text box
  const handleSearchInput = (event) => {
      setSearchTerm(event.target.value); 
   };

   const handleSearchSubmit = () => {
    setUrl(`${API_ENDPOINT}${stateOfSearchComponent}`);
  };

   //"house" is the array of houses newly created by the filter() method.
   //const searchedHouses = houses.filter((house) =>

   // (A) - Removed this because we will receive the stories filtered by 
   //search term from the API. Pass only 
   //the regular stories to the List component:
  //const searchedHouses = houses.data.filter((house) => //need to append "data.filter"
   //   house.title.toLowerCase().includes(stateOfSearchComponent.toLowerCase())
   // );
    

  
  return (
    <>
     <Header  headerText={welcome} />   

     <Search 
       id="search"
       value={stateOfSearchComponent}
       isFocused //pass imperatively a dedicated  prop. isFocused as an attribute is equivalent to isFocused={true}
       onInputChange={handleSearchInput}
       //onClick = {handleSearchSubmit}
      >
      </Search>
      <br></br>

      {houses.isError && <p>Error in fetching data...</p>}
      
      {houses.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List
          list={houses.data}  //"houses is the state of the React.reducer hook"
          onRemoveItem={handleRemoveHouse}
        />
      )}
    </>
 )}

export default App
