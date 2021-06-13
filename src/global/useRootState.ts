import { useSelector } from "react-redux";
import { RootState } from "../root.redux";

type StateSelector<T> = (state: RootState) => T;
type EqualityFn<T> = (left: T, right: T) => boolean;

const useRootState = <T>(
  selector: StateSelector<T>,
  equalityFn?: EqualityFn<T>
): T => useSelector(selector, equalityFn);

export type { StateSelector };
export default useRootState;
