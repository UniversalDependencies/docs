---
layout: base
title:  'Statistics of cc:preconj in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="et_ewt-dep-cc.html">cc</a></tt>.

13 nodes (0%) are attached to their parents as `cc:preconj`.

13 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30769230769231.

The following 5 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (6; 46% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (3; 23% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (2; 15% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 8% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc:preconj	color:blue
1	Kooli	kool	NOUN	S	Case=Gen|Number=Sing	2	nmod	2:nmod	_
2	esindajatena	esindaja	NOUN	S	Case=Ess|Number=Plur	3	obl	3:obl	_
3	olid	olema	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	kohal	kohal	ADV	D	_	3	compound:prt	3:compound	_
5	nii	nii	ADV	D	_	6	cc:preconj	6:cc	_
6	tudengid	tudeng	NOUN	S	Case=Nom|Number=Plur	3	nsubj	3:nsubj	SpaceAfter=No
7	,	,	PUNCT	Z	_	9	punct	9:punct	_
8	kooli	kool	NOUN	S	Case=Gen|Number=Sing	9	nmod	9:nmod	_
9	töötajad	töötaja	NOUN	S	Case=Nom|Number=Plur	6	conj	6:conj	_
10	kui	kui	CCONJ	J	_	18	cc	18:cc	_
11	ka	ka	ADV	D	_	18	advmod	18:advmod	_
12	praeguseks	praegune	ADJ	A	Case=Tra|Degree=Pos|Number=Sing	16	obl	16:obl	_
13	juba	juba	ADV	D	_	16	advmod	16:advmod	_
14	erialast	eri_alane	ADJ	A	Case=Par|Degree=Pos|Number=Sing	15	amod	15:amod	_
15	tööd	töö	NOUN	S	Case=Par|Number=Sing	16	obj	16:obj	_
16	tegevad	tegev	ADJ	A	Case=Nom|Degree=Pos|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	18	acl	18:acl	_
17	kooli	kool	NOUN	S	Case=Gen|Number=Sing	18	nmod	18:nmod	_
18	vilistlased	vilistlane	NOUN	S	Case=Nom|Number=Plur	9	advcl	9:advcl	SpaceAfter=No
19	.	.	PUNCT	Z	_	3	punct	3:punct	_

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


