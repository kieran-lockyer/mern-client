import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';

class Welcome extends Component {
  componentDidMount() {
    // Action Creator
    this.props.welcome()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h3>{this.props.homepage}</h3>
      </div>
    )
  }
}

// Maps redux state to props
const mapStateToProps = (state) => ({
  homepage: state.welcome
})

// Connect redux with component
export default connect(mapStateToProps, actions)(Welcome)