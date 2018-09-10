import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from './actions'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Redirect } from 'react-router-dom'

const mapState = state => {
    return {
        user: state.selectedUser,
        data: state.allData,
        loading: state.allData.loading
    }
}

const mapDataApi = {
    drupal: 'list',
    gify: 'data',
    bbc: 'articles',
    nyt: 'results',
    anime: 'top'
}

const actions = {
    getData
}



export class ApiView extends Component {

    componentWillReceiveProps(nextProps) {
        if (this.props.user !== nextProps.user) {
            this.props.history.push('/dashboard')
        }
    }

  render() {
    const card = this.props.match.params.id

    if (this.props.loading) {
          return 'loading'
    }

    if (this.props.user.id === undefined
        || !this.props.user.cards.includes(card)) {
        return <Redirect to='/' />
    }

    return (
        <ListGroup>
            {this.props.data[card][mapDataApi[card]] &&
                this.props.data[card][mapDataApi[card]].map(item => (
                    <ListGroupItem key={item.url}>
                        <h3>{item.title}</h3>
                        <a href={item.url}>{item.url}</a>
                    </ListGroupItem>
                ))
            }
        </ListGroup>
    )
  }
}

export default connect(mapState, actions)(ApiView)
