

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

1641 nodes (1%) are attached to their parents as `advcl`.

1110 instances of `advcl` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.93845216331505.

The following 39 pairs of parts of speech are connected with `advcl`: [hr-pos/VERB]()-[hr-pos/VERB]() (913; 56% instances), [hr-pos/ADJ]()-[hr-pos/VERB]() (177; 11% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (129; 8% instances), [hr-pos/NOUN]()-[hr-pos/VERB]() (88; 5% instances), [hr-pos/VERB]()-[hr-pos/NOUN]() (72; 4% instances), [hr-pos/ADV]()-[hr-pos/VERB]() (45; 3% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (40; 2% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (33; 2% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (26; 2% instances), [hr-pos/AUX]()-[hr-pos/VERB]() (22; 1% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (16; 1% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (12; 1% instances), [hr-pos/ADV]()-[hr-pos/ADJ]() (9; 1% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (9; 1% instances), [hr-pos/ADJ]()-[hr-pos/AUX]() (7; 0% instances), [hr-pos/NOUN]()-[hr-pos/AUX]() (5; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADV]() (4; 0% instances), [hr-pos/ADJ]()-[hr-pos/ADV]() (3; 0% instances), [hr-pos/AUX]()-[hr-pos/ADJ]() (3; 0% instances), [hr-pos/PART]()-[hr-pos/VERB]() (3; 0% instances), [hr-pos/ADV]()-[hr-pos/ADV]() (2; 0% instances), [hr-pos/AUX]()-[hr-pos/NOUN]() (2; 0% instances), [hr-pos/PRON]()-[hr-pos/VERB]() (2; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADJ]() (2; 0% instances), [hr-pos/VERB]()-[hr-pos/DET]() (2; 0% instances), [hr-pos/VERB]()-[hr-pos/PROPN]() (2; 0% instances), [hr-pos/ADP]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/PROPN]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/CCONJ]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/DET]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/DET]() (1; 0% instances), [hr-pos/NUM]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/SCONJ]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/NUM]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 advcl	color:blue
1	Ako	ako	SCONJ	_	_	3	mark	_	_
2	pak	pak	PART	_	_	3	discourse	_	_
3	izostane	izostati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	advcl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	euro	euro	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
6	bi	biti	AUX	_	Mood=Cnd|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	aux	_	_
7	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	8	expl:pv	_	_
8	mogao	moći	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
9	ponovno	ponovno	ADV	_	Degree=Pos	10	advmod	_	_
10	naći	naći	VERB	_	VerbForm=Inf	8	xcomp	_	_
11	pod	pod	ADP	_	Case=Ins	12	case	_	_
12	pritiskom	pritisak	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No
13	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 advcl	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	Ako	ako	SCONJ	_	_	3	mark	_	_
3	odaberete	odabrati	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	10	advcl	_	_
4	reforme	reforma	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	3	obj	_	SpaceAfter=No
5	,	,	PUNCT	_	_	3	punct	_	_
6	vrata	vrata	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	10	nsubj:pass	_	_
7	EU	EU	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
8	bit	biti	AUX	_	VerbForm=Inf	10	aux:pass	_	_
9	će	htjeti	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	otvorena	otvoriti	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 advcl	color:blue
1	Setimes	Setimes	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	6	parataxis	_	SpaceAfter=No
2	:	:	PUNCT	_	_	1	punct	_	_
3	Što	što	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Int,Rel	6	nsubj	_	_
4	će	htjeti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
5	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	6	expl:pv	_	_
6	dogoditi	dogoditi	VERB	_	VerbForm=Inf	0	root	_	_
7	ako	ako	SCONJ	_	_	10	mark	_	_
8	ipak	ipak	ADV	_	Degree=Pos	10	advmod	_	_
9	bude	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
10	korišten	korišten	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	6	advcl	_	_
11	veto	veto	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	10	nsubj:pass	_	SpaceAfter=No
12	?	?	PUNCT	_	_	6	punct	_	_

~~~


