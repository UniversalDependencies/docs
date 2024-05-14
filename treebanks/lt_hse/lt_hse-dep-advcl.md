---
layout: base
title:  'Statistics of advcl in UD_Lithuanian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-HSE: Relations: `advcl`

This relation is universal.

74 nodes (1%) are attached to their parents as `advcl`.

45 instances of `advcl` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.74324324324324.

The following 14 pairs of parts of speech are connected with `advcl`: <tt><a href="lt_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (38; 51% instances), <tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (11; 15% instances), <tt><a href="lt_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (9; 12% instances), <tt><a href="lt_hse-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="lt_hse-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_hse-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="lt_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_hse-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="lt_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="lt_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_hse-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="lt_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="lt_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_hse-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="lt_hse-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_hse-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="lt_hse-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_hse-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_hse-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advcl	color:blue
1	O	o	CCONJ	CC	_	6	cc	_	En=and
2	ištraukti	ištraukti	VERB	VB	Polarity=Pos|VerbForm=Inf|Voice=Act	6	xcomp	_	En=pull_out
3	nepažeistus	pažeisti	VERB	VBNL	Case=Acc|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	2	advcl	_	En=damage
4	–	–	PUNCT	PUNCT	_	6	punct	_	En=_
5	dar	dar	ADV	RB	Degree=Pos	6	advmod	_	En=yet
6	sunkiau	sunkiai	ADV	RBR	Degree=Cmp	0	root	_	En=with_difficulty|SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	6	punct	_	En=.

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 20 advcl	color:blue
1	Be	be	ADP	UH	_	2	case	_	En=without
2	abejonės	abejonė	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	6	parataxis	_	En=doubts|SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	En=,
4	tada	tada	ADV	RB	Degree=Pos	6	advmod	_	En=then
5	būtų	būti	AUX	VBC	Mood=Cnd|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin|Voice=Act	6	cop	_	En=be
6	tekę	tekti	VERB	VBNH	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	En=need
7	(	(	PUNCT	PUNCT	_	10	punct	_	En=(|SpaceAfter=No
8	kad	kad	SCONJ	UH	_	10	mark	_	En=that
9	ir	ir	PART	UH	_	10	advmod:emph	_	En=and
10	nenoromis	nenoromis	ADV	RB	Degree=Pos|Polarity=Neg	6	advmod	_	En=not_willing|SpaceAfter=No
11	)	)	PUNCT	PUNCT	_	10	punct	_	En=)
12	surengti	surengti	VERB	VB	Polarity=Pos|VerbForm=Inf|Voice=Act	6	xcomp	_	En=organize
13	Laikinosios	laikinas	ADJ	JJL	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	14	amod	_	En=temporary
14	vyriausybės	vyriausybė	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	15	nmod	_	En=government
15	procesą	procesas	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	12	obj	_	En=process|SpaceAfter=No
16	,	,	PUNCT	PUNCT	_	20	punct	_	En=,
17	kaip	kaip	SCONJ	UH	_	20	mark	_	En=how
18	Prancūzijoje	Prancūzija	PROPN	NNP	Case=Loc|Gender=Fem|Number=Sing	20	obl	_	En=France
19	buvo	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	20	aux	_	En=be
20	surengtas	surengti	VERB	VBNL	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	15	advcl	_	En=organize
21	Pétaine‘o	pétaine‘as	PROPN	NNP	Case=Gen|Gender=Masc|Number=Sing	22	nmod	_	En=Petain
22	procesas	procesas	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	20	nsubj	_	En=process|SpaceAfter=No
23	.	.	PUNCT	PUNCT	_	6	punct	_	En=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 6 advcl	color:blue
1	Paprastai	paprastai	ADV	RB	Degree=Pos	15	advmod	_	En=usually|SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	6	punct	_	En=,
3	kai	kai	SCONJ	UH	_	6	advmod	_	En=when
4	į	į	ADP	UH	_	3	fixed	_	En=to
5	lėktuvai	lėktuvas	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	En=airplane
6	nukrenta	nukristi	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	15	advcl	_	En=drop
7	į	į	ADP	UH	_	8	case	_	En=to
8	jūrą	jūra	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	6	obl	_	En=sea|SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	6	punct	_	En=,
10	nustatyti	nustatyti	VERB	VB	Polarity=Pos|VerbForm=Inf|Voice=Act	15	xcomp	_	En=establish
11	katastrofos	katastrofa	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	En=catastrophy
12	priežastis	priežastis	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	10	obj	_	En=reason
13	būna	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	15	aux	_	En=be
14	ypač	ypač	ADV	RB	Degree=Pos	15	advmod	_	En=especially
15	sunku	sunkus	ADJ	PRED	Definite=Ind|Degree=Pos|Gender=Neut	0	root	_	En=difficult|SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	15	punct	_	En=.

~~~


