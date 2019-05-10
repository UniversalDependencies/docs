---
layout: base
title:  'Statistics of dep in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `dep`

This relation is universal.

4 nodes (0%) are attached to their parents as `dep`.

2 instances of `dep` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.

The following 3 pairs of parts of speech are connected with `dep`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 dep	color:blue
1	"	"	PUNCT	Z	_	6	punct	_	SpaceAfter=No
2	Raha	raha	NOUN	S	Case=Gen|Number=Sing	6	obl	_	_
3	taga	taga	ADP	K	AdpType=Post	2	case	_	_
4	asi	asi	NOUN	S	Case=Nom|Number=Sing	6	nsubj	_	_
5	ei	ei	AUX	V	Polarity=Neg	6	aux	_	_
6	seisa	seisma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	dep	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	6	punct	_	SpaceAfter=No
8	"	"	PUNCT	Z	_	6	punct	_	_
9	omandab	omandama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	Paltsi	Palts	PROPN	S	Case=Gen|Number=Sing	11	nmod	_	_
11	jutt	jutt	NOUN	S	Case=Nom|Number=Sing	9	nsubj	_	_
12	laia	lai	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	13	amod	_	_
13	joone	joon	NOUN	S	Case=Gen|Number=Sing	9	obj	_	SpaceAfter=No
14	.	.	PUNCT	Z	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 dep	color:blue
1	Kokkuvõttes	kokku_võte	NOUN	S	Case=Ine|Number=Sing	2	obl	_	_
2	maksis	maksma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	Munamägi	Muna_mägi	PROPN	S	Case=Nom|Number=Sing	2	nsubj	_	_
4	Feerile	Feer	PROPN	S	Case=Gen|Number=Sing	2	obl	_	_
5	suuri	suur	ADJ	A	Case=Par|Degree=Pos|Number=Plur	6	amod	_	_
6	summasid	summa	NOUN	S	Case=Par|Number=Plur	2	obj	_	SpaceAfter=No
7	:	:	PUNCT	Z	_	8	punct	_	_
8	tööraha	töö_raha	NOUN	S	Case=Nom|Number=Sing	6	appos	_	_
9	pluss	pluss	NOUN	S	Case=Nom|Number=Sing	13	obl	_	_
10	Feeri	Feer	PROPN	S	Case=Gen|Number=Sing	12	obl	_	_
11	poolt	poolt	ADP	K	AdpType=Post	10	case	_	_
12	lisatud	lisa=tud	ADJ	A	Degree=Pos|Tense=Past|VerbForm=Part|Voice=Pass	13	acl	_	_
13	protsendid	protsent	NOUN	S	Case=Nom|Number=Plur	8	dep	_	SpaceAfter=No
14	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 18 dep	color:blue
1	Eeltoodust	eel_toodu	NOUN	S	Case=Ela|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	2	obl	_	_
2	tulenevalt	tulenevalt	ADV	D	_	4	advmod	_	_
3	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	oluline	oluline	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
5	arvestada	arvestama	VERB	V	VerbForm=Inf	4	csubj:cop	_	_
6	sissetulekute	sisse_tulek	NOUN	S	Case=Gen|Number=Plur	7	nmod	_	_
7	ebavõrdsust	eba_võrdsus	NOUN	S	Case=Par|Number=Sing	5	obj	_	_
8	mõjurina	mõjur	NOUN	S	Case=Ess|Number=Sing	5	obl	_	_
9	ka	ka	ADV	D	_	11	advmod	_	_
10	majanduse	majandus	NOUN	S	Case=Gen|Number=Sing	11	nmod	_	_
11	struktuuri	struktuur	NOUN	S	Case=Gen|Number=Sing	18	nmod	_	_
12	ehk	ehk	CCONJ	J	_	13	cc	_	_
13	põllumajandus-	põllu_majandus	NOUN	S	Case=Gen|Hyph=Yes|Number=Sing	11	conj	_	SpaceAfter=No
14	,	,	PUNCT	Z	_	15	punct	_	_
15	tööstus-	tööstus	NOUN	S	Case=Gen|Hyph=Yes|Number=Sing	13	conj	_	_
16	ja	ja	CCONJ	J	_	17	cc	_	_
17	teenindussektori	teenindus_sektor	NOUN	S	Case=Gen|Number=Sing	13	conj	_	_
18	osakaalusid	osa_kaal	NOUN	S	Case=Par|Number=Plur	5	dep	_	_
19	kogu	kogu	DET	A	PronType=Tot	20	det	_	_
20	majandusest	majandus	NOUN	S	Case=Ela|Number=Sing	18	nmod	_	SpaceAfter=No
21	.	.	PUNCT	Z	_	4	punct	_	_

~~~


