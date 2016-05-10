

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

11138 nodes (7%) are attached to their parents as `root`.

11138 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.1641228227689.

The following 12 pairs of parts of speech are connected with `root`: [bg-pos/ROOT]()-[bg-pos/VERB]() (9164; 82% instances), [bg-pos/ROOT]()-[bg-pos/NOUN]() (1008; 9% instances), [bg-pos/ROOT]()-[bg-pos/ADJ]() (381; 3% instances), [bg-pos/ROOT]()-[bg-pos/ADV]() (217; 2% instances), [bg-pos/ROOT]()-[bg-pos/PROPN]() (212; 2% instances), [bg-pos/ROOT]()-[bg-pos/PRON]() (60; 1% instances), [bg-pos/ROOT]()-[bg-pos/PART]() (50; 0% instances), [bg-pos/ROOT]()-[bg-pos/INTJ]() (26; 0% instances), [bg-pos/ROOT]()-[bg-pos/DET]() (13; 0% instances), [bg-pos/ROOT]()-[bg-pos/NUM]() (4; 0% instances), [bg-pos/ROOT]()-[bg-pos/CONJ]() (2; 0% instances), [bg-pos/ROOT]()-[bg-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	Щом	щом	SCONJ	Cs	_	3	mark	_	_
2	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	3	expl	_	_
3	наям	наям-(се)	VERB	Vpptf-r1s	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	_	_
4	,	,	PUNCT	punct	_	3	punct	_	_
5	ставам	ставам	VERB	Vpiif-r1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	.	.	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Страх	страх	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
2	ли	ли	PART	Ti	_	1	discourse	_	_
3	те	аз	PRON	Ppetas2	Case=Acc|Number=Sing|Person=2|PronType=Prs	1	dobj	_	_
4	е	съм	VERB	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
5	?	?	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Най-лошото	лош	ADJ	Ansd	Definite=Def|Degree=Sup|Gender=Neut|Number=Sing	0	root	_	_
2	е	съм	VERB	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	,	,	PUNCT	punct	_	7	punct	_	_
4	че	че	SCONJ	Cs	_	7	mark	_	_
5	тя	аз	PRON	Ppe-os3f	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	nsubjpass	_	_
6	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	auxpass	_	_
7	поразена	поразя-(се)	VERB	Vpptcv--sfi	Aspect=Perf|Definite=Ind|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	1	csubj	_	_
8	просто	просто	ADV	Dd	_	7	advmod	_	_
9	до	до	ADP	R	_	10	case	_	_
10	мозъка	мозък	NOUN	Ncmsh	Definite=Def|Gender=Masc|Number=Sing	7	nmod	_	_
11	на	на	ADP	R	_	12	case	_	_
12	костите	кост	NOUN	Ncfpd	Definite=Def|Gender=Fem|Number=Plur	10	nmod	_	_
13	.	.	PUNCT	punct	_	1	punct	_	_

~~~


