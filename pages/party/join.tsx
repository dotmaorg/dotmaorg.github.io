import * as React from "react";
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
import NextLink from "next/link";
import {
	Box,
	Text,
	Grid,
	Heading,
	Container,
	Section,
	Separator,
	Flex,
	ScrollArea,
	Button,
} from "@radix-ui/themes";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { Footer } from "@components/Footer";
import { ColorsHeader } from "@components/ColorsHeader";
import { MobileMenuProvider } from "@components/MobileMenu";
import { ColorsMarketingButton } from "@components/ColorsMarketingButton";
import { SerifHeading } from "@components/SerifHeading";
import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import {
	DesktopIcon,
	EyeOpenIcon,
	Half2Icon,
	InputIcon,
	MoonIcon,
	TransparencyGridIcon,
} from "@radix-ui/react-icons";
import { Swatch } from "@components/Swatch";
import Head from "next/head";
import styles from "./index.module.css";
import { ColorUsageRange } from "@components/ColorUsageRange";
import { ColorStepLabel } from "@components/ColorStepLabel";
import { RadixLogo } from "@components/RadixLogo";
import { BoxLink } from "@components/BoxLink";
import { AccessibleIcon } from "@radix-ui/themes";
import { NarzaryAILogo } from "@components/NarzaryAILogo"
import { useState } from "react";
export default function ColorsHome() {
	// Function to submit all form data
	async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		const { error } = await supabase.from('party_join').insert([data]);
		const insertedId = Array.isArray(error) || !error ? (await supabase.from('party_join').select('id').order('id', { ascending: false }).limit(1)).data?.[0]?.id : null;
		if (error) {
			alert('Failed to submit: ' + error.message);
		} else {
			//alert('Submitted successfully!');
			window.location.href = `/party/cards?id=${insertedId}`;
			form.reset();
		}
	}
	const states = [
		"Andaman and Nicobar Islands",
		"Andhra Pradesh",
		"Arunachal Pradesh",
		"Assam",
		"Bihar",
		"Chandigarh",
		"Chhattisgarh",
		"Dadra and Nagar Haveli and Daman and Diu",
		"Delhi",
		"Goa",
		"Gujarat",
		"Haryana",
		"Himachal Pradesh",
		"Jammu and Kashmir",
		"Jharkhand",
		"Karnataka",
		"Kerala",
		"Ladakh",
		"Lakshadweep",
		"Madhya Pradesh",
		"Maharashtra",
		"Manipur",
		"Meghalaya",
		"Mizoram",
		"Nagaland",
		"Odisha",
		"Puducherry",
		"Punjab",
		"Rajasthan",
		"Sikkim",
		"Tamil Nadu",
		"Telangana",
		"Tripura",
		"Uttar Pradesh",
		"Uttarakhand",
		"West Bengal",
		"Other"
	];

	function StateSelect() {
		const [search, setSearch] = useState("");
		const filteredStates = states.filter(s =>
			s.toLowerCase().includes(search.toLowerCase())
		);
		return (
			<div>
				<input
					type="text"
					placeholder="Search State"
					value={search}
					onChange={e => setSearch(e.target.value)}
					style={{
						width: "100%",
						marginBottom: 8,
						padding: 8,
						borderRadius: 6,
						border: "1px solid var(--gray-6)"
					}}
				/>
				<select
					style={{
						width: "100%",
						marginBottom: 8,
						padding: 8,
						borderRadius: 6,
						border: "1px solid var(--gray-6)"
					}}
				>
					
					{filteredStates.map(state => (
						<option key={state} value={state}>
							{state}
						</option>
					))}
					{filteredStates.length === 0 && (
						<option disabled>No states found</option>
					)}
				</select>
			</div>
		);
	}
	return (
		<MobileMenuProvider>
			<ColorsMobileMenu />

			<Head>
				<style>
					{`
            :is(.dark, .dark-theme) :is(body, .radix-themes) {
              --color-background: #0b0b0b;
              --color-panel-solid: var(--gray-1);
            }
          `}
				</style>
			</Head>

			<Box
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					height: 480,
					opacity: 0.6,
					background:
						"linear-gradient(to bottom, var(--crimson-4), var(--amber-2), transparent)",
				}}
			/>

			<ColorsHeader ghost />

			<Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }} position="relative">
				<TitleAndMetaTags
					title="Fun way to Support your favourite Political Party of India"
					description="Join your favourite political party in India with just a few clicks. Fill out a simple form to become a member and support your party's mission and values."
					image="nangal.svg"
				/>
				<Section size={{ initial: "2", md: "4" }}>
					<Container>
						<SerifHeading mb="3" style={{ maxWidth: 920 }}>
							Fun way to Support your favourite Political Party of India

						</SerifHeading>
						<Flex gap="4">
							<Box style={{ maxWidth: 820, marginBottom: 32 }}>
								<Text size="5" as="p" mb="6" color="gray">
									Join your favourite political party in India with just a few clicks. Fill out a simple form to become a member and support your party's mission and values.
								</Text>
							</Box>
							<Box>
								<img
									src="/logos/symbol.jpg"
									alt="Political Party Logo"
									style={{ width: 320, height: "auto", borderRadius: 8 }}
								/>
							</Box>
						</Flex>
						<Container>
							<SerifHeading mb="3" style={{ maxWidth: 920, textAlign: "center" }}>
								Join your favourite Political Party
							</SerifHeading>
						</Container>

						<form
							style={{
								maxWidth: 600,
								margin: "32px auto",
								padding: 24,
								borderRadius: 12,
								background: "var(--gray-2)",
								boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
							}}
							onSubmit={handleFormSubmit}
						>


							<Grid gap="4">
								<Box>
									<Text as="label" size="3" htmlFor="name" mb="1" weight="bold">
										Name
									</Text>
									<input
										id="name"
										name="name"
										type="text"
										required
										placeholder="Your full name"
										style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid var(--gray-6)" }}
									/>
								</Box>
								<Box>
									<Text as="label" size="3" htmlFor="ageGroup" mb="1" weight="bold">
										Age Group
									</Text>
									<select
										id="ageGroup"
										name="agegroup"
										required
										style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid var(--gray-6)" }}
									>
										<option value="">Select Age Group</option>
										<option value="18-25">18-25</option>
										<option value="26-35">26-35</option>
										<option value="36-45">36-45</option>
										<option value="46-60">46-60</option>
										<option value="60+">60+</option>
									</select>
								</Box>
								<Box>
									<Text as="label" size="3" htmlFor="sex" mb="1" weight="bold">
										Sex
									</Text>
									<select
										id="sex"
										name="sex"
										required
										style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid var(--gray-6)" }}
									>
										<option value="">Select Sex</option>
										<option value="Male">Male</option>
										<option value="Female">Female</option>
										<option value="Other">Other</option>
									</select>
								</Box>
								<Box>
									<Text as="label" size="3" htmlFor="district" mb="1" weight="bold">
										District
									</Text>
									<select
										id="district"
										name="district"
										required
										style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid var(--gray-6)" }}
									>
										<option value="">Select District</option>
										<option value="Kokrajhar">Kokrajhar</option>
										<option value="Baksa">Baksa</option>
										<option value="Chirang">Chirang</option>
										<option value="Udalguri">Udalguri</option>
										<option value="Other">Other</option>
									</select>
								</Box>
								
								<Box>
									<Text as="label" size="3" htmlFor="state" mb="1" weight="bold">
										State
									</Text>
									<select
										id="state"
										name="state"
										required
										style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid var(--gray-6)" }}
									>
										{/* Searchable State Select */}


										
										<option value="">Select State</option>
										<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
										<option value="Andhra Pradesh">Andhra Pradesh</option>
										<option value="Arunachal Pradesh">Arunachal Pradesh</option>
										<option value="Assam">Assam</option>
										<option value="Bihar">Bihar</option>
										<option value="Chandigarh">Chandigarh</option>
										<option value="Chhattisgarh">Chhattisgarh</option>
										<option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
										<option value="Delhi">Delhi</option>
										<option value="Goa">Goa</option>
										<option value="Gujarat">Gujarat</option>
										<option value="Haryana">Haryana</option>
										<option value="Himachal Pradesh">Himachal Pradesh</option>
										<option value="Jammu and Kashmir">Jammu and Kashmir</option>
										<option value="Jharkhand">Jharkhand</option>
										<option value="Karnataka">Karnataka</option>
										<option value="Kerala">Kerala</option>
										<option value="Ladakh">Ladakh</option>
										<option value="Lakshadweep">Lakshadweep</option>
										<option value="Madhya Pradesh">Madhya Pradesh</option>
										<option value="Maharashtra">Maharashtra</option>
										<option value="Manipur">Manipur</option>
										<option value="Meghalaya">Meghalaya</option>
										<option value="Mizoram">Mizoram</option>
										<option value="Nagaland">Nagaland</option>
										<option value="Odisha">Odisha</option>
										<option value="Puducherry">Puducherry</option>
										<option value="Punjab">Punjab</option>
										<option value="Rajasthan">Rajasthan</option>
										<option value="Sikkim">Sikkim</option>
										<option value="Tamil Nadu">Tamil Nadu</option>
										<option value="Telangana">Telangana</option>
										<option value="Tripura">Tripura</option>
										<option value="Uttar Pradesh">Uttar Pradesh</option>
										<option value="Uttarakhand">Uttarakhand</option>
										<option value="West Bengal">West Bengal</option>
										<option value="Other">Other</option>
									</select>
								</Box>
								<Box>
									<Text as="label" size="3" htmlFor="mpConstituency" mb="1" weight="bold">
										MP (Lok Sabha) Constituency
									</Text>

									<select
										id="mpConstituency"
										name="mpconstituency"
										required
										style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid var(--gray-6)" }}
									>

										<option value="">Select MP Constituency</option>

										<option value="Adilabad">Adilabad</option>
										<option value="Agra">Agra</option>
										<option value="Ahmedabad East">Ahmedabad East</option>
										<option value="Ahmedabad West">Ahmedabad West</option>
										<option value="Aizawl">Aizawl</option>
										<option value="Ajmer">Ajmer</option>
										<option value="Akbarpur">Akbarpur</option>
										<option value="Alappuzha">Alappuzha</option>
										<option value="Aligarh">Aligarh</option>
										<option value="Almora">Almora</option>
										<option value="Ambala">Ambala</option>
										<option value="Amethi">Amethi</option>
										<option value="Amravati">Amravati</option>
										<option value="Amreli">Amreli</option>
										<option value="Amritsar">Amritsar</option>
										<option value="Anakapalli">Anakapalli</option>
										<option value="Anantnag">Anantnag</option>
										<option value="Anantapur">Anantapur</option>
										<option value="Arakkonam">Arakkonam</option>
										<option value="Araria">Araria</option>
										<option value="Arunachal East">Arunachal East</option>
										<option value="Arunachal West">Arunachal West</option>
										<option value="Asansol">Asansol</option>
										<option value="Aurangabad (Bihar)">Aurangabad (Bihar)</option>
										<option value="Aurangabad (Maharashtra)">Aurangabad (Maharashtra)</option>
										<option value="Azamgarh">Azamgarh</option>
										<option value="Baghpat">Baghpat</option>
										<option value="Bahraich">Bahraich</option>
										<option value="Balaghat">Balaghat</option>
										<option value="Ballia">Ballia</option>
										<option value="Banda">Banda</option>
										<option value="Bangalore Central">Bangalore Central</option>
										<option value="Bangalore North">Bangalore North</option>
										<option value="Bangalore Rural">Bangalore Rural</option>
										<option value="Bangalore South">Bangalore South</option>
										<option value="Bankura">Bankura</option>
										<option value="Banswara">Banswara</option>
										<option value="Baramati">Baramati</option>
										<option value="Baranagar">Baranagar</option>
										<option value="Barasat">Barasat</option>
										<option value="Bareilly">Bareilly</option>
										<option value="Bargarh">Bargarh</option>
										<option value="Barmer">Barmer</option>
										<option value="Barrackpore">Barrackpore</option>
										<option value="Basti">Basti</option>
										<option value="Bathinda">Bathinda</option>
										<option value="Begusarai">Begusarai</option>
										<option value="Belgaum">Belgaum</option>
										<option value="Bellary">Bellary</option>
										<option value="Berhampore">Berhampore</option>
										<option value="Betul">Betul</option>
										<option value="Bhagalpur">Bhagalpur</option>
										<option value="Bhandara-Gondiya">Bhandara-Gondiya</option>
										<option value="Bharatpur">Bharatpur</option>
										<option value="Bharuch">Bharuch</option>
										<option value="Bhavnagar">Bhavnagar</option>
										<option value="Bhiwani-Mahendragarh">Bhiwani-Mahendragarh</option>
										<option value="Bhopal">Bhopal</option>
										<option value="Bidar">Bidar</option>
										<option value="Bijapur">Bijapur</option>
										<option value="Bijnor">Bijnor</option>
										<option value="Bikaner">Bikaner</option>
										<option value="Bilaspur">Bilaspur</option>
										<option value="Birbhum">Birbhum</option>
										<option value="Bishnupur">Bishnupur</option>
										<option value="Bokaro">Bokaro</option>
										<option value="Bolpur">Bolpur</option>
										<option value="Budaun">Budaun</option>
										<option value="Bulandshahr">Bulandshahr</option>
										<option value="Burdwan-Durgapur">Burdwan-Durgapur</option>
										<option value="Buxar">Buxar</option>
										<option value="Canning">Canning</option>
										<option value="Chamarajanagar">Chamarajanagar</option>
										<option value="Chamba">Chamba</option>
										<option value="Chamoli">Chamoli</option>
										<option value="Chandauli">Chandauli</option>
										<option value="Chandigarh">Chandigarh</option>
										<option value="Chandrapur">Chandrapur</option>
										<option value="Chennai Central">Chennai Central</option>
										<option value="Chennai North">Chennai North</option>
										<option value="Chennai South">Chennai South</option>
										<option value="Chhindwara">Chhindwara</option>
										<option value="Chhota Udaipur">Chhota Udaipur</option>
										<option value="Chikkodi">Chikkodi</option>
										<option value="Chitradurga">Chitradurga</option>
										<option value="Chittoor">Chittoor</option>
										<option value="Churu">Churu</option>
										<option value="Coimbatore">Coimbatore</option>
										<option value="Cooch Behar">Cooch Behar</option>
										<option value="Cuddalore">Cuddalore</option>
										<option value="Cuttack">Cuttack</option>
										<option value="Dadra & Nagar Haveli">Dadra & Nagar Haveli</option>
										<option value="Dahod">Dahod</option>
										<option value="Dakshina Kannada">Dakshina Kannada</option>
										<option value="Damoh">Damoh</option>
										<option value="Darbhanga">Darbhanga</option>
										<option value="Darjeeling">Darjeeling</option>
										<option value="Datia">Datia</option>
										<option value="Davangere">Davangere</option>
										<option value="Dehradun">Dehradun</option>
										<option value="Deoghar">Deoghar</option>
										<option value="Deoria">Deoria</option>
										<option value="Dewas">Dewas</option>
										<option value="Dhanbad">Dhanbad</option>
										<option value="Dhar">Dhar</option>
										<option value="Dharmapuri">Dharmapuri</option>
										<option value="Dharwad">Dharwad</option>
										<option value="Dhenkanal">Dhenkanal</option>
										<option value="Dholpur">Dholpur</option>
										<option value="Dibrugarh">Dibrugarh</option>
										<option value="Dimapur">Dimapur</option>
										<option value="Dindigul">Dindigul</option>
										<option value="Diu">Diu</option>
										<option value="Doda">Doda</option>
										<option value="Dumka">Dumka</option>
										<option value="Durg">Durg</option>
										<option value="East Delhi">East Delhi</option>
										<option value="East Godavari">East Godavari</option>
										<option value="East Singhbhum">East Singhbhum</option>
										<option value="Eluru">Eluru</option>
										<option value="Ernakulam">Ernakulam</option>
										<option value="Erode">Erode</option>
										<option value="Etawah">Etawah</option>
										<option value="Faizabad">Faizabad</option>
										<option value="Faridabad">Faridabad</option>
										<option value="Farrukhabad">Farrukhabad</option>
										<option value="Fatehpur">Fatehpur</option>
										<option value="Firozabad">Firozabad</option>
										<option value="Gadag">Gadag</option>
										<option value="Gandhinagar">Gandhinagar</option>
										<option value="Ganganagar">Ganganagar</option>
										<option value="Ganjam">Ganjam</option>
										<option value="Garhwa">Garhwa</option>
										<option value="Gaya">Gaya</option>
										<option value="Ghaziabad">Ghaziabad</option>
										<option value="Ghazipur">Ghazipur</option>
										<option value="Giridih">Giridih</option>
										<option value="Goa North">Goa North</option>
										<option value="Goa South">Goa South</option>
										<option value="Godda">Godda</option>
										<option value="Gonda">Gonda</option>
										<option value="Gondia">Gondia</option>
										<option value="Gopalganj">Gopalganj</option>
										<option value="Gorakhpur">Gorakhpur</option>
										<option value="Gulbarga">Gulbarga</option>
										<option value="Guna">Guna</option>
										<option value="Guntur">Guntur</option>
										<option value="Gurdaspur">Gurdaspur</option>
										<option value="Gurgaon">Gurgaon</option>
										<option value="Guwahati">Guwahati</option>
										<option value="Gwalior">Gwalior</option>
										<option value="Hajipur">Hajipur</option>
										<option value="Hamirpur (HP)">Hamirpur (HP)</option>
										<option value="Hamirpur (UP)">Hamirpur (UP)</option>
										<option value="Hanumangarh">Hanumangarh</option>
										<option value="Hardoi">Hardoi</option>
										<option value="Haridwar">Haridwar</option>
										<option value="Hassan">Hassan</option>
										<option value="Hathras">Hathras</option>
										<option value="Hazaribagh">Hazaribagh</option>
										<option value="Hingoli">Hingoli</option>
										<option value="Hisar">Hisar</option>
										<option value="Hoshangabad">Hoshangabad</option>
										<option value="Hoshiarpur">Hoshiarpur</option>
										<option value="Howrah">Howrah</option>
										<option value="Hubli-Dharwad">Hubli-Dharwad</option>
										<option value="Hyderabad">Hyderabad</option>
										<option value="Idukki">Idukki</option>
										<option value="Imphal East">Imphal East</option>
										<option value="Imphal West">Imphal West</option>
										<option value="Indore">Indore</option>
										<option value="Itanagar">Itanagar</option>
										<option value="Jabalpur">Jabalpur</option>
										<option value="Jagatsinghpur">Jagatsinghpur</option>
										<option value="Jaipur">Jaipur</option>
										<option value="Jaisalmer">Jaisalmer</option>
										<option value="Jalandhar">Jalandhar</option>
										<option value="Jalgaon">Jalgaon</option>
										<option value="Jalna">Jalna</option>
										<option value="Jalpaiguri">Jalpaiguri</option>
										<option value="Jammu">Jammu</option>
										<option value="Jamnagar">Jamnagar</option>
										<option value="Jamshedpur">Jamshedpur</option>
										<option value="Jaunpur">Jaunpur</option>
										<option value="Jehanabad">Jehanabad</option>
										<option value="Jhansi">Jhansi</option>
										<option value="Jhargram">Jhargram</option>
										<option value="Jhunjhunu">Jhunjhunu</option>
										<option value="Jind">Jind</option>
										<option value="Jodhpur">Jodhpur</option>
										<option value="Jorhat">Jorhat</option>
										<option value="Junagadh">Junagadh</option>
										<option value="Kadapa">Kadapa</option>
										<option value="Kaimur">Kaimur</option>
										<option value="Kakinada">Kakinada</option>
										<option value="Kalahandi">Kalahandi</option>
										<option value="Kaliabor">Kaliabor</option>
										<option value="Kallakurichi">Kallakurichi</option>
										<option value="Kamareddy">Kamareddy</option>
										<option value="Kancheepuram">Kancheepuram</option>
										<option value="Kandhamal">Kandhamal</option>
										<option value="Kangra">Kangra</option>
										<option value="Kannauj">Kannauj</option>
										<option value="Kannur">Kannur</option>
										<option value="Kanpur">Kanpur</option>
										<option value="Kapurthala">Kapurthala</option>
										<option value="Karimnagar">Karimnagar</option>
										<option value="Karnal">Karnal</option>
										<option value="Karur">Karur</option>
										<option value="Kasaragod">Kasaragod</option>
										<option value="Kathua">Kathua</option>
										<option value="Katihar">Katihar</option>
										<option value="Kavaratti">Kavaratti</option>
										<option value="Kendrapara">Kendrapara</option>
										<option value="Kendujhar">Kendujhar</option>
										<option value="Khagaria">Khagaria</option>
										<option value="Khammam">Khammam</option>
										<option value="Khandwa">Khandwa</option>
										<option value="Khargone">Khargone</option>
										<option value="Kheda">Kheda</option>
										<option value="Kheri">Kheri</option>
										<option value="Kishanganj">Kishanganj</option>
										<option value="Kochi">Kochi</option>
										<option value="Kodagu">Kodagu</option>
										<option value="Kohima">Kohima</option>
										<option value="Kolar">Kolar</option>
										<option value="Kolhapur">Kolhapur</option>
										<option value="Kolkata Dakshin">Kolkata Dakshin</option>
										<option value="Kolkata Uttar">Kolkata Uttar</option>
										<option value="Kollam">Kollam</option>
										<option value="Koppal">Koppal</option>
										<option value="Koraput">Koraput</option>
										<option value="Kota">Kota</option>
										<option value="Kottayam">Kottayam</option>
										<option value="Kozhikode">Kozhikode</option>
										<option value="Krishnagiri">Krishnagiri</option>
										<option value="Kullu">Kullu</option>
										<option value="Kurnool">Kurnool</option>
										<option value="Kurukshetra">Kurukshetra</option>
										<option value="Kushinagar">Kushinagar</option>
										<option value="Lakhimpur">Lakhimpur</option>
										<option value="Lalitpur">Lalitpur</option>
										<option value="Latur">Latur</option>
										<option value="Leh">Leh</option>
										<option value="Lucknow">Lucknow</option>
										<option value="Ludhiana">Ludhiana</option>
										<option value="Machilipatnam">Machilipatnam</option>
										<option value="Madhepura">Madhepura</option>
										<option value="Madurai">Madurai</option>
										<option value="Mahabubnagar">Mahabubnagar</option>
										<option value="Mahesana">Mahesana</option>
										<option value="Mahoba">Mahoba</option>
										<option value="Mainpuri">Mainpuri</option>
										<option value="Malda">Malda</option>
										<option value="Malkangiri">Malkangiri</option>
										<option value="Mandi">Mandi</option>
										<option value="Mandla">Mandla</option>
										<option value="Mandsaur">Mandsaur</option>
										<option value="Mangalore">Mangalore</option>
										<option value="Manipur Inner">Manipur Inner</option>
										<option value="Manipur Outer">Manipur Outer</option>
										<option value="Mansa">Mansa</option>
										<option value="Mathura">Mathura</option>
										<option value="Mau">Mau</option>
										<option value="Medak">Medak</option>
										<option value="Meerut">Meerut</option>
										<option value="Mehsana">Mehsana</option>
										<option value="Mirzapur">Mirzapur</option>
										<option value="Moga">Moga</option>
										<option value="Moradabad">Moradabad</option>
										<option value="Morena">Morena</option>
										<option value="Motihari">Motihari</option>
										<option value="Mumbai North">Mumbai North</option>
										<option value="Mumbai North Central">Mumbai North Central</option>
										<option value="Mumbai North East">Mumbai North East</option>
										<option value="Mumbai North West">Mumbai North West</option>
										<option value="Mumbai South">Mumbai South</option>
										<option value="Mumbai South Central">Mumbai South Central</option>
										<option value="Murshidabad">Murshidabad</option>
										<option value="Muzaffarnagar">Muzaffarnagar</option>
										<option value="Muzaffarpur">Muzaffarpur</option>
										<option value="Mysore">Mysore</option>
										<option value="Nadia">Nadia</option>
										<option value="Nagaon">Nagaon</option>
										<option value="Nagapattinam">Nagapattinam</option>
										<option value="Nagaur">Nagaur</option>
										<option value="Nagpur">Nagpur</option>
										<option value="Nainital">Nainital</option>
										<option value="Nalanda">Nalanda</option>
										<option value="Nalgonda">Nalgonda</option>
										<option value="Namakkal">Namakkal</option>
										<option value="Nanded">Nanded</option>
										<option value="Nandurbar">Nandurbar</option>
										<option value="Narmada">Narmada</option>
										<option value="Narsinghpur">Narsinghpur</option>
										<option value="Nashik">Nashik</option>
										<option value="Navsari">Navsari</option>
										<option value="Nawada">Nawada</option>
										<option value="Nellore">Nellore</option>
										<option value="New Delhi">New Delhi</option>
										<option value="Nizamabad">Nizamabad</option>
										<option value="Noida">Noida</option>
										<option value="North 24 Parganas">North 24 Parganas</option>
										<option value="North Goa">North Goa</option>
										<option value="North West Delhi">North West Delhi</option>
										<option value="Ongole">Ongole</option>
										<option value="Osmanabad">Osmanabad</option>
										<option value="Palakkad">Palakkad</option>
										<option value="Palamu">Palamu</option>
										<option value="Pali">Pali</option>
										<option value="Panipat">Panipat</option>
										<option value="Panna">Panna</option>
										<option value="Parbhani">Parbhani</option>
										<option value="Patan">Patan</option>
										<option value="Pathanamthitta">Pathanamthitta</option>
										<option value="Patiala">Patiala</option>
										<option value="Patna Sahib">Patna Sahib</option>
										<option value="Pilibhit">Pilibhit</option>
										<option value="Pithoragarh">Pithoragarh</option>
										<option value="Pondicherry">Pondicherry</option>
										<option value="Porbandar">Porbandar</option>
										<option value="Pratapgarh">Pratapgarh</option>
										<option value="Prayagraj">Prayagraj</option>
										<option value="Puducherry">Puducherry</option>
										<option value="Pune">Pune</option>
										<option value="Puri">Puri</option>
										<option value="Purnia">Purnia</option>
										<option value="Purulia">Purulia</option>
										<option value="Raebareli">Raebareli</option>
										<option value="Raichur">Raichur</option>
										<option value="Raigad">Raigad</option>
										<option value="Raipur">Raipur</option>
										<option value="Raisen">Raisen</option>
										<option value="Rajgarh">Rajgarh</option>
										<option value="Rajkot">Rajkot</option>
										<option value="Rajnandgaon">Rajnandgaon</option>
										<option value="Rajsamand">Rajsamand</option>
										<option value="Ramanathapuram">Ramanathapuram</option>
										<option value="Ramgarh">Ramgarh</option>
										<option value="Rampur">Rampur</option>
										<option value="Ranchi">Ranchi</option>
										<option value="Rangareddy">Rangareddy</option>
										<option value="Ratlam">Ratlam</option>
										<option value="Ratnagiri">Ratnagiri</option>
										<option value="Rayagada">Rayagada</option>
										<option value="Rewa">Rewa</option>
										<option value="Rewari">Rewari</option>
										<option value="Rohtak">Rohtak</option>
										<option value="Rohtas">Rohtas</option>
										<option value="Rudraprayag">Rudraprayag</option>
										<option value="Sagar">Sagar</option>
										<option value="Saharanpur">Saharanpur</option>
										<option value="Saharsa">Saharsa</option>
										<option value="Salem">Salem</option>
										<option value="Samastipur">Samastipur</option>
										<option value="Sambalpur">Sambalpur</option>
										<option value="Sangli">Sangli</option>
										<option value="Sangrur">Sangrur</option>
										<option value="Sant Kabir Nagar">Sant Kabir Nagar</option>
										<option value="Saran">Saran</option>
										<option value="Satara">Satara</option>
										<option value="Satna">Satna</option>
										<option value="Secunderabad">Secunderabad</option>
										<option value="Sehore">Sehore</option>
										<option value="Seoni">Seoni</option>
										<option value="Shahdol">Shahdol</option>
										<option value="Shajapur">Shajapur</option>
										<option value="Shamli">Shamli</option>
										<option value="Sheohar">Sheohar</option>
										<option value="Sheopur">Sheopur</option>
										<option value="Shimla">Shimla</option>
										<option value="Shimoga">Shimoga</option>
										<option value="Shivpuri">Shivpuri</option>
										<option value="Sikar">Sikar</option>
										<option value="Silchar">Silchar</option>
										<option value="Siliguri">Siliguri</option>
										<option value="Sirmaur">Sirmaur</option>
										<option value="Sitamarhi">Sitamarhi</option>
										<option value="Sitapur">Sitapur</option>
										<option value="Siwan">Siwan</option>
										<option value="Solapur">Solapur</option>
										<option value="Sonipat">Sonipat</option>
										<option value="South 24 Parganas">South 24 Parganas</option>
										<option value="South Delhi">South Delhi</option>
										<option value="South Goa">South Goa</option>
										<option value="Sultanpur">Sultanpur</option>
										<option value="Sundargarh">Sundargarh</option>
										<option value="Surat">Surat</option>
										<option value="Surendranagar">Surendranagar</option>
										<option value="Suryapet">Suryapet</option>
										<option value="Tarn Taran">Tarn Taran</option>
										<option value="Tehri Garhwal">Tehri Garhwal</option>
										<option value="Thane">Thane</option>
										<option value="Thanjavur">Thanjavur</option>
										<option value="Theni">Theni</option>
										<option value="Thiruvananthapuram">Thiruvananthapuram</option>
										<option value="Thoothukudi">Thoothukudi</option>
										<option value="Thrissur">Thrissur</option>
										<option value="Tikamgarh">Tikamgarh</option>
										<option value="Tinsukia">Tinsukia</option>
										<option value="Tiruchirappalli">Tiruchirappalli</option>
										<option value="Tirunelveli">Tirunelveli</option>
										<option value="Tirupattur">Tirupattur</option>
										<option value="Tirupati">Tirupati</option>
										<option value="Tiruppur">Tiruppur</option>
										<option value="Tiruvallur">Tiruvallur</option>
										<option value="Tiruvannamalai">Tiruvannamalai</option>
										<option value="Tumkur">Tumkur</option>
										<option value="Udaipur">Udaipur</option>
										<option value="Udhampur">Udhampur</option>
										<option value="Udupi">Udupi</option>
										<option value="Ujjain">Ujjain</option>
										<option value="Ukhrul">Ukhrul</option>
										<option value="Ulhasnagar">Ulhasnagar</option>
										<option value="Unnao">Unnao</option>
										<option value="Uttara Kannada">Uttara Kannada</option>
										<option value="Vadodara">Vadodara</option>
										<option value="Vaishali">Vaishali</option>
										<option value="Valsad">Valsad</option>
										<option value="Varanasi">Varanasi</option>
										<option value="Vellore">Vellore</option>
										<option value="Vidisha">Vidisha</option>
										<option value="Viluppuram">Viluppuram</option>
										<option value="Virudhunagar">Virudhunagar</option>
										<option value="Visakhapatnam">Visakhapatnam</option>
										<option value="Vizianagaram">Vizianagaram</option>
										<option value="Warangal">Warangal</option>
										<option value="Wardha">Wardha</option>
										<option value="Washim">Washim</option>
										<option value="West Delhi">West Delhi</option>
										<option value="West Godavari">West Godavari</option>
										<option value="West Singhbhum">West Singhbhum</option>
										<option value="Wayanad">Wayanad</option>
										<option value="Yadgir">Yadgir</option>
										<option value="Yamunanagar">Yamunanagar</option>
										<option value="Yavatmal">Yavatmal</option>
									</select>
								</Box>
								
								<Box>
									<Text as="label" size="3" htmlFor="btcConstituency" mb="1" weight="bold">
										BTC Constituency
									</Text>
									<select
										id="btcConstituency"
										name="btcconstituency"
										required
										style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid var(--gray-6)" }}
									>
										<option value="">Select BTC Constituency</option>
										<option value="0 Not Applicable">0 Not Applicable</option>
										<option value="1 Parbatjhora (ST)">1 Parbatjhora (ST)</option>
										<option value="2 Guma">2 Guma</option>
										<option value="3 Srirampur">3 Srirampur</option>
										<option value="4 Jamduar (ST)">4 Jamduar (ST)</option>
										<option value="5 Soraibil (ST)">5 Soraibil (ST)</option>
										<option value="6 Kachugaon (ST)">6 Kachugaon (ST)</option>
										<option value="7 Fakirgram">7 Fakirgram</option>
										<option value="8 Dotma (ST)">8 Dotma (ST)</option>
										<option value="9 Banargaon (ST)">9 Banargaon (ST)</option>
										<option value="10 Debargaon (ST)">10 Debargaon (ST)</option>
										<option value="11 Baokhungri (ST)">11 Baokhungri (ST)</option>
										<option value="12 Salaikati (ST)">12 Salaikati (ST)</option>
										<option value="13 Chirang (ST)">13 Chirang (ST)</option>
										<option value="14 Chirang Duars (ST)">14 Chirang Duars (ST)</option>
										<option value="15 Kajalgaon (ST)">15 Kajalgaon (ST)</option>
										<option value="16 Nichima (ST)">16 Nichima (ST)</option>
										<option value="17 Sobaijhar (ST)">17 Sobaijhar (ST)</option>
										<option value="18 Manas Serfang (ST)">18 Manas Serfang (ST)</option>
										<option value="19 Thuribari">19 Thuribari</option>
										<option value="20 Mathanguri">20 Mathanguri</option>
										<option value="21 Salbari (ST)">21 Salbari (ST)</option>
										<option value="22 Koklabari (ST)">22 Koklabari (ST)</option>
										<option value="23 Dihira">23 Dihira</option>
										<option value="24 Mushalpur (ST)">24 Mushalpur (ST)</option>
										<option value="25 Baganpara (ST)">25 Baganpara (ST)</option>
										<option value="26 Darrangajuli (ST)">26 Darrangajuli (ST)</option>
										<option value="27 Nagrijuli">27 Nagrijuli</option>
										<option value="28 Goibari (ST)">28 Goibari (ST)</option>
										<option value="29 Suklai Serfang (ST)">29 Suklai Serfang (ST)</option>
										<option value="30 Goreswar (ST)">30 Goreswar (ST)</option>
										<option value="31 Khwirwbari (ST)">31 Khwirwbari (ST)</option>
										<option value="32 Bhergaon (ST)">32 Bhergaon (ST)</option>
										<option value="33 Nonwi Serfang">33 Nonwi Serfang</option>
										<option value="34 Khaling Duar (ST)">34 Khaling Duar (ST)</option>
										<option value="35 Mwdwibari">35 Mwdwibari</option>
										<option value="36 Horisinga (ST)">36 Horisinga (ST)</option>
										<option value="37 Dwhwnsri (ST)">37 Dwhwnsri (ST)</option>
										<option value="38 Bhairabkunda (ST)">38 Bhairabkunda (ST)</option>
										<option value="39 Pasnwi Serfang">39 Pasnwi Serfang</option>
										<option value="40 Rowta (ST)">40 Rowta (ST)</option>
									</select>
								</Box>
								<Box>
									<Text as="label" size="3" htmlFor="assemblyConstituency" mb="1" weight="bold">
										Assembly Constituency
									</Text>
									<select
										id="assemblyConstituency"
										name="assemblyconstituency"
										required
										style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid var(--gray-6)" }}
									>
										<option value="">Select Assembly Constituency</option>
										<option value="1 Gossaigaon">1 Gossaigaon</option>
										<option value="2 Dotma">2 Dotma</option>
										<option value="3 Kokrajhar">3 Kokrajhar</option>
										<option value="4 Baokhungri">4 Baokhungri</option>
										<option value="5 Parbatjhora">5 Parbatjhora</option>
										<option value="6 Golakganj">6 Golakganj</option>
										<option value="7 Gauripur">7 Gauripur</option>
										<option value="8 Dhubri">8 Dhubri</option>
										<option value="9 Birsing Jarua">9 Birsing Jarua</option>
										<option value="10 Bilasipara">10 Bilasipara</option>
										<option value="11 Mankachar">11 Mankachar</option>
										<option value="12 Jaleshwar">12 Jaleshwar</option>
										<option value="13 Goalpara West">13 Goalpara West</option>
										<option value="14 Goalpara East">14 Goalpara East</option>
										<option value="15 Dudhnoi">15 Dudhnoi</option>
										<option value="16 Abhayapuri">16 Abhayapuri</option>
										<option value="17 Srijangram">17 Srijangram</option>
										<option value="18 Bongaigaon">18 Bongaigaon</option>
										<option value="19 Sidli–Chirang">19 Sidli–Chirang</option>
										<option value="20 Bijni">20 Bijni</option>
										<option value="21 Bhowanipur–Sorbhog">21 Bhowanipur–Sorbhog</option>
										<option value="22 Mandia">22 Mandia</option>
										<option value="23 Chenga">23 Chenga</option>
										<option value="24 Barpeta">24 Barpeta</option>
										<option value="25 Pakabetbari">25 Pakabetbari</option>
										<option value="26 Bajali">26 Bajali</option>
										<option value="27 Chamaria">27 Chamaria</option>
										<option value="28 Boko–Chaygaon">28 Boko–Chaygaon</option>
										<option value="29 Palasbari">29 Palasbari</option>
										<option value="30 Hajo–Sualkuchi">30 Hajo–Sualkuchi</option>
										<option value="31 Rangiya">31 Rangiya</option>
										<option value="32 Kamalpur">32 Kamalpur</option>
										<option value="33 Dispur">33 Dispur</option>
										<option value="34 Dimoria">34 Dimoria</option>
										<option value="35 New Guwahati">35 New Guwahati</option>
										<option value="36 Guwahati Central">36 Guwahati Central</option>
										<option value="37 Jalukbari">37 Jalukbari</option>
										<option value="38 Barkhetry">38 Barkhetry</option>
										<option value="39 Nalbari">39 Nalbari</option>
										<option value="40 Tihu">40 Tihu</option>
										<option value="41 Manas">41 Manas</option>
										<option value="42 Baksa">42 Baksa</option>
										<option value="43 Tamulpur">43 Tamulpur</option>
										<option value="44 Goreshwar">44 Goreshwar</option>
										<option value="45 Bhergaon">45 Bhergaon</option>
										<option value="46 Udalguri">46 Udalguri</option>
										<option value="47 Majbat">47 Majbat</option>
										<option value="48 Tangla">48 Tangla</option>
										<option value="49 Sipajhar">49 Sipajhar</option>
										<option value="50 Mangaldoi">50 Mangaldoi</option>
										<option value="51 Dalgaon">51 Dalgaon</option>
										<option value="52 Jagiroad">52 Jagiroad</option>
										<option value="53 Laharighat">53 Laharighat</option>
										<option value="54 Morigaon">54 Morigaon</option>
										<option value="55 Dhing">55 Dhing</option>
										<option value="56 Rupohihat">56 Rupohihat</option>
										<option value="57 Kaliabor">57 Kaliabor</option>
										<option value="58 Samaguri">58 Samaguri</option>
										<option value="59 Barhampur">59 Barhampur</option>
										<option value="60 Nagaon–Batadraba">60 Nagaon–Batadraba</option>
										<option value="61 Raha">61 Raha</option>
										<option value="62 Binnakandi">62 Binnakandi</option>
										<option value="63 Hojai">63 Hojai</option>
										<option value="64 Lumding">64 Lumding</option>
										<option value="65 Dhekiajuli">65 Dhekiajuli</option>
										<option value="66 Barchalla">66 Barchalla</option>
										<option value="67 Tezpur">67 Tezpur</option>
										<option value="68 Rangapara">68 Rangapara</option>
										<option value="69 Naduar">69 Naduar</option>
										<option value="70 Biswanath">70 Biswanath</option>
										<option value="71 Behali">71 Behali</option>
										<option value="72 Gohpur">72 Gohpur</option>
										<option value="73 Bihpuria">73 Bihpuria</option>
										<option value="74 Rongonadi">74 Rongonadi</option>
										<option value="75 Naoboicha">75 Naoboicha</option>
										<option value="76 Lakhimpur">76 Lakhimpur</option>
										<option value="77 Dhakuakhana">77 Dhakuakhana</option>
										<option value="78 Dhemaji">78 Dhemaji</option>
										<option value="79 Sissiborgaon">79 Sissiborgaon</option>
										<option value="80 Jonai">80 Jonai</option>
										<option value="81 Sadiya">81 Sadiya</option>
										<option value="82 Doom Dooma">82 Doom Dooma</option>
										<option value="83 Margherita">83 Margherita</option>
										<option value="84 Digboi">84 Digboi</option>
										<option value="85 Makum">85 Makum</option>
										<option value="86 Tinsukia">86 Tinsukia</option>
										<option value="87 Chabua–Lahowal">87 Chabua–Lahowal</option>
										<option value="88 Dibrugarh">88 Dibrugarh</option>
										<option value="89 Khowang">89 Khowang</option>
										<option value="90 Duliajan">90 Duliajan</option>
										<option value="91 Tingkhong">91 Tingkhong</option>
										<option value="92 Naharkatia">92 Naharkatia</option>
										<option value="93 Sonari">93 Sonari</option>
										<option value="94 Mahmora">94 Mahmora</option>
										<option value="95 Demow">95 Demow</option>
										<option value="96 Sibsagar">96 Sibsagar</option>
										<option value="97 Nazira">97 Nazira</option>
										<option value="98 Majuli">98 Majuli</option>
										<option value="99 Teok">99 Teok</option>
										<option value="100 Jorhat">100 Jorhat</option>
										<option value="101 Mariani">101 Mariani</option>
										<option value="102 Titabor">102 Titabor</option>
										<option value="103 Golaghat">103 Golaghat</option>
										<option value="104 Dergaon">104 Dergaon</option>
										<option value="105 Bokakhat">105 Bokakhat</option>
										<option value="106 Khumtai">106 Khumtai</option>
										<option value="107 Sarupathar">107 Sarupathar</option>
										<option value="108 Bokajan">108 Bokajan</option>
										<option value="109 Howraghat">109 Howraghat</option>
										<option value="110 Diphu">110 Diphu</option>
										<option value="111 Rongkhang">111 Rongkhang</option>
										<option value="112 Amri">112 Amri</option>
										<option value="113 Haflong">113 Haflong</option>
										<option value="114 Lakhipur">114 Lakhipur</option>
										<option value="115 Udharbond">115 Udharbond</option>
										<option value="116 Katigorah">116 Katigorah</option>
										<option value="117 Borkhola">117 Borkhola</option>
										<option value="118 Silchar">118 Silchar</option>
										<option value="119 Sonai">119 Sonai</option>
										<option value="120 Dholai">120 Dholai</option>
										<option value="121 Hailakandi">121 Hailakandi</option>
										<option value="122 Algapur–Katlicherra">122 Algapur–Katlicherra</option>
										<option value="123 Karimganj North">123 Karimganj North</option>
										<option value="124 Karimganj South">124 Karimganj South</option>
										<option value="125 Patharkandi">125 Patharkandi</option>
										<option value="126 Ram Krishna Nagar">126 Ram Krishna Nagar</option>
									</select>
								</Box>
								<Box>
									<Text as="label" size="3" htmlFor="nearestBazaar" mb="1" weight="bold">
										Nearest Bazaar
									</Text>
									<input
										id="nearestBazaar"
										name="nearestbazaar"
										type="text"
										required
										placeholder="Your nearest bazaar e.g. Dotma"
										style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid var(--gray-6)" }}
									/>
								</Box>
								<Box>
									<Text as="label" size="3" htmlFor="pinCode" mb="1" weight="bold">
										Pin Code
									</Text>
									<input
										id="pinCode"
										name="pincode"
										type="text"
										required
										placeholder="Your area's pin code e.g. 783347"
										style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid var(--gray-6)" }}
									/>
								</Box>
								<Box>
									<Text as="label" size="3" htmlFor="email" mb="1" weight="bold">
										Email
									</Text>
									<input
										id="email"
										name="email"
										type="email"
										placeholder="Your email address"
										style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid var(--gray-6)" }}
									/>
								</Box>
								<Box>
									<Text as="label" size="3" htmlFor="mobile" mb="1" weight="bold">
										Mobile Number
									</Text>
									<input
										id="mobile"
										name="mobile"
										type="tel"
										required
										placeholder="Your mobile number"
										style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid var(--gray-6)" }}
									/>
								</Box>
								<Box>
									<Text as="label" size="3" htmlFor="party" mb="1" weight="bold">
										Party
									</Text>
									<select
										id="party"
										name="party"
										required
										style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid var(--gray-6)" }}
									>
										<option value="">Select Party</option>
										<option value="Aam Aadmi Party (AAP)">Aam Aadmi Party (AAP)</option>
										<option value="All India Anna Dravida Munnetra Kazhagam (AIADMK)">All India Anna Dravida Munnetra Kazhagam (AIADMK)</option>
										<option value="All India United Democratic Front (AIUDF)">All India United Democratic Front (AIUDF)</option>
										<option value="Bahujan Samaj Party (BSP)">Bahujan Samaj Party (BSP)</option>
										<option value="Bharatiya Janata Party (BJP)">Bharatiya Janata Party (BJP)</option>
										<option value="Biju Janata Dal (BJD)">Biju Janata Dal (BJD)</option>
										<option value="Bodoland People's Front (BPF)" selected>Bodoland People's Front (BPF)</option>
										<option value="Communist Party of India (CPI)">Communist Party of India (CPI)</option>
										<option value="Communist Party of India (Marxist) (CPI(M))">Communist Party of India (Marxist) (CPI(M))</option>
										<option value="Dravida Munnetra Kazhagam (DMK)">Dravida Munnetra Kazhagam (DMK)</option>
										<option value="Indian National Congress (INC)">Indian National Congress (INC)</option>
										<option value="Janata Dal (Secular) (JDS)">Janata Dal (Secular) (JDS)</option>
										<option value="Janata Dal (United) (JDU)">Janata Dal (United) (JDU)</option>
										<option value="Jammu & Kashmir Peoples Democratic Party (PDP)">Jammu & Kashmir Peoples Democratic Party (PDP)</option>
										<option value="Lok Janshakti Party (LJP)">Lok Janshakti Party (LJP)</option>
										<option value="National Conference (NC)">National Conference (NC)</option>
										<option value="Nationalist Congress Party (NCP)">Nationalist Congress Party (NCP)</option>
										<option value="Rashtriya Janata Dal (RJD)">Rashtriya Janata Dal (RJD)</option>
										<option value="Samajwadi Party (SP)">Samajwadi Party (SP)</option>
										<option value="Shiromani Akali Dal (SAD)">Shiromani Akali Dal (SAD)</option>
										<option value="Shiv Sena (Shinde)">Shiv Sena (Shinde)</option>
										<option value="Shiv Sena (UBT)">Shiv Sena (UBT)</option>
										<option value="Telugu Desam Party (TDP)">Telugu Desam Party (TDP)</option>
										<option value="Trinamool Congress (TMC)">Trinamool Congress (TMC)</option>
										<option value="United People's Party Liberal (UPPL)">United People's Party Liberal (UPPL)</option>
										<option value="YSR Congress Party (YSRCP)">YSR Congress Party (YSRCP)</option>
										<option value="Independent">Independent</option>
										<option value="Other">Other</option>
									</select>
								</Box>
								<Box>
									<label style={{ display: "flex", alignItems: "center", gap: 8 }}>
										<input
											type="checkbox"
											id="agree"
											name="agree"
											required
											style={{ width: 18, height: 18 }}
										/>
										<Text as="span" size="3">
											I confirm that the information provided is true and I wish to join/support the party I selected.
										</Text>
									</label>
								</Box>
								<Box mt="4">
									<Button type="submit" size="3" color="crimson" radius="full">
										I Agree & Support it my own!

									</Button>
								</Box>
							</Grid>
						</form>
					</Container>
				</Section>
			</Box>



			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Separator size="2" />
				<Section size={{ initial: "2", md: "4" }} pb="0">
					<Footer />
				</Section>
			</Container>
		</MobileMenuProvider>
	);
}


