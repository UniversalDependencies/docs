

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

13476 nodes (10%) are attached to their parents as `case`.

13473 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49183734045711.

The following 19 pairs of parts of speech are connected with `case`: [sl-pos/NOUN]()-[sl-pos/ADP]() (10583; 79% instances), [sl-pos/PRON]()-[sl-pos/ADP]() (1130; 8% instances), [sl-pos/PROPN]()-[sl-pos/ADP]() (1002; 7% instances), [sl-pos/NOUN]()-[sl-pos/SCONJ]() (245; 2% instances), [sl-pos/ADJ]()-[sl-pos/ADP]() (235; 2% instances), [sl-pos/NUM]()-[sl-pos/ADP]() (124; 1% instances), [sl-pos/ADV]()-[sl-pos/ADP]() (76; 1% instances), [sl-pos/ADJ]()-[sl-pos/SCONJ]() (21; 0% instances), [sl-pos/ADV]()-[sl-pos/SCONJ]() (17; 0% instances), [sl-pos/PRON]()-[sl-pos/SCONJ]() (13; 0% instances), [sl-pos/PROPN]()-[sl-pos/SCONJ]() (13; 0% instances), [sl-pos/X]()-[sl-pos/ADP]() (6; 0% instances), [sl-pos/PART]()-[sl-pos/ADP]() (2; 0% instances), [sl-pos/PUNCT]()-[sl-pos/ADP]() (2; 0% instances), [sl-pos/SCONJ]()-[sl-pos/ADP]() (2; 0% instances), [sl-pos/X]()-[sl-pos/SCONJ]() (2; 0% instances), [sl-pos/DET]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/INTJ]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/INTJ]()-[sl-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
1	Za	za	ADP	Sa	Case=Acc	2	case	_	Dep=2|Rel=Atr
2	zadovoljitev	zadovoljitev	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	7	nmod	_	Dep=7|Rel=AdvO
3	pomembne	pomemben	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	Dep=4|Rel=Atr
4	želje	želja	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	Dep=2|Rel=Atr
5	so	biti	VERB	Va-r3p-n	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	Dep=0|Rel=Root
6	pripravljeni	pripravljen	ADJ	Appmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	Dep=5|Rel=Atr
7	vložiti	vložiti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	6	ccomp	_	Dep=6|Rel=Obj
8	več	več	DET	Rgc	Degree=Cmp	9	det	_	Dep=9|Rel=Atr
9	truda	trud	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	7	dobj	_	SpaceAfter=No|Dep=7|Rel=Obj
10	.	.	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
1	Zakonodaja	zakonodaja	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	Dep=6|Rel=Sb
2	in	in	CONJ	Cc	_	1	cc	_	Dep=3|Rel=Conj
3	trg	trg	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	1	conj	_	Dep=1|Rel=Coord
4	delovne	deloven	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	Dep=5|Rel=Atr
5	sile	sila	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	Dep=3|Rel=Atr
6	sta	biti	VERB	Va-r3d-n	Mood=Ind|Negative=Pos|Number=Dual|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	Dep=0|Rel=Root
7	med	med	ADP	Si	Case=Ins	8	case	_	Dep=8|Rel=Atr
8	seboj	se	PRON	Px---i	Case=Ins|PronType=Prs	10	nmod	_	Dep=10|Rel=Atr
9	tesno	tesno	ADV	Rgp	Degree=Pos	10	advmod	_	Dep=10|Rel=Atr
10	povezana	povezan	ADJ	Appmdn	Case=Nom|Degree=Pos|Gender=Masc|Number=Dual|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=6|Rel=Atr
11	.	.	PUNCT	Z	_	10	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
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


