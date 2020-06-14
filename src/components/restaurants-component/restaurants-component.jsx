import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Restaurants extends Component {

    state = { restaurants: [] }

    componentDidMount() {
        axios.get('https://eatstreet.com/publicapi/v1/restaurant/search?method=both&street-address=316+W.+Washington+Ave.+Madison,+WI',
            {
                headers: {
                    'X-Access-Token': 'VMOZDYWEHBJFAU5OPFDJ7QC7V4======'
                }
            })
            .then((res) => res.data)
            .then((data) => {
                this.setState({ restaurants: data.restaurants })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    render() {
        const { restaurants } = this.state
        console.log(restaurants)
        return (
            <div>
                <h1>Digamos que en lugar del nombre es el Codigo QR, solo pongo los nombres en lista para ejemplitos, entonces ahora entra a un restaurant (se supone que escaneando el qr pero mientras dale click bb)</h1>
                {console.log(restaurants)}
                {Object.keys(restaurants).map((restaurant) => (
                    <Link to={{
                        pathname: 'info-menu',
                        state: {
                            restaurant: restaurants[restaurant]
                        }
                    }}>
                        <h2>{restaurants[restaurant].name}</h2>
                    </Link>
                ))}
            </div>
        )
    }
}

export default Restaurants