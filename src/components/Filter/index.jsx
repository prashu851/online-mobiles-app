import React from 'react'
import './Filter.css'
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';

const Filter = ({ types, handleFilter, title }) => {

    const renderFilterType = (filterKey) => {
        return <FormControlLabel
                control={<Checkbox 
                            checked={types[filterKey]} 
                            color="primary" 
                            onChange={(event) => handleFilter(event.target.checked, filterKey)}
                        />}
                label={filterKey}
        />
    }

    return(
        <div className="filter-container">
            <h3>{ title }</h3>
            <Divider />
            <div className="filter-box">
                <div className="checkbox">
                    {Object.keys(types).map((filterKey, index)=>
                        <FormGroup row key={index}>
                            {renderFilterType(filterKey)}
                        </FormGroup>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Filter;