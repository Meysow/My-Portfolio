import React from 'react';

const ProjectFilter = (props) => {
    return (
        <div className='projectFilter'>
            <div className='projectFilterContainer'>
                <h2 className='projectNumber'>
                    Projects({props.projectsFiltered.length})
                </h2>
                <ul className='tagFilter'>
                    <li className='filterBtn all' key='all'>
                        <input
                            type='radio'
                            name='radio'
                            checked={'all' === props.selectedRadio}
                            value='all'
                            id='all'
                            onChange={props.handleRadio}
                        />
                        <label htmlFor='all'>All</label>
                    </li>
                    {props.tags.map((item, i) => {
                        return (
                            <li className='filterBtn' key={i}>
                                <input
                                    type='radio'
                                    name='radio'
                                    checked={item === props.selectedRadio}
                                    value={item}
                                    id={item}
                                    onChange={props.handleRadio}
                                />
                                <label htmlFor={item}>{item}</label>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ProjectFilter;
