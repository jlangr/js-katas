// Jeffrey J. Langr
// export const power = (n, exponent) => {
//   if (exponent === 0) return 1
//   else if (exponent % 2 === 0)
//     return power(n, exponent / 2) * power(n, exponent / 2)
//   else
//     return n * power(n, exponent / 2) * power(n, exponent / 2)
//
//   // let total = n
//   // for (let i = 1; i < power; i++)
//   //   total *= n
//   // return total
// }
export function power(n, exponent)
{
  if (exponent === 0)
    return 1;
  if (exponent % 2 == 0) return power(n, exponent / 2) * power(n, exponent / 2);
  return n * power(n, Math.floor(exponent / 2)) * power(n, Math.floor(exponent / 2))
}
