import React from 'react'
import axios from 'axios'

import styles from '../App.css'


class SoccerData extends React.Component{
    constructor(){
        super()
        this.state ={
            players: []
        }
    }

    componentDidMount(){
        this.fetchSoccerData()
    }

    fetchSoccerData = () => {
        axios.get('http://localhost:5000/api/players')
            
            .then((res)=>{
                
                this.setState({
                    players: res.data
                })
            })

            .catch((err)=>{console.log(err)})
    }

    render(){
       
        return (
          <div className="display">
            {this.state.players.map(player=>(
                <div className="PlayerCard">
                    <h1>{player.name}</h1>
                    <div className="PlayerStats">
                        <div>
                            <h2>Country:</h2>
                            <p>{player.country}</p>
                        </div>
                        <div>
                            <h2>Searches:</h2>
                            <p>{player.searches}</p>
                        </div>
                    </div>
                </div>
            ))}
          </div>
        );
      }
}

export default SoccerData
