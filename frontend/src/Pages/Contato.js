import React from 'react';
import {Container} from 'react-bootstrap';
import {lazy, Suspense} from 'react'

const Form = lazy(() => import ('../Components/Footer/Contato/Form'));


function Contato() {
    return (
      
            <Container fluid>
              <Suspense fallback={<img src="http://3.bp.blogspot.com/-HeJEYKLmxdc/UNEeI_ByfnI/AAAAAAAAEqQ/FsSpI_0UhVk/s1600/Gifs+Carregando+-+V%25C3%25A1rias+Pixel+Create++9.gif" alt="gif" />} >
                <Form />
              </Suspense>
            </Container>
    );
  }
  
export default Contato;