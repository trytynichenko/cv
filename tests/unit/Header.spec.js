import { shallow } from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('Header.vue', () => {
  const props = {
    items: [
      { name: 'item1', path: '/item1' },
      { name: 'item2', path: '/item2' },
      { name: 'item3', path: '/item3' },
    ],
  };

  const wrapper = shallow(Header, {
    propsData: props,
  });

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
