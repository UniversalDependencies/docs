---
layout: base
title:  'Statistics of flat:foreign in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="et_ewt-dep-flat.html">flat</a></tt>.

8 nodes (0%) are attached to their parents as `flat:foreign`.

8 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.875.

The following 3 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (6; 75% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 17 flat:foreign	color:blue
1	Taustaks	taust	NOUN	S	Case=Tra|Number=Sing	2	xcomp	2:xcomp	_
2	midagi	miski	PRON	P	Case=Par|Number=Sing|PronType=Ind	0	root	0:root	_
3	Puccini	Puccini	PROPN	S	Case=Gen|Number=Sing	4	nmod	4:nmod	_
4	muusikast	muusika	NOUN	S	Case=Ela|Number=Sing	2	nmod	2:nmod	_
5	-	-	PUNCT	Z	_	7	punct	7:punct	_
6	"	"	PUNCT	Z	_	7	punct	7:punct	SpaceAfter=No
7	Un	Un	NOUN	S	Foreign=Yes	4	appos	4:appos	_
8	bel	bel	NOUN	S	Foreign=Yes	7	flat:foreign	7:flat	_
9	di	di	NOUN	S	Foreign=Yes	7	flat:foreign	7:flat	_
10	vedremo	vedremo	NOUN	S	Foreign=Yes	7	flat:foreign	7:flat	SpaceAfter=No
11	"	"	PUNCT	Z	_	7	punct	7:punct	_
12	või	või	CCONJ	J	_	14	cc	14:cc	_
13	"	"	PUNCT	Z	_	14	punct	14:punct	SpaceAfter=No
14	E	E	NOUN	S	Foreign=Yes	7	conj	7:conj	_
15	lucevan	lucevan	NOUN	S	Foreign=Yes	14	flat:foreign	14:flat	_
16	le	le	NOUN	S	Foreign=Yes	14	flat:foreign	14:flat	_
17	stelle	stelle	NOUN	S	Foreign=Yes	14	flat:foreign	14:flat	SpaceAfter=No
18	"	"	PUNCT	Z	_	14	punct	14:punct	_
19	...	...	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 27 flat:foreign	color:blue
1	Olen	olema	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	6:aux	_
2	ka	ka	ADV	D	_	6	advmod	6:advmod	_
3	oma	oma	PRON	P	Case=Gen|Number=Sing|Poss=Yes|PronType=Prs	4	nmod	4:nmod	_
4	lähedastega	lähedane	NOUN	S	Case=Com|Number=Plur	6	obl	6:obl	_
5	sellest	see	PRON	P	Case=Ela|Number=Sing|PronType=Dem	6	obl	6:obl	_
6	rääkinud	rääkima	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
7	,	,	PUNCT	Z	_	9	punct	9:punct	_
8	ise	ise	PRON	P	Case=Nom|Number=Sing|PronType=Prs|Reflex=Yes	9	nsubj	9:nsubj	_
9	oleksin	olema	VERB	V	Mood=Cnd|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	6:conj	_
10	rahul	rahul	ADV	D	_	9	compound:prt	9:compound	_
11	kui	kui	SCONJ	J	_	12	mark	12:mark	_
12	tuhastatakse	tuhastama	VERB	V	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	9	advcl	9:advcl	SpaceAfter=No
13	,	,	PUNCT	Z	_	15	punct	15:punct	_
14	ja	ja	CCONJ	J	_	15	cc	15:cc	_
15	laul	laul	NOUN	S	Case=Nom|Number=Sing	6	conj	6:conj	_
16	mida	mis	PRON	P	Case=Par|Number=Sing|PronType=Int,Rel	20	obj	20:obj	_
17	võiks	võima	AUX	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	20	aux	20:aux	_
18	sel	see	DET	P	Case=Ade|Number=Sing|PronType=Dem	19	det	19:det	_
19	hetkel	hetk	NOUN	S	Case=Ade|Number=Sing	20	obl	20:obl	_
20	lasta	laskma	VERB	V	VerbForm=Inf	15	acl:relcl	15:acl	_
21	vms	vms	ADV	Y	Abbr=Yes	20	obl	20:obl	_
22	Eric	Eric	PROPN	S	Case=Nom|Number=Sing	15	appos	15:appos	_
23	Clapton	Clapton	PROPN	S	Case=Nom|Number=Sing	22	flat	22:flat	SpaceAfter=No
24	:	:	PUNCT	Z	_	25	punct	25:punct	_
25	Tears	Tears	PROPN	S	Case=Nom|Number=Sing	22	list	22:list	_
26	in	in	X	S	Case=Nom|Number=Sing	25	flat:foreign	25:flat	_
27	heaven	heaven	NOUN	S	Case=Nom|Number=Sing	25	flat:foreign	25:flat	_
28	:)	:)	INTJ	E	_	6	discourse	6:discourse	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 26 flat:foreign	color:blue
1	Olen	olema	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	6:aux	_
2	ka	ka	ADV	D	_	6	advmod	6:advmod	_
3	oma	oma	PRON	P	Case=Gen|Number=Sing|Poss=Yes|PronType=Prs	4	nmod	4:nmod	_
4	lähedastega	lähedane	NOUN	S	Case=Com|Number=Plur	6	obl	6:obl	_
5	sellest	see	PRON	P	Case=Ela|Number=Sing|PronType=Dem	6	obl	6:obl	_
6	rääkinud	rääkima	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
7	,	,	PUNCT	Z	_	9	punct	9:punct	_
8	ise	ise	PRON	P	Case=Nom|Number=Sing|PronType=Prs|Reflex=Yes	9	nsubj	9:nsubj	_
9	oleksin	olema	VERB	V	Mood=Cnd|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	6:conj	_
10	rahul	rahul	ADV	D	_	9	compound:prt	9:compound	_
11	kui	kui	SCONJ	J	_	12	mark	12:mark	_
12	tuhastatakse	tuhastama	VERB	V	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	9	advcl	9:advcl	SpaceAfter=No
13	,	,	PUNCT	Z	_	15	punct	15:punct	_
14	ja	ja	CCONJ	J	_	15	cc	15:cc	_
15	laul	laul	NOUN	S	Case=Nom|Number=Sing	6	conj	6:conj	_
16	mida	mis	PRON	P	Case=Par|Number=Sing|PronType=Int,Rel	20	obj	20:obj	_
17	võiks	võima	AUX	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	20	aux	20:aux	_
18	sel	see	DET	P	Case=Ade|Number=Sing|PronType=Dem	19	det	19:det	_
19	hetkel	hetk	NOUN	S	Case=Ade|Number=Sing	20	obl	20:obl	_
20	lasta	laskma	VERB	V	VerbForm=Inf	15	acl:relcl	15:acl	_
21	vms	vms	ADV	Y	Abbr=Yes	20	obl	20:obl	_
22	Eric	Eric	PROPN	S	Case=Nom|Number=Sing	15	appos	15:appos	_
23	Clapton	Clapton	PROPN	S	Case=Nom|Number=Sing	22	flat	22:flat	SpaceAfter=No
24	:	:	PUNCT	Z	_	25	punct	25:punct	_
25	Tears	Tears	PROPN	S	Case=Nom|Number=Sing	22	list	22:list	_
26	in	in	X	S	Case=Nom|Number=Sing	25	flat:foreign	25:flat	_
27	heaven	heaven	NOUN	S	Case=Nom|Number=Sing	25	flat:foreign	25:flat	_
28	:)	:)	INTJ	E	_	6	discourse	6:discourse	_

~~~


