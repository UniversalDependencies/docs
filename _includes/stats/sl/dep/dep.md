

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

8 nodes (0%) are attached to their parents as `dep`.

8 instances of `dep` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.5.

The following 2 pairs of parts of speech are connected with `dep`: [sl-pos/VERB]()-[sl-pos/NUM]() (6; 75% instances), [sl-pos/NOUN]()-[sl-pos/NUM]() (2; 25% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 dep	color:blue
1	1470	1470	NUM	Mdc	NumForm=Digit|NumType=Card	9	dep	_	Dep=0|Rel=Root
2	Ludvik	Ludvik	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	Dep=9|Rel=Sb
3	XI.	XI.	NUM	Mro	NumForm=Roman|NumType=Ord	2	nummod	_	SpaceAfter=No|Dep=2|Rel=Atr
4	(	(	PUNCT	Z	_	5	punct	_	SpaceAfter=No|Dep=0|Rel=Root
5	142383	142383	NUM	Mdc	NumForm=Digit|NumType=Card	2	nummod	_	SpaceAfter=No|Dep=0|Rel=Root
6	)	)	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root
7	s	z	ADP	Si	Case=Ins	8	case	_	Dep=8|Rel=Atr
8	Švicarji	Švicar	PROPN	Npmpi	Case=Ins|Gender=Masc|Number=Plur	9	nmod	_	Dep=9|Rel=Obj
9	sklene	skleniti	VERB	Vmer3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
10	zavezništvo	zavezništvo	NOUN	Ncnsa	Case=Acc|Gender=Neut|Number=Sing	9	dobj	_	Dep=9|Rel=Obj
11	proti	proti	ADP	Sd	Case=Dat	12	case	_	Dep=12|Rel=Atr
12	Burgundcem	Burgundec	PROPN	Npmpd	Case=Dat|Gender=Masc|Number=Plur	10	nmod	_	SpaceAfter=No|Dep=10|Rel=Atr
13	.	.	PUNCT	Z	_	9	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 1 dep	color:blue
1	20	20	NUM	Mdc	NumForm=Digit|NumType=Card	17	dep	_	Dep=0|Rel=Root
2	Predniki	prednik	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	17	nsubj	_	SpaceAfter=No|Dep=14|Rel=Sb
3	,	,	PUNCT	Z	_	12	punct	_	Dep=0|Rel=Root
4	ki	ki	SCONJ	Cs	_	12	mark	_	Dep=5|Rel=Conj
5	so	biti	VERB	Va-r3p-n	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	Dep=2|Rel=Atr
6	za	za	ADP	Sa	Case=Acc	7	case	_	Dep=7|Rel=Atr
7	Nuere	Nuer	PROPN	Npmpa	Case=Acc|Gender=Masc|Number=Plur	12	nmod	_	SpaceAfter=No|Dep=5|Rel=Obj
8	v	v	ADP	Sl	Case=Loc	10	case	_	Dep=10|Rel=Atr
9	nekem	nek	DET	Pi-msl	Case=Loc|Gender=Masc|Number=Sing|PronType=Ind	10	det	_	Dep=10|Rel=Atr
10	smislu	smisel	NOUN	Ncmsl	Case=Loc|Gender=Masc|Number=Sing	12	nmod	_	Dep=5|Rel=AdvM
11	ideološka	ideološki	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	12	amod	_	Dep=12|Rel=Atr
12	opora	opora	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	2	acl	_	SpaceAfter=No|Dep=5|Rel=Atr
13	,	,	PUNCT	Z	_	12	punct	_	Dep=0|Rel=Root
14	so	biti	VERB	Va-r3p-n	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	Dep=0|Rel=Root
15	torej	torej	ADV	Rgp	Degree=Pos	17	advmod	_	Dep=0|Rel=Root
16	tudi	tudi	PART	Q	_	17	advmod	_	Dep=0|Rel=Root
17	institucija	institucija	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	Dep=14|Rel=Atr
18	za	za	ADP	Sa	Case=Acc	19	case	_	Dep=19|Rel=Atr
19	mišljenje	mišljenje	NOUN	Ncnsa	Case=Acc|Gender=Neut|Number=Sing	17	nmod	_	SpaceAfter=No|Dep=17|Rel=Atr
20	,	,	PUNCT	Z	_	19	punct	_	Dep=22|Rel=Conj
21	za	za	ADP	Sa	Case=Acc	22	case	_	Dep=22|Rel=Atr
22	spominjanje	spominjanje	NOUN	Ncnsa	Case=Acc|Gender=Neut|Number=Sing	19	conj	_	Dep=19|Rel=Coord
23	in	in	CONJ	Cc	_	19	cc	_	Dep=24|Rel=Conj
24	pozabljanje	pozabljanje	NOUN	Ncnsa	Case=Acc|Gender=Neut|Number=Sing	19	conj	_	SpaceAfter=No|Dep=19|Rel=Coord
25	.	.	PUNCT	Z	_	17	punct	_	Dep=0|Rel=Root

~~~


