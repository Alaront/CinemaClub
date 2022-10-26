import React, {useEffect, useMemo, useState} from 'react';

const ChoiceStars = () => {
    const [starFull, setStarFull] = useState(0);
    const [starChoice, setStarChoice] = useState(false);
    const [lastChoice, setLastChoice] = useState(0);
    const [gradeInfo, setGradeInfo] = useState({
        grade: 1,
        text: 'Epic',
    });

    const changeGrade = () => {
        switch (starFull) {
        case 1:
            setGradeInfo({
                grade: 1,
                text: 'Хуже некуда',
            });
            break;
        case 2:
            setGradeInfo({
                grade: 2,
                text: 'Ужасно',
            });
            break;
        case 3:
            setGradeInfo({
                grade: 3,
                text: 'Очень плохо',
            });
            break;
        case 4:
            setGradeInfo({
                grade: 4,
                text: 'Плохо',
            });
            break;
        case 5:
            setGradeInfo({
                grade: 5,
                text: 'Более-менее',
            });
            break;
        case 6:
            setGradeInfo({
                grade: 6,
                text: 'Нормально',
            });
            break;
        case 7:
            setGradeInfo({
                grade: 7,
                text: 'Хорошо',
            });
            break;
        case 8:
            setGradeInfo({
                grade: 8,
                text: 'Отлично',
            });
            break;
        case 9:
            setGradeInfo({
                grade: 9,
                text: 'Великолепно',
            });
            break;
        case 10:
            setGradeInfo({
                grade: 10,
                text: 'Эпик вин!',
            });
            break;
        default:
            break;
        }

    };

    useEffect(() => {
        setStarChoice(false);
        changeGrade();
    }, [starFull]);


    const starHover = ({target}) => {

        if(target.classList.contains('choice-stars__star')) {
            const star = target;
            //star.classList.add('star-full');
            setStarFull(Number(star.dataset.star));
            //setStarChoice(false);
        }
    };

    const starNotHover = () => {
        if(!starChoice) {
            setStarFull(lastChoice);
        }
    };

    const choiceStar = (index) => {
        setStarChoice(true);
        setLastChoice(index);
    };

    return (
        <div className='choice-stars'>
            <h4>Оценить</h4>

            <div className='choice-stars__wrapper'>
                <div className='choice-stars__stars' onMouseMove={starHover} onMouseLeave={starNotHover}>
                    {
                        Array.from({length: 10}).map((_, idx) => <div key={idx} className={`choice-stars__star ${starFull >= idx + 1 ? 'star-full' : ''}`} data-star={idx + 1} onClick={() => choiceStar(idx + 1)}></div>)
                    }
                </div>
                {
                    starFull > 0 &&
                        <div className='choice-stars__text'>
                            <span>{gradeInfo.grade}</span>
                            <span>{gradeInfo.text}</span>
                        </div>
                }

            </div>
        </div>
    );
};

export default ChoiceStars;