import React from "react";

import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en el GifGrid", () => {
  const category = "One Punch";

  test("should correctly", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category}></GifGrid>);
    expect(wrapper).toMatchSnapshot();
  });

  test("should correctly with images", () => {
    
    const gifs = [{
        id: 'ABC',
        url: 'https://github.com/',
        title: 'cualquier cosa'
    }]

    useFetchGifs.mockReturnValue({
        data: gifs,
        loading: false,
      });
    
    const wrapper = shallow(<GifGrid category={category}></GifGrid>);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
