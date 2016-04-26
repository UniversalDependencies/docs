---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
---

The indirect object (`iobj`) of a verb is any nominal phrase that is a core argument of the verb but is not its subject or direct object. 
As Basque is a language that distinguishes morphological cases, the indirect object is marked by the dative case. 

*Djukanovicek aldaketa handia eman dio **bere ildo politikoari-DAT***

*Djukanovic      a big change   has given  **to his political course-DAT***

*Djukanovic has given a big change **to his political course-DAT***

~~~ sdparse
Djukanovicek aldaketa handia eman dio bere ildo politikoari \n Djukanovic has given a big change to his political course 

nsubj(eman, Djukanovicek)
dobj(eman, aldaketa)
amod(aldaketa, handia)
aux(eman, dio)
nmod(ildo, bere)
amod(ildo, politikoari)
iobj(eman, ildo)
~~~


*Ahalegin haundia egin du **guri-DAT** geografia   irakasten* 

*a great effort       has made **us-DAT**  geography  teaching*

*(He/she) has made a great effort teaching **us-DAT** geography*

~~~ sdparse
Ahalegin haundia egin du guri geografia pittin bat irakasten \n (he/she) has made a great effort teaching us-IOBJ a geography 

amod(ahalegin, haundia)
dobj(egin, ahalegin)
aux(egin, du)
advcl(egin, irakasten)
dobj(irakasten, geografia)
iobj(irakasten, guria)
~~~



***Ikasleei-DAT**   esan zien arratsaldean  ikasi  behar zutela* 

***the students-DAT** told   in the evening to study  needed that*

*She told **the students-DAT** that they needed to study in the evening*

~~~ sdparse
Ikasleei esan zien arratsaldean ikasi behar zutela \n She told the students that they needed to study this evening
iobj(esan, Ikasleei)
aux(esan, zien)
nmod(esan, arratsaldean)
xcomp(behar_zutela, ikasi)
ccomp(esan, behar_zutela)

iobj(told, students)
ccomp(told, needed)
~~~
