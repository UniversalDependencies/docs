---
layout: base
title:  'Statistics of nsubj:pass in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-nsubj.html">nsubj</a></tt>.

1544 nodes (1%) are attached to their parents as `nsubj:pass`.

1473 instances of `nsubj:pass` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.8050518134715.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (621; 40% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (582; 38% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (172; 11% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (127; 8% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NUM.html">NUM</a></tt> (33; 2% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> (8; 1% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nsubj:pass	color:blue
1	signum	signum	NOUN	n|n|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
2	+	+	PUNCT	SYM	_	3	punct	_	_
3	manus	manus	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	_
4	Ursi	Ursus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	10	punct	_	_
6	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	10	nsubj	_	_
7	hunc	hic	DET	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
8	libellum	libellus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	9	nsubj:pass	_	_
9	fieri	fio	VERB	v|v|-|-|p|n|p|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Pass	10	ccomp	_	_
10	rogavit	rogo	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
1	signum	signum	NOUN	n|n|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
2	+	+	PUNCT	SYM	_	3	punct	_	_
3	manus	manus	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	_
4	Rapprandi	Rapprandus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
5	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	7	nsubj:pass	_	_
6	Ato	Atus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	7	xcomp	_	_
7	vocatur	uoco	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	acl:relcl	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	11	punct	_	_
9	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	11	nsubj	_	_
10	ibi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	11	advmod	_	_
11	fuit	sum	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	SpaceAfter=No
12	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:pass	color:blue
1	amplius	amplius	ADV	d|d|-|-|-|-|-|-|-|-	_	4	advmod	_	_
2	vovis	uos	PRON	p|p|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	4	obl:arg	_	_
3	nulla	nullus	DET	a|a|-|p|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Plur|PronType=Ind,Neg	4	nsubj:pass	_	_
4	superinponatur	superimpono	VERB	v|v|3|s|p|s|p|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


