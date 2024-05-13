---
layout: base
title:  'Statistics of dep in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `dep`

This relation is universal.

17 nodes (0%) are attached to their parents as `dep`.

11 instances of `dep` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.52941176470588.

The following 8 pairs of parts of speech are connected with `dep`: <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (4; 24% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-X.html">X</a></tt> (4; 24% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (3; 18% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (2; 12% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (1; 6% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 dep	color:blue
1	Kokkuvõttes	kokku_võte	NOUN	S	Case=Ine|Number=Sing	2	obl	2:obl	_
2	maksis	maksma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	Munamägi	Muna_mägi	PROPN	S	Case=Nom|Number=Sing	2	nsubj	2:nsubj	NE=B-Org
4	Feerile	Feer	PROPN	S	Case=Gen|Number=Sing	2	obl	2:obl	NE=B-Org
5	suuri	suur	ADJ	A	Case=Par|Degree=Pos|Number=Plur	6	amod	6:amod	_
6	summasid	summa	NOUN	S	Case=Par|Number=Plur	2	obj	2:obj	SpaceAfter=No
7	:	:	PUNCT	Z	_	8	punct	8:punct	_
8	tööraha	töö_raha	NOUN	S	Case=Nom|Number=Sing	6	appos	6:appos	_
9	pluss	pluss	NOUN	S	Case=Nom|Number=Sing	13	obl	13:obl	_
10	Feeri	Feer	PROPN	S	Case=Gen|Number=Sing	12	obl	12:obl	NE=B-Org
11	poolt	poolt	ADP	K	AdpType=Post	10	case	10:case	_
12	lisatud	lisa=tud	ADJ	A	Degree=Pos|Tense=Past|VerbForm=Part|Voice=Pass	13	acl	13:acl	_
13	protsendid	protsent	NOUN	S	Case=Nom|Number=Plur	8	dep	8:dep	SpaceAfter=No
14	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 dep	color:blue
1	Lõpuks	lõpuks	ADV	D	_	4	advmod	4:advmod	_
2	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
3	välja	välja	ADV	D	_	4	compound:prt	4:compound	_
4	toodud	tooma	VERB	V	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	kõigi	kõik	DET	P	Case=Gen|Number=Plur|PronType=Tot	7	det	7:det	_
6	analüüsitud	analüüsi=tud	ADJ	A	Degree=Pos|Tense=Past|VerbForm=Part|Voice=Pass	7	acl	7:acl	_
7	mõjurite	mõjur	NOUN	S	Case=Gen|Number=Plur	8	nmod	8:nmod	_
8	kogumõju	kogu_mõju	NOUN	S	Case=Nom|Number=Sing	4	obj	4:obj	_
9	sissetulekute	sisse_tulek	NOUN	S	Case=Gen|Number=Plur	10	nmod	10:nmod	_
10	ebavõrdsusele	eba_võrdsus	NOUN	S	Case=All|Number=Sing	8	nmod	8:nmod	_
11	ceteris	ceteris	X	T	Foreign=Yes	8	dep	8:dep	Lang=la
12	paribus	paribus	X	T	Foreign=Yes	11	flat	11:flat	Lang=la
13	ka	ka	ADV	D	_	14	advmod	14:advmod	_
14	graafiliselt	graafilise=lt	ADV	D	_	4	advmod	4:advmod	_
15	ning	ning	CCONJ	J	_	16	cc	16:cc	_
16	võrreldud	võrdlema	VERB	V	Tense=Past|VerbForm=Part|Voice=Pass	4	conj	0:root|4:conj	_
17	seda	see	PRON	P	Case=Par|Number=Sing|PronType=Dem	16	obj	16:obj	_
18	andmepõhist	andme_põhine	ADJ	A	Case=Par|Degree=Pos|Number=Sing	19	amod	19:amod	_
19	koguseost	kogu_seos	NOUN	S	Case=Par|Number=Sing	20	obj	20:obj	_
20	kirjeldava	kirjeldav	ADJ	A	Case=Gen|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	22	acl	22:acl	_
21	vaatluste	vaatlus	NOUN	S	Case=Gen|Number=Plur	22	nmod	22:nmod	_
22	pilvega	pilv	NOUN	S	Case=Com|Number=Sing	16	obl	16:obl	SpaceAfter=No
23	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 dep	color:blue
1	"	"	PUNCT	Z	_	6	punct	6:punct	SpaceAfter=No
2	Raha	raha	NOUN	S	Case=Gen|Number=Sing	6	obl	6:obl	_
3	taga	taga	ADP	K	AdpType=Post	2	case	2:case	_
4	asi	asi	NOUN	S	Case=Nom|Number=Sing	6	nsubj	6:nsubj	_
5	ei	ei	AUX	V	Polarity=Neg	6	aux	6:aux	_
6	seisa	seisma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	dep	9:dep	SpaceAfter=No
7	,	,	PUNCT	Z	_	6	punct	6:punct	SpaceAfter=No
8	"	"	PUNCT	Z	_	6	punct	6:punct	_
9	omandab	omandama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
10	Paltsi	Palts	PROPN	S	Case=Gen|Number=Sing	11	nmod	11:nmod	NE=B-Per
11	jutt	jutt	NOUN	S	Case=Nom|Number=Sing	9	nsubj	9:nsubj	_
12	laia	lai	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	13	amod	13:amod	_
13	joone	joon	NOUN	S	Case=Gen|Number=Sing	9	obj	9:obj	SpaceAfter=No
14	.	.	PUNCT	Z	_	9	punct	9:punct	_

~~~


