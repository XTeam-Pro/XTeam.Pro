"""Shared localization helpers for route handlers."""


def localized(obj, base: str, lang: str) -> str:
    """
    Return the best available localized string for `base` attribute on `obj`.

    Priority:
    1. Attribute with requested language suffix  (e.g. title_ru)
    2. Attribute with alternate language suffix   (e.g. title_en)
    3. Legacy unsuffixed attribute               (e.g. title)
    4. Empty string
    """
    alt_lang = "en" if lang == "ru" else "ru"
    value = getattr(obj, f"{base}_{lang}", None)
    value_alt = getattr(obj, f"{base}_{alt_lang}", None)
    legacy = getattr(obj, base, None)
    return (value or value_alt or legacy or "").strip()
