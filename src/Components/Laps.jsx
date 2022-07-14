import React from 'react'

export default function Laps(props) {
  return (
    <div className="laps-list">
        {
        props.laplist.map(
            (time) =>
              <li className="lap">
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)} :</span>
                <span>&nbsp;{("0" + Math.floor((time / 1000) % 60)).slice(-2)} :</span>
                <span>&nbsp;{("0" + ((time / 10) % 100)).slice(-2)}</span>
              </li>
            )
        }

    </div>
  )
}
