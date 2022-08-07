// workaround with any type as axios doesn't recongnize data property on AxiosResponse type
export function getErrorMessage(error: any, defaultMessage: string) {
  return error.response?.data?.message ?? defaultMessage;
}
