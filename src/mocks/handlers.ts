import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost/users", () => {
    return HttpResponse.json([
      { id: 1, name: "Hana" },
      { id: 2, name: "Taro" },
    ]);
  }),
];
