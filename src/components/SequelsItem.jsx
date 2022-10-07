import {Link} from 'react-router-dom';

const SequelsItem = ({urlPhoto = '', name = '', sequelsUrl = ''}) => {
    return (
        <div className='film__sequels-item'>
            <div className='film__sequels-photo'>
                <img src={urlPhoto} alt='photo' />
            </div>
            <Link to={`/films/${sequelsUrl}`} className='film__sequels-text'>
                {name}
            </Link>
        </div>
    );
};

export default SequelsItem;