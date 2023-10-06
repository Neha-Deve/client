import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const AllSUsers = () => {
    const [state, setState] = useState([])
    const [keyword, setKeyword] = useState("")
    useEffect(() => {
       
        const fetchData = async () => {
            try {
              // Simulate a fetch request
              const response = await axios.get('http://localhost:5000/');
              
                console.log(response)
              // Update the state with the fetched data
              setState(response.data);
              
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData(); 
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    // Remove the deleted item from the state
                    setState((prevState) => prevState.filter((user) => user._id !== id));
                }
            })
            .catch((error) => {
                console.error('Error deleting user:', error);
            });
    };
    const handleSearch = () => {
        const fetchData = async () => {
            try {
              // Simulate a fetch request
              const response = await axios.get(`http://localhost:5000/search?keyword=${keyword}`);
              
              // Update the state with the fetched data
              setState(response.data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData(); 
    };
    return (
        <>

            <Form>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2"
                            value={keyword}
                            onChange={(e) => {
                                setKeyword(e.target.value)
                            }}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" onClick={handleSearch} >SEARCH</Button>
                    </Col>
                </Row>
            </Form>


            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>NAME</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>ACTION</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        state?.map((user, idx) => {
                            return (
                                <tr key={user._id}>
                                    <td>{idx + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>    <Button variant="outline-primary" onClick={() => handleEdit(user._id)}>Edit</Button>
                                        <Button variant="outline-primary" onClick={() => handleDelete(user._id)}>Delete</Button>
                                    </td>

                                </tr>
                            )
                        })
                    }


                </tbody>
            </Table>
        </>

    )
}
export default AllSUsers;


