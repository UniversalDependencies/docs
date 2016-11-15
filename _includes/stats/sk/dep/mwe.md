

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

185 nodes (0%) are attached to their parents as `mwe`.

185 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.12972972972973.

The following 10 pairs of parts of speech are connected with `mwe`: [sk-pos/CONJ]()-[sk-pos/CONJ]() (60; 32% instances), [sk-pos/ADP]()-[sk-pos/NOUN]() (58; 31% instances), [sk-pos/ADP]()-[sk-pos/ADP]() (31; 17% instances), [sk-pos/ADV]()-[sk-pos/ADP]() (19; 10% instances), [sk-pos/NOUN]()-[sk-pos/ADP]() (6; 3% instances), [sk-pos/PART]()-[sk-pos/CONJ]() (4; 2% instances), [sk-pos/PART]()-[sk-pos/PART]() (3; 2% instances), [sk-pos/PART]()-[sk-pos/PRON]() (2; 1% instances), [sk-pos/PRON]()-[sk-pos/CONJ]() (1; 1% instances), [sk-pos/X]()-[sk-pos/ADP]() (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 mwe	color:blue
1	Srdce	srdce	NOUN	SSns1	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	_
2	mi	ja	PRON	PPhs3	Case=Dat|Number=Sing|PronType=Prs	3	dobj	_	_
3	bilo	biť	VERB	VLescn+	Aspect=Imp|Gender=Neut|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbForm=Part	0	root	_	_
4	ako	ako	CONJ	O	_	5	mark	_	_
5	zvon	zvon	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	dep	_	_
6	,	,	PUNCT	Z	_	3	punct	_	_
7	no	no	CONJ	O	_	3	cc	_	_
8	odľahlo	odľahnúť	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbForm=Part	3	conj	_	_
9	mi	ja	PRON	PPhs3	Case=Dat|Number=Sing|PronType=Prs	8	dobj	_	_
10	,	,	PUNCT	Z	_	15	punct	_	_
11	len	len	CONJ	O	_	15	mark	_	_
12	čo	čo	CONJ	O	_	11	mwe	_	_
13	za	za	ADP	Eu7	AdpType=Prep|Case=Ins	14	case	_	_
14	sebou	seba	PRON	PPhs7	Case=Ins|Number=Sing|PronType=Prs	15	nmod	_	_
15	zavrela	zavrieť	VERB	VLdscf+	Aspect=Perf|Gender=Fem|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbForm=Part	8	advcl	_	_
16	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mwe	color:blue
1	V	v	ADP	Eu6	AdpType=Prep|Case=Loc	4	case	_	_
2	súlade	súlad	NOUN	SSis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	1	mwe	_	_
3	s	s	ADP	Eu7	AdpType=Prep|Case=Ins	1	mwe	_	_
4	plánom	plán	NOUN	SSis7	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	6	nmod	_	_
5	pritom	pritom	ADV	Dx	Degree=Pos	6	advmod	_	_
6	posilili	posiliť	VERB	VLdpcm+:q	Animacy=Anim|Aspect=Perf|Gender=Masc|Negative=Pos|Number=Plur|Person=3|Tense=Past|Typo=Yes|VerbForm=Part	0	root	_	_
7	svoj	svoj	PRON	PFis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Prs	8	nmod	_	_
8	útvar	útvar	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	dobj	_	_
9	po	po	ADP	Eu6	AdpType=Prep|Case=Loc	10	case	_	_
10	krídlach	krídlo	NOUN	SSnp6	Case=Loc|Gender=Neut|Number=Plur	6	nmod	_	_
11	šíku	šík	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	_
12	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mwe	color:blue
1	Spolu	spolu	ADP	Eu7	AdpType=Prep|Case=Ins	3	case	_	_
2	s	s	ADP	Eu7	AdpType=Prep|Case=Ins	1	mwe	_	_
3	ním	on	PRON	PFms7	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|PronType=Prs	4	nmod	_	_
4	padli	padnúť	VERB	VLdpcf+	Aspect=Perf|Gender=Fem|Negative=Pos|Number=Plur|Person=3|Tense=Past|VerbForm=Part	0	root	_	_
5	dve	dva	NUM	NNfp1	Case=Nom|Gender=Fem|Number=Plur	6	nummod	_	_
6	tretiny	tretina	NOUN	SSfp1	Case=Nom|Gender=Fem|Number=Plur	4	nsubj	_	_
7	vojakov	vojak	NOUN	SSmp2	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	6	nmod	_	_
8	.	.	PUNCT	Z	_	4	punct	_	_

~~~


