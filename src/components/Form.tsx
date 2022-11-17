import { FormProps} from "../Backend/interfaces/form.interfaces";
import { useNewSubForm } from "../hook/useNewSubsForm";


const Form = ({ onNewSub }: FormProps) => {
  
    const [inputValues, dispatch] = useNewSubForm();

  const handlesSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNewSub(inputValues);
    dispatch ({type: "clear"})
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target
    dispatch({
        type:"change_value",
        payload: {
            inputName: name,
            inputValue: value
        }
    })
  };

  const handleClear = () => {
    dispatch ({type: "clear"})
  };

  return (
    <div id="FormSubs">
      <form onSubmit={handlesSubmit}>
        <input onChange={handleChange} value={inputValues.nick} className="inptSaveSub"
          type="text" name="nick" placeholder="nick"/>

        <input
          onChange={handleChange} value={inputValues.avatar} className="inptSaveSub"
          type="text" name="avatar" placeholder="Link de la imagen"/>

        <textarea
          onChange={handleChange} value={inputValues.description} className="inptSaveSub"
          name="description" placeholder="description"/>

        <button className="buttons" type="submit"> Save new Sub! </button>
        <button className="buttons" onClick={handleClear} type="button"> Clear </button>
      
      </form>
    </div>
  );
};

export default Form;
