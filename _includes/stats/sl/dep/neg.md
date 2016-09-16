

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

671 nodes (0%) are attached to their parents as `neg`.

669 instances of `neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3725782414307.

The following 4 pairs of parts of speech are connected with `neg`: [sl-pos/VERB]()-[sl-pos/PART]() (632; 94% instances), [sl-pos/ADJ]()-[sl-pos/PART]() (30; 4% instances), [sl-pos/NOUN]()-[sl-pos/PART]() (7; 1% instances), [sl-pos/ADV]()-[sl-pos/PART]() (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 neg	color:blue
1	Vsaj	vsaj	PART	Q	_	6	advmod	_	Dep=0|Rel=Root
2	to	ta	PRON	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	Dep=7|Rel=Sb
3	v	v	ADP	Sl	Case=Loc	4	case	_	Dep=4|Rel=Atr
4	ničemer	nič	PRON	Pz-nsl	Case=Loc|Gender=Neut|Number=Sing|PronType=Neg	8	nmod	_	Dep=7|Rel=AdvO
5	ne	ne	PART	Q	_	6	neg	_	Dep=6|Rel=PPart
6	more	moči	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
7	biti	biti	VERB	Va-n	VerbForm=Inf	8	cop	_	Dep=6|Rel=Atr
8	sporno	sporen	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	6	xcomp	_	SpaceAfter=No|Dep=7|Rel=Atr
9	.	.	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 neg	color:blue
1	Bojim	bati	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
2	pa	pa	CONJ	Cc	_	1	advmod	_	Dep=0|Rel=Root
3	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	1	expl	_	SpaceAfter=No|Dep=1|Rel=PPart
4	,	,	PUNCT	Z	_	9	punct	_	Dep=0|Rel=Root
5	da	da	SCONJ	Cs	_	9	mark	_	Dep=7|Rel=Conj
6	ne	ne	PART	Q	_	9	neg	_	Dep=7|Rel=PPart
7	bodo	biti	VERB	Va-f3p-n	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	9	cop	_	Dep=1|Rel=Obj
8	ravno	ravno	PART	Q	_	9	advmod	_	Dep=9|Rel=Atr
9	realni	realen	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	1	ccomp	_	SpaceAfter=No|Dep=7|Rel=Atr
10	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 neg	color:blue
1	Nadzor	nadzor	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	dobj	_	Dep=4|Rel=Obj
2	naj	naj	PART	Q	_	4	advmod	_	Dep=4|Rel=PPart
3	bi	biti	AUX	Va-c	Mood=Cnd|VerbForm=Fin	4	aux	_	Dep=4|Rel=PPart
4	opravili	opraviti	VERB	Vmep-pm	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	Dep=0|Rel=Root
5	uslužbenci	uslužbenec	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	Dep=4|Rel=Sb
6	notranjega	notranji	ADJ	Agpnsg	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	7	amod	_	Dep=7|Rel=Atr
7	ministrstva	ministrstvo	NOUN	Ncnsg	Case=Gen|Gender=Neut|Number=Sing	5	nmod	_	Dep=5|Rel=Atr
8	in	in	CONJ	Cc	_	5	cc	_	Dep=10|Rel=Conj
9	ne	ne	PART	Q	_	10	neg	_	Dep=10|Rel=PPart
10	policisti	policist	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	5	conj	_	SpaceAfter=No|Dep=5|Rel=Coord
11	.	.	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

283 nodes (1%) are attached to their parents as `neg`.

282 instances of `neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25795053003534.

The following 8 pairs of parts of speech are connected with `neg`: [sl-pos/VERB]()-[sl-pos/PART]() (253; 89% instances), [sl-pos/NOUN]()-[sl-pos/PART]() (9; 3% instances), [sl-pos/ADV]()-[sl-pos/PART]() (7; 2% instances), [sl-pos/ADJ]()-[sl-pos/PART]() (6; 2% instances), [sl-pos/X]()-[sl-pos/PART]() (3; 1% instances), [sl-pos/PART]()-[sl-pos/PART]() (2; 1% instances), [sl-pos/PROPN]()-[sl-pos/PART]() (2; 1% instances), [sl-pos/AUX]()-[sl-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 neg	color:blue
1	ja	ja	PART	Q	_	3	discourse	_	word=ja|msd=L
2	ne	ne	PART	Q	_	3	neg	_	word=ne|msd=L
3	moreš	moči	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	word=moreš|msd=Ggnsde

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 neg	color:blue
1	eem	eem	INTJ	I	_	2	discourse:filler	_	word=eem|msd=M
2	proseminar	proseminar	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	0	root	_	word=proseminar|msd=Sometn
3	ne	ne	PART	Q	_	4	neg	_	word=ne|msd=L
4	proseminar	proseminar	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	parataxis	_	word=proseminar|msd=Sometn
5	seminar	seminar	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	parataxis	_	word=seminar|msd=Sometn

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 neg	color:blue
1	eee	eee	INTJ	I	_	4	discourse:filler	_	word=eee|msd=M
2	pozimi	pozimi	ADV	Rgp	Degree=Pos	4	advmod	_	word=pazim|msd=Rsn
3	ne	ne	PART	Q	_	4	neg	_	word=ne|msd=L
4	tako	tako	ADV	Rgp	Degree=Pos	0	root	_	word=taku|msd=Rsn

~~~


