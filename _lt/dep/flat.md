---
layout: relation
title: 'flat'
shortdef: 'flat'
udver: '2'
---

The `flat` relation is one of the relations used for multiword expressions. All subsequent words in such expressions are attached to the first one using the flat label. The assumption is that in these expressions, the flat relations are not syntactic head-modifier relations, and that the structural annotation is in principle arbitrary. 
The prototypes for flat are: personal names, names composed of several words without a clear syntactic relation, onomatopoeias, and foreign expressions.

Personal names: 
~~~ sdparse
Jonas Basanavičius
flat(Jonas, Basanavičius)
~~~

~~~ sdparse
Liudvikas van Bethovenas \n Ludwig van Beethoven
flat(Liudvikas, van)
flat(Liudvikas, Bethovenas)
flat(Ludwig, van)
flat(Ludwig, Beethoven)
~~~

~~~ sdparse
Carl XVI Gustaf
flat(Carl-1, Gustaf-3)
flat(Carl-1, XVI-2)
~~~

If the surname is mentioned first and then the given name, the _flat_ annotation still attaches to the first word:
~~~ sdparse
Basanavičius Jonas
flat(Basanavičius, Jonas)
~~~

Names:
~~~ sdparse
Los Andželas \n Los Angeles
flat(Los, Andželas)
flat(Los, Angeles)
~~~

~~~ sdparse
Buenos Airės \n Buenos Aires
flat(Buenos, Airės)
flat(Buenos, Aires)
~~~

The relation is not used to attach adjectives to nouns within multi-word names of places, organizations etc. (e.g. _Juodoji jūra (Black Sea)_). Names that have a regular syntactic structure, like _Žiedų valdovas (The Lord of the Rings)_ or _Kauno marios (Kaunas Sea)_, should be annotated with regular syntactic relations rather than flat structures.

Onomatopoeias:
~~~ sdparse
Šuo sulojo au au . \n The-dog barked au au .
flat(au, au)
flat( au, au)
~~~

Two syntactically equivalent adjectives joined by a hyphen (usually with the suffix -inis) express a single complex attribute of an object and are connected with the _flat_ relation from the first component:
~~~ sdparse
Socialinė-ekonominė sistema \n Social-economic system
flat(Socialinė, ekonominė)
flat(Social, economic)
~~~

Also, two nouns joined by a hyphen, which denote the name of a single object or phenomenon, are annotated with the flat relation.
