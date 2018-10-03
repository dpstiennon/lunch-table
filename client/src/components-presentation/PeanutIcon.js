import React from 'react'

export const PeanutIcon = ({peanut}) => {
  if(peanut === 'noPeanutOk') {
    return <span>OK</span>
  } else if (peanut === 'peanut') {
    return <img width="24px" height="24px" src="/peanut.png" />
  } else if (peanut === 'noPeanut') {
    return <img src="/round-block-24px.svg" />
  }
}
