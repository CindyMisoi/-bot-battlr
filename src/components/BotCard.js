import React from "react";

function BotCard({ bot, botFunction }) {
  return (
    <div>
      <div key={bot.id} onClick={() => botFunction(bot)}>
        <img src={bot.avatar_url} />
        <h3>{bot.name}</h3>
        <h3>{bot.health}</h3>
        <h3>{bot.damage}</h3>
        <h3>{bot.armor}</h3>
        <h3>{bot.bot_class}</h3>
        <h3>{bot.catchphrase}</h3>
        <h3>{bot.created_at}</h3>
        <h3>{bot.updated_at}</h3>
      </div>
      <button onClick={() => botFunction()}>
        x
      </button>
    </div>
  );
}

export default BotCard;
