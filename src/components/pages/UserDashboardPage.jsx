import { NavBar } from "../NavBar"

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

export function Dashboard (){
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
                        <h5>Order In Process</h5>
                        <ul className="order-in-process-list">
                            <h5>Casa Real</h5>
                            {orderInProcess.map((el, i)=>{
                                return(
                                    <li key={i} className="order-in-process-item">
                                        <p>{el.name}</p>
                                        <p>{el.status}</p>
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
                            
                        </div>
                        <div className="restaurant-order">
                            Order
                        </div>
                    </section>
                </section>
            </section>
        </main>
    )
}