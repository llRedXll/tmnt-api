const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tmnt = {
    'leonardo':{
        'color': 'Ocean blue',
        'weapon': 'Katanas',
        'attitude': 'Calm, cool and collected'

    },
    'raphael':{
        'color': 'Red',
        'weapon': 'Sai',
        'attitude': 'Rebellious, cynical and quick witted'

    },
    'donatello':{
        'color': 'Purple',
        'weapon': 'Oak Bō',
        'attitude': 'Smart and gentle'

    },
    'michelangelo':{
        'color': 'Orange',
        'weapon': 'Nunchucks',
        'attitude': 'Chill dude'

    },
    'unknown':{
        'color': 'unknown',
        'weapon': 'unknown',
        'attitude': 'unknown'

    }
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res) => {
    const turtleName = req.params.name.toLowerCase().trim()
    if (tmnt[turtleName]){
        res.json(tmnt[turtleName])
    } else {
        res.json(tmnt['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! Better go catch it!` );
})