let darthHealth = 10
let attackPower = 8

while ( darthHealth >= 0 || attackPower >= 0 )  {
    if( darthHealth <= 0) return console.log('1')
    if( attackPower <= 0) return console.log('0')
    
    darthHealth = darthHealth - attackPower
    attackPower = Math.floor(attackPower/2)
    console.log(darthHealth, attackPower)
}





