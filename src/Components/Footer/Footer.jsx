import React from 'react'
import {Box, Image, Item, List, Text} from "./Footer.styled"
import White from "./White.png"
const Footer = ({footer}) => {
  return (
      <Box>
          <Image src={White}></Image>
          <List>
              {footer.map(({ id, menu }) => (
            <Item key={id}>
                <Text>{menu}</Text>
            </Item> 
              ))}
        </List>
      
    </Box>
  )
}

export {Footer}