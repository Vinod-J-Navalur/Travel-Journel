


export default function Hero (props){
    return (
        <div className="card">
            <section>
                <div className="hero--main">
                    <img src={`../images/${props.mainImg}.png`} className="hero--image"/>
                    <div className="card--stats">
                        <div className="first--line">
                        <img src= {`../images/${props.image}.jpg`} className="card--star"/>
                    <span className="stats--text">{`${props.location}`}</span>
                    
                        </div>
                        <div className="second--line"><span className="hero--title"> {`${props.title}`}</span>
                        
                        </div>
                        <span > </span>
                        
                        <div className="last-line">
                        <span className="hero--date" >{`${props.date}`}</span>
                        
                        </div>
                        <span></span>
                        <span className="desc">{`${props.description}`}</span>
                        
                    
                    
                    </div>
                    
                    
                    </div>
                
                
                </section>
            
        </div>
        
    )
}