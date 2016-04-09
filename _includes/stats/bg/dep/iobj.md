

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

3515 nodes (2%) are attached to their parents as `iobj`.

2873 instances of `iobj` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.59317211948791.

The following 12 pairs of parts of speech are connected with `iobj`: [bg-pos/VERB]()-[bg-pos/NOUN]() (2439; 69% instances), [bg-pos/VERB]()-[bg-pos/PRON]() (685; 19% instances), [bg-pos/VERB]()-[bg-pos/PROPN]() (250; 7% instances), [bg-pos/VERB]()-[bg-pos/ADJ]() (54; 2% instances), [bg-pos/VERB]()-[bg-pos/DET]() (37; 1% instances), [bg-pos/VERB]()-[bg-pos/NUM]() (21; 1% instances), [bg-pos/VERB]()-[bg-pos/ADP]() (12; 0% instances), [bg-pos/ADJ]()-[bg-pos/PRON]() (7; 0% instances), [bg-pos/NOUN]()-[bg-pos/PRON]() (5; 0% instances), [bg-pos/VERB]()-[bg-pos/ADV]() (3; 0% instances), [bg-pos/ADV]()-[bg-pos/PRON]() (1; 0% instances), [bg-pos/VERB]()-[bg-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 iobj	color:blue
1	На	на	ADP	R	_	2	case	_	_
2	заека	заек	NOUN	Ncmsh	Definite=Def|Gender=Masc|Number=Sing	4	iobj	_	_
3	му	аз	PRON	Ppetds3m	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
4	омръзна	омръзне-ми	VERB	Vnpif-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	да	да	PART	Tx	_	6	aux	_	_
6	студува	студувам	VERB	Vpiif-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	csubj	_	_
7	.	.	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 iobj	color:blue
1	Не	не	INTJ	Tn	_	2	neg	_	_
2	помня	помня	VERB	Vpitf-r1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	да	да	PART	Tx	_	5	aux	_	_
4	съм	съм	AUX	Vxitf-r1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
5	ходил	ходя-(си)	VERB	Vpitcao-smi	Aspect=Imp|Definite=Ind|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	ccomp	_	_
6	у	у	ADP	R	_	7	case	_	_
7	тях	аз	PRON	Ppelap3	Case=Acc|Number=Plur|Person=3|PronType=Prs	5	iobj	_	_
8	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 iobj	color:blue
1	След	след	ADP	R	_	2	case	_	_
2	седмица	седмица	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	3	nmod	_	_
3	отиде	отида-(си)	VERB	Vppif-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	у	у	ADP	R	_	5	case	_	_
5	Ганини	ганини	PROPN	H-pi	Definite=Ind|Number=Plur	3	iobj	_	_
6	.	.	PUNCT	punct	_	3	punct	_	_

~~~


