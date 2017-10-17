

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

8895 nodes (7%) are attached to their parents as `obl`.

4739 instances of `obl` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.48296795952782.

The following 36 pairs of parts of speech are connected with `obl`: [sl-pos/VERB]()-[sl-pos/NOUN]() (6161; 69% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (780; 9% instances), [sl-pos/VERB]()-[sl-pos/DET]() (459; 5% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (411; 5% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (353; 4% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (224; 3% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (164; 2% instances), [sl-pos/ADJ]()-[sl-pos/DET]() (68; 1% instances), [sl-pos/ADJ]()-[sl-pos/PROPN]() (54; 1% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (40; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (25; 0% instances), [sl-pos/ADV]()-[sl-pos/NOUN]() (21; 0% instances), [sl-pos/DET]()-[sl-pos/NOUN]() (19; 0% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (17; 0% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (14; 0% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (13; 0% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (11; 0% instances), [sl-pos/PROPN]()-[sl-pos/NOUN]() (11; 0% instances), [sl-pos/NOUN]()-[sl-pos/DET]() (10; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (9; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (5; 0% instances), [sl-pos/ADV]()-[sl-pos/PROPN]() (3; 0% instances), [sl-pos/DET]()-[sl-pos/DET]() (3; 0% instances), [sl-pos/DET]()-[sl-pos/PROPN]() (3; 0% instances), [sl-pos/PRON]()-[sl-pos/DET]() (3; 0% instances), [sl-pos/ADV]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/PROPN]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/VERB]()-[sl-pos/INTJ]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/X]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl	color:blue
1	Stala	stati	VERB	Vmpp-sf	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	aux	_	Dep=1|Rel=PPart
3	milijardo	milijarda	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	1	obl	_	Dep=1|Rel=AdvM
4	tolarjev	tolar	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	Dep=3|Rel=Atr
5	in	in	CCONJ	Cc	_	8	cc	_	Dep=8|Rel=Conj
6	dvesto	dvesto	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	nummod	_	Dep=8|Rel=Atr
7	petdeset	petdeset	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	nummod	_	Dep=8|Rel=Atr
8	milijonov	milijon	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	conj	_	SpaceAfter=No|Dep=3|Rel=Coord
9	.	.	PUNCT	Z	_	1	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 obl	color:blue
1	Pri	pri	ADP	Sl	Case=Loc	2	case	_	Dep=2|Rel=Atr
2	večini	večina	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	7	obl	_	Dep=6|Rel=AdvO
3	otrok	otrok	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	2	nmod	_	Dep=2|Rel=Atr
4	intenzivna	intenziven	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	Dep=5|Rel=Atr
5	žalost	žalost	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	Dep=6|Rel=Sb
6	ni	biti	AUX	Va-r3s-y	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	cop	_	Dep=0|Rel=Root
7	pogosta	pogost	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No|Dep=6|Rel=Atr
8	.	.	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 obl	color:blue
1	Njihov	njihov	DET	Ps3msnp	Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	4	det	_	Dep=4|Rel=Atr
2	spokojni	spokojen	ADJ	Agpmsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	Dep=4|Rel=Atr
3	življenski	življenski	ADJ	Agpmsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	Dep=4|Rel=Atr
4	ritem	ritem	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	Dep=7|Rel=Sb
5	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	7	expl	_	Dep=7|Rel=PPart
6	ni	biti	AUX	Va-r3s-y	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	aux	_	Dep=7|Rel=PPart
7	kresal	kresati	VERB	Vmpp-sm	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
8	z	z	ADP	Si	Case=Ins	9	case	_	Dep=9|Rel=Atr
9	našim	naš	DET	Ps1msip	Case=Ins|Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	7	obl	_	SpaceAfter=No|Dep=7|Rel=Obj
10	.	.	PUNCT	Z	_	7	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

899 nodes (5%) are attached to their parents as `obl`.

602 instances of `obl` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.23692992213571.

The following 24 pairs of parts of speech are connected with `obl`: [sl-pos/VERB]()-[sl-pos/NOUN]() (564; 63% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (57; 6% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (55; 6% instances), [sl-pos/VERB]()-[sl-pos/DET]() (53; 6% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (44; 5% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (37; 4% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (34; 4% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (15; 2% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (7; 1% instances), [sl-pos/VERB]()-[sl-pos/ADP]() (7; 1% instances), [sl-pos/ADJ]()-[sl-pos/DET]() (5; 1% instances), [sl-pos/VERB]()-[sl-pos/X]() (4; 0% instances), [sl-pos/ADJ]()-[sl-pos/PROPN]() (3; 0% instances), [sl-pos/DET]()-[sl-pos/ADJ]() (2; 0% instances), [sl-pos/DET]()-[sl-pos/DET]() (2; 0% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/ADJ]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/X]() (1; 0% instances), [sl-pos/PART]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 obl	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl	color:blue
1	klikneš	klikniti	VERB	Vmer2s	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	word=klikneš|msd=Ggdsde
2	in	in	CCONJ	Cc	_	3	cc	_	word=in|msd=Vp
3	prideš	priti	VERB	Vmer2s	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	1	conj	_	word=prideš|msd=Ggdsde
4	do	do	ADP	Sg	Case=Gen	5	case	_	word=do|msd=Dr
5	mene	jaz	PRON	Pp1-sg	Case=Gen|Number=Sing|Person=1|PronType=Prs	3	obl	_	word=mene|msd=Zop-er

~~~


