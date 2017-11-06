---
layout: base
title:  'Statistics of acl:relcl in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="en_lines-dep-acl.html">acl</a></tt>.

637 nodes (1%) are attached to their parents as `acl:relcl`.

637 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.14599686028257.

The following 18 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (498; 78% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (55; 9% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (23; 4% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (21; 3% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (10; 2% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (7; 1% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-NUM.html">NUM</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl:relcl	color:blue
1	Identifying	identify	VERB	ING	_	0	root	_	_
2	filters	filter	NOUN	PL-NOM	_	1	obj	_	_
3	that	that	SCONJ	REL	_	4	mark	_	_
4	are	be	VERB	PRES	_	2	acl:relcl	_	_
5	currently	currently	ADV	_	_	4	advmod	_	_
6	in	in	ADP	_	_	7	case	_	_
7	effect	effect	NOUN	SG-NOM	_	4	obl	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	It	it	PRON	PERS-SG	_	3	nsubj	_	SpaceAfter=No
2	's	be	AUX	PRES	_	3	cop	_	_
3	all	all	PRON	TOT-SG	_	0	root	_	_
4	that	that	SCONJ	REL	_	5	mark	_	SpaceAfter=No
5	's	be	AUX	PRES-AUX	_	6	aux	_	_
6	keeping	keep	VERB	ING	_	3	acl:relcl	_	_
7	me	I	PRON	PERS-P1SG-ACC	_	6	obj	_	_
8	going	go	VERB	ING	_	6	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 acl:relcl	color:blue
1	Fred	Fred	PROPN	SG-NOM	_	10	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	Comma	_	5	punct	_	_
3	who	who	PRON	WH-REL	_	5	mark	_	_
4	had	have	AUX	PAST-AUX	_	5	aux	_	_
5	finished	finish	VERB	PERF	_	1	acl:relcl	_	_
6	his	he	PRON	P3SG-GEN	_	8	nmod:poss	_	_
7	own	own	ADJ	POS	_	8	amod	_	_
8	list	list	NOUN	SG-NOM	_	5	obj	_	SpaceAfter=No
9	,	,	PUNCT	Comma	_	5	punct	_	_
10	peered	peer	VERB	PAST	_	0	root	_	_
11	over	over	ADV	_	_	10	compound:prt	_	_
12	at	at	ADP	_	_	13	case	_	_
13	Harry	Harry	PROPN	SG	_	10	obl	_	SpaceAfter=No
14	's	's	PART	GEN	_	13	case	_	SpaceAfter=No
15	.	.	PUNCT	Period	_	10	punct	_	_

~~~


