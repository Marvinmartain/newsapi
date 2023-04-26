import React, { Component } from 'react'

export default class Index extends Component {
    render() {
        const logs = this.props.logs
        return (
<div>
<nav>
<a href='/logs/new'>Add a new Log</a>
</nav>
<ul>
    {logs.map((log, i) => {
      return (
<li key={i}>
<a href={`/log/${log.id}`}>{log.title}</a>
<form action={`/logs/${log.id}?_method=DELETE`} method='POST'>
<input type="submit" value="Delete" />
</form>
<a href={`/logs/${log.id}/edit`}>Edit this log</a>
</li>
)
})}
</ul>
</div>
)
}
}