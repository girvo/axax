export * from "./deferredIterable";
export * from "./restToIterable";
export * from "./merge";
export * from "./lookahead";
export * from "./toCallbacks";
export * from "./iteratorToIterable";
export * from "./map";
export * from "./flatMap";
export * from "./interval";
export * from "./insert";
export * from "./zip";
export * from "./iterableToArray";
export * from "./filter";
export * from "./concat";
export * from "./fromEvent";
export * from "./tap";

const windowAny: any = window;

if (typeof windowAny !== "undefined" && windowAny["Aix"] === undefined) {
  windowAny.Aix = exports;
}
