---
layout: base
title:  'Statistics of ccomp in UD_Lithuanian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-HSE: Relations: `ccomp`

This relation is universal.

48 nodes (1%) are attached to their parents as `ccomp`.

41 instances of `ccomp` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.47916666666667.

The following 6 pairs of parts of speech are connected with `ccomp`: <tt><a href="lt_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (33; 69% instances), <tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (5; 10% instances), <tt><a href="lt_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_hse-pos-ADJ.html">ADJ</a></tt> (4; 8% instances), <tt><a href="lt_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt> (3; 6% instances), <tt><a href="lt_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_hse-pos-ADV.html">ADV</a></tt> (2; 4% instances), <tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 2 ccomp	color:blue
1	„	„	PUNCT	PUNCT	_	2	punct	_	En=„|SpaceAfter=No
2	Matote	matyti	VERB	VBC	Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	ccomp	_	En=see|SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	4	punct	_	En=,
4	pas	pas	ADP	UH	_	5	case	_	En=to
5	jus	jūs	PRON	PRP	Case=Acc|Number=Plur|Person=2	8	obl	_	En=you
6	iš	iš	ADP	UH	_	7	case	_	En=from
7	viso	visas	PRON	DT	Case=Gen|Gender=Masc|Number=Sing	8	obl	_	En=all
8	nėra	būti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	En=be
9	kairiųjų	kairys	ADJ	JJL	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	8	nsubj	_	En=Left|SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	2	punct	_	En=,|SpaceAfter=No
11	“	“	PUNCT	PUNCT	_	2	punct	_	En=“
12	sako	sakyti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	En=say
13	toji	tas	DET	DT	Case=Nom|Gender=Fem|Number=Sing	14	det	_	En=this
14	europietė	europietė	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	12	nsubj	_	En=European|SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	12	punct	_	En=.

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 18 ccomp	color:blue
1	Priešingai	priešingai	ADV	RB	Degree=Pos	11	advmod	_	En=contrary_to|SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	En=,
3	visuomenės	visuomenė	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	6	nsubj	_	En=society
4	ir	ir	CCONJ	CC	_	5	cc	_	En=and
5	teismų	teismas	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	3	conj	_	En=court
6	neartikuliuotas	artikuliuoti	VERB	VBNL	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	En=articulate|SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	11	punct	_	En=,
8	bet	bet	CCONJ	CC	_	11	cc	_	En=but
9	aiškiai	aiškiai	ADV	RB	Degree=Pos	11	advmod	_	En=clearly
10	juntamas	justi	VERB	VBNL	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	11	acl	_	En=feel
11	nusiteikimas	nusiteikimas	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Reflex=Yes	6	conj	_	En=mood
12	buvo	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	11	cop	_	En=be|SpaceAfter=No
13	,	,	PUNCT	PUNCT	_	18	punct	_	En=,
14	kad	kad	SCONJ	UH	_	18	mark	_	En=that
15	visas	visas	DET	DT	Case=Acc|Gender=Fem|Number=Plur	17	det	_	En=all
16	tokias	toks	DET	DT	Case=Acc|Gender=Fem|Number=Plur	17	det	_	En=such
17	bylas	byla	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur	18	obj	_	En=file
18	pridera	priderėti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	11	ccomp	_	En=needed
19	tyliai	tyliai	ADV	RB	Degree=Pos	20	advmod	_	En=quietly
20	sabotuoti	sabotuoti	VERB	VB	Polarity=Pos|VerbForm=Inf|Voice=Act	18	xcomp	_	En=ignore|SpaceAfter=No
21	.	.	PUNCT	PUNCT	_	20	punct	_	En=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp	color:blue
1	Nesunku	nesunkus	ADJ	PRED	Definite=Ind|Degree=Pos|Gender=Neut|Polarity=Neg	0	root	_	En=not_difficult
2	pastebėti	pastebėti	VERB	VB	Polarity=Pos|VerbForm=Inf|Voice=Act	1	xcomp	_	En=notice|SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	8	punct	_	En=,
4	kad	kad	SCONJ	UH	_	8	mark	_	En=that
5	šioje	šis	DET	DT	Case=Loc|Gender=Fem|Number=Sing	6	det	_	En=this
6	bėdoje	bėda	NOUN	NN	Case=Loc|Gender=Fem|Number=Sing	8	obl	_	En=adversity
7	nesame	būti	AUX	VBC	Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	En=be
8	vieniši	vienišas	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	2	ccomp	_	En=alone|SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	1	punct	_	En=.

~~~


