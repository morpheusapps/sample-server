import { Env } from '../types/server/Env';
import { Urls } from '../types/server/Urls';

export const GetUrlByEnv = function(urls: Urls): (env: string) => string {
  return (env: string): string => {
    switch (env) {
      case Env.Development:
      case Env.Test: {
        return urls.local;
      }
      case Env.Production: {
        return urls.production;
      }
      default:
        return urls.local;
    }
  };
};