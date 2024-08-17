import "./link.less";

import { children, Component, JSX, mergeProps } from "solid-js";

type LinkProps = {
	children: JSX.Element;
	href?: string;
	target?: string;
};

export const Link: Component<LinkProps> = (props) => {
	const finalProps = mergeProps({ href: "#", target: "_self" }, props);

	const safeChildren = children(() => props.children);

	return (
		<a class="link" href={finalProps.href} target={finalProps.target}>
			{safeChildren()}
		</a>
	);
};
