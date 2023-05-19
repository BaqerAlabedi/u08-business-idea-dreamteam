const bcrypt = require("bcrypt");

export async function hashPassword(plainTextPassword : string): Promise<string> {
	const saltRounds = 10;
	const hashedPassword: string = await bcrypt.hash(plainTextPassword, saltRounds);
	return hashedPassword;
}

export async function comparePassword(plainTextPassWord : string, hash : string): Promise<boolean> {
	const result = bcrypt.compare(plainTextPassWord, hash);
	return result;
}