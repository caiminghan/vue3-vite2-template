import {
  Input,
  Collapse,
  Button,
  Tag,
  Layout,
  Menu,
  Avatar,
  Tooltip,
  Dropdown,
  Modal,
} from 'ant-design-vue';

export default function antdv(app) {
  app.use(Input);
  app.use(Collapse);
  app.use(Button);
  app.use(Tag);
  app.use(Layout);
  app.use(Menu);
  app.use(Avatar);
  app.use(Tooltip);
  app.use(Dropdown);
  app.use(Modal);

  return app;
}
