import React, { Component } from 'react'

export default class New extends Component {
    render() {
return (
<div>
<form action='/logs' method='POST'>
   Title:    <input type='text' name='title' placeholder='Enter Title' />
   Entry:    <input type='textarea' name='entry' />
   ShipIsBroken? <input type='checkbox' name='shipIsBroken' />
                 <input type="submit" name="" value="Submit" />
</form>
</div>
)
    }
}