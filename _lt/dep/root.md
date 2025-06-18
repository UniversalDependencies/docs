---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The `root` grammatical relation points to the root of the sentence. A fake node `ROOT` is used as the governor. There should only be one node with the root dependency relation in every tree.

The root of a sentence is the predicate of the main clause. The root of a sentence may be a verb (1), a nominal in a copular construction (2), a predicate adjective (3), or a predicate participle (4).
~~~ sdparse
ROOT Mes kalbėjome apie planus . \n ROOT We talked about plans .
root(ROOT-1, kalbėjome)
root(ROOT-8, talked)
~~~

~~~ sdparse
ROOT Berlynas yra Vokietijos sostinė . \n ROOT Berlin is the-capital of-Germany .
root(ROOT-1, sostinė)
root(ROOT-8, the-capital)
~~~

~~~ sdparse
ROOT Kelionė įdomi . \n ROOT The-journey is-interesting .
root(ROOT-1, įdomi)
root(ROOT-6, is-interesting)
~~~

~~~ sdparse
ROOT Visa šeima yra išvykusi . \n ROOT All family is away .
root(ROOT-1, išvykusi)
root(ROOT-8, away)
~~~

If a verbal predicate consists of a conjugated verb form (typically of the modal verbs galėti (can) and turėti (have to)) together with an infinitive (e.g., galime padaryti (we can make it), turėjo ateiti (had to come)) or with an infinitive and a participle, the root of the predicate is considered to be the modal verb (e.g., norėjo (wanted); gali (can)).

~~~ sdparse
ROOT Jis norėjo pasitarti . \n ROOT He wanted to-consult .
root(ROOT-1, norėjo)
root(ROOT-7, wanted)
~~~

~~~ sdparse
ROOT Procedūra gali būti tęsiama . \n ROOT The-procedure can be continued .
root(ROOT-1, gali)
root(ROOT-8, can)
~~~

If a simple sentence contains compound predicates, the root is considered to be the first predicate, i.e., the left most one.

~~~ sdparse
ROOT Šuo lojo ir šiepė dantis . \n ROOT The-dog barked and bared its-teeth .
root(ROOT-1, lojo)
root(ROOT-9, barked)
~~~

In a complex sentence with subordination, the root is considered to be the predicate of the main clause.

~~~ sdparse
ROOT Aš supratau , kad nespėsiu . \n ROOT I understood that I-wouldn't-make-it .
root(ROOT-1, supratau)
root(ROOT-9, understood)
~~~

In a compound sentence with coordination or asyndeton (no conjunction), the root is considered to be the leftmost predicate.

~~~ sdparse
ROOT Dėstytojas kalba , o studentai klauso . \n ROOT The-lecturer speaks , and the-students listen .
root(ROOT-1, kalba)
root(ROOT-10, speaks)
~~~

~~~ sdparse
ROOT Dėstytojas kalba , studentai klauso . \n ROOT The-lecturer speaks , the-students listen .
root(ROOT-1, kalba)
root(ROOT-9, speaks)
~~~
