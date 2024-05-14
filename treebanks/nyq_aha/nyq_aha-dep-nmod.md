---
layout: base
title:  'Statistics of nmod in UD_Nayini-AHA'
udver: '2'
---

## Treebank Statistics: UD_Nayini-AHA: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="nyq_aha-dep-nmod-poss.html">nmod:poss</a></tt>.

3 nodes (4%) are attached to their parents as `nmod`.

2 instances of `nmod` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `nmod`: <tt><a href="nyq_aha-pos-ADV.html">ADV</a></tt>-<tt><a href="nyq_aha-pos-NOUN.html">NOUN</a></tt> (1; 33% instances), <tt><a href="nyq_aha-pos-VERB.html">VERB</a></tt>-<tt><a href="nyq_aha-pos-NOUN.html">NOUN</a></tt> (1; 33% instances), <tt><a href="nyq_aha-pos-VERB.html">VERB</a></tt>-<tt><a href="nyq_aha-pos-PRON.html">PRON</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod	color:blue
1	عبدولو	عبدولو	NOUN	N_SING	Number=Sing	4	nsubj	_	_
2	فردا	فردا	ADV	ADV	_	4	advmod	_	_
3	صحبی	صحب	NOUN	N_SING	Number=Sing	2	nmod	_	_
4	شو	ش	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
5	.	.	PUNCT	DELM	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod	color:blue
1	چِن	چِن	ADJ	ADJ	Degree=Pos	3	amod	_	_
2	تا	تا	NOUN	N_Sing	Number=Sing	1	compound	_	_
3	یوز	یوز	NOUN	N_Sing	Number=Sing	6	nsubj	_	_
4	دیمی	دیم	ADP	P	_	5	case	_	_
5	بنه	بنه	NOUN	N_Sing	Number=Sing	6	nmod	_	_
6	وا	او	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
7	؟	؟	PUNCT	DELM	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod	color:blue
1	یک	یک	NUM	NUM	NumType=Card	2	nummod	_	_
2	لیویی	لیوُ	NOUN	N_Sing	Number=Sing	6	obj	_	_
3	اُو	اُو	NOUN	N_Sing	Number=Sing	2	flat	_	_
4	د	د	ADP	P	_	5	case	_	_
5	مو	مو	PRON	PRO	Number=Sing|PronType=Dem	6	nmod	_	_
6	ته	ت	VERB	V_IMP	Mood=Imp|Number=Sing|Person=2	0	root	_	SpaceAfter=No
7	.	.	PUNCT	DELM	_	6	punct	_	_

~~~


