let contactBook = {
  contacts: [
    { name: "John Doe", phone: "+123456789", email: "john@example.com" },
    { name: "Jane Smith", phone: "+987654321", email: "jane@example.com" },
  ],

  findByName: function (name) {
    return this.contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase
    );
  },

  addContact: function (name, phone, email) {
    return this.contacts.push({ name: name, phone: phone, email: email });
  },
};

console.log(contactBook.findByName("John Doe"));

contactBook.addContact("Alice Johnson", "+1122334455", "alice@example.com");

console.log(contactBook.contacts);
