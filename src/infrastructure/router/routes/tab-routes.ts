import { UsuarioNivel } from '../../../domain/enum/usuario-nivel.enum';
import { Route } from '../config/route.interface';

interface Tab extends Route {
    title: string;
}

export const tabRoutes: Route[] = [
    {
        path: '/',
        component: () => import('../../../ui/presenters/home/HomePage.vue'),

        name: 'home',
        meta: {
            authGuard: true,
            breadcrumb: [
                {
                    path: '/',
                    title: 'Início',
                },
            ],
            icon: 'home',
            label: 'Tela inicial',
        },
    },
    {
        path: '/usuario',
        component: () =>
            import(
                '../../../ui/presenters/usuarios/components/UsuariosPage.vue'
            ),
        meta: {
            roles: [UsuarioNivel.Administrador],
            breadcrumb: [
                {
                    path: '/usuario',
                    title: 'Usuários',
                },
            ],
            label: 'Lista de usuários',
            icon: 'person',
        },
        name: 'usuario',
    },
    {
        path: '/gantt',
        component: () =>
            import('../../../ui/presenters/gantt/components/Gantt.vue'),
        meta: {
            roles: [UsuarioNivel.Administrador],
            breadcrumb: [
                {
                    path: '/gantt',
                    title: 'Gantt',
                },
            ],
            label: 'Gráfico de Gantt',
            icon: 'graphic_eq',
        },
        name: 'gantt',
    },
];
