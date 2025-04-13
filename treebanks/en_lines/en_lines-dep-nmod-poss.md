---
layout: base
title:  'Statistics of nmod:poss in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="en_lines-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="en_lines-dep-nmod-unmarked.html">nmod:unmarked</a></tt>.

2007 nodes (2%) are attached to their parents as `nmod:poss`.

1988 instances of `nmod:poss` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4130543099153.

The following 15 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (1621; 81% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (175; 9% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (154; 8% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (13; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (12; 1% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	Thank	thank	VERB	PRES	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
2	you	you	PRON	PERS-P2	_	1	obj	_	_
3	for	for	ADP	_	_	5	case	_	_
4	your	your	PRON	P2-GEN	Case=Gen|Person=2|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	help	help	NOUN	SG-NOM	Number=Sing	1	obl	_	SpaceAfter=No
6	.	.	PUNCT	Period	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nmod:poss	color:blue
1	Once	once	ADV	_	NumType=Mult	2	advmod	_	_
2	again	again	ADV	_	_	9	advmod	_	SpaceAfter=No
3	,	,	PUNCT	Comma	_	2	punct	_	_
4	however	however	ADV	_	_	9	advmod	_	SpaceAfter=No
5	,	,	PUNCT	Comma	_	4	punct	_	_
6	Stillman	Stillman	PROPN	SG	Number=Sing	8	nmod:poss	_	_
7	's	's	PART	GEN	_	6	case	_	_
8	face	face	NOUN	SG-NOM	Number=Sing	9	nsubj	_	_
9	told	tell	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
10	him	he	PRON	PERS-P3SG-ACC	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	iobj	_	_
11	nothing	nothing	PRON	NEG-SG	Number=Sing|PronType=Neg	9	obj	_	SpaceAfter=No
12	.	.	PUNCT	Period	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Village	village	NOUN	SG-NOM	_	5	nsubj	_	_
2	of	of	ADP	_	_	4	case	_	_
3	Lepers	leper	NOUN	PL-GEN	Number=Plur	4	nmod:poss	_	_
4	houses	house	NOUN	PL-NOM	Number=Plur	1	nmod	_	_
5	facing	face	VERB	ING	Tense=Pres|VerbForm=Part	0	root	_	_
6	the	the	DET	DEF	Definite=Def|PronType=Art	7	det	_	_
7	wall	wall	NOUN	SG-NOM	Number=Sing	8	compound	_	_
8	Zion	Zion	PROPN	SG-NOM	Number=Sing	5	obj	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	5	punct	_	_

~~~


