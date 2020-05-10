---
layout: base
title:  'Statistics of dislocated:ccomp in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `dislocated:ccomp`

This relation is a language-specific subtype of .
There are also 9 other language-specific subtypes of `dislocated`: <tt><a href="la_llct-dep-dislocated-acl.html">dislocated:acl</a></tt>, <tt><a href="la_llct-dep-dislocated-advcl.html">dislocated:advcl</a></tt>, <tt><a href="la_llct-dep-dislocated-advmod.html">dislocated:advmod</a></tt>, <tt><a href="la_llct-dep-dislocated-conj.html">dislocated:conj</a></tt>, <tt><a href="la_llct-dep-dislocated-csubj.html">dislocated:csubj</a></tt>, <tt><a href="la_llct-dep-dislocated-nmod.html">dislocated:nmod</a></tt>, <tt><a href="la_llct-dep-dislocated-nsubj.html">dislocated:nsubj</a></tt>, <tt><a href="la_llct-dep-dislocated-obj.html">dislocated:obj</a></tt>, <tt><a href="la_llct-dep-dislocated-obl.html">dislocated:obl</a></tt>.

2 nodes (0%) are attached to their parents as `dislocated:ccomp`.

2 instances of `dislocated:ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 43.5.

The following 1 pairs of parts of speech are connected with `dislocated:ccomp`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 52	bgColor:blue
# visual-style 52	fgColor:white
# visual-style 51	bgColor:blue
# visual-style 51	fgColor:white
# visual-style 51 52 dislocated:ccomp	color:blue
1	tunc	tunc	ADV	d|d|-|-|-|-|-|-|-|-	_	27	advmod	_	_
2	ipsi	ipse	DET	p|p|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	3	det	_	_
3	missi	missus	NOUN	n|n|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur	27	nsubj	_	_
4	domni	domnus	NOUN	n|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
5	imperatori	imperator	NOUN	n|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
6	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	8	case	_	_
7	nominati	nomino	VERB	t|t|-|p|r|p|p|m|b|-	Aspect=Perf|Case=Abl|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	8	acl	_	_
8	hominibus	homo	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	28	obl	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	8	punct	_	_
10	hic	hic	DET	p|p|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	11	nsubj	_	_
11	sunt	sum	VERB	v|v|3|p|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	28	advcl	_	_
12	Aggo	Agius	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	28	nsubj	_	SpaceAfter=No
13	,	,	PUNCT	Punc	_	14	punct	_	_
14	Ildo	Hildus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	12	conj	_	_
15	germani	germanus	NOUN	n|n|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur	12	appos	_	SpaceAfter=No
16	,	,	PUNCT	Punc	_	17	punct	_	_
17	Aroghisi	Aruchisus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	12	conj	_	SpaceAfter=No
18	,	,	PUNCT	Punc	_	19	punct	_	_
19	Deusdedi	Deusdedit	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	12	conj	_	SpaceAfter=No
20	,	,	PUNCT	Punc	_	21	punct	_	_
21	Popo	Popus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	12	conj	_	_
22	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	23	cc	_	_
23	Teuderado	Teuderadus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	21	conj	_	_
24	germani	germanus	NOUN	n|n|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur	21	appos	_	SpaceAfter=No
25	,	,	PUNCT	Punc	_	12	punct	_	_
26	suas	suus	DET	a|a|3|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	29	det	_	_
27	fecerunt	facio	VERB	v|v|3|p|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
28	venire	uenio	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	27	xcomp	_	_
29	presentia	praesentia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	28	obl	_	SpaceAfter=No
30	,	,	PUNCT	Punc	_	33	punct	_	_
31	qui	qui	PRON	p|p|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	33	nsubj	_	_
32	hoc	hic	DET	p|p|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	33	obj	_	_
33	sciebant	scio	VERB	v|v|3|p|i|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	12	acl:relcl	_	_
34	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	38	cc	_	_
35	unusquisque	unusquisque	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	37	nsubj	_	_
36	eis	is	PRON	p|p|-|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Dem,Prs	37	obl:arg	_	_
37	iurare	iuro	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	38	ccomp	_	_
38	fecerunt	facio	VERB	v|v|3|p|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	27	conj	_	_
39	a	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	41	case	_	_
40	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	41	nmod	_	_
41	euvangelia	euangelium	NOUN	n|n|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur	37	obl	_	_
42	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	51	mark	_	_
43	quicquit	quisquis	PRON	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind,Rel	45	obj	_	_
44	exinde	exinde	ADV	d|d|-|-|-|-|-|-|-|-	_	45	advmod	_	_
45	sciret	scio	VERB	v|v|3|s|i|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	51	ccomp	_	SpaceAfter=No
46	,	,	PUNCT	Punc	_	45	punct	_	_
47	certa	certus	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	52	amod	_	_
48	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	49	case	_	_
49	omnibus	omnis	DET	a|a|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur|PronType=Tot	51	obl	_	_
50	eis	is	PRON	p|p|-|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Dem,Prs	51	obl:arg	_	_
51	dicere	dico	VERB	v|v|3|s|i|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	37	ccomp	_	_
52	veritate	ueritas	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	51	dislocated:ccomp	_	SpaceAfter=No
53	.	.	PUNCT	Punc	_	27	punct	_	_

~~~


