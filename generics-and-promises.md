# How do Generics work in TypeScript?

To be completely honest, generics looked absolutely terrifying to me when I saw them in documentation because of those weird angle brackets everywhere. It looked like math formulas instead of readable code. But after breaking things down, I realized generics are just empty boxes or variables meant for types instead of actual values. Instead of lazily slapping the unsafe `any` type on everything when you aren't sure about the input data, generics let us build functions that stay super flexible while keeping strict type security.

This comes in clutch when you are dealing with async network fetch requests using `Promise<T>`. Usually, the backend team changes database fields around, and we don't know what the JSON response looks like. By passing a generic type directly into our promise structure, we can explicitly declare the exact interface layout we expect to get back. This catches silly typo bugs early on before the broken data ever hits the screen components.

```typescript
interface UserProfile {
  id: number;
  username: string;
}

function fetchRemoteData<T>(apiEndpoint: string): Promise<T> {
  return fetch(apiEndpoint).then((response: Response) => {
    let rawJson = response.json() as Promise<T>;
    return rawJson;
  });
}

async function execution(): Promise<void> {
  let profile = await fetchRemoteData<UserProfile>("/api/user/1");
  let finalUsername: string = profile.username.trim();
  console.log(finalUsername);
}
```

In conclusion, generics are an absolute lifesaver for writing reusable utility code. They give you the absolute best of both worlds by combining wide code flexibility with heavy compiler safety checks, making scary asynchronous `Promise<T>` responses completely predictable and clean to work with.
