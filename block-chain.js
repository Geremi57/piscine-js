const blockChain = (data, prev = { index: 0, hash: '0' }) => {
    const index = prev.index + 1

    const hash = hashCode(index + prev.hash + JSON.stringify(data))
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
