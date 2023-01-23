import React from 'react'
import BotCard from './BotCard'

function YourBotArmy(props) {
// your bot army code here
const bots  = props.bots.map((bot)=>{
    return <BotCard
    key={bot.id}
    bot = {bot}
    botFunction = {props.removeBot}
    />
})
    return(
        <div>
            {bots}
            {
                bots.length === 0? <h1>Your Bots</h1> : null
            }
        </div>
    )
}

export default YourBotArmy
