import React from 'react'
import {Box, Title, Text, Button, Video, Wrapper } from './Let.styled'
import ReactPlayer from 'react-player/youtube'

const Let = ({ titl, tex, button, video }) => {
  return (
    <Box>
      <Wrapper> <Title>{titl}</Title>
      <Text>{tex}</Text>
      <Button>{button}</Button></Wrapper>
      <Video>
        <ReactPlayer width='400px' height='300px' url={video} />
      </Video>
    </Box>
  )
}

export {Let} 