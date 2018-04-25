import { shallow } from '@vue/test-utils';
import Lines from '@/components/Lines.vue';

describe('Lines.vue', () => {
  const props = {
    data: [
      {
        title: 'title 1',
        time: '2018',
        description: 'content 1',
      },
      {
        title: 'title 2',
        time: '2018',
        description: 'content 2',
      },
    ],
  };

  const wrapper = shallow(Lines, {
    propsData: props,
  });

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
