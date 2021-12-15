<?php
?>

<html>
    <head>
        <title>Pixelartgenerator</title>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        
        <link rel="stylesheet" href="Style/style.css">
    </head>

    <body>
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
                                    <li><a class="dropdown-item" href="#">via URL</a></li>
                                    <li><a class="dropdown-item" href="#">via filesystem</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col">
                            <input class="btn btn-primary" type="text" value="Download image">
                        </div>
                        <div class="col">
                            <input class=" btn btn-danger" type="Reset" value="Reset Generator">
                        </div>
                    </div>
                </div>

                <div class="col">
                    <h2>2. Column</h1>
                </div>
            </div>    
        </div>
        <script src="Scripts/script.js" type="module"></script>
        <script src="Scripts/utilities.js" type="module"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
</html>