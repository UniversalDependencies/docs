---
layout: base
title:  'Statistics of aux:pass in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="de_lit-dep-aux.html">aux</a></tt>.

166 nodes (0%) are attached to their parents as `aux:pass`.

124 instances of `aux:pass` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.50602409638554.

The following 5 pairs of parts of speech are connected with `aux:pass`: <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (159; 96% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (3; 2% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux:pass	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 aux:pass	color:blue
1	Durch	durch	ADP	APPR	_	2	case	_	_
2	Humor	Humor	NOUN	NN	_	8	nmod	_	_
3	wird	werden	AUX	VAFIN	_	8	aux:pass	_	_
4	das	der	DET	ART	_	6	det	_	_
5	eigenthümlich	eigenthümlich	ADV	ADV	_	8	advmod	_	_
6	Bedingte	bedingter	NOUN	NN	_	8	nsubj	_	_
7	allgemein	allgemein	ADV	ADV	_	8	advmod	_	_
8	interessant	interessant	ADJ	ADJD	_	0	root	_	SpaceAfter=No
9	,	--	PUNCT	$,	_	11	punct	_	_
10	und	und	CCONJ	KON	_	11	cc	_	_
11	erhält	erhalten	VERB	VVFIN	_	8	conj	_	_
12	objektiven	objektiv	ADJ	ADJA	_	13	amod	_	_
13	Werth	Werth	NOUN	NN	_	11	obj	_	SpaceAfter=No
14	.	--	PUNCT	$.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 aux:pass	color:blue
1	Viele	viel	DET	PIAT	_	3	det	_	_
2	philosophische	philosophisch	ADJ	ADJA	_	3	amod	_	_
3	Schriften	Schrift	NOUN	NN	_	12	nsubj	_	SpaceAfter=No
4	,	--	PUNCT	$,	_	3	punct	_	_
5	die	der	PRON	PRELS	_	9	nsubj	_	_
6	es	es	PRON	PPER	_	9	obj	_	_
7	sonst	sonst	ADV	ADV	_	9	advmod	_	_
8	nicht	nicht	PART	PTKNEG	_	9	advmod	_	_
9	haben	haben	AUX	VAINF	_	3	acl	_	_
10	würden	werden	AUX	VAFIN	_	9	aux:pass	_	SpaceAfter=No
11	,	--	PUNCT	$,	_	9	punct	_	_
12	erhalten	erhalten	VERB	VVFIN	_	0	root	_	_
13	dadurch	dadurch	ADV	PROAV	_	12	advmod	_	_
14	ein	ein	DET	ART	_	16	det	_	_
15	großes	groß	ADJ	ADJA	_	16	amod	_	_
16	Interesse	Interesse	NOUN	NN	_	12	obj	_	SpaceAfter=No
17	.	--	PUNCT	$.	_	12	punct	_	_

~~~


