const { render, screen } = require("@testing-library/react")

describe('Greet', () => { 

    it("Testing Greet component renders correctly", ()=>{
        render(<Greet />);
        const textElement = screen.getByText(/hello/i);
        expect(textElement).toBeInTheDocument();
    })
 })