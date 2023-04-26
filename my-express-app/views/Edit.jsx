import React, { Component } from 'react'

export default class Edit extends Component {
    render() {
const log = this.props.log
return (
<div>
<form action={`/logs/${log.id}?_method=PUT`} method='POST'>
  Title:    <input type='text' name='title' defaultValue={log.title} />
  Entry:    <input type='textarea' name='entry' defaultValue={log.entry} />
  ShipIsBroken?
    {log.shipisBroken ? <input type='checkbox' name='shipIsBroken' defaultChecked /> : <input type='checkbox' name='shipIsBroken' />}
<input type="submit" name="" value="Submit Changes" />
</form>
</div>
)
}
}