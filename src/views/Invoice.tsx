import React from 'react'
export interface Props {
  text: string
}
export const Invoice = ({ text }: Props) => {
  return <div className="text">This is invoice abbas text: {text}</div>
}
