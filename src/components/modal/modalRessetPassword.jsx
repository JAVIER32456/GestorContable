import { useState } from 'react';
import { requestPasswordReset } from '../../services/authService';

const ModalRessetPassword = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    setIsSubmitting(true);

    try {
      const response = await requestPasswordReset(email);
      setMessage(response.data?.message || 'Si el correo está registrado, recibirás un enlace para restablecer tu contraseña.');
    } catch (error) {
      setMessage(error.message || 'No se pudo solicitar la recuperación. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" role="presentation" onClick={onClose}>
      <section
        className="relative bg-slate-800 rounded-lg shadow-xl w-full max-w-md"
        role="dialog"
        aria-modal="true"
        aria-labelledby="reset-password-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="p-6">
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute top-3 right-3 text-slate-300 hover:text-white text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            &times;
          </button>
          <h3 id="reset-password-title" className="text-xl font-bold text-white mb-4">
            ¿Olvidaste tu contraseña?
          </h3>
          <p className="text-slate-300">
            Escribe el correo asociado a tu cuenta y te enviaremos un enlace para restablecerla.
          </p>
          <form className="mt-4 flex flex-col gap-3" onSubmit={handleSubmit}>
            <label htmlFor="reset-password-email" className="text-slate-200">
              Correo electrónico
            </label>
            <input
              id="reset-password-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="bg-slate-700 p-2 rounded-md text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <div className="flex gap-3 mt-4 justify-between">
                <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white p-2 rounded-md"
                >
                {isSubmitting ? 'Enviando...' : 'Enviar enlace'}
                </button>
                <button
                type="button"
                onClick={onClose}
                className="bg-slate-600 hover:bg-slate-700 text-white p-2 rounded-md"
                >
                Volver
                </button>
            </div>
            {message && <p className="text-slate-200" role="status">{message}</p>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default ModalRessetPassword;
