"use client"


const posts = [
  {
    id: 1,
    title: 'Powered by Modern Web Technologies',
    description:
      'A web-based SDN simulation platform developed using modern web technologies, including Next.js for the frontend, Node.js for the backend, and MongoDB for data management.',
  },
  {
    id: 2,
    title: 'Realistic SDN Network Simulation',
    description: 'A realistic SDN simulation platform for creating and visualizing network topologies interactively. using Dijkstra Algorithme',

  },
  {
    id: 3,
    title: 'Cloudy Platform ',
    description:
      'Platform deployed in Cloud server and correspond to cloud native requirments which improves scalability '
  },
]

export default function Home() {
  return (
    <div className="bg-white flex justify-around pt-14">
      <div className=" w-full h-full  px-6 lg:px-8">
        <div className="mx-auto max-w-2xl  lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">SDN-WEB Project :</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Web-based SDN Technology Simulation Platform</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
            
              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 ">
                  <a >
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
              </div>
              
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
