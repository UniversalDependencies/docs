---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

The indirect object (`iobj`) of a verb is any nominal phrase that is a core argument of the verb but is not its subject or direct object. As Basque is a language that distinguishes morphological cases, the indirect object is marked by the dative case.

***Ikasleei** esan zien arratsaldean ikasi behar zutela .*

*(He/she told **the students** that they needed to study in the evening .*

~~~ sdparse
Ikasleei esan zien arratsaldean ikasi behar zutela .\n Students_the_to told evening_the_in to_study needed_that

iobj(esan-2, Ikasleei-1)
aux(esan-2, zien-3)
nmod(esan-2, arratsaldean-4)
xcomp(behar_zutela-6, ikasi-5)
ccomp(esan-2, behar_zutela-6)
punct(esan-2, .-8)
~~~


*Ahalegin haundia egin du **guri** geografia irakasten .*

*(He/she) has made a great effort teaching **us** geography .*

~~~ sdparse
Ahalegin haundia egin du guri geografia irakasten .\n  Effort great_a made has us geography teaching .

amod(Ahalegin-1, haundia-2)
dobj(egin-3, Ahalegin-1)
aux(egin-3, du-4)
advcl(egin-3, irakasten-7)
dobj(irakasten-7, geografia-6)
iobj(irakasten-7, guri-5)
punct(egin-3, .-8)
~~~


*Djukanovicek aldaketa handia eman dio bere **ildo** politikoari .*

*Djukanovic has given a big change to his political **course** .*

~~~ sdparse
Djukanovicek aldaketa handia eman dio bere ildo politikoari .\n Djukanovic change big_a given has his course political_to .

nsubj(eman-4, Djukanovicek-1)
dobj(eman-4, aldaketa-2)
amod(aldaketa-2, handia-3)
aux(eman-4, dio-5)
nmod(ildo-7, bere-6)
amod(ildo-7, politikoari-8)
iobj(eman-4, ildo-7)
punct(eman-4, .-9)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:28 CET 2020 -->
