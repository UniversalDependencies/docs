---
layout: base
title:  'Statistics of nsubj:pass in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="de_lit-dep-nsubj.html">nsubj</a></tt>.

121 nodes (0%) are attached to their parents as `nsubj:pass`.

121 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.27272727272727.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (60; 50% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (54; 45% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt> (4; 3% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:pass	color:blue
1	Warum	warum	ADV	PWAV	_	5	advmod	_	_
2	wird	werden	AUX	VAFIN	_	5	aux:pass	_	_
3	es	es	PRON	PPER	_	5	nsubj:pass	_	_
4	noch	noch	ADV	ADV	_	5	advmod	_	_
5	beibehalten	beibehalten	VERB	VVPP	_	0	root	_	SpaceAfter=No
6	?	--	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	Manches	mancher	DET	PIAT	_	2	det	_	_
2	Gedicht	Gedicht	NOUN	NN	_	5	nsubj:pass	_	_
3	wird	werden	AUX	VAFIN	_	5	aux:pass	_	_
4	so	so	ADV	ADV	_	5	advmod	_	_
5	geliebt	lieben	VERB	VVPP	_	0	root	_	SpaceAfter=No
6	,	--	PUNCT	$,	_	5	punct	_	_
7	wie	wie	ADV	PWAV	_	9	cc	_	_
8	der	der	DET	ART	_	9	det	_	_
9	Heiland	Heiland	NOUN	NN	_	5	nmod	_	_
10	von	von	ADP	APPR	_	12	case	_	_
11	den	der	DET	ART	_	12	det	_	_
12	Nonnen	Nonne	NOUN	NN	_	9	nmod	_	SpaceAfter=No
13	.	--	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj:pass	color:blue
1	Poesie	Poesie	PROPN	NE	_	6	nsubj:pass	_	_
2	kann	können	AUX	VMFIN	_	6	aux	_	_
3	nur	nur	ADV	ADV	_	6	advmod	_	_
4	durch	durch	ADP	APPR	_	5	case	_	_
5	Poesie	Poesie	NOUN	NN	_	6	obl	_	_
6	kritisiert	kritisieren	VERB	VVPP	_	0	root	_	_
7	werden	werden	AUX	VAINF	_	6	aux:pass	_	SpaceAfter=No
8	.	--	PUNCT	$.	_	6	punct	_	_

~~~


