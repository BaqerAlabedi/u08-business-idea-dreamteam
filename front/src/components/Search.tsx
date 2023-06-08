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
											props.onClick("tilltugg");
										}
									}} value="Tilltugg"/>
							</li>
							<li>
								<input type="button" className="mx-2 mt-2 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white"
									onClick={() => {
										if (props.onClick) {
											props.onClick("förrätt");
										}
									}} value="Förrätt"/>
							</li>
							<li>
								<input type="button" className="mx-2 mt-2 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white"
									onClick={() => {
										if (props.onClick) {
											props.onClick("soppa");
										}
									}} value="Soppa"/>
							</li>
							<li>
								<input type="button" className="mx-2 mt-2 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white"
									onClick={() => {
										if (props.onClick) {
											props.onClick("sallad");
										}
									}} value="Sallad"/>
							</li>
							<li>
								<input type="button" className="mx-2 mt-2 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white"
									onClick={() => {
										if (props.onClick) {
											props.onClick("huvudrätt");
										}
									}} value="Huvudrätt"/>
							</li>
							<li>
								<input type="button" className="mx-2 mt-2 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white"
									onClick={() => {
										if (props.onClick) {
											props.onClick("vegetariskt");
										}
									}} value="Vegetariskt"/>
							</li>
							<li>
								<input type="button" className="mx-2 mt-2 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white"
									onClick={() => {
										if (props.onClick) {
											props.onClick("vegansk");
										}
									}} value="Vegansk"/>
							</li>
							<li>
								<input type="button" className="mx-2 mt-2 px-6 rounded-lg font-medium text-black border-2 border-teal-700 hover:bg-teal-700 hover:text-white"
									onClick={() => {
										if (props.onClick) {
											props.onClick("dessert");
										}
									}} value="Dessert"/>
							</li>
						</ul>
					</div>
				</>
			)}
		</div>
	);
};
export default Search;
