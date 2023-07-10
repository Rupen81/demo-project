import { useEffect, useState } from "react";

function useDebounce(text){
    const [isLoading, setIsLoading] = useState(false);
    const [debouncedValue, setDebouncedValue] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setDebouncedValue(text);
            setIsLoading(false);
        }, 5000);
        setIsLoading(true);
        }, [text]);
    return [debouncedValue, isLoading];
}

export default useDebounce;
