---
layout: base
title:  'Statistics of csubj:pass in UD_Greek-GLCII'
udver: '2'
---

## Treebank Statistics: UD_Greek-GLCII: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="el_glcii-dep-csubj.html">csubj</a></tt>.

2 nodes (0%) are attached to their parents as `csubj:pass`.

2 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 csubj:pass	color:blue
1	Δηλαδή	δηλαδή	ADV	ADV	_	4	advmod	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	4	punct	_	_
3	έχει	έχω	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	παρατηρηθεί	παρατηρώ	VERB	VERB	Aspect=Perf|VerbForm=Inf|Voice=Pass	0	root	_	_
5	ότι	ότι	SCONJ	SCONJ	_	6	mark	_	_
6	έχουμε	έχω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	csubj:pass	_	_
7	ζεστούς	ζεστός	ADJ	ADJ	Case=Acc|Gender=Masc|Number=Plur	8	amod	_	_
8	χειμώνες	χειμώνας	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Plur	6	obj	_	_
9	και	και	CCONJ	CCONJ	_	10	cc	_	_
10	καλοκαίρια	καλοκαίρι	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	8	conj	_	_
11	με	με	ADP	ADP	_	12	case	_	_
12	κάυσωνες	κάυσωνας	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Plur	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


