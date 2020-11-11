---
layout: base
title:  'Statistics of acl in UD_Icelandic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="is_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

171 nodes (1%) are attached to their parents as `acl`.

170 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.95321637426901.

The following 14 pairs of parts of speech are connected with `acl`: <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (85; 50% instances), <tt><a href="is_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (38; 22% instances), <tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (8; 5% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (7; 4% instances), <tt><a href="is_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (7; 4% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt> (6; 4% instances), <tt><a href="is_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt> (6; 4% instances), <tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="is_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl	color:blue
1	Þetta	þessi	PRON	fahen	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	_	_
2	er	vera	AUX	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	heimavarnarógn	heimavarnarógn	NOUN	nven	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	_
4	eins	eins	ADV	aa	_	7	mark	_	_
5	og	og	CCONJ	c	_	4	fixed	_	_
6	hún	hún	PRON	fpven	Case=Nom|Gender=Fem|Number=Sing|PronType=Prs	7	nsubj	_	_
7	gerist	gera	VERB	sfm3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	acl	_	_
8	alvarlegust	alvarlegust	NOUN	nxen	Case=Nom|Definite=Ind|Number=Sing	7	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 acl	color:blue
1	Í	í	ADP	aþ	_	3	case	_	_
2	þessu	þessi	PRON	faheþ	Case=Dat|Gender=Neut|Number=Sing|PronType=Dem	3	nmod	_	_
3	samhengi	samhengi	NOUN	nheþ	Case=Dat|Definite=Ind|Gender=Neut|Number=Sing	7	obl	_	_
4	er	vera	AUX	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
5	vit	vit	NOUN	nhen	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	7	nsubj	_	_
6	í	í	ADP	aþ	_	7	case	_	_
7	því	það	PRON	fpheþ	Case=Dat|Gender=Neut|Number=Sing|PronType=Prs	0	root	_	_
8	að	að	PART	cn	_	9	mark	_	_
9	bölsótast	bölsótast	VERB	snm	VerbForm=Inf|Voice=Pass	7	acl	_	_
10	út	út	ADV	aa	_	12	mark	_	_
11	í	í	ADP	ao	_	12	case	_	_
12	viðskipti	viðskipti	NOUN	nhfo	Case=Acc|Definite=Ind|Gender=Neut|Number=Plur	9	obl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 18 acl	color:blue
1	Þeir	hann	PRON	fpkfn	Case=Nom|Gender=Masc|Number=Plur|PronType=Prs	2	nsubj	_	_
2	færðu	færa	VERB	sfg3fþ	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	þó	þó	ADV	aa	_	2	advmod	_	_
4	ekki	ekki	ADV	aa	_	2	advmod	_	_
5	út	út	ADV	aa	_	2	advmod	_	_
6	kvíarnar	kví	NOUN	nvfog	Case=Acc|Definite=Def|Gender=Fem|Number=Plur	2	obj	_	_
7	fyrr	snemmt	ADV	aam	_	9	cc	_	_
8	en	en	CCONJ	c	_	7	fixed	_	_
9	byggð	byggja	VERB	sþghfn	Case=Nom|Gender=Neut|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	2	conj	_	_
10	voru	vera	AUX	sfg3fþ	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	aux	_	_
11	skip	skip	NOUN	nhfn	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	9	nsubj	_	_
12	sem	sem	SCONJ	ct	_	15	nsubj	_	_
13	voru	vera	AUX	sfg3fþ	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	15	cop	_	_
14	nógu	nógur	ADJ	lheþsf	Case=Dat|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	15	amod	_	_
15	stór	stór	ADJ	lhfnsf	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Plur	11	acl:relcl	_	_
16	til	til	ADP	ae	_	18	mark	_	_
17	að	að	PART	cn	_	16	fixed	_	_
18	sigla	sigla	VERB	sng	VerbForm=Inf|Voice=Act	15	acl	_	_
19	yfir	yfir	ADP	ao	_	20	case	_	_
20	úthöf	úthaf	NOUN	nhfo	Case=Acc|Definite=Ind|Gender=Neut|Number=Plur	18	obl	_	SpaceAfter=No
21	.	.	PUNCT	.	_	2	punct	_	_

~~~


