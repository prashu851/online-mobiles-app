import React from 'react'
import './Filter.css'
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';

class Filter extends React.Component {
    
    render(){
        const brands=Object.values(this.props.mobileNames.reduce((r,c)=>{
            r[c.brand]=c
            return r
        },
        {}))
        return(
            <div className="filter-container">
                <h3>Brands</h3>
                <Divider />
                <div className="filter-box">
                
                    <div className="checkbox">
                        
                        {brands.map((brand,index)=>
                        <FormGroup row >
                        <FormControlLabel
                        control={<Checkbox key={index} color="primary" onChange={this.props.handleFilter} />}
                        label={brand.brand}
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