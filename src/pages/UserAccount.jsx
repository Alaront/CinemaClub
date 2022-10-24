import React, {useState} from 'react';
import '../assets/account/account.sass';
import UserAccountPhoto from '../components/userAccount/UserAccountPhoto';
import UserAccountText from '../components/userAccount/UserAccountText';

const UserAccount = () => {

    return (
        <div className='container content account'>
            <div className='account__wrapper'>
                <UserAccountPhoto />

                <UserAccountText />
            </div>
        </div>
    );
};

export default UserAccount;