import { shallow } from '@vue/test-utils';
import Footer from '@/components/Footer.vue';

describe('Footer.vue', () => {
  const data = {
    author: 'Bob',
  };

  const wrapper = shallow(Footer, {
    data,
  });

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
