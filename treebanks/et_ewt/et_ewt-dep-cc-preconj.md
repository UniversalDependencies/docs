---
layout: base
title:  'Statistics of cc:preconj in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="et_ewt-dep-cc.html">cc</a></tt>.

19 nodes (0%) are attached to their parents as `cc:preconj`.

19 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21052631578947.

The following 6 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (7; 37% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (3; 16% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (3; 16% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (3; 16% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (2; 11% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	nii	nii	ADV	D	_	2	cc:preconj	2:cc	_
2	nakatunute	nakatu=nu	NOUN	S	Case=Gen|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	5	nmod	5:nmod	_
3	kui	kui	CCONJ	J	_	4	cc	4:cc	_
4	surmade	surm	NOUN	S	Case=Gen|Number=Plur	2	conj	2:conj	_
5	arvu	arv	NOUN	S	Case=Gen|Number=Sing	0	root	0:root	_
6	poolest	poolest	ADP	K	AdpType=Post	5	case	5:case	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc:preconj	color:blue
1	Kas	kas	ADV	D	_	3	cc:preconj	3:cc	_
2	kõik	kõik	PRON	P	Case=Nom|Number=Sing|PronType=Tot	3	nsubj:cop	3:nsubj	_
3	vanamoodi	vana_moodi	ADV	D	_	0	root	0:root	_
4	või	või	CCONJ	J	_	6	cc	6:cc	_
5	kõik	kõik	PRON	P	Case=Nom|Number=Sing|PronType=Tot	6	nsubj:cop	6:nsubj	_
6	uutmoodi	uut_moodi	ADV	D	_	3	conj	3:conj	SpaceAfter=No
7	,	,	PUNCT	Z	_	12	punct	12:punct	_
8	mõlemast	mõlema	PRON	P	Case=Ela|Number=Sing|PronType=Tot	13	obl	13:obl	_
9	parimaid	parim	ADJ	A	Case=Par|Degree=Sup|Number=Plur	10	amod	10:amod	_
10	palasid	pala	NOUN	S	Case=Par|Number=Plur	13	obj	13:obj	_
11	pole	olema	AUX	V	Mood=Ind|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	12:cop	_
12	ilus	ilus	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	conj	3:conj	_
13	tahta	tahtma	VERB	V	VerbForm=Inf	12	csubj:cop	12:csubj	SpaceAfter=No
14	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc:preconj	color:blue
1	Langevad	langema	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	nii	nii	ADV	D	_	3	cc:preconj	3:cc	_
3	tema	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	1	nsubj	1:nsubj	SpaceAfter=No
4	,	,	PUNCT	Z	_	5	punct	5:punct	_
5	Kasugao	Kasugao	PROPN	S	Case=Nom|Number=Sing	3	conj	3:conj	_
6	ning	ning	CCONJ	J	_	7	cc	7:cc	_
7	arvan	arvama	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	1:conj	_
8	et	et	SCONJ	J	_	13	mark	13:mark	_
9	ka	ka	ADV	D	_	10	advmod	10:advmod	_
10	Bushuyama	Bushuyama	PROPN	S	Case=Nom|Number=Sing	13	nsubj:cop	13:nsubj	_
11	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	13:cop	_
12	kindel	kindel	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	13	amod	13:amod	_
13	mineja	mineja	NOUN	S	Case=Nom|Number=Sing	7	ccomp	7:ccomp	SpaceAfter=No
14	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


