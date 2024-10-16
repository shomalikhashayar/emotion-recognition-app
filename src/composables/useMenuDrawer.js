import { ref } from "vue";

const status = ref(true);

export function useMenuDrawer() {
  const toggle = () => {
    status.value = !status.value;
  };

  return {
    status,
    toggle
  };
}
