---
layout: base
title:  'Statistics of csubj:cop in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `csubj:cop`

This relation is a language-specific subtype of <tt><a href="et_ewt-dep-csubj.html">csubj</a></tt>.

116 nodes (0%) are attached to their parents as `csubj:cop`.

108 instances of `csubj:cop` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.22413793103448.

The following 12 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (77; 66% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (21; 18% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (6; 5% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj:cop	color:blue
1	aga	aga	CCONJ	J	_	2	cc	2:cc	_
2	viisakas	viisakas	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	0:root	_
3	oleks	olema	AUX	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	2:cop	_
4	enne	enne	ADV	D	_	2	advmod	2:advmod	_
5	Daamilt	daam	NOUN	S	Case=Abl|Number=Sing	6	obl	6:obl	_
6	küsida	küsima	VERB	V	VerbForm=Inf	2	csubj:cop	2:csubj	SpaceAfter=No
7	,	,	PUNCT	Z	_	11	punct	11:punct	_
8	kas	kas	ADV	D	_	11	advmod	11:advmod	_
9	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	11	nsubj	11:nsubj	_
10	tohib	tohtima	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux	11:aux	_
11	maksta	maksma	VERB	V	VerbForm=Inf	6	ccomp	6:ccomp	_
12	!!!	!!!	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj:cop	color:blue
1	"	"	PUNCT	Z	_	2	punct	2:punct	_
2	Arvan	arvama	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	Z	_	6	punct	6:punct	_
4	et	et	SCONJ	J	_	6	mark	6:mark	_
5	parim	parim	ADJ	A	Case=Nom|Degree=Sup|Number=Sing	6	amod	6:amod	_
6	otsus	otsus	NOUN	S	Case=Nom|Number=Sing	2	ccomp	2:ccomp	_
7	oleks	olema	AUX	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
8	teha	tegema	VERB	V	VerbForm=Inf	6	csubj:cop	6:csubj	_
9	üks	üks	NUM	P	Case=Nom|Number=Sing|NumType=Card	11	nummod	11:nummod	_
10	sanyaku	sanyaku	NOUN	S	Case=Gen|Number=Sing	11	nmod	11:nmod	_
11	koht	koht	NOUN	S	Case=Nom|Number=Sing	8	obj	8:obj	_
12	juurde	juurde	ADV	D	_	8	compound:prt	8:compound	SpaceAfter=No
13	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 csubj:cop	color:blue
1	Mul	mina	PRON	P	Case=Ade|Number=Sing|Person=1|PronType=Prs	0	root	0:root	_
2	haridust	haridus	NOUN	S	Case=Par|Number=Sing	4	obj	4:obj	_
3	vaja	vaja	ADV	D	_	1	advmod	1:advmod	_
4	osta	ostma	VERB	V	VerbForm=Inf	1	csubj:cop	1:csubj	SpaceAfter=No
5	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


