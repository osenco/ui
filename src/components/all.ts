import { App as Application } from 'vue';

import Accordion from './Collapse/Accordion.vue';
import AccordionItem from './Collapse/AccordionItem.vue';
import ADropdown from './Dropdown/ADropdown.vue';
import Alert from './Alert/Alert.vue';
import Anchor from './Link/Anchor.vue';
import Avatar from './Avatar/Avatar.vue';
import Badge from './Badge/Badge.vue';
import BDropdown from './Dropdown/BDropdown.vue';
import BlockBtn from './Button/BlockBtn.vue';
import BreadCrumbs from './Breadcrumbs/BreadCrumbs.vue';
import Btn from './Button/Btn.vue';
import BtnGroup from './Button/BtnGroup.vue';
import Carousel from './Carousel/Carousel.vue';
import CarouselItem from './Carousel/Carousel.vue';
import Card from './Card/Card.vue';
import Col from './Grid/Column.vue';
import Collapse from './Collapse/Collapse.vue';
import Container from './Containers/Container.vue';
import DataTable from './Table/Table.vue';
import Drawer from './Nav/Drawer.vue';
import Figure from './Figure/Figure.vue';
import FormCheckbox from './Form/Checkbox.vue';
import FormGroup from './Form/FormGroup.vue';
import FormFloating from './Form/FormFloating.vue';
import FormRadio from './Form/FormRadio.vue';
import FormWrap from './Form/Wrap.vue';
import FormInput from './Form/Input.vue';
import HidePrint from './Display/HidePrint.vue';
import Icon from './Icon/Icon.vue';
import ListGroup from './ListGroup/ListGroup.vue';
import ListItem from './ListGroup/ListItem.vue';
import Modal from './Modal/Modal.vue';
import Navbar from './Nav/Navbar.vue';
import Navigation from './Nav/Nav.vue';
import NumberInput from './Form/Input.vue';
import Paginate from './Pagination/Paginate.vue';
import Progress from './Progress/Progress.vue';
import Row from './Grid/Row.vue';
import Spinner from './Spinner/Spinner.vue';
import Toast from './Alert/Toast.vue';
import TabItem from './Nav/Tabs/TabItem.vue';
import Tabs from './Nav/Tabs/Tabs.vue';
import Ui from './Ui/Ui.vue';

import { registerComponent } from './../utils/plugins/index';

const ui = {
    install(vue: Application) {
        registerComponent(vue, Accordion);
        registerComponent(vue, AccordionItem);
        registerComponent(vue, ADropdown);
        registerComponent(vue, Alert);
        registerComponent(vue, Anchor);
        registerComponent(vue, Avatar);
        registerComponent(vue, Badge);
        registerComponent(vue, BDropdown);
        registerComponent(vue, BlockBtn);
        registerComponent(vue, BreadCrumbs);
        registerComponent(vue, Btn);
        registerComponent(vue, BtnGroup);
        registerComponent(vue, Carousel);
        registerComponent(vue, CarouselItem);
        registerComponent(vue, Card);
        registerComponent(vue, Col);
        registerComponent(vue, Collapse);
        registerComponent(vue, Container);
        registerComponent(vue, DataTable);
        registerComponent(vue, Drawer);
        registerComponent(vue, Figure);
        registerComponent(vue, FormCheckbox);
        registerComponent(vue, FormGroup);
        registerComponent(vue, FormFloating);
        registerComponent(vue, FormInput);
        registerComponent(vue, FormRadio);
        registerComponent(vue, FormWrap);
        registerComponent(vue, HidePrint);
        registerComponent(vue, Icon);
        registerComponent(vue, ListGroup);
        registerComponent(vue, ListItem);
        registerComponent(vue, Modal);
        registerComponent(vue, Navbar);
        registerComponent(vue, Navigation);
        registerComponent(vue, NumberInput);
        registerComponent(vue, Paginate);
        registerComponent(vue, Progress);
        registerComponent(vue, Row);
        registerComponent(vue, Spinner);
        registerComponent(vue, TabItem);
        registerComponent(vue, Tabs);
        registerComponent(vue, Toast);
        registerComponent(vue, Ui);
    }
};

export default ui;

export {
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
    Btn,
    BtnGroup,
    Carousel,
    CarouselItem,
    Card,
    Col,
    Collapse,
    Container,
    DataTable,
    Drawer,
    Figure,
    FormCheckbox,
    FormGroup,
    FormFloating,
    FormInput,
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
    Ui
};