import {
	ArrowDownIcon,
	ArrowUpIcon,
	CheckIcon,
	CopyIcon,
	Cross2Icon,
	DotsHorizontalIcon,
	DrawingPinFilledIcon,
	DrawingPinIcon,
	OpenInNewWindowIcon,
	PlusIcon,
	Share2Icon,
} from "@radix-ui/react-icons";
import {
	Avatar,
	Badge,
	Box,
	Button,
	Card,
	Checkbox,
	DropdownMenu,
	Flex,
	Grid,
	Heading,
	IconButton,
	Link,
	Separator,
	Strong,
	Switch,
	Text,
	TextField,
	Theme,
} from "@radix-ui/themes";
import { Marker } from "./Marker";
import { allPeople, email } from "./people";
import * as React from "react";

type ExampleLayoutProps = React.ComponentPropsWithoutRef<typeof Flex> & {
	focusable?: boolean;
};

export const ExampleThemesDashboardNew = ({
	focusable = true,
	...props
}: ExampleLayoutProps) => {
	// We’ll use a different portal container for homepage demo purposes; this is usually not needed.
	const [portalContainer, setPortalContainer] =
		React.useState<HTMLDivElement | null>(null);

	// Interactive elements may be not focusable for homepage demo purposes
	const tabIndex = focusable ? undefined : -1;

	// Simple state to make the example functional
	const [state, setState] = React.useState({
		todo: [
			{ id: "a", completed: false },
			{ id: "b", completed: false },
			{ id: "c", completed: false },
			{ id: "d", completed: false },
			{ id: "e", completed: true },
			{ id: "f", completed: true },
		],
		activityPinned: true,
		financePinned: false,
	});

	return (
		<Flex align="center" gap="6" ref={setPortalContainer} {...props}>
			<Flex flexShrink="0" gap="6" direction="column" width="640px">
				<Card size="4">
					<Heading as="h3" size="6" trim="start" mb="2">
						Your team
					</Heading>

					<Text as="p" size="2" mb="5" color="gray">
						Invite and manage your team members.
					</Text>

					<Flex gap="3" mb="5">
						<Box flexGrow="1">
							<TextField.Root
								tabIndex={tabIndex}
								size="2"
								placeholder="Email address"
							/>
						</Box>
						<Button tabIndex={tabIndex} size="2">
							Invite
						</Button>
					</Flex>

					<Flex direction="column">
						{[4, 2, 12, 20, 16].map((number, i) => (
							<Box key={number}>
								<Flex gap="4" align="center">
									<Flex gap="3" align="center" width="200px">
										<Avatar
											src={allPeople[number]?.image}
											fallback={allPeople[number]?.name[0].toUpperCase()}
										/>
										<Link
											href="#"
											tabIndex={tabIndex}
											size="2"
											wrap="nowrap"
											onClick={(e) => e.preventDefault()}
										>
											{allPeople[number]?.name}
										</Link>
									</Flex>

									<Text size="2" color="gray">
										{email(allPeople[number]?.name)}
									</Text>

									<Flex flexGrow="1" justify="end">
										<DropdownMenu.Root>
											<DropdownMenu.Trigger>
												<IconButton
													color="gray"
													tabIndex={tabIndex}
													variant="ghost"
												>
													<DotsHorizontalIcon />
												</IconButton>
											</DropdownMenu.Trigger>
											<DropdownMenu.Content
												container={portalContainer}
												variant="soft"
											>
												<DropdownMenu.Item>View profile</DropdownMenu.Item>
												<DropdownMenu.Item>Change role</DropdownMenu.Item>
												<DropdownMenu.Separator />
												<DropdownMenu.Item color="red">
													Remove
												</DropdownMenu.Item>
											</DropdownMenu.Content>
										</DropdownMenu.Root>
									</Flex>
								</Flex>

								{i !== 4 && (
									<Box>
										<Separator size="4" my="3" />
									</Box>
								)}
							</Box>
						))}
					</Flex>
				</Card>
				<Card size="4">
					<Heading as="h3" size="6" trim="start" mb="2">
						Pricing
					</Heading>

					<Text as="p" size="2" mb="5" color="gray">
						No credit card required. Every plan includes a 30-day trial of all
						Pro features.
					</Text>

					<Grid columns="3" gap="6">
						<Flex direction="column">
							<Text weight="bold" size="5" mb="1">
								Basic
							</Text>
							<Text color="gray" size="2" mb="4">
								3 team members
							</Text>
							<Text weight="bold" size="5" mb="4">
								$0
								<Text
									size="5"
									weight="bold"
									style={{ color: "var(--gray-a8)" }}
								>
									{" / mo"}
								</Text>
							</Text>

							<Flex direction="column" gap="2">
								<Flex gap="2" align="center">
									<Marker>
										<CheckIcon width="14" height="14" />
									</Marker>
									<Text size="2">Expense tracking</Text>
								</Flex>
								<Flex gap="2" align="center">
									<Marker>
										<CheckIcon width="14" height="14" />
									</Marker>
									<Text size="2">Invoicing</Text>
								</Flex>
								<Flex gap="2" align="center">
									<Marker>
										<CheckIcon width="14" height="14" />
									</Marker>
									<Text size="2">Payment tracking</Text>
								</Flex>
								<Flex gap="2" align="center">
									<Marker>
										<CheckIcon width="14" height="14" />
									</Marker>
									<Text size="2">Transaction recording</Text>
								</Flex>
								<Flex gap="2" align="center">
									<Marker>
										<CheckIcon width="14" height="14" />
									</Marker>
									<Text size="2">Basic reports</Text>
								</Flex>
								<Flex gap="2" align="center">
									<Marker>
										<CheckIcon width="14" height="14" />
									</Marker>
									<Text size="2">Email support</Text>
								</Flex>
								<Button tabIndex={tabIndex} mt="3" variant="outline">
									Downgrade
								</Button>
							</Flex>
						</Flex>

						<Flex direction="column">
							<Text weight="bold" size="5" mb="1">
								Growth
							</Text>
							<Text color="gray" size="2" mb="4">
								10 team members
							</Text>
							<Text weight="bold" size="5" mb="4">
								$49
								<Text
									size="5"
									weight="bold"
									style={{ color: "var(--gray-a8)" }}
								>
									{" / mo"}
								</Text>
							</Text>

							<Flex direction="column" gap="2">
								<Flex gap="2" align="center">
									<Marker>
										<CheckIcon width="14" height="14" />
									</Marker>
									<Text size="2">Online payments</Text>
								</Flex>
								<Flex gap="2" align="center">
									<Marker>
										<CheckIcon width="14" height="14" />
									</Marker>
									<Text size="2">Recurring invoices</Text>
								</Flex>
								<Flex gap="2" align="center">
									<Marker>
										<CheckIcon width="14" height="14" />
									</Marker>
									<Text size="2">Bill management</Text>
								</Flex>
								<Flex gap="2" align="center">
									<Marker>
										<CheckIcon width="14" height="14" />
									</Marker>
									<Text size="2">Inventory tracking</Text>
								</Flex>
								<Flex gap="2" align="center">
									<Marker>
										<CheckIcon width="14" height="14" />
									</Marker>
									<Text size="2">Detailed reports</Text>
								</Flex>
								<Flex gap="2" align="center">
									<Marker>
										<CheckIcon width="14" height="14" />
									</Marker>
									<Text size="2">Phone support</Text>
								</Flex>
								<Button tabIndex={tabIndex} mt="3" variant="outline">
									Go to Billing
								</Button>
							</Flex>
						</Flex>

						<Flex direction="column">
							<Text weight="bold" size="5" mb="1">
								Pro
							</Text>
							<Text color="gray" size="2" mb="4">
								Unlimited team members
							</Text>
							<Text weight="bold" size="5" mb="4">
								$99
								<Text
									size="5"
									weight="bold"
									style={{ color: "var(--gray-a8)" }}
								>
									{" / mo"}
								</Text>
							</Text>

							<Flex direction="column" gap="2">
								<Flex gap="2" align="center">
									<Marker>
										<CheckIcon width="14" height="14" />
									</Marker>
									<Text size="2">Custom invoices</Text>
								</Flex>
								<Flex gap="2" align="center">
									<Marker>
										<CheckIcon width="14" height="14" />
									</Marker>
									<Text size="2">Multi-business</Text>
								</Flex>
								<Flex gap="2" align="center">
									<Marker>
										<CheckIcon width="14" height="14" />
									</Marker>
									<Text size="2">Team collaboration</Text>
								</Flex>
								<Flex gap="2" align="center">
									<Marker>
										<CheckIcon width="14" height="14" />
									</Marker>
									<Text size="2">App integrations</Text>
								</Flex>
								<Flex gap="2" align="center">
									<Marker>
										<CheckIcon width="14" height="14" />
									</Marker>
									<Text size="2">Advanced security</Text>
								</Flex>
								<Flex gap="2" align="center">
									<Marker>
										<CheckIcon width="14" height="14" />
									</Marker>
									<Text size="2">Priority support</Text>
								</Flex>
								<Button tabIndex={tabIndex} mt="3">
									Upgrade
								</Button>
							</Flex>
						</Flex>
					</Grid>
				</Card>
			</Flex>
			
			
		</Flex>
	);
};

interface ToDoItem {
	id: string;
	completed: boolean;
}

interface ToDoList {
	focusable: boolean;
	items: ToDoItem[];
	onItemsChange: (items: ToDoItem[]) => void;
}

const ToDoList = ({ focusable, items, onItemsChange }: ToDoList) => {
	const tabIndex = focusable ? undefined : -1;
	const itemsContent: Record<string, React.ReactElement> = {
		a: (
			<span>
				Respond to comment{" "}
				<Link
					href="#"
					underline="hover"
					tabIndex={tabIndex}
					onClick={(e) => e.preventDefault()}
				>
					#384
				</Link>{" "}
				from Travis Ross
			</span>
		),
		b: (
			<span>
				Invite{" "}
				<Link
					href="#"
					underline="hover"
					tabIndex={tabIndex}
					onClick={(e) => e.preventDefault()}
				>
					Acme Co.
				</Link>{" "}
				team to Slack
			</span>
		),
		c: (
			<span>
				Create a report{" "}
				<Link
					href="#"
					underline="hover"
					tabIndex={tabIndex}
					onClick={(e) => e.preventDefault()}
				>
					requested
				</Link>{" "}
				by Danilo Sousa
			</span>
		),
		d: (
			<span>
				Review support request{" "}
				<Link
					href="#"
					underline="hover"
					tabIndex={tabIndex}
					onClick={(e) => e.preventDefault()}
				>
					#85
				</Link>
			</span>
		),
		e: <span>Close Q2 finances</span>,
		f: (
			<span>
				Review invoice{" "}
				<Link
					href="#"
					underline="hover"
					tabIndex={tabIndex}
					onClick={(e) => e.preventDefault()}
				>
					#3456
				</Link>
			</span>
		),
	};

	return (
		<Flex gap="2" direction="column">
			{items.map((item) => (
				<Text as="label" size="2" key={item.id}>
					<Flex as="span" gap="2">
						<Checkbox
							tabIndex={tabIndex}
							checked={item.completed}
							onCheckedChange={(checked) => {
								const newItems = items.slice();
								const newItem = newItems.find(
									(candidate) => candidate.id === item.id,
								)!;
								newItem.completed = !!checked;
								onItemsChange(newItems);
							}}
						/>
						<Text
							color={item.completed ? "gray" : undefined}
							style={
								{
									textDecoration: item.completed ? "line-through" : undefined,
									"--accent-12": "var(--accent-11)",
								} as React.CSSProperties
							}
						>
							{itemsContent[item.id]}
						</Text>
					</Flex>
				</Text>
			))}
		</Flex>
	);
};
