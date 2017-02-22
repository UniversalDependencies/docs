

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is a language-specific subtype of [nsubj]().

177 nodes (0%) are attached to their parents as `nsubj:pass`.

112 instances of `nsubj:pass` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.7909604519774.

The following 9 pairs of parts of speech are connected with `nsubj:pass`: [sk-pos/VERB]()-[sk-pos/NOUN]() (90; 51% instances), [sk-pos/ADJ]()-[sk-pos/NOUN]() (46; 26% instances), [sk-pos/VERB]()-[sk-pos/DET]() (12; 7% instances), [sk-pos/VERB]()-[sk-pos/PRON]() (8; 5% instances), [sk-pos/VERB]()-[sk-pos/PROPN]() (8; 5% instances), [sk-pos/ADJ]()-[sk-pos/PROPN]() (5; 3% instances), [sk-pos/ADJ]()-[sk-pos/DET]() (4; 2% instances), [sk-pos/ADJ]()-[sk-pos/NUM]() (3; 2% instances), [sk-pos/VERB]()-[sk-pos/NUM]() (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:pass	color:blue
1	Neskôr	neskôr	ADV	Dx	Degree=Pos	5	advmod	_	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	5	expl:pass	_	_
3	obrázok	obrázok	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj:pass	_	_
4	monoskopu	monoskop	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
5	snímal	snímať	VERB	VLesci+	Animacy=Inan|Aspect=Imp|Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	_
6	normálnou	normálny	ADJ	AAfs7x	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
7	televíznou	televízny	ADJ	AAfs7x	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
8	kamerou	kamera	NOUN	SSfs7	Case=Ins|Gender=Fem|Number=Sing	5	obl	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	Mŕtvoly	mŕtvola	NOUN	SSfp1	Case=Nom|Gender=Fem|Number=Plur	4	nsubj:pass	_	_
2	boli	byť	AUX	VLepcf+	Aspect=Imp|Gender=Fem|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Part	4	aux:pass	_	_
3	hromadne	hromadne	ADV	Dx	Degree=Pos	4	advmod	_	_
4	spaľované	spaľovaný	ADJ	Gtfp1x	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	_	_
5	v	v	ADP	Eu6	AdpType=Prep|Case=Loc	6	case	_	_
6	krematóriách	krematórium	NOUN	SSnp6	Case=Loc|Gender=Neut|Number=Plur	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Každý	každý	DET	PAms1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	3	nsubj:pass	_	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	3	expl:pass	_	_
3	očistí	očistiť	VERB	VKdsc+	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	.	.	PUNCT	ZIP	VerbForm=Inf	3	punct	_	_

~~~


