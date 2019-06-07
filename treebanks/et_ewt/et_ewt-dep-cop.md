---
layout: base
title:  'Statistics of cop in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `cop`

This relation is universal.

838 nodes (3%) are attached to their parents as `cop`.

600 instances of `cop` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.21479713603819.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (355; 42% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (262; 31% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (115; 14% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (65; 8% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (20; 2% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (10; 1% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (8; 1% instances), <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cop	color:blue
1	«	«	PUNCT	Z	_	7	punct	7:punct	_
2	Sest	sest	SCONJ	J	_	7	mark	7:mark	_
3	minu	mina	PRON	P	Case=Gen|Number=Sing|Person=1|PronType=Prs	4	nmod	4:nmod	_
4	liha	liha	NOUN	S	Case=Nom|Number=Sing	7	nsubj:cop	7:nsubj	_
5	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
6	tõeline	tõeline	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	7	amod	7:amod	_
7	roog	roog	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	_
8	ja	ja	CCONJ	J	_	13	cc	13:cc	_
9	minu	mina	PRON	P	Case=Gen|Number=Sing|Person=1|PronType=Prs	10	nmod	10:nmod	_
10	veri	veri	NOUN	S	Case=Nom|Number=Sing	13	nsubj:cop	13:nsubj	_
11	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	13:cop	_
12	tõeline	tõeline	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	13	amod	13:amod	_
13	jook	jook	NOUN	S	Case=Nom|Number=Sing	7	conj	7:conj	SpaceAfter=No
14	.	.	PUNCT	Z	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Jumala	Jumal	PROPN	S	Case=Gen|Number=Sing	2	nmod	2:nmod	_
2	saladustest	saladus	NOUN	S	Case=Ela|Number=Plur	5	obl	5:obl	_
3	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
4	raske	raske	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	0:root	_
5	kõnelda	kõnelema	VERB	V	VerbForm=Inf	4	csubj:cop	4:csubj	_
6	teistmoodi	teist_moodi	ADV	D	_	5	advmod	5:advmod	_
7	kui	kui	SCONJ	J	_	8	mark	8:mark	_
8	piltides	pilt	NOUN	S	Case=Ine|Number=Plur	6	advcl	6:advcl	SpaceAfter=No
9	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Vaim	vaim	NOUN	S	Case=Nom|Number=Sing	3	nsubj:cop	3:nsubj	_
2	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
3	see	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Z	_	6	punct	6:punct	_
5	kes	kes	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	6	nsubj	6:nsubj	_
6	elustab	elustama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	3:acl	SpaceAfter=No
7	,	,	PUNCT	Z	_	8	punct	8:punct	_
8	lihast	liha	NOUN	S	Case=Ela|Number=Sing	3	conj	3:conj	_
9	ei	ei	AUX	V	Polarity=Neg	8	aux	8:aux	_
10	ole	olema	AUX	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
11	mingit	mingi	DET	P	Case=Par|Number=Sing|PronType=Ind	12	det	12:det	_
12	kasu	kasu	NOUN	S	Case=Par|Number=Sing	8	nsubj:cop	8:nsubj	SpaceAfter=No
13	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


