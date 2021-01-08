import React, { Component } from 'react';
import { Button, Col, Row, Table } from "react-bootstrap";
import { HiPencil, HiPlusCircle, HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import CategoryService from "../../../services/category.service";

class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = ({ categories: [] });
    }

    async componentDidMount() {

        let response = await CategoryService.getCategories();

        this.setState({
            categories: response.data.categories
        })

    }

    async deleteCategory(id) {
        try {
            await CategoryService.delete(id);
            let response = await CategoryService.getCategories();
            this.setState({
                categories: response.data.categories
            });
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs={10}>
                        <h1>Catégories</h1>
                    </Col>
                    <Col>
                        <Link to={`/admin/categories/add`}>
                            <Button variant="dark"><HiPlusCircle /></Button>
                        </Link>
                    </Col>
                </Row>
                <div className="playlist-container">
                    <Table className="music-table" hover>
                        <thead>
                            <tr>
                                <th className="table-header">Id</th>
                                <th className="table-header">Nom</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.categories.length > 0 ?
                                    this.state.categories.map((category, i) => {
                                        return <tr className="music-tr" key={i}>
                                            <td>{category._id}</td>
                                            <td>{category.name}</td>
                                            <td>
                                                <Link to={`/admin/categories/update/${category._id}`}>
                                                    <Button style={{ marginRight: 10 }}
                                                        variant="dark"><HiPencil /></Button>
                                                </Link>
                                                <Button variant="dark" onClick={() => this.deleteCategory(category._id)}>
                                                    <HiTrash />
                                                </Button>
                                            </td>
                                        </tr>
                                    })
                                    :
                                    <tr className="music-tr">
                                        <td colSpan="5">Aucune catégorie à afficher pour le moment</td>
                                    </tr>
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Categories;