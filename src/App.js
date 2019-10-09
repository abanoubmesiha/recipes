import React, { Component } from 'react'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'

export default class App extends Component {
    constructor(){
        super();
    this.state = {
        recipes:[],
        url:"https://api.myjson.com/bins/h0ovm",
        pageIndex:0,
        recipeId:0
    };

    this.changePageIndex = this.changePageIndex.bind(this);
    this.changePageIndexToHome = this.changePageIndexToHome.bind(this);
    this.handlePage = this.handlePage.bind(this);
    }
    async getRecipes(){
        try {
            const data = await fetch(this.state.url);
            const jsonData = await data.json();
            this.setState({
                recipes: jsonData.recipes
            });
        }   catch (error) {
            console.log(error);
        }
    }
    componentDidMount(){
        this.getRecipes();
        
    }
    changePageIndex(id) {
        this.setState({
            pageIndex:1,
            recipeId:id
        })
    }
    changePageIndexToHome(){
        this.setState({
            pageIndex:0
        })
    }
    handlePage(pageIndex){
        switch (pageIndex){
            case 0 :
                return <RecipeList recipes={this.state.recipes}
                        changePageIndex={this.changePageIndex}/>
            case 1 :
                return <RecipeDetails idprop={this.state.recipeId}
                                    changePageIndexToHome={this.changePageIndexToHome} />
        }
    }
    
    render() {
        console.log(this.state);
        return (
            <React.Fragment>
                {this.handlePage(this.state.pageIndex)}
                
            </React.Fragment>
        )
    }
}
