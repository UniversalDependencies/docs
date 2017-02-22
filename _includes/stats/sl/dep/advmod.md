

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

10566 nodes (8%) are attached to their parents as `advmod`.

8231 instances of `advmod` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.09918606852167.

The following 36 pairs of parts of speech are connected with `advmod`: [sl-pos/VERB]()-[sl-pos/ADV]() (3817; 36% instances), [sl-pos/VERB]()-[sl-pos/PART]() (2794; 26% instances), [sl-pos/ADJ]()-[sl-pos/ADV]() (1068; 10% instances), [sl-pos/VERB]()-[sl-pos/CCONJ]() (772; 7% instances), [sl-pos/ADJ]()-[sl-pos/PART]() (416; 4% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (336; 3% instances), [sl-pos/ADV]()-[sl-pos/ADV]() (269; 3% instances), [sl-pos/NOUN]()-[sl-pos/PART]() (183; 2% instances), [sl-pos/VERB]()-[sl-pos/DET]() (161; 2% instances), [sl-pos/ADJ]()-[sl-pos/CCONJ]() (115; 1% instances), [sl-pos/DET]()-[sl-pos/ADV]() (96; 1% instances), [sl-pos/ADV]()-[sl-pos/PART]() (84; 1% instances), [sl-pos/ADJ]()-[sl-pos/DET]() (74; 1% instances), [sl-pos/NUM]()-[sl-pos/ADV]() (73; 1% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (58; 1% instances), [sl-pos/NOUN]()-[sl-pos/CCONJ]() (43; 0% instances), [sl-pos/DET]()-[sl-pos/PART]() (42; 0% instances), [sl-pos/NOUN]()-[sl-pos/DET]() (38; 0% instances), [sl-pos/NUM]()-[sl-pos/PART]() (23; 0% instances), [sl-pos/ADV]()-[sl-pos/DET]() (20; 0% instances), [sl-pos/PROPN]()-[sl-pos/ADV]() (18; 0% instances), [sl-pos/DET]()-[sl-pos/DET]() (13; 0% instances), [sl-pos/NUM]()-[sl-pos/DET]() (10; 0% instances), [sl-pos/ADJ]()-[sl-pos/NUM]() (7; 0% instances), [sl-pos/PRON]()-[sl-pos/ADV]() (7; 0% instances), [sl-pos/DET]()-[sl-pos/CCONJ]() (5; 0% instances), [sl-pos/NOUN]()-[sl-pos/X]() (5; 0% instances), [sl-pos/PRON]()-[sl-pos/PART]() (5; 0% instances), [sl-pos/PROPN]()-[sl-pos/PART]() (4; 0% instances), [sl-pos/PRON]()-[sl-pos/DET]() (3; 0% instances), [sl-pos/PROPN]()-[sl-pos/CCONJ]() (2; 0% instances), [sl-pos/CCONJ]()-[sl-pos/PART]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/SCONJ]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/X]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/CCONJ]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 advmod	color:blue
1	Slednje	slednji	ADJ	Agpfpn	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	9	nsubj	_	Dep=9|Rel=Sb
2	bodo	biti	AUX	Va-f3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	9	aux	_	Dep=9|Rel=PPart
3	vsakič	vsakič	ADV	Rgp	Degree=Pos	9	advmod	_	Dep=9|Rel=AdvO
4	ob	ob	ADP	Sl	Case=Loc	6	case	_	Dep=6|Rel=Atr
5	podobnih	podoben	ADJ	Agpmpl	Case=Loc|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	Dep=6|Rel=Atr
6	primerih	primer	NOUN	Ncmpl	Case=Loc|Gender=Masc|Number=Plur	9	obl	_	Dep=9|Rel=AdvO
7	gotovo	gotovo	ADV	Rgp	Degree=Pos	9	advmod	_	Dep=9|Rel=AdvM
8	ponovno	ponovno	ADV	Rgp	Degree=Pos	9	advmod	_	Dep=9|Rel=AdvO
9	oživele	oživeti	VERB	Vmep-pf	Aspect=Perf|Gender=Fem|Number=Plur|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
10	.	.	PUNCT	Z	_	9	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 advmod	color:blue
1	Vsaj	vsaj	PART	Q	_	6	advmod	_	Dep=0|Rel=Root
2	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	Dep=7|Rel=Sb
3	v	v	ADP	Sl	Case=Loc	4	case	_	Dep=4|Rel=Atr
4	ničemer	nič	PRON	Pz-nsl	Case=Loc|Gender=Neut|Number=Sing|PronType=Neg	8	obl	_	Dep=7|Rel=AdvO
5	ne	ne	PART	Q	Polarity=Neg	6	advmod	_	Dep=6|Rel=PPart
6	more	moči	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
7	biti	biti	AUX	Va-n	VerbForm=Inf	8	cop	_	Dep=6|Rel=Atr
8	sporno	sporen	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	6	xcomp	_	SpaceAfter=No|Dep=7|Rel=Atr
9	.	.	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 advmod	color:blue
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




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

2737 nodes (14%) are attached to their parents as `advmod`.

2010 instances of `advmod` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.05042016806723.

The following 48 pairs of parts of speech are connected with `advmod`: [sl-pos/VERB]()-[sl-pos/ADV]() (1029; 38% instances), [sl-pos/VERB]()-[sl-pos/PART]() (577; 21% instances), [sl-pos/VERB]()-[sl-pos/CCONJ]() (188; 7% instances), [sl-pos/ADJ]()-[sl-pos/ADV]() (159; 6% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (121; 4% instances), [sl-pos/NOUN]()-[sl-pos/PART]() (94; 3% instances), [sl-pos/ADV]()-[sl-pos/ADV]() (90; 3% instances), [sl-pos/ADJ]()-[sl-pos/PART]() (63; 2% instances), [sl-pos/VERB]()-[sl-pos/DET]() (57; 2% instances), [sl-pos/DET]()-[sl-pos/ADV]() (41; 1% instances), [sl-pos/NOUN]()-[sl-pos/CCONJ]() (31; 1% instances), [sl-pos/PRON]()-[sl-pos/ADV]() (29; 1% instances), [sl-pos/ADJ]()-[sl-pos/CCONJ]() (27; 1% instances), [sl-pos/ADV]()-[sl-pos/PART]() (25; 1% instances), [sl-pos/PROPN]()-[sl-pos/ADV]() (21; 1% instances), [sl-pos/DET]()-[sl-pos/PART]() (18; 1% instances), [sl-pos/PRON]()-[sl-pos/CCONJ]() (16; 1% instances), [sl-pos/ADJ]()-[sl-pos/DET]() (14; 1% instances), [sl-pos/NOUN]()-[sl-pos/DET]() (14; 1% instances), [sl-pos/NUM]()-[sl-pos/ADV]() (13; 0% instances), [sl-pos/PRON]()-[sl-pos/PART]() (12; 0% instances), [sl-pos/ADV]()-[sl-pos/CCONJ]() (11; 0% instances), [sl-pos/PROPN]()-[sl-pos/PART]() (9; 0% instances), [sl-pos/ADV]()-[sl-pos/DET]() (8; 0% instances), [sl-pos/PART]()-[sl-pos/PART]() (8; 0% instances), [sl-pos/DET]()-[sl-pos/CCONJ]() (7; 0% instances), [sl-pos/NUM]()-[sl-pos/PART]() (7; 0% instances), [sl-pos/AUX]()-[sl-pos/ADV]() (6; 0% instances), [sl-pos/NUM]()-[sl-pos/DET]() (5; 0% instances), [sl-pos/DET]()-[sl-pos/DET]() (4; 0% instances), [sl-pos/PART]()-[sl-pos/ADV]() (4; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (4; 0% instances), [sl-pos/AUX]()-[sl-pos/CCONJ]() (3; 0% instances), [sl-pos/PROPN]()-[sl-pos/CCONJ]() (3; 0% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (3; 0% instances), [sl-pos/VERB]()-[sl-pos/ADP]() (2; 0% instances), [sl-pos/X]()-[sl-pos/ADV]() (2; 0% instances), [sl-pos/X]()-[sl-pos/PART]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/ADJ]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/X]()-[sl-pos/CCONJ]() (1; 0% instances), [sl-pos/X]()-[sl-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 advmod	color:blue
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 advmod	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 advmod	color:blue
1	pa	pa	CCONJ	Cc	_	2	reparandum	_	word=pa|msd=Vp
2	pa	pa	CCONJ	Cc	_	6	cc	_	word=pa|msd=Vp
3	so	biti	AUX	Va-r3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	aux	_	word=so|msd=Gp-stm-n
4	ga	on	PRON	Pp3msa--y	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Variant=Short	6	obj	_	word=ga|msd=Zotmet--k
5	ljudje	človek	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	word=ludi|msd=Sommi
6	zajebavali	zajebavati	VERB	Vmpp-pm	Aspect=Imp|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	word=zajebovali|msd=Ggnd-mm
7	evo	evo	PART	Q	_	12	discourse	_	word=evo|msd=L
8	pol	pol	ADV	Rgp	Degree=Pos	12	advmod	_	word=po|msd=Rsn
9	vam	ti	PRON	Pp2-pd	Case=Dat|Number=Plur|Person=2|PronType=Prs	12	iobj	_	word=vam|msd=Zod-md
10	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	12	aux	_	word=je|msd=Gp-ste-n
11	pa	pa	CCONJ	Cc	_	12	advmod	_	word=pa|msd=Vp
12	dal	dati	VERB	Vmep-sm	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	6	parataxis	_	word=dal|msd=Ggdd-em
13	kajlo	kajla	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	12	obj	_	word=kajlo|msd=Sozet

~~~


