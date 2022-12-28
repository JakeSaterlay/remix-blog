import { Outlet, LiveReload } from "@remix-run/react";

export default function App() {
	return (
		<Document>
			<Outlet />
		</Document>
	);
}

function Document({
	children,
	title,
}: {
	children: React.ReactElement;
	title?: string;
}) {
	return (
		<html lang="en">
			<head>
				<title>{title ? title : "My Remix Blog"}</title>
				<body>
					{children}
					{process.env.NODE_ENV === "development" ? <LiveReload /> : null}
				</body>
			</head>
		</html>
	);
}
