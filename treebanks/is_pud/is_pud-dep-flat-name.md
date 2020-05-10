---
layout: base
title:  'Statistics of flat:name in UD_Icelandic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-PUD: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="is_pud-dep-flat.html">flat</a></tt>.

319 nodes (2%) are attached to their parents as `flat:name`.

319 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.34796238244514.

The following 11 pairs of parts of speech are connected with `flat:name`: <tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt> (283; 89% instances), <tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_pud-pos-NUM.html">NUM</a></tt> (13; 4% instances), <tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (8; 3% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt> (6; 2% instances), <tt><a href="is_pud-pos-X.html">X</a></tt>-<tt><a href="is_pud-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="is_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Á	á	ADV	aa	_	3	obl	_	_
2	meðan	meðan	SCONJ	c	_	1	fixed	_	_
3	virðist	virða	VERB	sfm3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	Hong	Hong	PROPN	e	_	3	nsubj	_	_
5	Kong	Kong	PROPN	e	_	4	flat:name	_	_
6	búa	búa	VERB	sng	VerbForm=Inf|Voice=Act	3	xcomp	_	_
7	sig	sig	PRON	fpkeo	Case=Acc|Gender=Masc|Number=Sing|PronType=Prs	6	obj	_	_
8	undir	undir	ADP	aþ	_	9	case	_	_
9	hrinu	hrina	NOUN	nveþ	Case=Dat|Definite=Ind|Gender=Fem|Number=Sing	6	obl:arg	_	_
10	mótmæla	mótmæla	NOUN	sng	VerbForm=Inf|Voice=Act	9	nmod:poss	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	Fyrsti	fyrstur	ADJ	lkenve	Case=Nom|Definite=Def|Degree=Sup|Gender=Masc|Number=Sing	2	amod	_	_
2	konungur	konungur	NOUN	nken	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	5	nsubj	_	_
3	þeirra	hann	PRON	fpkfe	Case=Gen|Gender=Masc|Number=Plur|PronType=Prs	2	nmod:poss	_	_
4	var	vera	AUX	sfg3eþ	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	_
5	Mojmír	Mojmír	PROPN	nken-s	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
6	I	i	NUM	ta	_	5	flat:name	_	_
7	(	(	PUNCT	(	_	9	punct	_	SpaceAfter=No
8	sem	sem	SCONJ	ct	_	9	nsubj	_	_
9	ríkti	ríkja	VERB	sfg3eþ	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	_	_
10	830–846	830–846	NUM	ta	_	9	obl:arg	_	SpaceAfter=No
11	)	)	PUNCT	)	_	9	punct	_	SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Í	í	ADP	ao	_	2	case	_	_
2	morgun	morgunn	NOUN	nkeo	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	3	obl	_	_
3	hitti	hitta	VERB	sfg3eþ	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	Frans	Frans	PROPN	e	_	3	nsubj	_	_
5	páfi	páfi	NOUN	e	_	4	flat:name	_	_
6	Mark	Mark	PROPN	e	_	3	obj	_	_
7	Zuckerberg	Zuckerberg	PROPN	e	_	6	flat:name	_	_
8	og	og	CCONJ	c	_	9	cc	_	_
9	eiginkonu	eiginkona	NOUN	nveo	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	6	conj	_	_
10	hans	hann	PRON	fpkee	Case=Gen|Gender=Masc|Number=Sing|PronType=Prs	9	nmod:poss	_	_
11	í	í	ADP	aþ	_	12	case	_	_
12	Casa	Casa	PROPN	e	_	3	obl	_	_
13	Santa	Santa	PROPN	e	_	12	flat:name	_	_
14	Marta	Marta	PROPN	nveþ-s	Case=Dat|Gender=Fem|Number=Sing	12	flat:name	_	SpaceAfter=No
15	.	.	PUNCT	.	_	3	punct	_	_

~~~


