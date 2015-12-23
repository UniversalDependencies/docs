

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

18552 nodes (13%) are attached to their parents as `punct`.

11775 instances of `punct` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.26088831392842.

The following 13 pairs of parts of speech are connected with `punct`: [sl-pos/VERB]()-[sl-pos/PUNCT]() (12888; 69% instances), [sl-pos/ADJ]()-[sl-pos/PUNCT]() (2354; 13% instances), [sl-pos/NOUN]()-[sl-pos/PUNCT]() (2347; 13% instances), [sl-pos/PROPN]()-[sl-pos/PUNCT]() (381; 2% instances), [sl-pos/NUM]()-[sl-pos/PUNCT]() (178; 1% instances), [sl-pos/ADV]()-[sl-pos/PUNCT]() (120; 1% instances), [sl-pos/X]()-[sl-pos/PUNCT]() (114; 1% instances), [sl-pos/PART]()-[sl-pos/PUNCT]() (71; 0% instances), [sl-pos/PRON]()-[sl-pos/PUNCT]() (68; 0% instances), [sl-pos/INTJ]()-[sl-pos/PUNCT]() (20; 0% instances), [sl-pos/CONJ]()-[sl-pos/PUNCT]() (7; 0% instances), [sl-pos/ADP]()-[sl-pos/PUNCT]() (3; 0% instances), [sl-pos/PUNCT]()-[sl-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 punct	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 punct	color:blue
1	Joj	joj	INTJ	I	_	5	discourse	_	SpaceAfter=No|Dep=0|Rel=Root
2	,	,	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root
3	kako	kako	ADV	Rgp	Degree=Pos	5	advmod	_	Dep=4|Rel=Conj
4	sem	biti	VERB	Va-r1s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	cop	_	Dep=0|Rel=Root
5	raztresen	raztresen	ADJ	Appmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=4|Rel=Atr
6	!	!	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 punct	color:blue
1	Toda	toda	CONJ	Cc	_	4	cc	_	Dep=3|Rel=Conj
2	kaj	kaj	PRON	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	4	nsubj	_	Dep=3|Rel=Sb
3	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	Dep=0|Rel=Root
4	energija	energija	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No|Dep=3|Rel=Atr
5	"	"	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root
6	nacionalizma	nacionalizem	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No|Dep=4|Rel=Atr
7	"	"	PUNCT	Z	_	6	punct	_	SpaceAfter=No|Dep=0|Rel=Root
8	?	?	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root

~~~


