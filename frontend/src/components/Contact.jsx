import React from "react";

const sendEmail = async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    message: e.target.message.value,
  };

  try {
    const res = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("✅ Το μήνυμα στάλθηκε επιτυχώς!");
      e.target.reset();
    } else {
      alert("❌ Κάτι πήγε στραβά...");
    }
  } catch (error) {
    console.error(error);
    alert("❌ Δεν έγινε σύνδεση με τον server.");
  }
};


const Contact = () => {
  return (
    <section
      id="contact"
      className="py-[var(--html-spacing)] flex flex-col items-center"
    >
      <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-xl lg:text-4xl font-bold text-white mb-12 tracking-wider text-center md:text-start drop-shadow-2xl">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent inline-block">
            &lt; CONTACT /&gt;
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 mt-2 mx-auto"></div>
          </span>
        </h2>

        <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
          <form onSubmit={sendEmail} className="bg-white/5 backdrop-blur-md border border-purple-400/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500">
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-white font-semibold text-base sm:text-lg"
                >
                  Name <span className="text-pink-400">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-purple-400/30 rounded-lg sm:rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                  placeholder="Enter Your Name"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-white font-semibold text-base sm:text-lg"
                >
                  Email <span className="text-pink-400">*</span>
                </label>
                <input
                  type="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-purple-400/30 rounded-lg sm:rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                  placeholder="Enter Your Email"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-white font-semibold text-base sm:text-lg"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-purple-400/30 rounded-lg sm:rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                  placeholder="Enter Your Number"
                  name="phone"
                  id="phone"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-white font-semibold text-base sm:text-lg"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-purple-400/30 rounded-lg sm:rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 resize-none"
                  id="message"
                  rows="4"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="group relative w-full px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600/80 to-pink-500/80 border-2 border-purple-400/60 rounded-xl cursor-pointer transition-all duration-300 ease-out backdrop-blur-md hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/80 to-purple-600/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
