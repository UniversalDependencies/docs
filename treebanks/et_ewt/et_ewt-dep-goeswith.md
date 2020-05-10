---
layout: base
title:  'Statistics of goeswith in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `goeswith`

This relation is universal.

9 nodes (0%) are attached to their parents as `goeswith`.

9 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 7 pairs of parts of speech are connected with `goeswith`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (3; 33% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (1; 11% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (1; 11% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (1; 11% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="et_ewt-pos-X.html">X</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 goeswith	color:blue
1	Meie	mina	PRON	P	Case=Gen|Number=Plur|Person=1|PronType=Prs	2	nmod	2:nmod	_
2	mõistus	mõistus	NOUN	S	Case=Nom|Number=Sing	4	nsubj	4:nsubj	_
3	ei	ei	AUX	V	Polarity=Neg	4	aux	4:aux	_
4	taha	tahtma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	alati	alati	ADV	D	_	4	advmod	4:advmod	_
6	tunnistada	tunnistama	VERB	V	VerbForm=Inf	4	xcomp	4:xcomp	SpaceAfter=No
7	,	,	PUNCT	Z	_	10	punct	10:punct	_
8	et	et	SCONJ	J	_	10	mark	10:mark	_
9	tasakaalustavaks	tasa_kaalustav	ADJ	A	Case=Tra|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	10	acl	10:acl	_
10	pooleks	pool	NOUN	S	Case=Tra|Number=Sing	6	ccomp	6:ccomp	_
11	võib	võima	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	10:aux	_
12	vahel	vahel	ADV	D	_	10	advmod	10:advmod	_
13	olla	olema	AUX	V	VerbForm=Inf	10	cop	10:cop	_
14	ka	ka	ADV	D	_	10	advmod	10:advmod	_
15	Meie	mina	PRON	P	Case=Gen|Number=Plur|Person=1|PronType=Prs	16	nmod	16:nmod	_
16	Inim	inim	NOUN	S	_	18	obl	18:obl	_
17	mõistusele	mõistus	NOUN	S	Case=All|Number=Sing	16	goeswith	16:goeswith	_
18	negatiivne	negatiivne	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	19	amod	19:amod	_
19	varjund	varjund	NOUN	S	Case=Nom|Number=Sing	10	nsubj:cop	10:nsubj	SpaceAfter=No
20	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 goeswith	color:blue
1	Ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	4:nsubj	_
2	üle	üle	ADV	D	_	4	advmod	4:advmod	_
3	homme	homme	ADV	D	_	2	goeswith	2:goeswith	_
4	näen	nägema	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	teda	tema	PRON	P	Case=Par|Number=Sing|Person=3|PronType=Prs	4	obj	4:obj	SpaceAfter=No
6	,	,	PUNCT	Z	_	8	punct	8:punct	_
7	siis	siis	ADV	D	_	8	advmod	8:advmod	_
8	räägin	rääkima	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	4:conj	_
9	temaga	tema	PRON	P	Case=Com|Number=Sing|Person=3|PronType=Prs	8	obl	8:obl	SpaceAfter=No
10	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 goeswith	color:blue
1	Teise	teine	DET	P	Case=Gen|Number=Sing|PronType=Dem	2	det	2:det	_
2	inimese	inimene	NOUN	S	Case=Gen|Number=Sing	4	nmod	4:nmod	_
3	eest	eest	ADP	K	AdpType=Post	2	case	2:case	_
4	maksmine	maksmine	NOUN	S	Case=Nom|Number=Sing	25	nsubj:cop	25:nsubj	SpaceAfter=No
5	,	,	PUNCT	Z	_	21	punct	21:punct	_
6	kes	kes	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	21	nsubj	21:nsubj	_
7	sinu	sina	PRON	P	Case=Gen|Number=Sing|Person=2|PronType=Prs	8	nmod	8:nmod	_
8	elus	elu	NOUN	S	Case=Ine|Number=Sing	19	obl	19:obl	_
9	(	(	PUNCT	Z	_	10	punct	10:punct	SpaceAfter=No
10	veel	veel	ADV	D	_	19	parataxis	19:parataxis	_
11	ja	ja	CCONJ	J	_	15	cc	15:cc	_
12	võib	võima	ADV	D	_	15	advmod	15:advmod	_
13	olla	olema	VERB	V	VerbForm=Inf	12	goeswith	12:goeswith	_
14	mitte	mitte	ADV	D	Polarity=Neg	15	advmod	15:advmod	_
15	kunagi	kunagi	ADV	D	_	10	conj	10:conj	SpaceAfter=No
16	)	)	PUNCT	Z	_	10	punct	10:punct	_
17	mingit	mingi	DET	P	Case=Par|Number=Sing|PronType=Ind	18	det	18:det	_
18	rolli	roll	NOUN	S	Case=Par|Number=Sing	19	obj	19:obj	_
19	mängima	mängima	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	21	xcomp	21:xcomp	_
20	ei	ei	AUX	V	Polarity=Neg	21	aux	21:aux	_
21	hakka	hakkama	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	4:acl	_
22	peaks	pidama	AUX	V	Mood=Cnd|Number=Sing|Tense=Pres|VerbForm=Fin|Voice=Act	25	aux	25:aux	_
23	ju	ju	ADV	D	_	25	advmod	25:advmod	_
24	pisut	pisut	ADV	D	_	25	advmod	25:advmod	_
25	alandav	alandav	ADJ	A	Case=Nom|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	0	root	0:root	_
26	olema	olema	AUX	V	Case=Ill|VerbForm=Sup|Voice=Act	25	cop	25:cop	SpaceAfter=No
27	?	?	PUNCT	Z	_	25	punct	25:punct	_

~~~


