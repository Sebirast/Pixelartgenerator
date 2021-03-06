<?php
?>

<html>
    <head>
        <title>Pixelartgenerator</title>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        
        <link rel="stylesheet" href="Style/style.css">
    </head>

    <body>
        <div>
            <div class="container">
                <h1>Pixelartgenerator</h1>
                <div class="row">
                    <div id="col8" class="col-8">
                        <h2>1. Column</h1>
                        <canvas id="Canvas"></canvas>
                        <div class="row">
                            <div class="col">
                                <div class="input-group mb-3">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Upload Image</button>
                                    <ul class="dropdown-menu">
                                        <input id="fileInputButton" class="fileInputButton" type="file">
                                        <li><a id="viaUrlButton" class="dropdown-item" href="#" data-toggle="modal" data-target="#urlWindow">via URL</a></li>
                                        <li><a id="viaFileSystemButton" class="dropdown-item" href="#">via Filesystem</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col">
                                <input  class="btn btn-primary" type="text" value="Download image">
                            </div>
                            <div class="col">
                                <input id="resetButton" class="btn btn-danger" type="Reset" value="Reset Generator">
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <h2>2. Column</h1>
                    </div>

                </div>    
            </div>
        </div>

        <div>
            <div class="modal fade" id="urlWindow" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Please enter your Url here</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                            <div class="input-group mb3">
                                <span class="input-group-text" >URL:</span>
                                <input class="form-control" type="text" name="zahl3" id="getUrl" required>
                            </div>
                    </div>
                    <div class="modal-footer">
                        <button id="submitUrl" type="button" class="btn btn-primary" data-dismiss="modal">Submit</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <script src="Scripts/script.js" type="module"></script>
        <script src="Scripts/utilities.js" type="module"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

        <!-- imports for modals (it didn't work without them and I don't know why xD) -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>        
    </body>
</html>