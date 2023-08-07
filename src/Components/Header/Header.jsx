import Logo from './Logo.png'
import React from 'react'
import {Box, Image, List, Item, MenuItem, Sign, But } from './Header.styled'

export default function Header({stats, sign, sogin }) {
  return (
    <Box>
      <Image src={Logo} className='logo' alt='logo' />
      <List>
        {stats.map(({ id, menu }) => (
          <Item key={id}>
            <MenuItem>{menu}</MenuItem>
          </Item>
        ))}
      </List>
       <Sign>{sign}</Sign>
        <But>{sogin}</But>
    </Box>
  );
}
