import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testMatch: [ "**/tests/*.ts"],
};

export default config;