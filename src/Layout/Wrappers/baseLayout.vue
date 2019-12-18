<template>
  <div>
    <notifications class="d-print-none" group="flash" position="top center" />
    <div class="d-print-none" @mouseover="isCollapsed = false" @mouseleave="isCollapsed = true">
      <sidebar-menu :menu="menu" :collapsed="isCollapsed" :hideToggle="true" :showChild="true">
        <div slot="header">
          <avatar :username="'Usuario'" class="d-inline-block"></avatar>
        </div>
      </sidebar-menu>
    </div>
    <slot></slot>
  </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faParachuteBox,
  faLayerGroup,
  faObjectGroup
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faParachuteBox,
  faLayerGroup,
  faObjectGroup
);

import Avatar from 'vue-avatar'

export default {
  components: {
    'font-awesome-icon': FontAwesomeIcon,
    Avatar
  },
  data() {
    return {
      menu: [{
          header: true,
          title: 'Menu',
          hidden: true
        },
        {
          href: '/home',
          title: 'Home',
          icon: 'fa fa-school'
        },
        /*{
          href: '/pagina',
          title: 'Pagina',
          icon: 'fas fa-warehouse',
        },
        {
          href: '/pagina-relacion',
          title: 'Pagina Relacion',
          icon: 'far fa-file-alt'
        },
        {
          href: '/pagina-factura',
          title: 'Pagina Factura',
          icon: 'far fa-file-alt'
        }*/
      ],
      isCollapsed: true,
      stitchClient: {},
      selectedCompany: 'DistPro'
    }
  },
  methods: {
    toggleSidebarHover() {
      setTimeout(() => {
        this.isCollapsed = !this.isCollapsed
        console.log('testtt')
      }, 1000)
    }
  },
  computed: {
    
  },
  watch: {
    
  },
  created() {
    
  }
}

</script>
