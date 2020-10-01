import React from 'react';
import {withFirebase} from '../Firebase'

const SignOutButton = props => {
    return (
        <button type="button" onClick={props.firebase.doSignOut}>Sign Out</button>
    )
}

export default withFirebase(SignOutButton);
