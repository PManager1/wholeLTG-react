import React from 'react'; 
import styled from 'styled-components'; 

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// MORE EXAMPLE here:    https://www.robinwieruch.de/react-styled-components

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;



const StyledComponent = () =>{
    return (
            <div>
              <Wrapper>
                <Title>      
                Hello World!
                <Button>Normal</Button>
                <Button primary>Primary</Button>
                </Title>
            </Wrapper>


            </div>

    ); 
}

export default StyledComponent; 