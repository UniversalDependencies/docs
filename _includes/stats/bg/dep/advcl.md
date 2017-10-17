

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

1449 nodes (1%) are attached to their parents as `advcl`.

948 instances of `advcl` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.32367149758454.

The following 25 pairs of parts of speech are connected with `advcl`: [bg-pos/VERB]()-[bg-pos/VERB]() (1192; 82% instances), [bg-pos/ADJ]()-[bg-pos/VERB]() (51; 4% instances), [bg-pos/NOUN]()-[bg-pos/VERB]() (51; 4% instances), [bg-pos/VERB]()-[bg-pos/NOUN]() (39; 3% instances), [bg-pos/VERB]()-[bg-pos/ADJ]() (37; 3% instances), [bg-pos/ADV]()-[bg-pos/VERB]() (24; 2% instances), [bg-pos/VERB]()-[bg-pos/ADV]() (16; 1% instances), [bg-pos/VERB]()-[bg-pos/PRON]() (5; 0% instances), [bg-pos/VERB]()-[bg-pos/PART]() (4; 0% instances), [bg-pos/VERB]()-[bg-pos/PROPN]() (4; 0% instances), [bg-pos/ADV]()-[bg-pos/NOUN]() (3; 0% instances), [bg-pos/NOUN]()-[bg-pos/NOUN]() (3; 0% instances), [bg-pos/PRON]()-[bg-pos/VERB]() (3; 0% instances), [bg-pos/ADJ]()-[bg-pos/ADJ]() (2; 0% instances), [bg-pos/NOUN]()-[bg-pos/ADJ]() (2; 0% instances), [bg-pos/NOUN]()-[bg-pos/ADV]() (2; 0% instances), [bg-pos/NOUN]()-[bg-pos/PART]() (2; 0% instances), [bg-pos/VERB]()-[bg-pos/DET]() (2; 0% instances), [bg-pos/ADJ]()-[bg-pos/ADV]() (1; 0% instances), [bg-pos/ADJ]()-[bg-pos/NOUN]() (1; 0% instances), [bg-pos/ADP]()-[bg-pos/VERB]() (1; 0% instances), [bg-pos/DET]()-[bg-pos/VERB]() (1; 0% instances), [bg-pos/NUM]()-[bg-pos/VERB]() (1; 0% instances), [bg-pos/PART]()-[bg-pos/ADJ]() (1; 0% instances), [bg-pos/PROPN]()-[bg-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advcl	color:blue
1	Щом	щом	SCONJ	Cs	_	3	mark	_	_
2	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	3	expl	_	_
3	наям	наям-(се)	VERB	Vpptf-r1s	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	_	SpaceAfter=No
4	,	,	PUNCT	punct	_	3	punct	_	_
5	ставам	ставам	VERB	Vpiif-r1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	.	.	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 advcl	color:blue
1	Изглежда	изглежда	VERB	Vniif-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	advcl	_	SpaceAfter=No
2	,	,	PUNCT	punct	_	1	punct	_	_
3	любопитството	любопитство	NOUN	Ncnsd	Definite=Def|Gender=Neut|Number=Sing	6	nsubj	_	_
4	й	неин	PRON	Psot--3--f	Person=3|Poss=Yes|PronType=Prs	3	det	_	_
5	бе	съм	AUX	Vxitf-t3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
6	по-силно	силен	ADJ	Ansi	Definite=Ind|Degree=Cmp|Gender=Neut|Number=Sing	0	root	_	_
7	от	от	ADP	R	_	8	case	_	_
8	всичко	всеки	PRON	Pce-os-n	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	6	obl	_	SpaceAfter=No
9	.	.	PUNCT	punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 advcl	color:blue
1	Това	този	PRON	Pde-os-n	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	nsubj	_	_
2	очевидно	очевидно	ADV	Dd	Degree=Pos	5	advmod	_	_
3	бе	съм	AUX	Vxitf-t3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	_
4	трудна	труден	ADJ	Afsi	Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	_
5	работа	работа	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
6	,	,	PUNCT	punct	_	9	punct	_	_
7	защото	защото	ADV	Prc	_	9	advmod	_	_
8	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	9	expl	_	_
9	забави	забавя-(се)	VERB	Vpptf-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	advcl	_	_
10	доста	доста	ADV	Dq	Degree=Pos	9	advmod	_	SpaceAfter=No
11	.	.	PUNCT	punct	_	5	punct	_	_

~~~


