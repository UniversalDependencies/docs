---
layout: relation
title: 'xcomp:obj'
shortdef: 'direct object free complement'
udver: '2'
---

The `ccomp:obj` relation marks an a free clausal complement cross-referenced by a direct object marker.

~~~ conllu
# text = – Саргьы убри сҳәар сҭахын!
# text-transcription = – Sarg’ə ubri sḥʷar staxən!
# translation = I also wanted to say this!
1       –       –       PUNCT   Punct_Dash      _       2       punct   _       _
2       Саргьы  сара́    PRON    Pron_Pers_1Sg_Encl:гьы  Number=Sing|Person=1|PronType=Prs       4       nsubj   _       _
3       убри    убри́    PRON    Pron_Dem_Dist_Sg        Number=Sing|PronType=Dem        4       obj     _       _
4       сҳәар   а-ҳәара́        VERB    V_Dyn_Tr_NonFin_Conj-I_S:1Sg_DO:3_DO:Ad Dyn=Yes|Mood=Conj1|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Trans=Yes|VerbForm=NonFin     5       xcomp:obj       _       _
5       сҭахын  а-ҭахра́        VERB    V_Stat_Tr_NonFin_Cnv_Abs_Pres_S:1Sg_DO:3_DO:Ad  Dyn=No|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Pres|Trans=Yes|VerbForm=NonFin      0       root    _       _
6       !       !       PUNCT   Punct_ExclPoint _       5       punct   _       _

~~~

