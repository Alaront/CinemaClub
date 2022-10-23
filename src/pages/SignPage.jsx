import React from 'react';
import '../assets/Sign/sign.sass';

const SignPage = () => {

    const sendDataUp = (e) => {
        e.preventDefault();
        console.log('Регистрация');

    }

    return (
        <div className='container content signWrapper'>
            <div className="sign">
                <h3 className="sign__title">Вход</h3>
                <form className="sign__form" onSubmit={sendDataUp}>
                    <label>
                        Email <input type="email" />
                    </label>
                    <label>
                        Пароль <input type="password" />
                    </label>

                    <button>OK</button>
                </form>
            </div>

            <div className="sign">
                <h3 className="sign__title">Регистрация</h3>
                <form className="sign__form" onSubmit={sendDataUp}>
                    <label>
                        Логин <input type="text" />
                    </label>
                    <label>
                        Email <input type="email" />
                    </label>
                    <label>
                        Пароль <input type="password" />
                    </label>

                    <button>OK</button>
                </form>
            </div>
        </div>
    );
};

export default SignPage;