 import {useState} from "react";
 import React, { useRef} from "react";

 function SubmitData(){

     const [list, setList] = useState([]);
     const [dataInput, setDataInput] = useState("");


     const UserNameInput = useRef();
     const FullNameInput = useRef();
     const AgeInput = useRef();

     const addPerson =(person) =>{

         const enteredUserName = UserNameInput.current.value;
         const enteredFullName = FullNameInput.current.value;
         const enteredAge = AgeInput.current.value;

         const newPerson = {
             id: Math.random(),
             userName: enteredUserName,
             fullName: enteredFullName,
             age: enteredAge


         }

         //add to list
         setList([...list, newPerson]);

         setDataInput("");


     }



     return(
         <div className="list">
             <h1>UserName</h1>
            <input  type="text"
                    ref={UserNameInput}
            />
             <h2>FullName</h2>
             <input type="text"
                    ref={FullNameInput}
             />
             <h2>Age</h2>
             <input type="text"
                   ref={AgeInput}
             />

             <button onClick={() => addPerson(dataInput)}>
                 Add
             </button>

             <ul>
                 {list.map((person) => (
                     <li key={person.id}>
                         {person.userName}
                         {person.fullName}
                         {person.age}
                     </li>
                 ))}
             </ul>
         </div>
     );

}

export default SubmitData;