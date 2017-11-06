---
layout: base
title:  'Statistics of nummod in UD_Lithuanian'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="lt-dep-nummod-gov.html">nummod:gov</a></tt>.

12 nodes (0%) are attached to their parents as `nummod`.

12 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.58333333333333.

The following 2 pairs of parts of speech are connected with `nummod`: <tt><a href="lt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt-pos-NUM.html">NUM</a></tt> (11; 92% instances), <tt><a href="lt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt-pos-ADV.html">ADV</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Du	du	NUM	CD	Case=Nom|Gender=Masc	2	nummod	_	En=two
2	sodiečiai	sodietis	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	En=farmer
3	sėdi	sėdėti	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	En=sit
4	ant	ant	ADP	UH	_	8	case	_	En=on
5	potvynio	potvynis	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	En=flood
6	apsemtų	apsemti	VERB	VBNL	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Part|Voice=Pass	7	acl	_	En=submerged
7	namų	namai	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	8	nmod	_	En=house
8	stogo	stogas	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	3	obl	_	En=roof|SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	3	punct	_	En=.

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 nummod	color:blue
1	Savirašio	savirašis	ADJ	JJL	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	En=self-writing
2	prietaisą	prietaisas	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	7	obj	_	En=device
3	iš	iš	ADP	UH	_	6	case	_	En=from
4	Juodosios	juodas	ADJ	JJL	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	En=black
5	jūros	jūra	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	En=sea
6	dugno	dugnas	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	7	obl	_	En=bed
7	ištraukę	ištraukyti	VERB	VBNL	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Reflex=No|Tense=PastSimp|VerbForm=Part|Voice=Act	0	root	_	En=pull_out
8	tyrėjai	tyrėjas	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	En=investigator
9	duomenis	duomuo	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur	10	obj	_	En=data
10	analizuoja	analizuoti	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	En=analize
11	jau	jau	PART	UH	_	12	advmod:emph	_	En=already
12	daugiau	daug	ADV	RBR	Degree=Cmp	14	nummod	_	En=many
13	kaip	kaip	SCONJ	UH	_	12	fixed	_	En=how
14	savaitę	savaitė	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	10	obl	_	En=week|SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	7	punct	_	En=.

~~~


