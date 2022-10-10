import {Button, Modal, TextContainer} from '@shopify/polaris';
import {useState, useCallback} from 'react';

export function EditModal({product, callback, open}) {

    return (
        <div style={{height: '500px'}}>
            <Modal
                open={open}
                onClose={callback}
                title="Edit this product..."
                primaryAction={{
                    content: 'Save',
                    onAction: callback,
                }}
                secondaryActions={[
                    {
                        content: 'Cancel',
                        onAction: callback,
                    },
                ]}
            >
                <Modal.Section>
                    <TextContainer>
                        <p>
                            Use Instagram posts to share your products with millions of
                            people. Let shoppers buy from your store without leaving
                            Instagram.
                        </p>
                    </TextContainer>
                </Modal.Section>
            </Modal>
        </div>
    );
}