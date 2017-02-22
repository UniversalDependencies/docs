

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

6440 nodes (5%) are attached to their parents as `advmod`.

5204 instances of `advmod` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.02717391304348.

The following 31 pairs of parts of speech are connected with `advmod`: [bg-pos/VERB]()-[bg-pos/ADV]() (3227; 50% instances), [bg-pos/VERB]()-[bg-pos/PART]() (1034; 16% instances), [bg-pos/NOUN]()-[bg-pos/ADV]() (833; 13% instances), [bg-pos/ADJ]()-[bg-pos/ADV]() (527; 8% instances), [bg-pos/ADV]()-[bg-pos/ADV]() (327; 5% instances), [bg-pos/ADJ]()-[bg-pos/PART]() (69; 1% instances), [bg-pos/NOUN]()-[bg-pos/PART]() (69; 1% instances), [bg-pos/ADP]()-[bg-pos/ADV]() (48; 1% instances), [bg-pos/DET]()-[bg-pos/ADV]() (43; 1% instances), [bg-pos/NUM]()-[bg-pos/ADV]() (42; 1% instances), [bg-pos/ADV]()-[bg-pos/PART]() (36; 1% instances), [bg-pos/NUM]()-[bg-pos/ADP]() (35; 1% instances), [bg-pos/PRON]()-[bg-pos/ADV]() (35; 1% instances), [bg-pos/PROPN]()-[bg-pos/ADV]() (27; 0% instances), [bg-pos/ADV]()-[bg-pos/INTJ]() (24; 0% instances), [bg-pos/NOUN]()-[bg-pos/INTJ]() (13; 0% instances), [bg-pos/NUM]()-[bg-pos/PART]() (11; 0% instances), [bg-pos/DET]()-[bg-pos/PART]() (10; 0% instances), [bg-pos/PRON]()-[bg-pos/PART]() (6; 0% instances), [bg-pos/CCONJ]()-[bg-pos/ADV]() (5; 0% instances), [bg-pos/PRON]()-[bg-pos/INTJ]() (3; 0% instances), [bg-pos/ADJ]()-[bg-pos/ADP]() (2; 0% instances), [bg-pos/ADJ]()-[bg-pos/INTJ]() (2; 0% instances), [bg-pos/INTJ]()-[bg-pos/ADV]() (2; 0% instances), [bg-pos/NOUN]()-[bg-pos/ADP]() (2; 0% instances), [bg-pos/NUM]()-[bg-pos/INTJ]() (2; 0% instances), [bg-pos/PROPN]()-[bg-pos/PART]() (2; 0% instances), [bg-pos/ADP]()-[bg-pos/INTJ]() (1; 0% instances), [bg-pos/DET]()-[bg-pos/ADP]() (1; 0% instances), [bg-pos/DET]()-[bg-pos/INTJ]() (1; 0% instances), [bg-pos/PART]()-[bg-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod	color:blue
1	Съвсем	съвсем	ADV	Dq	Degree=Pos	2	advmod	_	_
2	загуби	загубя-(се)	VERB	Vpptf-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	власт	власт	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	2	obj	_	_
4	над	над	ADP	R	_	5	case	_	_
5	себе	себе	PRON	Ppxla	Case=Acc|PronType=Prs|Reflex=Yes	3	nmod	_	_
6	си	си	PART	T	_	5	fixed	_	SpaceAfter=No
7	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod	color:blue
1	Но	но	CCONJ	Cc	_	7	cc	_	_
2	ти	аз	PRON	Ppe-os2	Case=Nom|Number=Sing|Person=2|PronType=Prs	7	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	punct	_	4	punct	_	_
4	малкият	малък	ADJ	Amsf	Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	4	punct	_	_
6	не	не	PART	Tn	Polarity=Neg	7	advmod	_	_
7	мисли	мисля	VERB	Vpitz--2s	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	SpaceAfter=No
8	,	,	PUNCT	punct	_	12	punct	_	_
9	че	че	SCONJ	Cs	_	12	mark	_	_
10	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	12	expl	_	_
11	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux	_	_
12	свършило	свърша-(се)	VERB	Vpptcao-sni	Aspect=Perf|Definite=Ind|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	7	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advmod	color:blue
1	Огрените	огрея	ADJ	Vpptcv--p-d	Aspect=Perf|Definite=Def|Degree=Pos|Number=Plur|VerbForm=Part|Voice=Pass	2	amod	_	_
2	скали	скала	NOUN	Ncfpi	Definite=Ind|Gender=Fem|Number=Plur	4	nsubj	_	_
3	отсреща	отсреща	ADV	Dl	Degree=Pos	2	advmod	_	_
4	немееха	немея	VERB	Vpiif-m3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	.	.	PUNCT	punct	_	4	punct	_	_

~~~


