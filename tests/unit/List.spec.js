import { shallow } from '@vue/test-utils';
import List from '@/components/List.vue';

describe('List.vue', () => {
  const props = {
    data: [
      {
        label: 'label 1',
        items: [
          { name: 'item 1' },
          { name: 'item 2' },
          { name: 'item 3' },
        ],
      },
    ],
  };

  const wrapper = shallow(List, {
    propsData: props,
  });

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
