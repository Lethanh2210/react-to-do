import React, {useState} from 'react';
import "./todo.css"
import {Button, Icon, Spinner} from '@shopify/polaris';
import ButtonEdit from "./button/ButtonEdit";




function ToDo({product, index,onComplete, removeAction= {content: "Remove", onAction: ""}, onRemove}) {

    return (
        <>
            <div className="todo"
                 style={{textDecoration: product.isCompleted ? "line-through" : ""}}
            >
                {product.name}
                <div>
                    <Button onClick={() => onComplete(product?.id)} >Complete</Button>
                    <Button onClick={() => onRemove(product?.id)} >x</Button>
                    <ButtonEdit/>
                </div>
            </div>
        </>
    );
}

export default ToDo;