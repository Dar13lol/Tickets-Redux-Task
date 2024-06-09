export function getTimeFromMinutes(minutes: number): string {
    const hours = Math.trunc(minutes / 60);
    const min = minutes % 60;
    return hours + " ч " + min + " м";
}
