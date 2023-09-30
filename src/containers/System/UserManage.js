import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import {getAllUsers} from '../../services/userService';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: []
        }
    }

    async componentDidMount() {
        let response = await getAllUsers("ALL");
        if (response && response.data.errCode === 0){
            this.setState({
                arrUsers: response.data.users
            })
        }
    }

    /***
     * life cycle
     * 1. Run construct -> init state
     * 2. Did mout (set state) // ket noi api voi nodejs 
     * 3. Render
     * 
     * 
     * 
     */


    render() {
        console.log('check render', this.state)
        return (
            <div className="users-container">
                <div className='title text-center'> Manage users with Duy
                </div>
                <div className='user-table mt-4 mx-3'>
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                            {this.state.arrUsers && this.state.arrUsers.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className='btn-edit'><i className="fas fa-pencil-alt"></i></button>
                                            <button className='btn-delete'><i className="fas fa-trash"></i></button>

                                        </td>
                                    </tr>
                                )
                            })}
                        <tr>
                            <td>Berglunds snabbköp</td>
                            <td>Christina Berglund</td>
                            <td>Sweden</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>
                        <tr>
                            <td>Ernst Handel</td>
                            <td>Roland Mendel</td>
                            <td>Austria</td>
                        </tr>
                        <tr>
                            <td>Island Trading</td>
                            <td>Helen Bennett</td>
                            <td>UK</td>
                        </tr>
                        <tr>
                            <td>Königlich Essen</td>
                            <td>Philip Cramer</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Laughing Bacchus Winecellars</td>
                            <td>Yoshi Tannamuri</td>
                            <td>Canada</td>
                        </tr>
                        <tr>
                            <td>Magazzini Alimentari Riuniti</td>
                            <td>Giovanni Rovelli</td>
                            <td>Italy</td>
                        </tr>
                        <tr>
                            <td>North/South</td>
                            <td>Simon Crowther</td>
                            <td>UK</td>
                        </tr>
                        <tr>
                            <td>Paris spécialités</td>
                            <td>Marie Bertrand</td>
                            <td>France</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
