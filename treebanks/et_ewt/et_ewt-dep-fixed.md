---
layout: base
title:  'Statistics of fixed in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `fixed`

This relation is universal.

30 nodes (0%) are attached to their parents as `fixed`.

30 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.1.

The following 6 pairs of parts of speech are connected with `fixed`: <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (13; 43% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (7; 23% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (7; 23% instances), <tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Nii	nii	ADV	D	_	6	advmod	6:advmod	_
2	et	et	SCONJ	J	_	1	fixed	1:fixed	_
3	siis	siis	ADV	D	_	6	advmod	6:advmod	_
4	kuhu	kuhu	ADV	D	_	6	mark	6:mark	_
5	Toyonoshima	Toyonoshima	PROPN	S	Case=Nom|Number=Sing	6	nsubj	6:nsubj	_
6	tuleb	tulema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
7	?	?	PUNCT	Z	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 fixed	color:blue
1	No	no	INTJ	B	_	9	discourse	9:discourse	_
2	sa	sina	PRON	P	Case=Nom|Number=Sing|Person=2|PronType=Prs	9	nsubj	9:nsubj	_
3	võid	võima	AUX	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	9:aux	_
4	vestluste	vestlus	NOUN	S	Case=Gen|Number=Plur	5	nmod	5:nmod	_
5	mõtet	mõte	NOUN	S	Case=Par|Number=Sing	9	obj	9:obj	_
6	enda	ise	PRON	P	Case=Gen|Number=Sing|PronType=Prs|Reflex=Yes	9	obl	9:obl	_
7	jaoks	jaoks	ADP	K	AdpType=Post	6	case	6:case	_
8	ümber	ümber	ADV	D	_	9	advmod	9:advmod	_
9	defineerida	defineerima	VERB	V	VerbForm=Inf	0	root	0:root	_
10	kuidas	kuidas	ADV	D	_	9	advmod	9:advmod	_
11	iganes	iganes	ADV	D	_	10	fixed	10:fixed	SpaceAfter=No
12	.	.	PUNCT	Z	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 fixed	color:blue
1	See	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	4	nsubj:cop	4:nsubj	_
2	võis	võima	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
3	olla	olema	AUX	V	VerbForm=Inf	4	cop	4:cop	_
4	hoiatus	hoiatus	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	Z	_	11	punct	11:punct	_
6	võis	võima	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	11	aux	11:aux	_
7	olla	olema	AUX	V	VerbForm=Inf	11	cop	11:cop	_
8	ka	ka	ADV	D	_	11	advmod	11:advmod	_
9	täiesti	täiesti	ADV	D	_	10	advmod	10:advmod	_
10	jama	jama	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	11	amod	11:amod	_
11	jutt	jutt	NOUN	S	Case=Nom|Number=Sing	4	conj	4:conj	_
12	mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	11	conj	11:conj	_
13	iganes	iganes	ADV	D	_	12	fixed	12:fixed	SpaceAfter=No
14	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


