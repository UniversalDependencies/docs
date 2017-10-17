

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

6348 nodes (5%) are attached to their parents as `obj`.

3877 instances of `obj` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.35932577189666.

The following 20 pairs of parts of speech are connected with `obj`: [sl-pos/VERB]()-[sl-pos/NOUN]() (4304; 68% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (1469; 23% instances), [sl-pos/VERB]()-[sl-pos/DET]() (172; 3% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (166; 3% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (89; 1% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (54; 1% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (43; 1% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (9; 0% instances), [sl-pos/ADJ]()-[sl-pos/DET]() (7; 0% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (7; 0% instances), [sl-pos/ADJ]()-[sl-pos/PROPN]() (6; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (6; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (3; 0% instances), [sl-pos/ADV]()-[sl-pos/NOUN]() (3; 0% instances), [sl-pos/DET]()-[sl-pos/NOUN]() (3; 0% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (3; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	Če	če	SCONJ	Cs	_	2	mark	_	Dep=2|Rel=Conj
2	uporabim	uporabiti	VERB	Vmer1s	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
3	prispodobo	prispodoba	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	SpaceAfter=No|Dep=2|Rel=Obj
4	.	.	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 obj	color:blue
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


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obj	color:blue
1	Zakaj	zakaj	ADV	Rgp	Degree=Pos	4	advmod	_	Dep=4|Rel=AdvO
2	smo	biti	AUX	Va-r1p-n	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	Dep=4|Rel=PPart
3	to	ta	DET	Pd-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obj	_	Dep=4|Rel=Obj
4	predlagali	predlagati	VERB	Vmbp-pm	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	Dep=0|Rel=Root
5	oziroma	oziroma	CCONJ	Cc	_	6	cc	_	Dep=6|Rel=Conj
6	predlagamo	predlagati	VERB	Vmbr1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	4	conj	_	SpaceAfter=No|Dep=0|Rel=Root
7	?	?	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

889 nodes (5%) are attached to their parents as `obj`.

490 instances of `obj` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.10798650168729.

The following 29 pairs of parts of speech are connected with `obj`: [sl-pos/VERB]()-[sl-pos/NOUN]() (406; 46% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (262; 29% instances), [sl-pos/VERB]()-[sl-pos/DET]() (127; 14% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (21; 2% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (18; 2% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (11; 1% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (9; 1% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (6; 1% instances), [sl-pos/PART]()-[sl-pos/PRON]() (3; 0% instances), [sl-pos/X]()-[sl-pos/PRON]() (3; 0% instances), [sl-pos/ADJ]()-[sl-pos/DET]() (2; 0% instances), [sl-pos/PRON]()-[sl-pos/DET]() (2; 0% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (2; 0% instances), [sl-pos/AUX]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/AUX]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/AUX]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/PART]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/PART]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/X]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/X]()-[sl-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obj	color:blue
1	torej	torej	CCONJ	Cc	_	5	cc	_	word=torej|msd=Vp
2	bomo	biti	AUX	Va-f1p-n	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin	5	aux	_	word=bomo|msd=Gp-ppm-n
3	naslednji	naslednji	ADJ	Agpmsay	Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	word=naslednji|msd=Ppnmetd
4	teden	teden	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obl	_	word=teden|msd=Sometn
5	doživeli	doživeti	VERB	Vmep-pm	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	word=doživeli|msd=Ggdd-mm
6	stotko	stotka	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	word=stotko|msd=Sozet
7	?	?	PUNCT	Z	_	5	punct	_	word=?|msd=U

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obj	color:blue
1	[gap]	[gap]	X	X	_	2	punct	_	word=[gap]|msd=N
2	iščem	iskati	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	word=išem|msd=Ggnspe
3	pa	pa	CCONJ	Cc	_	7	cc	_	word=pa|msd=Vp
4	[gap]	[gap]	X	X	_	2	punct	_	word=[gap]|msd=N
5	ne	ne	PART	Q	Polarity=Neg	7	advmod	_	word=ne|msd=L
6	te	ti	PRON	Pp2-sg--y	Case=Gen|Number=Sing|Person=2|PronType=Prs|Variant=Short	7	obj	_	word=te|msd=Zod-er--k
7	najdem	najti	VERB	Vmer1s	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	conj	_	word=najdem|msd=Ggdspe
8	[audience:laughter]	[audience:laughter]	X	X	_	2	punct	_	word=[audience:laughter]|msd=N

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obj	color:blue
1	zdaj	zdaj	ADV	Rgp	Degree=Pos	4	discourse	_	word=zej|msd=Rsn
2	mogoče	mogoče	ADV	Rgp	Degree=Pos	4	advmod	_	word=mogoče|msd=Rsn
3	to	ta	DET	Pd-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obj	_	word=to|msd=Zk-set
4	ni	biti	VERB	Va-r3s-y	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	word=ni|msd=Gp-ste-d
5	treba	treba	ADV	Rgp	Degree=Pos	4	advmod	_	word=treba|msd=Rsn
6	vsepovsod	vsepovsod	ADV	Rgp	Degree=Pos	4	advmod	_	word=vsepovsod|msd=Rsn

~~~


