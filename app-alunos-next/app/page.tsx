import ListaAlunos from './alunos/page';  // Importa a página de alunos
import LoginLogoComponent from './components/LoginLogoComponent';
import LoginFormComponent from './components/LoginFormComponent';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <LoginLogoComponent />
        <LoginFormComponent />
      </div>
    </div>
  );
}