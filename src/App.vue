<template>
  <div id="app" class="candidates">
    <h2 class="candidates__title">My candidates</h2>
    <preloader v-if="loading" />
    <p v-else-if="error" class="error">{{ error }}</p>
    <table v-else class="candidates__table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Surname</th>
          <th>Occupation</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person, index) in filteredData" :key="index">
          <td>
            <img :src="person.photoUrl" alt="Avatar" width="60" height="60" />
          </td>
          <td>{{ person.firstName }}</td>
          <td>{{ person.lastName }}</td>
          <td>{{ person.jobTitle }}</td>
          <td>
            <button @click="setActive(person)">
              View candidate
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <Modal :data="activeCandidate" @close-modal="activeCandidate = {}" />
  </div>
</template>

<script>
import axios from "axios";
import Modal from "./components/Modal.vue";
import Preloader from "./components/Preloader";

export default {
  name: "app",
  components: {
    Preloader,
    Modal
  },
  data() {
    return {
      candidates: [],
      activeCandidate: {},
      error: "",
      loading: false
    };
  },
  mounted() {
    this.getCandidates();
  },
  computed: {
    filteredData() {
      return this.candidates.filter(person => person.id % 2 === 0);
    }
  },
  methods: {
    async getCandidates() {
      try {
        this.loading = true;
        this.candidates = (
          await axios.get(
            "https://cors-anywhere.herokuapp.com/https://fakedata.dev/users/v1/get_users"
          )
        ).data;
      } catch (e) {
        this.error = "Error while fetching data. Try again";
      } finally {
        this.loading = false;
      }
    },
    setActive(person) {
      this.activeCandidate = person;
    }
  }
};
</script>

<style lang="scss">
@import "assets/styles/base";

.candidates {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 30px;
  &__title {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1.2px;
    margin-bottom: 30px;
    text-transform: capitalize;
  }
  &__table {
    border-collapse: collapse;
    th {
      font-weight: bold;
      padding-bottom: 20px;
    }
    td {
      transition: all 12s ease-in;
    }
  }
}
.error {
  font-size: 16px;
  padding: 30px;
  color: $error;
}
</style>
