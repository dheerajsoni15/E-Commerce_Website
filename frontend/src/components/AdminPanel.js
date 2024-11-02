// src/AdminPanel.js
import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      {/* Sidebar */}
      <div className="bg-dark text-light" style={{ width: '250px' }}>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
        </Navbar>
        <Nav className="flex-column p-3">
          <Nav.Link href="#dashboard">Dashboard</Nav.Link>
          <Nav.Link href="#users">Users</Nav.Link>
          <Nav.Link href="#settings">Settings</Nav.Link>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">My Admin Panel</Navbar.Brand>
        </Navbar>
        <Container fluid className="p-4">
          <Row>
            <Col>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AdminPanel;
