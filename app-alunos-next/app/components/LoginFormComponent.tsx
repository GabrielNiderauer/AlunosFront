export default function LoginFormComponent() {
    return (
        <form className="flex flex-col space-y-4">
            <div className="flex flex-col">
                <label htmlFor="email" className="text-black">
                    Email
                </label>
                <input
                    id="email"
                    type="text"
                    placeholder="Digite seu email"
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="password" className="text-black">
                    Senha
                </label>
                <input
                    id="password"
                    type="password"
                    placeholder="Digite sua senha"
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
            </div>

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 w-2/6 rounded hover:bg-blue-600 transition duration-300"
                >
                    Login
                </button>
            </div>
        </form>
    );
}
