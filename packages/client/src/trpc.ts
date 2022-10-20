import { createReactQueryHooks } from '@trpc/react';
import { appRouter } from 'api-server';

export const trpc = createReactQueryHooks<appRouter>();
