import { useForm } from "react-hook-form"
import  { FireBaseContext } from "../context/AuthContext";
import { useContext } from "react";

const Modal = () => {


	
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>
  );
};

export default Modal;