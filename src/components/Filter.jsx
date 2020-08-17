import React from 'react'
import './Filter.css'
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';

class Filter extends React.Component {

    onFilterChange() {
        this.props.handleFilter()
    }

    
    render(){
        
        return(
            <div className="filter-container">
                <h3>Brands</h3>
                <Divider />
                <div className="filter-box">
                
                    <div className="checkbox">
                        
                        {this.props.types.map((filterType, index)=>
                        <FormGroup row >
                        <FormControlLabel
                        control={<Checkbox key={index} color="primary" onChange={(event) => this.props.handleFilter(event, filterType)} />}
                        label={filterType}
                        />
                        </FormGroup>
                        )}
                    </div>
                </div>
            
            </div>
        )
    }
}

export default Filter;