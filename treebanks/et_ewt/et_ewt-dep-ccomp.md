---
layout: base
title:  'Statistics of ccomp in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `ccomp`

This relation is universal.

572 nodes (1%) are attached to their parents as `ccomp`.

566 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.75.

The following 17 pairs of parts of speech are connected with `ccomp`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (383; 67% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (76; 13% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (59; 10% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (17; 3% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (14; 2% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (6; 1% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 ccomp	color:blue
1	Kuid	kuid	CCONJ	J	_	3	cc	3:cc	_
2	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	3:nsubj	_
3	mainis	mainima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	ka	ka	ADV	D	_	3	advmod	3:advmod	SpaceAfter=No
5	,	,	PUNCT	Z	_	11	punct	11:punct	_
6	et	et	SCONJ	J	_	11	mark	11:mark	_
7	seda	see	PRON	P	Case=Par|Number=Sing|PronType=Dem	11	obj	11:obj	_
8	siin	siin	ADV	D	_	9	advmod	9:advmod	_
9	Eestis	Eesti	PROPN	S	Case=Ine|Number=Sing	11	obl	11:obl	_
10	ei	ei	AUX	V	Polarity=Neg	11	aux	11:aux	_
11	tehta	tegema	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	3	ccomp	3:ccomp	SpaceAfter=No
12	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	võtnud	võtma	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
2	oleks	olema	AUX	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	1:aux	_
3	vist	vist	ADV	D	_	1	advmod	1:advmod	_
4	Eestlane	eestlane	NOUN	S	Case=Nom|Number=Sing	1	ccomp	1:ccomp	_
5	ja	ja	CCONJ	J	_	6	cc	6:cc	_
6	meri	meri	NOUN	S	Case=Nom|Number=Sing	4	conj	4:conj	SpaceAfter=No
7	,	,	PUNCT	Z	_	10	punct	10:punct	_
8	nii	nii	ADV	D	_	10	advmod	10:advmod	_
9	vahelduse	vaheldus	NOUN	S	Case=Gen|Number=Sing	10	nmod	10:nmod	_
10	mõttes	mõte	NOUN	S	Case=Ine|Number=Sing	1	obl	1:obl	_
11	..	..	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 ccomp	color:blue
1	Arvan	arvama	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	Z	_	9	punct	9:punct	_
3	et	et	SCONJ	J	_	9	mark	9:mark	_
4	ilus	ilus	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	5	amod	5:amod	_
5	matus	matus	NOUN	S	Case=Nom|Number=Sing	9	nsubj:cop	9:nsubj	_
6	lähedaste	lähedane	NOUN	S	Case=Gen|Number=Plur	7	nmod	7:nmod	_
7	osavõtul	osa_võtt	NOUN	S	Case=Ade|Number=Sing	5	nmod	5:nmod	_
8	oleks	olema	AUX	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
9	parim	parim	ADJ	A	Case=Nom|Degree=Sup|Number=Sing	1	ccomp	1:ccomp	SpaceAfter=No
10	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


