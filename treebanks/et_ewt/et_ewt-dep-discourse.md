---
layout: base
title:  'Statistics of discourse in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `discourse`

This relation is universal.

112 nodes (0%) are attached to their parents as `discourse`.

73 instances of `discourse` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.55357142857143.

The following 14 pairs of parts of speech are connected with `discourse`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt> (61; 54% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt> (10; 9% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt> (9; 8% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt> (8; 7% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt> (5; 4% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (5; 4% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt> (4; 4% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 discourse	color:blue
1	20	20	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	2	nummod	2:nummod	_
2	%	%	NOUN	Y	Abbr=Yes	8	parataxis	8:parataxis	_
3	...	...	PUNCT	Z	_	8	punct	8:punct	_
4	ja	ja	CCONJ	J	_	8	cc	8:cc	_
5	no	no	INTJ	B	_	8	discourse	8:discourse	_
6	ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	8:nsubj	_
7	ei	ei	AUX	V	Polarity=Neg	8	aux	8:aux	_
8	tea	teadma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
9	?	?	PUNCT	Z	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 discourse	color:blue
1	Äkki	äkki	ADV	D	_	2	advmod	2:advmod	_
2	puberteet	puberteet	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
3	?	?	PUNCT	Z	_	2	punct	2:punct	_
4	:d	:d	INTJ	Z	_	2	discourse	2:discourse	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	Tere	tere	INTJ	B	_	2	discourse	2:discourse	_
2	ise	ise	PRON	P	Case=Nom|Number=Sing|PronType=Prs|Reflex=Yes	0	root	0:root	_
3	kah	kah	ADV	D	_	2	advmod	2:advmod	SpaceAfter=No
4	,	,	PUNCT	Z	_	7	punct	7:punct	_
5	aga	aga	CCONJ	J	_	7	cc	7:cc	_
6	kus	kus	ADV	D	_	7	mark	7:mark	_
7	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	2:conj	_
8	lubatud	lubatud	ADJ	A	Degree=Pos|Tense=Past|VerbForm=Part|Voice=Pass	9	acl	9:acl	_
9	e-teenindus	e-teenindus	NOUN	S	Case=Nom|Number=Sing	7	nsubj	7:nsubj	SpaceAfter=No
10	?	?	PUNCT	Z	_	2	punct	2:punct	_

~~~


