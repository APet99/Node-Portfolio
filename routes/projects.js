const express = require('express');
const router = express.Router();
const headerPartial = '../partials/projectheader';


/* GET project description pages. */
router.get('/ZoomWebexAutoJoiner', function (req, res, next) {
    res.render('projects/autojoiner', { title: 'Zoom/WebEx Auto Joiner', header: headerPartial, icon: '../images/headshot_clear.png' });
});

router.get('/IdealClassroom', function (req, res, next) {
    res.render('projects/idealclassroom', { title: 'Ideal Classroom', header: headerPartial, icon: '../images/headshot_clear.png' });
});

router.get('/OneDriveAutoBackup', function (req, res, next) {
    res.render('projects/onedrivebackup', { title: 'OneDrive Auto Backup', header: headerPartial, icon: '../images/headshot_clear.png' });
});

router.get('/NoSymptoms', function (req, res, next) {
    res.render('projects/nosymptoms', { title: 'No Symptoms', header: headerPartial, icon: '../images/headshot_clear.png' });
});

router.get('/GameClash', function (req, res, next) {
    res.render('projects/gameclash', { title: 'Game Clash', header: headerPartial, icon: '../images/headshot_clear.png' });
});

router.get('/SearchEngine', function (req, res, next) {
    res.render('projects/searchengine', { title: 'Search Engine', header: headerPartial, icon: '../images/headshot_clear.png' });
});

router.get('/VehicleManagement', function (req, res, next) {
    res.render('projects/vehiclemanagementapi', { title: 'Vehicle Management API', header: headerPartial, icon: '../images/headshot_clear.png' });
});

router.get('/FlightManagement', function (req, res, next) {
    res.render('projects/flightdatabase', { title: 'Flight Management Database', header: headerPartial, icon: '../images/headshot_clear.png' });
});

module.exports = router;
