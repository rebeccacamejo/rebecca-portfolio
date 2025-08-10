export const SITE_TITLE = "Rebecca's Space";
export const SITE_DESCRIPTION = "A internet space for Rebecca.";

export interface MenuItem {
	label: string;
	url: string;
}

export const menuItems: MenuItem[] = [
	{
		label: "rebecca",
		url: "/",
	},
	{
		label: "writings",
		url: "/writings",
	},
	{
		label: "thoughts",
		url: "/thoughts",
	},
	{
		label: "ships",
		url: "/ships",
	},
];

export const title = "Rebecca's Space";
export const description = "A internet space for Rebecca.";
export const image = "/images/ogimage.png";
export const url = "https://rebeccacamejo.com";

export const ogImage = {
	src: "/images/ogimage.png",
	alt: "Rebecca's Space",
};

export const socialLinks = [
	{
		label: "email",
		url: "mailto:rcamejo04@gmail.com",
	},
	{
		label: "github",
		url: "https://github.com/rebeccacamejo",
	},
	{
		label: "linkedin",
		url: "https://www.linkedin.com/in/rebeccacamejo",
	},
];
