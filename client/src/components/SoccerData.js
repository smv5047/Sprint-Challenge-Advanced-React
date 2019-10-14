import React from 'react'
import axios from 'axios'

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
                console.log(res.data)
                this.setState({
                    players: res.data
                })
            })

            .catch((err)=>{console.log(err)})
    }

    render(){
        {console.log(this.state.players)}
        return (
          <div>
            {this.state.players.map(player=>(
                <h1>{player.name}</h1>
            ))}
          </div>
        );
      }
}

export default SoccerData
