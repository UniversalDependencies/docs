

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

2810 nodes (2%) are attached to their parents as `cop`.

2535 instances of `cop` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.54768683274021.

The following 8 pairs of parts of speech are connected with `cop`: [sl-pos/ADJ]()-[sl-pos/VERB]() (1904; 68% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (813; 29% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (61; 2% instances), [sl-pos/PROPN]()-[sl-pos/VERB]() (25; 1% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (3; 0% instances), [sl-pos/NUM]()-[sl-pos/VERB]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
1	Joj	joj	INTJ	I	_	5	discourse	_	SpaceAfter=No|Dep=0|Rel=Root
2	,	,	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root
3	kako	kako	ADV	Rgp	Degree=Pos	5	advmod	_	Dep=4|Rel=Conj
4	sem	biti	VERB	Va-r1s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	cop	_	Dep=0|Rel=Root
5	raztresen	raztresen	ADJ	Appmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=4|Rel=Atr
6	!	!	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Toda	toda	CONJ	Cc	_	4	cc	_	Dep=3|Rel=Conj
2	kaj	kaj	PRON	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	4	nsubj	_	Dep=3|Rel=Sb
3	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	Dep=0|Rel=Root
4	energija	energija	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No|Dep=3|Rel=Atr
5	"	"	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root
6	nacionalizma	nacionalizem	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No|Dep=4|Rel=Atr
7	"	"	PUNCT	Z	_	6	punct	_	SpaceAfter=No|Dep=0|Rel=Root
8	?	?	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Kakšno	kakšen	PRON	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	0	root	_	Dep=2|Rel=Atr
2	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	Dep=0|Rel=Root
3	sploh	sploh	PART	Q	_	1	advmod	_	Dep=0|Rel=Root
4	mariborsko	mariborski	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	5	amod	_	Dep=5|Rel=Atr
5	stališče	stališče	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	1	nsubj	_	Dep=2|Rel=Sb
6	ob	ob	ADP	Sl	Case=Loc	7	case	_	Dep=7|Rel=Atr
7	tem	ta	PRON	Pd-nsl	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	1	nmod	_	SpaceAfter=No|Dep=2|Rel=AdvO
8	,	,	PUNCT	Z	_	11	punct	_	Dep=0|Rel=Root
9	ga	on	PRON	Pp3msa--y	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Variant=Short	11	dobj	_	Dep=11|Rel=Obj
10	sploh	sploh	PART	Q	_	11	advmod	_	Dep=0|Rel=Root
11	imamo	imeti	VERB	Vmpr1p-n	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	1	parataxis	_	SpaceAfter=No|Dep=0|Rel=Root
12	!	!	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~


