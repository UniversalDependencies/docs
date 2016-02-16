

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

4691 nodes (3%) are attached to their parents as `mark`.

4685 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.68599445747175.

The following 15 pairs of parts of speech are connected with `mark`: [sl-pos/VERB]()-[sl-pos/SCONJ]() (3694; 79% instances), [sl-pos/ADJ]()-[sl-pos/SCONJ]() (538; 11% instances), [sl-pos/NOUN]()-[sl-pos/SCONJ]() (184; 4% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (160; 3% instances), [sl-pos/VERB]()-[sl-pos/PART]() (53; 1% instances), [sl-pos/ADJ]()-[sl-pos/ADV]() (22; 0% instances), [sl-pos/PRON]()-[sl-pos/SCONJ]() (14; 0% instances), [sl-pos/ADJ]()-[sl-pos/PART]() (7; 0% instances), [sl-pos/VERB]()-[sl-pos/ADP]() (7; 0% instances), [sl-pos/PROPN]()-[sl-pos/SCONJ]() (6; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/PART]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/SCONJ]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mark	color:blue
1	Če	če	SCONJ	Cs	_	2	mark	_	Dep=2|Rel=Conj
2	uporabim	uporabiti	VERB	Vmer1s	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
3	prispodobo	prispodoba	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	2	dobj	_	SpaceAfter=No|Dep=2|Rel=Obj
4	.	.	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 mark	color:blue
1	Bojim	bati	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
2	pa	pa	CONJ	Cc	_	1	advmod	_	Dep=0|Rel=Root
3	se	se	PRON	Px------y	PronType=Prs|Variant=Short	1	expl	_	SpaceAfter=No|Dep=1|Rel=PPart
4	,	,	PUNCT	Z	_	9	punct	_	Dep=0|Rel=Root
5	da	da	SCONJ	Cs	_	9	mark	_	Dep=7|Rel=Conj
6	ne	ne	PART	Q	_	9	neg	_	Dep=7|Rel=PPart
7	bodo	biti	VERB	Va-f3p-n	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	9	cop	_	Dep=1|Rel=Obj
8	ravno	ravno	PART	Q	_	9	advmod	_	Dep=9|Rel=Atr
9	realni	realen	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	1	ccomp	_	SpaceAfter=No|Dep=7|Rel=Atr
10	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 6 mark	color:blue
1	Z	z	ADP	Si	Case=Ins	2	case	_	Dep=2|Rel=Atr
2	leti	leto	NOUN	Ncnpi	Case=Ins|Gender=Neut|Number=Plur	4	nmod	_	Dep=4|Rel=AdvO
3	sem	biti	AUX	Va-r1s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux	_	Dep=4|Rel=PPart
4	spoznal	spoznati	VERB	Vmbp-sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
5	,	,	PUNCT	Z	_	11	punct	_	Dep=0|Rel=Root
6	da	da	SCONJ	Cs	_	11	mark	_	Dep=7|Rel=Conj
7	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	Dep=4|Rel=Obj
8	Fara	Fara	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	11	nsubj	_	Dep=7|Rel=Sb
9	nenavadno	nenavadno	ADV	Rgp	Degree=Pos	10	advmod	_	Dep=10|Rel=Atr
10	zanimiva	zanimiv	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	Dep=11|Rel=Atr
11	vas	vas	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	4	ccomp	_	SpaceAfter=No|Dep=7|Rel=Atr
12	.	.	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root

~~~


