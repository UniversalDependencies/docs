---
layout: base
title:  'Statistics of aux:neg in UD_Maltese-MUDT'
udver: '2'
---

## Treebank Statistics: UD_Maltese-MUDT: Relations: `aux:neg`

This relation is a language-specific subtype of <tt><a href="mt_mudt-dep-aux.html">aux</a></tt>.
There are also 2 other language-specific subtypes of `aux`: <tt><a href="mt_mudt-dep-aux-part.html">aux:part</a></tt>, <tt><a href="mt_mudt-dep-aux-pass.html">aux:pass</a></tt>.

624 nodes (1%) are attached to their parents as `aux:neg`.

623 instances of `aux:neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.46314102564103.

The following 13 pairs of parts of speech are connected with `aux:neg`: <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-PART.html">PART</a></tt> (476; 76% instances), <tt><a href="mt_mudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt_mudt-pos-PART.html">PART</a></tt> (63; 10% instances), <tt><a href="mt_mudt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mt_mudt-pos-PART.html">PART</a></tt> (43; 7% instances), <tt><a href="mt_mudt-pos-ADV.html">ADV</a></tt>-<tt><a href="mt_mudt-pos-PART.html">PART</a></tt> (16; 3% instances), <tt><a href="mt_mudt-pos-PRON.html">PRON</a></tt>-<tt><a href="mt_mudt-pos-PART.html">PART</a></tt> (11; 2% instances), <tt><a href="mt_mudt-pos-NUM.html">NUM</a></tt>-<tt><a href="mt_mudt-pos-PART.html">PART</a></tt> (4; 1% instances), <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="mt_mudt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mt_mudt-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="mt_mudt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mt_mudt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="mt_mudt-pos-AUX.html">AUX</a></tt>-<tt><a href="mt_mudt-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="mt_mudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt_mudt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="mt_mudt-pos-PRON.html">PRON</a></tt>-<tt><a href="mt_mudt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux:neg	color:blue
1	M'	_	PART	NEG	_	2	aux:neg	_	SpaceAfter=No
2	għażilx	_	VERB	VERB	_	0	root	_	_
3	li	_	SCONJ	COMP	_	4	mark	_	_
4	joqgħod	_	VERB	VERB	_	2	xcomp	_	_
5	komdu	_	ADJ	ADJ	_	4	xcomp	_	_
6	jsaħħan	_	VERB	VERB	_	5	xcomp	_	_
7	is-	_	DET	DEF	_	8	det	_	SpaceAfter=No
8	siġġu	_	NOUN	NOUN	_	6	obj	_	_
9	tal-	_	ADP	GEN_DEF	_	10	case:det	_	SpaceAfter=No
10	poter	_	NOUN	NOUN	_	8	nmod:poss	_	SpaceAfter=No
11	.	_	PUNCT	X_PUN	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:neg	color:blue
1	"	_	PUNCT	X_PUN	_	4	punct	_	_
2	Din	_	PRON	PRON_DEM	_	4	nsubj	_	_
3	mhix	_	PART	PRON_PERS_NEG	_	4	aux:neg	_	_
4	kwistjoni	_	NOUN	NOUN	_	0	root	_	_
5	politika	_	ADJ	ADJ	_	4	amod	_	SpaceAfter=No
6	.	_	PUNCT	X_PUN	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux:neg	color:blue
1	"	_	PUNCT	X_PUN	_	4	punct	_	SpaceAfter=No
2	Dik	_	PRON	PRON_DEM	_	4	nsubj	_	_
3	mhux	_	PART	PRON_PERS_NEG	_	4	aux:neg	_	_
4	bħali	_	PRON	PREP_PRON	_	0	root	_	_
5	ħija	_	NOUN	NOUN	_	4	vocative	_	SpaceAfter=No
6	,	_	PUNCT	X_PUN	_	4	punct	_	_
7	dik	_	PRON	PRON_DEM	_	9	nsubj	_	_
8	mhux	_	PART	PRON_PERS_NEG	_	9	aux:neg	_	_
9	normali	_	ADJ	ADJ	_	4	conj	_	SpaceAfter=No
10	,	_	PUNCT	X_PUN	_	9	punct	_	SpaceAfter=No
11	"	_	PUNCT	X_PUN	_	4	punct	_	_
12	kompliet	_	VERB	VERB	_	4	parataxis	_	_
13	oħtha	_	NOUN	NOUN	_	12	nsubj	_	SpaceAfter=No
14	.	_	PUNCT	X_PUN	_	4	punct	_	_

~~~


