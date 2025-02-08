

const useTraverseTree = () => {
    function insertNode(tree, folderId, item, isFolder) {
        if (tree?.id === folderId && tree?.isFolder) {
            tree?.items?.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder,
                item: []
            });
            return tree;
        }
    let latestTree = [];
    latestTree = tree?.items?.map((obj) => {
        return insertNode(obj, folderId, item, isFolder)
    })
    return {...tree, items: latestTree}
    }

    return {insertNode};
}
export default useTraverseTree;