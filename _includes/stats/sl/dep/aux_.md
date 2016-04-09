

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

7153 nodes (5%) are attached to their parents as `aux`.

6640 instances of `aux` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.55627009646302.

The following 7 pairs of parts of speech are connected with `aux`: [sl-pos/VERB]()-[sl-pos/AUX]() (6436; 90% instances), [sl-pos/ADJ]()-[sl-pos/AUX]() (532; 7% instances), [sl-pos/NOUN]()-[sl-pos/AUX]() (165; 2% instances), [sl-pos/PRON]()-[sl-pos/AUX]() (7; 0% instances), [sl-pos/PROPN]()-[sl-pos/AUX]() (6; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (6; 0% instances), [sl-pos/NUM]()-[sl-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	S	z	ADP	Si	Case=Ins	2	case	_	Dep=2|Rel=Atr
2	tem	ta	PRON	Pd-nsi	Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	6	nmod	_	Dep=5|Rel=AdvM
3	naj	naj	PART	Q	_	6	advmod	_	Dep=5|Rel=PPart
4	bi	biti	AUX	Va-c	Mood=Cnd|VerbForm=Fin	6	aux	_	Dep=5|Rel=PPart
5	bila	biti	VERB	Va-p-sf	Gender=Fem|Number=Sing|VerbForm=Part	6	cop	_	Dep=0|Rel=Root
6	zagotovljena	zagotovljen	ADJ	Appfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	Dep=5|Rel=Atr
7	objektivnost	objektivnost	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	SpaceAfter=No|Dep=5|Rel=Sb
8	.	.	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Zagožen	Zagožen	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	Dep=3|Rel=Sb
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	Dep=3|Rel=PPart
3	bil	biti	VERB	Va-p-sm	Gender=Masc|Number=Sing|VerbForm=Part	5	cop	_	Dep=0|Rel=Root
4	nasprotnega	nasproten	ADJ	Agpnsg	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	5	amod	_	Dep=5|Rel=Atr
5	mnenja	mnenje	NOUN	Ncnsg	Case=Gen|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No|Dep=3|Rel=Atr
6	.	.	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root

~~~


