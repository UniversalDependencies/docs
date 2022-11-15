---
layout: base
title:  'Statistics of cc:preconj in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="et_ewt-dep-cc.html">cc</a></tt>.

36 nodes (0%) are attached to their parents as `cc:preconj`.

36 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30555555555556.

The following 6 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (21; 58% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (4; 11% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (3; 8% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (3; 8% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (3; 8% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (2; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc:preconj	color:blue
1	Vett	vesi	NOUN	S	Case=Par|Number=Sing	3	obj	3:obj	_
2	saab	saama	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	3:aux	_
3	kasutada	kasutama	VERB	V	VerbForm=Inf	0	root	0:root	_
4	nii	nii	ADV	D	_	6	cc:preconj	6:cc	_
5	vee	vesi	NOUN	S	Case=Gen|Number=Sing	6	nmod	6:nmod	_
6	torustikust	torustik	NOUN	S	Case=Ela|Number=Sing	3	obl	3:obl	SpaceAfter=No
7	,	,	PUNCT	Z	_	10	punct	10:punct	_
8	kui	kui	CCONJ	J	_	10	cc	10:cc	_
9	ka	ka	ADV	D	_	10	advmod	10:advmod	_
10	tünnist	tünn	NOUN	S	Case=Ela|Number=Sing	6	conj	6:conj	SpaceAfter=No
11	.	.	PUNCT	Z	_	3	punct	3:punct	_

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


