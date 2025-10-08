import { Link } from "@radix-ui/themes";
import { Header, HeaderProps } from "./Header";
import { useRouter } from "next/router";

export const ThemesHeader = (props: HeaderProps) => {
	const router = useRouter();

	return (
		<Header gitHubLink="https://github.com/radix-ui/themes" {...props}>
			
			<Link
				size="2"
				color="gray"
				href="/research/playground"
				highContrast={router.pathname.includes("/research/playground")}
			>
				Playground
			</Link>
		</Header>
	);
};
