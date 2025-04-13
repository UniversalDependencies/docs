---
layout: base
title:  'Statistics of nmod:unmarked in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `nmod:unmarked`

This relation is a language-specific subtype of <tt><a href="en_lines-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="en_lines-dep-nmod-poss.html">nmod:poss</a></tt>.

306 nodes (0%) are attached to their parents as `nmod:unmarked`.

191 instances of `nmod:unmarked` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.47385620915033.

The following 18 pairs of parts of speech are connected with `nmod:unmarked`: <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (130; 42% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (59; 19% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (25; 8% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (23; 8% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (16; 5% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (11; 4% instances), <tt><a href="en_lines-pos-NUM.html">NUM</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (10; 3% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (8; 3% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (6; 2% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-NUM.html">NUM</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:unmarked	color:blue
1	Thank	thank	VERB	PRES	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
2	you	you	PRON	PERS-P2	_	1	obj	_	SpaceAfter=No
3	,	,	PUNCT	Comma	_	5	punct	_	_
4	Mr	mr	NOUN	SG-NOM	Number=Sing	5	nmod:unmarked	_	_
5	Donnay	Donnay	PROPN	SG-NOM	Number=Sing	1	vocative	_	SpaceAfter=No
6	.	.	PUNCT	Period	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod:unmarked	color:blue
1	Struggle	struggle	NOUN	SG-NOM	Number=Sing	0	root	_	_
2	my	my	PRON	P1SG-GEN	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	3	nmod:poss	_	_
3	arse	arse	NOUN	SG-NOM	Number=Sing	1	nmod:unmarked	_	SpaceAfter=No
4	.	.	PUNCT	Period	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nmod:unmarked	color:blue
1	They	they	PRON	PERS-PL-NOM	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj:pass	_	_
2	have	have	AUX	PRES-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin	6	aux	_	_
3	not	not	PART	NEG	Polarity=Neg	6	advmod	_	_
4	all	all	PRON	TOT-PL	Case=Nom	1	nmod:unmarked	_	_
5	been	be	AUX	PERF	Tense=Past|VerbForm=Part	6	aux:pass	_	_
6	met	meet	VERB	PASS	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Comma	_	12	punct	_	_
8	but	but	CCONJ	_	_	12	cc	_	_
9	a	a	PRON	IND-PL	Case=Nom	12	nsubj	_	_
10	great	great	ADJ	IND-PL	Degree=Pos	9	fixed	_	_
11	many	many	ADJ	IND-PL	Degree=Pos	9	fixed	_	_
12	have	have	VERB	PRES	Mood=Ind|Tense=Pres|VerbForm=Fin	6	conj	_	SpaceAfter=No
13	.	.	PUNCT	Period	_	6	punct	_	_

~~~


