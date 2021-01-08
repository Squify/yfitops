import React, { Component } from 'react';
import { Button, Col, Row, Table } from "react-bootstrap";
import { HiPencil, HiPlusCircle, HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import UserService from '../../../services/user.service';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = ({ users: [] });
    }

    async componentDidMount() {

        let response = await UserService.list();

        this.setState({
            users: response.data.users
        })

    }

    async deleteUser(id) {
        try {
            await UserService.remove(id);
            let response = await UserService.list();
            this.setState({
                users: response.data.users
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
                        <h1>Users</h1>
                    </Col>
                </Row>
                <div className="playlist-container">
                    <Table className="music-table" hover>
                        <thead>
                            <tr>
                                <th className="table-header">Id</th>
                                <th className="table-header">Nom</th>
                                <th className="table-header">Email</th>
                                <th className="table-header">Rôle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.length > 0 ?
                                    this.state.users.map((user, i) => {
                                        return <tr className="music-tr" key={i}>
                                            <td>{user._id}</td>
                                            <td>{user.firstname} {user.lastname}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role}</td>
                                            <td>
                                                <Link to={`/admin/users/update/${user._id}`}>
                                                    <Button style={{ marginRight: 10 }}
                                                        variant="dark"><HiPencil /></Button>
                                                </Link>
                                                <Button variant="dark" onClick={() => this.deleteUser(user._id)}>
                                                    <HiTrash />
                                                </Button>
                                            </td>
                                        </tr>
                                    })
                                    :
                                    <tr className="music-tr">
                                        <td colSpan="5">Aucun utilisateur à afficher pour le moment</td>
                                    </tr>
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Users;