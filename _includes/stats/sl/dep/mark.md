

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

4212 nodes (3%) are attached to their parents as `mark`.

4208 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.71177587844255.

The following 16 pairs of parts of speech are connected with `mark`: [sl-pos/VERB]()-[sl-pos/SCONJ]() (3307; 79% instances), [sl-pos/ADJ]()-[sl-pos/SCONJ]() (489; 12% instances), [sl-pos/NOUN]()-[sl-pos/SCONJ]() (167; 4% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (145; 3% instances), [sl-pos/VERB]()-[sl-pos/PART]() (47; 1% instances), [sl-pos/ADJ]()-[sl-pos/ADV]() (21; 0% instances), [sl-pos/DET]()-[sl-pos/SCONJ]() (9; 0% instances), [sl-pos/ADJ]()-[sl-pos/PART]() (6; 0% instances), [sl-pos/VERB]()-[sl-pos/ADP]() (6; 0% instances), [sl-pos/PRON]()-[sl-pos/SCONJ]() (5; 0% instances), [sl-pos/PROPN]()-[sl-pos/SCONJ]() (5; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/PART]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mark	color:blue
1	Če	če	SCONJ	Cs	_	2	mark	_	Dep=2|Rel=Conj
2	uporabim	uporabiti	VERB	Vmer1s	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
3	prispodobo	prispodoba	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	SpaceAfter=No|Dep=2|Rel=Obj
4	.	.	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 mark	color:blue
1	Bojim	bati	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
2	pa	pa	CCONJ	Cc	_	1	advmod	_	Dep=0|Rel=Root
3	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	1	expl	_	SpaceAfter=No|Dep=1|Rel=PPart
4	,	,	PUNCT	Z	_	9	punct	_	Dep=0|Rel=Root
5	da	da	SCONJ	Cs	_	9	mark	_	Dep=7|Rel=Conj
6	ne	ne	PART	Q	Polarity=Neg	9	advmod	_	Dep=7|Rel=PPart
7	bodo	biti	AUX	Va-f3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	9	cop	_	Dep=1|Rel=Obj
8	ravno	ravno	PART	Q	_	9	advmod	_	Dep=9|Rel=Atr
9	realni	realen	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	1	ccomp	_	SpaceAfter=No|Dep=7|Rel=Atr
10	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 6 mark	color:blue
1	Z	z	ADP	Si	Case=Ins	2	case	_	Dep=2|Rel=Atr
2	leti	leto	NOUN	Ncnpi	Case=Ins|Gender=Neut|Number=Plur	4	obl	_	Dep=4|Rel=AdvO
3	sem	biti	AUX	Va-r1s-n	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	Dep=4|Rel=PPart
4	spoznal	spoznati	VERB	Vmbp-sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
5	,	,	PUNCT	Z	_	11	punct	_	Dep=0|Rel=Root
6	da	da	SCONJ	Cs	_	11	mark	_	Dep=7|Rel=Conj
7	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	cop	_	Dep=4|Rel=Obj
8	Fara	Fara	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	11	nsubj	_	Dep=7|Rel=Sb
9	nenavadno	nenavadno	ADV	Rgp	Degree=Pos	10	advmod	_	Dep=10|Rel=Atr
10	zanimiva	zanimiv	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	Dep=11|Rel=Atr
11	vas	vas	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	4	ccomp	_	SpaceAfter=No|Dep=7|Rel=Atr
12	.	.	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

692 nodes (4%) are attached to their parents as `mark`.

691 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.98265895953757.

The following 15 pairs of parts of speech are connected with `mark`: [sl-pos/VERB]()-[sl-pos/SCONJ]() (548; 79% instances), [sl-pos/ADJ]()-[sl-pos/SCONJ]() (52; 8% instances), [sl-pos/NOUN]()-[sl-pos/SCONJ]() (34; 5% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (23; 3% instances), [sl-pos/AUX]()-[sl-pos/SCONJ]() (9; 1% instances), [sl-pos/X]()-[sl-pos/SCONJ]() (5; 1% instances), [sl-pos/DET]()-[sl-pos/SCONJ]() (4; 1% instances), [sl-pos/NUM]()-[sl-pos/SCONJ]() (3; 0% instances), [sl-pos/PART]()-[sl-pos/SCONJ]() (3; 0% instances), [sl-pos/VERB]()-[sl-pos/PART]() (3; 0% instances), [sl-pos/ADV]()-[sl-pos/SCONJ]() (2; 0% instances), [sl-pos/PROPN]()-[sl-pos/SCONJ]() (2; 0% instances), [sl-pos/VERB]()-[sl-pos/ADP]() (2; 0% instances), [sl-pos/PROPN]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark	color:blue
1	tu	tu	ADV	Rgp	Degree=Pos	0	root	_	word=tu|msd=Rsn
2	[gap]	[gap]	X	X	_	1	punct	_	word=[gap]|msd=N
3	ko	ko	SCONJ	Cs	_	4	mark	_	word=ko|msd=Vd
4	greš	iti	VERB	Vmbr2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	1	parataxis	_	word=greš|msd=Ggvsde
5	v	v	ADP	Sa	Case=Acc	6	case	_	word=v|msd=Dt
6	šolo	šola	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	4	obl	_	word=šolo|msd=Sozet
7	pa	pa	CCONJ	Cc	_	10	cc	_	word=pa|msd=Vp
8	si	biti	AUX	Va-r2s-n	Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	cop	_	word=si|msd=Gp-sde-n
9	prvič	prvič	ADV	Rgp	Degree=Pos	10	advmod	_	word=prvič|msd=Rsn
10	ocenjen	ocenjen	ADJ	Appmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part	4	conj	_	word=ocenjen|msd=Pdnmein
11	recimo	reči	VERB	Vmem1p	Aspect=Perf|Mood=Imp|Number=Plur|Person=1|VerbForm=Fin	4	parataxis:discourse	_	word=recimo|msd=Ggdvpm
12	a	a	ADV	Rgp	Degree=Pos	4	discourse	_	word=a|msd=Rsn
13	ne	ne	PART	Q	_	12	fixed	_	word=ne|msd=L

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 mark	color:blue
1	tisti	tisti	DET	Pd-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	6	nsubj	_	word=tist|msd=Zk-mei
2	ki	ki	SCONJ	Cs	_	4	mark	_	word=ko|msd=Vd
3	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	_	word=je|msd=Gp-ste-n
4	žejen	žejen	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	acl	_	word=žejn|msd=Ppnmein
5	bo	biti	AUX	Va-f3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	6	aux	_	word=bo|msd=Gp-pte-n
6	spil	spiti	VERB	Vmep-sm	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	word=spil|msd=Ggdd-em

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 mark	color:blue
1	zag	_	X	Xt	_	3	reparandum	_	word=zag|msd=Nt
2	[gap]	[gap]	X	X	_	4	punct	_	word=[gap]|msd=N
3	zagovora	zagovor	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	4	obj	_	word=zagovora|msd=Somer
4	ne	ne	PART	Q	Polarity=Neg	0	root	_	word=ne|msd=L
5	zaradi	zaradi	ADP	Sg	Case=Gen	6	case	_	word=zard|msd=Dr
6	tega	ta	DET	Pd-nsg	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	4	nmod	_	word=tega|msd=Zk-ser
7	ker	ker	SCONJ	Cs	_	11	mark	_	word=k|msd=Vd
8	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	cop	_	word=je|msd=Gp-ste-n
9	samo	samo	PART	Q	_	10	advmod	_	word=sm|msd=L
10	dvajset	dvajset	NUM	Mlc-pn	Case=Nom|Number=Plur|NumForm=Word|NumType=Card	11	nummod	_	word=dvejset|msd=Kbg-mi
11	procentov	procent	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	6	acl	_	word=procentov|msd=Sommr

~~~


