import { Route } from "react-router-dom";
import { useState, useEffect} from "react";
import Index from "../pages/Index";
import Show from "../pages/Show";

const Main = () => {

    const [people, setPeople] = useState(null);
    const URL = 'http://localhost:4000/people';

    const getPeople = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPeople(data);
    }

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

    useEffect(() => {
        getPeople()
    }, []);

  return (
    <div className="main">
      <Route exact path="/">
        <Index people={people}/>
      </Route>
      <Route path="/people/:id" render={(rp) => <Show {...rp} />} />
    </div>
  );
};

export default Main;
