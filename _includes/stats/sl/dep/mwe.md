

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

452 nodes (0%) are attached to their parents as `mwe`.

452 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17035398230089.

The following 29 pairs of parts of speech are connected with `mwe`: [sl-pos/ADV]()-[sl-pos/SCONJ]() (125; 28% instances), [sl-pos/PART]()-[sl-pos/SCONJ]() (53; 12% instances), [sl-pos/DET]()-[sl-pos/SCONJ]() (48; 11% instances), [sl-pos/SCONJ]()-[sl-pos/SCONJ]() (47; 10% instances), [sl-pos/CONJ]()-[sl-pos/SCONJ]() (25; 6% instances), [sl-pos/ADV]()-[sl-pos/ADJ]() (18; 4% instances), [sl-pos/CONJ]()-[sl-pos/PART]() (18; 4% instances), [sl-pos/X]()-[sl-pos/X]() (18; 4% instances), [sl-pos/ADP]()-[sl-pos/NOUN]() (16; 4% instances), [sl-pos/PART]()-[sl-pos/PART]() (13; 3% instances), [sl-pos/PART]()-[sl-pos/ADV]() (10; 2% instances), [sl-pos/ADV]()-[sl-pos/ADV]() (9; 2% instances), [sl-pos/ADP]()-[sl-pos/SCONJ]() (8; 2% instances), [sl-pos/CONJ]()-[sl-pos/CONJ]() (7; 2% instances), [sl-pos/PART]()-[sl-pos/CONJ]() (7; 2% instances), [sl-pos/ADP]()-[sl-pos/PRON]() (5; 1% instances), [sl-pos/DET]()-[sl-pos/PART]() (5; 1% instances), [sl-pos/ADV]()-[sl-pos/PRON]() (4; 1% instances), [sl-pos/CONJ]()-[sl-pos/ADV]() (3; 1% instances), [sl-pos/SCONJ]()-[sl-pos/PART]() (3; 1% instances), [sl-pos/PRON]()-[sl-pos/PART]() (2; 0% instances), [sl-pos/ADV]()-[sl-pos/PART]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/SCONJ]()-[sl-pos/X]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 mwe	color:blue
1	Danes	danes	ADV	Rgp	Degree=Pos	2	advmod	_	Dep=2|Rel=AdvO
2	ima	imeti	VERB	Vmpr3s-n	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
3	Primorje	Primorje	PROPN	Npnsn	Case=Nom|Gender=Neut|Number=Sing	2	nsubj	_	Dep=2|Rel=Sb
4	že	že	PART	Q	_	2	advmod	_	Dep=0|Rel=Root
5	več	več	ADV	Rgc	Degree=Cmp	9	advmod	_	Dep=9|Rel=Atr
6	kot	kot	SCONJ	Cs	_	5	mwe	_	Dep=9|Rel=Atr
7	91	91	NUM	Mdc	NumForm=Digit|NumType=Card	9	nummod	_	SpaceAfter=No|Dep=9|Rel=Atr
8	-	-	PUNCT	Z	_	2	punct	_	SpaceAfter=No|Dep=0|Rel=Root
9	odstotni	odstoten	ADJ	Agpmsay	Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	Dep=10|Rel=Atr
10	delež	delež	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	dobj	_	Dep=2|Rel=Obj
11	Gradisa	Gradis	PROPN	Npmsg	Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	Dep=10|Rel=Atr
12	GPL	GPL	PROPN	Npmsg	Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No|Dep=11|Rel=Atr
13	.	.	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mwe	color:blue
1	Korak	korak	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	SpaceAfter=No|Dep=8|Rel=Sb
2	,	,	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root
3	že	že	PART	Q	_	6	mark	_	Dep=6|Rel=Conj
4	ko	ko	SCONJ	Cs	_	3	mwe	_	Dep=3|Rel=MWU
5	ga	on	PRON	Pp3msa--y	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Variant=Short	6	dobj	_	Dep=6|Rel=Obj
6	stopaš	stopati	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	8	advcl	_	SpaceAfter=No|Dep=8|Rel=AdvO
7	,	,	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root
8	tone	toniti	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
9	v	v	ADP	Sa	Case=Acc	10	case	_	Dep=10|Rel=Atr
10	preteklost	preteklost	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No|Dep=8|Rel=AdvO
11	.	.	PUNCT	Z	_	8	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 mwe	color:blue
1	Skupaj	skupaj	ADV	Rgp	Degree=Pos	2	advmod	_	Dep=2|Rel=AdvM
2	imamo	imeti	VERB	Vmpr1p-n	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
3	že	že	PART	Q	_	2	advmod	_	Dep=0|Rel=Root
4	več	več	DET	Rgc	Degree=Cmp|PronType=Ind	7	det	_	Dep=7|Rel=Atr
5	kot	kot	SCONJ	Cs	_	4	mwe	_	Dep=7|Rel=Atr
6	30	30	NUM	Mdc	NumForm=Digit|NumType=Card	7	nummod	_	Dep=7|Rel=Atr
7	enot	enota	NOUN	Ncfpg	Case=Gen|Gender=Fem|Number=Plur	2	dobj	_	SpaceAfter=No|Dep=2|Rel=Obj
8	.	.	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

284 nodes (1%) are attached to their parents as `mwe`.

284 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05281690140845.

The following 31 pairs of parts of speech are connected with `mwe`: [sl-pos/CONJ]()-[sl-pos/SCONJ]() (48; 17% instances), [sl-pos/CONJ]()-[sl-pos/CONJ]() (40; 14% instances), [sl-pos/ADV]()-[sl-pos/SCONJ]() (38; 13% instances), [sl-pos/ADV]()-[sl-pos/PART]() (35; 12% instances), [sl-pos/PART]()-[sl-pos/ADV]() (22; 8% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (18; 6% instances), [sl-pos/ADV]()-[sl-pos/ADP]() (14; 5% instances), [sl-pos/PART]()-[sl-pos/SCONJ]() (9; 3% instances), [sl-pos/SCONJ]()-[sl-pos/SCONJ]() (8; 3% instances), [sl-pos/ADP]()-[sl-pos/SCONJ]() (6; 2% instances), [sl-pos/ADV]()-[sl-pos/ADJ]() (5; 2% instances), [sl-pos/PART]()-[sl-pos/PART]() (5; 2% instances), [sl-pos/ADP]()-[sl-pos/PRON]() (4; 1% instances), [sl-pos/NUM]()-[sl-pos/NUM]() (4; 1% instances), [sl-pos/ADP]()-[sl-pos/NOUN]() (3; 1% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (3; 1% instances), [sl-pos/X]()-[sl-pos/X]() (3; 1% instances), [sl-pos/ADV]()-[sl-pos/PRON]() (2; 1% instances), [sl-pos/ADV]()-[sl-pos/VERB]() (2; 1% instances), [sl-pos/PART]()-[sl-pos/CONJ]() (2; 1% instances), [sl-pos/PROPN]()-[sl-pos/PROPN]() (2; 1% instances), [sl-pos/VERB]()-[sl-pos/SCONJ]() (2; 1% instances), [sl-pos/ADV]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/CONJ]()-[sl-pos/PART]() (1; 0% instances), [sl-pos/CONJ]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/PART]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/SCONJ]() (1; 0% instances), [sl-pos/SCONJ]()-[sl-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mwe	color:blue
1	tako	tako	CONJ	Cc	_	0	root	_	word=tko|msd=Vp
2	da	da	SCONJ	Cs	_	1	mwe	_	word=da|msd=Vd

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 mwe	color:blue
1	saj	saj	CONJ	Cc	_	4	cc	_	word=s|msd=Vp
2	še	še	PART	Q	_	4	advmod	_	word=še|msd=L
3	ne	ne	PART	Q	_	4	neg	_	word=ne|msd=L
4	vem	vedeti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	word=vem|msd=Ggnspe
5	kam	kam	ADV	Rgp	Degree=Pos	4	ccomp	_	word=kam|msd=Rsn
6	v	v	ADP	Sa	Case=Acc	7	case	_	word=v|msd=Dt
7	avstralijo	Avstralija	PROPN	Npfsa	Case=Acc|Gender=Fem|Number=Sing	4	parataxis	_	word=Avstralijo|msd=Slzet
8	ali	ali	CONJ	Cc	_	7	cc	_	word=al|msd=Vp
9	pa	pa	CONJ	Cc	_	8	mwe	_	word=pa|msd=Vp
10	v	v	ADP	Sa	Case=Acc	11	case	_	word=v|msd=Dt
11	ameriko	Amerika	PROPN	Npfsa	Case=Acc|Gender=Fem|Number=Sing	7	conj	_	word=Ameriko|msd=Slzet

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mwe	color:blue
1	zato	zato	ADV	Rgp	Degree=Pos	5	mark	_	word=zato|msd=Rsn
2	ker	ker	SCONJ	Cs	_	1	mwe	_	word=ker|msd=Vd
3	mestni	mesten	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	4	amod	_	word=mestni|msd=Ppnmmi
4	avtobusi	avtobus	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	word=avtobusi|msd=Sommi
5	imajo	imeti	VERB	Vmpr3p-n	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=majo|msd=Ggnstm-n
6	zelo	zelo	ADV	Rgp	Degree=Pos	7	advmod	_	word=zlo|msd=Rsn
7	slab	slab	ADJ	Agpmsan	Case=Acc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	word=slab|msd=Ppnmetn
8	izkoristek	izkoristek	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	dobj	_	word=izkoristek|msd=Sometn

~~~


