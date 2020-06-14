import React from 'react'
import axios from 'axios'

class InfoMenu extends React.Component {

    constructor(props) {
        super(props)
        this.restaurant = props.location.state.restaurant
        console.log(this.restaurant)
    }

    state = {
        dishes: []
    }

    componentDidMount() {
        axios.get(`https://eatstreet.com/publicapi/v1/restaurant/${this.restaurant.apiKey}/menu`,
            {
                headers: {
                    'X-Access-Token': 'VMOZDYWEHBJFAU5OPFDJ7QC7V4======'
                }
            })
            .then((res) => res.data)
            .then((data) => {
                this.setState({ dishes: data })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    render() {
        const { dishes } = this.state
        console.log(dishes)
        return (
            <div>
                <h1>Despues de escanear el codigo te manda a un menu que es el del restaurant y se divide en categorias.</h1>
                {Object.keys(dishes).map((dish) => (
                    <div>
                        <h2>{dishes[dish].name}</h2>
                        <ul>
                            {Object.keys(dishes[dish].items).map((meal) => (
                                <li>{dishes[dish].items[meal].name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
                <h1>Y asi nadamas por parte del cliente, y no nos metemos aun con delivery o location pero puede agregarse a la base de datos para usarlo luego.</h1>
                <h1>pd. no se si entendi bien, besos.</h1>
            </div>
        )
    }
}

export default InfoMenu