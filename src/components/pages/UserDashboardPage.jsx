import { NavBar } from "../NavBar"
import { useState } from "react"

const orderInProcess = [{
        name: "Today's dish",
        status: "In Process"
    },
    {
        name: "Today's dish",
        status: "Done"
    },
    {
        name: "Today's dish",
        status: "In Process"
    }]

const menuItems = [
    {   
        id: 123,
        name: 'Arroz Habichuela y Carne',
        price: 200
    },
    {   
        id: 234,
        name: 'Moro rojo con pollo horneado',
        price: 200
    },
    {   
        id: 345,
        name: 'Fritos con salami',
        price: 200
    },
    {   
        id: 456,
        name: 'Dish one with soda',
        price: 200
    },
    {   
        id: 567,
        name: 'Dish two with soda',
        price: 200
    }
]

export function Dashboard (){
    const [ selectedNameDishes, setselectedNameDishes ] = useState([])
    const [ dishesId, setDishesId] = useState()

    const handleSelectDish = (e)=>{
        const dishId = e.target.getAttribute('id')[0]
        const dishNameSelected = e.target.parentElement.children[1].innerHTML
        const newselectedNameDishes = [...selectedNameDishes]
        const dishIndex = selectedNameDishes.indexOf(dishNameSelected) 
        
        if(dishIndex < 0){
            newselectedNameDishes.push(dishNameSelected)
            console.log(dishesId)
            setDishesId(dishId)
        }else{
            newselectedNameDishes.splice(dishIndex)
        }

        setselectedNameDishes(newselectedNameDishes)

    }

    return (
        <main className="user-dashboard">
            <NavBar name="USER DASHBOARD" pages={[{name: 'Past Orders'}, {name: 'Log Out', isSpecial: true}]}/>
            <section className="order-container">
                <section className="budget-column">
                    <div className="budget-container">
                        <h1 className="budget"><span>RD</span>$1,500</h1>
                        <h4>Budget Available</h4>
                    </div>
                    <div className="orders-in-process">
                        <h5>Orders In Process</h5>
                        <ul className="order-in-process-list">
                            <h6 className="restaurant-order-title">Casa Real · <span>Restaurant</span></h6>
                            {orderInProcess.map((el, i)=>{
                                return(
                                    <li key={i} className="order-in-process-item">
                                        <p><b>Dish name:</b> {el.name}</p>
                                        <p><b>Status:</b> {el.status}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>

                <section className="new-order-column">
                    <h1>New Order</h1>
                    <section className="menu-order-container">
                        <div className="restaurant-menu">
                            <div className="order-place-selector">
                                <h5>Place:</h5>
                                
                                <select name="restaurant" id="select-restaurant-order">
                                    <option value="actual value 1">Display Text 1</option>
                                    <option value="actual value 2">Display Text 2</option>
                                    <option value="actual value 3">Display Text 3</option>
                                </select>
                            </div>

                            <div className="menu-container">
                                <h3>Menu</h3>
                                <ul className="menu-items">
                                    {menuItems.map(el=>{
                                        return(
                                            <li key={el.id}>
                                                <input type="checkbox" name={el.name} id={`${el.id}-${el.name}`} onClick={handleSelectDish} />
                                                <label htmlFor="dish1" >{`${el.name}`}${`${el.price}`}</label>
                                            </li>)
                                    })}
                                    
                                </ul>
                            </div>
                            
                        </div>
                        <div className="restaurant-order">
                            <h5>Order:</h5>
                            <ul className="menu-items">
                                {
                                    selectedNameDishes.map(el=>{
                                        return (<li key={el}>- {el}</li>)
                                    })
                                }
                            </ul>
                            <div className="subtotal-dishes">
                                <b>Subtotal:</b>
                                <p><b>$</b>123</p>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </main>
    )
}