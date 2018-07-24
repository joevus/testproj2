import { helper } from '@ember/component/helper';
// import Moment from 'moment';

export function prettyDate(postDate) {
  let datester = new Date(postDate);
  return `${datester.getMonth() + 1}/${datester.getDate()}/${datester.getFullYear()} ${datester.getHours()}:${datester.getMinutes()}`
  // return Moment(postDate).format('LLL');
}

export default helper(prettyDate);
