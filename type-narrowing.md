# What is Type Narrowing in TypeScript?

When I first jumped into TypeScript after using basic JavaScript, the compiler kept throwing these annoying red squiggly lines at me. It usually happened when a variable could be a few different things at once, like a union type. Honestly, I didn't get how to fix it until I learned about type narrowing. Type narrowing is just a fancy way of saying we are writing a conditional safety check to prove to TypeScript exactly what kind of data we are handling at that exact second in the code execution.

To actually do this on our projects, we use normal runtime operators which people call type guards. For primitive data like everyday strings or numbers, the `typeof` check works perfectly. But if you are using objects built out of an actual class, you need to use `instanceof` to verify the constructor name. Also, if you just have a random literal object layout, the `in` keyword lets you check if a specific key even exists inside it.

```typescript
class AdminUser {
  manageSystem(): string {
    return "System Managed";
  }
}

function processData(input: string | number | AdminUser | { status: string }): string {
  if (typeof input === "string") {
    let cleanString: string = input.trim().toLowerCase();
    return cleanString;
  }
  if (input instanceof AdminUser) {
    let result: string = input.manageSystem();
    return result;
  }
  if (typeof input === "object" && input !== null && "status" in input) {
    let statusValue: string = input.status;
    return statusValue;
  }
  let fallbackNumber: number = input * 10;
  return "Numeric input multiplied: " + fallbackNumber;
}
```

To sum it all up, type narrowing completely saved my sanity while dealing with mixed parameters. Using these quick runtime checks like `typeof`, `instanceof`, and `in` helps filter down types step-by-step so the compiler stays happy and our web app doesn't randomly break for users.
