export function retries(attempt: number): boolean {
  return attempt < 2;
}
