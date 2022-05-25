
import React, { useState } from 'react'
import axios from 'axios'


import './Contacts.css'
import Navbar from "./Navbar";
import { useNavigate } from 'react-router';
const Contacts = () => {

    const navigate = useNavigate();
    function handleClick() {
        navigate('/Thanks')
    }
    const [namee, setNamee] = useState(''
    );
    const [emaail, setEmaail] = useState(''
    );
    const [messsage, setMesssage] = useState(''
    );


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://fir-888f9-default-rtdb.firebaseio.com/contacts.json", { Name: namee, Email: emaail, Message: messsage })
            .then(function (response) {
                console.log(response)

            })
            .catch(function (error) {
                console.log(error)
            })


    }





    return (
        <> <Navbar />
            <div className="top">
                <div name='contact' className='ctc'>
                    <form className='form' onSubmit={handleSubmit}>
                        <div >

                            <p className='info'> Submit the form below or shoot me an email - mtmickymayank1@gmail.com</p>
                        </div>
                        <input className='message' type="text" placeholder='Name' name='name' onChange={(event) => setNamee(event.target.value)} value={namee}
                            id="name" />
                        <input className='message' type="email" placeholder='Email' name='email' onChange={(event) => setEmaail(event.target.value)} value={emaail} id="email" />
                        <textarea className='textarea' name="message" rows="10" placeholder='Message' onChange={(event) => setMesssage(event.target.value)} value={messsage} id="message"></textarea>
                        <button className='btn' onClick={handleClick} >SUBMIT</button>
                    </form>
                </div>
            </div>



        </>
    )
}

export default Contacts;