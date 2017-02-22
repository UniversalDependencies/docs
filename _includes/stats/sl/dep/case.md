

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

12159 nodes (10%) are attached to their parents as `case`.

12156 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.48992515831894.

The following 20 pairs of parts of speech are connected with `case`: [sl-pos/NOUN]()-[sl-pos/ADP]() (9528; 78% instances), [sl-pos/PROPN]()-[sl-pos/ADP]() (920; 8% instances), [sl-pos/DET]()-[sl-pos/ADP]() (569; 5% instances), [sl-pos/PRON]()-[sl-pos/ADP]() (437; 4% instances), [sl-pos/ADJ]()-[sl-pos/ADP]() (223; 2% instances), [sl-pos/NOUN]()-[sl-pos/SCONJ]() (220; 2% instances), [sl-pos/NUM]()-[sl-pos/ADP]() (122; 1% instances), [sl-pos/ADV]()-[sl-pos/ADP]() (69; 1% instances), [sl-pos/ADJ]()-[sl-pos/SCONJ]() (20; 0% instances), [sl-pos/ADV]()-[sl-pos/SCONJ]() (15; 0% instances), [sl-pos/PROPN]()-[sl-pos/SCONJ]() (13; 0% instances), [sl-pos/DET]()-[sl-pos/SCONJ]() (6; 0% instances), [sl-pos/PRON]()-[sl-pos/SCONJ]() (5; 0% instances), [sl-pos/X]()-[sl-pos/ADP]() (4; 0% instances), [sl-pos/PUNCT]()-[sl-pos/ADP]() (2; 0% instances), [sl-pos/SCONJ]()-[sl-pos/ADP]() (2; 0% instances), [sl-pos/INTJ]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/INTJ]()-[sl-pos/SCONJ]() (1; 0% instances), [sl-pos/PART]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/X]()-[sl-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
1	Za	za	ADP	Sa	Case=Acc	2	case	_	Dep=2|Rel=Atr
2	zadovoljitev	zadovoljitev	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	7	obl	_	Dep=7|Rel=AdvO
3	pomembne	pomemben	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	Dep=4|Rel=Atr
4	želje	želja	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	Dep=2|Rel=Atr
5	so	biti	AUX	Va-r3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	cop	_	Dep=0|Rel=Root
6	pripravljeni	pripravljen	ADJ	Appmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	Dep=5|Rel=Atr
7	vložiti	vložiti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	6	ccomp	_	Dep=6|Rel=Obj
8	več	več	DET	Rgc	PronType=Ind	9	det	_	Dep=9|Rel=Atr
9	truda	trud	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No|Dep=7|Rel=Obj
10	.	.	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root

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
4	pa	pa	CCONJ	Cc	_	5	advmod	_	Dep=0|Rel=Root
5	imajo	imeti	VERB	Vmpr3p-n	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	parataxis	_	Dep=0|Rel=Root
6	tudi	tudi	PART	Q	_	5	advmod	_	Dep=0|Rel=Root
7	v	v	ADP	Sl	Case=Loc	8	case	_	Dep=8|Rel=Atr
8	EU	EU	PROPN	Npfsl	Case=Loc|Gender=Fem|Number=Sing	5	obl	_	Dep=5|Rel=AdvO
9	še	še	PART	Q	_	5	advmod	_	Dep=0|Rel=Root
10	vedno	vedno	ADV	Rgp	Degree=Pos	5	advmod	_	Dep=5|Rel=AdvO
11	težave	težava	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	5	obj	_	Dep=5|Rel=Obj
12	z	z	ADP	Si	Case=Ins	13	case	_	Dep=13|Rel=Atr
13	mikročipi	mikročip	NOUN	Ncmpi	Case=Ins|Gender=Masc|Number=Plur	11	nmod	_	SpaceAfter=No|Dep=11|Rel=Atr
14	.	.	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	Kakšno	kakšen	DET	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	0	root	_	Dep=2|Rel=Atr
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	Dep=0|Rel=Root
3	sploh	sploh	PART	Q	_	1	advmod	_	Dep=0|Rel=Root
4	mariborsko	mariborski	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	5	amod	_	Dep=5|Rel=Atr
5	stališče	stališče	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	1	nsubj	_	Dep=2|Rel=Sb
6	ob	ob	ADP	Sl	Case=Loc	7	case	_	Dep=7|Rel=Atr
7	tem	ta	DET	Pd-nsl	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	1	obl	_	SpaceAfter=No|Dep=2|Rel=AdvO
8	,	,	PUNCT	Z	_	11	punct	_	Dep=0|Rel=Root
9	ga	on	PRON	Pp3msa--y	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Variant=Short	11	obj	_	Dep=11|Rel=Obj
10	sploh	sploh	PART	Q	_	11	advmod	_	Dep=0|Rel=Root
11	imamo	imeti	VERB	Vmpr1p-n	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	parataxis	_	SpaceAfter=No|Dep=0|Rel=Root
12	!	!	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

1177 nodes (6%) are attached to their parents as `case`.

1176 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44180118946474.

The following 21 pairs of parts of speech are connected with `case`: [sl-pos/NOUN]()-[sl-pos/ADP]() (771; 66% instances), [sl-pos/PROPN]()-[sl-pos/ADP]() (113; 10% instances), [sl-pos/PRON]()-[sl-pos/ADP]() (75; 6% instances), [sl-pos/DET]()-[sl-pos/ADP]() (65; 6% instances), [sl-pos/ADJ]()-[sl-pos/ADP]() (43; 4% instances), [sl-pos/NUM]()-[sl-pos/ADP]() (23; 2% instances), [sl-pos/ADV]()-[sl-pos/ADP]() (17; 1% instances), [sl-pos/NOUN]()-[sl-pos/SCONJ]() (17; 1% instances), [sl-pos/X]()-[sl-pos/ADP]() (14; 1% instances), [sl-pos/DET]()-[sl-pos/ADV]() (9; 1% instances), [sl-pos/PRON]()-[sl-pos/SCONJ]() (5; 0% instances), [sl-pos/ADV]()-[sl-pos/SCONJ]() (4; 0% instances), [sl-pos/PROPN]()-[sl-pos/SCONJ]() (4; 0% instances), [sl-pos/VERB]()-[sl-pos/ADP]() (4; 0% instances), [sl-pos/ADJ]()-[sl-pos/SCONJ]() (3; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (3; 0% instances), [sl-pos/DET]()-[sl-pos/SCONJ]() (2; 0% instances), [sl-pos/VERB]()-[sl-pos/SCONJ]() (2; 0% instances), [sl-pos/ADP]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/CCONJ]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
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
# visual-style 9 8 case	color:blue
1	ja	ja	PART	Q	_	3	discourse	_	word=ja|msd=L
2	res	res	ADV	Rgp	Degree=Pos	3	advmod	_	word=res|msd=Rsn
3	je	biti	VERB	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	word=je|msd=Gp-ste-n
4	eee	eee	INTJ	I	_	7	discourse:filler	_	word=eee|msd=M
5	kuharica	kuharica	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	word=kuharca|msd=Sozei
6	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	word=je|msd=Gp-ste-n
7	bila	biti	VERB	Va-p-sf	Gender=Fem|Number=Sing|VerbForm=Part	3	parataxis	_	word=bla|msd=Gp-d-ez
8	z	z	ADP	Sg	Case=Gen	9	case	_	word=z|msd=Dr
9	loma	Lom	PROPN	Npmsg	Case=Gen|Gender=Masc|Number=Sing	7	obl	_	word=Loma|msd=Slmer
10	nad	nad	ADP	Si	Case=Ins	11	case	_	word=nad|msd=Do
11	tržičem	Tržič	PROPN	Npmsi	Case=Ins|Gender=Masc|Number=Sing	9	nmod	_	word=Tržičem|msd=Slmeo

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
1	iz	iz	ADP	Sg	Case=Gen	2	case	_	word=iz|msd=Dr
2	česa	kaj	PRON	Pq-nsg	Case=Gen|Gender=Neut|Number=Sing|PronType=Int	0	root	_	word=česa|msd=Zv-ser
3	pa	pa	CCONJ	Cc	_	2	advmod	_	word=pa|msd=Vp
4	?	?	PUNCT	Z	_	2	punct	_	word=?|msd=U

~~~


