const express = require("express");
const router = express.Router();
const { upload } = require('../utils/fileUpload');
const checkAuth = require('../middleware/check-auth');

const { 
  getSupportTickets,
  createSupportTicket,
  getSupportTicketById,
  deleteSupportTicket,
  updateSupportTicket
   } = require('../controllers/supportTicket.controllers');


router.get("/", checkAuth, getSupportTickets);
router.post("/",checkAuth, createSupportTicket);
router.get("/:ticketId", checkAuth, getSupportTicketById);
router.patch("/:ticketId", checkAuth, updateSupportTicket);
router.delete("/:ticketId", checkAuth, deleteSupportTicket);

module.exports = router;
