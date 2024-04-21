---
layout: relation
title: 'ccomp:lo'
shortdef: 'local object complement'
udver: '2'
---

The `ccomp:lo` relation marks an a clausal complement cross-referenced by a local object marker. The complement can be headed by a finite verb or by a verbal noun.

~~~ conllu
# text = Ҩнык аҟны Абызкаҭаҳа акаҭа аҳара иаҿын.
# text-transcription = Yʷnəḳ aq̇nə Abəzḳataḥa aḳata aḥara iač̣ən.
# translation = In a house the Spider (= the tongue-net-weaver) was weaving its net.
1       Ҩнык    а-ҩны́   NOUN    Noun_NH_Sg_Indet        Animacy=Nhum|Number=Sing        6       obl     _       _
2       аҟны    а-ҟны́   ADP     PP_Poss:3SgNH   Gender[psor]=Neut|Number[psor]=Sing|Person[psor]=3      1       case    _       _
3       Абызкаҭаҳа      а-бызкаҭа́ҳа     NOUN    Noun_NH_Sg_Det  Animacy=Nhum|Definite=Def|Number=Sing   6       nsubj   _       _
4       акаҭа   а́-каҭа  NOUN    Noun_NH_Sg_Det  Animacy=Nhum|Definite=Def|Number=Sing   5       obj     _       _
5       аҳара   а-ҳа-ра́ VERB    VN_Dyn_Sg_Det_Tr        Definite=Def|Dyn=Yes|Number=Sing|Trans=Yes      6       ccomp:lo        _       _
6       иаҿын   а-ҿы́-заа-ра     VERB    V_Stat_Fin_Impf_S:3_LO:3SgNH    Dyn=No|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Tense=Imp|VerbForm=Fin       0       root    _       _
7       .       .       PUNCT   Punct_Period    _       6       punct   _       _

~~~

