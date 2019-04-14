function editButton(url, text='Edit') {
    return "<button class='btn btn-success edit-button btn-sm' type='button' url='" + url + "'>" + text + "</button>";
}

function deleteButton(url, text='Delete') {
    return "<button class='btn btn-danger delete-button btn-sm' type='button' url='" + url + "'>" + text + "</button>";
}

function renderLink(text, url) {
    if (text === '' || url === '') {
        return text;
    }

    return '<a href="' + url + '">' + text + '</a>';
}

function renderEditable(text, options) {
    /* Wrap the text in an 'editable' link 
     * (using bootstrap-editable library)
     *
     * Can pass the following parameters in 'options':
     * _type     - parameter for data-type (default = 'text')
     * _pk       - parameter for data-pk (required)
     * _title    - 
     * _class    - html class (default = 'editable-item')
     * _id       - id
     */

    // Default values (if not supplied)
    var _type  = options._type || 'text';
    var _class = options._class || 'editable-item';

    var html = "<a href='#' class='" + _class + "'";

    // Add id parameter if provided
    if (options._id) {
        html = html + " id='" + options._id + "'";
    }

    html = html + " data-type='" + _type + "'";
    html = html + " data-pk='" + options._pk + "'";

    if (options._title) {
        html = html + " data-title='" + options._title + "'";
    }

    html = html + ">" + text + "</a>";

    return html;
}

