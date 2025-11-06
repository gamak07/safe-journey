"use client";

import React, { useState } from "react";
import Button from "../../ui/Button";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import AddContact from "./AddContact";

const contacts = [
  {
    name: "Sarah Johnson",
    relationship: "Spouse",
    phone: "+1 (555) 123-4567",
    email: "sarah.johnson@email.com",
    type: "Primary",
  },
  {
    name: "Michael Chen",
    relationship: "Brother",
    phone: "+1 (555) 987-6543",
    email: "michael.chen@email.com",
    type: "Secondary",
  },
];

export default function EmergencyContact() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpenModal = () => {
    setOpenModal((prev) => !prev);
  };
  return (
    <>
      <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Emergency Contacts
          </h2>
          <Button
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium whitespace-nowrap text-white transition-colors hover:bg-blue-700"
            onClick={handleOpenModal}
          >
            <FaPlus />
            <p className="hidden md:block">Add Contact</p>
          </Button>
        </div>
        <div className="space-y-4">
          {contacts.map((contact, idx) => (
            <div
              key={contact.email}
              className="rounded-lg border border-gray-200 p-4"
            >
              <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center space-x-3">
                    <p className="text-lg font-semibold text-gray-900">
                      {contact.name}
                    </p>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${contact.type === "Primary" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
                    >
                      {contact.type}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-4 text-sm text-gray-600 md:grid-cols-3">
                    <div>
                      <span className="font-medium">Relationship:</span>
                      <p>{contact.relationship}</p>
                    </div>
                    <div>
                      <span className="font-medium">Phone:</span>
                      <p>{contact.phone}</p>
                    </div>
                    <div>
                      <span className="font-medium">Email:</span>
                      <p>{contact.email}</p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    className="cursor-pointer p-2 text-gray-400 hover:text-gray-600"
                    title="Edit"
                  >
                    <FaEdit className="text-lg" />
                  </Button>
                  <Button
                    className="cursor-pointer p-2 text-red-400 hover:text-red-600"
                    title="Delete"
                  >
                    <FaTrash className="text-lg" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openModal && <AddContact onClose={() => setOpenModal(false)} />}
    </>
  );
}
