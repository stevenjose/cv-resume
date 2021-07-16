import { types } from "../types/types";

export const userCertificate = (certificate) => {
	return {
		type: types.userCertificate,
		payload: {
			certificate
		}
	}
}