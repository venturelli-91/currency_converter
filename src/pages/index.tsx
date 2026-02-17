"use client";
import App from "@/App";
import React from "react";
import { DarkThemeToggle } from "flowbite-react";

export default function Home() {
	return (
		<React.StrictMode>
			<div className="min-h-screen">
				<div className="fixed top-4 right-4 z-50">
					<DarkThemeToggle />
				</div>

				<div className="bg-white dark:bg-gray-900 py-8">
					<div className="max-w-4xl mx-auto px-4">
						<App />
					</div>
				</div>

				<div className="bg-blue-50 dark:bg-blue-900/20 py-16">
					<div className="max-w-4xl mx-auto px-4">
						<h2 className="text-2xl font-semibold text-center mb-8 text-blue-900 dark:text-blue-100">
							Real-time Exchange Rates
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
								<h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
									Secure Transfers
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									Send money to over 190 countries in 130 different currencies
								</p>
							</div>
							<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
								<h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
									Competitive Rates
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									Get the best exchange rates on the market
								</p>
							</div>
							<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
								<h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
									Real-time Updates
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									Track exchange rate fluctuations in real-time
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-white dark:bg-gray-900 py-16">
					<div className="max-w-4xl mx-auto px-4 text-center">
						<h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
							Conversion Tools
						</h2>
						<p className="text-gray-600 dark:text-gray-400">
							Access advanced tools for your currency exchange needs
						</p>
					</div>
				</div>
			</div>
		</React.StrictMode>
	);
}
