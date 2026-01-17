---
layout: relation
title: 'flat'
shortdef: 'flat'
udver: '2'
---

The `flat` relation is one of the relations used for multiword expressions. All subsequent words in such expressions are attached to the first one using the `flat` label. The assumption is that in these expressions, the `flat` relations are not syntactic head-modifier relations, and that the structural annotation is in principle arbitrary. 
The prototypes for `flat` are: personal names, names composed of several words without a clear syntactic relation, onomatopoeias, and foreign expressions.

Personal names: 
~~~ sdparse
Jonas Basanavičius . \n Jonas Basanavičius .
flat(Jonas-1, Basanavičius-2)
flat(Jonas-5, Basanavičius-6)
~~~

~~~ sdparse
Liudvikas van Bethovenas . \n Ludwig van Beethoven .
flat(Liudvikas, van-2)
flat(Liudvikas, Bethovenas)
flat(Ludwig, van-7)
flat(Ludwig, Beethoven)
~~~

If the surname is mentioned first and then the given name, the `flat` annotation still attaches to the first word:
~~~ sdparse
Basanavičius Jonas . \n Basanavičius Jonas .
flat(Basanavičius-1, Jonas-2)
flat(Basanavičius-5, Jonas-6)
~~~

Names:
~~~ sdparse
Los Andželas \n Los Angeles
flat(Los-1, Andželas-2)
flat(Los-4, Angeles)
~~~

~~~ sdparse
Buenos Airės \n Buenos Aires
flat(Buenos-1, Airės)
flat(Buenos-4, Aires)
~~~

The relation is not used to attach adjectives to nouns within multi-word names of places, organizations etc. (e.g. _Juodoji jūra (Black Sea)_). Names that have a regular syntactic structure, like _Žiedų valdovas (The Lord of the Rings)_ or _Kauno marios (Kaunas Sea)_, should be annotated with regular syntactic relations rather than `flat` structures.

Onomatopoeias:
~~~ sdparse
Šuo sulojo au au . \n The-dog barked au au .
flat(au-3, au-4)
flat(au-9, au-10)
~~~

Two syntactically equivalent adjectives joined by a hyphen (usually with the suffix -inis) express a single complex attribute of an object and are connected with the `flat` relation from the first component:
~~~ sdparse
Socialinė - ekonominė sistema \n Social - economic system
flat(Socialinė, ekonominė)
flat(Social, economic)
~~~

Also, two nouns joined by a hyphen, which denote the name of a single object or phenomenon, are annotated with the `flat` relation.
<!-- Interlanguage links updated St 12. listopadu 2025, 09:21:55 CET -->
