---
layout: base
title:  'Statistics of obl:mod in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `obl:mod`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `obl`: <tt><a href="fr_fqb-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="fr_fqb-dep-obl-arg.html">obl:arg</a></tt>.

606 nodes (3%) are attached to their parents as `obl:mod`.

426 instances of `obl:mod` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.46699669966997.

The following 14 pairs of parts of speech are connected with `obl:mod`: <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (340; 56% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (101; 17% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-NUM.html">NUM</a></tt> (47; 8% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (31; 5% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (30; 5% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (18; 3% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (8; 1% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-NUM.html">NUM</a></tt> (6; 1% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-X.html">X</a></tt> (4; 1% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 obl:mod	color:blue
1	Quelles	quel	DET	_	Gender=Fem|Number=Plur|PronType=Int	2	det	_	_
2	pièces	pièce	NOUN	_	Gender=Fem|Number=Plur	4	nsubj	_	_
3	justificatives	justificatif	ADJ	_	Gender=Fem|Number=Plur	2	amod	_	_
4	adresser	adresser	VERB	_	VerbForm=Inf	0	root	_	_
5	lord	lors_de	ADV	_	_	8	case	_	EXTPOS=ADP
6	de	_	ADP	_	_	5	fixed	_	_
7	ma	son	DET	_	Gender=Fem|Number=Sing|Poss=Yes	8	det	_	_
8	demande	demande	NOUN	_	Gender=Fem|Number=Sing	4	obl:mod	_	_
9	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 obl:mod	color:blue
1	Je	il	PRON	_	Number=Sing|Person=1	2	nsubj	_	_
2	vais	aller	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	partir	partir	VERB	_	VerbForm=Inf	2	xcomp	_	_
4	en	en	ADP	_	_	5	case	_	_
5	stage	stage	NOUN	_	Gender=Masc|Number=Sing	3	obl:mod	_	_
6	en	en	ADP	_	_	7	case	_	_
7	France	France	PROPN	_	Gender=Masc|Number=Sing	3	obl:mod	_	_
8	ou	ou	CCONJ	_	_	9	cc	_	_
9	à	à_l'étranger	ADP	_	_	7	conj	_	EXTPOS=ADV
10	l'	_	DET	_	_	9	fixed	_	SpaceAfter=No
11	étranger	_	NOUN	_	_	9	fixed	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 obl:mod	color:blue
1	Combien	combien	ADV	_	PronType=Int	7	obj	_	_
2	de	de	ADP	_	_	3	case	_	_
3	condoms	condom	NOUN	_	Gender=Masc|Number=Plur	1	obl:arg	_	_
4	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:tense	_	SpaceAfter=No
5	-t	t	PART	_	_	6	dep	_	SpaceAfter=No
6	-on	il	PRON	_	Number=Sing|Person=3	7	nsubj	_	_
7	vendu	vendre	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	à	à	ADP	_	_	10	case	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	Japon	Japon	PROPN	_	Gender=Masc|Number=Sing	7	obl:mod	_	_
11	en	en	ADP	_	_	12	case	_	_
12	1991	1991	NUM	_	NumType=Card	7	obl:mod	_	_
13	?	?	PUNCT	_	_	7	punct	_	_

~~~


