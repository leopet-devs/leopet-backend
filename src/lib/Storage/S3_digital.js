const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const { DIGITAL_ENDPOINT, DIGITAL_BUCKET } = process.env;

const spacesEndpoint = new aws.Endpoint(DIGITAL_ENDPOINT);

const s3 = new aws.S3({
  endpoint: spacesEndpoint,
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: DIGITAL_BUCKET,
    acl: 'public-read',
    metadata: (req, file, cb) => {
      cb(null, {
        fieldName: file.fieldname,
      });
    },
    key: (request, file, cb) => {
      cb(null, file.originalname);
    },
  }),
}).single('upload');

module.exports = { upload, s3 };
