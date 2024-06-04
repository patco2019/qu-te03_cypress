describe("Tests d'APIs", () => {


  it('On veut un id', () => {
    cy.getid('665ed756b05eb401419fd67c').then(response => {
        cy.log(JSON.stringify(response))
        expect(response.body.data.id).eq('665ed756b05eb401419fd67c')
      })
  })

  //GET alls
  it("GET", () => {
    cy.request({
      mothod: "GET", 
      url: "https://practice.expandtesting.com/notes/api/notes",
      headers : { 
      "x-auth-token":"c886d28dbc07429997655f0b1012f96b3215c722083a4f80b823c504bc5cf94d"
    }
  }).then(
      (response) => {
        expect(response.status).eq(200);
        cy.log(JSON.stringify(response.body));
      }
    );
  });

  //POST
  it("POST", () => {
    cy.request({
      method: "POST",
      url: "https://practice.expandtesting.com/notes/api/notes",
      body: {
  
        title: "Bonjour",
        description: "Je dis bonjour",
        category: "Home"
      },

    headers : { 
      "x-auth-token":"c886d28dbc07429997655f0b1012f96b3215c722083a4f80b823c504bc5cf94d"
    }
    }).then((response) => {
      expect(response.status).eq(200);
      //check title
      cy.log(JSON.stringify(response.body));

    
      expect(response.body.data.title).eq("Bonjour");
      expect(response.body.data).to.have.property("title", "Bonjour");
      //check
      expect(response.body.data.description).eq("Je dis bonjour");
      expect(response.body.data).to.have.property("description", "Je dis bonjour");
      //
      expect(response.body.data.category).eq("Home");
      expect(response.body.data).to.have.property("category", "Home");
    });
  });


//PUT
  it("PUT", () => {
    cy.request({
      method: "PUT",
      url: "https://practice.expandtesting.com/notes/api/notes/665ed447b05eb401419fd61d",
      body: {
        id: "665ed447b05eb401419fd61d",
        title: "Bonjour",
        description: "Je dis bonjour",
        category: "Home",
        completed: true
      },
      headers : { 
        "x-auth-token":"c886d28dbc07429997655f0b1012f96b3215c722083a4f80b823c504bc5cf94d"
      }

    }).then((reponse) => {
      expect(reponse.status).eq(200);
      cy.log(JSON.stringify(reponse.body));
      expect(reponse.body.data.title).eq("Bonjour");
      expect(reponse.body.data.description).eq("Je dis bonjour");
      expect(reponse.body.data.category).eq("Home");
      expect(reponse.body.data.id).eq("665ed447b05eb401419fd61d");
    });
  });
});
