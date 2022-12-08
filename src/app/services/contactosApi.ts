import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Contacto {
  id: number;
  nombre: string;
  edad: number;
}

export const contactosApi = createApi({
  reducerPath: "contactosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "//localhost:4000/contactos" }),
  tagTypes: ["Contacto"],
  endpoints: (builder) => ({
    createContacto: builder.mutation<Contacto, Omit<Contacto, "id">>({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Contacto"],
    }),
    getContactos: builder.query<Contacto[], void>({
      query: () => "",
      providesTags: (result) =>
        result?.map(({ id }) => ({ type: "Contacto", id })) ?? [],
    }),
    getContactoById: builder.query<Contacto, number | string>({
      query: (id) => `/${id}`,
      providesTags: (result) =>
        result === undefined ? [] : [{ type: "Contacto", id: result.id }],
    }),
  }),
});

export const {
  useGetContactosQuery,
  useGetContactoByIdQuery,
  useCreateContactoMutation,
} = contactosApi;
