---
layout: base
title:  'Statistics of nmod:poss in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="de_lit-dep-nmod.html">nmod</a></tt>.

78 nodes (0%) are attached to their parents as `nmod:poss`.

69 instances of `nmod:poss` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.69230769230769.

The following 7 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt> (38; 49% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (20; 26% instances), <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt> (9; 12% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (7; 9% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Lessings	Lessing	PROPN	NE	_	2	nmod:poss	_	_
2	Ironie	Ironie	NOUN	NN	_	4	nsubj	_	_
3	ist	sein	AUX	VAFIN	_	4	cop	_	_
4	Instinkt	Instinkt	NOUN	NN	_	0	root	_	SpaceAfter=No
5	;	--	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	besonders	besonders	ADV	ADV	_	4	advmod	_	_
2	wider	wider	ADV	ADV	_	4	advmod	_	_
3	ihre	ihr	DET	PPOSAT	_	4	nmod:poss	_	_
4	Poesie	Poesie	NOUN	NN	_	0	root	_	SpaceAfter=No
5	.	--	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nmod:poss	color:blue
1	Es	es	PRON	PPER	_	2	expl	_	_
2	gibt	geben	VERB	VVFIN	_	0	root	_	_
3	einen	ein	DET	ART	_	5	det	_	_
4	andern	anderer	ADJ	ADJA	_	5	amod	_	_
5	Ehrgeiz	Ehrgeiz	NOUN	NN	_	2	obj	_	SpaceAfter=No
6	,	--	PUNCT	$,	_	8	punct	_	_
7	der	der	DET	PRELS	_	8	det	_	_
8	lieber	lieber	ADV	ADV	_	5	parataxis	_	_
9	wie	wie	CCONJ	KOKOM	_	11	case	_	_
10	Tassos	Tasso	PROPN	NE	_	11	nmod:poss	_	_
11	Gabriel	Gabriel	PROPN	NE	_	8	nmod	_	SpaceAfter=No
12	:	--	PUNCT	$.	_	2	punct	_	_

~~~


