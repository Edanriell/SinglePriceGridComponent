import "./main-page.less";

import { Component } from "solid-js";

import { MainLayout } from "@widgets/layouts/main/ui";

import { Link } from "@shared/ui/link/ui";

export const MainPage: Component = () => {
	return (
		<MainLayout>
			<main class="main">
				<section class="single-price-grid">
					<h1 class="visually-hidden">Unlock Your Potential with Expert Coding Resources</h1>
					<article class="single-price-grid__join-community join-community">
						<h2 class="join-community__title">Join our community</h2>
						<strong class="join-community__subtitle">
							30-day, hassle-free money back guarantee
						</strong>
						<p class="join-community__text">
							Gain access to our full library of tutorials along with expert code reviews. Perfect
							for any developers who are serious about honing their skills.
						</p>
					</article>
					<article class="single-price-grid__subscription subscription">
						<h2 class="subscription__title">Monthly Subscription</h2>
						<p class="subscription__price">
							<strong>$29</strong>
							per month
						</p>
						<p class="subscription__text">Full access for less than $1 a day</p>
						<Link href="#" target="_self">
							Sign Up
						</Link>
					</article>
					<article class="single-price-grid__why-us why-us">
						<h2 class="why-us__title">Why Us</h2>
						<ul class="why-us__argument-list argument-list">
							<li class="argument-list__list-item">Tutorials by industry experts</li>
							<li class="argument-list__list-item">Peer & expert code review</li>
							<li class="argument-list__list-item">Coding exercises</li>
							<li class="argument-list__list-item">Access to our GitHub repos</li>
							<li class="argument-list__list-item">Community forum</li>
							<li class="argument-list__list-item">Flashcard decks</li>
							<li class="argument-list__list-item">New videos every week</li>
						</ul>
					</article>
				</section>
			</main>
		</MainLayout>
	);
};
