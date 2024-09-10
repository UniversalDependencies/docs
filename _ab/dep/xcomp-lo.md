---
layout: relation
title: 'xcomp:lo'
shortdef: 'local object open complement'
udver: '2'
---

The `xcomp:lo` relation marks an a clausal complement cross-referenced by a local object marker. The complement can be headed by an non-finite verb form (no converb) that shares its subject with the subject of the main verb.

~~~ conllu
# text = Ҩнык аҟны Абызкаҭаҳа акаҭа аҳара иаҿын.
# text-transcription = Yʷnəḳ aq̇nə Abəzḳataḥa aḳata aḥara iač̣ən.
# translation = In a house the Spider (= the tongue-net-weaver) was weaving its net.
1       Ҩнык    а-ҩны́   NOUN    Noun_NH_Sg_Indet        Animacy=Nhum|Number=Sing        6       obl     _       _
2       аҟны    а-ҟны́   ADP     PP_Poss:3SgNH   Gender[psor]=Neut|Number[psor]=Sing|Person[psor]=3      1       case    _       _
3       Абызкаҭаҳа      а-бызкаҭа́ҳа     NOUN    Noun_NH_Sg_Det  Animacy=Nhum|Definite=Def|Number=Sing   6       nsubj   _       _
4       акаҭа   а́-каҭа  NOUN    Noun_NH_Sg_Det  Animacy=Nhum|Definite=Def|Number=Sing   5       obj     _       _
5       аҳара   а-ҳара́ VERB    VN_Dyn_Sg_Det_Tr        Definite=Def|Dyn=Yes|Number=Sing|Trans=Yes      6       xcomp:lo        _       _
6       иаҿын   а-ҿы́заара     VERB    V_Stat_Fin_Impf_S:3_LO:3SgNH    Dyn=No|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Tense=Imp|VerbForm=Fin       0       root    _       _
7       .       .       PUNCT   Punct_Period    _       6       punct   _       _

# text = Ааҧынра ааигәахо ианалага, Базала архахь дылбааит.
# text-transcription = Aapənra aaigʷaxo ianalaga, Bazala arxax’ dəlbaaiṭ.
# translation = When spring began to approach, Bazala went down into the valley.
1	Ааҧынра	а́аҧынра	NOUN	_	Animacy=Nhum|Number=Sing	3	nsubj	_	_
2	ааигәахо	а́аигәа·ха-ра	VERB	_	Dyn=Yes|Person[subj]=3|Tense=Pres|Trans=No|VerbForm=NonFin	3	xcomp:lo	_	_
3	ианалага	а́-ла·га-ра	VERB	_	Dyn=Yes|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|RelType=Tmp|Tense=Aor|Trans=No|VerbForm=NonFin	7	advcl	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	Базала	Базала	PROPN	_	NameType=Geo	7	nsubj	_	_
6	архахь	а́-рха	NOUN	_	Animacy=Nhum|Definite=Def|Number=Sing	7	obl	_	_
7	дылбааит	а́-л·баа-ра	VERB	_	Dyn=Yes|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Tense=Aor|Trans=No|VerbForm=Fin	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~

<!-- Interlanguage links updated Ne 5. května 2024, 18:21:50 CEST -->
