<template>
  <ul class="navbar-nav">
    <template v-for="item in items" :key="item">
      <li class="nav-item dropdown" v-if="item.children">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{ item.name }}
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li v-for="child in item.children" :key="child">
            <a class="dropdown-item" href="#">
              {{ child }}
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item" v-else>
        <router-link
          class="nav-link active"
          aria-current="page"
          :to="item.link"
        >
          {{ item }}
        </router-link>
      </li>
    </template>
  </ul>
</template>