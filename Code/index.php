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
                <div class="col-8">
                    <h2>1. Column</h1>
                    <canvas id="Canvas"></canvas>
                    <div class="row">
                        <div class="col">
                            <input class="btn btn-success" type="text" value="Upload image">
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
    </body>
</html>