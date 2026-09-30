import { useState } from 'react';
import { changePassword } from '../../services/authService';


const ModalChangePassword = ({ isOpen, onClose }) => {
    const [ passwords, setPasswords ] = useState({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    const [ message, setMessage ] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-slate-800 rounded-lg shadow-xl w-full max-w-md">
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">Cambiar Contraseña</h3>
            <form
                className="mt-4 flex flex-col gap-3"
                onSubmit={async (event) => {
                event.preventDefault();
                setMessage('');

                try {
                    await changePassword(
                    passwords.currentPassword,
                    passwords.newPassword,
                    passwords.confirmPassword
                    );

                    setMessage('Contraseña cambiada correctamente.');
                    setPasswords({
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                    });
                } catch (error) {
                    setMessage(error.message);
                }
                }}
            >
                <input
                    type="password"
                    className="bg-slate-700 p-2 rounded-md text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Contraseña actual"
                    value={passwords.currentPassword}
                    onChange={(event) =>
                        setPasswords({ ...passwords, currentPassword: event.target.value })
                    }
                    required
                />

                <input
                    type="password"
                    className="bg-slate-700 p-2 rounded-md text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Nueva contraseña"
                    value={passwords.newPassword}
                    onChange={(event) =>
                        setPasswords({ ...passwords, newPassword: event.target.value })
                    }
                    required
                />

                <input
                    type="password"
                    className="bg-slate-700 p-2 rounded-md text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Confirmar nueva contraseña"
                    value={passwords.confirmPassword}
                    onChange={(event) =>
                        setPasswords({ ...passwords, confirmPassword: event.target.value })
                    }
                    required
                />

                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-md">
                    Guardar contraseña
                </button>

                <button type="button" onClick={onClose} className="bg-slate-600 hover:bg-slate-700 text-white p-2 rounded-md">
                    Cancelar
                </button>

                {message && <p>{message}</p>}
            </form>
            
        </div>
      </div>
    </div>
  );
};

export default ModalChangePassword;