---
layout: base
title:  'Statistics of parataxis in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `parataxis`

This relation is universal.

107 nodes (0%) are attached to their parents as `parataxis`.

73 instances of `parataxis` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 14.018691588785.

The following 11 pairs of parts of speech are connected with `parataxis`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (71; 66% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (9; 8% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (7; 7% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (7; 7% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 5 parataxis	color:blue
1	Sa	_	DET	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	_
2	voix	_	NOUN	NN	Gender=Fem|Number=Sing	5	nsubj	_	_
3	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	aux:tense	_	_
4	littéralement	_	ADV	RB	_	5	advmod	_	_
5	fait	_	VERB	VBN	Gender=Masc|Number=Sing	12	parataxis	_	_
6	le	_	DET	DT	Gender=Masc|Number=Sing	7	det	_	_
7	tour	_	NOUN	NN	Gender=Masc|Number=Sing	5	obj	_	_
8	de	de	ADP	INDT	_	10	case	_	_
9	le	le	DET	_	Gender=Masc|Number=Sing	10	det	_	_
10	monde	_	NOUN	NN	Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
11	,	_	PUNCT	,	_	5	punct	_	_
12	dit	_	VERB	VBN	Number=Sing	0	root	_	_
13	Leive	_	PROPN	NNP	Gender=Fem|Number=Sing	12	nsubj	_	SpaceAfter=No
14	.	_	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 parataxis	color:blue
1	D’	_	ADP	IN	_	2	case	_	OrigForm=D'|SpaceAfter=No
2	où	_	ADV	WRB	_	3	obl	_	_
3	vient	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	toute	_	ADJ	PDT	Gender=Fem|Number=Sing	6	amod	_	_
5	son	_	DET	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det	_	_
6	énergie	_	NOUN	NN	Gender=Fem|Number=Sing	3	nsubj	_	_
7	?	_	PUNCT	.	_	3	punct	_	_
8	Et	_	CCONJ	CC	_	10	cc	_	_
9	cette	_	DET	DT	Gender=Fem|Number=Sing	10	det	_	_
10	voix	_	NOUN	NN	Gender=Fem|Number=Sing	3	parataxis	_	SpaceAfter=No
11	,	_	PUNCT	,	_	13	punct	_	_
12	qui	_	PRON	WP	Gender=Fem|Number=Sing	13	nsubj	_	_
13	pourrait	_	VERB	VBC	Mood=Cnd|Number=Sing|Person=3|Tense=Pres	10	acl:relcl	_	_
14	provoquer	_	VERB	VB	_	13	xcomp	_	_
15	des	_	DET	DT	Gender=Fem|Number=Plur	16	det	_	_
16	ondes	_	NOUN	NN	Gender=Fem|Number=Plur	14	obj	_	_
17	de	_	ADP	IN	_	18	case	_	_
18	choc	_	NOUN	NN	Gender=Masc|Number=Sing	16	nmod	_	SpaceAfter=No
19	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 6 parataxis	color:blue
1	Snowman	_	PROPN	NNP	Gender=Masc|Number=Sing	6	nsubj	_	_
2	n'	_	ADV	RB	Polarity=Neg	6	advmod	_	SpaceAfter=No
3	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	aux:tense	_	_
4	pas	_	ADV	RB	Polarity=Neg	6	advmod	_	_
5	été	_	AUX	VBN	Gender=Masc|Number=Sing	6	cop	_	_
6	étonné	_	ADJ	JJ	Gender=Masc|Number=Sing	23	parataxis	_	_
7	quand	_	SCONJ	WRB	_	11	mark	_	_
8	Johnny	_	PROPN	NNP	Gender=Masc|Number=Sing	11	nsubj	_	_
9	Carson	_	PROPN	NNP	Gender=Masc|Number=Sing	8	flat:name	_	_
10	est	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	11	aux:tense	_	_
11	allé	_	VERB	VBN	Gender=Masc|Number=Sing	6	advcl	_	_
12	chercher	_	VERB	VB	_	11	xcomp	_	_
13	un	_	DET	DT	Gender=Masc|Number=Sing	14	det	_	_
14	escabeau	_	NOUN	NN	Gender=Masc|Number=Sing	12	obj	_	_
15	et	_	CCONJ	CC	_	18	cc	_	_
16	s’	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	18	obj	_	OrigForm=s'|SpaceAfter=No
17	est	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	18	aux:tense	_	_
18	assis	_	VERB	VBN	Gender=Masc|Number=Sing	11	conj	_	_
19	le	_	DET	DT	Gender=Masc|Number=Sing	20	det	_	_
20	dos	_	NOUN	NN	Gender=Masc|Number=Sing	18	obl	_	_
21	tourné	_	VERB	VBN	Gender=Masc|Number=Sing|VerbForm=Part	20	acl	_	SpaceAfter=No
22	,	_	PUNCT	,	_	6	punct	_	_
23	dit	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
24	-il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	23	nsubj	_	SpaceAfter=No
25	.	_	PUNCT	.	_	23	punct	_	_

~~~


