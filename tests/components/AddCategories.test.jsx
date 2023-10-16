import { fireEvent, render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";
import { AddCategory } from "../../src/components/AddCategories";

describe('pruebas en el <AddCategory>', () => {

  test('Debe de cambiar el valor de la caja de texto', () => { 

    const inputValue = 'Jujutsu';
    const onNewCategory = jest.fn();

    // establecemos nuestro sujeto de pruebas
    render(<AddCategory onNewCategory={ onNewCategory } />);
    const input = screen.getByRole('textbox');

    fireEvent.input( input , { target: { value: inputValue } } )
    expect( input.value ).toBe('Jujutsu');
  })

  test('debe de llamar onNewCategory si el input tiene un valor', () => {

    const inputValue = 'Jujutsu';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={ onNewCategory } />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    // establecer el valor
    fireEvent.input( input, { target: { value: inputValue} } );
    // disparar el submit del formulario
    fireEvent.submit( form );

    // asegurar que la caja de texto vuelva a ser un string vacio
    expect( input.value ).toBe('');
    expect( onNewCategory ).toHaveBeenCalled();

    //prueba cuantas veces se ha llamado la funcion
    expect( onNewCategory ).toHaveBeenCalledTimes(1);

    // prueba que haya sido llamado con el valor de nuestro input value
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
  });

  test('no debe de llamar el onNewCategory si el input esta vacío', () => {

    const inputValue = '';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={ onNewCategory } />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    // establecer el valor
    fireEvent.input( input, { target: { value: inputValue} } );
    // disparar el submit del formulario
    fireEvent.submit( form );

    // asegurar que la caja de texto vuelva a ser un string vacio
    expect( input.value ).toBe('');
    expect( onNewCategory ).not.toHaveBeenCalled();

    //prueba cuantas veces se ha llamado la funcion
    expect( onNewCategory ).toHaveBeenCalledTimes(0);
  })
})