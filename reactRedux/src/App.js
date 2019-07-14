import './App.css';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import 'milligram'

class App extends PureComponent {
  render() {
    return (
      <div>
        <table>Table 1</table>
        <lu>
          <li>item 1 Tabela 1</li>
          <li>item 2 Tabela 1</li>
          <li>item 3 Tabela 1</li>
          <button>Tabela 1</button>
        </lu>
        <table>Table 2</table>
        <lu>
          <li>item 1 Tabela 2</li>
          <li>item 2 Tabela 2</li>
          <li>item 3 Tabela 2</li>
          <button>Tabela 2</button>
        </lu>
        <table>Table 3</table>
        <lu>
          <li>item 1 Tabela 3</li>
          <li>item 2 Tabela 3</li>
          <li>item 3 Tabela 3</li>
          <button>Tabela 3</button>
        </lu>
      </div>
    )
  }
}

//

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
