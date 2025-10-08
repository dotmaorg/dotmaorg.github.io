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
import {NarzaryAILogo} from "@components/NarzaryAILogo"
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
					title="Fun way to Join Bodoland Peoples Front (BPF) - Political Party of BTC"
					description="Bodoland Peoples Front (BPF) is a regional political party in Assam, India, primarily representing the interests of the Bodo people. Founded in 2005, BPF has been a significant player in Assam's political landscape, advocating for the rights and development of the Bodo community. The party has participated in various state elections and has been part of coalition governments in Assam. BPF focuses on issues such as autonomy for Bodoland, cultural preservation, and socio-economic development of the Bodo people."
					image="nangal.svg"
				/>
				<Section size={{ initial: "2", md: "4" }}>
					<Container>
						<SerifHeading mb="3" style={{ maxWidth: 920 }}>
							Bodoland People's Front (BPF)
							
						</SerifHeading>
						<Flex gap="4">
						<Box style={{ maxWidth: 820, marginBottom: 32 }}>
							<Text size="5" as="p" mb="6" color="gray">
							Bodoland Peoples Front (BPF) is a regional political party in Assam, India, primarily representing the interests of the Bodo people. Founded in 2005, BPF has been a significant player in Assam's political landscape, advocating for the rights and development of the Bodo community. The party has participated in various state elections and has been part of coalition governments in Assam. BPF focuses on issues such as autonomy for Bodoland, cultural preservation, and socio-economic development of the Bodo people.
							</Text>
						</Box>
						<Box>
							<img
								src="/logos/nangal.svg"
								alt="Bodoland Peoples Front Logo"
								style={{ width: 320, height: "auto", borderRadius: 8 }}
							/>
						</Box>
						</Flex>
						<Container>
							<SerifHeading mb="3" style={{ maxWidth: 920, textAlign: "center" }}>
								Join Bodoland People's Front (BPF)
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
										<option value="BPF" selected>BPF</option>
										<option value="UPPL">UPPL</option>
										<option value="BJP">BJP</option>
										<option value="INC">INC</option>
										<option value="AIUDF">AIUDF</option>
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


