import { shallow } from '@vue/test-utils';
import Content from '@/components/Content.vue';

describe('Content.vue', () => {
  const props = {
    html: [
      '<strong>html string</strong>',
    ],
  };

  const wrapper = shallow(Content, {
    propsData: props,
  });

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
