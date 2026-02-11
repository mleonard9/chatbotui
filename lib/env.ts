export const getRequiredEnvVar = (name: string) => {
  const value = process.env[name]

  if (!value) {
    throw new Error(
      `Environment variable ${name} is missing. Please add it to your .env.* files.`
    )
  }

  return value
}
