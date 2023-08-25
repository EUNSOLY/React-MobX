const { createContext } = require("react");

// Context 객체생성
export const CounterContext = createContext();

// Provider 생성(index.js에서 CounterContext.Provider 태그로 직접 감싸주기 가능)
export const CounterProvider = CounterContext.Provider;
