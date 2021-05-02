<template>
  <component :class="classes" :is="component">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Accordion from '../Collapse/Accordion.vue'
import AccordionItem from '../Collapse/AccordionItem.vue'
import ADropdown from '../Dropdown/ADropdown.vue'
import Alert from '../Alert/Alert.vue'
import Anchor from '../Link/Anchor.vue'
import Avatar from '../Avatar/Avatar.vue'
import Badge from '../Badge/Badge.vue'
import BDropdown from '../Dropdown/BDropdown.vue'
import BlockBtn from '../Button/BlockBtn.vue'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs.vue'
import Button from '../Button/Btn.vue'
import BtnGroup from '../Button/BtnGroup.vue'
import Carousel from '../Carousel/Carousel.vue'
import CarouselItem from '../Carousel/Carousel.vue'
import Card from '../Card/Card.vue'
import Column from '../Grid/Column.vue'
import Collapse from '../Collapse/Collapse.vue'
import Container from '../Containers/Container.vue'
import DataTable from '../Table/Table.vue'
import Drawer from '../Nav/Drawer.vue'
import Figure from '../Figure/Figure.vue'
import FormCheck from '../Form/Checkbox.vue'
import FormGroup from '../Form/FormGroup.vue'
import FormFloating from '../Form/FormFloating.vue'
import FormCheckMulti from '../Form/MultiCheckbox.vue'
import FormRadio from '../Form/Radio.vue'
import FormSelect from '../Form/Select.vue'
import FormWrap from '../Form/Wrap.vue'
import FormInput from '../Form/Input.vue'
import FormMultiSelect from '../Form/MultiSelect.vue'
import FormTextarea from '../Form/Textarea.vue'
import HidePrint from '../Display/HidePrint.vue'
import Icon from '../Icon/Icon.vue'
import ListGroup from '../ListGroup/ListGroup.vue'
import ListItem from '../ListGroup/ListItem.vue'
import Modal from '../Modal/Modal.vue'
import Navbar from '../Nav/Navbar.vue'
import Navigation from '../Nav/Nav.vue'
import NumberInput from '../Form/Input.vue'
import Paginate from '../Pagination/Paginate.vue'
import Progress from '../Progress/Progress.vue'
import Row from '../Grid/Row.vue'
import Spinner from '../Spinner/Spinner.vue'
import Toast from '../Alert/Toast.vue'
import TabItem from '../Nav/Tabs/TabItem.vue'
import Tabs from '../Nav/Tabs/Tabs.vue'
import Ui from '../Ui/Ui.vue'
import Wrap from '../Containers/Wrap.vue'

export default defineComponent({
  name: 'Ui',
  components: {
    Accordion,
    AccordionItem,
    ADropdown,
    Alert,
    Anchor,
    Avatar,
    Badge,
    BDropdown,
    BlockBtn,
    BreadCrumbs,
    Button,
    BtnGroup,
    Carousel,
    CarouselItem,
    Card,
    Column,
    Collapse,
    Container,
    DataTable,
    Drawer,
    Figure,
    FormCheck,
    FormCheckMulti,
    FormMultiSelect,
    FormTextarea,
    FormGroup,
    FormFloating,
    FormInput,
    FormSelect,
    FormRadio,
    FormWrap,
    HidePrint,
    Icon,
    ListGroup,
    ListItem,
    Modal,
    Navbar,
    Navigation,
    NumberInput,
    Paginate,
    Progress,
    Row,
    Spinner,
    TabItem,
    Tabs,
    Toast,
    Ui,
    Wrap,
  },
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
    accordion: {
      type: Boolean,
      default: false,
    },
    accordionItem: {
      type: Boolean,
      default: false,
    },
    aDropdown: {
      type: Boolean,
      default: false,
    },
    alert: {
      type: Boolean,
      default: false,
    },
    anchor: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: Boolean,
      default: false,
    },
   badge: {
      type: Boolean,
      default: false,
    },
    bDropdown: {
      type: Boolean,
      default: false,
    },
    blockBtn: {
      type: Boolean,
      default: false,
    },
    breadCrumbs: {
      type: Boolean,
      default: false,
    },
    button: {
      type: Boolean,
      default: false,
    },
    btn: {
      type: Boolean,
      default: false,
    },
    btnGroup: {
      type: Boolean,
      default: false,
    },
    carousel: {
      type: Boolean,
      default: false,
    },
  carouselItem: {
      type: Boolean,
      default: false,
    },
    card: {
      type: Boolean,
      default: false,
    },
    column: {
      type: Boolean,
      default: false,
    },
    col: {
      type: Boolean,
      default: false,
    },
    collapse: {
      type: Boolean,
      default: false,
    },
    container: {
      type: Boolean,
      default: false,
    },
    dataTable: {
      type: Boolean,
      default: false,
    },
    table: {
      type: Boolean,
      default: false,
    },
    drawer: {
      type: Boolean,
      default: false,
    },
    figure: {
      type: Boolean,
      default: false,
    },
    formCheck: {
      type: Boolean,
      default: false,
    },
    formCheckMulti: {
      type: Boolean,
      default: false,
    },
    formMultiSelect: {
      type: Boolean,
      default: false,
    },
    formTextarea: {
      type: Boolean,
      default: false,
    },
   formGroup: {
      type: Boolean,
      default: false,
    },
    formFloating: {
      type: Boolean,
      default: false,
    },
    formInput: {
      type: Boolean,
      default: false,
    },
    formSelect: {
      type: Boolean,
      default: false,
    },
    formRadio: {
      type: Boolean,
      default: false,
    },
    formWrap: {
      type: Boolean,
      default: false,
    },
    HidePrint: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    listGroup: {
      type: Boolean,
      default: false,
    },
    listItem: {
      type: Boolean,
      default: false,
    },
    modal: {
      type: Boolean,
      default: false,
    },
    navbar: {
      type: Boolean,
      default: false,
    },
    navigation: {
      type: Boolean,
      default: false,
    },
    numberInput: {
      type: Boolean,
      default: false,
    },
    paginate: {
      type: Boolean,
      default: false,
    },
    progress: {
      type: Boolean,
      default: false,
    },
    row: {
      type: Boolean,
      default: false,
    },
    spinner: {
      type: Boolean,
      default: false,
    },
    tabItem: {
      type: Boolean,
      default: false,
    },
    tabs: {
      type: Boolean,
      default: false,
    },
    toast: {
      type: Boolean,
      default: false,
    },
    wrap: {
      type: Boolean,
      default: false,
    },
    d: {
      type: [Number, String],
    },
    dSm: {
      type: [Number, String],
    },
    dMd: {
      type: [Number, String],
    },
    dLg: {
      type: [Number, String],
    },
    m: {
      type: [Number, String],
    },
    mx: {
      type: [Number, String],
    },
    ml: {
      type: [Number, String],
    },
    mr: {
      type: [Number, String],
    },
    my: {
      type: [Number, String],
    },
    mt: {
      type: [Number, String],
    },
    mb: {
      type: [Number, String],
    },
    mn: {
      type: [Number, String],
    },
    p: {
      type: [Number, String],
    },
    px: {
      type: [Number, String],
    },
    pl: {
      type: [Number, String],
    },
    pr: {
      type: [Number, String],
    },
    py: {
      type: [Number, String],
    },
    pt: {
      type: [Number, String],
    },
    pb: {
      type: [Number, String],
    },
    pn: {
      type: [Number, String],
    },
  },

  setup(props) {
    const classes = computed(() => {
      const c: any = []

      if (props.container) {
        c.push('container')
      }

      if (props.fluid) {
        c.push('container-fluid')
      }

      if (props.d) {
        c.push(`d-${props.d}`)
      }

      if (props.dSm) {
        c.push(`d-sm-${props.dSm}`)
      }

      if (props.dMd) {
        c.push(`d-md-${props.dMd}`)
      }

      if (props.dLg) {
        c.push(`d-lg-${props.dLg}`)
      }

      if (props.p) {
        c.push(`p-${props.p}`)
      }

      if (props.px) {
        c.push(`px-${props.px}`)
      }

      if (props.pl) {
        c.push(`pl-${props.pl}`)
      }

      if (props.pr) {
        c.push(`pr-${props.pr}`)
      }

      if (props.py) {
        c.push(`py-${props.py}`)
      }

      if (props.pt) {
        c.push(`pt-${props.pt}`)
      }

      if (props.pb) {
        c.push(`pb-${props.pb}`)
      }

      if (props.pn) {
        c.push(`pn-${props.pn}`)
      }

      if (props.m) {
        c.push(`m-${props.m}`)
      }

      if (props.mx) {
        c.push(`mx-${props.mx}`)
      }

      if (props.ml) {
        c.push(`ml-${props.ml}`)
      }

      if (props.mr) {
        c.push(`mr-${props.mr}`)
      }

      if (props.my) {
        c.push(`my-${props.my}`)
      }

      if (props.mt) {
        c.push(`mt-${props.mt}`)
      }

      if (props.mb) {
        c.push(`mb-${props.mb}`)
      }

      if (props.mn) {
        c.push(`mn-${props.mn}`)
      }

      return c.join(' ')
    })

    const component = computed(() => {
      return props.button
        ? Button
        : props.badge
        ? Badge
        : props.container || props.fluid
        ? Container
        : props.accordion
        ? Accordion
        : props.accordionItem
        ? AccordionItem
        : props.aDropdown
        ? ADropdown
        : props.alert
        ? Alert
        : props.anchor
        ? Anchor
        : props.avatar
        ? Avatar
        : props.badge
        ? Badge
        : props.bDropdown
        ? BDropdown
        : props.blockBtn
        ? BlockBtn
        : props.breadCrumbs
        ? BreadCrumbs
        : props.button || props.btn
        ? Button
        : props.btnGroup
        ? BtnGroup
        : props.carousel
        ? Carousel
        : props.carouselItem
        ? CarouselItem
        : props.card
        ? Card
        : props.col || props.column
        ? Column
        : props.collapse
        ? Collapse
        : props.table
        ? DataTable
        : props.drawer
        ? Drawer
        : props.figure
        ? Figure
        : props.checkbox
        ? FormCheck
        : props.multiCheck
        ? FormCheckMulti
        : props.multiSelect
        ? FormMultiSelect
        : props.textarea
        ? FormTextarea
        : props.formGroup
        ? FormGroup
        : props.floating
        ? FormFloating
        : props.input
        ? FormInput
        : props.selct
        ? FormSelect
        : props.radio
        ? FormRadio
        : props.form
        ? FormWrap
        : props.hidePrint
        ? HidePrint
        : props.icon
        ? Icon
        : props.listGroup
        ? ListGroup
        : props.listItem
        ? ListItem
        : props.modal
        ? Modal
        : props.navbar
        ? Navbar
        : props.nav
        ? Navigation
        : props.number
        ? NumberInput
        : props.paginate
        ? Paginate
        : props.progress
        ? Progress
        : props.row
        ? Row
        : props.spinner
        ? Spinner
        : props.tabItem
        ? TabItem
        : props.tabs
        ? Tabs
        : props.toast
        ? Toast
        : Wrap
    })

    return { classes, component }
  },
})
</script>
