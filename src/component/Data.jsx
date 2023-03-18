import axios from "axios";
import { useEffect, useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { DeleteModal } from "./modal/DeleteModal";


export const Data = () => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newId, setNewId] = useState('');




    useEffect(() => {
        axios.get('http://localhost:5000/peoples')
            .then((res) => setData(res.data));
    }, [data])
    //console.log(data)

    const handleDelete = (id) => {
        console.log(id)
        //    axios.delete(`http://localhost:5000/delete/${id}`);
        //    window.location.reload(false);
        setNewId(id);
        handleShow();

    }
    return (
        <div className="container-lg">
            <h3 className="text-center mb-5 mt-5">Details</h3>
            <table className="table table-hover shadow p-3 mb-5 bg-white rounded">
                <tbody>
                    <tr>
                        <td><h5>Name</h5></td>
                        <td><h5>Email</h5></td>
                        <td><h5>Mobile</h5></td>
                        <td><h5>Birth Date</h5></td>
                        <td><h5>Gender</h5></td>
                    </tr>
                </tbody>

                {
                    data.map((elem, key) => {
                        return (
                            <tbody key={key}>
                                <tr >
                                    <td>{elem.name}</td>
                                    <td>{elem.email}</td>
                                    <td>{elem.mobile}</td>
                                    <td>{elem.dob}</td>
                                    <td>{elem.gender}</td>
                                    <td><span className="btn" onClick={() => handleDelete(elem._id)}><BsTrashFill /></span></td>
                                </tr>
                            </tbody>
                        )
                    })
                }

            </table>
            <DeleteModal id={newId} handleClose={handleClose} show={show} />
        </div>
    )
}