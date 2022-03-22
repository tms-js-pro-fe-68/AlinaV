import React, { useEffect, useState } from 'react';

// https://dog.ceo/api/breeds/image/random
// https://official-joke-api.appspot.com/random_joke

export default function RequestIdentity() {
    const [answer, setAnswer] = useState();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => { return response.json() })
            .then((data) => {
                setAnswer(data.message);
                setIsLoading(false);
            })
            .catch((err) => setError(err.message));
    }, []);

    return (
        <div>
            <p>{isLoading && 'Loading...'}</p>
            <div><img src={answer} style={{width: "800px", height:"800px"}}/></div>
        </div>
    )
}

// https://randomuser.me/api/

{/* <div className="center flex">
                <div className="column">
                    <div>{answer.results.picture.large}</div>
                    <div>
                        <p>First name: {answer.results.name.first}</p>
                        <p>Last name: {answer.results.name.last}</p>
                        <p>Birthday: {answer.results.dob.date} {answer.results.dob.age}</p>
                        <p>Gender: {answer.results.gender}</p>
                    </div>
                </div>

                <div className="column">
                    <p>Location:</p>
                    <div>
                        <p>Country: {answer.results.location.country}</p>
                        <p>City: {answer.results.location.state}</p>
                        <p>Postcode: {answer.results.location.postcode}</p>
                        <p>Street: {answer.results.location.street.name} {answer.results.location.street.number}</p>
                    </div>
                    <p>Contacts:</p>
                    <div>
                        <p>Email: {answer.results.email}</p>
                        <p>Username: {answer.results.login.username}</p>
                        <p>Password: {answer.results.login.password}</p>
                        <p>Phone: {answer.results.phone}</p>
                    </div>
                </div>
            </div> */}