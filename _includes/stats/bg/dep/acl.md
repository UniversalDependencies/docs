

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

1589 nodes (1%) are attached to their parents as `acl`.

1574 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.15355569540592.

The following 23 pairs of parts of speech are connected with `acl`: [bg-pos/NOUN]()-[bg-pos/VERB]() (1283; 81% instances), [bg-pos/DET]()-[bg-pos/VERB]() (111; 7% instances), [bg-pos/NOUN]()-[bg-pos/NOUN]() (52; 3% instances), [bg-pos/PROPN]()-[bg-pos/VERB]() (49; 3% instances), [bg-pos/NOUN]()-[bg-pos/ADJ]() (27; 2% instances), [bg-pos/ADJ]()-[bg-pos/VERB]() (21; 1% instances), [bg-pos/PROPN]()-[bg-pos/NOUN]() (8; 1% instances), [bg-pos/NUM]()-[bg-pos/VERB]() (7; 0% instances), [bg-pos/PRON]()-[bg-pos/VERB]() (6; 0% instances), [bg-pos/NOUN]()-[bg-pos/ADV]() (5; 0% instances), [bg-pos/DET]()-[bg-pos/ADJ]() (4; 0% instances), [bg-pos/NOUN]()-[bg-pos/PRON]() (3; 0% instances), [bg-pos/ADV]()-[bg-pos/VERB]() (2; 0% instances), [bg-pos/DET]()-[bg-pos/ADV]() (2; 0% instances), [bg-pos/ADJ]()-[bg-pos/NOUN]() (1; 0% instances), [bg-pos/CONJ]()-[bg-pos/VERB]() (1; 0% instances), [bg-pos/DET]()-[bg-pos/NOUN]() (1; 0% instances), [bg-pos/NOUN]()-[bg-pos/NUM]() (1; 0% instances), [bg-pos/NOUN]()-[bg-pos/PROPN]() (1; 0% instances), [bg-pos/PART]()-[bg-pos/VERB]() (1; 0% instances), [bg-pos/PRON]()-[bg-pos/ADJ]() (1; 0% instances), [bg-pos/PROPN]()-[bg-pos/ADV]() (1; 0% instances), [bg-pos/VERB]()-[bg-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl	color:blue
1	Ами	ами	PART	Te	_	4	discourse	_	_
2	наистина	наистина	ADV	Dm	Degree=Pos	4	advmod	_	_
3	ли	ли	PART	Ti	_	2	discourse	_	_
4	има	имам	VERB	Vnitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	хора	хора	NOUN	Nc-li	Definite=Ind|Number=Ptan	4	dobj	_	_
6	,	,	PUNCT	punct	_	8	punct	_	_
7	които	който	PRON	Pre-op	Case=Nom|Number=Plur|PronType=Rel	8	nsubj	_	_
8	ядат	ям-(се)	VERB	Vpitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl	_	_
9	жаби	жаба	NOUN	Ncfpi	Definite=Ind|Gender=Fem|Number=Plur	8	dobj	_	_
10	?	?	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl	color:blue
1	Следствието	следствие	NOUN	Ncnsd	Definite=Def|Gender=Neut|Number=Sing	10	nsubj	_	_
2	от	от	ADP	R	_	3	case	_	_
3	това	този	DET	Pde-os-n	Gender=Neut|Number=Sing|PronType=Dem	1	nmod	_	_
4	,	,	PUNCT	punct	_	7	punct	_	_
5	че	че	SCONJ	Cs	_	7	mark	_	_
6	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
7	заминал	замина	VERB	Vpptcao-smi	Aspect=Perf|Definite=Ind|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	3	acl	_	_
8	,	,	PUNCT	punct	_	7	punct	_	_
9	е	съм	VERB	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
10	очевидно	очевиден	ADJ	Ansi	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
11	.	.	PUNCT	punct	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 acl	color:blue
1	А	а	CONJ	Cp	_	11	cc	_	_
2	beetle	beetle	NOUN	Nc	_	11	nsubj	_	_
3	,	,	PUNCT	punct	_	7	punct	_	_
4	което	който	PRON	Pre-os-n	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	7	nsubj	_	_
5	е	съм	VERB	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
6	истинският	истински	ADJ	Amsf	Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	бръмбар	бръмбар	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	2	acl	_	_
8	,	,	PUNCT	punct	_	7	punct	_	_
9	е	съм	VERB	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
10	хапещо	хапя	ADJ	Vpitcar-sni	Aspect=Imp|Definite=Ind|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	11	amod	_	_
11	насекомо	насекомо	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
12	.	.	PUNCT	punct	_	11	punct	_	_

~~~


