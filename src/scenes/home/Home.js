import React, { Component, Fragment } from 'react'
import Cards from './component/card/Cards'

import {
   Container,
   Row,
   Col
} from 'react-bootstrap'

import Navbar from '../../components/navbar/Navbars';
import Loading from '../../components/loadingSpinner/Loading'
import { connect } from 'react-redux'
import { fetchPost, EDIT, DELETE } from './ZHomeAction'


class Home extends Component {

   componentWillMount() {
      this.props.fetchPost()
      // console.log(this.props.StateZhomeReducer.data, "<<<<<<<<<<<<<< cek componentWillMount")
   }

   // componentWillReceiveProps(nextProps) {
   //    this.props.fetchPost()
   //    console.log(this.props.StateZhomeReducer.data, "<<<<<<<<<<<<<< cek componentWillReceiveProps")
   // }

   componentDidMount(nextProps) {
      this.props.fetchPost()
      // console.log(this.props.StateZhomeReducer.data, "<<<<<<<<<<<<<< cek componentWillReceiveProps")
   }

   fEdit = (i) => {
      let data = this.props.StateZhomeReducer.data[i]
      let payload = {
         createOrEdit: 1,
         data: data
      }
      this.props.EDIT(payload)
      this.props.history.push('/Add')
   }


   fRemove = (i) => {
      this.props.DELETE(i)
      this.props.history.push('/')
   }

   render() {
      let { data, loading } = this.props.StateZhomeReducer
      // console.log(data, "<<<<<<<<<<<<<< cek perubahan data render")
      let listBlog = data.map((v, idx) => {
         return (
            <Cards
               key={idx}
               index={v.id}
               arr={idx}
               title={v.title}
               content={v.content}
               fEdit={this.fEdit}
               fRemove={this.fRemove}
            />
         )
      })

      const HomeDone = () => {
         return (
            <Fragment>
               <Navbar />
               <Container>
                  <Row>
                     <Col lg={12}>
                        {listBlog}
                     </Col>
                  </Row>
               </Container>
            </Fragment>
         )
      }
      return (
         loading ? <HomeDone /> : <Loading />
      );
   }
}

const mapStateToProps = state => ({
   StateZhomeReducer: state.ZhomeReducer
})

const mapDispatchToProps = { fetchPost, EDIT, DELETE }

let connectRedux = connect(mapStateToProps, mapDispatchToProps)(Home)

export default connectRedux;
