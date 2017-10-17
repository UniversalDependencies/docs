

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is a language-specific subtype of [csubj]().

80 nodes (0%) are attached to their parents as `csubj:pass`.

73 instances of `csubj:pass` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.5625.

The following 4 pairs of parts of speech are connected with `csubj:pass`: [bg-pos/VERB]()-[bg-pos/VERB]() (60; 75% instances), [bg-pos/VERB]()-[bg-pos/NOUN]() (16; 20% instances), [bg-pos/VERB]()-[bg-pos/ADJ]() (3; 4% instances), [bg-pos/VERB]()-[bg-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 csubj:pass	color:blue
1	Който	който	PRON	Pre-os-m	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	2	nsubj	_	_
2	търси	търся	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	csubj:pass	_	_
3	съвършенство	съвършенство	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	punct	_	2	punct	_	_
5	осъден	осъдя	VERB	Vpptcv--smi	Aspect=Perf|Definite=Ind|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
6	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
7	да	да	AUX	Tx	_	8	aux	_	_
8	създава	създавам	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	_	_
9	само	само	ADV	Dd	Degree=Pos	10	advmod	_	_
10	фрагменти	фрагмент	NOUN	Ncmpi	Definite=Ind|Gender=Masc|Number=Plur	8	obj	_	SpaceAfter=No
11	.	.	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 csubj:pass	color:blue
1	Предполага	предполагам	VERB	Vnitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	1	expl	_	SpaceAfter=No
3	,	,	PUNCT	punct	_	9	punct	_	_
4	че	че	SCONJ	Cs	_	9	mark	_	_
5	и	и	CCONJ	Cp	_	7	cc	_	_
6	този	този	DET	Pde-os-m	Gender=Masc|Number=Sing|PronType=Dem	7	det	_	_
7	атентат	атентат	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	9	nsubj	_	_
8	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
9	дело	дело	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	1	csubj:pass	_	_
10	на	на	ADP	R	_	11	case	_	_
11	ЕТА	ета	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj:pass	color:blue
1	Оказа	окажа-(се)	VERB	Vpptf-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	1	expl	_	SpaceAfter=No
3	,	,	PUNCT	punct	_	7	punct	_	_
4	че	че	SCONJ	Cs	_	7	mark	_	_
5	той	аз	PRON	Ppe-os3m	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
6	бил	съм	AUX	Vxitcat-smi	Aspect=Imp|Definite=Ind|Gender=Masc|Mood=Ind|Number=Sing|VerbForm=Part|Voice=Act	7	cop	_	_
7	зает	зает	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	csubj:pass	_	_
8	с	с	ADP	R	_	10	case	_	_
9	друго	друг	ADJ	Ansi	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	10	amod	_	_
10	дело	дело	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	7	obl	_	SpaceAfter=No
11	.	.	PUNCT	punct	_	1	punct	_	_

~~~


