import ReactDOM from "react-dom";
import { useEffect } from "react";

interface ModalProps {
    children: React.ReactNode;
    actionBar: React.ReactNode;
    onClose: () => void;
  }

function Modal ({onClose, children, actionBar}: ModalProps) {
	useEffect(() => {
		document.body.classList.add("overflow-hidden");

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, []);
	const modalContainer = document.querySelector(".modal-container");

	if (!modalContainer) {
		return null;
	}

	return ReactDOM.createPortal(
		<div>
			<div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
			<div className="fixed inset-0 flex items-center justify-center">
				<div className="bg-white p-10 w-80 md:w-auto md:max-w-3xl rounded-lg">
					<div className="flex flex-col justify-between h-full ">
						{children}
						<div className="flex justify-center m-4">
							{actionBar}
						</div>
					</div>
				</div>
			</div>
		</div>,
		modalContainer
	);
}

export default Modal;
