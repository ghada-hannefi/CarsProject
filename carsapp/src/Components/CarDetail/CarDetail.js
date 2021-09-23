import React ,{Fragment}from "react"
import { useParams } from "react-router-dom"
import {CarsData} from "../CarsData"
import "./CarDetail.css"
const CarDetail = () => {
    const CarId  = useParams().CarId
    const thisCar = CarsData.find(car => car.id === Number(CarId))
    return (
     
            <Fragment>
      
  <div className="card">
    <div className="left">
      <img src={thisCar.image}/>
      <i className="fa fa-long-arrow-left"></i>
      <i className="fa fa-long-arrow-right"></i>
    </div>
    <div className="right">
      <div className="product-info">
        <div className="product-name">
          
          <i className="fa fa-search"></i>
          <i className="fa fa-user"></i>
          <i className="fa fa-shopping-cart"></i>
        </div>
        <div className="details">
          <h2>{thisCar.name}</h2>
          <h4><span className="fa fa-dollar"></span>{thisCar.price}</h4>
          <p><span className="fa fa-dollar"></span>{thisCar.description}</p>

        </div>
        
        <ul>
          <li>COLOR</li>
          <li className="yellow"></li>
          <li className="black"></li>
          <li className="blue"></li>
        </ul>
      </div>
    </div>
  </div>
            </Fragment>
        
            



       )
}
            export default CarDetail