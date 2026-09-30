import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { resetPassword } from '../../services/authService';
import Logo from '../../assets/logo.png';

const LandingResetPass = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');

    if (!token) {
      setMessage('El enlace no contiene un token válido. Solicita uno nuevo.');
      return;
    }

    if (newPassword.length < 8) {
      setMessage('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage('Las contraseñas no coinciden.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await resetPassword(token, newPassword);
      setMessage(response.data?.message || 'Tu contraseña se actualizó correctamente.');
      setIsComplete(true);
    } catch (error) {
      setMessage(error.message || 'No se pudo restablecer la contraseña. Solicita un enlace nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-10 text-white">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/20 blur-[110px]" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-green-400/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-emerald-400/25 blur-3xl" />

      <section className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/85 to-slate-800/50 p-7 shadow-[0_0_70px_rgba(34,197,94,0.20)] backdrop-blur-xl sm:p-9">
        {/* <div className="pointer-events-none absolute -left-12 -top-12 h-64 w-64 rounded-full bg-green-400/20 blur-3xl" /> */}

        <div className="relative">
            <div className="flex justify-center items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <img src={Logo} alt="logo" className="w-8" />
                </div>
                <p className="mb-2 text-xl font-bold tracking-wide text-green-400">XPENSES</p>
            </div> 

          <h1 className="text-2xl font-bold">Crear nueva contraseña</h1>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Elige una contraseña nueva para volver a acceder a tu cuenta.
          </p>

          {!token ? (
            <div className="mt-6 space-y-4">
              <p className="rounded-lg border border-amber-400/20 bg-amber-400/10 p-3 text-sm text-amber-200" role="alert">
                Este enlace no es válido o está incompleto. Solicita uno nuevo para continuar.
              </p>
              <Link to="/login" className="inline-flex text-sm font-medium text-green-400 hover:text-green-300">
                Volver al inicio de sesión
              </Link>
            </div>
          ) : isComplete ? (
            <div className="mt-6 space-y-4">
              <p className="rounded-lg border border-green-400/20 bg-green-400/10 p-3 text-sm text-green-200" role="status">
                {message}
              </p>
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="w-full rounded-lg bg-green-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Ir a iniciar sesión
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="new-password" className="mb-2 block text-sm font-medium text-slate-200">
                  Nueva contraseña
                </label>
                <input
                  id="new-password"
                  type="password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-green-400 focus:ring-2 focus:ring-green-500/30"
                  placeholder="Mínimo 8 caracteres"
                />
              </div>

              <div>
                <label htmlFor="confirm-password" className="mb-2 block text-sm font-medium text-slate-200">
                  Confirmar contraseña
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-green-400 focus:ring-2 focus:ring-green-500/30"
                  placeholder="Escribe de nuevo tu contraseña"
                />
              </div>

              {message && (
                <p className="rounded-lg border border-red-400/20 bg-red-400/10 p-3 text-sm text-red-200" role="alert">
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-green-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                {isSubmitting ? 'Actualizando...' : 'Cambiar contraseña'}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default LandingResetPass;
