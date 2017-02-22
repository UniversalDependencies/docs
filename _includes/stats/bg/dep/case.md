

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

19401 nodes (14%) are attached to their parents as `case`.

19395 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45987320241225.

The following 9 pairs of parts of speech are connected with `case`: [bg-pos/NOUN]()-[bg-pos/ADP]() (15628; 81% instances), [bg-pos/PROPN]()-[bg-pos/ADP]() (2300; 12% instances), [bg-pos/PRON]()-[bg-pos/ADP]() (848; 4% instances), [bg-pos/ADJ]()-[bg-pos/ADP]() (249; 1% instances), [bg-pos/NUM]()-[bg-pos/ADP]() (132; 1% instances), [bg-pos/VERB]()-[bg-pos/ADP]() (111; 1% instances), [bg-pos/DET]()-[bg-pos/ADP]() (88; 0% instances), [bg-pos/ADV]()-[bg-pos/ADP]() (39; 0% instances), [bg-pos/ADJ]()-[bg-pos/PRON]() (6; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
1	На	на	ADP	R	_	2	case	_	_
2	заека	заек	NOUN	Ncmsh	Definite=Def|Gender=Masc|Number=Sing	4	iobj	_	_
3	му	аз	PRON	Ppetds3m	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
4	омръзна	омръзне-ми	VERB	Vnpif-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	да	да	AUX	Tx	_	6	aux	_	_
6	студува	студувам	VERB	Vpiif-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	csubj	_	SpaceAfter=No
7	.	.	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	След	след	ADP	R	_	2	case	_	_
2	седмица	седмица	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	3	obl	_	_
3	отиде	отида-(си)	VERB	Vppif-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	у	у	ADP	R	_	5	case	_	_
5	Ганини	ганини	PROPN	H-pi	Definite=Ind|Number=Plur	3	iobj	_	SpaceAfter=No
6	.	.	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	Съвсем	съвсем	ADV	Dq	Degree=Pos	2	advmod	_	_
2	загуби	загубя-(се)	VERB	Vpptf-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	власт	власт	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	2	obj	_	_
4	над	над	ADP	R	_	5	case	_	_
5	себе	себе	PRON	Ppxla	Case=Acc|PronType=Prs|Reflex=Yes	3	nmod	_	_
6	си	си	PART	T	_	5	fixed	_	SpaceAfter=No
7	.	.	PUNCT	punct	_	2	punct	_	_

~~~


