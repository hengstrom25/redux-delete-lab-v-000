import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';

import { connect } from 'react-redux'

class BandsContainer extends Component {
  
<<<<<<< HEAD
  renderBands = () => (
    this.props.bands.map((band) => <Band key={band.id} id={band.id} name={band.name} delete={this.props.deleteBand} />)
  )
=======
  renderBands = () => ()
    this.props.band.map(band) => <Band key={band.id} id={band.id} name={band.name} delete={this.props.deleteBand} />)
    )
>>>>>>> 696f752a57d1b6d33f1f868945a3e1b0d4a441ff
  
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>{this.renderBands()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type: "DELETE_BAND", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
