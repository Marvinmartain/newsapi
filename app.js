require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Log = require('./models/logs');
const app = express();
const port = 3000;
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }))
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
})
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});
app.get('/logs', (req, res) => {
    Log.find({}, (err, allLogs) => {
        res.render('Index', {
            logs: allLogs
        })
    })

})
app.get('/log/:id', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        res.render('Show', { log: foundLog })
    })

})

app.get('/logs/new', (req, res) => {
    res.render('New')
})
app.post('/logs', (req, res) => {
    if (req.body.shipIsBroken == 'on') {
        req.body.shipIsBroken = true
    }
    else {
        req.body.shipIsBroken = false
    }
    Log.create(req.body, (err, createdLog) => {
        res.redirect('/logs')
    })

})
app.delete('/logs/:id', (req, res) => {
    Log.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/logs')
    })
})
app.get('/logs/:id/edit', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if (!err) {
            res.render('Edit', {
                log: foundLog
            })
        } else {
            res.send({ msg: err.message })
        }
    })

})
app.put('/logs/:id', (req, res) => {
    if (req.body.shipIsBroken == 'on') {
        req.body.shipIsBroken = true
    }
    else {
        req.body.shipIsBroken = false
    }
    Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog) => {
        console.log(updatedLog)
        res.redirect(`/log/${req.params.id}`);
    });
})
app.get('/logs/seed', (req, res) => {
    Log.create([
        {
            title: 'John',
            entry: '12 pm',
            shipIsBroken: false
        },
        {
            title: 'Williams',
            entry: '9 am',
            shipIsBroken: true
        },
        {
            title: 'Edward',
            entry: '8 am',
            shipIsBroken: true
        }
    ], (err, data) => {
        res.redirect('/logs');
    })
});
app.listen(port, () => {
    console.log(`Listening to port: ${port} `)
})