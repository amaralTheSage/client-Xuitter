import Header from "./components/Header";

function App() {
  const posts = [
    {
      id: 1,
      user: "Daniel1234",
      post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab laboriosam odio molestiae dolor fugit mollitia, unde dicta, ipsam architecto sint magni assumenda cum minus, laudantium iste eos? Blanditiis, esse.",
      createAt: "12:40",
    },
    {
      id: 2,
      user: "Sergio",
      post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab laboriosam odio molestiae dolor fugit mollitia, unde dicta, ipsam architecto sint magni assumenda cum minus, laudantium iste eos? Blanditiis, esse.",
      createAt: "12:40",
    },
  ];

  return (
    <>
      <Header />

      <main>
        <form className="border-[#66708195] border m-auto w-[70%] min-h-24 flex rounded-md mt-8 flex-col  px-3 items-end gap-1">
          <input
            type="text"
            className=" w-full min-h-12 bg-inherit relative placeholder:absolute placeholder:top-4 placeholder:text-black placeholder:font-semibold
            outline-none appearance-none"
            placeholder="No que está pensando?"
          />
          <button
            type="submit"
            className="rounded-md bg-purple-500 text-white 
             py-1
            w-[100px]
            "
          >
            Xuitar
          </button>
        </form>

        <ul className=" w-[80%] m-auto px-8 py-8 h-screen">
          {posts.map((p) => {
            return (
              <li
                key={p.id}
                className="border-b-2 border-[#66708195] p-4 my-4 px-8 max-w-[450px] m-auto"
              >
                <div className="flex justify-between">
                  <span className="font-semibold text-xl ">{p.user}</span>

                  <span>{p.createAt}</span>
                </div>
                <p className="text-sm">{p.post}</p>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default App;
