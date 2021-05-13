---
layout: base
title:  'Statistics of parataxis in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `parataxis`

This relation is universal.

107 nodes (0%) are attached to their parents as `parataxis`.

73 instances of `parataxis` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 14.0093457943925.

The following 11 pairs of parts of speech are connected with `parataxis`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (72; 67% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (9; 8% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (7; 7% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (7; 7% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 5 parataxis	color:blue
1	Sa	son	DET	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	wordform=sa
2	voix	voix	NOUN	NN	Gender=Fem|Number=Sing	5	nsubj	_	_
3	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:tense	_	_
4	littéralement	littéralement	ADV	RB	_	5	advmod	_	_
5	fait	faire	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	12	parataxis	_	_
6	le	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	tour	tour	NOUN	NN	Gender=Masc|Number=Sing	5	obj	_	_
8	de	de	ADP	INDT	_	10	case	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	monde	monde	NOUN	NN	Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
11	,	,	PUNCT	,	_	5	punct	_	_
12	dit	dire	VERB	VBN	Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
13	Leive	Leive	PROPN	NNP	Gender=Fem|Number=Sing	12	nsubj	_	SpaceAfter=No
14	.	.	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 parataxis	color:blue
1	D’	de	ADP	IN	_	2	case	_	SpaceAfter=No|wordform=d'
2	où	où	ADV	WRB	_	3	obl	_	_
3	vient	venir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	toute	tout	ADJ	PDT	Gender=Fem|Number=Sing	6	amod	_	_
5	son	son	DET	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det	_	_
6	énergie	énergie	NOUN	NN	Gender=Fem|Number=Sing	3	nsubj	_	_
7	?	?	PUNCT	.	_	3	punct	_	_
8	Et	et	CCONJ	CC	_	10	cc	_	wordform=et
9	cette	ce	DET	DT	Gender=Fem|Number=Sing	10	det	_	_
10	voix	voix	NOUN	NN	Gender=Fem|Number=Sing	3	parataxis	_	SpaceAfter=No
11	,	,	PUNCT	,	_	13	punct	_	_
12	qui	qui	PRON	WP	PronType=Rel	13	nsubj	_	_
13	pourrait	pouvoir	VERB	VBC	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	acl:relcl	_	_
14	provoquer	provoquer	VERB	VB	VerbForm=Inf	13	xcomp	_	_
15	des	un	DET	DT	Definite=Ind|Gender=Fem|Number=Plur|PronType=Art	16	det	_	_
16	ondes	onde	NOUN	NN	Gender=Fem|Number=Plur	14	obj	_	_
17	de	de	ADP	IN	_	18	case	_	_
18	choc	choc	NOUN	NN	Gender=Masc|Number=Sing	16	nmod	_	SpaceAfter=No
19	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 6 parataxis	color:blue
1	Snowman	Snowman	PROPN	NNP	Gender=Masc|Number=Sing	6	nsubj	_	_
2	n'	ne	ADV	RB	Polarity=Neg	6	advmod	_	SpaceAfter=No
3	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:tense	_	_
4	pas	pas	ADV	RB	Polarity=Neg	6	advmod	_	_
5	été	être	AUX	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	cop	_	_
6	étonné	étonné	ADJ	JJ	Gender=Masc|Number=Sing	23	parataxis	_	_
7	quand	quand	SCONJ	WRB	_	11	mark	_	_
8	Johnny	Johnny	PROPN	NNP	Gender=Masc|Number=Sing	11	nsubj	_	_
9	Carson	Carson	PROPN	NNP	Gender=Masc|Number=Sing	8	flat:name	_	_
10	est	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux:tense	_	_
11	allé	aller	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	advcl	_	_
12	chercher	chercher	VERB	VB	VerbForm=Inf	11	xcomp	_	_
13	un	un	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	escabeau	escabeau	NOUN	NN	Gender=Masc|Number=Sing	12	obj	_	_
15	et	et	CCONJ	CC	_	18	cc	_	_
16	s’	se	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	18	obj	_	SpaceAfter=No|wordform=s'
17	est	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	aux:tense	_	_
18	assis	asseoir	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	11	conj	_	_
19	le	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	dos	dos	NOUN	NN	Gender=Masc|Number=Sing	18	obl	_	_
21	tourné	tourner	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	20	acl	_	SpaceAfter=No
22	,	,	PUNCT	,	_	6	punct	_	_
23	dit	dire	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
24	-il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	23	nsubj	_	SpaceAfter=No
25	.	.	PUNCT	.	_	23	punct	_	_

~~~


