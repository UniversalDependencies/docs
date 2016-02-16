

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

7996 nodes (6%) are attached to their parents as `root`.

7996 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.93584292146073.

The following 12 pairs of parts of speech are connected with `root`: [sl-pos/ROOT]()-[sl-pos/VERB]() (6202; 78% instances), [sl-pos/ROOT]()-[sl-pos/ADJ]() (1045; 13% instances), [sl-pos/ROOT]()-[sl-pos/NOUN]() (608; 8% instances), [sl-pos/ROOT]()-[sl-pos/X]() (57; 1% instances), [sl-pos/ROOT]()-[sl-pos/PRON]() (41; 1% instances), [sl-pos/ROOT]()-[sl-pos/PROPN]() (21; 0% instances), [sl-pos/ROOT]()-[sl-pos/ADV]() (10; 0% instances), [sl-pos/ROOT]()-[sl-pos/PART]() (5; 0% instances), [sl-pos/ROOT]()-[sl-pos/NUM]() (3; 0% instances), [sl-pos/ROOT]()-[sl-pos/PUNCT]() (2; 0% instances), [sl-pos/ROOT]()-[sl-pos/CONJ]() (1; 0% instances), [sl-pos/ROOT]()-[sl-pos/INTJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	Joj	joj	INTJ	I	_	5	discourse	_	SpaceAfter=No|Dep=0|Rel=Root
2	,	,	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root
3	kako	kako	ADV	Rgp	Degree=Pos	5	advmod	_	Dep=4|Rel=Conj
4	sem	biti	VERB	Va-r1s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	cop	_	Dep=0|Rel=Root
5	raztresen	raztresen	ADJ	Appmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=4|Rel=Atr
6	!	!	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Škoda	škoda	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	Dep=2|Rel=Atr
2	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No|Dep=0|Rel=Root
3	,	,	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root
4	da	da	SCONJ	Cs	_	7	mark	_	Dep=7|Rel=Conj
5	slovenski	slovenski	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	Dep=6|Rel=Atr
6	uporabniki	uporabnik	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	Dep=7|Rel=Sb
7	iščejo	iskati	VERB	Vmpr3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	csubj	_	Dep=2|Rel=Sb
8	informacije	informacija	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	7	dobj	_	Dep=7|Rel=Obj
9	na	na	ADP	Sl	Case=Loc	11	case	_	Dep=11|Rel=Atr
10	tujih	tuj	ADJ	Agpfpl	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur	11	amod	_	Dep=11|Rel=Atr
11	straneh	stran	NOUN	Ncfpl	Case=Loc|Gender=Fem|Number=Plur	7	nmod	_	SpaceAfter=No|Dep=7|Rel=AdvO
12	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~


