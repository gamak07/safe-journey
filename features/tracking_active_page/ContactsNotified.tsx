interface Contact {
  id: string;
  name: string;
  initial: string; // The letter for the fallback
  description: string;
  avatarBgClass: string; // Tailwind class for the avatar background
  avatarTextClass: string; // Tailwind class for the avatar text
}

const contactsData: Contact[] = [
  {
    id: "contact-1",
    name: "Mom",
    initial: "M",
    description: "Emergency Contact",
    avatarBgClass: "bg-blue-100",
    avatarTextClass: "text-blue-600",
  },
  {
    id: "contact-2",
    name: "Sarah",
    initial: "S",
    description: "Friend",
    avatarBgClass: "bg-purple-100",
    avatarTextClass: "text-purple-600",
  },
];

export default function ContactsNotified() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 font-semibold text-gray-900">Contacts Notified</h3>
      <div className="space-y-3">
        {contactsData.map((contact) => (
          <div className="flex items-center space-x-3" key={contact.id}>
            <div className={`flex h-8 w-8 items-center justify-center rounded-full ${contact.avatarBgClass}`}>
              <span className={`text-sm font-semibold ${contact.avatarTextClass}`}>{contact.initial}</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{contact.name}</p>
              <p className="text-xs text-gray-600">{contact.description}</p>
            </div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
