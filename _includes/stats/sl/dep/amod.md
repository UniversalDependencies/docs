

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

11764 nodes (8%) are attached to their parents as `amod`.

11485 instances of `amod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25918055083305.

The following 9 pairs of parts of speech are connected with `amod`: [sl-pos/NOUN]()-[sl-pos/ADJ]() (11415; 97% instances), [sl-pos/PROPN]()-[sl-pos/ADJ]() (247; 2% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (55; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (25; 0% instances), [sl-pos/X]()-[sl-pos/ADJ]() (9; 0% instances), [sl-pos/NUM]()-[sl-pos/ADJ]() (6; 0% instances), [sl-pos/NOUN]()-[sl-pos/X]() (5; 0% instances), [sl-pos/INTJ]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 amod	color:blue
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
# visual-style 9 8 amod	color:blue
1	Zaradi	zaradi	ADP	Sg	Case=Gen	2	case	_	Dep=2|Rel=Atr
2	nas	jaz	PRON	Pp1-pg	Case=Gen|Number=Plur|Person=1|PronType=Prs	4	nmod	_	Dep=4|Rel=AdvO
3	bi	biti	AUX	Va-c	Mood=Cnd|VerbForm=Fin	4	aux	_	Dep=4|Rel=PPart
4	bili	biti	VERB	Va-p-pm	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	Dep=0|Rel=Root
5	lahko	lahko	ADV	Rgp	Degree=Pos	4	advmod	_	Dep=4|Rel=PPart
6	tudi	tudi	PART	Q	_	4	advmod	_	Dep=0|Rel=Root
7	snežno	snežno	ADV	Rgp	Degree=Pos	8	advmod	_	Dep=8|Rel=Atr
8	beli	bel	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	9	amod	_	Dep=9|Rel=Atr
9	Slovenci	Slovenec	PROPN	Npmpn	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	SpaceAfter=No|Dep=4|Rel=Sb
10	!	!	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 amod	color:blue
1	Česa	kaj	PRON	Pq-nsg	Case=Gen|Gender=Neut|Number=Sing|PronType=Int	6	dobj	_	Dep=6|Rel=Obj
2	bolj	bolj	ADV	Rgc	Degree=Cmp	3	advmod	_	Dep=3|Rel=Atr
3	določnega	določen	ADJ	Agpnsg	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	1	amod	_	Dep=1|Rel=Atr
4	zaenkrat	zaenkrat	ADV	Rgp	Degree=Pos	6	advmod	_	Dep=6|Rel=AdvO
5	ne	ne	PART	Q	_	6	neg	_	Dep=6|Rel=PPart
6	zmoremo	zmoči	VERB	Vmer1p	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
7	.	.	PUNCT	Z	_	6	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


