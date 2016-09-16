

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

1631 nodes (1%) are attached to their parents as `parataxis`.

1433 instances of `parataxis` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.2771305947272.

The following 18 pairs of parts of speech are connected with `parataxis`: [sl-pos/VERB]()-[sl-pos/VERB]() (973; 60% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (173; 11% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (105; 6% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (98; 6% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (97; 6% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (65; 4% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (27; 2% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (23; 1% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (18; 1% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (16; 1% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (12; 1% instances), [sl-pos/ADJ]()-[sl-pos/PROPN]() (8; 0% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (5; 0% instances), [sl-pos/PROPN]()-[sl-pos/VERB]() (4; 0% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (3; 0% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/NOUN]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 parataxis	color:blue
1	Kolikor	kolikor	SCONJ	Cs	_	2	mark	_	Dep=2|Rel=Conj
2	vem	vedeti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
3	,	,	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root
4	pa	pa	CONJ	Cc	_	5	advmod	_	Dep=0|Rel=Root
5	imajo	imeti	VERB	Vmpr3p-n	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis	_	Dep=0|Rel=Root
6	tudi	tudi	PART	Q	_	5	advmod	_	Dep=0|Rel=Root
7	v	v	ADP	Sl	Case=Loc	8	case	_	Dep=8|Rel=Atr
8	EU	EU	PROPN	Npfsl	Case=Loc|Gender=Fem|Number=Sing	5	nmod	_	Dep=5|Rel=AdvO
9	še	še	PART	Q	_	5	advmod	_	Dep=0|Rel=Root
10	vedno	vedno	ADV	Rgp	Degree=Pos	5	advmod	_	Dep=5|Rel=AdvO
11	težave	težava	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	5	dobj	_	Dep=5|Rel=Obj
12	z	z	ADP	Si	Case=Ins	13	case	_	Dep=13|Rel=Atr
13	mikročipi	mikročip	NOUN	Ncmpi	Case=Ins|Gender=Masc|Number=Plur	11	nmod	_	SpaceAfter=No|Dep=11|Rel=Atr
14	.	.	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 parataxis	color:blue
1	Toda	toda	CONJ	Cc	_	4	cc	_	Dep=2|Rel=Conj
2	bil	biti	VERB	Va-p-sm	Gender=Masc|Number=Sing|VerbForm=Part	4	cop	_	Dep=0|Rel=Root
3	sem	biti	AUX	Va-r1s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux	_	Dep=2|Rel=PPart
4	suh	suh	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No|Dep=2|Rel=Atr
5	,	,	PUNCT	Z	_	11	punct	_	Dep=0|Rel=Root
6	poleg	poleg	ADP	Sg	Case=Gen	7	case	_	Dep=7|Rel=Atr
7	tega	ta	PRON	Pd-nsg	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	11	nmod	_	Dep=11|Rel=AdvO
8	pa	pa	CONJ	Cc	_	11	advmod	_	Dep=0|Rel=Root
9	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	11	expl	_	Dep=11|Rel=PPart
10	je	biti	AUX	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	Dep=11|Rel=PPart
11	poročila	poročiti	VERB	Vmep-sf	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	4	parataxis	_	Dep=0|Rel=Root
12	sestrična	sestrična	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	11	nsubj	_	SpaceAfter=No|Dep=11|Rel=Sb
13	.	.	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	Svetujemo	svetovati	VERB	Vmbr1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
2	:	:	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root
3	Bodite	biti	VERB	Va-m2p	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	4	cop	_	Dep=0|Rel=Root
4	pozitivni	pozitiven	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	1	parataxis	_	Dep=3|Rel=Atr
5	do	do	ADP	Sg	Case=Gen	6	case	_	Dep=6|Rel=Atr
6	sebe	se	PRON	Px---g	Case=Gen|PronType=Prs|Reflex=Yes	4	nmod	_	Dep=3|Rel=AdvO
7	in	in	CONJ	Cc	_	6	cc	_	Dep=9|Rel=Conj
8	svoje	svoj	DET	Px-fsg	Case=Gen|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	9	det	_	Dep=9|Rel=Atr
9	okolice	okolica	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	6	conj	_	SpaceAfter=No|Dep=6|Rel=Coord
10	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.
There are 2 language-specific subtypes of `parataxis`: [parataxis:discourse](), [parataxis:restart]().

1006 nodes (3%) are attached to their parents as `parataxis`.

982 instances of `parataxis` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.15506958250497.

The following 59 pairs of parts of speech are connected with `parataxis`: [sl-pos/VERB]()-[sl-pos/VERB]() (457; 45% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (87; 9% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (79; 8% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (43; 4% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (41; 4% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (28; 3% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (24; 2% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (22; 2% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (22; 2% instances), [sl-pos/ADV]()-[sl-pos/VERB]() (19; 2% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (13; 1% instances), [sl-pos/VERB]()-[sl-pos/PART]() (13; 1% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (11; 1% instances), [sl-pos/PROPN]()-[sl-pos/VERB]() (11; 1% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (11; 1% instances), [sl-pos/PROPN]()-[sl-pos/PROPN]() (9; 1% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (7; 1% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (7; 1% instances), [sl-pos/ADV]()-[sl-pos/ADJ]() (6; 1% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (6; 1% instances), [sl-pos/PART]()-[sl-pos/VERB]() (6; 1% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (6; 1% instances), [sl-pos/ADJ]()-[sl-pos/ADV]() (5; 0% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (5; 0% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (5; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (5; 0% instances), [sl-pos/ADV]()-[sl-pos/ADV]() (4; 0% instances), [sl-pos/NUM]()-[sl-pos/VERB]() (4; 0% instances), [sl-pos/ADJ]()-[sl-pos/PART]() (3; 0% instances), [sl-pos/PROPN]()-[sl-pos/ADV]() (3; 0% instances), [sl-pos/X]()-[sl-pos/VERB]() (3; 0% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/ADV]()-[sl-pos/NOUN]() (2; 0% instances), [sl-pos/ADV]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/ADV]()-[sl-pos/PROPN]() (2; 0% instances), [sl-pos/INTJ]()-[sl-pos/VERB]() (2; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (2; 0% instances), [sl-pos/NOUN]()-[sl-pos/CONJ]() (2; 0% instances), [sl-pos/NOUN]()-[sl-pos/INTJ]() (2; 0% instances), [sl-pos/NUM]()-[sl-pos/ADJ]() (2; 0% instances), [sl-pos/PRON]()-[sl-pos/ADV]() (2; 0% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/PRON]()-[sl-pos/PROPN]() (2; 0% instances), [sl-pos/VERB]()-[sl-pos/INTJ]() (2; 0% instances), [sl-pos/ADV]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/CONJ]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/INTJ]()-[sl-pos/PART]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/PART]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/PART]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/PART]()-[sl-pos/PART]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/PART]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/SCONJ]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/X]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/X]()-[sl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 parataxis	color:blue
1	pa	pa	CONJ	Cc	_	3	cc	_	word=pa|msd=Vp
2	ne	ne	PART	Q	_	3	neg	_	word=ne|msd=L
3	reci	reči	VERB	Vmem2s	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	word=rec|msd=Ggdvde
4	[gap]	[gap]	X	X	_	3	punct	_	word=[gap]|msd=N
5	šparala	šparati	VERB	Vmpp-sf	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part	3	parataxis	_	word=šparala|msd=Ggnd-ez
6	pol	pol	ADV	Rgp	Degree=Pos	5	advmod	_	word=pol|msd=Rsn

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	tukla	tukla	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	word=tukla|msd=Sozei
2	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	word=je|msd=Gp-ste-n
3	vodo	voda	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	4	dobj	_	word=vodo|msd=Sozet
4	vlijejo	vliti	VERB	Vmer3p	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	word=vlijejo|msd=Ggdstm
5	na	na	ADP	Sa	Case=Acc	6	case	_	word=na|msd=Dt
6	tropine	tropina	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	4	nmod	_	word=tropine|msd=Sozmt
7	gor	gor	ADV	Rgp	Degree=Pos	6	advmod	_	word=gor|msd=Rsn
8	pa	pa	CONJ	Cc	_	4	cc	_	word=pa|msd=Vp
9	stisnejo	stisniti	VERB	Vmer3p	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	word=stisnejo|msd=Ggdstm
10	[gap]	[gap]	X	X	_	1	punct	_	word=[gap]|msd=N
11	to	ta	PRON	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	13	nsubj	_	word=to|msd=Zk-sei
12	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	word=je|msd=Gp-ste-n
13	tukla	tukla	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	1	parataxis	_	word=tukla|msd=Sozei

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 parataxis	color:blue
1	ako	ako	SCONJ	Cs	_	2	reparandum	_	word=ako|msd=Vd
2	ako	ako	SCONJ	Cs	_	3	mark	_	word=ako|msd=Vd
3	imaš	imeti	VERB	Vmpr2s-n	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	advcl	_	word=maš|msd=Ggnsde-n
4	imaš	imeti	VERB	Vmpr2s-n	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	word=maš|msd=Ggnsde-n
5	ako	ako	SCONJ	Cs	_	6	mark	_	word=ako|msd=Vd
6	nimaš	imeti	VERB	Vmpr2s-y	Aspect=Imp|Mood=Ind|Negative=Neg|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	9	advcl	_	word=nimaš|msd=Ggnsde-d
7	pa	pa	CONJ	Cc	_	9	advmod	_	word=pa|msd=Vp
8	si	biti	VERB	Va-r2s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	9	cop	_	word=si|msd=Gp-sde-n
9	revež	revež	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	4	parataxis	_	word=revež|msd=Somei

~~~


