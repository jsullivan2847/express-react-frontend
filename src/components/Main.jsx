import { Route } from "react-router-dom";
import { useState, useEffect} from "react";
import Index from "../pages/Index";
import Show from "../pages/Show";

const Main = () => {

    const [people, setPeople] = useState(null);
    const URL = 'http://localhost:4000/people';
    
    //GET INDEX OF DATA
    const getPeople = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPeople(data);
    }

    //CREATE A PERSON
    const createPeople = async (person) => {
        await fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(person),
        });
        getPeople();
    }

    //EDIT A PERSON
    const updatePeople = async (person, id) => {
      //adds ID on to request URL 
      await fetch (URL + id, {
        method: 'PUT',
        headers: {
          "Content-Type": "Applications/json",
        },
        body: JSON.stringify(person),
      });
      getPeople();
    }


    useEffect(() => {
        getPeople()
    }, []);

  return (
    <div className="main">
      <Route exact path="/">
        <Index people={people} createPeople={createPeople}/>
      </Route>
      <Route path="/people/:id" render={(rp) => <Show update={updatePeople} people={people} {...rp} />} />
    </div>
  );
};

export default Main;
