import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import {
   Form,
   Container
} from 'react-bootstrap'
import Navbar from '../../components/navbar/Navbars'
import { fetchPostCreate } from './ZHomeAction'

class HomeAdd extends Component {

   fSubmit = (e) => {
      e.preventDefault();
      //get value form wirh this.refs
      let title = this.refs.judul.value
      let content = this.refs.isi.value

      let tipe = this.props.StateZhomeReducer.createOrEdit

      if (tipe === 1) {
         let id = this.refs.id.value
         let data = {
            id, title, content
         }
         this.props.fetchPostCreate(data)
      } else {
         let data = {
            title, content
         }
         this.props.fetchPostCreate(data)
      }

      this.props.history.push('/')
   }

   // componentWillMount() {
   //    let { title, content } = this.props.StateZhomeReducer.dataForEdit
   //    this.refs.judul.value = title
   //    this.refs.isi.value = content
   // }
   componentDidMount() {
      console.log(this.props.StateZhomeReducer.dataForEdit)
      let { title, content, id } = this.props.StateZhomeReducer.dataForEdit
      let tipe = this.props.StateZhomeReducer.createOrEdit
      if (tipe === 1) {
         this.refs.judul.value = title
         this.refs.isi.value = content
         this.refs.id.value = id
      }

   }


   render() {
      // if (tipe === 1) {
      // }

      return (
         <Fragment >
            <Navbar />
            <Container>
               <Form>
                  <input type="hidden" ref="id" />
                  <Form.Group controlId="formGroupEmail">
                     <Form.Label>Judul Saran</Form.Label>
                     <Form.Control ref="judul" type="text" placeholder="Ketik Judul" />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                     <Form.Label>Isi Saran</Form.Label>
                     <Form.Control ref="isi" as="textarea" rows="3" placeholder="Ketik isi Saran" />
                  </Form.Group>
                  <Form.Group controlId="Submit" style={{ float: 'right' }}>
                     <button onClick={this.fSubmit} className="btn btn-success" type="submit">Submit</button>
                  </Form.Group>
               </Form>
            </Container>
         </Fragment >
      );
   }
}

const mapStateToProps = (state) => ({
   StateZhomeReducer: state.ZhomeReducer
})

const mapDispatchToProps = { fetchPostCreate }

export default connect(mapStateToProps, mapDispatchToProps)(HomeAdd);
