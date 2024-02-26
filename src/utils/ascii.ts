import cfonts from "cfonts";
const { render } = cfonts;

export const genHeading = (str: string) => {
    const ascii = render(str + " ", { font: "", maxLength: 5000 }, null, null, {
        width: 5000,
        height: 5000,
    }) as { string: string };
    return ascii.string;
};