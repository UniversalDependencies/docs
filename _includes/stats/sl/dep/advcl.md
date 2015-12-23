

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

1303 nodes (1%) are attached to their parents as `advcl`.

756 instances of `advcl` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.95778971603991.

The following 12 pairs of parts of speech are connected with `advcl`: [sl-pos/VERB]()-[sl-pos/VERB]() (935; 72% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (146; 11% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (139; 11% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (24; 2% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (19; 1% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (17; 1% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (10; 1% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (6; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (3; 0% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (2; 0% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 advcl	color:blue
1	Juhe	juha	NOUN	Ncfpn	Case=Nom|Gender=Fem|Number=Plur	2	nsubj	_	Dep=2|Rel=Sb
2	teknejo	tekniti	VERB	Vmbr3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
3	,	,	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root
4	če	če	SCONJ	Cs	_	6	mark	_	Dep=6|Rel=Conj
5	jih	on	PRON	Pp3mpa--y	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Variant=Short	6	dobj	_	Dep=6|Rel=Obj
6	serviramo	servirati	VERB	Vmbr1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	advcl	_	Dep=2|Rel=AdvO
7	vroče	vroč	ADJ	Agpfpa	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	6	advcl	_	Dep=6|Rel=Atr
8	ali	ali	CONJ	Cc	_	7	cc	_	Dep=11|Rel=Conj
9	pa	pa	CONJ	Cc	_	6	advmod	_	Dep=0|Rel=Root
10	tudi	tudi	PART	Q	_	6	advmod	_	Dep=0|Rel=Root
11	hladne	hladen	ADJ	Agpfpa	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	7	conj	_	SpaceAfter=No|Dep=7|Rel=Coord
12	.	.	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 advcl	color:blue
1	Juhe	juha	NOUN	Ncfpn	Case=Nom|Gender=Fem|Number=Plur	2	nsubj	_	Dep=2|Rel=Sb
2	teknejo	tekniti	VERB	Vmbr3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
3	,	,	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root
4	če	če	SCONJ	Cs	_	6	mark	_	Dep=6|Rel=Conj
5	jih	on	PRON	Pp3mpa--y	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Variant=Short	6	dobj	_	Dep=6|Rel=Obj
6	serviramo	servirati	VERB	Vmbr1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	advcl	_	Dep=2|Rel=AdvO
7	vroče	vroč	ADJ	Agpfpa	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	6	advcl	_	Dep=6|Rel=Atr
8	ali	ali	CONJ	Cc	_	7	cc	_	Dep=11|Rel=Conj
9	pa	pa	CONJ	Cc	_	6	advmod	_	Dep=0|Rel=Root
10	tudi	tudi	PART	Q	_	6	advmod	_	Dep=0|Rel=Root
11	hladne	hladen	ADJ	Agpfpa	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	7	conj	_	SpaceAfter=No|Dep=7|Rel=Coord
12	.	.	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 2 advcl	color:blue
1	Ker	ker	SCONJ	Cs	_	2	mark	_	Dep=2|Rel=Conj
2	imata	imeti	VERB	Vmpr3d-n	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Dual|Person=3|Tense=Pres|VerbForm=Fin	13	advcl	_	Dep=9|Rel=AdvO
3	oba	oba	PRON	Pg-mdn	Case=Nom|Gender=Masc|Number=Dual|PronType=Tot	2	nsubj	_	Dep=2|Rel=Sb
4	težave	težava	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	2	dobj	_	Dep=2|Rel=Obj
5	z	z	ADP	Si	Case=Ins	6	case	_	Dep=6|Rel=Atr
6	ledvicami	ledvica	NOUN	Ncfpi	Case=Ins|Gender=Fem|Number=Plur	4	nmod	_	SpaceAfter=No|Dep=4|Rel=Atr
7	,	,	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root
8	je	biti	AUX	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	Dep=9|Rel=PPart
9	bilo	biti	VERB	Va-p-sn	Gender=Neut|Number=Sing|VerbForm=Part	13	cop	_	Dep=0|Rel=Root
10	to	ta	PRON	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	13	nsubj	_	Dep=9|Rel=Sb
11	zanju	zame	PRON	Pp3mda--b	Case=Acc|Gender=Masc|Number=Dual|Person=3|PronType=Prs|Variant=Bound	13	dobj	_	Dep=13|Rel=Obj
12	zelo	zelo	ADV	Rgp	Degree=Pos	13	advmod	_	Dep=13|Rel=Atr
13	oteženo	otežen	ADJ	Appnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=9|Rel=Atr
14	.	.	PUNCT	Z	_	13	punct	_	Dep=0|Rel=Root

~~~


