---
layout: base
title:  'Statistics of aux:pass in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="en_lines-dep-aux.html">aux</a></tt>.

79 nodes (0%) are attached to their parents as `aux:pass`.

78 instances of `aux:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37974683544304.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (77; 97% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 aux:pass	color:blue
1	I	I	PRON	PERS-P1SG-NOM	_	2	nsubj	_	_
2	want	want	VERB	PRES	_	0	root	_	_
3	to	to	PART	_	_	4	mark	_	_
4	ask	ask	VERB	INF	_	2	xcomp	_	_
5	him	he	PRON	PERS-P3SG-ACC	_	4	obj	_	_
6	why	why	ADV	WH	_	10	advmod	_	_
7	it	it	PRON	PERS-SG	_	10	nsubj:pass	_	_
8	was	be	AUX	PAST	_	10	aux:pass	_	SpaceAfter=No
9	n't	not	PART	NEG	_	10	advmod	_	_
10	printed	print	VERB	PASS	_	4	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 aux:pass	color:blue
1	He	he	PRON	PERS-P3SG-NOM	_	5	nsubj:pass	_	SpaceAfter=No
2	's	be	AUX	PRES-AUX	_	5	aux	_	_
3	never	never	ADV	NEG	_	5	advmod	_	_
4	been	be	AUX	PERF	_	5	aux:pass	_	_
5	sent	send	VERB	PASS	_	0	root	_	_
6	anywhere	anywhere	ADV	IND-WH	_	5	advmod	_	_
7	where	where	ADV	WH-REL	_	11	advmod	_	_
8	there	there	PRON	EX	_	11	expl	_	_
9	was	be	VERB	PAST	_	11	aux:pass	_	_
10	anything	anything	PRON	IND-SG-NOM	_	11	nsubj:pass	_	_
11	left	leave	VERB	PASS	_	6	advcl	_	_
12	to	to	PART	_	_	13	mark	_	_
13	do	do	VERB	INF	_	11	xcomp	_	SpaceAfter=No
14	,	,	PUNCT	Comma	_	16	punct	_	_
15	he	he	PRON	PERS-P3SG-NOM	_	16	nsubj	_	_
16	said	say	VERB	PAST	_	5	parataxis	_	SpaceAfter=No
17	.	.	PUNCT	Period	_	5	punct	_	_

~~~


