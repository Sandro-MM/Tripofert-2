import axios from "axios";
import {getDistance} from "geolib";


export interface searchPlaceInterface {"id": number, "name": string, "country"?: string, "latitude"?: number, "longitude"?: number}


export const cities = [
    {
        "id": 1,
        "name": "Paris",
        "country": "France",
        "latitude": 48.8566,
        "longitude": 2.3522,
        "description": "The iconic capital of France, known for its art, culture, and landmarks like the Eiffel Tower, the Louvre, and Notre-Dame Cathedral. A romantic destination with world-class museums and exquisite cuisine.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/paris.jpg"
    },
    {
        "id": 2,
        "name": "Madrid",
        "country": "Spain",
        "latitude": 40.4168,
        "longitude": -3.7038,
        "description": "Spain’s vibrant capital, famous for its Royal Palace, art museums like the Prado, and lively plazas. A perfect mix of modern city life and rich historical heritage.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/madrid.jpg"
    },
    {
        "id": 4,
        "name": "Saint-Malo",
        "country": "France",
        "latitude": 48.6493,
        "longitude": -2.0257,
        "description": "A beautiful walled city on the coast of Brittany, known for its history of piracy and stunning beaches. The city boasts dramatic seaside views and charming cobblestone streets.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/saint-malo.jpg"
    },
    {
        "id": 232,
        "name": "Aveiro",
        "country": "Portugal",
        "latitude": 40.6443,
        "longitude": -8.6455,
        "description": "Often called the 'Venice of Portugal', Aveiro is famous for its picturesque canals and colorful Moliceiro boats. A coastal city known for its Art Nouveau architecture and salt production.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/aveiro.jpg"
    },
    {
        "id": 233,
        "name": "Braga",
        "country": "Portugal",
        "latitude": 41.5503,
        "longitude": -8.4200,
        "description": "One of Portugal’s oldest cities, Braga is known for its beautiful churches, religious festivals, and the iconic Bom Jesus do Monte sanctuary.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/braga_smaller.jpg"
    },
    {
        "id": 234,
        "name": "Guimarães",
        "country": "Portugal",
        "latitude": 41.4418,
        "longitude": -8.2956,
        "description": "Often called the 'Birthplace of Portugal', Guimarães is rich in medieval architecture, including its well-preserved castle and the Palace of the Dukes of Braganza.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/guimaraes.jpg"
    },
    {
        "id": 235,
        "name": "Viseu",
        "country": "Portugal",
        "latitude": 40.6610,
        "longitude": -7.9097,
        "description": "A charming city in the heart of Portugal known for its historic center, Romanesque architecture, and wine production in the nearby Dão region.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/viseu.jpg"
    },
    {
        "id": 236,
        "name": "Faro",
        "country": "Portugal",
        "latitude": 37.0194,
        "longitude": -7.9304,
        "description": "The gateway to Portugal's Algarve region, Faro is known for its historic old town, Roman walls, and stunning beaches along the Ria Formosa lagoon.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/faro.jpg"
    },
    {
        "id": 237,
        "name": "Castillo de los Moros",
        "country": "Spain",
        "latitude": 37.5971,
        "longitude": -1.0276,
        "description": "An ancient fortress located near Cartagena, Spain. The Castillo de los Moros is a historic site offering panoramic views of the Mediterranean and insights into Spain’s Moorish past.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Castillo%20de%20los%20Moros.jpg"
    },
    {
        "id": 238,
        "name": "Oporto",
        "country": "Portugal",
        "latitude": 41.1496,
        "longitude": -8.6109,
        "description": "Also known as Porto, this city is famous for its port wine, historic Ribeira district, and the stunning Dom Luís I Bridge that crosses the Douro River.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/oporto.jpg"
    },
    {
        "id": 8,
        "name": "Metz",
        "country": "France",
        "latitude": 49.1193,
        "longitude": 6.1757,
        "description": "A city in northeastern France known for its Gothic Saint-Stephen Cathedral, picturesque streets, and a vibrant cultural scene with museums and theaters.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/metz.jpg"
    },
    {
        "id": 9,
        "name": "Montpellier",
        "country": "France",
        "latitude": 43.6108,
        "longitude": 3.8767,
        "description": "A dynamic city in southern France, known for its medieval streets, modern architecture, and proximity to the Mediterranean coast.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Montpellier.jpg"
    },
    {
        "id": 10,
        "name": "Nancy",
        "country": "France",
        "latitude": 48.6921,
        "longitude": 6.1844,
        "description": "Known for its Art Nouveau architecture and the beautiful Place Stanislas, Nancy is a cultural hub with a rich history in eastern France.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/nancy.jpg?t=2024-09-12T10%3A01%3A12.460Z"
    },
    {
        "id": 11,
        "name": "Nantes",
        "country": "France",
        "latitude": 47.2184,
        "longitude": -1.5536,
        "description": "A historic city on the Loire River, Nantes is famous for its castle, Château des Ducs de Bretagne, and vibrant arts scene. It’s also home to the mechanical marvels of Les Machines de l'île.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/nantes.jpg"
    },
    {
        "id": 12,
        "name": "Nice",
        "country": "France",
        "latitude": 43.7102,
        "longitude": 7.2620,
        "description": "A glamorous city on the French Riviera, known for its beautiful beaches, promenades, and cultural festivals. Nice offers stunning Mediterranean views and excellent shopping.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/nice.jpg"
    },
    {
        "id": 13,
        "name": "Nimes",
        "country": "France",
        "latitude": 43.8367,
        "longitude": 4.3601,
        "description": "Known for its well-preserved Roman monuments, including the Nîmes Arena and the Maison Carrée, Nîmes is a treasure trove of ancient history.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Nimes%20.jpg?t=2024-09-17T13%3A00%3A44.606Z"
    },
    {
        "id": 14,
        "name": "Orleans",
        "country": "France",
        "latitude": 47.9020,
        "longitude": 1.9093,
        "description": "Famous for its association with Joan of Arc, Orléans is a beautiful city located on the banks of the Loire River, with stunning cathedrals and a rich medieval history.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Orleans.jpg?t=2024-09-12T10%3A03%3A50.439Z"
    },
    {
        "id": 15,
        "name": "Perpignan",
        "country": "France",
        "latitude": 42.6887,
        "longitude": 2.8948,
        "description": "Close to the Spanish border, Perpignan boasts a blend of French and Catalan cultures, with sunny streets, historic castles, and a vibrant Mediterranean lifestyle.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Perpignan.jpg?t=2024-09-12T10%3A01%3A46.557Z"
    },
    {
        "id": 16,
        "name": "Perigueux",
        "country": "France",
        "latitude": 45.1845,
        "longitude": 0.7217,
        "description": "Located in the Dordogne region, Périgueux is known for its medieval streets, Roman ruins, and gourmet cuisine, particularly its truffles and foie gras.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Perigueux.jpg"
    },
    {
        "id": 17,
        "name": "Poitiers",
        "country": "France",
        "latitude": 46.5802,
        "longitude": 0.3404,
        "description": "A charming city known for its Romanesque architecture and historic sites, including the famous Poitiers Cathedral and the modern Futuroscope theme park.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Poitiers.jpg"
    },
    {
        "id": 165,
        "name": "Granollers",
        "country": "Spain",
        "latitude": 41.6097,
        "longitude": 2.2879,
        "description": "A bustling city near Barcelona, Granollers is known for its vibrant markets, cultural festivals, and modernist architecture.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Granollers.jpg"
    },
    {
        "id": 166,
        "name": "Terrassa",
        "country": "Spain",
        "latitude": 41.5611,
        "longitude": 2.0088,
        "description": "Located near Barcelona, Terrassa is known for its industrial heritage, Romanesque churches, and modernist buildings. It’s also a hub for arts and culture.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Terrassa-MasiaFreixa.jpg"
    },
    {
        "id": 167,
        "name": "Manresa",
        "country": "Spain",
        "latitude": 41.7288,
        "longitude": 1.8239,
        "description": "A historic town in Catalonia, Manresa is known for its Gothic basilica and its deep ties to Ignatius of Loyola, founder of the Jesuits.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Manresa.jpg?t=2024-09-12T09%3A59%3A10.821Z"
    },
    {
        "id": 168,
        "name": "Sabadell",
        "country": "Spain",
        "latitude": 41.5483,
        "longitude": 2.1071,
        "description": "A modern industrial city near Barcelona, Sabadell has a rich cultural scene, parks, and museums, along with vibrant shopping districts.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Sabadell_.jpg"
    },
    {
        "id": 169,
        "name": "Lleida",
        "country": "Spain",
        "latitude": 41.6176,
        "longitude": 0.6200,
        "description": "Lleida is a historic city in Catalonia, known for its ancient cathedral, La Seu Vella, and its position as a gateway to the Pyrenees.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Lleida.jpg"
    },
    {
        "id": 170,
        "name": "Andorra la Vella",
        "country": "Andorra",
        "latitude": 42.5078,
        "longitude": 1.5211,
        "description": "The capital of Andorra, nestled in the Pyrenees mountains, Andorra la Vella is known for its ski resorts, shopping, and stunning mountain scenery.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/andorra-3501173_1920.jpg"
    },
    {
        "id": 5,
        "name": "Saint-Tropez",
        "country": "France",
        "latitude": 43.2674,
        "longitude": 6.6407,
        "description": "A glamorous town on the French Riviera, Saint-Tropez is known for its beautiful beaches, luxury yachts, and vibrant nightlife.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Saint-Tropez.jpg"
    },
    {
        "id": 6,
        "name": "Strasbourg",
        "country": "France",
        "latitude": 48.5734,
        "longitude": 7.7521,
        "description": "A picturesque city on the French-German border, Strasbourg is famous for its Gothic cathedral, medieval architecture, and its role as the seat of European Parliament.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Strasbourg.jpg"
    },
    {
        "id": 7,
        "name": "Marseille",
        "country": "France",
        "latitude": 43.2965,
        "longitude": 5.3698,
        "description": "The oldest city in France, Marseille is known for its historic Old Port, diverse culture, and stunning Mediterranean coastline.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Marseille.jpg"
    },
    {
        "id": 18,
        "name": "Pau",
        "country": "France",
        "latitude": 43.2951,
        "longitude": -0.3708,
        "description": "Located at the foot of the Pyrenees, Pau is known for its stunning views, historic Château de Pau, and its mild climate.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/pau.jpg"
    },
    {
        "id": 19,
        "name": "Reims",
        "country": "France",
        "latitude": 49.2583,
        "longitude": 4.0317,
        "description": "The unofficial capital of France's Champagne region, Reims is known for its magnificent cathedral where French kings were crowned and its world-famous champagne houses.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Reims.jpg"
    },
    {
        "id": 20,
        "name": "Rennes",
        "country": "France",
        "latitude": 48.1173,
        "longitude": -1.6778,
        "description": "A vibrant city in Brittany, Rennes is known for its medieval half-timbered houses, lively student atmosphere, and its historic Saint-Pierre Cathedral.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Rennes.jpg?t=2024-09-12T10%3A04%3A14.060Z"
    },
    {
        "id": 21,
        "name": "Rouen",
        "country": "France",
        "latitude": 49.4432,
        "longitude": 1.0993,
        "description": "Famous for its beautiful Gothic cathedral and its role in the trial of Joan of Arc, Rouen is a city rich in history and culture.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Rouen.jpg"
    },
    {
        "id": 22,
        "name": "Saint-Denis",
        "country": "France",
        "latitude": 48.9362,
        "longitude": 2.3574,
        "description": "Located just north of Paris, Saint-Denis is home to the famous Saint-Denis Basilica, the burial place of French kings, and the Stade de France.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Stade%20de%20France.jpg"
    },
    {
        "id": 23,
        "name": "Saint Florent",
        "country": "France",
        "latitude": 42.6817,
        "longitude": 9.3054,
        "description": "A picturesque seaside town on the island of Corsica, Saint Florent is known for its stunning beaches, historic citadel, and as a gateway to the Cap Corse region.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Saint%20Florent.jpg?t=2024-09-12T10%3A04%3A25.492Z'
    },
    {
        "id": 24,
        "name": "Tarbes",
        "country": "France",
        "latitude": 43.2328,
        "longitude": 0.0722,
        "description": "A gateway to the Pyrenees mountains, Tarbes is known for its pleasant parks, beautiful views, and proximity to the famous pilgrimage site of Lourdes.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Tarbes.jpg"
    },
    {
        "id": 25,
        "name": "Toulouse",
        "country": "France",
        "latitude": 43.6045,
        "longitude": 1.4442,
        "description": "Nicknamed 'La Ville Rose' for its pink terracotta buildings, Toulouse is a bustling city known for its aerospace industry and vibrant cultural scene.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Toulouse.jpg"
    },
    {
        "id": 26,
        "name": "Agen",
        "country": "France",
        "latitude": 44.2049,
        "longitude": 0.6163,
        "description": "Known for its famous prunes, Agen is a charming town in the Lot-et-Garonne region, with picturesque streets and a rich agricultural history.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Agen.jpg"
    },
    {
        "id": 27,
        "name": "Ajaccio",
        "country": "France",
        "latitude": 41.9192,
        "longitude": 8.7386,
        "description": "The birthplace of Napoleon Bonaparte, Ajaccio is the capital of Corsica, offering beautiful beaches, a rich history, and stunning Mediterranean landscapes.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Ajaccio.jpg?t=2024-09-12T09%3A56%3A13.684Z"
    },
    {
        "id": 28,
        "name": "Albi",
        "country": "France",
        "latitude": 43.9298,
        "longitude": 2.148,
        "description": "A UNESCO World Heritage site, Albi is known for its striking red-brick cathedral, Sainte-Cécile, and its charming old town along the Tarn River.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Albi.jpg"
    },
    {
        "id": 29,
        "name": "Amiens",
        "country": "France",
        "latitude": 49.8941,
        "longitude": 2.2951,
        "description": "Amiens is known for its stunning Gothic cathedral, the largest in France, and its beautiful floating gardens called 'hortillonnages.'",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Amiens.jpg"
    },
    {
        "id": 30,
        "name": "Angers",
        "country": "France",
        "latitude": 47.4784,
        "longitude": -0.5632,
        "description": "Angers, located in the Loire Valley, is famous for its medieval Château d'Angers and the beautiful Apocalypse Tapestry housed inside.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/angers.jpg?t=2024-09-14T14%3A56%3A55.264Z"
    },
    {
        "id": 31,
        "name": "Annecy",
        "country": "France",
        "latitude": 45.8992,
        "longitude": 6.1294,
        "description": "Known as the 'Venice of the Alps,' Annecy enchants visitors with its crystal-clear lake, canals, and medieval old town.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/annecy-4933126_1920.jpg"
    },
    {
        "id": 32,
        "name": "Antibes",
        "country": "France",
        "latitude": 43.5804,
        "longitude": 7.1251,
        "description": "A charming coastal town on the French Riviera, Antibes is famous for its Picasso Museum, beautiful beaches, and historic old town.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Antibes.jpg"
    },
    {
        "id": 33,
        "name": "Arles",
        "country": "France",
        "latitude": 43.6768,
        "longitude": 4.627,
        "description": "Arles is known for its Roman monuments, including an amphitheater, and its connection to the famous painter Vincent van Gogh.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Arles.jpg"
    },
    {
        "id": 34,
        "name": "Arras",
        "country": "France",
        "latitude": 50.292,
        "longitude": 2.7775,
        "description": "Arras boasts beautiful Flemish Baroque architecture and is home to the Grand'Place, a UNESCO World Heritage site.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Arras.jpg"
    },
    {
        "id": 35,
        "name": "Avignon",
        "country": "France",
        "latitude": 43.9493,
        "longitude": 4.8055,
        "description": "Famous for its well-preserved medieval ramparts and the Palais des Papes, Avignon is a key cultural city in the Provence region.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Avignon.jpg?t=2024-09-12T09%3A57%3A53.029Z"
    },
    {
        "id": 36,
        "name": "Aix-en-Provence",
        "country": "France",
        "latitude": 43.5297,
        "longitude": 5.4474,
        "description": "Aix-en-Provence is known for its elegant streets, vibrant markets, and its connection to the painter Paul Cézanne.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Aix-en-Provence%202.jpg'
    },
    {
        "id": 37,
        "name": "Aubagne",
        "country": "France",
        "latitude": 43.2923,
        "longitude": 5.5708,
        "description": "Nestled in the hills near Marseille, Aubagne is famous for its pottery and the picturesque landscapes that inspired writer Marcel Pagnol.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Aubagne.jpeg'
    },
    {
        "id": 38,
        "name": "Auxerre",
        "country": "France",
        "latitude": 47.7982,
        "longitude": 3.5678,
        "description": "A historic town on the River Yonne, Auxerre is known for its Gothic cathedral and beautifully preserved medieval architecture.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Auxerre.jpg?t=2024-09-14T14%3A57%3A43.209Z"
    },
    {
        "id": 39,
        "name": "Bayonne",
        "country": "France",
        "latitude": 43.4929,
        "longitude": -1.4748,
        "description": "Bayonne, located in the Basque Country, is famous for its festive spirit, traditional architecture, and delicious chocolate.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Bayonne.jpg"
    },
    {
        "id": 40,
        "name": "Beauvais",
        "country": "France",
        "latitude": 49.4294,
        "longitude": 2.0886,
        "description": "Beauvais is renowned for its Gothic cathedral, which boasts the highest Gothic choir in the world.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Beauvais.jpg?t=2024-09-14T14%3A59%3A44.188Z"
    },
    {
        "id": 41,
        "name": "Besancon",
        "country": "France",
        "latitude": 47.2378,
        "longitude": 6.0241,
        "description": "Besançon, set in a loop of the Doubs River, is known for its impressive citadel designed by Vauban and its rich watchmaking heritage.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Besancon.jpg"
    },
    {
        "id": 42,
        "name": "Biarritz",
        "country": "France",
        "latitude": 43.4832,
        "longitude": -1.5586,
        "description": "A glamorous seaside town on France’s Atlantic coast, Biarritz is famous for its surfing beaches and luxurious resorts.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Biarritz.jpg"
    },
    {
        "id": 43,
        "name": "Blois",
        "country": "France",
        "latitude": 47.5861,
        "longitude": 1.3359,
        "description": "Blois is a charming city in the Loire Valley, known for its Renaissance Château de Blois and its historic old town.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Blois.jpg?t=2024-09-14T14%3A59%3A19.754Z"
    },
    {
        "id": 44,
        "name": "Bordeaux",
        "country": "France",
        "latitude": 44.8378,
        "longitude": -0.5792,
        "description": "Bordeaux is known for its world-class wine, beautiful 18th-century architecture, and the scenic Garonne River.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Bordeaux.jpg?t=2024-09-14T14%3A59%3A06.582Z"
    },
    {
        "id": 45,
        "name": "Bourges",
        "country": "France",
        "latitude": 47.081,
        "longitude": 2.3988,
        "description": "Bourges is a historical city renowned for its Gothic cathedral, Saint-Étienne, a UNESCO World Heritage site.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Bourges.jpg?t=2024-09-14T14%3A59%3A31.624Z"
    },
    {
        "id": 46,
        "name": "Brest",
        "country": "France",
        "latitude": 48.3904,
        "longitude": -4.4861,
        "description": "Located in Brittany, Brest is a major naval port and offers scenic ocean views and maritime history.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/brest.jpg?t=2024-09-14T15%3A00%3A55.118Z"
    },
    {
        "id": 47,
        "name": "Caen",
        "country": "France",
        "latitude": 49.1829,
        "longitude": -0.3707,
        "description": "Caen is famous for its role in the Normandy landings and its impressive medieval landmarks, such as the Château de Caen.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Caen.jpg"
    },
    {
        "id": 48,
        "name": "Calais",
        "country": "France",
        "latitude": 50.9513,
        "longitude": 1.8587,
        "description": "A major port city, Calais is the closest French town to England and is known for the iconic Burghers of Calais statue by Rodin.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/calais-2719600_1280.jpg"
    },
    {
        "id": 49,
        "name": "Cannes",
        "country": "France",
        "latitude": 43.5528,
        "longitude": 7.0174,
        "description": "Cannes, famed for its annual film festival, offers luxury beaches, high-end shopping, and a charming old town.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Cannes%202.jpg"
    },
    {
        "id": 50,
        "name": "Carcassonne",
        "country": "France",
        "latitude": 43.2124,
        "longitude": 2.3537,
        "description": "Carcassonne is known for its medieval walled city, which is one of the most well-preserved in Europe and a UNESCO World Heritage site.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Carcassonne.jpg"
    },
    {
        "id": 51,
        "name": "Chambery",
        "country": "France",
        "latitude": 45.5646,
        "longitude": 5.9178,
        "description": "A gateway to the Alps, Chambéry boasts a rich history with its Château des Ducs de Savoie and charming old town.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Chambery.jpg"
    },
    {
        "id": 52,
        "name": "Clermont-Ferrand",
        "country": "France",
        "latitude": 45.7772,
        "longitude": 3.087,
        "description": "Nestled in a volcanic region, Clermont-Ferrand is known for its black lava stone cathedral and its annual short film festival.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Clermont-Ferrand.jpg?t=2024-09-14T15%3A02%3A58.387Z"
    },
    {
        "id": 53,
        "name": "Colmar",
        "country": "France",
        "latitude": 48.079,
        "longitude": 7.3585,
        "description": "Colmar is a picturesque town in the Alsace region, famed for its half-timbered houses, canals, and delightful wine route.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Colmar.jpg"
    },
    {
        "id": 54,
        "name": "Dijon",
        "country": "France",
        "latitude": 47.322,
        "longitude": 5.0415,
        "description": "Dijon, capital of Burgundy, is renowned for its mustard, fine wines, and well-preserved medieval and Renaissance buildings.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Dijon.jpg?t=2024-09-14T15%3A04%3A01.862Z"
    },
    {
        "id": 55,
        "name": "Dunkirk",
        "country": "France",
        "latitude": 51.0344,
        "longitude": 2.3768,
        "description": "Dunkirk is known for its pivotal role in World War II and its vibrant annual carnival, one of the most famous in France.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/dunkirk.jpg?t=2024-09-14T15%3A04%3A11.821Z"
    },
    {
        "id": 56,
        "name": "Foix",
        "country": "France",
        "latitude": 42.967,
        "longitude": 1.6055,
        "description": "Foix is a charming town nestled in the Pyrenees, known for its medieval castle and stunning mountain scenery.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Foix.jpg?t=2024-09-14T15%3A03%3A31.472Z"
    },
    {
        "id": 57,
        "name": "Fontainebleau",
        "country": "France",
        "latitude": 48.403,
        "longitude": 2.7016,
        "description": "Fontainebleau is famous for its opulent royal château and its surrounding forest, a popular destination for hiking and rock climbing.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Fontainebleau.jpg"
    },
    {
        "id": 58,
        "name": "Grenoble",
        "country": "France",
        "latitude": 45.1885,
        "longitude": 5.7245,
        "description": "Grenoble, located at the foot of the French Alps, is known for its winter sports, scenic cable cars, and rich history.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Grenoble.jpg?t=2024-09-14T15%3A03%3A09.750Z"
    },
    {
        "id": 59,
        "name": "Hyeres",
        "country": "France",
        "latitude": 43.1179,
        "longitude": 6.1286,
        "description": "Hyères is a beautiful coastal town known for its medieval Old Town and its proximity to the scenic Îles d'Hyères.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Hyeres.jpg"
    },
    {
        "id": 60,
        "name": "La Rochelle",
        "country": "France",
        "latitude": 46.1591,
        "longitude": -1.1511,
        "description": "La Rochelle is a historic port city with picturesque towers, a vibrant marina, and the famous Aquarium of La Rochelle.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/La%20Rochelle.jpg"
    },
    {
        "id": 61,
        "name": "Le Havre",
        "country": "France",
        "latitude": 49.4944,
        "longitude": 0.1079,
        "description": "Le Havre, a UNESCO-listed city, is known for its modernist architecture and cultural attractions like the Musée Malraux.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Le%20Havre%20(2).jpg'
    },
    {
        "id": 62,
        "name": "Le Mans",
        "country": "France",
        "latitude": 48.0061,
        "longitude": 0.1996,
        "description": "Le Mans is famous for its 24-hour car race and its beautifully preserved medieval Old Town, the Cité Plantagenêt.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Le%20Mans.jpg'
    },
    {
        "id": 63,
        "name": "Le Puy-en-Velay",
        "country": "France",
        "latitude": 45.0434,
        "longitude": 3.885,
        "description": "Le Puy-en-Velay is a pilgrimage town known for its dramatic volcanic landscape and the iconic Notre-Dame-du-Puy Cathedral.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/le-puy-en-velay-1376290_1920.jpg"
    },
    {
        "id": 64,
        "name": "Lille",
        "country": "France",
        "latitude": 50.6292,
        "longitude": 3.0573,
        "description": "Lille is a vibrant city near the Belgian border, famous for its rich Flemish heritage, art museums, and lively markets.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Lille%202.jpg"
    },
    {
        "id": 65,
        "name": "Limoges",
        "country": "France",
        "latitude": 45.8336,
        "longitude": 1.2611,
        "description": "Limoges is renowned for its fine porcelain production and its medieval architecture, including the stunning Saint-Etienne Cathedral.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Limoges.jpg'
    },
    {
        "id": 66,
        "name": "Lyon",
        "country": "France",
        "latitude": 45.764,
        "longitude": 4.8357,
        "description": "Lyon, a UNESCO World Heritage site, is famed for its gastronomy, vibrant cultural scene, and well-preserved Roman and Renaissance architecture.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Lyon.jpg"
    },
    {
        "id": 67,
        "name": "Mâcon",
        "country": "France",
        "latitude": 46.3066,
        "longitude": 4.8287,
        "description": "Mâcon is a charming town in the Burgundy wine region, known for its picturesque riverside and excellent vineyards.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Macon.jpg"
    },
    {
        "id": 68,
        "name": "Segovia",
        "country": "Spain",
        "latitude": 40.9429,
        "longitude": -4.108,
        "description": "Segovia is a historic city famous for its Roman aqueduct, stunning cathedral, and the fairy-tale-like Alcázar castle.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Segovia.jpg"
    },
    {
        "id": 69,
        "name": "A Coruña",
        "country": "Spain",
        "latitude": 43.3623,
        "longitude": -8.4115,
        "description": "A Coruña is a coastal city in Galicia, known for its picturesque old town, Tower of Hercules, and bustling port.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/coruna-174099_1920.jpg"
    },
    {
        "id": 70,
        "name": "Alava",
        "country": "Spain",
        "latitude": 42.8514,
        "longitude": -2.6691,
        "description": "Álava is a province in the Basque Country, offering beautiful landscapes, historical sites, and renowned vineyards in Rioja Alavesa.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/alava.jpg?t=2024-09-14T14%3A57%3A14.054Z"
    },
    {
        "id": 71,
        "name": "Albacete",
        "country": "Spain",
        "latitude": 38.9943,
        "longitude": -1.8585,
        "description": "Albacete is known for its rich history, excellent Manchego cheese, and vibrant knife-making industry.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Albacete.jpg?t=2024-09-14T14%3A57%3A29.894Z"
    },
    {
        "id": 72,
        "name": "Alicante",
        "country": "Spain",
        "latitude": 38.3452,
        "longitude": -0.481,
        "description": "Alicante is a sunny Mediterranean city famous for its beaches, the imposing Santa Bárbara Castle, and lively festivals.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Alicante.jpg"
    },
    {
        "id": 73,
        "name": "Almería",
        "country": "Spain",
        "latitude": 36.834,
        "longitude": -2.4637,
        "description": "Almería offers stunning beaches, ancient fortresses like the Alcazaba, and is close to the unique landscapes of Cabo de Gata.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Almeria.jpg?t=2024-09-14T14%3A57%3A57.782Z'
    },
    {
        "id": 74,
        "name": "Asturias",
        "country": "Spain",
        "latitude": 43.3614,
        "longitude": -5.8593,
        "description": "Asturias is known for its rugged coastlines, Picos de Europa mountains, and its rich culinary tradition, including cider and fabada.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Asturias.jpg"
    },
    {
        "id": 75,
        "name": "Avila",
        "country": "Spain",
        "latitude": 40.6565,
        "longitude": -4.6816,
        "description": "Ávila is a walled city that boasts medieval charm, Gothic architecture, and is the birthplace of Saint Teresa of Ávila.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/avila.jpg"
    },
    {
        "id": 76,
        "name": "Badajoz",
        "country": "Spain",
        "latitude": 38.8794,
        "longitude": -6.9706,
        "description": "Badajoz is a historic city near the Portuguese border, known for its Alcazaba fortress and rich cultural heritage.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Badajoz.jpg"
    },
    {
        "id": 77,
        "name": "Barcelona",
        "country": "Spain",
        "latitude": 41.3851,
        "longitude": 2.1734,
        "description": "Barcelona is a vibrant city famous for Gaudí’s architecture, including the Sagrada Família, and its beautiful Mediterranean beaches.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/barcelona.jpg"
    },
    {
        "id": 78,
        "name": "Burgos",
        "country": "Spain",
        "latitude": 42.3439,
        "longitude": -3.6969,
        "description": "Burgos is a historic city, home to the stunning Gothic Burgos Cathedral and a major stop on the Camino de Santiago.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/burgos-3551330_1920.jpg"
    },
    {
        "id": 79,
        "name": "Caceres",
        "country": "Spain",
        "latitude": 39.4699,
        "longitude": -6.3708,
        "description": "Cáceres is known for its UNESCO-listed Old Town, featuring medieval architecture and ancient towers.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Caceres.jpg"
    },
    {
        "id": 80,
        "name": "Cadiz",
        "country": "Spain",
        "latitude": 36.5271,
        "longitude": -6.2886,
        "description": "Cádiz is a coastal city with a rich maritime history, beautiful beaches, and an ancient old town dating back over 3,000 years.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Cadiz.jpg"
    },
    {
        "id": 81,
        "name": "Cantabria",
        "country": "Spain",
        "latitude": 43.1828,
        "longitude": -3.9878,
        "description": "Cantabria is known for its rugged coastline, scenic landscapes, and prehistoric caves like Altamira.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/Cantabria.jpg"
    },
    {
        "id": 82,
        "name": "Castellon",
        "country": "Spain",
        "latitude": 39.9864,
        "longitude": -0.0513,
        "description": "Castellón is a sunny Mediterranean city famous for its beaches, mountainous hinterlands, and vibrant cultural festivals.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Castellon.jpg"
    },
    {
        "id": 83,
        "name": "Ceuta",
        "country": "Spain",
        "latitude": 35.8894,
        "longitude": -5.3198,
        "description": "Ceuta, located on the North African coast, is a Spanish autonomous city known for its multicultural heritage and strategic location.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Ceuta.jpg"
    },
    {
        "id": 84,
        "name": "Ciudad Real",
        "country": "Spain",
        "latitude": 38.9848,
        "longitude": -3.927,
        "description": "Ciudad Real is a historic city in La Mancha, known for its connection to Don Quixote and windmills dotting the surrounding countryside.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Ciudad%20Real.jpg"
    },
    {
        "id": 86,
        "name": "Cuenca",
        "country": "Spain",
        "latitude": 40.0704,
        "longitude": -2.1374,
        "description": "Cuenca is renowned for its dramatic cliffs and 'hanging houses,' as well as its beautifully preserved medieval old town.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Cuenca.jpg"
    },
    {
        "id": 87,
        "name": "Formentera",
        "country": "Spain",
        "latitude": 38.7069,
        "longitude": 1.436,
        "description": "Formentera is a small Balearic island known for its pristine beaches, crystal-clear waters, and relaxed vibe.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Formentera.jpg"
    },
    {
        "id": 88,
        "name": "Girona",
        "country": "Spain",
        "latitude": 41.9794,
        "longitude": 2.8214,
        "description": "Girona is a picturesque city with well-preserved medieval architecture, the Jewish Quarter, and the famous Onyar River houses.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/girona.jpg"
    },
    {
        "id": 89,
        "name": "Granada",
        "country": "Spain",
        "latitude": 37.1773,
        "longitude": -3.5986,
        "description": "Granada is home to the Alhambra Palace, a masterpiece of Moorish architecture, and the stunning Sierra Nevada mountains.",
        "image": "https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Alhambra%20granada%20.jpg"
    },
    {
        "id": 90,
        "name": "Guadalajara",
        "country": "Spain",
        "latitude": 40.628,
        "longitude": -3.1618,
        "description": "Guadalajara is known for its historic palaces, the Alcázar, and its close proximity to Madrid, offering a blend of modern and ancient charm.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/guadalajara.jpg'
    },
    {
        "id": 91,
        "name": "Guipuzcoa",
        "country": "Spain",
        "latitude": 43.1828,
        "longitude": -2.3897,
        "description": "Guipúzcoa is a province in the Basque Country, known for its beautiful beaches, rugged mountains, and rich cultural traditions.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Guipuzcoa.jpg'
    },
    {
        "id": 93,
        "name": "Huesca",
        "country": "Spain",
        "latitude": 42.1401,
        "longitude": -0.4089,
        "description": "Huesca is a gateway to the Pyrenees, offering stunning landscapes, medieval architecture, and a rich history.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Huesca.jpg'
    },
    {
        "id": 94,
        "name": "Ibiza",
        "country": "Spain",
        "latitude": 38.9067,
        "longitude": 1.4206,
        "description": "Ibiza is a Balearic island known for its vibrant nightlife, stunning beaches, and UNESCO-listed Old Town, Dalt Vila.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Ibiza.jpg'
    },
    {
        "id": 96,
        "name": "La Rioja",
        "country": "Spain",
        "latitude": 42.2871,
        "longitude": -2.5396,
        "description": "La Rioja is famous for its world-class wine, rolling vineyards, and picturesque countryside dotted with charming villages.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/La%20Rioja.jpg'
    },
    {
        "id": 97,
        "name": "Las Palmas de Gran Canaria",
        "country": "Spain",
        "latitude": 28.1235,
        "longitude": -15.4363,
        "description": "Las Palmas is a bustling city on Gran Canaria, known for its beaches, historical sites, and vibrant mix of cultures.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Las%20Palmas%20de%20Gran%20Canaria.jpg'
    },
    {
        "id": 98,
        "name": "Gran Canaria",
        "country": "Spain",
        "latitude": 27.9202,
        "longitude": -15.5476,
        "description": "Gran Canaria offers diverse landscapes, from golden beaches to volcanic mountains, and is a popular destination for nature lovers and sunseekers.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Gran%20Canaria.jpg'
    },
    {
        "id": 99,
        "name": "Fuerteventura",
        "country": "Spain",
        "latitude": 28.3587,
        "longitude": -14.0537,
        "description": "Fuerteventura is known for its stunning sand dunes, crystal-clear waters, and world-class windsurfing spots.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Fuerteventura.jpg'
    },
    {
        "id": 100,
        "name": "Lanzarote",
        "country": "Spain",
        "latitude": 29.0469,
        "longitude": -13.5899,
        "description": "Lanzarote is famous for its lunar landscapes, volcanic terrain, and César Manrique’s architectural works.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Lanzarote.jpg'
    },
    {
        "id": 101,
        "name": "Leon",
        "country": "Spain",
        "latitude": 42.5987,
        "longitude": -5.5671,
        "description": "León is a historic city on the Camino de Santiago, home to a stunning Gothic cathedral and medieval architecture.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/leon.jpg'
    },
    {
        "id": 102,
        "name": "Lerida",
        "country": "Spain",
        "latitude": 41.6148,
        "longitude": 0.6214,
        "description": "Lleida (Lerida) is a historic city in Catalonia, known for its ancient fortresses and vibrant cultural scene.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Lleida_-_panoramio_-_Jorge_Franganillo.jpg'
    },
    {
        "id": 103,
        "name": "Lugo",
        "country": "Spain",
        "latitude": 43.0121,
        "longitude": -7.555,
        "description": "Lugo is renowned for its intact Roman walls, which encircle the old town and are a UNESCO World Heritage Site.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/lugo-6955918_1920.jpg'
    },
    {
        "id": 104,
        "name": "Malaga",
        "country": "Spain",
        "latitude": 36.7213,
        "longitude": -4.4214,
        "description": "Málaga is a vibrant city on the Costa del Sol, known for its beaches, Picasso Museum, and historic Alcazaba fortress.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/malaga3.jpg'
    },
    {
        "id": 105,
        "name": "Mallorca",
        "country": "Spain",
        "latitude": 39.6953,
        "longitude": 3.0176,
        "description": "Mallorca is the largest Balearic Island, famous for its beautiful beaches, stunning mountain ranges, and historic towns.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Mallorca.jpg'
    },
    {
        "id": 106,
        "name": "Menorca",
        "country": "Spain",
        "latitude": 39.9496,
        "longitude": 4.1109,
        "description": "Menorca is a peaceful island known for its turquoise waters, sandy beaches, and relaxed atmosphere.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Menorca.jpg'
    },
    {
        "id": 107,
        "name": "Murcia",
        "country": "Spain",
        "latitude": 37.9922,
        "longitude": -1.1307,
        "description": "Murcia is a historic city with Baroque architecture, vibrant markets, and a rich cultural heritage.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Murcia.jpg'
    },
    {
        "id": 108,
        "name": "Navarra",
        "country": "Spain",
        "latitude": 42.6954,
        "longitude": -1.6761,
        "description": "Navarra is known for its diverse landscapes, including the Pyrenees, and the famous Running of the Bulls in Pamplona.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Pamplona%20Navarra.jpg'
    },
    {
        "id": 109,
        "name": "Orense",
        "country": "Spain",
        "latitude": 42.3344,
        "longitude": -7.8639,
        "description": "Orense (Ourense) is famous for its thermal springs and historic bridges, offering a mix of relaxation and history.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Ourense.jpg'
    },
    {
        "id": 110,
        "name": "Palencia",
        "country": "Spain",
        "latitude": 42.0096,
        "longitude": -4.527,
        "description": "Palencia is known for its Gothic cathedral, Romanesque churches, and peaceful parks in the heart of Castile and León.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Palencia.jpg'
    },
    {
        "id": 111,
        "name": "Pontevedra",
        "country": "Spain",
        "latitude": 42.431,
        "longitude": -8.6444,
        "description": "Pontevedra is a charming Galician town with a historic old quarter, lively plazas, and beautiful churches.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Pontevedra.jpg'
    },
    {
        "id": 113,
        "name": "Santa Cruz de Tenerife",
        "country": "Spain",
        "latitude": 28.4636,
        "longitude": -16.2518,
        "description": "Santa Cruz de Tenerife is the capital of Tenerife, known for its beautiful beaches, vibrant Carnival, and modernist architecture.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Santa%20Cruz%20de%20Tenerife.jpg?t=2024-09-17T13%3A00%3A06.242Z'
    },
    {
        "id": 114,
        "name": "Tenerife",
        "country": "Spain",
        "latitude": 28.2916,
        "longitude": -16.6291,
        "description": "Tenerife is the largest of the Canary Islands, famous for its black-sand beaches, the towering Mount Teide, and year-round sunshine.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Tenerife.jpg'
    },
    {
        "id": 115,
        "name": "La Gomera",
        "country": "Spain",
        "latitude": 28.101,
        "longitude": -17.1487,
        "description": "La Gomera is a tranquil Canary Island with lush forests, stunning cliffs, and unique whistling language, Silbo Gomero.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/La%20Gomera.jpg'
    },
    {
        "id": 116,
        "name": "La Palma",
        "country": "Spain",
        "latitude": 28.6846,
        "longitude": -17.7647,
        "description": "La Palma, also known as the 'Beautiful Island,' is a green paradise with volcanic landscapes and excellent hiking trails.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/La%20Palma.jpg'
    },
    {
        "id": 117,
        "name": "El Hierro",
        "country": "Spain",
        "latitude": 27.7462,
        "longitude": -18.0204,
        "description": "El Hierro is the smallest of the Canary Islands, known for its rugged coastline, clear waters, and sustainable energy initiatives.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Canary%20Islands%20El%20Hierro.jpg'
    },
    {
        "id": 118,
        "name": "Sevilla",
        "country": "Spain",
        "latitude": 37.3886,
        "longitude": -5.9823,
        "description": "Sevilla is a historic Andalusian city, famous for its Flamenco music, Gothic cathedral, and stunning Alcázar palace.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Alcazar%20palace%20sevilla.jpg'
    },
    {
        "id": 119,
        "name": "Soria",
        "country": "Spain",
        "latitude": 41.7636,
        "longitude": -2.4645,
        "description": "Soria is a peaceful town in Castile and León, known for its Romanesque architecture and natural beauty along the Duero River.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Soria_-_P7234619_edited.jpg'
    },

    {
        "id": 121,
        "name": "Teruel",
        "country": "Spain",
        "latitude": 40.3438,
        "longitude": -1.1065,
        "description": "Teruel is famous for its Mudejar architecture, recognized as a UNESCO World Heritage Site, and its medieval towers.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/albarracin-%20Teruel1494760_1920.jpg'
    },
    {
        "id": 122,
        "name": "Toledo",
        "country": "Spain",
        "latitude": 39.8628,
        "longitude": -4.0273,
        "description": "Toledo, often referred to as 'The Imperial City,' is renowned for its rich history, medieval streets, and the Alcázar of Toledo.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Toledo%202.jpg'
    },
    {
        "id": 123,
        "name": "Valencia",
        "country": "Spain",
        "latitude": 39.4699,
        "longitude": -0.3763,
        "description": "Valencia is a dynamic city on Spain's east coast, known for its futuristic architecture, beaches, and the famous dish, paella.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Valencia%20.jpg'
    },
    {
        "id": 124,
        "name": "Valladolid",
        "country": "Spain",
        "latitude": 41.6523,
        "longitude": -4.7245,
        "description": "Valladolid is a historic city with a rich cultural heritage, featuring Renaissance architecture and lively squares.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Valladolid.jpg'
    },
    {
        "id": 125,
        "name": "Vizcaya",
        "country": "Spain",
        "latitude": 43.251,
        "longitude": -2.9263,
        "description": "Vizcaya (Biscay) is a province in the Basque Country, known for its scenic coastline, Bilbao's Guggenheim Museum, and vibrant culture.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Vizcaya%20Bilbao.jpg'
    },
    {
        "id": 126,
        "name": "Zamora",
        "country": "Spain",
        "latitude": 41.5033,
        "longitude": -5.7441,
        "description": "Zamora is a city rich in Romanesque architecture, featuring numerous historic churches and a stunning medieval castle.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Zamora%202.jpg'
    },
    {
        "id": 127,
        "name": "Zaragoza",
        "country": "Spain",
        "latitude": 41.649,
        "longitude": -0.8859,
        "description": "Zaragoza is a vibrant city known for its stunning Basilica del Pilar, Roman history, and lively cultural festivals.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Zaragoza%20good.jpg'
    },
    {
        "id": 128,
        "name": "Andorra la Vella",
        "country": "Andorra",
        "latitude": 42.5078,
        "longitude": 1.5211,
        "description": "Andorra la Vella is the capital of Andorra, a picturesque town nestled in the Pyrenees, known for its ski resorts and tax-free shopping.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Andorra%20la%20Vella.jpg'
    },
    {
        "id": 129,
        "name": "San Sebastián",
        "country": "Spain",
        "latitude": 43.3183,
        "longitude": -1.9812,
        "description": "San Sebastián, located in the Basque Country, is renowned for its stunning beaches, world-class cuisine, and picturesque bay.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/san_sebastian/david-vives-w0YXhleG-KE-unsplash.jpg'
    },
    {
        "id": 130,
        "name": "Pamplona",
        "country": "Spain",
        "latitude": 42.8125,
        "longitude": -1.6458,
        "description": "Pamplona is famous for its annual Running of the Bulls festival, charming medieval streets, and rich Basque culture.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Pamplona%20(3).jpg'
    },
    {
        "id": 133,
        "name": "Puigcerdà",
        "country": "Spain",
        "latitude": 42.4317,
        "longitude": 1.928,
        "description": "Puigcerdà is a picturesque town in the Catalan Pyrenees, known for its beautiful lakes, historic architecture, and skiing opportunities.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/puigcerda-4953210_1920.jpg'
    },
    {
        "id": 134,
        "name": "Bilbao",
        "country": "Spain",
        "latitude": 43.263,
        "longitude": -2.935,
        "description": "Bilbao, the largest city in the Basque Country, is renowned for its modern architecture, including the Guggenheim Museum, and vibrant cultural scene.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Bilbao.jpg'
    },
    {
        "id": 135,
        "name": "Vitoria-Gasteiz",
        "country": "Spain",
        "latitude": 42.8469,
        "longitude": -2.6735,
        "description": "Vitoria-Gasteiz, the capital of the Basque Country, is known for its medieval old town, green spaces, and rich history.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Vitoria-Gasteiz%20(2).jpg'
    },
    {
        "id": 136,
        "name": "Santander",
        "country": "Spain",
        "latitude": 43.4623,
        "longitude": -3.8099,
        "description": "Santander is a beautiful coastal city with stunning beaches, a historic lighthouse, and a vibrant cultural life.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Santander.jpg'
    },
    {
        "id": 138,
        "name": "Logroño",
        "country": "Spain",
        "latitude": 42.4627,
        "longitude": -2.4445,
        "description": "Logroño is a charming city known for its wine culture, tapas bars, and its location along the Camino de Santiago pilgrimage route.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Logrono.jpg'
    },
    {
        "id": 139,
        "name": "Gijon",
        "country": "Spain",
        "latitude": 43.5322,
        "longitude": -5.6611,
        "description": "Gijon is a coastal city in Asturias, known for its lively waterfront, beautiful beaches, and cultural festivals.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Gijon.jpeg'
    },
    {
        "id": 140,
        "name": "Oviedo",
        "country": "Spain",
        "latitude": 43.3619,
        "longitude": -5.8494,
        "description": "Oviedo, the capital of Asturias, is known for its well-preserved medieval old town, beautiful churches, and lush surroundings.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Oviedo.jpg'
    },
    {
        "id": 149,
        "name": "Cartagena",
        "country": "Spain",
        "latitude": 37.6257,
        "longitude": -0.9966,
        "description": "Cartagena is a historic port city known for its Roman ruins, including a well-preserved amphitheater, and scenic harbor.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Cartagena.jpeg'
    },
    {
        "id": 153,
        "name": "Marbella",
        "country": "Spain",
        "latitude": 36.5099,
        "longitude": -4.8851,
        "description": "Marbella is a glamorous city on the Costa del Sol, known for its luxurious resorts, vibrant nightlife, and beautiful beaches.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/marbella%20coast.jpg'
    },
    {
        "id": 156,
        "name": "Lagos",
        "country": "Spain",
        "latitude": 37.102,
        "longitude": -8.6742,
        "description": "Lagos is a picturesque coastal town in the Algarve region of Portugal, famous for its stunning cliffs, golden beaches, and historic architecture.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Lagos.jpg'
    },
    {
        "id": 157,
        "name": "Córdoba",
        "country": "Spain",
        "latitude": 37.8882,
        "longitude": -4.7794,
        "description": "Córdoba is a historic city in Andalusia known for its stunning Mezquita, a former mosque that is now a cathedral, and its charming old town.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Cordoba.jpg'
    },
    {
        "id": 158,
        "name": "Jaen",
        "country": "Spain",
        "latitude": 37.7796,
        "longitude": -3.7849,
        "description": "Jaen is a city in Andalusia known for its impressive castle, olive oil production, and rich history dating back to the Roman era.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Jaen.jpg'
    },
    {
        "id": 159,
        "name": "Huelva",
        "country": "Spain",
        "latitude": 37.2614,
        "longitude": -6.9447,
        "description": "Huelva is a port city in southwestern Spain known for its beautiful beaches, vibrant cultural scene, and its proximity to the Doñana National Park.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Huelva.jpg?t=2024-09-12T09%3A36%3A29.393Z'
    },
    {
        "id": 160,
        "name": "Salamanca",
        "country": "Spain",
        "latitude": 40.9701,
        "longitude": -5.6635,
        "description": "Salamanca is a historic university city known for its beautiful Plaza Mayor, ancient architecture, and as one of Spain's most important educational centers.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/salamanca-014.jpg?t=2024-09-12T09%3A46%3A42.989Z'
    },
    {
        "id": 161,
        "name": "Girona",
        "country": "Spain",
        "latitude": 41.9794,
        "longitude": 2.8214,
        "description": "Girona is a historic city in Catalonia known for its medieval old town, well-preserved Jewish quarter, and stunning architecture.",
        "image": null
    },
    {
        "id": 162,
        "name": "Banyoles",
        "country": "Spain",
        "latitude": 42.1161,
        "longitude": 2.7631,
        "description": "Banyoles is a charming town in Catalonia known for its scenic lake, historic buildings, and vibrant local culture.",
        "image": null
    },
    {
        "id": 163,
        "name": "Vic",
        "country": "Spain",
        "latitude": 41.9302,
        "longitude": 2.2545,
        "description": "Vic is a historic town in Catalonia known for its medieval architecture, lively market square, and rich cultural heritage.",
        "image": null
    },
    {
        "id": 164,
        "name": "Olot",
        "country": "Spain",
        "latitude": 42.1833,
        "longitude": 2.4881,
        "description": "Olot is a town in Catalonia surrounded by volcanic landscapes, known for its natural beauty and historic architecture.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/olot.jpg'
    },
    {
        "id": 171,
        "name": "Badalona",
        "country": "Spain",
        "latitude": 41.4469,
        "longitude": 2.2450,
        "description": "Badalona is a city on the Mediterranean coast near Barcelona, known for its beautiful beaches and vibrant cultural scene.",
        "image": null
    },
    {
        "id": 172,
        "name": "Premia de Mar",
        "country": "Spain",
        "latitude": 41.4934,
        "longitude": 2.3642,
        "description": "Premia de Mar is a coastal town known for its beaches, traditional architecture, and pleasant seaside atmosphere.",
        "image": null
    },
    {
        "id": 173,
        "name": "Mataro",
        "country": "Spain",
        "latitude": 41.5381,
        "longitude": 2.4445,
        "description": "Mataro is a vibrant city with a rich history, beautiful beaches, and a lively port area.",
        "image": null
    },
    {
        "id": 174,
        "name": "Vilassar de Mar",
        "country": "Spain",
        "latitude": 41.5073,
        "longitude": 2.3893,
        "description": "Vilassar de Mar is a charming coastal town with a picturesque old town, lovely beaches, and a relaxed atmosphere.",
        "image": null
    },
    {
        "id": 175,
        "name": "Arenys de Mar",
        "country": "Spain",
        "latitude": 41.5820,
        "longitude": 2.5488,
        "description": "Arenys de Mar is a coastal town known for its beautiful beaches, lively harbor, and historic charm.",
        "image": null
    },
    {
        "id": 176,
        "name": "Canet de Mar",
        "country": "Spain",
        "latitude": 41.5934,
        "longitude": 2.5805,
        "description": "Canet de Mar is a seaside town with a relaxed vibe, beautiful beaches, and a historic center.",
        "image": null
    },
    {
        "id": 177,
        "name": "Sant Pol de Mar",
        "country": "Spain",
        "latitude": 41.6036,
        "longitude": 2.6172,
        "description": "Sant Pol de Mar is a picturesque coastal town known for its tranquil beaches and charming atmosphere.",
        "image": null
    },
    {
        "id": 178,
        "name": "Calella",
        "country": "Spain",
        "latitude": 41.6142,
        "longitude": 2.6543,
        "description": "Calella is a popular tourist destination with beautiful beaches, a lively promenade, and a variety of cultural events.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Calella.jpg'
    },
    {
        "id": 179,
        "name": "Pineda de Mar",
        "country": "Spain",
        "latitude": 41.6246,
        "longitude": 2.6850,
        "description": "Pineda de Mar is a seaside town with a long stretch of beach, a lively town center, and a relaxed atmosphere.",
        "image": null
    },
    {
        "id": 180,
        "name": "Santa Susanna",
        "country": "Spain",
        "latitude": 41.6364,
        "longitude": 2.7104,
        "description": "Santa Susanna is a coastal town known for its beautiful beaches, family-friendly atmosphere, and pleasant climate.",
        "image": null
    },
    {
        "id": 181,
        "name": "Malgrat de Mar",
        "country": "Spain",
        "latitude": 41.6465,
        "longitude": 2.7415,
        "description": "Malgrat de Mar is a charming seaside town with a long sandy beach, a lively promenade, and a variety of local amenities.",
        "image": null
    },
    {
        "id": 182,
        "name": "Blanes",
        "country": "Spain",
        "latitude": 41.6755,
        "longitude": 2.7903,
        "description": "Blanes is a coastal town known for its beautiful beaches, botanical gardens, and vibrant local culture.",
        "image": null
    },
    {
        "id": 183,
        "name": "Lloret de Mar",
        "country": "Spain",
        "latitude": 41.7000,
        "longitude": 2.8451,
        "description": "Lloret de Mar is a popular tourist destination with extensive beaches, a lively nightlife scene, and numerous attractions.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Lloret%20de%20Mar.jpg'
    },
    {
        "id": 184,
        "name": "Tossa de Mar",
        "country": "Spain",
        "latitude": 41.7201,
        "longitude": 2.9331,
        "description": "Tossa de Mar is a picturesque town with a stunning medieval castle, beautiful beaches, and a charming old town.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Tossa%20de%20Mar.jpg?t=2024-09-12T09%3A47%3A03.402Z'
    },
    {
        "id": 185,
        "name": "Sant Feliu de Guíxols",
        "country": "Spain",
        "latitude": 41.7839,
        "longitude": 3.0322,
        "description": "Sant Feliu de Guíxols is a historic town with a lovely marina, beautiful beaches, and a vibrant cultural scene.",
        "image": null
    },
    {
        "id": 186,
        "name": "S’Agaro",
        "country": "Spain",
        "latitude": 41.7933,
        "longitude": 3.0551,
        "description": "S’Agaro is a small, upscale coastal town known for its luxurious homes, beautiful beaches, and serene environment.",
        "image": null
    },
    {
        "id": 187,
        "name": "Platja d’Aro",
        "country": "Spain",
        "latitude": 41.8151,
        "longitude": 3.0671,
        "description": "Platja d’Aro is a popular resort town with a lively beach area, a variety of shops and restaurants, and numerous activities.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/PlatjadAro.jpg'
    },
    {
        "id": 188,
        "name": "Sant Antoni de Calonge",
        "country": "Spain",
        "latitude": 41.8457,
        "longitude": 3.0834,
        "description": "Sant Antoni de Calonge is a coastal town known for its long sandy beaches, family-friendly atmosphere, and scenic views.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Sant%20Antoni%20de%20Calonge.jpg'
    },
    {
        "id": 189,
        "name": "Palamos",
        "country": "Spain",
        "latitude": 41.8498,
        "longitude": 3.1295,
        "description": "Palamos is a picturesque town with a busy fishing port, beautiful beaches, and a rich maritime heritage.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Palamos.jpg?t=2024-09-12T09%3A45%3A12.499Z'
    },
    {
        "id": 190,
        "name": "Calella de Palafrugell",
        "country": "Spain",
        "latitude": 41.8864,
        "longitude": 3.1783,
        "description": "Calella de Palafrugell is a charming seaside village known for its whitewashed houses, clear blue waters, and relaxed ambiance.",
        "image": null
    },
    {
        "id": 191,
        "name": "Tamariu",
        "country": "Spain",
        "latitude": 41.9124,
        "longitude": 3.2073,
        "description": "Tamariu is a small, picturesque beach town with crystal-clear waters, a relaxed atmosphere, and stunning coastal scenery.",
        "image": null
    },
    {
        "id": 192,
        "name": "Begur",
        "country": "Spain",
        "latitude": 41.9540,
        "longitude": 3.2090,
        "description": "Begur is a picturesque town known for its medieval architecture, stunning coastal views, and beautiful beaches.",
        "image": null
    },
    {
        "id": 193,
        "name": "Mas Pinell",
        "country": "Spain",
        "latitude": 42.0000,
        "longitude": 3.1533,
        "description": "Mas Pinell is a small residential area known for its tranquil environment and proximity to the Mediterranean coast.",
        "image": null
    },
    {
        "id": 194,
        "name": "L’Estartit",
        "country": "Spain",
        "latitude": 42.0517,
        "longitude": 3.1994,
        "description": "L’Estartit is a popular beach town famous for its long sandy beaches and its proximity to the Medes Islands marine reserve.",
        "image": null
    },
    {
        "id": 195,
        "name": "L’Escala",
        "country": "Spain",
        "latitude": 42.1230,
        "longitude": 3.1322,
        "description": "L’Escala is a charming coastal town known for its beautiful beaches, historical sites, and delicious seafood.",
        "image": null
    },
    {
        "id": 196,
        "name": "Empuriabrava",
        "country": "Spain",
        "latitude": 42.2451,
        "longitude": 3.1137,
        "description": "Empuriabrava is renowned for its extensive network of canals, offering a unique seaside experience and various water sports activities.",
        "image": null
    },
    {
        "id": 197,
        "name": "Roses",
        "country": "Spain",
        "latitude": 42.2616,
        "longitude": 3.1762,
        "description": "Roses is a vibrant town known for its beautiful beaches, historic sites, and the stunning Cap de Creus natural park.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/roses%20spain.jpg'
    },
    {
        "id": 198,
        "name": "Cadaqués",
        "country": "Spain",
        "latitude": 42.2885,
        "longitude": 3.2783,
        "description": "Cadaqués is a picturesque town with whitewashed buildings, charming narrow streets, and a strong artistic heritage.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Cadaques.jpg'
    },
    {
        "id": 199,
        "name": "Figueres",
        "country": "Spain",
        "latitude": 42.2679,
        "longitude": 2.9613,
        "description": "Figueres is known for its rich cultural heritage and is home to the Salvador Dalí Theatre-Museum, a major attraction in the region.",
        "image": null
    },
    {
        "id": 200,
        "name": "Castelldefels",
        "country": "Spain",
        "latitude": 41.2775,
        "longitude": 1.9803,
        "description": "Castelldefels is a coastal town known for its extensive beach, historic castle, and proximity to Barcelona.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Castelldefels.jpg?t=2024-09-12T09%3A39%3A48.000Z'
    },
    {
        "id": 201,
        "name": "Sitges",
        "country": "Spain",
        "latitude": 41.2351,
        "longitude": 1.8114,
        "description": "Sitges is a lively town known for its vibrant cultural scene, beautiful beaches, and popular annual festivals.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Sitges.jpg?t=2024-09-12T09%3A47%3A32.691Z'
    },
    {
        "id": 202,
        "name": "Vilanova i la Geltrú",
        "country": "Spain",
        "latitude": 41.2225,
        "longitude": 1.7281,
        "description": "Vilanova i la Geltrú is a bustling port city with a lively marina, beautiful beaches, and a rich local history.",
        "image": null
    },
    {
        "id": 203,
        "name": "Calafell",
        "country": "Spain",
        "latitude": 41.1989,
        "longitude": 1.5681,
        "description": "Calafell is a coastal town known for its beautiful beaches, lively promenade, and historical sites.",
        "image": null
    },
    {
        "id": 204,
        "name": "Torredembarra",
        "country": "Spain",
        "latitude": 41.1458,
        "longitude": 1.4022,
        "description": "Torredembarra is a charming town with a relaxed beach atmosphere, historic buildings, and a bustling marina.",
        "image": null
    },
    {
        "id": 205,
        "name": "Tarragona",
        "country": "Spain",
        "latitude": 41.1189,
        "longitude": 1.2445,
        "description": "Tarragona is known for its rich Roman history, impressive archaeological sites, and beautiful Mediterranean coastline.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Tarragona.jpg?t=2024-09-12T09%3A47%3A18.814Z'
    },
    {
        "id": 206,
        "name": "La Pineda",
        "country": "Spain",
        "latitude": 41.0761,
        "longitude": 1.1918,
        "description": "La Pineda is a popular beach resort area known for its family-friendly atmosphere, long sandy beaches, and water parks.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/La%20Pineda.jpg?t=2024-09-12T09%3A37%3A04.010Z'
    },
    {
        "id": 207,
        "name": "Salou",
        "country": "Spain",
        "latitude": 41.0767,
        "longitude": 1.1397,
        "description": "Salou is renowned for its vibrant nightlife, beautiful beaches, and the famous PortAventura World theme park.",
        "image": null
    },
    {
        "id": 208,
        "name": "Cambrils",
        "country": "Spain",
        "latitude": 41.0693,
        "longitude": 1.0603,
        "description": "Cambrils is a picturesque coastal town known for its marina, sandy beaches, and seafood restaurants.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Cambrils.jpg?t=2024-09-12T09%3A37%3A24.905Z'
    },
    {
        "id": 209,
        "name": "Miami Playa",
        "country": "Spain",
        "latitude": 41.0021,
        "longitude": 0.9922,
        "description": "Miami Playa is a popular beach destination known for its clear waters, beautiful beaches, and family-friendly resorts.",
        "image": null
    },
    {
        "id": 210,
        "name": "L’Ametlla de Mar",
        "country": "Spain",
        "latitude": 40.8871,
        "longitude": 0.8007,
        "description": "L’Ametlla de Mar is a quaint fishing town with charming streets, a picturesque harbor, and excellent seafood.",
        "image": null
    },
    {
        "id": 211,
        "name": "L’Ampolla",
        "country": "Spain",
        "latitude": 40.8123,
        "longitude": 0.7102,
        "description": "L’Ampolla is known for its beautiful beaches, tranquil setting, and excellent seafood restaurants.",
        "image": null
    },
    {
        "id": 212,
        "name": "La Rapita",
        "country": "Spain",
        "latitude": 40.6146,
        "longitude": 0.6136,
        "description": "La Rapita is a small coastal town famous for its long sandy beaches and relaxed atmosphere.",
        "image": null
    },
    {
        "id": 213,
        "name": "Vinaròs",
        "country": "Spain",
        "latitude": 40.4707,
        "longitude": 0.4720,
        "description": "Vinaròs is known for its beautiful beaches, historic sites, and vibrant local culture.",
        "image": null
    },
    {
        "id": 214,
        "name": "Benicarló",
        "country": "Spain",
        "latitude": 40.4167,
        "longitude": 0.4216,
        "description": "Benicarló is a small town known for its charming beaches, historic sites, and vibrant local festivals.",
        "image": null
    },
    {
        "id": 215,
        "name": "Oropesa del Mar",
        "country": "Spain",
        "latitude": 40.1017,
        "longitude": -0.1412,
        "description": "Oropesa del Mar is known for its beautiful beaches, Mediterranean climate, and lively tourism.",
        "image": null
    },
    {
        "id": 216,
        "name": "Benicassim",
        "country": "Spain",
        "latitude": 40.0480,
        "longitude": -0.0674,
        "description": "Benicassim is famous for its music festivals, sandy beaches, and scenic coastal views.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Benicassim.jpg?t=2024-09-12T09%3A34%3A52.177Z'
    },
    {
        "id": 217,
        "name": "Castelló de la Plana",
        "country": "Spain",
        "latitude": 39.9864,
        "longitude": -0.0513,
        "description": "Castelló de la Plana offers a mix of historic architecture, beaches, and cultural events.",
        "image": null
    },
    {
        "id": 218,
        "name": "Burriana",
        "country": "Spain",
        "latitude": 39.8892,
        "longitude": -0.0840,
        "description": "Burriana is a town with a beautiful beach, historic charm, and a variety of local restaurants.",
        "image": null
    },
    {
        "id": 219,
        "name": "Evora",
        "country": "Portugal",
        "latitude": 38.5714,
        "longitude": -7.9135,
        "description": "Evora is a historic city known for its well-preserved Roman architecture, charming streets, and rich cultural heritage.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Evora.jpg?t=2024-09-12T09%3A39%3A24.023Z'
    },
    {
        "id": 220,
        "name": "Funchal (Madeira)",
        "country": "Portugal",
        "latitude": 32.6669,
        "longitude": -16.9241,
        "description": "Funchal is the capital of Madeira, known for its beautiful botanical gardens, stunning coastal views, and vibrant cultural scene.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Funchal.jpg?t=2024-09-12T09%3A35%3A22.199Z'
    },
    {
        "id": 221,
        "name": "Viana do Castelo",
        "country": "Portugal",
        "latitude": 41.6918,
        "longitude": -8.8345,
        "description": "Viana do Castelo is a picturesque city with a rich maritime history, beautiful architecture, and scenic river views.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Viana%20do%20Castelo.jpg'
    },
    {
        "id": 222,
        "name": "Leiria",
        "country": "Portugal",
        "latitude": 39.7477,
        "longitude": -8.8071,
        "description": "Leiria is known for its historic castle, vibrant town center, and charming old streets.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Leiria.jpg'
    },
    {
        "id": 223,
        "name": "Lagos",
        "country": "Portugal",
        "latitude": 37.1020,
        "longitude": -8.6742,
        "description": "Lagos is a beautiful coastal town with stunning beaches, historic landmarks, and a lively marina.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/lagos-003.jpg'
    },
    {
        "id": 224,
        "name": "Albufeira",
        "country": "Portugal",
        "latitude": 37.0902,
        "longitude": -8.2503,
        "description": "Albufeira is a popular tourist destination known for its vibrant nightlife, beautiful beaches, and scenic coastal cliffs.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Albufeira.jpg?t=2024-09-12T09%3A35%3A08.968Z'
    },
    {
        "id": 225,
        "name": "Sines",
        "country": "Portugal",
        "latitude": 37.9569,
        "longitude": -8.8698,
        "description": "Sines is a coastal town known for its historic castle, picturesque harbor, and beautiful beaches.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Sant%20Antoni%20de%20Calonge.jpg'
    },
    {
        "id": 226,
        "name": "Sintra",
        "country": "Portugal",
        "latitude": 38.8029,
        "longitude": -9.3817,
        "description": "Sintra is famous for its romantic 19th-century architecture, including the colorful Pena Palace and Moorish Castle.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Sintra.jpg?t=2024-09-12T09%3A53%3A03.569Z'
    },
    {
        "id": 227,
        "name": "Coimbra",
        "country": "Portugal",
        "latitude": 40.2033,
        "longitude": -8.4103,
        "description": "Coimbra is a historic city known for its ancient university, beautiful river views, and charming old town.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Coimbra.jpg'
    },
    {
        "id": 228,
        "name": "Obidos",
        "country": "Portugal",
        "latitude": 39.3607,
        "longitude": -9.1570,
        "description": "Obidos is a medieval town surrounded by well-preserved city walls, known for its charming streets and historical buildings.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Obidos.jpg?t=2024-09-12T09%3A45%3A37.778Z'
    },
    {
        "id": 229,
        "name": "Nazare",
        "country": "Portugal",
        "latitude": 39.6015,
        "longitude": -9.0706,
        "description": "Nazare is famous for its large waves, vibrant beach scene, and traditional fishing culture.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Nazare.jpg'
    },
    {
        "id": 230,
        "name": "Batalha",
        "country": "Portugal",
        "latitude": 39.6590,
        "longitude": -8.8254,
        "description": "Batalha is known for the stunning Batalha Monastery, a masterpiece of Gothic architecture and a UNESCO World Heritage site.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Batalha.jpg'
    },
    {
        "id": 231,
        "name": "Fatima",
        "country": "Portugal",
        "latitude": 39.6254,
        "longitude": -8.6656,
        "description": "Fatima is a major Catholic pilgrimage site, renowned for the Sanctuary of Fatima and its spiritual significance.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/Fatima.jpg'
    },
    {
        "id": 239,
        "name": "Palma de Mallorca",
        "country": "Spain",
        "latitude": 39.5696,
        "longitude": 2.6502,
        "description": "Palma de Mallorca is famous for its stunning Gothic cathedral, beautiful beaches, and vibrant city life.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Palma%20de%20Mallorca.jpg'
    },
    {
        "id": 240,
        "name": "Port d’Andratx",
        "country": "Spain",
        "latitude": 39.5491,
        "longitude": 2.3804,
        "description": "Port d’Andratx is a charming port town with luxurious villas, restaurants, and scenic views of the Mediterranean.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Port%20dAndratx.jpg'
    },
    {
        "id": 241,
        "name": "Peguera",
        "country": "Spain",
        "latitude": 39.5370,
        "longitude": 2.4478,
        "description": "Peguera is a popular beach resort town on the island of Mallorca, ideal for sunbathing and watersports.",
        "image": null
    },
    {
        "id": 242,
        "name": "Costa de la Calma",
        "country": "Spain",
        "latitude": 39.5210,
        "longitude": 2.4783,
        "description": "Costa de la Calma offers tranquility with its peaceful beaches and beautiful sea views, perfect for a relaxing getaway.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Costa%20de%20la%20Calma.jpg'
    },
    {
        "id": 243,
        "name": "Santa Ponsa",
        "country": "Spain",
        "latitude": 39.5052,
        "longitude": 2.4727,
        "description": "Santa Ponsa is a lively tourist town known for its sandy beaches and a rich selection of restaurants and shops.",
        "image": null
    },
    {
        "id": 244,
        "name": "El Toro",
        "country": "Spain",
        "latitude": 39.4956,
        "longitude": 2.4823,
        "description": "El Toro is a small coastal town with stunning marinas and a peaceful atmosphere, perfect for a quiet escape.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/El%20Toro%20beach.jpg'
    },
    {
        "id": 245,
        "name": "Portals Vells",
        "country": "Spain",
        "latitude": 39.4708,
        "longitude": 2.5296,
        "description": "Portals Vells is known for its hidden coves and clear waters, a popular spot for yachting and swimming.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Portals%20Vells.jpg'
    },
    {
        "id": 246,
        "name": "Cala Vinyes",
        "country": "Spain",
        "latitude": 39.4914,
        "longitude": 2.5356,
        "description": "Cala Vinyes is a quiet coastal village offering serene beaches, perfect for families and couples looking to relax.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Cala%20Vinyes.jpg'
    },
    {
        "id": 247,
        "name": "Palmanova",
        "country": "Spain",
        "latitude": 39.5244,
        "longitude": 2.5361,
        "description": "Palmanova is a family-friendly resort with long sandy beaches, bustling promenades, and plenty of entertainment options.",
        "image": null
    },
    {
        "id": 248,
        "name": "Cala D’or",
        "country": "Spain",
        "latitude": 39.3739,
        "longitude": 3.2281,
        "description": "Cala D’or is famous for its stylish marina, picturesque coves, and whitewashed architecture.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Cala%20Dor.jpg?t=2024-09-17T13%3A06%3A48.095Z'
    },
    {
        "id": 249,
        "name": "Cala Figuera",
        "country": "Spain",
        "latitude": 39.3369,
        "longitude": 3.1586,
        "description": "Cala Figuera is a small fishing village with natural beauty and secluded coves, perfect for a peaceful retreat.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Cala%20Figuera.jpg'
    },
    {
        "id": 250,
        "name": "Portocolom",
        "country": "Spain",
        "latitude": 39.4197,
        "longitude": 3.2582,
        "description": "Portocolom is a traditional fishing village with a scenic harbor and beautiful beaches nearby.",
        "image": null
    },
    {
        "id": 251,
        "name": "Manacor",
        "country": "Spain",
        "latitude": 39.5693,
        "longitude": 3.2096,
        "description": "Manacor is known for its pearl factories and as the birthplace of tennis star Rafael Nadal.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/18-10-29-Mallorca-Manacor-RalfR-DJI_0268.jpg?t=2024-09-17T13%3A03%3A36.565Z'
    },
    {
        "id": 252,
        "name": "Capdepera",
        "country": "Spain",
        "latitude": 39.7050,
        "longitude": 3.4341,
        "description": "Capdepera is home to a medieval castle and offers stunning views of the surrounding landscape.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Capdepera.jpg'
    },
    {
        "id": 253,
        "name": "Cala Mesquida",
        "country": "Spain",
        "latitude": 39.7461,
        "longitude": 3.4425,
        "description": "Cala Mesquida is a pristine beach with fine white sand and turquoise waters, surrounded by dunes and pine trees.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Cala%20Mesquida.jpg'
    },
    {
        "id": 254,
        "name": "Alcudia",
        "country": "Spain",
        "latitude": 39.8537,
        "longitude": 3.1214,
        "description": "Alcudia is a historic town with medieval walls, beautiful beaches, and Roman ruins nearby.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/alcudia.jpg?t=2024-09-17T13%3A04%3A57.052Z'
    },
    {
        "id": 255,
        "name": "Puerto de Pollensa",
        "country": "Spain",
        "latitude": 39.9075,
        "longitude": 3.0876,
        "description": "Puerto de Pollensa is a picturesque resort town with sandy beaches, stunning views, and a laid-back atmosphere.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Puerto%20de%20Pollensa.jpg'
    },
    {
        "id": 256,
        "name": "Inca",
        "country": "Spain",
        "latitude": 39.7208,
        "longitude": 2.9115,
        "description": "Inca is known for its leather goods and weekly market, as well as its proximity to the Tramuntana mountains.",
        "image": null
    },
    {
        "id": 257,
        "name": "Deyá",
        "country": "Spain",
        "latitude": 39.7475,
        "longitude": 2.6486,
        "description": "Deyá is a charming village nestled in the Tramuntana mountains, known for its artistic community and scenic beauty.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Deya.jpg?t=2024-09-17T13%3A06%3A58.824Z'
    },
    {
        "id": 258,
        "name": "Soller",
        "country": "Spain",
        "latitude": 39.7678,
        "longitude": 2.7140,
        "description": "Soller is a beautiful town in a valley surrounded by mountains, famous for its orange groves and historic tramway.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Soller.jpg'
    },
    {
        "id": 259,
        "name": "Lourdes",
        "country": "France",
        "latitude": 43.0955,
        "longitude": -0.0463,
        "description": "Lourdes is a world-famous pilgrimage site known for its healing waters and the Sanctuary of Our Lady of Lourdes.",
        "image": 'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_5/Lourdes.jpg'
    }
]


export const getCitiesInRange = (latitude, longitude, range, cities) => {
    if (!latitude || !longitude || !Array.isArray(cities)) {
        console.error("Invalid input values", { latitude, longitude, range, cities });
        return [];
    }

    return cities.filter(city => {
        if (!city.latitude || !city.longitude) {
            console.warn("City has invalid coordinates", city);
            return false;
        }

        // Check if the city's latitude and longitude are the same as the input values
        if (parseFloat(city.latitude) === parseFloat(latitude) && parseFloat(city.longitude) === parseFloat(longitude)) {
            // console.log("City has same coordinates as input values and will be removed", city);
            return false;
        }

        const distance = getDistance(
            { latitude: parseFloat(latitude), longitude: parseFloat(longitude) },
            { latitude: parseFloat(city.latitude), longitude: parseFloat(city.longitude) }
        );

        // console.log(`Distance from ${latitude}, ${longitude} to ${city.latitude}, ${city.longitude}:`, distance);
        // console.log("Is within range:", distance <= range * 1000);

        return distance <= range * 1000;
    });
};


export const priceMap = {
    30: 30,
    60: 48,
    90: 66,
    120: 82,
    150: 100,
    180: 117,
    210: 135,
    240: 153,
};

export const carTypes = {
    Sedan: { costPerKm: 1.21, basePrice: 100 },
    'Premium Sedan': { costPerKm: 1.30, basePrice: 120 },
    Minivan: { costPerKm: 1.75, basePrice: 140 }
};

export const calculatePrice = (distance, carType, stops) => {
    const baseDistance = distance?.value / 1000 - 40;
    let distancePrice = 0;
    if (baseDistance > 0) {
        distancePrice = baseDistance * carTypes[carType]?.costPerKm + carTypes[carType]?.basePrice;
    } else {
        distancePrice = carTypes[carType]?.basePrice;
    }



    let stopsPrice = 0;
    if (stops){
        stops?.forEach(stop => {
            stopsPrice += priceMap[stop?.visitTime] || 0;
        });
    }


    const totalPrice = distancePrice + stopsPrice;

    return {
        distancePrice,
        stopsPrice,
        totalPrice
    };
};

