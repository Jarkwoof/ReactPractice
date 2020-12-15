
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';

const TodoForm = ({saveTodo}) =>{
    const { value,reset,onChange} =  useInputState();
    return(
        <form
            onSubmit = {(event)=>{
                event.preventDefault();
                saveTodo(value);
                reset();
            }}
        >
            <TextField
              variant="outlined"
              placeholder="請輸入"
              margin="normal" 
              onChange ={onChange}
              value = {value}                    
            />                                     
        </form>
    );
};

export default TodoForm;
//隨意