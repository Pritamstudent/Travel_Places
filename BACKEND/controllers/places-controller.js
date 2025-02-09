const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const getCoordsForAddress = require('../util/location');
const Place = require('../models/place');



const getPlaceById = async (req, res, next) => {
  const placeId = req.params.pid; // { pid: 'p1' }

  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError('Something went wrong, could not find a place', 500);
    return next(error);
  }
  if (!place) {
    const error = new HttpError('Could not find a place for the provided id.', 404);
    return next(error);
  }
  res.json({ place: place.toObject({ getters: true }) }); // => { place } => { place: place }
};

// function getPlaceById() { ... }
// const getPlaceById = function() { ... }

const getPlacesByUserId = async (req, res, next) => {
  const userId = req.params.uid;
  let places;
  try {
     places = await Place.find({ creator: userId });

  } catch (err) {
    const error = new HttpError('Fetching places failed. Please try again later !', 500);
    return next(error);
  }
  if(!places || places.length === 0){
    return next(new HttpError('Could not find places for the provided userId.', 404));
  };
  res.json({ places: places.map(place => place.toObject({getters: true})) });
};

const createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(new HttpError('Invalid inputs passed, please check your data.', 422));
  }

  const { title, description, address, creator } = req.body;

  let coordinates;
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (error) {
    console.log(error);
    return next(error);
  }

  const createdPlace = new Place({
    title,
    description,
    address,
    location: coordinates,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDK3wMJrCmsKBFFCzIe4mo6t2Imv8OQNxUnA&usqp=CAU',
    creator
  });

  try {
    await createdPlace.save();
  } catch (err) {
    const error = new HttpError('Creating place failed. Please try again', 500);
    return next(error);
  }

  res.status(201).json({ place: createdPlace });
};

const updatePlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
   return next(new HttpError('Invalid inputs passed, please check your data.', 422));
  }

  const { title, description } = req.body;
  const placeId = req.params.pid;

  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update place', 500
    );
    return next(error);
  }


  place.title = title;
  place.description = description;

  try {
    await place.save();
  } catch (err) {
    const error = new HttpError('Something went wrong, could not update place.', 500);
  }


  res.status(200).json({ place: place.toObject({ getters: true }) });
};

const deletePlace = async (req, res, next) => {
  const placeId = req.params.pid;
  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong. Could not delete place', 500
    );
    return next(error);
  }

  try {
    await place.deleteOne();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong. Could not dlete place', 500
    );
    return next(error);
  }
  res.status(200).json({ message: 'Deleted place.' });
};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
