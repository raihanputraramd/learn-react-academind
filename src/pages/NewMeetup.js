import { useHistory } from "react-router-dom"

import NewMeetupForm from "../components/meetups/NewMeetupForm"

const NewMeetup = () => {
    const history = useHistory();

    function addMeetupDataHandler(meetupData){
        fetch(
            'https://react-started-ce91b-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/')
        })
    }

    return (
        <section>
            <h1>Add New Meetups</h1>
            <NewMeetupForm onAddMeetup={addMeetupDataHandler}/>
        </section>
    )
}

export default NewMeetup
