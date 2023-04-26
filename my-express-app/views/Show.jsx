import React, { Component } from 'react'

export default class Show extends Component {
    render() {
const log = this.props.log
    return (
<div>
    Title: {log.title}<br />Entry: {log.entry} <br />
    Entry created on:{log.createdAt.toLocaleString()}<br />
    ShipIsBroken?: {log.shipIsBroken ? "true" : "false"}<br />
    <a href="/logs">Back</a>
</div>
)
}
}
module.exports = Show