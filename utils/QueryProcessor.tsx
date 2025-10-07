export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "snehalp";
  }

  // Handle queries like "add 2 and 3" or "what is 2 plus 3"
  const addMatch = query.match(/add (\d+) and (\d+)/i);
  if (addMatch) {
    const sum = parseInt(addMatch[1], 10) + parseInt(addMatch[2], 10);
    return sum.toString();
  }

  const plusMatch = query.match(/(\d+) plus (\d+)/i);
  if (plusMatch) {
    const sum = parseInt(plusMatch[1], 10) + parseInt(plusMatch[2], 10);
    return sum.toString();
  }

  // Handle queries like "Which of the following numbers is the largest: 27, 81, 1?"
  const largestMatch = query.match(/largest: ([\d,\s]+)/i);
  if (largestMatch) {
    const numbers = largestMatch[1]
      .split(",")
      .map((n) => parseInt(n.trim(), 10))
      .filter((n) => !isNaN(n));
    if (numbers.length > 0) {
      return Math.max(...numbers).toString();
    }
  }

  return "";
}
