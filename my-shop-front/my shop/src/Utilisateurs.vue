<template>
    <div>
      <div class="header">
        <h1 class="title">My Shoes</h1>
        <div class="search-container">
          <input type="text" class="search-bar" placeholder="Rechercher...">
        </div>
        <router-link to="/login" class="register-button">Connexion</router-link>
      </div>
      <div class="nav-links">
        <router-link to="/admin" class="nav-link">Produits</router-link>
        <router-link to="/categories" class="nav-link">Catégories</router-link>
        <router-link to="/utilisateurs" class="nav-link">Utilisateurs</router-link>
      </div>
      <div class="info-table">
        <div class="column">
          <div>
            <p><strong>Adresse mail</strong></p>
          </div>
          <hr class="line" />
          <div>
            <p>chaussure@savane.com</p>
          </div>
          <hr class="line" />
          <div>
            <p>chaussure@poilues.com</p>
          </div>
          <hr class="line" />
          <div>
            <p>chaussure@barbie.com</p>
          </div>
          <hr class="line" />
          <div>
            <p>chaussure@ferme.com</p>
          </div>
          <hr class="line" />
          <div>
            <p>chaussure@pinces.com</p>
          </div>
          <hr class="line" />
          <div>
            <p>chaussure@peche.com</p>
          </div>
          <hr class="line" />
          <div>
            <p>chaussure@neige.com</p>
          </div>
          <hr class="line" />
          <div>
            <p>chaussure@odorante.com</p>
          </div>
          <hr class="line" />
        </div>

        <div class="column">
          <div>
            <p><strong>Mots de passes</strong></p>
          </div>
          <hr class="line" />
          <div>
            <p>.....................</p>
          </div>
          <hr class="line" />
          <div>
            <p>.....................</p>
          </div>
          <hr class="line" />
          <div>
            <p>.....................</p>
          </div>
          <hr class="line" />
          <div>
            <p>.....................</p>
          </div>
          <hr class="line" />
          <div>
            <p>.....................</p>
          </div>
          <hr class="line" />
          <div>
            <p>.....................</p>
          </div>
          <hr class="line" />
          <div>
            <p>.....................</p>
          </div>
          <hr class="line" />
          <div>
            <p>.....................</p>
          </div>
          <hr class="line" />
        </div>
        
        <div class="column">
          <div>
            <p><strong>Actions</strong></p>
          </div>
          <hr class="line1" />
          <div>
            <button class="action-button">Modifier</button>
            <button class="action-button">Supprimer</button>
          </div>
          <hr class="line1" />
          <div>
            <button class="action-button">Modifier</button>
            <button class="action-button">Supprimer</button>
          </div>
          <hr class="line1" />
          <div>
            <button class="action-button">Modifier</button>
            <button class="action-button">Supprimer</button>
          </div>
          <hr class="line1" />
          <div>
            <button class="action-button">Modifier</button>
            <button class="action-button">Supprimer</button>
          </div>
          <hr class="line1" />
          <div>
            <button class="action-button">Modifier</button>
            <button class="action-button">Supprimer</button>
          </div>
          <hr class="line1" />
          <div>
            <button class="action-button">Modifier</button>
            <button class="action-button">Supprimer</button>
          </div>
          <hr class="line1" />
          <div>
            <button class="action-button">Modifier</button>
            <button class="action-button">Supprimer</button>
          </div>
          <hr class="line1" />
          <div>
            <button class="action-button">Modifier</button>
            <button class="action-button">Supprimer</button>
          </div>
          <hr class="line1" />
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .nav-links {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .nav-link {
    margin: 0 10px;
  }
  
  .info-table {
    display: flex;
  }
  
  .column {
    flex: 1;
    margin-right: 20px;
  }
  
  .line {
    border: none;
    border-top: 1px solid #ccc;
    margin: 10px 0;
  }

  .line1 {
    border: none;
    border-top: 1px solid #ccc;
    margin: 8.5px 0;
  }
  
  .shoe-name {
    margin-bottom: 10px;
  }
  
  .column p {
    margin: 10px 0;
  }
  
  .action-button {
    margin-right: 10px;
  }
  </style>
  