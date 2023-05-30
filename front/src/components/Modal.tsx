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
			<div className="fixed w-4/5 top-56 left-10 md:w-auto md:inset-40 bg-white p-10 rounded-lg">
				<div className="flex flex-col justify-around h-full w-4/5 mx-auto gap-5">
					{children}
					<div className="flex justify-center">
						{actionBar}
					</div>
				</div>
			</div>
		</div>,
		modalContainer
	);
}

export default Modal;
