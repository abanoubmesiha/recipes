import React, { Component } from 'react';
import { recipes } from './recipes';

export default class RecipeDetails extends Component {
    constructor(props){
        super(props);
        this.state ={
           recipes:recipes
        }
    }
    
 
    render() {
        
        const {changePageIndexToHome} = this.props;
        const {recipes} = this.state;
        const {idprop} = this.props;
        const chosenRecipe = recipes[idprop];
        const { image_url, title,publisher_url,source_url,ingredients,publisher } = chosenRecipe;
return (
        <React.Fragment>
            
          <div className="container">
              <div className="row">
                  <div className="d-inline col-10 mx-auto col-md-6 my-3">
                      <button type="button" className="btn btn-warning mb-5 text-capitalize"
                              onClick={changePageIndexToHome}>back to recipe list</button>
                      <img src={image_url} className="d-block w-100" alt="recipe" />
                      <div className="d-inline col-10 mx-auto col-md-6 my-3">
                          <h6 className="text-uppercase">{title}</h6>
                          <h6 className="text-warning text-capitalize text-slanted">provided by {publisher}</h6>
                          <a href={publisher_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2 text-capitalize">publisher webpage</a>
                          <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-success mt-2 mx-3 text-capitalize">recipe url</a>
                          <ul className="list-group mt-4">
                              <h2 className="mt-3 mb-4">Ingredients</h2>
                              {ingredients.map((item,index)=>{
                                  return (<li key={index} className="list-group-item text-slanted">{item}</li>)
                              })}
                          </ul>


                      </div>
                  </div>
              </div>
                            </div>
        </React.Fragment>
    )
    }
}
/**/