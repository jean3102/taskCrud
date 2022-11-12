import Swal from "sweetalert2";

const useAlertSuccess = (message, type='success') => {
    Swal.fire({
        position: 'center',
        icon: type,
        title: message,
        showConfirmButton: false,
        timer: 1500
    })
}

export default useAlertSuccess