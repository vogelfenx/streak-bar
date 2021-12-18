import React from 'react'
import { MultiArcCircle } from 'react-native-circles';

export default function Circle(props) {
  const radius = props.radius ? props.radius : 10
  const color = props.circleStyle.color ? props.circleStyle.color : 'black'
  const backgroundColor = props.circleStyle.backgroundColor ? props.circleStyle.backgroundColor : 'white'
  const width = props.circleStyle.width ? props.circleStyle.width : 1

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
