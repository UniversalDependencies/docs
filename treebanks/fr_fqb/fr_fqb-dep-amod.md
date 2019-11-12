---
layout: base
title:  'Statistics of amod in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `amod`

This relation is universal.

944 nodes (4%) are attached to their parents as `amod`.

668 instances of `amod` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.21186440677966.

The following 3 pairs of parts of speech are connected with `amod`: <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt> (910; 96% instances), <tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt> (33; 3% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (1; 0% instances).


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
5	lord	lors_de	ADV	_	_	8	case	_	EXTPOS=ADP
6	de	_	ADP	_	_	5	fixed	_	_
7	ma	son	DET	_	Gender=Fem|Number=Sing|Poss=Yes	8	det	_	_
8	demande	demande	NOUN	_	Gender=Fem|Number=Sing	4	obl:mod	_	_
9	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod	color:blue
1	Combien	combien	ADV	_	PronType=Int	13	obj	_	_
2	de	de	ADP	_	_	3	case	_	_
3	titres	titre	NOUN	_	Gender=Masc|Number=Plur	1	obl:arg	_	_
4	de	de	ADP	_	_	7	case	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	Grand	grand	ADJ	_	Gender=Masc|Number=Sing	7	amod	_	_
7	Slam	Slam	PROPN	_	_	3	nmod	_	_
8	Bjorn	Bjorn	PROPN	_	_	13	nsubj	_	_
9	Borg	Borg	PROPN	_	_	8	flat:name	_	_
10	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux:tense	_	SpaceAfter=No
11	-t	t	PART	_	_	12	dep	_	SpaceAfter=No
12	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	13	expl:subj	_	_
13	remportés	remporter	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
14	?	?	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 amod	color:blue
1	Quelle	quel	DET	_	Gender=Fem|Number=Sing|PronType=Int	2	det	_	_
2	équipe	équipe	NOUN	_	Gender=Fem|Number=Sing	10	nsubj	_	_
3	de	de	ADP	_	_	5	case	_	_
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Ligue	Ligue	PROPN	_	_	2	nmod	_	_
6	Majeure	majeur	ADJ	_	Gender=Fem|Number=Sing	5	amod	_	_
7	de	de	ADP	_	_	8	case	_	_
8	baseball	baseball	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	_
9	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:tense	_	_
10	remporté	remporter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
11	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
12	plus	plus	ADV	_	_	11	advmod	_	_
13	de	de	ADP	_	_	12	fixed	_	_
14	victoires	victoire	NOUN	_	Gender=Fem|Number=Plur	10	obj	_	_
15	d'	d'affilé	ADP	_	_	14	amod	_	EXTPOS=ADJ|SpaceAfter=No
16	affilé	_	ADJ	_	_	15	fixed	_	_
17	?	?	PUNCT	_	_	10	punct	_	_

~~~


