---
layout: base
title:  'Statistics of dep in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `dep`

This relation is universal.

18 nodes (0%) are attached to their parents as `dep`.

9 instances of `dep` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.44444444444444.

The following 10 pairs of parts of speech are connected with `dep`: <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (4; 22% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-X.html">X</a></tt> (4; 22% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (2; 11% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (1; 6% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="et_edt-pos-X.html">X</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 dep	color:blue
1	Kokkuvõttes	kokku_võte	NOUN	S	Case=Ine|Number=Sing	2	obl	2:obl	_
2	maksis	maksma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Verb=maksma_1
3	Munamägi	Muna_mägi	PROPN	S	Case=Nom|Number=Sing	2	nsubj	2:nsubj	Arg=maksma_Arg_0|NE=B-Org
4	Feerile	Feer	PROPN	S	Case=All|Number=Sing	2	obl	2:obl	Arg=maksma_Arg_3|NE=B-Org
5	suuri	suur	ADJ	A	Case=Par|Degree=Pos|Number=Plur	6	amod	6:amod	_
6	summasid	summa	NOUN	S	Case=Par|Number=Plur	2	obj	2:obj	Arg=maksma_Arg_1|SpaceAfter=No
7	:	:	PUNCT	Z	_	8	punct	8:punct	_
8	tööraha	töö_raha	NOUN	S	Case=Nom|Number=Sing	6	appos	6:appos	_
9	pluss	pluss	NOUN	S	Case=Nom|Number=Sing	13	dep	13:dep	_
10	Feeri	Feer	PROPN	S	Case=Gen|Number=Sing	12	obl	12:obl	NE=B-Org
11	poolt	poolt	ADP	K	AdpType=Post	10	case	10:case	_
12	lisatud	lisa=tud	ADJ	A	Degree=Pos|Tense=Past|VerbForm=Part|Voice=Pass	13	acl	13:acl	_
13	protsendid	protsent	NOUN	S	Case=Nom|Number=Plur	8	conj	8:conj	SpaceAfter=No
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
11	ceteris	ceteris	X	T	Foreign=Yes	8	dep	8:dep	OrigLang=la
12	paribus	paribus	X	T	Foreign=Yes	11	flat	11:flat	OrigLang=la
13	ka	ka	ADV	D	_	14	advmod	14:advmod	_
14	graafiliselt	graafilise=lt	ADV	D	_	4	advmod	4:advmod	_
15	ning	ning	CCONJ	J	_	16	cc	16:cc	_
16	võrreldud	võrdlema	VERB	V	Tense=Past|VerbForm=Part|Voice=Pass	4	conj	0:root|4:conj	Verb=võrdlema
17	seda	see	PRON	P	Case=Par|Number=Sing|PronType=Dem	16	obj	16:obj	Arg=võrdlema_Arg_1
18	andmepõhist	andme_põhine	ADJ	A	Case=Par|Degree=Pos|Number=Sing	19	amod	19:amod	_
19	koguseost	kogu_seos	NOUN	S	Case=Par|Number=Sing	20	obj	20:obj	_
20	kirjeldava	kirjeldav	ADJ	A	Case=Gen|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	22	acl	22:acl	_
21	vaatluste	vaatlus	NOUN	S	Case=Gen|Number=Plur	22	nmod	22:nmod	_
22	pilvega	pilv	NOUN	S	Case=Com|Number=Sing	16	obl	16:obl	Arg=võrdlema_Arg_2|SpaceAfter=No
23	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 dep	color:blue
1	“	“	PUNCT	Z	_	5	punct	5:punct	_
2	Paljude	palju	DET	P	Case=Gen|Number=Plur|PronType=Ind	3	det	3:det	_
3	inimeste	inimene	NOUN	S	Case=Gen|Number=Plur	4	nmod	4:nmod	_
4	ettekujutus	ette_kujutus	NOUN	S	Case=Nom|Number=Sing	5	nsubj	5:nsubj	_
5	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	,	,	PUNCT	Z	_	8	punct	8:punct	_
7	et	et	SCONJ	J	_	8	mark	8:mark	_
8	stepp	stepp	NOUN	S	Case=Nom|Number=Sing	5	dep	5:dep	SpaceAfter=No
9	,	,	PUNCT	Z	_	10	punct	10:punct	_
10	see	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	12	nsubj:cop	12:nsubj:cop	_
11	on	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	12:cop	_
12	aeroobikasuund	aeroobika_suund	NOUN	S	Case=Nom|Number=Sing	8	acl	8:acl	_
13	-	-	PUNCT	Z	_	12	punct	12:punct	_
14	steppaeroobika	stepp_aeroobika	NOUN	S	Case=Nom|Number=Sing	12	appos	12:appos	SpaceAfter=No
15	!	!	PUNCT	Z	_	5	punct	5:punct	_
16	”	”	PUNCT	Z	_	5	punct	5:punct	_

~~~


