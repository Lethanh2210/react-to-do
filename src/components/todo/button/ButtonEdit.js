import React, {useCallback, useState} from 'react';
import {Button, Icon} from "@shopify/polaris";
import {EditMajor, EditMinor} from "@shopify/polaris-icons";
import {EditModal} from "../modals/EditModal";

function ButtonEdit({product}) {
    const [openModal, setOpenModal] = useState(false);
    const handleOpenClose = useCallback(() => {
        setOpenModal((prev) => !prev);
    }, [openModal]);
    return (
        <>
            <Button onClick={handleOpenClose} style={{marginTop : "17px"}}>
                <div style={{width: "12px", height: "12px"}}>
                    <Icon
                        source={EditMajor}
                        color="base"
                    />
                </div>
            </Button>
            {openModal && (
                <EditModal
                    open={openModal}
                    callback={handleOpenClose}
                    product={product}
                />
            )}
        </>

    );
}

export default ButtonEdit;