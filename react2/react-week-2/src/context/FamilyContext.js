import { createContext } from "react";

export const FamilyContext = createContext(null);
// 나중에 props로 주입하는 그 하위컴포넌트 들에서 전체에서 
// 사용할 수 있는 FamilyContext가 만들어진 것