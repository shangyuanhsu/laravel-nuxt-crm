// all pages will be used

import { defineStore } from "pinia";

// loading page
export const useLoadingStore = defineStore("loading", () => {

    const isLoading = ref<boolean>(false);

    const setLoading = (value: boolean) => {
        isLoading.value = value;
    };

    return {
        isLoading,
        setLoading
    };
});
