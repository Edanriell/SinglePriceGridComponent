import "./link.less";

import { children } from "solid-js";

export const Link = (props: any) => {
	const safeChildren = children(() => props.children);

	return (
		<a class="link" href="#" target="_blank">
			{safeChildren()}
		</a>
	);
};
