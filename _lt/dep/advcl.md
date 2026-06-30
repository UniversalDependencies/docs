---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

An adverbial clause modifier (`advcl`) is a subordinate clause that functions as a modifier of a predicate (typically a verb, but also an adjective or another predicate) and is not a core argument of that predicate. This relation is used for clauses expressing adverbial meanings such as time, cause, condition, purpose, concession, and result.

Adverbial clauses of time:

~~~ sdparse
Aš nuliūdau , kai pakalbėjau su juo . \n I became-sad when I-talked to him .
advcl(nuliūdau, pakalbėjau)
advcl(became-sad, I-talked)
~~~

Adverbial clauses of condition:

~~~ sdparse
Jei žinai tiesą , pasakyk mokytojui . \n If you-know the-truth , tell the-teacher .
advcl(pasakyk, žinai)
advcl(tell, you-know)
~~~

Adverbial clauses of purpose:

~~~ sdparse
Kad būtum sveikas , reikia sveikai maitintis . \n To-be healthy , you-need to-eat healthily .
advcl(reikia, sveikas)
advcl(you-need, healthy)
~~~

Adverbial clauses of concession:

~~~ sdparse
Jis yra mokytojas , nors nemoko . \n He is a-teacher , although he-does-not-teach .
advcl(mokytojas, nemoko)
advcl(a-teacher, he-does-not-teach)
~~~

Adverbial clauses of cause (reason):

~~~ sdparse
Aš nėjau į mokyklą , nes sirgau . \n I did-not-go to school because I-was-ill .
advcl(nėjau, sirgau)
advcl(did-not-go, I-was-ill)
~~~

Comparative adverbial clauses:

~~~ sdparse
Tau sunkiau , negu galvojau . \n It-is-harder for-you than I-thought .
advcl(sunkiau, galvojau)
advcl(It-is-harder, I-thought)
~~~

In some cases, in Lithuanian, participial, half-participial (pusdalyvis), and adverbial participial (padalyvis) forms are used with adverbial function. In such cases, they should also be annotated as `advcl`.

~~~ sdparse
Avarija įvyko temstant . \n The-accident happened at-dusk .
advcl(įvyko, temstant)
advcl(happened, at-dusk)
~~~

~~~ sdparse
Eidamas į darbą paslydau . \n While-going to work , I-slipped .
advcl(paslydau, Eidamas)
advcl(I-slipped, While-going)
~~~

~~~ sdparse
Jis prisimerkęs žiūrėjo į mane . \n He looked at me squinting .
advcl(žiūrėjo, prisimerkęs)
advcl(looked, squinting)
~~~

Adverbial modifiers expressed by an infinitive are also annotated as `advcl`:

~~~ sdparse
Sparnai reikalingi skraidyti . \n Wings are-needed to-fly .
advcl(reikalingi, skraidyti)
advcl(are-needed, to-fly)
~~~

Free secondary predicatives (i.e. optional, non-obligatory elements in the clause) are also annotated as `advcl`, since they are considered equivalent to adverbial subordinate clauses:

~~~ sdparse
Jis įėjo į kambarį liūdnas . \n He entered the-room sad .
advcl(įėjo, liūdnas)
advcl(entered, sad)
~~~

It is worth separately discussing clauses introduced by correlative or complex subordinators such as _taip, kaip (“as”), ten, kur (“where”), tiek, kiek (“as much as”), tol, kol (“until/as long as”), tada, kada / kai (“when”), tam, kad (“so that / in order to”)_, and _todėl, kad (“because”)_. The subordinate clause is attached to the predicate of the main clause and is annotated as `advcl`.

~~~ sdparse
Taip , kaip pateikiama , nėra gerai . \n The-way-as it-is-presented is-not good .
advcl(gerai, pateikiama)
advcl(good, it-is-presented)
~~~

~~~ sdparse
Važiuosime ten , kur seniai svajojome nuvykti . \n We-will-go where we-have long dreamed of-going .
advcl(Važiuosime, svajojome)
advcl(We-will-go, dreamed)
~~~

~~~ sdparse
Galime patirti tiek , kiek esame atviri patirčiai . \n We-can experience as-much as we-are open-to experience .
advcl(patirti, atviri)
advcl(experience, open-to)
~~~

~~~ sdparse
Aš atėjau tam , kad pasikalbėtume . \n I came in-order to-talk .
advcl(atėjau, pasikalbėtume)
advcl(came, to-talk)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:59:28 CEST -->
