import React from 'react'
import './Mobiles.css'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import NavBar from'./NavBar'



class Mobiles extends React.Component {
    constructor(){
        super();
        this.state={
            mobiles:[]
        }
        this.mobilesData = this.mobilesData.bind(this)
       
    }
    

    mobilesData(body){
        this.setState({
            mobiles : body
        });
        
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
                <Grid container justify="center">
            
                <div className="container">
                { this.state.mobiles.map((mobile,index)=>
                <Grid item xs={4}>
                
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