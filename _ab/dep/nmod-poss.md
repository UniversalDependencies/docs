---
layout: relation
title: 'nmod:poss'
shortdef: 'a nominal modifier referenced by a possessive marker'
udver: '2'
---

The `nmod:poss` relation marks a nominal modifier that is referenced by a possessive marker.

~~~ conllu
# text = Иаауаз агыгшәыгқәа руак Алым акәын .
# text-transcription = Iaauaz agəgšʷəgkʷa ruaḳ Aləm aḳʷən .
# translation = One of the beasts that were coming was the Lion.
1	Иаауаз	аа-ра́	VERB	_	Dyn=Yes|Person[subj]=Rel|Tense=Imp|Trans=No|VerbForm=NonFin	2	acl:relcl	_	_
2	агыгшәыгқәа	а-гыгшәы́г	NOUN	_	Animacy=Nhum|Definite=Def|Number=Plur	3	nmod:poss	_	_
3	руак	руакы́	PRON	_	Animacy=Nhum|Number=Sing|Number[psor]=Plur|Person[psor]=3|PronType=Ind	4	nsubj	_	_
4	Алым	Алым	PROPN	_	NameType=Geo	0	root	_	_
5	акәын	а́кәзаара	AUX	_	Dyn=No|Gender[io]=Neut|Number[io]=Sing|Person[io]=3|Person[subj]=3|Tense=Imp|VerbForm=Fin	4	cop	_	_
6	.	.	PUNCT	_	_	4	punct	_	_

~~~

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:05 CET -->
