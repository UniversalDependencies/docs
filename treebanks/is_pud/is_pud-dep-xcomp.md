---
layout: base
title:  'Statistics of xcomp in UD_Icelandic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-PUD: Relations: `xcomp`

This relation is universal.

288 nodes (2%) are attached to their parents as `xcomp`.

286 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.87847222222222.

The following 12 pairs of parts of speech are connected with `xcomp`: <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (194; 67% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt> (35; 12% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (31; 11% instances), <tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (13; 5% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt> (7; 2% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-INTJ.html">INTJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 xcomp	color:blue
1	Það	það	PRON	fphen	Case=Nom|Gender=Neut|Number=Sing|PronType=Prs	4	expl	_	_
2	er	vera	AUX	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	vegna	vegna	ADP	ae	_	4	case	_	_
4	þessa	þessi	PRON	fahee	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	0	root	_	_
5	sem	sem	SCONJ	ct	_	7	mark	_	_
6	við	ég	PRON	fp1fn	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
7	komum	koma	VERB	sfg1fþ	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	_
8	alltaf	alltaf	ADV	aa	_	7	advmod	_	_
9	aftur	aftur	ADV	aa	_	7	advmod	_	_
10	til	til	ADP	ae	_	7	compound:prt	_	_
11	að	að	PART	cn	_	12	mark	_	_
12	fá	fá	VERB	sng	VerbForm=Inf|Voice=Act	7	xcomp	_	_
13	meira	mikill	ADJ	lheovm	Case=Acc|Definite=Def|Degree=Cmp|Gender=Neut|Number=Sing	12	obj	_	SpaceAfter=No
14	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Winstone	winstone	NOUN	nken	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	3	nsubj	_	_
2	var	vera	AUX	sfg3eþ	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	aux	_	_
3	lýstur	lýsa	VERB	sþgken	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	gjaldþrota	gjaldþrota	ADJ	lkenof	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	xcomp	_	_
5	4.	4.	NUM	ta	_	6	nummod	_	_
6	október	október	NOUN	nkeo	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	3	obl	_	_
7	1988	1988	NUM	ta	_	6	nummod	_	_
8	og	og	CCONJ	c	_	11	cc	_	_
9	aftur	aftur	ADV	aa	_	11	advmod	_	_
10	19.	19.	NUM	lkeovf	Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	_
11	mars	mars	NOUN	nkeo	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	6	conj	_	_
12	1993	1993	NUM	ta	_	11	nmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
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


