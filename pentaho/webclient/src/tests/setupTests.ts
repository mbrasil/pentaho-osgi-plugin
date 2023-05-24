import "@testing-library/jest-dom";
import "whatwg-fetch";
import { vi } from "vitest";

vi.mock("react-i18next", async () => {
  const { initReactI18next } = await vi.importActual<any>("react-i18next");

  return {
    initReactI18next,
    Trans: ({ i18nKey }: any) => i18nKey,
    useTranslation: () => ({
      t: (str: string, options?: any) =>
        options?.returnObjects ? undefined : str,
      i18n: { changeLanguage: () => new Promise(() => {}) },
    }),
  };
});
