import React from 'react'
import { Box, List, Item, PreTitle, GreenText, Text } from './Work.styled'


export default function Work({pretitle,green,text}) {
  return (
    <Box>
        <List>
              <Item>
                  <PreTitle>{pretitle}</PreTitle>
                  <GreenText>{green}</GreenText>
            </Item>  
              <Item>
                  <Text>{text}</Text>
            </Item>  
        </List>
    </Box>
  )
}
