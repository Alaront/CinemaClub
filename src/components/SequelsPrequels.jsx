import React, {useState} from 'react';
import SequelsItem from "./SequelsItem";

const SequelsPrequels = () => {
    const [showSequels, setShowSequels] = useState(false);

    return (
        <div className={`film__sequels-prequels ${showSequels ? 'sequels-show' : ''}`} >
            <h4>Сиквелы и приквелы</h4>
            <div className="film__sequels-prequels-wrappers">
                <SequelsItem />
                <SequelsItem />
                <SequelsItem />
                <SequelsItem />
                <SequelsItem />
                <SequelsItem />
                <SequelsItem />
            </div>
            <div className="film__sequels-prequels-btn" onClick={() => setShowSequels(!showSequels)}>{showSequels ? 'Скрыть' : 'Открыть'}</div>
        </div>
    );
};

export default SequelsPrequels;