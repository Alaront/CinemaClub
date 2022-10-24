import React from 'react';

const UserAccountText = () => {
    return (
        <div className='account__text-wrapper'>
            <div className='account__text account__text-login'>
                <label>
                    Login: <input type='text' />
                </label>
                <button>Сменить login</button>
            </div>
            <div className='account__text account__text-email'>
                <label>
                    Login: <input type='email' />
                </label>
                <button>Сменить email</button>
            </div>
            <div className='account__text account__text-password'>
                <label>
                    Login: <input type='password' />
                </label>
                <button>Сменить пароль</button>
            </div>
        </div>
    );
};

export default UserAccountText;