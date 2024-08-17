import { MainPage } from "./main/ui";
import { NotFoundPage } from "./not-found/ui";

export const routes = [
	{
		path: "/",
		component: MainPage
	},
	{
		path: "*",
		component: NotFoundPage
	}
];
