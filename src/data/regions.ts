import { Region } from '../types/school';

export const regions: Region[] = [
  {
    name: 'Adamawa',
    divisions: [
      { name: 'Djérem', towns: ['Tibati', 'Dir', 'Galim'] },
      { name: 'Faro-et-Déo', towns: ['Tignère', 'Faro', 'Galim-Tignère'] },
      { name: 'Mayo-Banyo', towns: ['Banyo', 'Mayo-Darle'] },
      { name: 'Mbéré', towns: ['Meiganga', 'Djohong', 'Ngaoundal'] },
      { name: 'Vina', towns: ['Ngaoundéré', 'Martap', 'Belel'] }
    ]
  },
  {
    name: 'Centre',
    divisions: [
      { name: 'Mfoundi', towns: ['Yaoundé'] },
      { name: 'Mefou-et-Afamba', towns: ['Soa', 'Akono', 'Bikok'] },
      { name: 'Nyong-et-Kellé', towns: ['Eséka', 'Makak', 'Matomb'] },
      { name: 'Lekié', towns: ['Monatélé', 'Evodoula', 'Obala'] },
      { name: 'Mbam-et-Inoubou', towns: ['Bafia', 'Deuk', 'Ombessa'] }
    ]
  },
  {
    name: 'East',
    divisions: [
      { name: 'Boumba-et-Ngoko', towns: ['Yokadouma', 'Moloundou', 'Salapoumbé'] },
      { name: 'Haut-Nyong', towns: ['Abong-Mbang', 'Doumé', 'Lomié'] },
      { name: 'Kadéï', towns: ['Batouri', 'Kenzou', 'Ndelélé'] },
      { name: 'Lom-et-Djérem', towns: ['Bétaré-Oya', 'Garoua-Boulaï', 'Deng-Deng'] }
    ]
  },
  {
    name: 'Far North',
    divisions: [
      { name: 'Diamaré', towns: ['Maroua', 'Bogo', 'Gazawa'] },
      { name: 'Logone-et-Chari', towns: ['Kousséri', 'Makary', 'Fotokol'] },
      { name: 'Mayo-Danay', towns: ['Yagoua', 'Vel', 'Moulvoudaye'] },
      { name: 'Mayo-Kani', towns: ['Kaélé', 'Guidiguis', 'Dziguilao'] },
      { name: 'Mayo-Sava', towns: ['Mora', 'Bourha', 'Kolofata'] },
      { name: 'Mayo-Tsanaga', towns: ['Mokolo', 'Koza', 'Tchéré'] }
    ]
  },
  {
    name: 'Littoral',
    divisions: [
      { name: 'Wouri', towns: ['Douala'] },
      { name: 'Moungo', towns: ['Nkongsamba', 'Mbanga', 'Loum'] },
      { name: 'Nkam', towns: ['Yabassi', 'Yingui'] },
      { name: 'Sanaga-Maritime', towns: ['Edéa', 'Dizangué', 'Mouanko'] }
    ]
  },
  {
    name: 'North',
    divisions: [
      { name: 'Bénoué', towns: ['Garoua', 'Tchollire', 'Dembo'] },
      { name: 'Faro', towns: ['Poli', 'Mayo-Baléo'] },
      { name: 'Mayo-Louti', towns: ['Guider', 'Figuil', 'Mayo-Oulo'] },
      { name: 'Mayo-Rey', towns: ['Tcholliré', 'Rey-Bouba', 'Lagdo'] }
    ]
  },
  {
    name: 'Northwest',
    divisions: [
      { name: 'Boyo', towns: ['Fundong', 'Belo', 'Wum'] },
      { name: 'Bui', towns: ['Kumbo', 'Jakiri', 'Oku'] },
      { name: 'Donga-Mantung', towns: ['Nkambe', 'Ako', 'Misaje'] },
      { name: 'Menchum', towns: ['Wum', 'Benakuma', 'Furu-Awa'] },
      { name: 'Mezam', towns: ['Bamenda', 'Santa', 'Tubah'] },
      { name: 'Momo', towns: ['Mbengwi', 'Batibo', 'Njikwa'] },
      { name: 'Ngoketunjia', towns: ['Ndop', 'Babessi', 'Balikumbat'] }
    ]
  },
  {
    name: 'South',
    divisions: [
      { name: 'Dja-et-Lobo', towns: ['Sangmélima', 'Djoum', 'Mintom'] },
      { name: 'Mvila', towns: ['Ebolowa', 'Mengong', 'Mvangane'] },
      { name: 'Océan', towns: ['Kribi', 'Campo', 'Lolodorf'] },
      { name: 'Vallée-du-Ntem', towns: ['Ambam', 'Olamze', 'Kyé-Ossi'] }
    ]
  },
  {
    name: 'Southwest',
    divisions: [
      { name: 'Fako', towns: ['Limbe', 'Buea', 'Tiko'] },
      { name: 'Koupé-Manengouba', towns: ['Bangem', 'Tombel'] },
      { name: 'Lebialem', towns: ['Menji', 'Wabane'] },
      { name: 'Manyu', towns: ['Mamfe', 'Eyumojock', 'Akwaya'] },
      { name: 'Meme', towns: ['Kumba', 'Mbonge'] },
      { name: 'Ndian', towns: ['Mundemba', 'Toko', 'Dikome-Balue'] }
    ]
  },
  {
    name: 'West',
    divisions: [
      { name: 'Bamboutos', towns: ['Mbouda', 'Galim', 'Batcham'] },
      { name: 'Haut-Nkam', towns: ['Bafang', 'Kekem', 'Bana'] },
      { name: 'Hauts-Plateaux', towns: ['Baham', 'Bamendjou', 'Bangou'] },
      { name: 'Koung-Khi', towns: ['Bandjoun', 'Djebem'] },
      { name: 'Menoua', towns: ['Dschang', 'Fokoué', 'Fongo-Ndeng'] },
      { name: 'Mifi', towns: ['Bafoussam', 'Bafoussam Rural'] },
      { name: 'Mino', towns: ['Tonga', 'Bangou'] },
      { name: 'Ndé', towns: ['Bangangté', 'Bassamba', 'Tonga'] },
      { name: 'Noun', towns: ['Foumban', 'Foumbot', 'Koutaba'] }
    ]
  }
];