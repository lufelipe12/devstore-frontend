const textAdapter = (anyText: string, finalIndex: number) => {
  return `${anyText.slice(0, finalIndex)}...`
}

export default textAdapter
