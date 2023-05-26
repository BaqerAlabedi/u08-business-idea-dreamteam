import { useEffect, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsFilter } from "react-icons/bs";

export const Search = (props: { name?: string | undefined, filtered?: true, setFilterValue?: any, onClick: () => void, value: string, value1?: string, value2?: string, value3?: string, value4?: string, value5?: string, value6?: string;} ) => {
	const [visible, setVisible] = useState(false);

	return (
		<div className="search">
			<div className="flex justify-center align-center">
				{props.filtered && (
					<button type='button' className="px-3 py-1" onClick={() => setVisible(!visible)}>
						<BsFilter size={25}></BsFilter>
					</button>
				)}
				<div className="flex mx-2 my-2">
					<div className="border border-neutral-200 rounded bg-neutral-100">
						<button type="submit" className="px-2">
							<HiMagnifyingGlass></HiMagnifyingGlass>
						</button>
						<input type="text" placeholder={props.name} className='bg-neutral-100 placeholder:text-neutral-900 px-2 py-1'/>
					</div>
				</div>
			</div>
			{visible && (
				<>
					<div className="flex justify-center">
						<ul className="flex">
							<li>
								<input type="button" className="mx-2 mt-2 mb-5 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white" onClick={() => {props.setFilterValue("snack") || props.onClick();}} value="snack"/>
							</li>
							<li>
								<input type="button" className="mx-2 mt-2 mb-5 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white" onClick={() => {props.setFilterValue("starter") || props.onClick();}} value={props.value1}/>
							</li>
							<li>
								<input type="button" className="mx-2 mt-2 mb-5 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white" onClick={props.onClick} value={props.value2}/>
							</li>
							<li>
								<input type="button" className="mx-2 mt-2 mb-5 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white" onClick={props.onClick} value={props.value3}/>
							</li>
							<li>
								<input type="button" className="mx-2 mt-2 mb-5 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white" onClick={props.onClick} value={props.value4}/>
							</li>
							<li>
								<input type="button" className="mx-2 mt-2 mb-5 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white" onClick={props.onClick} value={props.value5}/>
							</li>
							<li>
								<input type="button" className="mx-2 mt-2 mb-5 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white" onClick={() => {props.setFilterValue("vegan") || props.onClick();}} value={props.value6}/>
							</li>
						</ul>
					</div>
				</>
			)}
		</div>
	);
};
export default Search;