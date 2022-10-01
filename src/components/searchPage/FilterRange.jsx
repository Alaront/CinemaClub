import React, {useEffect, useRef, useState} from 'react';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const FilterRange = (props) => {
    const {title = '', data = [], dataLimits = [], changeYearData = Function.prototype} = props

    const sliderRef = useRef();

    const [newData, setNewData] = useState(data)

    useEffect(() => {
        createRange();
    }, [])

    useEffect(() => {
        setNewData(data);
    }, [data])

    const createRange = () => {
        if(sliderRef.current.noUiSlider) return

        noUiSlider.create(sliderRef.current, {
            start: [data[0], data[1]],
            connect: true,
            range: {
                'min': dataLimits[0],
                'max': dataLimits[1]
            },
            format: {
                from: function(value) {
                    return parseInt(value);
                },
                to: function(value) {
                    return parseInt(value);
                }
            },
        });

        sliderRef.current.noUiSlider.on('update', function (values, handle) {
            changeYearData(values);
        });
    }

    const changeInputData = (type, e) => {
        console.log('changeInputData')

        const newDataInput = Number(e.target.value.replace(/[^0-9\.]/g, ''));

        if(type === 'min') {
            setNewData([newDataInput, newData[1]])
        } else if(type === 'max') {
            setNewData([newData[0], newDataInput])
        }
    }

    const changeRangeData = (type, e) => {
        if(e.code !== "Enter") return

        if(type === 'min') {
            if(newData[0] < dataLimits[0]) setNewData([dataLimits[0], newData[1]])
            if(newData[0] > dataLimits[1]) setNewData([dataLimits[1], newData[1]])

            //changeYearData([newData[0], data[1]])
            sliderRef.current.noUiSlider.set([newData[0], null])

        } else if(type === 'max') {
            if(newData[1] > dataLimits[1]) setNewData([newData[0], dataLimits[1]])
            if(newData[1] < dataLimits[0]) setNewData([newData[0], dataLimits[0]])

            //changeYearData([data[0], newData[1]])
            sliderRef.current.noUiSlider.set([null, newData[1]])
        }
    }


    return (
        <div className="filter-range ">
            <h6>{title}</h6>
            <div className="filter-range__content">
                <div id="slider" ref={sliderRef}></div>
                <div className="filter-range__content-inputs">
                    <label>Min <input type="text" value={newData[0]} onChange={e => changeInputData('min', e)} onKeyDown={e => changeRangeData('min', e)}/></label>
                    <label>Max <input type="text" value={newData[1]} onChange={e => changeInputData('max', e)}  onKeyDown={e => changeRangeData('max', e)}/></label>
                </div>
            </div>
        </div>
    );
};

export default FilterRange;