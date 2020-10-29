import React from 'react'
import './Mobiles.css'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Filter from './Filter'
import cloneDeep from 'lodash/cloneDeep'
import Sort from './Sort'
import {RELEVANCE} from './SortTypes'
import mapValues from 'lodash/mapValues'


class Mobiles extends React.Component {
    constructor(){
        super();
        this.state={
            selectedMobiles:[],
            brands: {},
            selectedBrands: {},
            selectedSort:RELEVANCE
        }
        this.mobilesData = this.mobilesData.bind(this)
        this.handleFilter = this.handleFilter.bind(this)
        this.handleRelevance=this.handleRelevance.bind(this)
        this.onSortChange=this.onSortChange.bind(this)
    }

    mobilesData(body){
        const reduceToObj = (accumulator, mobile) => {
            accumulator[mobile.brand]=false;
            return accumulator;
        }
        const uniqueBrands = body.reduce(reduceToObj, {});
        this.setState({
            selectedMobiles : cloneDeep(body),
            defaultData : cloneDeep(body),
            brands : uniqueBrands,
        });
    }
    handleFilter(checked, brand){
        const { brands: oldBrands, selectedSort, defaultData } = this.state;
        const newBrands = {...oldBrands, [brand]:checked};
        const allMobiles = [...defaultData];
        const isAnyBrandSelected = Object.values(newBrands).some(isSelected=> isSelected);
        const selectedMobiles = isAnyBrandSelected ? allMobiles.filter(mobile => newBrands[mobile.brand]) : allMobiles;
        const sortedMobiles = selectedMobiles.sort(selectedSort.comparator);
        this.setState({
            brands: newBrands,
            selectedMobiles: sortedMobiles       
        });
    }
    handleRelevance(){
       this.setState({
            selectedMobiles: [...this.state.defaultData],
            brands:mapValues(this.state.brands,()=>false),
            selectedSort: RELEVANCE
        })
    }
    onSortChange(selectedSort){
        if (selectedSort.isRelevance()) {
            this.handleRelevance();
        } else {
            const sortedMobiles = this.state.selectedMobiles.sort(selectedSort.comparator)
            this.setState({
                selectedMobiles:sortedMobiles,
                selectedSort: selectedSort
            });
        }
    }
    componentDidMount(){
        fetch("https://my-json-server.typicode.com/prashu851/demo/mobiles")
        .then((data) => data.json())
        .then(this.mobilesData)
    }
    render(){
        return  (
                <>
                <Filter types={this.state.brands} handleFilter={this.handleFilter} selectedBrands={this.selectedBrands} />
                <Sort selectedSort={this.state.selectedSort} onSortChange={this.onSortChange} />
                <div className="container">
                <Grid container spacing={3}>
                { this.state.selectedMobiles.map((mobile,index)=>
                <Grid item xs={3}>
                    <div className="box" key={index}>
                        <div className="mobile-image">
                            <img src={require('../realme.jpg')} alt="mobile-pic" /> 
                        </div>
                    <div className="mobile-name">
                                <h3>{mobile.name}</h3>
                        </div>
                        <div className="mobile-price">
                            <h4>Rs.{mobile.price}</h4>
                        </div>
                        <div className="buy-btn">
                        <Button variant="contained" color="primary">Buy</Button>
                        </div>
                    </div>
                </Grid>  
                )}
                    </Grid>
                </div>
               
             </>
        )
    }
}

export default Mobiles
