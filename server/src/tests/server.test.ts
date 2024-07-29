describe("Server", () => {
  // ! This will test the router and AtlasController's getAllPlanetRecords() method implicitly
  test("should be able to send a 'GET' request to server", async () => {
    const result = await fetch("http://localhost:3000/api", {
      method: "GET",
    });

    expect(result).toBeTruthy();
  });

  // ! This will test AtlasController's getAllPlanetRecords() method implicitly
  test("should return all 8 planets", async () => {
    const result = JSON.parse(await (await fetch("http://localhost:3000/api", {
      method: "GET",
    })).text())

    expect(result.data).toHaveLength(8);
  });
});
