import React, { useContext, useState } from 'react';
import { List, ListItem, ListHeader } from 'react-onsenui';

import GlobalContext from '../../contexts/GlobalContext';
import MyPage from '../../components/MyPage';
import WarningAlertDialog from '../../components/WarningAlertDialog';
import CreditsAlertDialog from '../../components/CreditsAlertDialog';
import SettingsUnits from './SettingsUnits';
import SettingsBarType from './SettingsBarType';

const Settings = ({ navigator }) => {
  const { metric, setItem, barType } = useContext(GlobalContext);
  const [warningDialogOpen, setWarningDialogIsOpen] = useState(false);
  const [creditsDialogOpen, setCreditsDialogIsOpen] = useState(false);

  const configDataSource = [
    {
      key: 'onUnitsConfig',
      callback: () =>
        navigator.pushPage({
          component: SettingsUnits,
          props: {
            metric,
            setItem,
          },
        }),
      displayItems: ['Configure Units'],
    },
    {
      key: 'onBarConfig',
      callback: () =>
        navigator.pushPage({
          component: SettingsBarType,
          props: {
            barType,
            setItem,
          },
        }),
      displayItems: ['Configure Bar Type'],
    },
    {
      key: 'onDataClear',
      callback: () => setWarningDialogIsOpen(true),
      displayItems: ['Clear Data'],
    },
  ];

  const infoDataSource = [
    {
      key: 'onCreditsPressed',
      callback: () => setCreditsDialogIsOpen(true),
      displayItems: ['Credits'],
    },
    {
      key: 'onGithubPressed',
      callback: () =>
        (window.location.href = 'https://github.com/nmunson/warmup-reps'),
      displayItems: ['Github'],
    },
    {
      key: 'onIssuesPressed',
      callback: () =>
        (window.location.href =
          'https://github.com/nmunson/warmup-reps/issues'),
      displayItems: ['Issues'],
    },
  ];

  const onDataClear = () => {
    localStorage.clear();
    window.location.reload();
  };

  const renderRow = row => (
    <ListItem key={row.key} tappable onClick={row.callback}>
      <div className="center">{row.displayItems}</div>
    </ListItem>
  );

  return (
    <MyPage headerOptions={{ title: 'Settings' }}>
      <WarningAlertDialog
        dialogOpen={warningDialogOpen}
        setDialogIsOpen={setWarningDialogIsOpen}
        callback={onDataClear}
      />
      <CreditsAlertDialog
        dialogOpen={creditsDialogOpen}
        setDialogIsOpen={setCreditsDialogIsOpen}
      />
      <List
        dataSource={configDataSource}
        renderRow={renderRow}
        renderHeader={() => <ListHeader>Configuration</ListHeader>}
      />
      <List
        dataSource={infoDataSource}
        renderRow={renderRow}
        renderHeader={() => <ListHeader>Information</ListHeader>}
      />
    </MyPage>
  );
};

export default Settings;
