import { baseApi } from './baseApi';

export interface Contacto {
  id: number;
  nombre: string;
  edad: number;
}

type SinId<T> = Omit<T, 'id'>;

// Acá definimos el endpoint /contactos, "extendiendo" a la baseApi con nuevos
// tagTypes y endpoints.

const contactosApi = baseApi
  .enhanceEndpoints({ addTagTypes: ['Contacto'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      createContacto: builder.mutation<Contacto, SinId<Contacto>>({
        query: (body) => ({
          url: '/contactos',
          method: 'POST',
          body,
        }),
        invalidatesTags: ['Contacto'],
      }),
      getContactos: builder.query<Contacto[], void>({
        query: () => '/contactos',
        providesTags: (result) =>
          result?.map(({ id }) => ({ type: 'Contacto', id })) ?? [],
      }),
      getContactoById: builder.query<Contacto, number | string>({
        query: (id) => `/contactos/${id}`,
        providesTags: (result) =>
          result === undefined ? [] : [{ type: 'Contacto', id: result.id }],
      }),
    }),
  });

export const {
  useGetContactosQuery,
  useGetContactoByIdQuery,
  useCreateContactoMutation,
} = contactosApi;
