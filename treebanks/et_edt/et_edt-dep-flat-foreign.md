---
layout: base
title:  'Statistics of flat:foreign in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="et_edt-dep-flat.html">flat</a></tt>.

303 nodes (0%) are attached to their parents as `flat:foreign`.

303 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.96369636963696.

The following 4 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="et_edt-pos-X.html">X</a></tt>-<tt><a href="et_edt-pos-X.html">X</a></tt> (179; 59% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-X.html">X</a></tt> (114; 38% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-X.html">X</a></tt> (9; 3% instances), <tt><a href="et_edt-pos-X.html">X</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:foreign	color:blue
1	"	"	PUNCT	Z	_	2	punct	2:punct	SpaceAfter=No
2	Po	po	X	T	Foreign=Yes	0	root	0:root	Lang=ru
3	russkii	russkii	X	T	Foreign=Yes	2	flat:foreign	2:flat	Lang=ru
4	gavarish	gavarish	X	T	Foreign=Yes	2	flat:foreign	2:flat	Lang=ru|SpaceAfter=No
5	?	?	PUNCT	Z	_	2	punct	2:punct	SpaceAfter=No
6	"	"	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 flat:foreign	color:blue
1	Samalaadse	sama_laadne	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	2	amod	2:amod	_
2	mõjuga	mõju	NOUN	S	Case=Com|Number=Sing	0	root	0:root	_
3	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	cop	2:cop	_
4	sojaõli	soja_õli	NOUN	S	Case=Nom|Number=Sing	2	nsubj:cop	2:nsubj	_
5	(	(	PUNCT	Z	_	6	punct	6:punct	SpaceAfter=No
6	Scaife	Scaife	PROPN	S	Case=Nom|Number=Sing	4	parataxis	4:parataxis	NE=B-Per
7	et	et	X	T	Foreign=Yes	6	flat	6:flat	_
8	al.	al	X	T	Abbr=Yes|Foreign=Yes	6	flat:foreign	6:flat	SpaceAfter=No
9	,	,	PUNCT	Z	_	6	punct	6:punct	_
10	1990	1990	NUM	N	NumForm=Digit|NumType=Card	6	parataxis	6:parataxis	SpaceAfter=No
11	)	)	PUNCT	Z	_	6	punct	6:punct	SpaceAfter=No
12	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 flat:foreign	color:blue
1	USB	USB	NOUN	Y	Abbr=Yes	2	nmod	2:nmod	_
2	välkmäludraiv	välk_mälu_draiv	NOUN	S	Case=Nom|Number=Sing	14	nsubj:cop	14:nsubj	_
3	(	(	PUNCT	Z	_	4	punct	4:punct	SpaceAfter=No
4	USB	USB	NOUN	Y	Abbr=Yes	2	appos	2:appos	_
5	flash	flash	X	T	Foreign=Yes	4	flat:foreign	4:flat	_
6	drive	drive	X	T	Foreign=Yes	4	flat:foreign	4:flat	SpaceAfter=No
7	,	,	PUNCT	Z	_	8	punct	8:punct	_
8	UFD	UFD	NOUN	Y	Abbr=Yes	4	conj	2:appos|4:conj	SpaceAfter=No
9	)	)	PUNCT	Z	_	4	punct	4:punct	_
10	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	cop	14:cop	_
11	portatiivne	portatiivne	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	14	amod	14:amod	_
12	välkmälulülitustel	välk_mälu_lülitus	NOUN	S	Case=Ade|Number=Plur	13	obl	13:obl	_
13	põhinev	põhinev	ADJ	A	Case=Nom|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	14	acl	14:acl	_
14	mälukaardike	mälu_kaardi=ke	NOUN	S	Case=Nom|Number=Sing	0	root	0:root|17:obj	SpaceAfter=No
15	,	,	PUNCT	Z	_	17	punct	17:punct	_
16	mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	17	obj	14:ref	_
17	ühendatakse	ühendama	VERB	V	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	14	acl:relcl	14:acl:relcl	_
18	hostseadme	host_seade	NOUN	S	Case=Gen|Number=Sing	23	nmod	23:nmod	_
19	(	(	PUNCT	Z	_	21	punct	21:punct	SpaceAfter=No
20	näiteks	näiteks	ADV	D	_	21	advmod	21:advmod	_
21	arvuti	arvuti	NOUN	S	Case=Gen|Number=Sing	18	parataxis	18:parataxis	SpaceAfter=No
22	)	)	PUNCT	Z	_	21	punct	21:punct	_
23	USB-porti	USB-port	NOUN	S	Case=Add|Number=Sing	17	obl	17:obl	SpaceAfter=No
24	.	.	PUNCT	Z	_	14	punct	14:punct	_

~~~


