

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

6486 nodes (5%) are attached to their parents as `nsubj`.

4679 instances of `nsubj` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.5968239284613.

The following 33 pairs of parts of speech are connected with `nsubj`: [sl-pos/VERB]()-[sl-pos/NOUN]() (3570; 55% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (803; 12% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (701; 11% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (300; 5% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (287; 4% instances), [sl-pos/VERB]()-[sl-pos/DET]() (270; 4% instances), [sl-pos/NOUN]()-[sl-pos/DET]() (111; 2% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (105; 2% instances), [sl-pos/ADJ]()-[sl-pos/DET]() (66; 1% instances), [sl-pos/ADJ]()-[sl-pos/PROPN]() (62; 1% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (49; 1% instances), [sl-pos/DET]()-[sl-pos/NOUN]() (33; 1% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (23; 0% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (19; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (17; 0% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (14; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (7; 0% instances), [sl-pos/NOUN]()-[sl-pos/NUM]() (6; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (5; 0% instances), [sl-pos/PRON]()-[sl-pos/DET]() (5; 0% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (5; 0% instances), [sl-pos/PROPN]()-[sl-pos/NOUN]() (5; 0% instances), [sl-pos/ADJ]()-[sl-pos/NUM]() (4; 0% instances), [sl-pos/PROPN]()-[sl-pos/DET]() (4; 0% instances), [sl-pos/PROPN]()-[sl-pos/PRON]() (4; 0% instances), [sl-pos/DET]()-[sl-pos/DET]() (3; 0% instances), [sl-pos/NOUN]()-[sl-pos/X]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/X]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj	color:blue
1	Intenzivnost	intenzivnost	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	Dep=5|Rel=Sb
2	žalovanja	žalovanje	NOUN	Ncnsg	Case=Gen|Gender=Neut|Number=Sing	1	nmod	_	Dep=1|Rel=Atr
3	z	z	ADP	Si	Case=Ins	4	case	_	Dep=4|Rel=Atr
4	leti	leto	NOUN	Ncnpi	Case=Ins|Gender=Neut|Number=Plur	5	obl	_	Dep=5|Rel=AdvO
5	raste	rasti	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
6	.	.	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 nsubj	color:blue
1	Zakonodaja	zakonodaja	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	Dep=6|Rel=Sb
2	in	in	CCONJ	Cc	_	3	cc	_	Dep=3|Rel=Conj
3	trg	trg	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	1	conj	_	Dep=1|Rel=Coord
4	delovne	deloven	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	Dep=5|Rel=Atr
5	sile	sila	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	Dep=3|Rel=Atr
6	sta	biti	AUX	Va-r3d-n	Mood=Ind|Number=Dual|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	cop	_	Dep=0|Rel=Root
7	med	med	ADP	Si	Case=Ins	8	case	_	Dep=8|Rel=Atr
8	seboj	se	PRON	Px---i	Case=Ins|PronType=Prs|Reflex=Yes	10	nmod	_	Dep=10|Rel=Atr
9	tesno	tesno	ADV	Rgp	Degree=Pos	10	advmod	_	Dep=10|Rel=Atr
10	povezana	povezan	ADJ	Appmdn	Case=Nom|Degree=Pos|Gender=Masc|Number=Dual|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=6|Rel=Atr
11	.	.	PUNCT	Z	_	10	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj	color:blue
1	Že	že	PART	Q	_	6	advmod	_	Dep=0|Rel=Root
2	Nimeiri	Nimeiri	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	Dep=6|Rel=Sb
3	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	aux	_	Dep=6|Rel=PPart
4	z	z	ADP	Si	Case=Ins	5	case	_	Dep=5|Rel=Atr
5	zakonom	zakon	NOUN	Ncmsi	Case=Ins|Gender=Masc|Number=Sing	6	obl	_	Dep=6|Rel=AdvM
6	prepovedal	prepovedati	VERB	Vmep-sm	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
7	goloto	golota	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	SpaceAfter=No|Dep=6|Rel=Obj

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

1008 nodes (5%) are attached to their parents as `nsubj`.

756 instances of `nsubj` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.63293650793651.

The following 36 pairs of parts of speech are connected with `nsubj`: [sl-pos/VERB]()-[sl-pos/NOUN]() (272; 27% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (240; 24% instances), [sl-pos/VERB]()-[sl-pos/DET]() (111; 11% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (71; 7% instances), [sl-pos/NOUN]()-[sl-pos/DET]() (55; 5% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (50; 5% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (28; 3% instances), [sl-pos/ADJ]()-[sl-pos/DET]() (21; 2% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (16; 2% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (16; 2% instances), [sl-pos/DET]()-[sl-pos/NOUN]() (15; 1% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (15; 1% instances), [sl-pos/DET]()-[sl-pos/DET]() (13; 1% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (12; 1% instances), [sl-pos/PROPN]()-[sl-pos/DET]() (9; 1% instances), [sl-pos/PRON]()-[sl-pos/DET]() (8; 1% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (6; 1% instances), [sl-pos/ADJ]()-[sl-pos/PROPN]() (5; 0% instances), [sl-pos/NUM]()-[sl-pos/NOUN]() (5; 0% instances), [sl-pos/AUX]()-[sl-pos/NOUN]() (4; 0% instances), [sl-pos/DET]()-[sl-pos/PRON]() (4; 0% instances), [sl-pos/X]()-[sl-pos/PRON]() (4; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (3; 0% instances), [sl-pos/PART]()-[sl-pos/PRON]() (3; 0% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (3; 0% instances), [sl-pos/X]()-[sl-pos/DET]() (3; 0% instances), [sl-pos/ADJ]()-[sl-pos/NUM]() (2; 0% instances), [sl-pos/AUX]()-[sl-pos/DET]() (2; 0% instances), [sl-pos/NUM]()-[sl-pos/DET]() (2; 0% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (2; 0% instances), [sl-pos/PROPN]()-[sl-pos/NOUN]() (2; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (2; 0% instances), [sl-pos/AUX]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/X]()-[sl-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 nsubj	color:blue
1	na	na	ADP	Sl	Case=Loc	2	case	_	word=na|msd=Dm
2	vrhu	vrh	NOUN	Ncmsl	Case=Loc|Gender=Masc|Number=Sing	3	obl	_	word=vrhu|msd=Somem
3	je	biti	VERB	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	word=je|msd=Gp-ste-n
4	tako	tako	ADV	Rgp	Degree=Pos	7	mark	_	word=tako|msd=Rsn
5	kot	kot	SCONJ	Cs	_	4	fixed	_	word=kot|msd=Vd
6	si	biti	AUX	Va-r2s-n	Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	word=si|msd=Gp-sde-n
7	rekla	reči	VERB	Vmep-sf	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	3	advcl	_	word=rekla|msd=Ggdd-ez
8	en	en	NUM	Mlpmsn	Case=Nom|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	9	nummod	_	word=en|msd=Kbzmei
9	šef	šef	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	word=šef|msd=Somei
10	lahko	lahko	ADV	Rgp	Degree=Pos	11	advmod	_	word=lahko|msd=Rsn
11	sta	biti	VERB	Va-r3d-n	Mood=Ind|Number=Dual|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	parataxis	_	word=sta|msd=Gp-std-n
12	tudi	tudi	PART	Q	_	11	advmod	_	word=tudi|msd=L
13	dva	dva	NUM	Mlcmdn	Case=Nom|Gender=Masc|Number=Dual|NumForm=Word|NumType=Card	11	obl	_	word=dva|msd=Kbgmdi

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nsubj	color:blue
1	recimo	reči	VERB	Vmem1p	Aspect=Perf|Mood=Imp|Number=Plur|Person=1|VerbForm=Fin	3	parataxis:discourse	_	word=recimo|msd=Ggdvpm
2	eee	eee	INTJ	I	_	3	discourse:filler	_	word=eee|msd=M
3	čevlje	čevelj	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	0	root	_	word=čevle|msd=Sommt
4	nogavice	nogavica	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	3	conj	_	word=nogavice|msd=Sozmt
5	ali	ali	CCONJ	Cc	_	7	cc	_	word=ali|msd=Vp
6	pa	pa	CCONJ	Cc	_	5	fixed	_	word=pa|msd=Vp
7	kravato	kravata	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	3	conj	_	word=kravato|msd=Sozet
8	jaz	jaz	PRON	Pp1-sn	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	word=jz|msd=Zop-ei
9	sem	biti	VERB	Va-r1s-n	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	parataxis	_	word=sem|msd=Gp-spe-n
10	rec	_	X	Xt	_	9	reparandum	_	word=rec|msd=Nt
11	[gap]	[gap]	X	X	_	3	punct	_	word=[gap]|msd=N

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj	color:blue
1	eee	eee	INTJ	I	_	6	discourse:filler	_	word=eee|msd=M
2	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	word=to|msd=Zk-sei
3	se	se	PRON	Px------y	PronType=Prs|Variant=Short	6	expl	_	word=se|msd=Zp------k
4	bo	biti	AUX	Va-f3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	6	aux	_	word=bo|msd=Gp-pte-n
5	očitno	očitno	ADV	Rgp	Degree=Pos	6	advmod	_	word=očitno|msd=Rsn
6	razmahnilo	razmahniti	VERB	Vmep-sn	Aspect=Perf|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	word=razmahnilo|msd=Ggdd-es

~~~


