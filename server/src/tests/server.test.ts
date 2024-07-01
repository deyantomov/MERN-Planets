describe("Server", () => {
  // ! This will test the router and AtlasController's getAllPlanetRecords() method implicitly
  test("should be able to send a 'GET' request to server", async () => {
    const result = await fetch("http://localhost:3000", {
      method: "GET",
    });

    const resultH = await fetch("http://localhost:3000/home", {
      method: "GET",
    });

    expect(result).toBeTruthy();
    expect(resultH).toBeTruthy();
  });

  // ! This will test AtlasController's getAllPlanetRecords() method implicitly
  test("should return all 8 planets", async () => {
    const result = JSON.parse(await (await fetch("http://localhost:3000", {
      method: "GET",
    })).text())

    expect(result.data).toHaveLength(8);
  });
});
