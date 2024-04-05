
import SiteBox from './Sitebox';
import './styles.css'; // Import the CSS file

const sites = [
    {
        name: 'Site 1',
        description: 'A descriptive text about Site 1.',
        images: ['https://tse4.mm.bing.net/th?id=OIP.I6tq5uz0d8Ko0lLmJebOAQHaE8&pid=Api&P=0&h=180', 'https://www.traveltourxp.com/wp-content/uploads/2017/01/Top-5-UNESCO-World-Heritage-Sites-Of-Canada.jpg'],
    },
    {
        name: 'Site 2',
        description: 'A descriptive text about Site 2.',
        images: ['https://www.traveltourxp.com/wp-content/uploads/2017/01/Top-5-UNESCO-World-Heritage-Sites-Of-Canada.jpg', 'https://a.cdn-hotels.com/gdcs/production1/d1611/b52b9ee0-708b-11e8-bbf2-0242ac110009.jpg'],
    },
];


function SitesPage() {
  return (
    <div className="sites-page">
      <header style={{ backgroundColor: 'lightgreen' }}>
        <h1>Our Featured Sites</h1>
      </header>
      <div className="site-container">
        {sites.map((site) => (
          <SiteBox key={site.name} {...site} />
        ))}
      </div>
    </div>
  );
}

export default SitesPage;
