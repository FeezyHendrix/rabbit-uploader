export interface FileType {
  file: File;
  state: "idle" | "uploading" | "completed";
  progress?: number;
  id: number;
  timeLeft?: string;
}
