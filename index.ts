/**
 * LitSelector
 * @param { string } target
 * @return { NodeList | HTMLElement } Returns a NodeList or returns the first descendant of the indicated element that matches the indicated selector or selectors.
 */
function ls(target: string): NodeList | HTMLElement {
    let selected: NodeList | HTMLElement;

    // return undefined if the target is empty
    if (target.length === 0) return;

    /**
     * Add "ls" method to HTMLElement interface.
     *
     * Now we can use parentNode.ls("target")
     * to find a DOM element.
     */
    Object.defineProperty(HTMLElement.prototype, 'ls', {
        value: ls
    });

    if (this instanceof HTMLElement) {
        selected = this.querySelectorAll(target);
    } else {
        // parentNode by default is "document"
        selected = document.querySelectorAll(target);
    }

    if (selected instanceof NodeList && Array.from(selected).length > 1) return selected;

    return selected[0];
}
