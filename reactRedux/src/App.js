import './App.css';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'

import 'milligram'

class App extends PureComponent {
  render() {
    return (
      <Container>
        <Div>
          <ul>
            <span>Table 1</span>
            <li>item 1 Tabela 1</li>
            <li>item 2 Tabela 1</li>
            <li>item 3 Tabela 1</li>
            <button>Tabela 1</button>
          </ul>
        </Div>
        <Form>
          <span htmlFor="id" name="id" id="id">Id</span>
          <input type="text" id="id" name="id" />
          <button type="submit">Submit</button>
        </Form>
      </Container>
    )
  }
}

const Div = styled.div`
border: 1px solid;
width: 500px;
height 300px;
padding: 10px;
`

const Container = styled.div`
display: flex;
justify-content: space-between;
padding 10px;
flex-wrap: wrap;
flex-direction: row;
`

const Form = styled.form`
border: 1px solid;
justify-content: space-between;
width: 500px;
height 300px;
display: flex;

`


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
