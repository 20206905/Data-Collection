//----------------------------------------------------------------------
// Initialisation.

// Create variable names to hold images.
for (let i = 1; i < 384; i++) {
  eval(`let img${i};`);
}

let i = 0;
let poseNet;
let bodyPix;
let data = [];

// Create an array of the file names.
let fileNames = [
  "410-090_Del_L1.jpg",
  "410-100_Cece_L1.jpg",
  "410-110_Kaye_L1.jpg",
  "410-120_Firie_L1.jpg",
  "410-160_Sarah_L1.jpg",
  "410-170_Tiffany_L1.jpg",
  "410-190_TFergusu_L1.jpg",
  "410-090_Katherine_L1.jpg",
  "411-100_Beth_L1.jpg",
  "411-110_Christina_L1.jpg",
  "411-120_saidy_L1.jpg",
  "411-130_Joanna_L1.jpg",
  "411-150_Elana_L1.jpg",
  "411-170_Cristen_L1.jpg",
  "411-210_candice_L1.jpg",
  "411-230_Shanta_L1.jpg",
  "500-090_Amy_L1.jpg",
  "500-100_Briana_L1.jpg",
  "500-110_Amanda_L1.jpg",
  "500-120_Emily_L1.jpg",
  "500-130_Alina_L1.jpg",
  "500-140_Alina_L1.jpg",
  "500-150_debra_L1.jpg",
  "500-160_Alina_L1.jpg",
  "500-170_Maree_L1.jpg",
  "500-180_Charlie_L1.jpg",
  "500-220_Natalie_L1.jpg",
  "500-240_Ruth_L1.jpg",
  "500-240_sarah_L1.jpg",
  "501-104_evelyn_L1.jpg",
  "501-110_Jessica_L1.jpg",
  "501-120_Koyasha_L1.jpg",
  "501-130_Premee_L1.jpg",
  "501-140_Alysha_L1.jpg",
  "501-150_Christina_L1.jpg",
  "501-160_Melissa_L1.jpg",
  "501-170_Vonnie_L1.jpg",
  "501-180_Jennifer_L1.jpg",
  "501-190_sheila_L1.jpg",
  "501-210_Kim_L1.jpg",
  "501-220_Jessica_L1.jpg",
  "501-230_Laurie_L1.jpg",
  "501-090_Mariel_L1.jpg",
  "502-100_Elise_L1.jpg",
  "502-120_Heather_L1.jpg",
  "502-140_Jessica_L1.jpg",
  "502-150_Indiana_L1.jpg",
  "502-160_Kirin_L1.jpg",
  "502-170_Dak_L1.jpg",
  "502-180_Eryn_L1.jpg",
  "502-190_Kate_L1.jpg",
  "502-200_Kelly_L1.jpg",
  "502-210_Bleu_L1.jpg",
  "502-220_Noel_L1.jpg",
  "502-230_Penny_L1.jpg",
  "502-250_Jean_L1.jpg",
  "502-290_Jamie_L1.jpg",
  "502-330_Zena_L1.jpg",
  "502-090_Lindsey_L1.jpg",
  "503-090_Caitlin_L1.jpg",
  "503-100_Emily_L1.jpg",
  "503-110_laci_L1.jpg",
  "503-120_Trillian_L1.jpg",
  "503-130_Katie_L1.jpg",
  "503-140_Thomas_L1.jpg",
  "503-160_cheryl_L1.jpg",
  "503-170_Holly_L1.jpg",
  "503-190_Miriam_L1.jpg",
  "503-200_Ashley_L1.jpg",
  "503-210_Brandiy_L1.jpg",
  "503-220_Tricia_L1.jpg",
  "503-230_Eavonka_L1.jpg",
  "503-240_Jennifer_L1.jpg",
  "503-270_Natasha_L1.jpg",
  "503-300_Jean_L1.jpg",
  "503-370_Lynn_L1.jpg",
  "504-100_Marissa_L1.jpg",
  "504-120_Mindy_L1.jpg",
  "504-130_Aimee_L1.jpg",
  "504-150_Bethan_L1.jpg",
  "504-170_Erica_L1.jpg",
  "504-180_Nela_L1.jpg",
  "504-185_rachel_L1.jpg",
  "504-200_Diedre_L1.jpg",
  "504-230_Mary_L1.jpg",
  "504-250_Beth_L1.jpg",
  "504-260_Michelle_L1.jpg",
  "504-320_Beth_L1.jpg",
  "505-090_samantha_L1.jpg",
  "505-100_Kati_L1.jpg",
  "505-110_Marnie_L1.jpg",
  "505-120_Christina_L1.jpg",
  "505-130_Susan_l.jpg",
  "505-140_Julie_L1.jpg",
  "505-160_Andrew_L1.jpg",
  "505-170_Lisa_L.jpg",
  "505-180_Melissa_L1.jpg",
  "505-190_JenRocks_L1.jpg",
  "505-200_Emanuelle_L1.jpg",
  "505-210_Tania_L1.jpg",
  "505-220_Ciara_L1.jpg",
  "505-230_melanie_L1.jpg",
  "505-240_Stef_L1.jpg",
  "505-250_Angela_L1.jpg",
  "505-270_Veronique_L1.jpg",
  "505-300_Catherine_L1.jpg",
  "506-090_eve_L1.jpg",
  "506-100_Jill_L1.jpg",
  "506-110_Margaret_L1.jpg",
  "506-120_CLB_L1.jpg",
  "506-130_Furry_L1.jpg",
  "506-140_Tara_L1.jpg",
  "506-150_Anthony_L1.jpg",
  "506-160_Caralyn_L1.jpg",
  "506-170_Sean_L1.jpg",
  "506-180_Leah_L2.jpg",
  "506-190_Mike_L1.jpg",
  "506-200_kate_L1.jpg",
  "506-215_Paul_L1.jpg",
  "506-220_Renee_L1.jpg",
  "506-240_Sarah_L1.jpg",
  "506-250_Maggie_L1.jpg",
  "506-260_Amanda_L1.jpg",
  "506-270_Nee_L1.jpg",
  "506-280_Kelly_L1.jpg",
  "506-300_keri_L1.jpg",
  "506-330_Jacynta_L1.jpg",
  "507-090_Dragonfly_L1.jpg",
  "507-100_Morgan_L1.jpg",
  "507-110_Lisa_L1.jpg",
  "507-120_Tracey_L1.jpg",
  "507-160_Chris_L2.jpg",
  "507-170_Jackie_L1.jpg",
  "507-170_Scott_L1.jpg",
  "507-180_Caralyn_L1.jpg",
  "507-190_Eddie_L1.jpg",
  "507-200_Lisa_L1.jpg",
  "507-210_Sarah_L1.jpg",
  "507-220_Jillo_L1.jpg",
  "507-230_KarenP_L1.jpg",
  "507-240_Zhenya_L1.jpg",
  "507-250_Jennifer_L1.jpg",
  "507-260_Beth_L1.jpg",
  "507-270_Barb_L1.jpg",
  "507-280_Dasha_L1.jpg",
  "507-310_Jacinta_L1.jpg",
  "507-320_Brandy_L1.jpg",
  "507-370_Traci_L1.jpg",
  "507-380_Lisa_L1.jpg",
  "508-110_Lindsay_L1.jpg",
  "508-120_Tanya_L1.jpg",
  "508-140_Spring_L1.jpg",
  "508-150_Stacy_L1.jpg",
  "508-160_Jimmy_L1.jpg",
  "508-180_Dave_L1.jpg",
  "508-190_Sam_L1.jpg",
  "508-200_Julie_L1.jpg",
  "508-210_Carla_L1.jpg",
  "508-230_Christina_L1.jpg",
  "508-240_Alexandra_L1.jpg",
  "508-250_Amarachi_L1.jpg",
  "508-260_raine_L1.jpg",
  "508-270_AJ_L1.jpg",
  "508-280_Elayne_L1.jpg",
  "508-290_Sabrina_L1.jpg",
  "508-300_Aimee_L1.jpg",
  "508-330_Sabrina_L1.jpg",
  "508-350_Matt_L1.jpg",
  "508-390_Mariellen_L1.jpg",
  "509-100_Danielle_L1.jpg",
  "509-110_Helman_L1.jpg",
  "509-120_Lucas_L1.jpg",
  "509-130_Boris_L1.jpg",
  "509-140_Elise_L1.jpg",
  "509-150_Allan_L1.jpg",
  "509-160_Jeremiah_L1.jpg",
  "509-170_Liv_L1.jpg",
  "509-180_Brian_L1.jpg",
  "509-200_Ryan_L1.jpg",
  "509-210_Julie_L1.jpg",
  "509-220_Danielle_L1.jpg",
  "509-230_Michael_L1.jpg",
  "509-240_Riad_L1.jpg",
  "509-250_iva_l1.jpg",
  "509-260_Appoline_L1.jpg",
  "509-270_Danielle_L1.jpg",
  "509-300_Sonja_L1.jpg",
  "509-310_Angela_L1.jpg",
  "509-320_Ed_L1.jpg",
  "510-110_lori_L1.jpg",
  "510-120_Devin_L1.jpg",
  "510-130_Les_L1.jpg",
  "510-140_Michelle_L1.jpg",
  "510-150_Matthew_L1.jpg",
  "510-160_Jesse_L1.jpg",
  "510-170_Craig_L1.jpg",
  "510-180_Nick_L1.jpg",
  "510-190_Pete_L1.jpg",
  "510-200_Carol_L1.jpg",
  "510-210_jenifer_L1.jpg",
  "510-220_amy_L1.jpg",
  "510-230_Josh_L1.jpg",
  "510-240_Yolanda_L1.jpg",
  "510-250_Katie_L1.jpg",
  "510-270_Gaige_L1.jpg",
  "510-280_Jamie_L1.jpg",
  "510-300_Sabrina_L1.jpg",
  "511-110_Anna_L1.jpg",
  "511-120_Kurt_L1.jpg",
  "511-130_Nick_L1.jpg",
  "511-140_Jake_L1.jpg",
  "511-150_Garry_L1.jpg",
  "511-160_Stephen_L1.jpg",
  "511-170_Stephen_L1.jpg",
  "511-180_SteveW_L1.jpg",
  "511-190_Cass_L1.jpg",
  "511-200_Amber_L1.jpg",
  "511-210_Jake_L1.jpg",
  "511-220_Martin_L1.jpg",
  "511-230_Doug_L1.jpg",
  "511-240_Tim_L1.jpg",
  "511-250_Bill_L1.jpg",
  "511-260_Tany_L1.jpg",
  "511-270_Meghan_L1.jpg",
  "511-280_Jackie_L1.jpg",
  "511-290_Will_L1.jpg",
  "511-300_Keith_L1.jpg",
  "511-310_Thomas_L1.jpg",
  "511-360_Lara_L1.jpg",
  "511-370_Vennie_L1.jpg",
  "600-120_Eric_L1.jpg",
  "600-130_Ryan3_L2.jpg",
  "600-140_Oliver_L2.jpg",
  "600-150_Gabor_L1.jpg",
  "600-160_Jared_L1.jpg",
  "600-170_Josh_L1.jpg",
  "600-180_Mark_L1.jpg",
  "600-190_brittany_L1.jpg",
  "600-200_Mike_L1.jpg",
  "600-210_Greg_L1.jpg",
  "600-220_Michael_L1.jpg",
  "600-230_Dylan_L1.jpg",
  "600-240_Andrew_L1.jpg",
  "600-260_Marvin_L1.jpg",
  "600-270_Michael_L1.jpg",
  "600-290_Drew_L1.jpg",
  "600-300_Leesa_L1.jpg",
  "600-310_Brian_L1.jpg",
  "600-320_Michael_L1.jpg",
  "600-330_David_L1.jpg",
  "600-340_Irfon_L1.jpg",
  "600-350_David_L1.jpg",
  "600-390_David_L1.jpg",
  "601-130_Rebecca_L1.jpg",
  "601-140_T_L1.jpg",
  "601-160_Will_L1.jpg",
  "601-170_Rob_L1.jpg",
  "601-180_Clint_L1.jpg",
  "601-190_Gilbert_L1.jpg",
  "601-200_MikeDevine_L1.jpg",
  "601-210_cecil_L1.jpg",
  "601-220_Chad_L1.jpg",
  "601-236_Arnie_L1.jpg",
  "601-240_Cauley_L1.jpg",
  "601-250_Luke_L1.jpg",
  "601-260_Eddie_L1.jpg",
  "601-270_Jaime_L1.jpg",
  "601-280_Neil_L1.jpg",
  "601-300_Dan_L1.jpg",
  "601-310_Jaime_L1.jpg",
  "601-320_chuck_L1.jpg",
  "601-380_Cassandra_L1.jpg",
  "602-130_Tim_L1.jpg",
  "602-140_Josh_L1.jpg",
  "602-150_Randy_L1.jpg",
  "602-160_Benjamin_L1.jpg",
  "602-160_kieth_L1.jpg",
  "602-180_Erik_L1.jpg",
  "602-200_Cory_L1.jpg",
  "602-210_Ian_L1.jpg",
  "602-220_Dave_L1.jpg",
  "602-240_Nick_L1.jpg",
  "602-250_Jarold_L1.jpg",
  "602-270_Rich_L1.jpg",
  "602-290_DBarber_L1.jpg",
  "602-480_Pancholin_L1.jpg",
  "603-140_NickSO_L1.jpg",
  "603-150_Mdoucet_L1.jpg",
  "603-160_Ben_L1.jpg",
  "603-170_SuperDave_L1.jpg",
  "603-180_Russ_L1.jpg",
  "603-200_Peter_L1.jpg",
  "603-210_Maxwell_L1.jpg",
  "603-220_Ben_L1.jpg",
  "603-230_Jason_L1.jpg",
  "603-240_Nate_L1.jpg",
  "603-250_William_L1.jpg",
  "603-260_Stuart_L1.jpg",
  "603-310_Xavier_L1.jpg",
  "603-320_John_L1.jpg",
  "603-350_Matt_L1.jpg",
  "604-120_Thomas_L1.jpg",
  "604-140_WJM_L1.jpg",
  "604-155_karsten_L1.jpg",
  "604-170_Jason_L1.jpg",
  "604-180_Matt_L1.jpg",
  "604-190_Mike_L1.jpg",
  "604-200_Jeff_L1.jpg",
  "604-210_Michael_L1.jpg",
  "604-220_Dan_L1.jpg",
  "604-230_Kevin_L1.jpg",
  "604-240_Jeffrey_L1.jpg",
  "604-250_Adam_L1.jpg",
  "604-260_Arjen_L1.jpg",
  "604-270_Eddie_L1.jpg",
  "604-280_Dan_L1.jpg",
  "604-290_Alex_L1.jpg",
  "604-320_Dan_L1.jpg",
  "604-520_Seven_L1.jpg",
  "605-140_Wolf_L1.jpg",
  "605-150_Sam_L1.jpg",
  "605-173_Brock_L1.jpg",
  "605-180_Hartley_L1.jpg",
  "605-200_DW_L1.jpg",
  "605-210_Rick_L1.jpg",
  "605-220_John_L1.jpg",
  "605-230_Jeremy_L1.jpg",
  "605-250_Cody_L1.jpg",
  "605-260_Drew_L1.jpg",
  "605-270_Pete_L1.jpg",
  "605-300_Ben_L1.jpg",
  "606-185_Joshua_L1.jpg",
  "606-210_Kris_L1.jpg",
  "606-220_Cameron_L1.jpg",
  "606-230_John_L1.jpg",
  "606-240_Kenny_L1.jpg",
  "606-250_Dale_L1.jpg",
  "606-260_Cees_L1.jpg",
  "606-290_Jesse_L1.jpg",
  "606-320_Richard_L1.jpg",
  "606-335_SteveT_L1.jpg",
  "606-370_Vance_L1.jpg",
  "607-170_Lincoln_L1.jpg",
  "607-210_Allan_L1.jpg",
  "607-300_Georffrey_L1.jpg",
  "608-180_Dan_L1.jpg",
  "608-240_Chris_L1.jpg",
  "608-260_Michael_L1.jpg",
  "611-490_Xavier_L1.jpg",
];

//--------------------------------------------------------------------
// P5.js functions.

// Preload all the images.
function preload() {
  for (let i = 0; i < fileNames.length; i++) {
    eval(`img${i} = loadImage("archive/" + fileNames[i])`);
  }
}

// Create a canvas consisting of the maximum width and height of an image in the dataset.
// Load the first image onto the canvas.
// Call PoseNet on the first image.
function setup() {
  createCanvas(542, 626);
  image(eval(`img${i}`), 0, 0);

  poseNet = ml5.poseNet(eval(`img${i}`), modelReady);
}

//------------------------------------------------------------------------------------------------
// Image analysis algorithms.

function modelReady() {
  console.log("PoseNet model loaded.");

  poseNet.on("pose", function (poses) {
    if (poses.length > 0) {
      console.log(fileNames[i]);

      // Get the subjects weight from the file name.
      let weight = parseInt(fileNames[i].slice(4, 7));

      console.log(poses[0].pose.keypoints);

      // Call BodyPix on the image.
      bodyPix = ml5.bodyPix(bodyPixModelReady);

      // Defining BodyPix's callback functions.
      function bodyPixModelReady() {
        bodyPix.segment(canvas, gotResults);
      }
      function gotResults(error, result) {
        if (error) {
          console.log(error);
          return;
        }
        segmentation = result;
        console.log(segmentation);

        // Draw the segmentation mask.
        background(0);
        image(segmentation.backgroundMask, 0, 0);

        // Calculate the anthropometric features on the image.
        anthropometricFeatures(poses, segmentation, weight);
      }

      // Wait for two seconds to draw the PoseNet pose. Therefore, BodyPix and PoseNet are in sync.
      setTimeout(function () {
        drawKeypoints(poses);
        drawSkeleton(poses);
      }, 2000);

      // Wait for 4 seconds to load a new image.
      setTimeout(nextImage, 4000);

      // Load a new image and repeat cycle.
      // Or, if finished, create the network.
      function nextImage() {
        i++;
        if (i < fileNames.length) {
          console.log("More images to go.");
          image(eval(`img${i}`), 0, 0);
          poseNet = ml5.poseNet(eval(`img${i}`), modelReady);
        } else {
          console.log(data);
          createNetwork(data);
        }
      }
    }
  });
  console.log(poseNet.singlePose(eval(`img${i}`)));
}

// Function to calculate the anthropometric features.
function anthropometricFeatures(poses, segmentation, weight) {
  // WTR ----------------------------------------------------------
  let yHip;
  let yLeftHip = poses[0].pose.keypoints[11].position.y;
  let yRightHip = poses[0].pose.keypoints[12].position.y;

  // Calculate yHip.
  yHip = (1 / 2) * (yLeftHip + yRightHip);

  let yCentreShoulder;
  let yLeftShoulder = poses[0].pose.keypoints[5].position.y;
  let yRightShoulder = poses[0].pose.keypoints[6].position.y;

  // Calculate yCentreShoulder.
  yCentreShoulder = (1 / 2) * (yLeftShoulder + yRightShoulder);

  let yWaist;
  let yNose = poses[0].pose.keypoints[0].position.y;

  // Calculate yWaist.
  yWaist = (2 / 3) * yHip + (1 / 6) * (yNose + yCentreShoulder);

  let yKnee;
  let yLeftKnee = poses[0].pose.keypoints[13].position.y;
  let yRightKnee = poses[0].pose.keypoints[14].position.y;

  // Calculate yKnee.
  yKnee = (1 / 2) * (yLeftKnee + yRightKnee);

  // Calculate yThigh.
  yThigh = (1 / 2) * (yKnee + yHip);

  let xCentreShoulder;
  let xLeftShoulder = poses[0].pose.keypoints[5].position.x;
  let xRightShoulder = poses[0].pose.keypoints[6].position.x;

  // Calculate xCentreShoulder.
  xCentreShoulder = (1 / 2) * (xLeftShoulder + xRightShoulder);

  console.log("xCentreShoulder = " + round(xCentreShoulder));
  console.log("yWaist = " + round(yWaist));

  // Calculate pCentreWaist.
  let pCentreWaist = round(yWaist) * width - (width - round(xCentreShoulder));
  console.log("pCentreWaist = " + pCentreWaist);
  console.log("width = " + width);

  let counter = pCentreWaist;

  // Calculate xRightWaistBoundary.
  while (segmentation.segmentation.data[counter] === 1) {
    counter--;
  }

  let xRightWaistBoundary = xCentreShoulder - (pCentreWaist - counter);
  console.log("xRightWaistBoundary = " + xRightWaistBoundary);

  counter = pCentreWaist;

  // Calculate xLeftWaistBoundary.
  while (segmentation.segmentation.data[counter] === 1) {
    counter++;
  }

  let xLeftWaistBoundary = xCentreShoulder + (counter - pCentreWaist);
  console.log("xLeftWaistBoundary = " + xLeftWaistBoundary);

  // Calculate dPRWB_PLWB.
  let dPRWB_PLWB = Math.sqrt(
    Math.pow(xLeftWaistBoundary - xRightWaistBoundary, 2) +
      Math.pow(yWaist - yWaist, 2)
  );

  console.log("dPRWB_PLWB = " + dPRWB_PLWB);

  let pCentreThighs = round(yThigh) * width - (width - round(xCentreShoulder));

  console.log("pCentreThighs = " + pCentreThighs);

  counter = pCentreThighs;

  // Calculate xRightThighBoundary.
  while (segmentation.segmentation.data[counter] === 1) {
    counter--;
  }

  let xRightThighBoundary = xCentreShoulder - (pCentreThighs - counter);
  console.log("xRightThighBoundary = " + xRightThighBoundary);

  counter = pCentreThighs;

  // Calculate xLeftThighBoundary.
  while (segmentation.segmentation.data[counter] === 1) {
    counter++;
  }

  let xLeftThighBoundary = xCentreShoulder + (counter - pCentreThighs);
  console.log("xLeftThighBoundary = " + xLeftThighBoundary);

  // Calculate dRTB_LTB.
  let dRTB_LTB =
    (1 / 2) *
    Math.sqrt(
      Math.pow(xLeftThighBoundary - xRightThighBoundary, 2) +
        Math.pow(yThigh - yThigh, 2)
    );
  console.log("dRTB_LTB = " + dRTB_LTB);

  // Calculate waistToThighRatio.
  let WTR = dPRWB_PLWB / dRTB_LTB;

  console.log("WTR = " + WTR);

  // WHpR --------------------------------------------------------------------

  let xLeftHip = poses[0].pose.keypoints[11].position.x;

  // Calculate pLeftHip.
  let pLeftHip = width * round(yLeftHip) - (width - round(xLeftHip));
  console.log("pLeftHip = " + pLeftHip);

  counter = pLeftHip;

  // Calculate xLeftHipBoundary.
  while (segmentation.segmentation.data[counter] === 1) {
    counter++;
  }

  let xLeftHipBoundary = xLeftHip + (counter - pLeftHip);
  console.log("xLeftHipBoundary = " + xLeftHipBoundary);

  let xRightHip = poses[0].pose.keypoints[12].position.x;

  // Calculate pRightHip.
  let pRightHip = width * round(yRightHip) - (width - round(xRightHip));
  console.log("pRightHip = " + pRightHip);

  counter = pRightHip;

  // Calculate xRightHipBoundary.
  while (segmentation.segmentation.data[counter] === 1) {
    counter--;
  }

  let xRightHipBoundary = xRightHip - (pRightHip - counter);
  console.log("xRightHipBoundary = " + xRightHipBoundary);

  // Calculate dRHB_LHB.
  let dRHB_LHB = Math.sqrt(
    Math.pow(xLeftHipBoundary - xRightHipBoundary, 2) +
      Math.pow(yLeftHip - yRightHip, 2)
  );
  console.log("dRHB_LHB = " + dRHB_LHB);

  // Calculate WHpR.
  let WHpR = dPRWB_PLWB / dRHB_LHB;
  console.log("WHpR = " + WHpR);

  // WHdR ----------------------------------------------------

  let xRightEar = poses[0].pose.keypoints[4].position.x;
  let xLeftEar = poses[0].pose.keypoints[3].position.x;
  let yRightEar = poses[0].pose.keypoints[4].position.y;
  let yLeftEar = poses[0].pose.keypoints[3].position.y;

  // Calculate dRE_LE.
  dRE_LE = Math.sqrt(
    Math.pow(xRightEar - xLeftEar, 2) + Math.pow(yRightEar - yLeftEar, 2)
  );
  console.log("dRE_LE = " + dRE_LE);

  // Calculate WHdR.
  let WHdR = dPRWB_PLWB / dRE_LE;
  console.log("WHdR = " + WHdR);

  // HpHdR ---------------------------------------------------------------
  let HpHdR = dRHB_LHB / dRE_LE;
  console.log("HpHdR = " + HpHdR);

  // Area -----------------------------------------------------------------

  // Calculate pRightWaistBoundary.
  let pRightWaistBoundary =
    width * round(yWaist) - (width - round(xRightWaistBoundary));
  console.log("pRightWaistBoundary = " + pRightWaistBoundary);

  counter = pRightWaistBoundary;

  // Calculate pLeftHipBoundary.
  let pLeftHipBoundary =
    width * round(yLeftHip) - (width - round(xLeftHipBoundary));
  console.log("pLeftHipBoundary = " + pLeftHipBoundary);

  let areaPixelTotal = 0;

  while (counter != pLeftHipBoundary) {
    if (segmentation.segmentation.data[counter] === 1) {
      areaPixelTotal++;
    }
    counter++;
  }
  console.log("areaPixelTotal = " + areaPixelTotal);

  // Calculate area.
  let area = areaPixelTotal / ((yHip - yWaist) * 0.5 * (dPRWB_PLWB + dRHB_LHB));
  console.log("area = " + area);

  // Create vector.
  let f = [WTR, WHpR, WHdR, HpHdR, area];
  console.log(f);

  // Create row of data.
  let row = {
    WTR: WTR,
    WHpR: WHpR,
    WHdR: WHdR,
    HpHdR: HpHdR,
    area: area,
    weight: weight,
  };
  console.log(row);
  data.push(row);
}

// PoseNet ellipse drawing.
// fill(255);
// stroke(20);
// strokeWeight(4);
// ellipse(round(keypoint.position.x), round(keypoint.position.y), 8, 8);

// ---------------------------------------------------------------------------------

// PoseNet pose drawing.
function drawKeypoints(poses) {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill(255);
        stroke(20);
        strokeWeight(4);
        ellipse(round(keypoint.position.x), round(keypoint.position.y), 8, 8);
      }
    }
  }
}

function drawSkeleton(poses) {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(255);
      strokeWeight(1);
      line(
        partA.position.x,
        partA.position.y,
        partB.position.x,
        partB.position.y
      );
    }
  }
}

// -----------------------------------------------------------
// Creating the neural network

function createNetwork(data) {
  // Step 2: set your neural network options
  const options = {
    task: "regression",
    debug: true,
  };

  // Step 3: initialize your neural network
  const nn = ml5.neuralNetwork(options);

  // Step 4: add data to the neural network
  data.forEach((item) => {
    const inputs = {
      WTR: item.WTR,
      WHpR: item.WHpR,
      WHdR: item.WHdR,
      HpHdR: item.HpHdR,
      area: item.area,
    };
    const output = {
      weight: item.weight,
    };

    nn.addData(inputs, output);
  });
  nn.saveData("anthropometricFeatures");
}
