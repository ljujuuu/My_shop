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
            <p><strong>Produits</strong></p>
          </div>
          <hr class="line" />
          <div>
            <p class="shoe-name">Chaussures girafe</p>
          </div>
          <hr class="line" />
          <div>
            <p class="shoe-name">Chaussures moumoute</p>
          </div>
          <hr class="line" />
          <div>
            <p class="shoe-name">Chaussures rose</p>
          </div>
          <hr class="line" />
          <div>
            <p class="shoe-name">Chaussures vache</p>
          </div>
          <hr class="line" />
          <div>
            <p class="shoe-name">Claquettes écrevisse</p>
          </div>
          <hr class="line" />
          <div>
            <p class="shoe-name">Claquettes poisson</p>
          </div>
          <hr class="line" />
          <div>
            <p class="shoe-name">Crocs après ski</p>
          </div>
          <hr class="line" />
          <div>
            <p class="shoe-name">Ballerines puantes</p>
          </div>
          <hr class="line" />
        </div>
        <div class="column">
          <div>
            <p><strong>ID</strong></p>
          </div>
          <hr class="line" />
          <div>
            <p>1</p>
          </div>
          <hr class="line" />
          <div>
            <p>2</p>
          </div>
          <hr class="line" />
          <div>
            <p>3</p>
          </div>
          <hr class="line" />
          <div>
            <p>4</p>
          </div>
          <hr class="line" />
          <div>
            <p>5</p>
          </div>
          <hr class="line" />
          <div>
            <p>6</p>
          </div>
          <hr class="line" />
          <div>
            <p>7</p>
          </div>
          <hr class="line" />
          <div>
            <p>8</p>
          </div>
          <hr class="line" />
        </div>
        <div class="column">
          <div>
            <p><strong>Catégories</strong></p>
          </div>
          <hr class="line" />
          <div>
            <p>Chaussures à talon</p>
          </div>
          <hr class="line" />
          <div>
            <p>Chaussures à talon</p>
          </div>
          <hr class="line" />
          <div>
            <p>Chaussures à talon</p>
          </div>
          <hr class="line" />
          <div>
            <p>Chaussures à talon</p>
          </div>
          <hr class="line" />
          <div>
            <p>Claquettes</p>
          </div>
          <hr class="line" />
          <div>
            <p>Claquettes</p>
          </div>
          <hr class="line" />
          <div>
            <p>Crocs</p>
          </div>
          <hr class="line" />
          <div>
            <p>Ballerines</p>
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
  