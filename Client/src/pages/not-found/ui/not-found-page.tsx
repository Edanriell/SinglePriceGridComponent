import "./not-found-page.less";

import { Component } from "solid-js";

import { MainLayout } from "@widgets/layouts/main/ui";

import { Link } from "@shared/ui/link/ui";

export const NotFoundPage: Component = () => {
	return (
		<MainLayout>
			<main class="main">
				<section class="not-found">
					<h1 class="not-found__title">404</h1>
					<p class="not-found__text">Sorry, the page you are looking for does not exist.</p>
					<Link href="/" target="_self">
						Go Back to Home
					</Link>
				</section>
			</main>
		</MainLayout>
	);
};
