import { shallow } from '@vue/test-utils';
import Greeting from '@/components/Greeting.vue';

const props = {
  name: 'Bob',
};

const wrapper = shallow(Greeting, {
  propsData: props,
});

describe('Greeting.vue', () => {
  it('renders props.name when passed', () => {
    expect(wrapper.text()).toMatch(props.name);
  });
  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
