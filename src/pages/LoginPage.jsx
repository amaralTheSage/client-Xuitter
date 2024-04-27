import React from "react";
import Header from "../components/Header";

export default function LoginPage() {
  return (
    <>
      <Header />

      <div className="text-center mt-10 text-2xl flex justify-center gap-1 mb-3">
        <h2>Bem vindo de volta 👻</h2>
      </div>

      <form className=" border shadow-md rounded-md min-h-[260px]   box-border py-8 max-w-[400px] px-12 m-auto flex gap-5 flex-col">
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            className="border bg-inherit rounded-md w-full min-h-8 outline-none px-2"
          />
        </div>

        <div>
          <label htmlFor="password">Senha: </label>
          <input
            type="password"
            name="password"
            className="border bg-inherit rounded-md w-full min-h-8 outline-none px-2"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-purple-500 text-white
               py-1
              w-[100px] "
          >
            Entrar
          </button>
        </div>
      </form>
    </>
  );
}
