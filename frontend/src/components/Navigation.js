import React from 'react'
import { connect } from 'react-redux'

import { loginUser } from './../reducers/userReducer'

import { Menu, Container, Dropdown, Image } from 'semantic-ui-react'

class Navigation extends React.Component {

    render() {
        return (
            <Menu fixed='top' inverted>
            <Container>
            <Menu.Item as='a' header>
                <Image
                size='mini'
                src='/logo.png'
                style={{ marginRight: '1.5em' }}
                />
                Workout Planner
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>

            <Dropdown item simple text='Dropdown'>
                <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                    <i className='dropdown icon' />
                    <span className='text'>Submenu</span>
                    <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Container>
            </Menu>
        )
    }
}

export default Navigation