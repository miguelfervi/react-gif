import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en <AddCategory></AddCategory>", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(
    <AddCategory setCategories={setCategories}></AddCategory>
  );

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <AddCategory setCategories={setCategories}></AddCategory>
    );
  });

  test("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change texto", () => {
    const input = wrapper.find('input[type="text"]');
    const value = "Hola Mundo";
    input.simulate("change", { target: { value } });
  });

  test("No debe", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe llamar al emtodo y limpiar el input", () => {
    const value = "Hola Mundo";

    wrapper.find("input").simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));


    expect(wrapper.find("input").prop('value')).toBe('');
  });
});
