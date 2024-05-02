---
layout: relation
title: 'obj:poss'
shortdef: 'possessive object'
udver: '2'
---

The `obj:poss` relation marks an an object referenced by a possessive object marker.

~~~ conllu
# text = – Шәара шәаасҭа сара сихәарҭоуп ҳаҧшәма.
# text-transcription = – Šʷara šʷaasta sara sixʷartouṗ ḥapšʷma.
# translation = – More than you am I useful to our owner (= I am his benefit).
1       –       –       PUNCT   Punct_Dash      _       5       punct   _       _
2       Шәара   шәара́   PRON    Pron_Pers_2Pl   Number=Plur|Person=2|PronType=Prs       5       obl     _       _
3       шәаасҭа а́асҭа   ADP     PP_Poss:2Pl     Number[psor]=Plur|Person[psor]=2        2       case    _       _
4       сара    сара́    PRON    Pron_Pers_1Sg   Number=Sing|Person=1|PronType=Prs       5       nsubj   _       _
5       сихәарҭоуп      а-хәарҭа́        VERB    Adj_Sg_Pred_Fin_Pres_S:1Sg_Poss:3SgM    Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Number[subj]=Sing|Person[psor]=3|Person[subj]=1|Tense=Pres|VerbForm=Fin 0       root    _    \
   _
6       ҳаҧшәма а́-ҧшәма NOUN    Noun_H_Sg_Poss:1Pl      Animacy=Hum|Number=Sing|Number[psor]=Plur|Person[psor]=1        5       obj:poss        _       _
7       .       .       PUNCT   Punct_Period    _       5       punct   _       _

~~~

