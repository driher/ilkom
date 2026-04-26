export const languages = ["id", "en", "ar", "zh"] as const;

export type Lang = (typeof languages)[number];

export const defaultLang: Lang = "id";