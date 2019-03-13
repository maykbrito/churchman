import React, {useState, useEffect} from 'react'

const ChurchList = props => {
    const [churchs, setChurchs] = useState([])

    useEffect(() => {getChurchs()},[])

    const getChurchs = () => {
        return fetch('http://localhost:5000/api/churchs')
        .then(res => res.json())
        .then(res => setChurchs(res))
    }

    return (
        <ul id="churchs">
            {churchs.map((church) => <li key={church._id}>{ church.name }</li>)}
        </ul>
    )
}

export default ChurchList