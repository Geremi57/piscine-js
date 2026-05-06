const hashCode = (str) =>
  (
    [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
  ).toString(36);


const blockChain = (data, prev = { index: 0, hash: '0' }) => {
    const index = prev.index + 1

    const hash = hashCode(JSON.stringify(data) + prev.hash + index)

    const block = {
        index,
        hash,
        data,
        prev,

        chain(newData) {
            return blockChain(newData, block)
        }
    }

    return block
}
