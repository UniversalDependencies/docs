

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

20221 nodes (14%) are attached to their parents as `nmod`.

15049 instances of `nmod` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.68824489392216.

The following 44 pairs of parts of speech are connected with `nmod`: [sl-pos/NOUN]()-[sl-pos/NOUN]() (7919; 39% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (6881; 34% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (1517; 8% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (1006; 5% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (948; 5% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (447; 2% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (239; 1% instances), [sl-pos/PROPN]()-[sl-pos/PROPN]() (237; 1% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (209; 1% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (199; 1% instances), [sl-pos/ADV]()-[sl-pos/NOUN]() (95; 0% instances), [sl-pos/ADJ]()-[sl-pos/PROPN]() (78; 0% instances), [sl-pos/NOUN]()-[sl-pos/X]() (78; 0% instances), [sl-pos/PROPN]()-[sl-pos/NOUN]() (72; 0% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (61; 0% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (56; 0% instances), [sl-pos/PROPN]()-[sl-pos/X]() (30; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (27; 0% instances), [sl-pos/X]()-[sl-pos/X]() (24; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (10; 0% instances), [sl-pos/ADV]()-[sl-pos/PRON]() (9; 0% instances), [sl-pos/NUM]()-[sl-pos/PRON]() (9; 0% instances), [sl-pos/VERB]()-[sl-pos/ADP]() (9; 0% instances), [sl-pos/ADV]()-[sl-pos/PROPN]() (7; 0% instances), [sl-pos/NUM]()-[sl-pos/NOUN]() (7; 0% instances), [sl-pos/X]()-[sl-pos/PROPN]() (7; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (6; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADP]() (5; 0% instances), [sl-pos/PRON]()-[sl-pos/PROPN]() (4; 0% instances), [sl-pos/X]()-[sl-pos/NOUN]() (4; 0% instances), [sl-pos/PROPN]()-[sl-pos/PRON]() (3; 0% instances), [sl-pos/ADJ]()-[sl-pos/X]() (2; 0% instances), [sl-pos/ADV]()-[sl-pos/ADJ]() (2; 0% instances), [sl-pos/DET]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/NUM]()-[sl-pos/PROPN]() (2; 0% instances), [sl-pos/VERB]()-[sl-pos/INTJ]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/X]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/PUNCT]()-[sl-pos/X]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/SCONJ]() (1; 0% instances), [sl-pos/X]()-[sl-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod	color:blue
1	Stala	stati	VERB	Vmpp-sf	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	aux	_	Dep=1|Rel=PPart
3	milijardo	milijarda	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	1	nmod	_	Dep=1|Rel=AdvM
4	tolarjev	tolar	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	Dep=3|Rel=Atr
5	in	in	CONJ	Cc	_	3	cc	_	Dep=8|Rel=Conj
6	dvesto	dvesto	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	compound	_	Dep=8|Rel=Atr
7	petdeset	petdeset	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	compound	_	Dep=8|Rel=Atr
8	milijonov	milijon	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	conj	_	SpaceAfter=No|Dep=3|Rel=Coord
9	.	.	PUNCT	Z	_	1	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod	color:blue
1	Stala	stati	VERB	Vmpp-sf	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	aux	_	Dep=1|Rel=PPart
3	milijardo	milijarda	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	1	nmod	_	Dep=1|Rel=AdvM
4	tolarjev	tolar	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	Dep=3|Rel=Atr
5	in	in	CONJ	Cc	_	3	cc	_	Dep=8|Rel=Conj
6	dvesto	dvesto	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	compound	_	Dep=8|Rel=Atr
7	petdeset	petdeset	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	compound	_	Dep=8|Rel=Atr
8	milijonov	milijon	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	conj	_	SpaceAfter=No|Dep=3|Rel=Coord
9	.	.	PUNCT	Z	_	1	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 nmod	color:blue
1	V	v	ADP	Sl	Case=Loc	3	case	_	Dep=3|Rel=Atr
2	tem	ta	DET	Pd-msl	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	Dep=3|Rel=Atr
3	trenutku	trenutek	NOUN	Ncmsl	Case=Loc|Gender=Masc|Number=Sing	5	nmod	_	Dep=4|Rel=AdvO
4	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	Dep=0|Rel=Root
5	bistveno	bistven	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	Dep=4|Rel=Atr
6	nerešeno	nerešen	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	7	amod	_	Dep=7|Rel=Atr
7	vprašanje	vprašanje	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	Dep=4|Rel=Sb
8	odnosa	odnos	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	Dep=7|Rel=Atr
9	do	do	ADP	Sg	Case=Gen	11	case	_	Dep=11|Rel=Atr
10	AM	AM	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	11	nmod	_	Dep=11|Rel=Atr
11	BUS-a	BUS	PROPN	Npmsg	Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No|Dep=8|Rel=Atr
12	.	.	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

2030 nodes (7%) are attached to their parents as `nmod`.

1511 instances of `nmod` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.85911330049261.

The following 46 pairs of parts of speech are connected with `nmod`: [sl-pos/VERB]()-[sl-pos/NOUN]() (837; 41% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (436; 21% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (156; 8% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (124; 6% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (90; 4% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (85; 4% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (50; 2% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (31; 2% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (22; 1% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (22; 1% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (19; 1% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (18; 1% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (17; 1% instances), [sl-pos/VERB]()-[sl-pos/ADP]() (12; 1% instances), [sl-pos/PROPN]()-[sl-pos/PROPN]() (10; 0% instances), [sl-pos/ADV]()-[sl-pos/NOUN]() (8; 0% instances), [sl-pos/ADJ]()-[sl-pos/PROPN]() (7; 0% instances), [sl-pos/NOUN]()-[sl-pos/X]() (7; 0% instances), [sl-pos/PRON]()-[sl-pos/PROPN]() (7; 0% instances), [sl-pos/NUM]()-[sl-pos/NOUN]() (6; 0% instances), [sl-pos/PROPN]()-[sl-pos/NOUN]() (6; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (6; 0% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (5; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADP]() (4; 0% instances), [sl-pos/ADV]()-[sl-pos/ADP]() (4; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADP]() (4; 0% instances), [sl-pos/NOUN]()-[sl-pos/NUM]() (4; 0% instances), [sl-pos/ADV]()-[sl-pos/PRON]() (3; 0% instances), [sl-pos/ADV]()-[sl-pos/PROPN]() (3; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (3; 0% instances), [sl-pos/PART]()-[sl-pos/PRON]() (3; 0% instances), [sl-pos/PRON]()-[sl-pos/ADP]() (3; 0% instances), [sl-pos/X]()-[sl-pos/NOUN]() (3; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (2; 0% instances), [sl-pos/PROPN]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/PART]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/PART]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/X]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/X]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod	color:blue
1	km	_	X	Xt	_	3	reparandum	_	word=km|msd=Nt
2	[gap]	[gap]	X	X	_	7	punct	_	word=[gap]|msd=N
3	ker	ker	SCONJ	Cs	_	7	mark	_	word=k|msd=Vd
4	ti	ti	PRON	Pp2-sd--y	Case=Dat|Number=Sing|Person=2|PronType=Prs|Variant=Short	7	iobj	_	word=ti|msd=Zod-ed--k
5	na	na	ADP	Sl	Case=Loc	6	case	_	word=na|msd=Dm
6	vizi	viza	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	7	nmod	_	word=vizi|msd=Sozem
7	piše	pisati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=piše|msd=Ggnste
8	od	od	ADP	Sg	Case=Gen	9	case	_	word=od|msd=Dr
9	kdaj	kdaj	ADV	Rgp	Degree=Pos	13	advmod	_	word=kdaj|msd=Rsn
10	do	do	ADP	Sg	Case=Gen	11	case	_	word=do|msd=Dr
11	kdaj	kdaj	ADV	Rgp	Degree=Pos	13	advmod	_	word=kdaj|msd=Rsn
12	ti	ti	PRON	Pp2-sd--y	Case=Dat|Number=Sing|Person=2|PronType=Prs|Variant=Short	13	dobj	_	word=ti|msd=Zod-ed--k
13	velja	veljati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	ccomp	_	word=vela|msd=Ggnste

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod	color:blue
1	sto	sto	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	5	nummod	_	word=sto|msd=Kbg-mt
2	šestdeset	šestdeset	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	1	compound	_	word=šestdeset|msd=Kbg-mt
3	sto	sto	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	1	conj	_	word=sto|msd=Kbg-mt
4	sedemdeset	sedemdeset	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	3	compound	_	word=sendeset|msd=Kbg-mt
5	glav	glava	NOUN	Ncfpg	Case=Gen|Gender=Fem|Number=Plur	0	root	_	word=glav|msd=Sozmr
6	živine	živina	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	word=žvine|msd=Sozer

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 nmod	color:blue
1	če	če	SCONJ	Cs	_	2	mark	_	word=če|msd=Vd
2	nimajo	imeti	VERB	Vmpr3p-y	Aspect=Imp|Mood=Ind|Negative=Neg|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	reparandum	_	word=nimajo|msd=Ggnstm-d
3	če	če	SCONJ	Cs	_	4	mark	_	word=če|msd=Vd
4	nimajo	imeti	VERB	Vmpr3p-y	Aspect=Imp|Mood=Ind|Negative=Neg|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=nimajo|msd=Ggnstm-d
5	a	a	ADV	Rgp	Degree=Pos	6	advmod	_	word=a|msd=Rsn
6	veš	vedeti	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	parataxis:discourse	_	word=veš|msd=Ggnsde
7	kakšne	kakšen	DET	Pq-fpa	Case=Acc|Gender=Fem|Number=Plur|PronType=Int	8	det	_	word=kešne|msd=Zv-zmt
8	knjige	knjiga	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	4	dobj	_	word=knjige|msd=Sozmt
9	s	z	ADP	Si	Case=Ins	10	case	_	word=s|msd=Do
10	sabo	se	PRON	Px---i	Case=Ins|PronType=Prs	4	nmod	_	word=sabo|msd=Zp---o
11	ali	ali	CONJ	Cc	_	4	cc	_	word=al|msd=Vp
12	pa	pa	CONJ	Cc	_	11	mwe	_	word=pa|msd=Vp
13	kaj	kaj	PRON	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	4	conj:extend	_	word=kej|msd=Zv-sei
14	tako	tako	ADV	Rgp	Degree=Pos	13	advmod	_	word=tko|msd=Rsn

~~~


