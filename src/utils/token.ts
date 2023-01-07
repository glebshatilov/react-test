import {
  TOKEN_LOCAL_STORAGE_NAME
} from '@/utils/constants/storage.js'

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_LOCAL_STORAGE_NAME, token)
}

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_LOCAL_STORAGE_NAME)
}

export function clearToken(): void {
  localStorage.removeItem(TOKEN_LOCAL_STORAGE_NAME)
}
