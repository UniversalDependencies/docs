---
layout: base
title:  'Statistics of conj in UD_Azerbaijani-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Azerbaijani-TueCL: Relations: `conj`

This relation is universal.

26 nodes (3%) are attached to their parents as `conj`.

26 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.61538461538461.

The following 7 pairs of parts of speech are connected with `conj`: <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt> (17; 65% instances), <tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt> (2; 8% instances), <tt><a href="az_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="az_tuecl-pos-PROPN.html">PROPN</a></tt> (2; 8% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-PROPN.html">PROPN</a></tt> (2; 8% instances), <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="az_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 conj	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	çalışdı	çalış	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	kı	ki	SCONJ	_	_	9	mark	_	_
4	siqar	siqar	NOUN	_	Case=Nom|Number=Sing	5	compound	_	_
5	çekmə	çek	VERB	_	VerbForm=Vnoun	9	xcomp	_	_
6	və	və	CCONJ	_	_	8	cc	_	_
7	əlkol	alkol	NOUN	_	Case=Nom|Number=Sing	8	obj	_	_
8	içməni	iç	VERB	_	Case=Acc|Number=Sing|VerbForm=Vnoun	5	conj	_	_
9	tərkidə	tərk	VERB	_	Mood=Sub|Number=Sing|Person=3	2	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 conj	color:blue
1	Bazarda	Bazar	NOUN	_	Case=Loc|Number=Sing	3	obl	_	_
2	mivə	mivə	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	_
3	var	var	ADJ	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	amma	amma	CCONJ	_	_	5	cc	_	_
5	yaxçı	yaxçı	ADJ	_	_	3	conj	_	_
6	dəyil	dəyil	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	5	aux	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 conj	color:blue
1	Nə	nə	CCONJ	_	_	2	cc	_	_
2	Peter	Peter	PROPN	_	Case=Nom|Number=Sing	10	nsubj	_	_
3	Smith	Smith	PROPN	_	Case=Nom|Number=Sing	2	flat	_	_
4	nə	nə	CCONJ	_	ExtPos=CCONJ	6	cc	_	_
5	də	də	ADV	_	_	4	fixed	_	_
6	Mary	Mary	PROPN	_	Case=Nom|Number=Sing	2	conj	_	_
7	Brown	Brown	PROPN	_	Case=Nom|Number=Sing	6	flat	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	intixab	intixab	NOUN	_	Case=Nom|Number=Sing	10	compound:lvc	_	_
10	ola	ol	VERB	_	Mood=Sub|VerbForm=Conv	0	root	_	_
11	bildi	bil	AUX	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	10	aux	_	SpaceAfter=No
12	.	.	PUNCT	_	_	10	punct	_	_

~~~


