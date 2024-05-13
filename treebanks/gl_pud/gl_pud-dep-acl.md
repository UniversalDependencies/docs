---
layout: base
title:  'Statistics of acl in UD_Galician-PUD'
udver: '2'
---

## Treebank Statistics: UD_Galician-PUD: Relations: `acl`

This relation is universal.

429 nodes (2%) are attached to their parents as `acl`.

421 instances of `acl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.90909090909091.

The following 17 pairs of parts of speech are connected with `acl`: <tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (350; 82% instances), <tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (26; 6% instances), <tt><a href="gl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (11; 3% instances), <tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt> (10; 2% instances), <tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt> (8; 2% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (7; 2% instances), <tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="gl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="gl_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="gl_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="gl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl	color:blue
1	5000	5000	NUM	Z	NumType=Card	2	nummod	_	_
2	dólares	dólar	NOUN	NCMP000	Gender=Masc|Number=Plur	0	root	_	_
3	por	por	ADP	SP	AdpType=Prep	4	case	_	_
4	persoa	persoa	NOUN	NCFS000	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	Fc	_	7	punct	_	_
6	o	o	DET	DA0MS0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	máximo	máximo	NOUN	NCMS000	Gender=Masc|Number=Sing	2	appos	_	_
8	permitido	permitir	VERB	VMP00SM	Gender=Masc|Number=Sing|VerbForm=Part	7	acl	_	SpaceAfter=No
9	.	.	PUNCT	Fp	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 acl	color:blue
1	O	o	DET	DA0MS0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
2	seu	seu	DET	DP3MS0	Definite=Def|Gender=Masc|Number=Sing|Person=3|Poss=Yes	4	det	_	_
3	primeiro	primeiro	ADJ	AQ0MS	_	4	amod	_	_
4	rei	rei	NOUN	NCMS000	Gender=Masc|Number=Sing	0	root	_	_
5	foi	ser	AUX	VSIS3S0	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	cop	_	_
6	Mojmír	Mojmír	PROPN	NP00000	_	4	nsubj	_	_
7	I	i	NUM	Z	NumType=Ord	6	flat:name	_	SpaceAfter=No
8	,	,	PUNCT	Fc	_	10	punct	_	_
9	que	que	PRON	PR0CN000	Gender=Neut|PronType=Rel	10	nsubj	_	_
10	gobernou	gobernar	VERB	VMIS3S0	Mood=Ind|Number=Sing|Person=3|Tense=Past	6	acl	_	_
11	de	de	ADP	SP	AdpType=Prep	12	case	_	_
12	830	830	NUM	Z	NumType=Card	10	obl	_	_
13	a	a	ADP	SP	AdpType=Prep	14	case	_	_
14	846	846	NUM	Z	NumType=Card	10	obl	_	SpaceAfter=No
15	.	.	PUNCT	Fp	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl	color:blue
1	El	el	PRON	PP3MS000	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	cre	crer	VERB	VMIP3S0	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	que	que	SCONJ	CS	_	10	mark	_	_
4	ninguén	ninguén	PRON	PI0CN000	Gender=Neut|PronType=Ind	10	nsubj	_	_
5	que	que	PRON	PR0CN000	Gender=Neut|PronType=Rel	7	nsubj	_	_
6	nos	nos	PRON	PP1CP000	Gender=Com|Number=Plur|Person=1|PronType=Prs	7	iobj	_	_
7	espera	esperar	VERB	VMIP3S0	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	acl	_	_
8	nos	nos	PRON	PP1CP000	Gender=Com|Number=Plur|Person=1|PronType=Prs	10	iobj	_	_
9	está	estar	AUX	VMIP3S0	Mood=Ind|Number=Sing|Person=3|Tense=Pres	10	aux	_	_
10	esperando	esperar	VERB	VMG0000	VerbForm=Ger	2	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	Fp	_	2	punct	_	_

~~~


