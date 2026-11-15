/** Whether to try again: three times in all. */
export function retries(attempt: number): boolean {
  return attempt < 3;
}
