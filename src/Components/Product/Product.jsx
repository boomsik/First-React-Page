import React from 'react'
import { Box, Wrapper, Section, Image, Content, Title, Pretitle, Button, Text } from "./Product.styled"
import { Face } from "./Face/Face";
import face from "../../data/face.json";

const  Product = ({preTitle,text,descr,btn,image}) => {
  return (
    <Box>
        <Wrapper>
            <Section>
                  <Image src={image} ></Image>
            </Section> 
            <Content>
                <Pretitle>{preTitle}</Pretitle> 
                <Title>{text}</Title>
                <Text>{descr}</Text>
                <Button>{btn}</Button>
            </Content>
      </Wrapper>
      <Face
        title={face.title}
        name={face.name} 
        descr={face.descr} 
        textOne={face.textOne} 
        textTwo={face.textTwo} 
        image={face.image}
      />
    </Box>
  )
}


export {Product}
