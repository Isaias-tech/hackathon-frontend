import logoImg from "../static/img/VT-logo.png"

export function NavBar ({name, pages}){
    return (
        <nav className="navbar">
            <div className="navbar-title">
                <div className="nav-logo">
                    <img src={logoImg} alt="voice-team-logo" />
                </div>
                <h1 className="dashboard-title">{name}</h1>
            </div>
            
            <div className="navbar-navigation">
                {pages.map(el=>{
                    return <a href="#" className ={`navbar-link ${el.isSpecial ? 'special-link' : null}`}> {el.name} </a>
                })}
            </div>
            
        </nav>
    )
}