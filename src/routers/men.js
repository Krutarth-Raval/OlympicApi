const express = require("express");
const router = new express.Router();

const MensRanking = require("../models/mens")

// we will handle post req
router.post("/mens", async (req, res) => {
  try {
    const result = await MensRanking.insertMany(req.body);  // No 'new', no .save()
    console.log(req.body);
    res.status(201).send(result);
  } catch (e) {
    res.status(400).send(e);
  }
});


// we will handle get req
router.get("/mens", async (req, res) => {
  try {
 const getMens = await MensRanking.find({}).sort({"ranking" : 1});
    res.send(getMens);  // send back the saved data
  } catch (e) {
    res.status(400).send(e);  // send error if any
  }
});

// we will handle get req of individual
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
 const getMen = await MensRanking.findById(_id);
    res.send(getMen);  // send back the saved data
  } catch (e) {
    res.status(400).send(e);  // send error if any
  }
});


// we will handle patch req of individual
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
 const getMen = await MensRanking.findByIdAndUpdate(_id,req.body, {
    new:true
 });
    res.send(getMen);  // send back the saved data
  } catch (e) {
    res.status(500).send(e);  // send error if any
  }
});

// we will handle Delete req of individual
router.delete("/mens/:id", async (req, res) => {
  try {
 const getMen = await MensRanking.findByIdAndDelete(req.params.id);
    res.send(getMen);  // send back the saved data
  } catch (e) {
    res.status(500).send(e);  // send error if any
  }
});






module.exports = router;