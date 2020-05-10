---
layout: base
title:  'Statistics of cc in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="et_ewt-dep-cc-preconj.html">cc:preconj</a></tt>.

1640 nodes (4%) are attached to their parents as `cc`.

1638 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.66524390243902.

The following 9 pairs of parts of speech are connected with `cc`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (836; 51% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (435; 27% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (154; 9% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (94; 6% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (60; 4% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (39; 2% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (16; 1% instances), <tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (5; 0% instances), <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	ja	ja	CCONJ	J	_	5	cc	5:cc	_
2	pärast	pärast	ADV	D	_	5	advmod	5:advmod	_
3	kodumaale	kodu_maa	NOUN	S	Case=All|Number=Sing	4	obl	4:obl	_
4	naastes	naasma	VERB	V	VerbForm=Conv	5	advcl	5:advcl	_
5	istutaks	istuma	VERB	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
6	ühe	üks	DET	P	Case=Gen|Number=Sing|PronType=Ind	7	det	7:det	_
7	tammepuu	tamme_puu	NOUN	S	Case=Gen|Number=Sing	5	obj	5:obj	_
8	minu	mina	PRON	P	Case=Gen|Number=Sing|Person=1|PronType=Prs	9	nmod	9:nmod	_
9	mälestuseks	mälestus	NOUN	S	Case=Tra|Number=Sing	5	xcomp	5:xcomp	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc	color:blue
1	Ja	ja	CCONJ	J	_	3	cc	5.1:cc	_
2	paari	paar	NUM	N	Case=Gen|Number=Sing|NumType=Card	3	nummod	3:nummod	_
3	aasta	aasta	NOUN	S	Case=Gen|Number=Sing	0	root	5.1:obl	_
4	pärast	pärast	ADP	K	AdpType=Post	3	case	3:case	_
5	rôômalt	rõõmsalt	ADV	D	_	3	advmod	5.1:advmod	Orphan=Yes
6	maasikatele	maasikas	NOUN	S	Case=All|Number=Plur	3	obl	5.1:obl	Orphan=Yes
7	...	...	PUNCT	Z	_	3	punct	5.1:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc	color:blue
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


