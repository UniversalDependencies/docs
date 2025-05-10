---
layout: base
title:  'Statistics of nsubj:pass in UD_Sindhi-Isra'
udver: '2'
---

## Treebank Statistics: UD_Sindhi-Isra: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="sd_isra-dep-nsubj.html">nsubj</a></tt>.

19 nodes (0%) are attached to their parents as `nsubj:pass`.

19 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.63157894736842.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="sd_isra-pos-VERB.html">VERB</a></tt>-<tt><a href="sd_isra-pos-NOUN.html">NOUN</a></tt> (16; 84% instances), <tt><a href="sd_isra-pos-VERB.html">VERB</a></tt>-<tt><a href="sd_isra-pos-PROPN.html">PROPN</a></tt> (3; 16% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nsubj:pass	color:blue
1	سو	سو	CCONJ	CC	_	7	cc	_	_
2	انهن	ان	DET	PRD	Case=Acc|Number=Plur	7	obl	_	_
3	لاءِ	لاءِ	ADP	PSP	_	2	case	_	_
4	شينهن	شينهن	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	6	nmod	_	_
5	جي	جي	ADP	PSPG	Case=Nom|Gender=Fem|Number=Sing	4	case	_	_
6	کل	کل	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	7	nsubj:pass	_	_
7	گهرجي	گهرجي	VERB	VM	Aspect=Imp|Number=Sing|Person=3|Voice=Pass	0	root	_	_
8	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 nsubj:pass	color:blue
1	سنڌ	سنڌ	PROPN	NNP	Case=Nom|Gender=Masc	8	nsubj:pass	_	_
2	۽	۽	CCONJ	CC	_	4	cc	_	_
3	گڊو	گڊو	PROPN	NNP	Case=Nom|Gender=Masc	4	compound	_	_
4	ڪئنال	ڪئنال	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	1	compound	_	_
5	کي	کي	ADP	PSP	_	4	case	_	_
6	22	22	NUM	NUM	_	7	nummod	_	_
7	گهارا	گهارو	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	8	nmod	_	_
8	پئجي	پئج	VERB	VM	Aspect=Imp|Voice=Pass	0	root	_	_
9	ويا	ويو	VERB	VM	Aspect=Perf|Number=Plur	8	compound	_	_
10	آهن	آهي	AUX	VAUX	Number=Plur|Tense=Pres	8	aux	_	_
11	،	،	PUNCT	PUNCT	_	8	punct	_	_

~~~


