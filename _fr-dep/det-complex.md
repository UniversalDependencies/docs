---
layout: relation
title: 'det:complex'
shortdef: 'complex determiner'
udver: '2'
---

The `det:complex` relation is used to annotate complex determiners. Some corpora of the French treebank analyze them with a [fixed]() relation but FrenchSpoken does not: complex determiners are considered as regular constructions and as such, they are syntactically analyzed.
Like complex prepositions (see the [case:complex]() relation), complex determiners can be coordinated: _Il y a trop de beurre et de sucre dans ce gâteau._

Here are come examples of complex determiners that follow the pattern "Adv+de+N" like _trop de chocolat_, _beaucoup de fraises_, _énormément d'étoiles_ etc. 

~~~ sdparse
Pierre a mangé trop de chocolat. \n Pierre ate too much chocolate.
det:complex(chocolat,trop)
case(chocolat,de)
~~~

~~~ sdparse
Je pense que tu as mis assez de peinture sur ce mur. \n I think you put enough paint on this wall.
det:complex(peinture,assez)
case(peinture,de)
~~~ 

Other types of complex determiner are anotated with the `det:complex` relation:

~~~ sdparse
Julien a acheté un tas de vêtements pendant les soldes. \n Julien bought a lot of clothing during the sales.
det:complex(vêtements,tas)
det(tas,un)
case(vêtements,de)
~~~ 

~~~ sdparse
Hier soir, plein de gens étaient présents au concert d'hier soir. \n Many people attended the concert yesterday night.
det:complex(gens,plein)
case(gens,de)
~~~ 

~~~ sdparse
La plupart des bactéries ont été tuées par cet antibiotique. \n Most of the bacteria were killed by this antibiotic.
det:complex(bactéries,plupart)
det(plupart,la)
case(bactéries,des)
~~~
