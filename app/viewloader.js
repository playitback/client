define('viewloader', [], function() {

    var stack = [];

    this.resetStack = function() {
        var view;
        while (view = stack.pop()) {
            view.remove();
        }
    };

    this.setRootView = function(view) {
        this.resetStack();

        this.pushView(view);
    };

    this.pushView = function(view) {
        // Check we have a valid view reference
        if (typeof view != 'function') {
            throw 'Invalid view';
        }

        // Remove current visible view
        this.visibleView().remove();

        // Instantiate the view and push to back of stack
        var viewInstance = new view;
        stack.push(viewInstance);

        // Render the new view
        viewInstance.render();
    };

    this.popView = function() {
        // Remove the current visible view
        stack.pop().remove();
        // Render the next one in the stack
        this.visibleView().render();
    };

    this.visibleView = function() {
        return stack[stack.length];
    };

    return this;

});