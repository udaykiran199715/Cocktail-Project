import React from 'react'
import axios from 'axios'
import Name from './NameData'
import Ingredient from './IngredientData'
import Categories from './CAG'
import styles from './Coctail.module.css'
// import { v4 as uuidv4 } from 'uuid'


class Cocktail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            ingredient: '',
            searchData: [],
            ingredientData: [],
            dataFlag: false,
            categoriesList: [],
            ingredientsList: [],
            glassList: [],
            alcoholList: [],
            categories: 'Categories',
            glass: 'Glass',
            ingredientSelect: 'Ingredients',
            alcoholSelect: 'A / N-A',
            cag: [],
            dataLength:0,
            pages:[],
            activePage:1,
            pageFlag:false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        // if(e.target.value === 'categories') {
        console.log(e.target.value)
        // }
    }

    handleCategories = (e) => {
        this.setState({
            categories: e.target.value
        })
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + e.target.value)
            .then(res =>
                this.setState({

                    cag: res.data.drinks,
                    dataFlag: false,
                    searchData: [],
                    ingredientData: [],
                    dataLength:res.data.drinks.length,
                    pages:[],
                    activePage:1,
                    pageFlag:true

                })
                // console.log(res)
            )
    }

    handleIngredients = (e) => {
        this.setState({
            ingredientSelect: e.target.value
        })
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + e.target.value)
            .then(res =>
                this.setState({
                    ingredientData: res.data.ingredients,
                    dataFlag: false,
                    searchData: [],
                    cag: [],
                    pages:[],
                    dataLength:0,
                    activePage:1,
                    pageFlag:false
                })
            )
    }


    handleGlass = (e) => {
        this.setState({
            glass: e.target.value
        })
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" + e.target.value)
            .then(res =>
                this.setState({

                    cag: res.data.drinks,
                    dataFlag: false,
                    searchData: [],
                    ingredientData: [],
                    dataLength:res.data.drinks.length,
                    pages:[],
                    activePage:1,
                    pageFlag:true
                })
                // console.log(res)
            )
    }

    handleAlcohol = (e) => {
        this.setState({
            alcoholSelect: e.target.value
        })
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=" + e.target.value)
            .then(res =>
                this.setState({

                    cag: res.data.drinks,
                    dataFlag: false,
                    searchData: [],
                    ingredientData: [],
                    dataLength:res.data.drinks.length,
                    pages:[],
                    activePage:1,
                    pageFlag:true
                })
                // console.log(res)
            )
    }




   handleSubmit = (e) => {
        let { name, ingredient } = this.state

        // if(e.target.name ==='search') {
        if (name) {
            // console.log(name)

            axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name)
                .then(res =>
                    this.setState({
                        searchData: res.data.drinks,
                        dataFlag: true,
                        cag: [],
                        dataLength:res.data.drinks.length,
                        pages:[],
                        activePage:1,
                        pageFlag:true
                    })
                ).catch(err=>alert("oops not found"))
        } else if (ingredient) {
            console.log(ingredient)
            axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + ingredient)
                .then(res =>
                    this.setState({
                        ingredientData: res.data.ingredients,
                        dataFlag: false,
                        cag: [],
                        pages:[],
                        dataLength:0,
                        pageFlag:false

                    })
                ).catch(err => alert('oops not found'))
        }
        // }else {
        //     axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        //     .then(res =>
        //         this.setState({
        //             searchData: res.data.drinks,
        //             dataFlag: true,
        //             cag: [],
        //              dataLength:0,
        //              pages:[]
        //         })
        //     )
        // }

        this.setState({
            name: '', ingredient: ''
        })
    }

    handlePages = (e,active) => {
        let {activePage,pages} = this.state
        if(active === 'prev') {
            if(Number(activePage) === 1) {
                this.setState({
                    activePage: 1
                })
            }else {
                this.setState({
                    activePage:activePage - 1
                })
            }
        }else   if(active === 'next'  ) {
            if(Number(activePage) === Number(pages.length)) {
                this.setState({
                    activePage:pages.length
                })
            }else {
                this.setState({
                    activePage:activePage + 1
                })
            }

        }else {
        this.setState({
            activePage:active
        })
    }
    }
    componentDidMount() {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
            .then(res =>
                this.setState({
                    categoriesList: res.data.drinks
                })
                // console.log(res.data.drinks)
            )
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
            .then(res =>
                this.setState({
                    ingredientsList: res.data.drinks
                })
            )
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
            .then(res =>
                this.setState({
                    glassList: res.data.drinks
                })
            )
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list")
            .then(res =>
                this.setState({
                    alcoholList: res.data.drinks
                })
            )
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=v")
        .then(res =>
            this.setState({
                searchData:res.data.drinks,
                dataFlag:true,
                dataLength:res.data.drinks.length,
                pageFlag:true
            })
            )


    }

    render() {
       // console.log(this.state.dataLength)

        let { name, ingredient, searchData, ingredientData, dataFlag, categories, categoriesList, ingredientSelect, ingredientsList, glass, glassList, alcoholList, alcoholSelect, cag, pages, dataLength, activePage, pageFlag } = this.state
        let total = dataLength
        let perPage = 8
        let pageCount = Math.ceil(total/perPage)
        if(pages.length === 0) {
        for(let i=0;i<pageCount;i++) {

            pages.push(i+1)

        }
    }
        let page = activePage
        let low = (page-1)*8
        let high = page*8
        // let pageData = searchData.filter((a,i) => i>=low && i<high)

        return (
            <div className='container-fluid ' >
                <div className='row text-center' style={{ backgroundColor: 'brown' }}>
                    <div className='col-4 d-none d-xl-block'><img height="150px" width="350px" className='' src="/cocktail1.jpeg" alt='' /></div>
                    <div className='col-12 col-xl-4 text-white text-center' > <h1 className='display-1 mt-3'>COCKTAIL </h1></div>
                    <div className='col-4 d-none d-xl-block'><img height="150px" width="350px" className='' src="/cocktail2.jpeg" alt='' /></div>
                </div>

                <div className="row mt-1 py-4  bg-danger">
                    <div className='col-6 '>
                        <input className='mr-1   p-1' style={{fontSize:"20px"}} name='name' value={name} placeholder='name' onChange={(e) => { this.handleChange(e) }} />
                        <input className='ml-xl-1 mt-sm-2 mr-md-5  p-1' style={{fontSize:"20px"}} name='ingredient' value={ingredient} placeholder='ingredient' onChange={(e) => { this.handleChange(e) }} />
                        <button className="btn btn-success mt-sm-2  mt-lg-2 mt-xl-0 ml-lg-4 ml-xl-2 px-4" name="search" style={{fontSize:"20px"}} onClick={(e) => this.handleSubmit(e)}>Search</button>
                    </div>
                    <div className='col-6'>
                        <select className='p-1 py-2 mt-sm-2 mt-lg-0 mt-xl-2 mr-lg-2 mr-xl-0  bg-dark text-white' style={{fontSize:"20px"}} name='categories' value={categories} onChange={(e) => this.handleCategories(e)}>
                            <option value="categories">Categories</option>
                            {categoriesList.map(item => (
                                <option key={item.strCategory} value={item.strCategory}>{item.strCategory}</option>
                            ))}
                        </select>
                        <select className='p-1 py-2 mt-sm-2 mt-lg-0 mr-lg-2 mt-xl-2 mr-xl-0  bg-primary text-white' style={{fontSize:"20px"}} name='ingredientSelect' value={ingredientSelect} onChange={(e) => this.handleIngredients(e)}>
                            <option value="Ingredients">Ingredients</option>
                            {ingredientsList.map(item => (
                                <option key={item.strIngredient1}  value={item.strIngredient1}>{item.strIngredient1}</option>
                            ))}
                        </select>
                        <select className='p-1 py-2 mt-sm-2  mr-lg-2 mt-xl-0 mr-xl-0 bg-secondary text-white' style={{fontSize:"20px"}} name='glass' value={glass} onChange={(e) => this.handleGlass(e)}>
                            <option value="Glass">Glass</option>
                            {glassList.map(item => (
                                <option key={item.strGlass} value={item.strGlass}>{item.strGlass}</option>
                            ))}
                        </select>
                        <select className='p-1 py-2 mt-sm-2  mr-lg-2 mt-xl-0  mr-xl-0 text-white' style={{fontSize:"20px", backgroundColor:"darkviolet"}} name='alcoholSelect' value={alcoholSelect} onChange={(e) => this.handleAlcohol(e)}>
                            <option value="A / N-A">A / N-A</option>
                            {alcoholList.map(item => (
                                <option key={item.strAlcoholic} value={item.strAlcoholic}>{item.strAlcoholic}</option>
                            ))}
                        </select>
                    </div>

                </div>
                <div>
                    {
                        dataFlag ?
                            <div className="row text-white mt-2" >
                                {searchData && searchData.filter((a,i) => i>=low && i<high).map(item => <Name key={item.idDrink} items={item} />)}
                            </div>
                            : <div className="text-center  mt-2" style={{backgroundColor:"darkorange"}}>
                                {ingredientData && ingredientData.map(item => <Ingredient key={item.idIngredient} items={item} />)}
                            </div>
                    }
                    <div className="row text-center mt-2">
                        {cag && cag.filter((a,i) => i>=low && i<high).map(item => < Categories key={item.idDrink} items={item} />)}
                    </div>

                    <div className=" text-center  mt-2">

                        {pages && pageFlag &&
                        < >
                         <button className="btn btn-dark px-3 py-1 m-2" key={"prev"} onClick={(e) => this.handlePages(e,"prev")}>prev</button>
                        {pages.map(item => (
                            <button style={{color:styles.textWhite}}  className={activePage===item ?"btn bg-primary px-3 py-1 m-2 text-white" : "btn bg-dark px-3 py-1 m-2"}  key={item} onClick={(e) => this.handlePages(e,item)}>{item}</button>
                        ))}
                          <button className="btn btn-dark px-3 py-1 m-2" key={"next"} onClick={(e) => this.handlePages(e,"next")}>next</button>
                          </>
                        }


                    </div>
                </div>

            </div>
        )
    }
}

export default Cocktail