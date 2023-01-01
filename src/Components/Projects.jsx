import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip'

export const Projects = () => {
  return (
    <div id='projects'>
      <GitHubCalendar username='jagroshansingh'>
        <ReactTooltip html delayShow={20}/>
      </GitHubCalendar>

    </div>
  )
}
