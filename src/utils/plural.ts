interface variants {
    zero?: string;
    one?: string;
    two?: string;
    few?: string;
    many?: string;
    other?: string;
}

export function plural(value: number, variants: variants): string | undefined {
    const key = new Intl.PluralRules("ar-EG").select(value);
    return variants[key];
}
