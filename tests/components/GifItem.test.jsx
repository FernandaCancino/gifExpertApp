import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('pruebas en el <GifItem>', () => {

  const title='Jujutsu';
  const url= 'https://jujutsu.org/';

  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect( container ).toMatchSnapshot();
  });

  test('debe de mostrar la imagen con el url y el alt indicado', () =>{
    render(<GifItem title={title} url={url} />);
    // en vez de hacer todo esto
    // expect( screen.getByRole('img').src ).toBe( url );
    // expect( screen.getByRole('img').alt ).toBe( title );

    //se puede hacer asi
    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( url ); 
    expect( alt ).toBe( alt ); 
  });

  test('debe de mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url} />);
    expect( screen.getByText(title) ).toBeTruthy();
  });
})