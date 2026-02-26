import { apiCall } from '@/utils/api';

type HeaderRecord = Record<string, string>;

function normalizeHeaders(headers?: HeadersInit): HeaderRecord {
  if (!headers) return {};

  if (headers instanceof Headers) {
    const mapped: HeaderRecord = {};
    headers.forEach((value, key) => {
      mapped[key] = value;
    });
    return mapped;
  }

  if (Array.isArray(headers)) {
    return Object.fromEntries(headers);
  }

  return { ...headers };
}

export function withAdminAuth(authToken: string | null, headers?: HeadersInit): HeaderRecord {
  const normalized = normalizeHeaders(headers);
  if (authToken && !normalized.Authorization && !normalized.authorization) {
    normalized.Authorization = `Bearer ${authToken}`;
  }
  return normalized;
}

export async function adminApiCall(
  endpoint: string,
  authToken: string | null,
  options: RequestInit = {},
): Promise<Response> {
  return apiCall(endpoint, {
    ...options,
    headers: withAdminAuth(authToken, options.headers),
  });
}

export async function adminApiJson<T>(
  endpoint: string,
  authToken: string | null,
  options: RequestInit = {},
): Promise<T> {
  const response = await adminApiCall(endpoint, authToken, options);
  return (await response.json()) as T;
}
