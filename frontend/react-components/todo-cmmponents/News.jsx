import React, {useEffect, useState} from "react";
import {editItem, deleteItem, getAll} from "../../service";
import Button from "../components/Button";
import Create from "./NewsCreate";

const News = () => {
    const [news, setNews] = useState([]);
    const [editable, setEditable] = useState([]);
    const [editData, setEditData] = useState({});
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    useEffect(() => {
        getAll().then(response => {
            setNews(response);
        });
    }, []);

    const remove = (id) => {
        deleteItem(id).then(() => {
            setNews([...news.filter(item => item.id !== id)])
        }).catch(() => {
            console.log('error')
        });
    };

    const edit = (id) => {
        setEditable(editable.includes(id) ? [] : [id]);
        if (editable.includes(id)) {
            editItem(id, editData).then((res) => {
                setNews([...news.filter(el => el.id !== id), res])
            })
        }
    };

    return (
        <>
            <Button
                className="btn btn-primary"
                content='Create'
                onClick={() => {
                    setIsOpenPopup(!isOpenPopup)
                }}
            />
            <Create
                isOpen={isOpenPopup}
                closePopup={() => {
                    setIsOpenPopup(!isOpenPopup)
                }}
            />
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">title</th>
                    <th scope="col">description</th>
                    <th scope="col">text</th>
                </tr>
                </thead>
                <tbody>
                {news.length ? news.map((item, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{item.id}</th>
                            {editable.length && editable[editable.length - 1] === item.id
                                ?
                                <>
                                    <td><textarea
                                        defaultValue={item.title}
                                        onChange={(e) => setEditData({...editData, title: e.target.value})}
                                        value={editData.title}
                                    ></textarea></td>
                                    <td><textarea
                                        defaultValue={item.description}
                                        onChange={(e) => setEditData({...editData, description: e.target.value})}
                                        value={editData.description}
                                    ></textarea></td>
                                    <td><textarea
                                        defaultValue={item.text}
                                        onChange={(e) => setEditData({...editData, text: e.target.value})}
                                        value={editData.text}
                                    ></textarea></td>
                                </>
                                :
                                <>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>{item.text}</td>
                                </>}

                            <td>
                                <Button
                                    className="btn btn-primary"
                                    content={editable.length && editable[editable.length - 1] === item.id ? 'Update' : 'Edit'}
                                    onClick={() => {
                                        edit(item.id)
                                    }}
                                />
                            </td>
                            <td>
                                <Button
                                    className="btn btn-warning"
                                    content='Delete'
                                    onClick={() => remove(item.id)}
                                />
                            </td>
                        </tr>
                    )
                }) : null}
                </tbody>
            </table>
        </>
    );
};

export default News