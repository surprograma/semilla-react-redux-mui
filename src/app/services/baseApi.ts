import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Definimos la API con su configuración base, sin ningún endpoint.
// Los endpoints serán definidos luego en archivos separados.

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '//localhost:4000' }),
  endpoints: () => ({}),
});
