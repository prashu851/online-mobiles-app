import React from 'react'
import './Mobiles.css'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import NavBar from'./NavBar'
import Filter from './Filter'



class Mobiles extends React.Component {
    constructor(){
        super();
        this.state={
            selectedMobiles:[],
            brands: [],
            selectedBrands: []
        }
        this.mobilesData = this.mobilesData.bind(this)
        this.handleFilter = this.handleFilter.bind(this)
        
    }

    

    mobilesData(body){
        const brands = body.map((mobile) => mobile.brand);
        const uniqueBrands = [...new Set(brands)];
        this.setState({
            selectedMobiles : body,
            defaultData : body,
            brands : uniqueBrands
        });
        
    }
    handleFilter(e, brand){

        if (e.target.checked) {
            const oldSelectedBrands = this.state.selectedBrands;
            const newSelectedBrands = [...oldSelectedBrands, brand];
            const allMobiles = [...this.state.defaultData];
            const selectedMobiles = allMobiles.filter(mobile => newSelectedBrands.indexOf(mobile.brand)>-1);
                this.setState({
                    selectedBrands: newSelectedBrands,
                    selectedMobiles: selectedMobiles       
                });
                console.log(this.state.selectedBrands)
        }
        
        
        else  {
            const oldSelectedBrands = this.state.selectedBrands;
            const newSelectedBrands = oldSelectedBrands.filter(mobileBrand=>mobileBrand!==brand);
            const allMobiles = [...this.state.defaultData];
            const selectedMobiles = newSelectedBrands.length!==0 ? allMobiles.filter(mobile => newSelectedBrands.indexOf(mobile.brand)>-1):allMobiles
                this.setState({
                    selectedBrands: newSelectedBrands,
                    selectedMobiles: selectedMobiles       
                });
        }

    }

    
    
    componentDidMount(){
        fetch("http://localhost:4000/mobiles")
        .then((data) => data.json())
        .then(this.mobilesData)
    
    }
    render(){
        return  (
                <>
                
               <NavBar />
               <Filter types={this.state.brands} handleFilter={this.handleFilter} />
                <Grid container justify="center">
                <div className="container">
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
                            <h3>{mobile.price}</h3>
                        </div>
                        <div className="buy-btn">
                        <Button variant="outlined" color="primary">Buy</Button>
                        </div>
                    </div>
                       
                    </Grid>  
                )}
                </div>
                
                </Grid>
             
                </>
            
                
        )
    }
}

export default Mobiles