import React from 'react'
import { MultiArcCircle } from 'react-native-circles';

export default function Circle(props) {
  const radius = props.radius ? props.radius : 10
  const color = props.color ? props.color : 'black'
  const backgroundColor = props.radius ? props.backgroundColor : 'white'
  const width = props.width ? props.width : 1

  return (
    <MultiArcCircle
      radius={radius}
      intervals={[{ start: 0, end: 360 }]}
      color={color}
      backgroundColor={backgroundColor}
      width={width}
    />
  )
}
