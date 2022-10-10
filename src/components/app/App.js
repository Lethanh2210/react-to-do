import './App.css';
import React from 'react'
import ToDo from "../todo/ToDo";
import {ToDoForm} from "../todo/todoForm/ToDoForm";
import {useGetApi} from "../hooks/useGetApi";
import queryString from 'query-string';
import axios from "axios";
import {Spinner} from "@shopify/polaris";

function App() {
    const filterData = {limit: 10, sort: "desc"};
    const filter = queryString.stringify(filterData);
    const {data: products, setData: setProducts, loading} = useGetApi( `/products?${filter}`);

    const completeTodo = id => {
        // const newProducts = [...products];
        // newProducts[index].isCompleted = !newProducts[index].isCompleted;
        // setProducts(newProducts);
        setProducts(prevState => {
            return prevState.map(prev => {
                if(prev.id === id){
                    prev.isCompleted = !prev.isCompleted;
                }
                return prev
            })
        })
    };

    const removeTodo = async (id) => {
        const res = await axios.delete(`http://localhost:5000/api/products/${id}`);
        // const newProducts = products.filter(p => p.id !== id);
        setProducts(prev => prev.filter(p => p.id !== id));
    };

    const addTodo = text => {
        const newProducts = [...products, {text}];
        setProducts(prev => [
            ...prev,
            {name: text}
        ]);
    };

    return (
        <>
            <Spinner accessibilityLabel="Spinner example" size="large" />
            <div className="todo-list">
                {products.map((product, index) => (
                    <ToDo
                        key={index}
                        index={index}
                        product={product}
                        onComplete={completeTodo}
                        onRemove={removeTodo}
                    />
                ))}
                <ToDoForm onAdd={addTodo}/>
            </div>
        </>
    );
}

export default App;
