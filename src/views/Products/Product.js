import React from 'react';
import {Button, Card, CardImg, Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {ProductDeleteAction} from "../../redux/actions/ProductFunAction";
import { useHistory } from "react-router-dom";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Popconfirm, Tooltip} from "antd";
import ReactReadMoreReadLess from "react-read-more-read-less";



const Product=({product})=>{
  let history = useHistory();
  const dispatch=useDispatch();
  const productList=useSelector(state => state.productList)
  const {products}=productList;
  const onProductEditHandler = (id) => {
    debugger;
    products.filter(product => {
      return product._id === id;
    })
    history.push(`/products/edit-product/${id}`)
  }

  const onProductDeleteHandler = (id) => {
    dispatch(ProductDeleteAction(id))
  }
  return(
    <Card className="my-3 p-3 rounded">
      <CardImg src={product.image} variant='top' />
      <Card.Body>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        <Card.Text>
          {product.price} Rs
        </Card.Text>
        <Card.Text>
          Stock: {product.stock}
        </Card.Text>
        <Card.Text>
          Category: {product.category.name }
        </Card.Text>
        <Card.Text>
          <ReactReadMoreReadLess
          charLimit={15}
          readMoreText={" ▼"}
          readLessText={" ▲"}
          readMoreClassName="read-more-less--more"
          readLessClassName="read-more-less--less"
          >
          {product.description}
        </ReactReadMoreReadLess>
        </Card.Text>
      </Card.Body>
      <Col>
        <Popconfirm
          title="Are you sure to Edit this Product?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => onProductEditHandler(product._id)}
        >
          <Tooltip title="Edit Product">
            <Button
              style={{float:'right'}}
              variant='light'
            >
              <EditOutlined/>
            </Button>
          </Tooltip>
        </Popconfirm>
        <Popconfirm
          title="Are you sure to delete this Product?"
          okText="Yes"
          cancelText="No"
          style={{marginLeft: '30px'}}
          onConfirm={() => onProductDeleteHandler(product._id)}
        >
          <Tooltip title="Delete Product">
            <Button
              variant='light'
            >
              <DeleteOutlined/>
            </Button>
          </Tooltip>
        </Popconfirm>
      </Col>
    </Card>
  )
}

export default Product;


// import React from 'react';
// import {Button, Card, CardImg, Col, Row} from "react-bootstrap";
// import {useDispatch, useSelector} from "react-redux";
// import {ProductDeleteAction} from "../../redux/actions/ProductFunAction";
// import { useHistory } from "react-router-dom";
// import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
// import {Popconfirm, Tooltip} from "antd";
// import ReactReadMoreReadLess from "react-read-more-read-less";



// const Product=({product})=>{
//   let history = useHistory();
//   const dispatch=useDispatch();
//   const productList=useSelector(state => state.productList)
//   const {products}=productList;
//   const onProductEditHandler = (id) => {
//     debugger;
//     products.filter(product => {
//       if (product._id === id) {
//         return true
//       }
//       else {
//         return false
//       }
//     })
//     history.push(`/products/edit-product/${id}`)
//   }
//
//   const onProductDeleteHandler = (id) => {
//     dispatch(ProductDeleteAction(id))
//   }
//   return(
//     <Card className="my-3 p-3 rounded">
//       <CardImg src={product.image} variant='top' />
//       <Card.Body>
//         <Row>
//           <Col>
//             <Card.Title as='div'>
//               <strong>{product.name}</strong>
//             </Card.Title>
//           </Col>
//           <Col>
//             {product.price} Rs
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             {product.stock}
//           </Col>
//           <Col>
//             {product.category}
//           </Col>
//         </Row>
//         <Card.Text>
//           <ReactReadMoreReadLess
//             charLimit={15}
//             readMoreText={" ▼"}
//             readLessText={" ▲"}
//             readMoreClassName="read-more-less--more"
//             readLessClassName="read-more-less--less"
//           >
//             {product.description}
//           </ReactReadMoreReadLess>
//         </Card.Text>
//       </Card.Body>
//       <Col>
//         <Popconfirm
//           title="Are you sure to Edit this Product?"
//           okText="Yes"
//           cancelText="No"
//           onConfirm={() => onProductEditHandler(product._id)}
//         >
//           <Tooltip title="Edit Product">
//             <Button
//               style={{float:'right'}}
//               variant='light'
//             >
//               <EditOutlined/>
//             </Button>
//           </Tooltip>
//         </Popconfirm>
//         <Popconfirm
//           title="Are you sure to delete this Product?"
//           okText="Yes"
//           cancelText="No"
//           style={{marginLeft: '30px'}}
//           onConfirm={() => onProductDeleteHandler(product._id)}
//         >
//           <Tooltip title="Delete Product">
//             <Button
//               variant='light'
//             >
//               <DeleteOutlined/>
//             </Button>
//           </Tooltip>
//         </Popconfirm>
//       </Col>
//     </Card>
//   )
// }
//
// export default Product;
