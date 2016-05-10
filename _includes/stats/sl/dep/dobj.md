

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

7024 nodes (5%) are attached to their parents as `dobj`.

4321 instances of `dobj` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.35335990888383.

The following 18 pairs of parts of speech are connected with `dobj`: [sl-pos/VERB]()-[sl-pos/NOUN]() (4774; 68% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (1817; 26% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (180; 3% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (96; 1% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (64; 1% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (45; 1% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (9; 0% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (8; 0% instances), [sl-pos/ADJ]()-[sl-pos/PROPN]() (7; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (7; 0% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (4; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (3; 0% instances), [sl-pos/ADV]()-[sl-pos/NOUN]() (3; 0% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (3; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 dobj	color:blue
1	Srebrni	srebrn	ADJ	Agpmsay	Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	Dep=3|Rel=Atr
2	častni	časten	ADJ	Agpmsay	Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	Dep=3|Rel=Atr
3	znak	znak	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	dobj	_	Dep=5|Rel=Obj
4	je	biti	AUX	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	Dep=5|Rel=PPart
5	prejela	prejeti	VERB	Vmep-sf	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
6	tudi	tudi	PART	Q	_	5	advmod	_	Dep=0|Rel=Root
7	Pia	Pia	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	Dep=5|Rel=Sb
8	Mlakar	Mlakar	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	7	name	_	SpaceAfter=No|Dep=7|Rel=Atr
9	.	.	PUNCT	Z	_	5	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 dobj	color:blue
1	Zdaj	zdaj	ADV	Rgp	Degree=Pos	4	advmod	_	Dep=4|Rel=AdvO
2	sem	biti	AUX	Va-r1s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux	_	Dep=4|Rel=PPart
3	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	4	expl	_	Dep=4|Rel=PPart
4	spomnil	spomniti	VERB	Vmep-sm	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
5	,	,	PUNCT	Z	_	9	punct	_	Dep=0|Rel=Root
6	kam	kam	ADV	Rgp	Degree=Pos	9	advmod	_	Dep=9|Rel=Conj
7	sem	biti	AUX	Va-r1s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	aux	_	Dep=9|Rel=PPart
8	jo	on	PRON	Pp3fsa--y	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Variant=Short	9	dobj	_	Dep=9|Rel=Obj
9	vtaknil	vtakniti	VERB	Vmep-sm	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	4	ccomp	_	SpaceAfter=No|Dep=4|Rel=Obj
10	!	!	PUNCT	Z	_	4	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dobj	color:blue
1	Rosemary	Rosemary	PROPN	Npfsa	Case=Acc|Gender=Fem|Number=Sing	3	dobj	_	Dep=3|Rel=Obj
2	sem	biti	AUX	Va-r1s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	Dep=3|Rel=PPart
3	imel	imeti	VERB	Vmpp-sm	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
4	zelo	zelo	ADV	Rgp	Degree=Pos	5	advmod	_	Dep=5|Rel=Atr
5	rad	rad	ADV	Rgp	Degree=Pos	3	advmod	_	SpaceAfter=No|Dep=3|Rel=AdvM
6	.	.	PUNCT	Z	_	3	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

1383 nodes (5%) are attached to their parents as `dobj`.

749 instances of `dobj` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.14895155459147.

The following 24 pairs of parts of speech are connected with `dobj`: [sl-pos/VERB]()-[sl-pos/NOUN]() (640; 46% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (607; 44% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (29; 2% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (26; 2% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (17; 1% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (15; 1% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (7; 1% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (6; 0% instances), [sl-pos/AUX]()-[sl-pos/PRON]() (5; 0% instances), [sl-pos/X]()-[sl-pos/PRON]() (5; 0% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (4; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (4; 0% instances), [sl-pos/PART]()-[sl-pos/PRON]() (3; 0% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (2; 0% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (2; 0% instances), [sl-pos/PRON]()-[sl-pos/NUM]() (2; 0% instances), [sl-pos/X]()-[sl-pos/NOUN]() (2; 0% instances), [sl-pos/AUX]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/PART]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 dobj	color:blue
1	ker	ker	SCONJ	Cs	_	2	mark	_	word=k|msd=Vd
2	imaš	imeti	VERB	Vmpr2s-n	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	word=maš|msd=Ggnsde-n
3	študentsko	študentski	ADJ	Agpfsa	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	word=študentsko|msd=Ppnzet
4	vizo	viza	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	2	dobj	_	word=vizo|msd=Sozet

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 dobj	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 dobj	color:blue
1	sprašujemo	spraševati	VERB	Vmpr1p	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	word=sprašujemo|msd=Ggnspm
2	vas	ti	PRON	Pp2-pa	Case=Acc|Number=Plur|Person=2|PronType=Prs	1	dobj	_	word=vas|msd=Zod-mt
3	in	in	CONJ	Cc	_	1	cc	_	word=in|msd=Vp
4	vprašali	vprašati	VERB	Vmep-pm	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	1	conj	_	word=vprašali|msd=Ggdd-mm
5	smo	biti	AUX	Va-r1p-n	Mood=Ind|Negative=Pos|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	4	aux	_	word=smo|msd=Gp-spm-n
6	tudi	tudi	PART	Q	_	4	advmod	_	word=tudi|msd=L
7	mimoidoče	mimoidoč	ADJ	Agpmpa	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	4	dobj	_	word=mimoidoče|msd=Ppnmmt

~~~


