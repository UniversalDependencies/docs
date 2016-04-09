

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
3	Primorje	Primorje	PROPN	Npnsn	Case=Nom|Gender=Neut|Number=Sing	2	nsubj	_	SpaceAfter=No|Dep=2|Rel=Sb
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
4	več	več	DET	Rgc	Degree=Cmp	7	det	_	Dep=7|Rel=Atr
5	kot	kot	SCONJ	Cs	_	4	mwe	_	Dep=7|Rel=Atr
6	30	30	NUM	Mdc	NumForm=Digit|NumType=Card	7	nummod	_	Dep=7|Rel=Atr
7	enot	enota	NOUN	Ncfpg	Case=Gen|Gender=Fem|Number=Plur	2	dobj	_	SpaceAfter=No|Dep=2|Rel=Obj
8	.	.	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root

~~~


