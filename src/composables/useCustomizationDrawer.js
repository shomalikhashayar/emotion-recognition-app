import { ref } from "vue";

const status = ref(false);

export function useCustomizationDrawer() {
  const toggle = () => {
    status.value = !status.value;
  };

  return {
    status,
    toggle,
  };
}
