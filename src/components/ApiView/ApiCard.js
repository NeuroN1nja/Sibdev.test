import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getData } from './actions'

const mapState = state => {
  return {
    user: state.selectedUser
  }
}

const actions = {
  getData
}

const mapCardDescription = {
  gify: 'Cats gifs',
  drupal: 'Book of drupal guides',
  bbc: 'Top headlines from BBC News',
  nyt: 'New York Times news',
  anime: 'Top anime by MyAnimeList'
}

class ApiCard extends Component {

  fetchData = () => {
    this.props.getData(this.props.card)
  }

  render() {
    return (
      <Col onClick={this.fetchData}>
        <Card
          className='api-card'
          body
          sm={{ size: 4, order: 2, offset: 1 }}
        >
            <div className='svg-logo-box'>
              <img className='svg-logo' src={`/assets/${this.props.card}.svg`}></img>
            </div>
            <CardTitle>{mapCardDescription[this.props.card]}</CardTitle>
            <Link to={`/${this.props.card}`}>
              <Button outline color="primary">
                View
              </Button>
            </Link>
        </Card>
      </Col>
    )
  }
}

export default connect(mapState, actions)(ApiCard)
