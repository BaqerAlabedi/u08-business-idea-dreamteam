import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsFilter } from "react-icons/bs";

export const Search = (props: { name?: string | undefined, reset?: (arg0:string) => void, filtered?: true, onClick?: (arg0:string) => void } ) => {
	const [visible, setVisible] = useState(false);

	return (
		<div className="search">
			<div className="flex justify-center align-center">
				{props.filtered && (
					<button type='button' className="px-3 py-1" onClick={() => {
						setVisible(!visible);
						if (props.reset) {
							props.reset("resetFilter");
						}
					}}>
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
						<ul className="flex flex-wrap justify-center lg:mb-3">
							<li>
								<input type="button" className="mx-2 mt-2 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white"
									onClick={() => {
										if (props.onClick) {
											props.onClick("snack");
										}
									}} value="snack"/>
							</li>
							<li>
								<input type="button" className="mx-2 mt-2 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white"
									onClick={() => {
										if (props.onClick) {
											props.onClick("starter");
										}
									}} value="starter"/>
							</li>
							<li>
								<input type="button" className="mx-2 mt-2 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white"
									onClick={() => {
										if (props.onClick) {
											props.onClick("soup");
										}
									}} value="soup"/>
							</li>
							<li>
								<input type="button" className="mx-2 mt-2 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white"
									onClick={() => {
										if (props.onClick) {
											props.onClick("salad");
										}
									}} value="salad"/>
							</li>
							<li>
								<input type="button" className="mx-2 mt-2 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white"
									onClick={() => {
										if (props.onClick) {
											props.onClick("main course");
										}
									}} value="main course"/>
							</li>
							<li>
								<input type="button" className="mx-2 mt-2 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white"
									onClick={() => {
										if (props.onClick) {
											props.onClick("vegetarian");
										}
									}} value="vegetarian"/>
							</li>
							<li>
								<input type="button" className="mx-2 mt-2 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white"
									onClick={() => {
										if (props.onClick) {
											props.onClick("vegan");
										}
									}} value="vegan"/>
							</li>
							<li>
								<input type="button" className="mx-2 mt-2 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white"
									onClick={() => {
										if (props.onClick) {
											props.onClick("dessert");
										}
									}} value="dessert"/>
							</li>
						</ul>
					</div>
				</>
			)}
		</div>
	);
};
export default Search;
