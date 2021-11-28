import React from 'react'
import Table from '../table'
import Container from '@mui/material/Container';
import PageBar from './header'

function createData(name, task, completion, date) {
    return { name, task, completion, date };
  }
  
  const rows = [
    createData('Name 1', 'Task 1', 100, '12-12-2020'),
    createData('Name 2', 'Task 2', 10, '10-11-2021'),
    createData('Name 3', 'Task 3', 40, '22-02-2021'),
    createData('Name 4', 'Task 4', 70, '01-12-2021'),
  ];

function dashboard() {
    const hearderItems = ['Associate Name', 'Task Assigned', 'Completion %', 'Date']
    return (
        <>
        <PageBar />
        <Container style={{ marginTop: 40 }} component="main"  maxWidth="md">
            <Table rows={rows} headers={hearderItems} />            
        </Container>
        </>
    )
}

export default dashboard
