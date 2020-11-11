---
layout: base
title:  'Statistics of cc:preconj in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="et_ewt-dep-cc.html">cc</a></tt>.

14 nodes (0%) are attached to their parents as `cc:preconj`.

14 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28571428571429.

The following 5 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (7; 50% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (3; 21% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (2; 14% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 7% instances).


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


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc:preconj	color:blue
1	Pole	olema	VERB	V	Mood=Ind|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	vahet	vahe	NOUN	S	Case=Par|Number=Sing	1	nsubj	1:nsubj	SpaceAfter=No
3	,	,	PUNCT	Z	_	5	punct	5:punct	_
4	kas	kas	ADV	D	_	5	cc:preconj	5:cc	_
5	kasutada	kasutama	VERB	V	VerbForm=Inf	2	acl	2:acl	_
6	kaamerat	kaamera	NOUN	S	Case=Par|Number=Sing	5	obj	5:obj	_
7	või	või	CCONJ	J	_	8	cc	8:cc	_
8	ei	ei	ADV	D	_	6	conj	6:conj	SpaceAfter=No
9	,	,	PUNCT	Z	_	13	punct	13:punct	_
10	sama	sama	ADV	D	_	11	advmod	11:advmod	_
11	vali	vali	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	12	amod	12:amod	_
12	klõbin	klõbin	NOUN	S	Case=Nom|Number=Sing	13	nsubj	13:nsubj	_
13	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	1:conj	_
14	ikka	ikka	ADV	D	_	13	advmod	13:advmod	SpaceAfter=No
15	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


