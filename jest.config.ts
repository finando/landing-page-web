import { type Config } from 'jest';

export default {
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }],
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{tsx,ts,jsx,js}', '!src/**/*.d.ts'],
} satisfies Config;
