import React, { useState, useEffect } from 'react'
import { updateProfile } from '../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function Formular() {

    const dispatch = useDispatch()
    const profile = useSelector((state) => state.user.profile)

    //garder la valeur des inputs
    const [firstName, setFirstName] = useState(!profile ? "" : profile.firstName)
    const [lastName, setLastName] = useState(!profile ? "" : profile.lastName)
    const [email, setEmail] = useState(!profile ? "" : profile.email)

    // à chaque changement d'etat du redux (profile) on attribue la bonne value
    useEffect(() => {
        if (profile != null) {
            setFirstName(profile.firstName)
            setLastName(profile.lastName)
            setEmail(profile.email)
        }
    }, [profile])


    const handleProfile = (e) => {
        e.preventDefault()
        //construction de l'objet => nouvel etat de redux (profile) et qui s'enregistrera dans le local storage
        let user = {
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        localStorage.setItem("user", JSON.stringify(user))
        dispatch(updateProfile(user))
    }

    return (
        <div>
            <div>
                <h1>Hi {profile == null ? "User" : profile.firstName}</h1>
                <h2>Customize your profile here</h2>
            </div>
            <div>
                <div>
                    <form onSubmit={handleProfile} action="">
                        <label>Your Firstname</label>
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Firstname ..." />
                        <label>Your Lastname</label>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Firstname ..." />
                        <label>Your Email</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Firstname ..." />
                        <button type='submit'>Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formular