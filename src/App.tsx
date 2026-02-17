import React, { useState } from "react";
import { Button, Card, Flowbite, TextInput, Select } from "flowbite-react";
import { TbZoomMoney } from "react-icons/tb";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoIosRefresh } from "react-icons/io";

type Currency = "USD" | "EUR" | "JPY" | "CAD" | "INR" | "BRL" | "AUD";

interface ConversionResponse {
	data: Record<Currency, { value: number }>;
}

const App = () => {
	const [amount, setAmount] = useState(0);
	const [currency, setCurrency] = useState<Currency>("BRL");
	const [goalCurrency, setGoalCurrency] = useState<Currency>("USD");
	const [converted, setConverted] = useState<number | null>(null);
	const [loading, setLoading] = useState(false);

	const currencies: readonly Currency[] = [
		"USD",
		"EUR",
		"JPY",
		"CAD",
		"INR",
		"BRL",
		"AUD",
	];

	const handleConvert = async () => {
		if (amount <= 0) return;

		const apiKey = process.env.NEXT_PUBLIC_API_KEY;
		if (!apiKey) {
			alert("API key not configured");
			return;
		}

		setLoading(true);
		try {
			const url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=${currency}&currencies=${goalCurrency}`;
			const response = await fetch(url);
			const data = (await response.json()) as ConversionResponse;

			if (data?.data?.[goalCurrency]?.value) {
				const rate = data.data[goalCurrency].value;
				setConverted(amount * rate);
			}
		} catch (error) {
			console.error("Conversion failed:", error);
			alert("Failed to fetch exchange rate");
		} finally {
			setLoading(false);
		}
	};

	const handleReset = () => {
		setAmount(0);
		setCurrency("BRL");
		setGoalCurrency("USD");
		setConverted(null);
	};

	return (
		<Flowbite>
			<div className="min-h-screen bg-white dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
				<div className="max-w-4xl mx-auto">
					<h1 className="font-bold text-cyan-400 text-center mb-6 text-4xl">
						Currency Converter
					</h1>

					<Card className="bg-white dark:bg-gray-800">
						<div className="space-y-12">
							<div className="flex items-center gap-6">
								<TbZoomMoney className="text-3xl text-cyan-400" />
								<div className="flex-1 space-y-4">
									<label className="block text-base font-bold text-cyan-400 mb-2">
										Amount:
									</label>
									<div className="flex gap-4">
										<TextInput
											type="number"
											value={amount}
											onChange={(e) => setAmount(Number(e.target.value))}
											placeholder="Enter amount"
											className="flex-1"
											sizing="lg"
										/>
										<Select
											value={currency}
											onChange={(e) => setCurrency(e.target.value as Currency)}
											sizing="lg">
											{currencies.map((c) => (
												<option
													key={c}
													value={c}>
													{c}
												</option>
											))}
										</Select>
									</div>
								</div>
							</div>

							<div className="flex items-center gap-6">
								<FaMoneyBillTransfer className="text-3xl text-cyan-400" />
								<div className="flex-1 space-y-4">
									<label className="block text-base font-bold text-cyan-400 mb-2 mt-4">
										Target Currency:
									</label>
									<div className="flex gap-4">
										<TextInput
											type="number"
											value={converted ?? 0}
											readOnly
											className="flex-1"
											sizing="lg"
										/>
										<Select
											value={goalCurrency}
											onChange={(e) =>
												setGoalCurrency(e.target.value as Currency)
											}
											sizing="lg">
											{currencies.map((c) => (
												<option
													key={c}
													value={c}>
													{c}
												</option>
											))}
										</Select>
									</div>
								</div>
							</div>

							<div className="flex justify-center gap-8 pt-8 mt-4">
								<Button
									gradientDuoTone="purpleToBlue"
									onClick={handleConvert}
									disabled={loading}
									size="lg">
									{loading ? "Converting..." : "Convert"}
								</Button>
								<Button
									gradientDuoTone="cyanToBlue"
									onClick={handleReset}
									size="lg">
									<IoIosRefresh className="mr-2 h-6 w-6" />
									Reset
								</Button>
							</div>

							{converted !== null && (
								<div className="mt-6 p-6 bg-gray-100 dark:bg-gray-900 rounded-lg">
									<p className="text-center text-xl font-semibold text-cyan-400">
										{amount} {currency} = {converted.toFixed(2)} {goalCurrency}
									</p>
								</div>
							)}
						</div>
					</Card>
				</div>
			</div>
		</Flowbite>
	);
};

export default App;
