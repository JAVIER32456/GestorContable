import React, { useState, useEffect } from 'react'
import Hero from '../../assets/hero.png'
import ModalNewCategory from '../modal/modalNewCategory'
import ModalChangePassword from '../modal/modalChangePassword'
import { getUser, updateProfile } from '../../services/authService'

const Settings = () => {
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [profileData, setProfileData] = useState(() => getUser() || { firstName: '', lastName: '', email: '' });
  const [profileMessage, setProfileMessage] = useState('');

  // useEffect para actualizar los datos del usuario cuando el componente se monta
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setProfileData(userData);
      }
      catch (error) {
        console.error('Error fetching user data:', error);
      } 
    };
    fetchUser();
  }, []);

  const handleProfileChange = (event) => {
    const { name, value } = event.target;

    setProfileData((currentProfile) => ({
      ...currentProfile,
      [name]: value
    }));
  };

  const handleProfileSubmit = async (event) => {
    event.preventDefault();
    setProfileMessage('');
    setIsSavingProfile(true);

    try {
      const updatedUser = await updateProfile(profileData);
      const userFromResponse = updatedUser.user || updatedUser.data || updatedUser;
      const profileToStore = {
        ...profileData,
        ...userFromResponse
      };

      localStorage.setItem('user', JSON.stringify(profileToStore));
      setProfileData(profileToStore);
      setIsEditing(false);
      setProfileMessage('Perfil actualizado correctamente.');
    } catch (error) {
      setProfileMessage(error.message || 'No se pudo actualizar el perfil.');
    } finally {
      setIsSavingProfile(false);
    }
  };

  const handleCancelEdit = () => {
    setProfileData(getUser() || { firstName: '', lastName: '', email: '' });
    setIsEditing(false);
    setProfileMessage('');
  };


  return (
    <div className='text-white'>
          <div className="
            w-full
            relative
            md:grid grid-cols-2
            items-center
            gap-6
            bg-gradient-to-br from-slate-900/80 to-slate-800/40
            border border-white/10
            backdrop-blur-xl
            rounded-3xl
            p-8
            overflow-hidden
            shadow-[0_0_40px_rgba(34,197,94,0.08)]
            ">
                {profileData && (
                  <>
                    <div className='flex justify-center p-5 '>
                        <img src={Hero} alt='Imagen' width={180} className='bg-slate-700 p-4 rounded-full'/>
                    </div>
                    <form className='flex flex-col' onSubmit={handleProfileSubmit}>
                          <div className='flex flex-col m-2'>
                            <label htmlFor="firstName">Nombre</label>
                            <input
                              id="firstName"
                              name="firstName"
                              type='text'
                              value={profileData.firstName || ''}
                              onChange={handleProfileChange}
                              className='bg-transparent border-b-2 border-green-900 p-2 outline-none disabled:opacity-60'
                              disabled={!isEditing}
                              required
                            />
                          </div>
                          
                          <div className='flex flex-col m-2' >
                            <label htmlFor="lastName">Apellidos</label>
                            <input
                              id="lastName"
                              name="lastName"
                              type="text"
                              value={profileData.lastName || ''}
                              onChange={handleProfileChange}
                              className='bg-transparent border-b-2 border-green-900 p-2 outline-none disabled:opacity-60'
                              disabled={!isEditing}
                              required
                            />
                          </div>

                          <div className='flex flex-col m-2'>
                            <label htmlFor="email">Correo</label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              value={profileData.email || ''}
                              onChange={handleProfileChange}
                              className='bg-transparent border-b-2 border-green-900 p-2 outline-none disabled:opacity-60'
                              disabled={!isEditing}
                              required
                            />
                          </div>

                      <div className='flex gap-3 flex-col md:flex-row '>
                        {!isEditing ? (
                          <button
                            type="button"
                            onClick={() => setIsEditing(true)}
                            className='mt-4 md:w-44 p-2 border-2 border-green-700 rounded-lg hover:bg-slate-600/70 hover:border-green-500'
                          >
                            Editar
                          </button>
                        ) : (
                          <>
                            <button
                              type="submit"
                              disabled={isSavingProfile}
                              className='mt-4 p-2 border-2 border-green-700 rounded-lg hover:bg-slate-600/70 hover:border-green-500'
                            >
                              {isSavingProfile ? 'Guardando...' : 'Guardar cambios'}
                            </button>
                            <button
                              type="button"
                              onClick={handleCancelEdit}
                              className='mt-4 p-2 border-2 border-red-700 rounded-lg hover:bg-slate-600/70 hover:border-red-500'
                            >
                              Cancelar
                            </button>
                          </>
                        )}
                        <button 
                          type="button"
                          disabled={isSavingProfile}
                          className='mt-4 p-2 border-2 border-green-700 rounded-lg hover:bg-slate-600/70 hover:border-green-500'
                          onClick={() => setIsPasswordModalOpen(true)}
                        >
                          Cambiar contraseña
                        </button>
                      </div>

                      {profileMessage && <p className='m-2 text-sm text-emerald-400'>{profileMessage}</p>}
                    </form>
                  </>
                )}
                {isSavingProfile && (
                  <div className='absolute inset-0 z-10 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm'>
                    <div className='flex flex-col items-center gap-3 text-white'>
                      <div className='h-10 w-10 animate-spin rounded-full border-4 border-slate-600 border-t-green-400' />
                      <p>Actualizando perfil...</p>
                    </div>
                  </div>
                )}
          </div>

          <div>
            <h2 className='p-4 border-b-2 border-white/10 '>CONFIGURACION</h2>
          </div>
          <div className='flex flex-col p-4 text-slate-400'>
              <button
                onClick={() => setIsCategoryModalOpen(true)}
                className='p-2 rounded-lg hover:text-white hover:bg-slate-700/90 text-left'
              >
                Categorias
              </button>
              <button className='p-2 rounded-lg hover:text-white hover:bg-slate-700/90 text-left'>
                Reportes Generales
              </button>
          </div>

          <ModalNewCategory
            isOpen={isCategoryModalOpen}
            onClose={() => setIsCategoryModalOpen(false)}
          />

          <ModalChangePassword
            isOpen={isPasswordModalOpen}
            onClose={() => setIsPasswordModalOpen(false)}
          />
    </div>
  )
}

export default Settings
