import React, {useEffect, useMemo, useState} from 'react';
import {collection, doc, getDocs, query, setDoc, updateDoc, where} from 'firebase/firestore';
import {auth, db} from '../../firebase';
import average from 'average';
import {useContext} from 'react';
import {ContextAuth} from '../../context/contextAuth';

const ChoiceStars = ({id}) => {
    const [starFull, setStarFull] = useState(0);
    const [starChoice, setStarChoice] = useState(false);
    const [lastChoice, setLastChoice] = useState(0);
    const [gradeInfo, setGradeInfo] = useState({
        grade: 1,
        text: 'Хуже некуда',
    });

    const {user} = useContext(ContextAuth);

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

    useEffect(() => {
        getUserGrade();
    }, [id, user]);

    const getUserGrade = async () => {
        if(!user.uid) return;

        const q = query(collection(db, 'users'), where('uid', '==', user.uid));
        const querySnapshot = await getDocs(q);

        console.log('querySnapshot', querySnapshot);
        querySnapshot.forEach((doc) => {
            const filmsGrade = doc.data().filmsGrade;

            console.log('filmsGrade', filmsGrade);

            if(Object.keys(filmsGrade).length){
                setLastChoice(filmsGrade[id]);
                setStarFull(filmsGrade[id]);
                setStarChoice(true);
            }
        });
    };


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
        setGrade(index);
    };

    const setGrade = async (grade) => {
        const q = query(collection(db, 'films'), where('id', '==', id));
        const querySnapshot = await getDocs(q);
        if(querySnapshot.size === 0) {
            await setDoc(doc(db, 'films', id), {
                id,
                grade,
            });
        } else {
            let oldGrade = 0;
            querySnapshot.forEach((doc) => {
                oldGrade = doc.data().grade;
            });
            await updateDoc(doc(db, 'films', id), {
                grade: Math.round(average([oldGrade, grade])),
            });
        }

        const userQ = query(collection(db, 'users'), where('uid', '==', user.uid));
        const querySnapshotUser = await getDocs(userQ);
        let userFilmGrade = null;
        querySnapshotUser.forEach((doc) => {
            userFilmGrade = doc.data().filmsGrade;
        });

        console.log('userFilmGrade', userFilmGrade);

        if(userFilmGrade != null || userFilmGrade !== undefined) {
            console.log('doc.data().filmsGrade', userFilmGrade);
            await updateDoc(doc(db, 'users', user.uid), {
                filmsGrade: {
                    ...userFilmGrade,
                    [id]: grade,
                },
            });
        } else {
            await updateDoc(doc(db, 'users', user.uid), {
                filmsGrade: {
                    [id]: grade,
                },
            });
        }
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