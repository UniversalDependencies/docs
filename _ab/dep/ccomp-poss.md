---
layout: relation
title: 'ccomp:poss'
shortdef: 'possessive object complement'
udver: '2'
---

The `ccomp:poss` relation marks an a sentence complement referenced by a possessive object marker in adjectival predicates.

~~~ conllu
# text = Асааҭқәа рыгха ҟазҵо дреиуоуп .
# text-transcription = Asaatkʷa rəgxa q̇azc̣o dreiuouṗ .
# translation = He is one of those who make time(zone related) errors.
1	Асааҭқәа	а-саа́ҭ	NOUN	_	Animacy=Nhum|Definite=Def|Number=Plur	2	nmod:poss	_	LMSeg:а-саа́ҭ
2	рыгха	а-гха́	NOUN	_	Animacy=Nhum|Number=Sing|Number[psor]=Plur|Person[psor]=3	3	obj	_	LMSeg:а-гха́
3	ҟазҵо	а́-ҟаҵара	VERB	_	Dyn=Yes|Person[obj]=3|Person[subj]=Rel|Tense=Pres|VerbForm=NonFin	4	ccomp:poss	_	LMSeg:а́-ҟа·ҵа-ра
4	дреиуоуп	а́иуа	VERB	_	Animacy=Hum|Dyn=No|Gender[subj]=Com|Number=Sing|Number[psor]=Plur|Number[subj]=Sing|Person[psor]=3|Person[subj]=3|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:а́иуа
5	.	.	PUNCT	_	_	4	punct	_	LMSeg:.

~~~

