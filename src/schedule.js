import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDABebXH-LXPJWK0-3iE5qIfPp83qdGPkM",
    authDomain: "schedule-312.firebaseapp.com",
    databaseURL: "https://schedule-312.firebaseio.com",
    projectId: "schedule-312",
    storageBucket: "",
    messagingSenderId: "1010797027720",
    appId: "1:1010797027720:web:b1139db17cb9f6553a1a3d"
  };

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

database.ref('monday/' + 0).set({
    time: '08:45 - 10:20',
    lesson: '',
    place: ''
});

database.ref('monday/' + 1).set({
      time: '10:30 - 12:05',
      lesson: 'Урматы лекция',
      place: 'П14'
});

database.ref('users/0').remove()
  .then( () => console.log('successed') );

  firebase.database().ref('/monday/' + 0).once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().lesson) || 'Anonymous';
    // ...
    console.log('readed data & snapshot : ', username, snapshot.val() );
  });

console.log(' firebase : ', firebase, database);

const useStyles = makeStyles(theme => ({
  root: {
    ['@media (min-width: 768px)']: {
      width: '95% !important',
    },
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    ['@media (min-width: 240px)']: {
      width: '95%',
    },
  },
  table: {
    minWidth: 650,
    ['@media (min-width: 240px)']: {
      minWidth: 50
    },
  },
  tableRow: {
    width: 30,
  },
}));

function createData(name, calories, fat, day, protein) {
  return { name, calories, fat, day, protein };
}

const rows = [
  createData('08:45 - 10:20', 237, '', 'Monday', ''),
  createData('10:30 - 12:05', 'Урматы', 'П14', 'Monday','Денисов Александр Михайлович'),
  createData('12:15 - 13:50', 262, '505', 'Monday', 'Данилов Борис Радиславович'),
  createData('14:35 - 16:10', 305, 'П14', 'Monday', 'Ложкин Сергей Андреевич'),
  createData('16:20 - 17:55', 356, '678', 'Monday', 'Головина Светлана Георгиевна'),
  createData('08:45 - 10:20', 356, '', 'Tuesday', ''),
  createData('10:30 - 12:05', 356, 'П13', 'Tuesday', 'Орлов Михайил Владимирович'),
  createData('12:50 - 14:25', 356, 'П5', 'Tuesday', 'Шестаков Олег Владимирович'),
  createData('14:35 - 16:10', 356, 'П5', 'Tuesday', 'Капустин Николай Юрьевич'),
  createData('16:20 - 17:55', 356, '', 'Tuesday', ''),
  createData('08:45 - 10:20', 356, '', 'Wednesday', ''),
  createData('10:30 - 12:05', 356, 'П8', 'Wednesday', 'Андреев Анатолий Васильевич'),
  createData('12:15 - 13:50', 356, 'П13', 'Wednesday', 'Ложкин Сергей Андреевич'),
  createData('14:35 - 16:10', 356, 'everywhere', 'Wednesday', ''),
  createData('16:20 - 17:55', 356, '', 'Wednesday', ''),
  createData('08:45 - 10:20', 356, 'П12', 'Thursday', 'Потапов Михаил Михайлович'),
  createData('10:30 - 12:05', 356, '', 'Thursday', ''),
  createData('12:50 - 14:25', 356, '659', 'Thursday', 'Вишнякова Екатерина Анатольевна'),
  createData('14:35 - 16:10', 356, 'П6', 'Thursday', 'Холодков Вячеслав Георгиевич'),
  createData('16:20 - 17:55', 356, '', 'Thursday', ''),
  createData('08:45 - 10:20', 356, '', 'Friday', ''),
  createData('10:30 - 12:05', 356, '', 'Friday', ''),
  createData('12:50 - 14:25', 356, '', 'Friday', ''),
  createData('14:35 - 16:10', 356, '', 'Friday', ''),
  createData('16:20 - 17:55', 356, '', 'Friday', ''),
  createData('08:45 - 10:20', 356, '507', 'Saturday', 'Поспелова И.И.'),
  createData('10:30 - 12:05', 356, '510', 'Saturday', 'Муратова Наталья Константиновна'),
  createData('12:15 - 13:50', 356, '507', 'Saturday', 'Белолипецкий Александр Алексеевич'),
  createData('14:35 - 16:10', 356, '', 'Saturday', ''),
  createData('16:20 - 17:55', 356, '', 'Saturday', ''),
];

export default function SimpleTable() {
  const classes = useStyles();

  const [lessons, setLessons] = useState(
    {
    	Monday : { 0 : '', 1 : 'Урматы лекция', 2 : 'ОКИ сем', 3: 'ОКИ лекция', 4 : 'Урматы сем' },
      Tuesday : { 0 : '', 1 : 'ОУ лекция', 2 : 'Вер модели лекция', 3: 'Функан лекция', 4 : '' },
      Wednesday : { 0 : '', 1 : 'Стат Физ лекция', 2 : 'ОКИ лекция', 3: 'МФК', 4 : '' },
      Thursday : { 0 : 'МО лекция', 1 : '', 2 : 'Стат физ сем', 3: 'Экономика лекция', 4 : '' },
      Friday : { 0 : 'ВП', 1 : 'ВП', 2 : 'ВП', 3: 'ВП', 4 : 'ВП' },
      Saturday : { 0 : 'Прак', 1 : 'Экономика сем', 2 : 'Актуарка сем с 21/9', 3: '', 4 : '' },
    }
  );

  function handleChange(event) {
    setLessons(event.target.value);
    console.log('input event log : ', event.target.name);
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
        </TableHead>
        <TableBody>
          {rows.map( (row, i) => (
            <>
              { i%5 === 0 &&
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="center" className="table-day">{row.day}</TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              }
              { console.log('row : ', row, i % 5, i, lessons[row.day]) }
              <TableRow key={row.name} className={classes.tableRow}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">
                  <input type="text" value={lessons[row.day][i % 5]} onChange={handleChange} size="40" name={row.name} />
                </TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                {
                  row.protein &&
                  <Tooltip title="istina" placement="top">
                    <TableCell align="center">{row.protein}</TableCell>
                  </Tooltip>
                }
                <TableCell align="center"></TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
