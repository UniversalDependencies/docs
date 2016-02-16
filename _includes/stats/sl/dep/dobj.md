

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

6965 nodes (5%) are attached to their parents as `dobj`.

4312 instances of `dobj` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.35563531945441.

The following 18 pairs of parts of speech are connected with `dobj`: [sl-pos/VERB]()-[sl-pos/NOUN]() (4770; 68% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (1762; 25% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (179; 3% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (96; 1% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (64; 1% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (46; 1% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (9; 0% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (8; 0% instances), [sl-pos/ADJ]()-[sl-pos/PROPN]() (7; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (7; 0% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (4; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (3; 0% instances), [sl-pos/ADV]()-[sl-pos/NOUN]() (3; 0% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (3; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/PART]() (1; 0% instances).


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
3	se	se	PRON	Px------y	PronType=Prs|Variant=Short	4	expl	_	Dep=4|Rel=PPart
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


