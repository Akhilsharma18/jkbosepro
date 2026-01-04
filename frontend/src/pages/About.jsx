import React from 'react';

const About = () => {
  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold text-primary border-b-2 border-gray-300 pb-2 mb-6">About JKBOSE</h2>

      <div className="space-y-6 text-justify text-gray-800">
        <section>
          <h3 className="text-lg font-bold text-secondary mb-2">Introduction</h3>
          <p>
            The Jammu and Kashmir State Board of School Education (JKBOSE) is the main board of school education in the Indian Union Territory of Jammu and Kashmir. The board is an autonomous body under the administration of the government of Jammu and Kashmir. The board has more than 10,609 schools across the state affiliated to it and employs around 22,300 teachers.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold text-secondary mb-2">History</h3>
          <p>
            The Board was established in the year 1975 under the Jammu and Kashmir State Board of School Education Act, 1975 to advise the Government on matters of policy relating to school education and to perform other duties laid down in the Act.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold text-secondary mb-2">Roles & Responsibilities</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Conduct public examinations of secondary and higher secondary classes.</li>
            <li>Prepare and publish results of examinations.</li>
            <li>Grant diplomas and certificates.</li>
            <li>Prescribe courses of instruction, scheme of studies, and syllabi.</li>
            <li>Institute and award scholarships, medals and prizes.</li>
          </ul>
        </section>

        <section className="bg-blue-50 p-4 border border-blue-200">
          <h3 className="text-lg font-bold text-primary mb-2 text-center">Board Officials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <div className="p-2 border bg-white">
              <h4 className="font-bold">Chairperson</h4>
              <p>Prof. Parikshat Singh Manhas</p>
            </div>
            <div className="p-2 border bg-white">
              <h4 className="font-bold">Secretary</h4>
              <p>Dr. Example Name</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
