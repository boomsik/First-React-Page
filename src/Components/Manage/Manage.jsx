import React from 'react'
import {Box, Block, Title, Paragraph, Button } from './Manage.styled'


export default function Manage({title, text, btn}) {
  return (
    <Box>
      <Block>
        <Title>{title}</Title>
        <Paragraph>{text}</Paragraph>
        <Button>{btn}</Button>
      </Block>
    </Box>
  )
}
