

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

1631 nodes (1%) are attached to their parents as `parataxis`.

1433 instances of `parataxis` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.277743715512.

The following 18 pairs of parts of speech are connected with `parataxis`: [sl-pos/VERB]()-[sl-pos/VERB]() (974; 60% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (172; 11% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (104; 6% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (98; 6% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (97; 6% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (66; 4% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (27; 2% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (23; 1% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (18; 1% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (16; 1% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (12; 1% instances), [sl-pos/ADJ]()-[sl-pos/PROPN]() (8; 0% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (5; 0% instances), [sl-pos/PROPN]()-[sl-pos/VERB]() (4; 0% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (3; 0% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/NOUN]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (1; 0% instances).


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
9	se	se	PRON	Px------y	PronType=Prs|Variant=Short	11	expl	_	Dep=11|Rel=PPart
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
6	sebe	se	PRON	Px---g	Case=Gen|PronType=Prs	4	nmod	_	Dep=3|Rel=AdvO
7	in	in	CONJ	Cc	_	6	cc	_	Dep=9|Rel=Conj
8	svoje	svoj	DET	Px-fsg	Case=Gen|Gender=Fem|Number=Sing|PronType=Prs	9	det	_	Dep=9|Rel=Atr
9	okolice	okolica	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	6	conj	_	SpaceAfter=No|Dep=6|Rel=Coord
10	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~


