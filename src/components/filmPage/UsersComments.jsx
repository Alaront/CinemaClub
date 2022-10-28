import React from 'react';
import userPhoto from '../../assets/account/user-photo.png';

const UsersComments = () => {
    return (
        <div className='comment-film__users-comments'>
            <div className='comment-film__users-comments-item'>
                <div className='comment-film__users-comments-info'>
                    <div className='comment-film__users-comments-img'>
                        <img src={userPhoto} alt='photo'/>
                    </div>
                    <span>@Valera</span>
                </div>
                <p className='comment-film__users-comments-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores ducimus quis reprehenderit sit! Accusamus alias deleniti eligendi, eos inventore minus nemo reprehenderit tempora tempore vitae! Ea quasi tempore voluptatem?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur eos exercitationem facere maiores modi non officia quam sed voluptates. Dolor dolores ea eveniet hic impedit mollitia reiciendis repellendus repudiandae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores at atque dicta eveniet exercitationem iusto labore laboriosam, nisi nostrum, porro quaerat sapiente sed sequi soluta sunt unde voluptatibus!
                </p>
            </div>
            <div className='comment-film__users-comments-item'>
                <div className='comment-film__users-comments-info'>
                    <div className='comment-film__users-comments-img'>
                        <img src={userPhoto} alt='photo'/>
                    </div>
                    <span>@Valera</span>
                </div>
                <p className='comment-film__users-comments-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores ducimus quis reprehenderit sit! Accusamus alias deleniti eligendi, eos inventore minus nemo reprehenderit tempora tempore vitae! Ea quasi tempore voluptatem?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores at atque dicta eveniet exercitationem iusto labore laboriosam, nisi nostrum, porro quaerat sapiente sed sequi soluta sunt unde voluptatibus!
                </p>
            </div>
            <div className='comment-film__users-comments-item'>
                <div className='comment-film__users-comments-info'>
                    <div className='comment-film__users-comments-img'>
                        <img src={userPhoto} alt='photo'/>
                    </div>
                    <span>@Valera</span>
                </div>
                <p className='comment-film__users-comments-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Acntur eos exercitationem facere maiores modi non officia quam sed voluptates. Dolor dolores ea eveniet hic impedit mollitia reiciendis repellendus repudiandae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores at atque dicta eveniet exercitationem iusto labore laboriosam, nisi nostrum, porro quaerat sapiente sed sequi soluta sunt unde voluptatibus!
                </p>
            </div>
            <div className='comment-film__users-comments-item'>
                <div className='comment-film__users-comments-info'>
                    <div className='comment-film__users-comments-img'>
                        <img src={userPhoto} alt='photo'/>
                    </div>
                    <span>@Valera</span>
                </div>
                <p className='comment-film__users-comments-text'>
                    Accusamus asperiores ducimus quis reprehenderit sit! Accusamus alias deleniti eligendi, eos inventore minus nemo reprehenderit tempora tempore vitae! Ea quasi tempore voluptatem?
                    Lorem ipsum dolor sit amet, consectetur adipisicing eliniet exercitationem iusto labore laboriosam, nisi nostrum, porro quaerat sapiente sed sequi soluta sunt unde voluptatibus!
                </p>
            </div>
        </div>
    );
};

export default UsersComments;