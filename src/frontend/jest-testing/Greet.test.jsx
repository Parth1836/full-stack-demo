const { render, screen } = require("@testing-library/react");
import "@testing-library/jest-dom"; // this is required to access expect functions like toBeInTheDocument, etc
const { Greet } = require("./Greet");

describe('Greet', () => { 

    it("Testing Greet component renders correctly", ()=>{
        render(<Greet />);
        const textElement = screen.getByText("Hello");
        expect(textElement).toBeInTheDocument();
    })
 })