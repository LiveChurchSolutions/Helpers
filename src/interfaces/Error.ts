export interface ErrorLogInterface {
  application?: string,
  errorTime?: Date,
  userId?: string,
  churchId?: string,
  originUrl?: string,
  errorType?: string,
  message?: string,
  details?: string,
 };

export interface ErrrorAppDataInterface {
  churchId: string,
  userId: string,
  originUrl: string,
  application: string
 }
