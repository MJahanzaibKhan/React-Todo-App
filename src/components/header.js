import React from 'react';
import { Form, FormGroup, Label, Col, Input, Button, CustomInput, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';


class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            allValues: [],
            value: '',
            index: "",
            key: 0,
            update: [],
            btnVal: true
        }
        this.onHandleChange = this.onHandleChange.bind(this);
    }


    onHandleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    addItem = (e) => {
        let list = this.state.allValues;
        let keys = this.state.key;
        list.push({ item: this.state.value, key: this.state.key });
        this.setState({
            allValues: list,
            value: '',
            key: keys + 1,
            update: 0
        })
    }

    editItem = (id) => {
        var allval = this.state.allValues;
        this.setState({
            value: allval[id].item,
            index: id,
            btnVal: false
        })
    }

    updateItem = (e) => {
        var valu1 = this.state.allValues;
        let obj = { item: this.state.value, key: this.state.index }
        valu1.splice(this.state.index, 1, obj)

        this.setState({
            allValues: valu1,
            update: [],
            value: '',
            btnVal: true
        })
    }

    deleteItem = (id) => {
        let arr1 = this.state.allValues;
        arr1.splice(id, 1);
        this.setState({
            allValues: arr1
        })
    }

    deleteAllItem = () => {
        let arr1 = []
        this.setState({
            allValues: arr1,
            value: '',
            key: 0,
            update: ''
        })
    }


    render() {
        return (
            <div>
                <Form >

                    <FormGroup row>
                        <Col>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Item</InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" name="email" id="exampleEmail" placeholder="Add Item Text" onChange={this.onHandleChange} value={this.state.value} />
                            </InputGroup>
                        </Col>
                    </FormGroup>

                    <FormGroup row className="text-center">
                        <Col>
                            <span>
                                <Button color="success" type='button' onClick={this.addItem}>Insert Item</Button>

                            </span>
                            <span>
                                <Button color="warning" type='button' onClick={this.updateItem} disabled={this.state.btnVal}>Update Item</Button>

                            </span>
                            <span>
                                <Button color="info" type='button' onClick={this.onHandleChange}>Clear Field</Button>

                            </span>
                            <span>
                                <Button color="danger" type='button' onClick={this.deleteAllItem}>Delete All</Button>
                            </span>
                        </Col>
                    </FormGroup>
                    {this.state.allValues.map((val, index) => {
                        return (
                            <div key={index} className='container listBackgroungColor ' >
                                <FormGroup row className='listBackgroungColor'>
                                    <Col sm={1}>
                                        <CustomInput type="checkbox" label={index} id="exampleCustomCheckbox" />
                                    </Col>
                                    <Col sm={7}>
                                        <Label for="exampleCustomCheckbox">{val.item}</Label>
                                    </Col>
                                    <Col>
                                        <Button color="info" type='button' size="sm" onClick={() => this.editItem(index)} > Edit</Button>{' '}
                                    </Col>
                                    <Col>
                                        <Button color="danger" type='button' size="sm" onClick={() => this.deleteItem(index)}>Delete</Button>{' '}
                                    </Col>
                                </FormGroup>
                            </div>
                        )
                    })}
                </Form>

            </div>
        )
    }
}

export default Header;
