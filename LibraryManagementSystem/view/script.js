$(document).ready(function () {

    fetchBooks();

    // LIVE SEARCH
    $('#search').keyup(function () {
        searchSort();
    });

    // SORT
    $('#sort').change(function () {
        searchSort();
    });

    // ADD OR UPDATE
    $('#bookForm').submit(function (e) {

        e.preventDefault();

        let id = $('#book_id').val();
        let title = $('#title').val();
        let author = $('#author').val();
        let category = $('#category').val();
        let status = $('#status').val();

        let action = "add";

        if(id != "")
        {
            action = "update";
        }

        $.ajax({

            url: "../ajax/handler.php",

            type: "POST",

            data: {
                id: id,
                title: title,
                author: author,
                category: category,
                status: status,
                action: action
            },

            success: function(response)
            {
                alert(response);

                $('#bookForm')[0].reset();

                $('#book_id').val("");

                $('#saveBtn').text("Add Book");

                fetchBooks();
            }

        });

    });

});

// FETCH ALL BOOKS
function fetchBooks()
{
    $.ajax({

        url: "../ajax/handler.php",

        type: "POST",

        data: {
            action: "fetch"
        },

        success: function(data)
        {
            $('#bookData').html(data);
        }

    });
}

// SEARCH + SORT
function searchSort()
{
    let search = $('#search').val();
    let sort = $('#sort').val();

    $.ajax({

        url: "../ajax/handler.php",

        type: "POST",

        data: {
            search: search,
            sort: sort,
            action: "search_sort"
        },

        success: function(data)
        {
            $('#bookData').html(data);
        }

    });
}

// DELETE
function deleteBook(id)
{
    if(confirm("Are you sure?"))
    {
        $.ajax({

            url: "../ajax/handler.php",

            type: "POST",

            data: {
                id: id,
                action: "delete"
            },

            success: function(response)
            {
                alert(response);

                fetchBooks();
            }

        });
    }
}

// EDIT
function editBook(id)
{
    $.ajax({

        url: "../ajax/handler.php",

        type: "POST",

        data: {
            id: id,
            action: "single"
        },

        success: function(data)
        {
            let book = JSON.parse(data);

            $('#book_id').val(book.id);
            $('#title').val(book.title);
            $('#author').val(book.author);
            $('#category').val(book.category);
            $('#status').val(book.status);

            $('#saveBtn').text("Update Book");
        }

    });
}