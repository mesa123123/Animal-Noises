import { shallowMount } from "@vue/test-utils";
import pig from "@/components/Pig.vue";
import fox from "@/components/Fox.vue";

describe("Pig", () => {
  it("Displays the Correct title", () => {
    const msg = "What does the piggy say?";
    const wrapper = shallowMount(pig, {
      propsData: { pigTitle }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
