# Dissertation
The implementation for my dissertation "Predicting the Weight of a Human from a Photo".

# How to run

## Pre-requisites:
- Have Node.js installed.
- Have Visual Studio Code installed.
- Have Google Chrome installed.

## For Windows.
### new
1) Extract the folder.
2) Open the extracted folder in Visual Studio Code.
3) Open the built-in Terminal and run "cd Implementation" and then "cd new".
4) In the built-in Terminal run "npm install", then run "node app.js".
5) In Google Chrome navigate to "localhost:3000".

The above is the data collection method, it goes through the images in the "archive" folder and estimates the body pose & segmentation and then the anthropometric features. After this is done for each photo, the anthropometric feature ratios along with the weight of the subject are added to a data array as an object, and at the end a JSON file is downloaded onto the computer using the neuralNetwork library.
