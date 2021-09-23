import React, { useState } from 'react';
import './CreateEvent.css'

const potluckDefaults = {
    date: '',
    time: '',
    location: '',
    // items: []
}


function AddEvent(props) {

    const [formValues, setFormValues] = useState(potluckDefaults)



    const onChange = (evnt) => {
        const { name, value } = evnt.target;
        setFormValues({ ...formValues, [name]: value })
    }

    return (
        <div>
            <form onSubmit={(evnt) => props.onSubmit(evnt, formValues)}>
                <h2>Create New Potluck</h2>
                <label>Date
                    <input
                        type='text'
                        name='date'
                        value={formValues.date}
                        onChange={onChange}
                        placeholder='Set a date'
                    />
                </label>
                <label>Time
                    <input
                        type='text'
                        name='time'
                        value={formValues.time}
                        onChange={onChange}
                        placeholder='Set a time'
                    />
                </label>
                <label>Location
                    <input
                        type='text'
                        name='location'
                        value={formValues.location}
                        onChange={onChange}
                        placeholder='Set a location'
                    />
                </label>
                <label>List Your Items
                    <input
                        type='text'
                        name='items'
                        value={formValues.items}
                        onChange={onChange}
                        placeholder="Add Items ('item')"
                    />
                </label>
                <button>Invite Friends</button>
                <input
                    type='submit'
                    value='Create'
                />
            </form>
        </div>
    )

}

export default AddEvent;