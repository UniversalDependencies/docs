---
layout: base
title:  'Statistics of nmod:poss in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="en_lines-dep-nmod.html">nmod</a></tt>.

1293 nodes (2%) are attached to their parents as `nmod:poss`.

1289 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28692962103635.

The following 12 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (1193; 92% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (42; 3% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (22; 2% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (13; 1% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (12; 1% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	Thank	thank	VERB	PRES	_	0	root	_	_
2	you	you	PRON	PERS-P2	_	1	obj	_	_
3	for	for	ADP	_	_	5	case	_	_
4	your	you	PRON	P2-GEN	_	5	nmod:poss	_	_
5	help	help	NOUN	SG-NOM	_	1	obl	_	SpaceAfter=No
6	.	.	PUNCT	Period	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:poss	color:blue
1	Europe	Europe	PROPN	SG	_	3	nmod:poss	_	SpaceAfter=No
2	's	's	PART	GEN	_	1	case	_	_
3	farmers	farmer	NOUN	PL-NOM	_	4	nsubj	_	_
4	need	need	VERB	PRES	_	0	root	_	_
5	help	help	NOUN	SG-NOM	_	4	obj	_	_
6	now	now	ADV	_	_	4	advmod	_	SpaceAfter=No
7	.	.	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Village	village	NOUN	SG-NOM	_	5	nsubj	_	_
2	of	of	ADP	_	_	4	case	_	_
3	Lepers	leper	NOUN	PL-GEN	_	4	nmod:poss	_	_
4	houses	house	NOUN	PL-NOM	_	1	nmod	_	_
5	facing	face	VERB	ING	_	0	root	_	_
6	the	the	DET	DEF	_	7	det	_	_
7	wall	wall	NOUN	SG-NOM	_	8	compound	_	_
8	Zion	zion	PROPN	SG-NOM	_	5	obj	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	5	punct	_	_

~~~


