---
layout: relation
title: 'advcl:sim'
shortdef: 'simultaneous action adverbial clause'
udver: '2'
---

The dependent of an `advcl:sim` relation is a simultaneous action adverbial clause, which is headed verb with the simultaneous aspect *-lok*.

~~~ conllu
# sent_id = grammar_Morphology_99									
# text = Ghakaŋ kanchi kok pimalok caklet naktucohatto.									
# english = Later when its time to give rice to Kanchi she will ask for sweets and eat them.									
1	Ghakaŋ	gakkaŋ	ADV	_	_	6	advmod	_	Gloss=later|MSeg=gakkaŋ
2	kanchi	kanchi	NOUN	_	Case=Abs|Number=Sing	4	iobj	_	Gloss=youngest_daughter|MSeg=kanchi
3	kok	kok	NOUN	_	Case=Abs|Number=Sing	4	obj	_	Gloss=rice|MSeg=kok
4	pimalok	pid	VERB	SIM	Aspect=Imp|Case=Abs|VerbForm=Inf|Voice=Act	6	advcl:sim	_	Gloss=give-INF-SIM|MSeg=pid-ma-lok
5	caklet	caklet	NOUN	_	Case=Abs|Number=Sing	6	obj	_	Gloss=candy|MSeg=caklet
6	naktucohatto	ŋakt-ca	VERB	COMPL3.TR	Aspect=ComplImp|Mood=Sub|Number=Sing|Number[p]=Sing|Person=3|Person[p]=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Gloss=ask_for-3[SG].P-eat-3[SG].P-COMPL3.TR-[3SG>]3[SG]|MSeg=ŋakt-u-ca-u-hatt-u|SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	SpacesAfter=\n
~~~