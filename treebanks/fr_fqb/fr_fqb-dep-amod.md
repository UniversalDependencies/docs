---
layout: base
title:  'Statistics of amod in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `amod`

This relation is universal.

948 nodes (4%) are attached to their parents as `amod`.

667 instances of `amod` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.21097046413502.

The following 2 pairs of parts of speech are connected with `amod`: <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt> (915; 97% instances), <tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt> (33; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	Quelles	quel	DET	_	Gender=Fem|Number=Plur|PronType=Int	2	det	_	_
2	pièces	pièce	NOUN	_	Gender=Fem|Number=Plur	4	nsubj	_	_
3	justificatives	justificatif	ADJ	_	Gender=Fem|Number=Plur	2	amod	_	_
4	adresser	adresser	VERB	_	VerbForm=Inf	0	root	_	_
5	lord	lors	ADV	_	Typo=Yes	4	advmod	_	CorrectForm=lors
6	de	de	ADP	_	_	8	case	_	_
7	ma	son	DET	_	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	8	det	_	_
8	demande	demande	NOUN	_	Gender=Fem|Number=Sing	5	obl:arg	_	_
9	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod	color:blue
1	Combien	combien	ADV	_	PronType=Int	12	obj	_	_
2	de	de	ADP	_	_	3	case	_	_
3	titres	titre	NOUN	_	Gender=Masc|Number=Plur	1	obl:arg	_	_
4	de	de	ADP	_	_	7	case	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	Grand	grand	ADJ	_	Gender=Masc|Number=Sing	7	amod	_	_
7	Slam	Slam	PROPN	_	_	3	nmod	_	_
8	Bjorn	Bjorn	PROPN	_	_	12	nsubj	_	_
9	Borg	Borg	PROPN	_	_	8	flat:name	_	_
10	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux:tense	_	SpaceAfter=No
11	-t-il	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	expl:subj	_	_
12	remportés	remporter	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
13	?	?	PUNCT	_	_	12	punct	_	_

~~~


