import React, { Component } from 'react'
import { Col, Container, Row } from "reactstrap"
import CategoriesList from './components/categoriesList'
import ProductList from './components/productList'


class App extends Component {
  state = { currentCategory: "", products: [] }

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id);
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products"
    if (categoryId) {
      url += "?categoryId=" + categoryId
    }
    fetch(url).then(response => response.json()).then(data => this.setState({ products: data }));
  }

  render() {
    let categoryInfo = { title: "CategoryList" }
    let productInfo = { title: "ProductList" }
    return (
      <>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col xs="3">
              <CategoriesList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList products={this.state.products} currentCategory={this.state.currentCategory} info={productInfo} />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default App;
