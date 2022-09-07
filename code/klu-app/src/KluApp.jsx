import { AuthProvider } from './auth/';
import { AppRouter } from './router';


export const KluApp = () => {

  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>

  )
}
