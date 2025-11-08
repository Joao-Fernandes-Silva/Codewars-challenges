export function hexStringToRGB(hexString: string): { r: number, g: number, b: number } {
  if (hexString.length === 0) return { r: 0, g: 0, b: 0 };
 
  const hex: number[] = hexString.slice(1).toLowerCase().match(/.{1,2}/g)!.map(el => parseInt(el, 16));
  return {r: hex[0]!, g: hex[1]!, b: hex[2]!};
}