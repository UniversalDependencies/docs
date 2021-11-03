---
layout: relation
title: 'obl:tmod'
shortdef: 'temporal oblique argument'
udver: '2'
---

This semantical subrelation is used to single out those [oblique](la-dep/obl) arguments that express a temporal reference, usually by means of nominal elements with meanings related to temporal entities, or implying some duration or time point. 

Latin temporal oblique arguments make use of various strategies, mainly involving either the ablative or the accusative [case](la-feat/Case) and sometimes [adpositions](la-pos/ADP) (overwhelmingly [prepositions](la-feat/AdpType)), depending on duration, definiteness, and other factors. These strategies largely correspond to (and in many cases originate from) those used for [locative arguments](la-dep/obl-lmod) and are based on a rough conceptual division between ablative-punctual and accusative-durative. For this reason, it is not always easy to distinguish between a temporal or a locative value, and a slight preference is given to the latter.  

The `tmod` subrelation is also used for [adverbial](la-dep/advmod-tmod) modifiers: since, in Latin, this appears to be a purely formal distinction with regard to oblique temporal (but also [locative](la-dep/obl-lmod)) arguments, the use of `tmod` aims to capture the fundamental unitarity of such constructions.

~~~ sdparse
Imber continens per noctem totam usque ad horam tertiam diei insequentis tenuit . \n Rain continuing for night all until to hour third of-day following has-held .
obl:tmod(tenuit,noctem)
det(noctem,totam)
case(noctem,per)
obl:tmod(tenuit,horam)
amod(horam,tertiam)
case(horam,ad)
case(horam,usque)
nmod(horam,diei)
acl(diei,insequentis)
obl:tmod(has-held,night)
det(night,all)
case(night,for)
obl:tmod(has-held,hour)
amod(hour,third)
case(hour,to)
case(hour,until)
nmod(hour,of-day)
acl(of-day,following)

~~~

'The rain continued without intermission **through the whole night**, **until the third hour of the following day**.' (Livy, XXIII 44)

* accusative (together with prepositions) expressing continuous time and duration until a given point.

~~~ sdparse
tertio quoque verbo orationis suae me appellabat \n third each with-word of-speech his me was-calling 
obl:tmod(appellabat,verbo)
amod(verbo,tertio)
det(verbo,quoque)
obl:tmod(was-calling,with-word)
amod(with-word,third)
det(with-word,each)
~~~

'[...] he called me [by name] **every third word** of his speech' (Cicero, Fam. 5.2.8) 

* ablative expressing punctual (even if repeated: the verb shows an [imperfective](la-feat/Aspect) aspect) temporal reference for an event (the utterance of a name).
<!-- Interlanguage links updated St lis 3 20:59:06 CET 2021 -->
