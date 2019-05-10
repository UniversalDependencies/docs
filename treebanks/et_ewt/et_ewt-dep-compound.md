---
layout: base
title:  'Statistics of compound in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="et_ewt-dep-compound-prt.html">compound:prt</a></tt>.

9 nodes (0%) are attached to their parents as `compound`.

7 instances of `compound` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (8; 89% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound	color:blue
1	2004.	2004.	ADJ	N	Case=Gen|Number=Sing|NumForm=Digit|NumType=Ord	2	amod	2:amod	_
2	aasta	aasta	NOUN	S	Case=Gen|Number=Sing	3	nmod	3:nmod	_
3	seisuga	seis	NOUN	S	Case=Com|Number=Sing	5	obl	5:obl	_
4	võis	võima	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	5:aux	_
5	rääkida	rääkima	VERB	V	VerbForm=Inf	0	root	0:root	_
6	12	12	NUM	N	NumForm=Digit|NumType=Card	8	nummod	8:nummod	_
7	miljonist	miljon	NUM	N	Case=Ela|Number=Sing|NumType=Card	6	compound	6:compound	_
8	kilovatt-tunnist	kilo_vatt-tund	NOUN	S	Case=Ela|Number=Sing	5	obl	5:obl	SpaceAfter=No
9	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound	color:blue
1	See	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	2	nsubj	2:nsubj	_
2	laguneb	lagunema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	mullas	muld	NOUN	S	Case=Ine|Number=Sing	2	obl	2:obl	_
4	kiiresti	kiiresti	ADV	D	_	2	advmod	2:advmod	SpaceAfter=No
5	,	,	PUNCT	Z	_	8	punct	8:punct	_
6	ilma	ilma	ADV	D	_	8	advmod	8:advmod	_
7	et	et	SCONJ	J	_	6	compound	6:compound	_
8	tekiks	tekkima	VERB	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	2	advcl	2:advcl	_
9	mingit	mingi	DET	P	Case=Par|Number=Sing|PronType=Ind	10	det	10:det	_
10	lõhna	lõhn	NOUN	S	Case=Par|Number=Sing	8	nsubj	8:nsubj	SpaceAfter=No
11	,	,	PUNCT	Z	_	13	punct	13:punct	_
12	või	või	CCONJ	J	_	13	cc	13:cc	_
13	muret	mure	NOUN	S	Case=Par|Number=Sing	10	conj	10:conj	SpaceAfter=No
14	,	,	PUNCT	Z	_	19	punct	19:punct	_
15	et	et	SCONJ	J	_	19	mark	19:mark	_
16	mingid	mingi	DET	P	Case=Nom|Number=Plur|PronType=Ind	17	det	17:det	_
17	metsloomad	mets_loom	NOUN	S	Case=Nom|Number=Plur	19	nsubj	19:nsubj	_
18	kätte	käsi	NOUN	S	Case=Ill|Number=Sing	19	obl	19:obl	_
19	saavad	saama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	acl:relcl	13:acl	SpaceAfter=No
20	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


