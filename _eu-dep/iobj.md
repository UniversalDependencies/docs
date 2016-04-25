---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
---

The indirect object (`iobj`) of a verb is any nominal phrase that is a core argument of the verb but is not its subject or direct object. 
As Basque is a language that distinguishes morphological cases, the indirect object is marked by the dative case. 

*Djukanovicek aldaketa handia eman dio **bere ildo politikoari***

*Djukanovic      a big change   has given  **to his political course***

*Djukanovic has given a big change **to his political course-DAT***

~~~ sdparse
Djukanovicek aldaketa handia eman dio bere ildo politikoari-IOBJ \n Djukanovic has given a big change to his political course-IOBJ 

nsubj(eman-8, Djukanovicek-5)
dobj(eman-8, aldaketa-6)
amod(aldaketa-6, handia-7)
aux(eman-8, dio-9)
nmod(ildo-11, bere-10)
amod(ildo-11, politikoari-12)
iobj(eman-8, ildo-11)
~~~


*Ahalegin haundia egin du **guri** geografia   irakasten* 

*a great effort       has made **us**  geography  teaching*

*(He/she) has made a great effort teaching **us** geography*

~~~ sdparse
Ahalegin haundia egin du guri-IOBJ geografia pittin bat irakasten \n (he/she) has made a great effort teaching us-IOBJ a geography 

amod(ahalegin-5, haundia-6)
dobj(egin-7, ahalegin-5)
aux(egin-7, du-8)
advcl(egin-7, irakasten-13)
dobj(irakasten-13, geografia-10)
iobj(irakasten-13, guria-9)
~~~


***Ikasleei**     esan zien arratsaldean  ikasi  behar zutela* 

***the students**   told   in the evening to study  needed that*

*She told **the students** that they needed to study in the evening*

~~~ sdparse
Ikasleei esan zien arratsaldean ikasi behar zutela \n She told the students that they needed to study this evening
iobj(esan-2, Ikasleei-1)
ccomp(esan-2, behar_zutela-6)

iobj(told, students)
ccomp(told, needed)
~~~
