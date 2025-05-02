import { Link } from 'react-router';

const Features = [
  {
    icon: '👨‍💼',
    title: 'Track Applications',
    description:
      'Log every job application you send out and manage them from one dashboard.',
  },
  {
    icon: '📅',
    title: 'Set Deadlines',
    description:
      'Keep tabs on interview dates, follow-ups, and application deadlines.',
  },
  {
    icon: '📝',
    title: 'Add Notes',
    description:
      'Attach notes, contacts, and helpful links to every application.',
  },
  {
    icon: '📊',
    title: 'Stay Organized',
    description:
      'View your application progress and statuses in a clean, simple layout.',
  },
];

const Landing = () => {
  return (
    <div className='flex min-h-screen flex-col bg-neutral-900 text-white'>
      <div className='container mx-auto flex flex-1 flex-col'>
      <main className='mt-16 flex flex-1 flex-col items-center justify-center px-4 text-center'>
        <h2 className='mb-6 text-4xl font-bold md:text-5xl'>
          Track Your Job Applications Effortlessly
        </h2>
        <p className='mb-8 max-w-xl text-gray-400'>
          Stay organized and never miss an opportunity. Track applications, set
          deadlines, and manage job notes all in one place.
        </p>
        <Link
          to='/dashboard'
          className='mb-16 rounded-lg bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-600'
        >
          Get Started
        </Link>

        {/* Features Section */}
        <section className='grid w-full max-w-5xl gap-8 md:grid-cols-4'>
          {Features.map((feature) => (
            <div
              key={feature.title}
              className='rounded-xl bg-neutral-800 p-6 shadow transition hover:shadow-lg'
            >
              <h3 className='mb-2 text-xl font-semibold'>{feature.icon}</h3>
              <h3 className='mb-2 text-xl font-semibold'>{feature.title}</h3>
              <p className='text-gray-400'>{feature.description}</p>
            </div>
          ))}
        </section>
      </main>
      </div>
    </div>
  );
};

export default Landing;
