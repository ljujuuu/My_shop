<template>
  <div>
    <div class="header">
      <h1 class="title">My Shoes</h1>
      <div class="search-container">
        <input type="text" class="search-bar" placeholder="Rechercher...">
      </div>
      <router-link to="/login" class="register-button">Connexion</router-link>
    </div>
    <div class="shoe-row">
      <div v-for="shoe in firstRowShoes" :key="shoe.id" class="shoe-item">
        <div class="shoe-container">
          <div class="shoe-image">
            <img :src="shoe.image" alt="Image de la chaussure" class="shoe-img" />
          </div>
          <div class="shoe-info">
            <h2>{{ shoe.name }}</h2>
            <p class="shoe-category">{{ shoe.category }}</p>
            <p class="shoe-price">{{ shoe.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="shoe-row">
      <div v-for="shoe in secondRowShoes" :key="shoe.id" class="shoe-item">
        <div class="shoe-container">
          <div class="shoe-image">
            <img :src="shoe.image" alt="Image de la chaussure" class="shoe-img" />
          </div>
          <div class="shoe-info">
            <h2>{{ shoe.name }}</h2>
            <p class="shoe-category">{{ shoe.category }}</p>
            <p class="shoe-price">{{ shoe.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
  export default {
    data() {
      return {
        shoes: [
          { id: 1, name: 'Chaussures girafe', image: '../src/img/Chaussures_girafe.jpg', category: 'Chaussures à talons', price: '$50' },
          { id: 2, name: 'Chaussures moumoute', image: '../src/img/Chaussures_moumoute.jpg', category: 'Chaussures à talon', price: '$60' },
          { id: 3, name: 'Chaussures rose', image: '../src/img/Chaussures_rose.jpg', category: 'Chaussures à talon', price: '$45' },
          { id: 4, name: 'Chaussures vache', image: '../src/img/Chaussures_vache.jpg', category: 'Chaussures à talon', price: '$55' },
          { id: 5, name: 'Claquettes écrevisse', image: '../src/img/Claquettes_ecrevisse.jpg', category: 'Claquettes', price: '$30' },
          { id: 6, name: 'Claquettes poisson', image: '../src/img/Claquettes_poisson.jpg', category: 'Claquettes', price: '$25' },
          { id: 7, name: 'Crocs après ski', image: '../src/img/Crocs_apres_ski.jpg', category: 'Crocs', price: '$70' },
          { id: 8, name: 'Ballerines puantes', image: '../src/img/ballerines_puantes.jpg', category: 'Ballerines', price: '$90' },

        ]
      };
    },
    computed: {
      firstRowShoes() {
        return this.shoes.slice(0, 4); 
      },
      secondRowShoes() {
        return this.shoes.slice(4); 
      }
    }
  };
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.title {
  margin-right: auto;
}

.search-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.search-bar {
  width: 300px;
  height: 30px;
}

.register-button {
  text-decoration: none;
  padding: 8px 12px;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
}

.shoe-row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.shoe-item {
  flex-basis: calc(100% / 7);
  text-align: center;
}

.shoe-image {
  margin-bottom: 10px;
}

.shoe-img {
  width: 120px;
  height: 120px;
}

.shoe-info {
  text-align: left;
}

.shoe-category {
  text-align: left;
}

.shoe-price {
  text-align: right;
}

.shoe-container {
  background-color: #f1f1f1;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.empty {
  flex: 1;
}
</style>