import { useState } from "react";

const Show = ({people,match}) => {

    //get person from people data
    const person = people.find((person)=> person._id === match.params.id );

    //state for edit form
    const [editForm, setEditForm] = useState(person);

    const handleChange = event => {
        setEditForm({...editForm, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className="person">
              <h1>{person.name}</h1>
              <h5>{person.title}</h5>
              {person.image && 
                <img src={person.image} alt={person.name} />
                }
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={editForm.name}
                name="name"
                placeholder="name"
                onChange={handleChange}
                 />
                <input 
                type="text"
                value={editForm.title}
                name="name"
                placeholder="name"
                onChange={handleChange}
                 />
                <input 
                type="text"
                value={editForm.image}
                name="name"
                placeholder="name"
                onChange={handleChange}
                 />
            </form>
        </div>
    )
}

export default Show;