/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { motion } from "framer-motion";

const interests = [
  "Artificial Intelligence and Machine Learning",
  "Web Development",
  "Human Computer Interaction",
];

const books = [
  {
    title: "The Coming Wave",
    author: "Mustafa Suleyman",
    image: "/book-foreground.png", // Add this image to the public folder
    link: "https://www.amazon.ca/Coming-Wave-instant-bestseller-ultimate/dp/1529923832/ref=tmm_pap_swatch_0?_encoding=UTF8&sr="
  },
  {
    title: "The Righteous Mind",
    author: "Jonathan Haidt",
    image: "/righteousmind.jpg", // Add this image to the public folder
    link: "https://www.amazon.ca/Righteous-Mind-Divided-Politics-Religion/dp/0307455777/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.qCIi5JFiTG6dqN63QALNoQJ5OK1Whf5t0u5NZxLh4CpcZvFVfkE0hqnvGndmoL16E0LecXcZzpR8VvBpTPHjpb75v3dCtg9DqWsS9GeJQDHJSaqyVSWqbFzoCSemHbTNmdGp61wGX54mGjsomZV5zTxqqY-D2BsDMB57v1Quk6CvK2o_7xOeL10AJK8dCh1ULUe2FJzEekfuncXcN0WbLq3Vy3P3gPbaRwNi4t8TsSs.NLccrw88s6EJR80RRJBotEOFz0APypTzAmjf5DKXnHY&qid=1738788749&sr=1-1"
  },
  {
    title: "Thinking Fast and Slow",
    author: "Daniel Kahneman",
    image: "/thinkingfast.jpg", // Add this image to the public folder
    link: "https://www.amazon.ca/Thinking-Fast-Slow-Daniel-Kahneman/dp/0385676530/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.hKQyhBFEyMX5KqsXg2xecRBvQu-HdsjJ003-f7wF5XyyWnMIMmx6eftrFWHE3KGalNwpq1jxJbXR56xJKxjtSaG2lwCGZZ3fk2Xlf7uQzZsxJVOdsMnTxIi9s-6jTcQpdpw3Ko9b7ldvOUWbeqrVO7sa7GY9BvqTtBk5lST8TRsUABrIbbh3-Vcex15PwEdDuLidEPSqMOV7ekULaa3n_J662ncpQoP8PlHXAB17uJU.rgIjAJ7moTIQteqZeCUP2C5IHRMt6_zGLRa7r3N4zQY&qid=1738788775&sr=1-1"
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-blue-100 text-text p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Picture */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="w-48 h-48 relative"
          >
            <Image
              src="/profile.png"
              alt="Uzair Salim"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-lg"
            />
          </motion.div>

          {/* About Me Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="flex-1"
          >
            <p className="text-lg mb-6 text-text/80">
              I build human-centered AI products for healthcare and education—bridging clinical teams, intelligent systems, and thoughtful design.
            </p>
          </motion.div>
        </div>

        {/* Interests Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-secondary mb-4">Interests</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <p className="text-lg font-medium">{interest}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Book Recommendations Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-secondary mb-4">Favourite Books</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <motion.a
                key={index}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-full h-48 relative mb-4">
                  <Image
                    src={book.image}
                    alt={book.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h4 className="text-xl font-bold text-primary">{book.title}</h4>
                <p className="text-gray-600">by {book.author}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}