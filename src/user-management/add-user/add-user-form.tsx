import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';


const Demo: React.FC<{ visible: boolean, onClose: Function }> = (props) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(props.visible);
    }, [props.visible])

    const onClick = () => {
        setVisible(true);
    }

    const onHide = () => {
        setVisible(false);
    }

    const footer = (
        <div>
            <Button label="Yes" icon="pi pi-check" onClick={onHide} />
            <Button label="No" icon="pi pi-times" onClick={onHide} className="p-button-secondary" />
        </div>
    );
    return (
        <div>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Dialog</h1>
                    <p>Dialog is a container to display content in an overlay window.</p>
                </div>
            </div>

            <div className="content-section implementation">
                <Dialog header="Godfather I" visible={visible} style={{ width: '50vw' }} footer={footer} onHide={onHide} maximizable>
                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                    </Dialog>

                <Button label="Show" icon="pi pi-external-link" onClick={onClick} />
            </div>
        </div>
    )
}

export default Demo;