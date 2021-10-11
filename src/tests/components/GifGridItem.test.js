import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Test on <GifGridItem></GifGridItem>", () => {
  const title = "Un titulo";
  const url = "https://localhost/algo.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("should return the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should return the paragraph with the title", () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test("should return img equal to props", () => {
    const img = wrapper.find('img');
    expect(img.props().src).toBe(url);
    expect(img.props().alt).toBe(title);
  });

  test("should return className", () => {
    const img = wrapper.find('div');

    const className = img.prop('className')
    expect(className.includes('animate__fadeIn')).toBe(true);
  });
});
