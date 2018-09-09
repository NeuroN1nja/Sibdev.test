import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from './actions'
import { Redirect, Route } from 'react-router-dom'

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

    // componentDidMount() {
    //     console.log('ololo')
    //     if (!this.props.user.cards.includes(this.props.match.params.id)) {
            
    //         this.props.history.push('/dashboard')
    //     }
    // }

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
    

    return (
        <div>
            {this.props.data[card][mapDataApi[card]] &&
                this.props.data[card][mapDataApi[card]].map(item => (
                    <li key={item.url}>
                        <h3>{item.title}</h3>
                        <a href={item.url}>{item.url}</a>
                    </li>
                ))
            }
        </div>
    )
  }
}

export default connect(mapState, actions)(ApiView)
