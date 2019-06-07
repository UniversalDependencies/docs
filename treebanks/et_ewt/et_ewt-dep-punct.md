---
layout: base
title:  'Statistics of punct in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `punct`

This relation is universal.

4196 nodes (15%) are attached to their parents as `punct`.

2150 instances of `punct` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.60938989513823.

The following 14 pairs of parts of speech are connected with `punct`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PUNCT.html">PUNCT</a></tt> (2533; 60% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-PUNCT.html">PUNCT</a></tt> (824; 20% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-PUNCT.html">PUNCT</a></tt> (348; 8% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-PUNCT.html">PUNCT</a></tt> (165; 4% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-PUNCT.html">PUNCT</a></tt> (129; 3% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-PUNCT.html">PUNCT</a></tt> (122; 3% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-PUNCT.html">PUNCT</a></tt> (42; 1% instances), <tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_ewt-pos-PUNCT.html">PUNCT</a></tt> (22; 1% instances), <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_ewt-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="et_ewt-pos-AUX.html">AUX</a></tt>-<tt><a href="et_ewt-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-DET.html">DET</a></tt>-<tt><a href="et_ewt-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="et_ewt-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="et_ewt-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-X.html">X</a></tt>-<tt><a href="et_ewt-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 punct	color:blue
1	Zopp	Zopp	PROPN	S	Case=Nom|Number=Sing	2	nsubj	2:nsubj	_
2	servis	servima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	ka	ka	ADV	D	_	4	advmod	4:advmod	_
4	täna	täna	ADV	D	_	2	advmod	2:advmod	_
5	[	[	PUNCT	Z	_	2	punct	2:punct	SpaceAfter=No
6	...	...	PUNCT	Z	_	2	punct	2:punct	SpaceAfter=No
7	]	]	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 punct	color:blue
1	Zopp	Zopp	PROPN	S	Case=Nom|Number=Sing	3	nsubj	3:nsubj	_
2	ei	ei	AUX	V	Polarity=Neg	3	aux	3:aux	_
3	löönud	lööma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	ühtki	üks	DET	P	Case=Par|Number=Sing|PronType=Ind	5	det	5:det	_
5	ässa	äss	NOUN	S	Case=Par|Number=Sing	3	obj	3:obj	SpaceAfter=No
6	,	,	PUNCT	Z	_	9	punct	9.1:punct	_
7	kuid	kuid	CCONJ	J	_	9	cc	9.1:cc	_
8	ka	ka	ADV	D	_	9	advmod	9:advmod	_
9	vastane	vastane	NOUN	S	Case=Nom|Number=Sing	3	conj	9.1:nsubj	_
10	vaid	vaid	ADV	D	_	11	advmod	11:advmod	_
11	ühe	üks	NUM	N	Case=Gen|Number=Sing|NumType=Card	9	orphan	9.1:obj	SpaceAfter=No
12	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 punct	color:blue
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


