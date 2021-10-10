import React, { Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media , Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
//import DishDetail from './DishdetailComponent';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

// Functional-Component

function RenderMenuItem({ dish, onClick }) {
    return(
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}/>
        
                    <CardImgOverlay body className="ml-5">
                    <CardTitle> {dish.name} </CardTitle>
            
                    </CardImgOverlay>

            </Link>

    </Card>
    );
}

// onClick = {props.onClick}
const Menu = (props) => {

    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div key = {dish.id} className= "col-12 col-md-5 m-1">
                <RenderMenuItem dish = {dish}/> 

            </div>   
        )
    });

    if (props.dishes.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else

    return ( 
        <div className="container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>Menu</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            {menu}
        </div>
    </div>
    );

}

export default Menu;

{/*Class Component

{/*  renderDish(dish) {
        if (dish!=null){
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else {
           return( <div></div> );
        }
        
    } */}

{/*
class Menu extends Component {

    constructor(props){
        super(props);
    }

   
    render() {

        {/*const menu = this.state.dishes.map((dish) => */}
{/*
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key = {dish.id} className= "col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        
                        <CardImgOverlay body className="ml-5">
                            <CardTitle> {dish.name} </CardTitle>
                            
                        </CardImgOverlay>
                    </Card>
                </div>
            
               
            )
        });

        return ( 
            <div className="container">
                <div className="row">
                        {menu}
                </div>


                
        
            </div>
        );
    }
}

export default Menu;
*/}

{/*<div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div> */}


             {/*  <DishDetail selectedDish={this.state.selectedDish} />*/}