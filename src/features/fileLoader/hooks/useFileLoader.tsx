import { useState } from 'react'
import { IKCore } from 'imagekitio-react'
import { UploadResponse } from 'imagekit-javascript/dist/src/interfaces/index.js'

const imagekit = new IKCore({
  publicKey: import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY,
  urlEndpoint: import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT,
  authenticationEndpoint: import.meta.env.VITE_IMAGEKIT_AUTHENTIFICATION_ENDPOINT
})

interface UploadOptions {
  file: File
  fileName: string
  folder: string
}

function useFileLoader() {
  const [loading, setLoading] = useState(false)

  const uploadFile = async(options: UploadOptions): Promise<UploadResponse> => {
    setLoading(true)
    try {
      const response = await imagekit.upload({
        file: options.file,
        fileName: options.fileName,
        folder: options.folder
      })

      setLoading(false)
      return response
    } catch (error) {
      setLoading(false)
      throw error
    }
  }

  return { uploadFile, loading }
}

export default useFileLoader
