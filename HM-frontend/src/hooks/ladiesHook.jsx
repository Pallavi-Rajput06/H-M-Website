import { useQuery } from "@tanstack/react-query";
import { getProductByCategory } from "../apis/ProductApis";

export const fetchProductDataHook = (data) => {
  return useQuery({
    queryKey: ["ladies products"],
    queryFn: () => getProductByCategory(data),
    staleTime: Infinity,
  });
};