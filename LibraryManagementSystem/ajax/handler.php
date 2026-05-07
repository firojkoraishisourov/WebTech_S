<?php

require_once "../controller/bookController.php";

if(isset($_POST['action']))
{
    $action = $_POST['action'];

    if($action == "add")
    {
        insertBook();
    }

    else if($action == "fetch")
    {
        showBooks();
    }

    else if($action == "search_sort")
    {
        searchSortBooks();
    }

    else if($action == "delete")
    {
        removeBook();
    }

    else if($action == "single")
    {
        singleBook();
    }

    else if($action == "update")
    {
        editBookData();
    }
}

?>