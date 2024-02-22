export default function useFetch() {

    const fetchData = async (url: string, options: RequestInit = {}) => {

        const loadingStore = useLoadingStore();

        loadingStore.setLoading(true);

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const responseData = await response.json();
            return responseData;

        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        } finally {
            loadingStore.setLoading(false);
        }
    };

    return {
        fetchData,
    };

    // try {
    //     const { fetchData } = useFetch();
    //     const data = await fetchData('xxxx.xxx.xx/xxx');
    //     return { data };
    //   } catch (error) {
    //     console.error('Error during asyncData:', error);
    //     return { data: null };
    //   }
}