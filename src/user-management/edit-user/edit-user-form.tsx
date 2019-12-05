import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { SelectButton } from 'primereact/selectbutton';

interface AddUserFormProps {
    visible: boolean,
    onClose: Function,
    data: {
        name: string,
        role: string,
        city: string,
        country: string
    }
}

const EditUserForm: React.FC<AddUserFormProps> = (props) => {
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState({ name: '', role: '', city: '', country: '' });

    useEffect(() => {
        setVisible(props.visible);
    }, [props.visible]);

    useEffect(() => {
        setUser(props.data);
    }, [props.data]);

    const onHide = () => {
        setVisible(false);
        props.onClose();
    }

    const updateRole = (e: any) => {
        if (user.role == e.value)
            return;

        setUser({
            ...user,
            role: e.value
        });
    }

    const footer = (
        <div>
            <Button label="Yes" icon="pi pi-check" onClick={onHide} />
            <Button label="No" icon="pi pi-times" onClick={onHide} className="p-button-secondary" />
        </div>
    );

    return (
        <Dialog
            header="Godfather I" visible={visible}
            style={{ width: '50vw' }} footer={footer}
            onHide={onHide} maximizable={false}>
            <div className="row">
                <table className="table table-bordered">
                    <tr>
                        <td>Name</td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>Role</td>
                        <td>
                            <SelectButton value={user.role} options={[
                                { label: 'Admin', value: 'Admin' },
                                { label: 'User', value: 'User' }
                            ]} onChange={updateRole} />
                        </td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>{user.city}</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>{user.country}</td>
                    </tr>
                </table>
            </div>
        </Dialog>
    )
}

export default EditUserForm;