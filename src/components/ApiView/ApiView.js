import React from 'react'
import { connect } from 'react-redux'
import { getData } from './actions'

const mapState = state => {
    return {
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

const ApiView = props => {
    const card = props.match.params.id

    if (props.loading) {
          return 'loading'
    }

    return (
        
      <div>
        {props.data[card][mapDataApi[card]] &&
            props.data[card][mapDataApi[card]].map(item => (
                <li key={item.url}>
                    <h3>{item.title}</h3>
                    <a href={item.url}>{item.url}</a>
                </li>
            ))
        }
      </div>
    )
}

export default connect(mapState, actions)(ApiView)
