const multer = require("multer");
const sharp = require("sharp");

// store image in memory
const multerStorage = multer.memoryStorage();

// only able to upload image
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb((console.log("not an image!"), 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadImages = upload.fields([
  { name: "imageCover", maxCount: 1 },
  { name: "images", maxCount: 2 },
]);

//  process images
// exports.customImages = async (req, res, next) => {
//   console.log(req.files);
//   next();
// };

exports.customImages = async (req, res, next) => {
  console.log(req.files);
  //   try {
  //     if (!req.files.imageCover || !req.files.images);

  //     //   1- Cover image
  //     const imgCoverFileName = `auction-${
  //       req.params.id
  //     }-${Date.now()}-cover.jpeg`;
  //     await sharp(req.files.imageCover[0].buffer)
  //       .resize(2000, 1333)
  //       .toFormat("jpeg")
  //       .jpeg({ quality: 90 })
  //       .toFile(`public/img /${imgCoverFileName}`);

  next();
};
//   } catch (err) {
//     console.log(err);
//     res.status(403).json({
//       status: false,
//       msg: "something went wrong",
//     });
//   }
// };

// const path = require("path");
// const multer = require("multer");

// const multerstorage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     let ext = path.extname(file.originalname);
//     cb(null, Date.now() + ext);
//   },
// });

// const multerFilter = (req, file, callback) => {
//   if (file.mimetype == "image/png" || file.mimetype == "image/jpeg") {
//     callback(null, true);
//     if (req.file) {
//       Auction.imageCover = req.file.path;
//     }
//   } else {
//     console.log("only jpeg and png files are supported");
//   }
// };

// const upload = multer({
//   storage: multerstorage,
//   fileFilter: multerFilter,
// });

// module.exports = upload;
