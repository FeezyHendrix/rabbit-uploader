import { ReactNode, createContext, useContext, useState } from "react";
import { FileType } from "../types"

interface FileContextType {
  files: FileType[];
  addFiles: (files: FileType[]) => void;
  removeFile: (id: number) => void;
  uploadFile: (id: number, file: Partial<FileType>) => void;
}

interface FileProviderProps {
  children: ReactNode;
}

const FileContext = createContext<FileContextType | undefined>(undefined);

export const FileProvider: React.FC<FileProviderProps> = ({ children }) => {
  const [files, setFiles] = useState<FileType[]>([]);

  const addFiles = (files: FileType[]) => {
    setFiles((prev) => [...prev, ...files]);
  };

  const removeFile = (id: number) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  };

  const uploadFile = (id: number, file: Partial<FileType>) => {
    setFiles((prev) => prev.map((_) => (_.id === id ? { ..._, ...file } : _)));
  };

  return <FileContext.Provider value={{ files, addFiles, removeFile, uploadFile }}>{children}</FileContext.Provider>;
};


export const useFileContext = (): FileContextType => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error("useFileContext must be used within a FileProvider");
  }
  return context;
};