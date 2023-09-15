import {useState} from 'react'

const TodoForm = (addTodo) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState(""); 
    const [forVisivel, setForVisivel] = useState("false");
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value ||  !category) return;
        addTodo(value, category);
        setValue("");
        setCategory("");
        
    };
    return (
    <div className='todo-form'>
        <h2>Criar tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input type='text'
             placeholder='Digite o titulo'
             value={value}
             onChange={(e) => setValue(e.target.value)}/>
            <select onChange={(e) => setValue(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value={"Trabalho"}>Trabalho</option>
                <option value={"Pessoal"}>Pessoal</option>
                <option value={"Estudos"}>Selecione uma  categoria</option>
            </select>
            <button className='button' type='submit'>Criar tarefa</button>
        </form>
    </div>
    )
};

export default TodoForm;