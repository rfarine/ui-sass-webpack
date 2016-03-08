import { default as React, Component } from 'react';
import { default as styles } from './Typography.scss';

export default class Typography extends Component {
  render() {
    return (
      <div>
        <h1>Typography</h1>
        <div className={styles.headers}>
          <h2>Headers</h2>
          <h1>h1, .h1</h1>
          <h2>h2, .h2</h2>
          <h3>h3, .h3</h3>
          <h4>h4, .h4</h4>
          <h5>h5, .h5</h5>
          <h6>h6, .h6</h6>
        </div>
        <div className={styles.text}>
          <h2>Paragraphs</h2>
          <p className={styles.bodyText}><strong>.bodyText</strong> - Thundercats keytar gentrify,
          literally iPhone humblebrag actually wolf organic flexitarian. Street art tattooed kitsch,
          hoodie meh YOLO keytar deep v vinyl. Tofu selfies craft beer next level, asymmetrical
          dreamcatcher retro sriracha keffiyeh beard +1 tacos blue bottle street art pitchfork.</p>

          <p className={styles.lgBodyText}><strong>.lgBodyText</strong> - Fashion axe cornhole
          umami tousled keffiyeh XOXO,
          intelligentsia squid. Tattooed meh cred, pug literally kinfolk dreamcatcher hella
          chicharrones. Semiotics ethical gentrify.
          </p>
        </div>
      </div>
    );
  }
}
