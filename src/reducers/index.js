export default ({count} = {count: 0}, {type}) => {
    switch (type) {
    case "increase": return {count: count + 1}
    case "decrease": return {count: count - 1}
    default: return {count};
    }
}