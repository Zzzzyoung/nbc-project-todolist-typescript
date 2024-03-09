import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./keys.constant";
import { getTodos } from "./queryFunctions";

export const useGetTodos = () =>
  useQuery({
    queryKey: [QUERY_KEYS.TODOS],
    queryFn: getTodos
  });
