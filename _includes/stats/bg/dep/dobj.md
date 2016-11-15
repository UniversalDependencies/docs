

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

7451 nodes (5%) are attached to their parents as `dobj`.

5980 instances of `dobj` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.76486377667427.

The following 15 pairs of parts of speech are connected with `dobj`: [bg-pos/VERB]()-[bg-pos/NOUN]() (5019; 67% instances), [bg-pos/VERB]()-[bg-pos/PRON]() (1072; 14% instances), [bg-pos/VERB]()-[bg-pos/ADJ]() (312; 4% instances), [bg-pos/VERB]()-[bg-pos/ADV]() (269; 4% instances), [bg-pos/VERB]()-[bg-pos/VERB]() (202; 3% instances), [bg-pos/VERB]()-[bg-pos/DET]() (184; 2% instances), [bg-pos/VERB]()-[bg-pos/PUNCT]() (171; 2% instances), [bg-pos/VERB]()-[bg-pos/PROPN]() (157; 2% instances), [bg-pos/VERB]()-[bg-pos/NUM]() (41; 1% instances), [bg-pos/PART]()-[bg-pos/NOUN]() (8; 0% instances), [bg-pos/PART]()-[bg-pos/VERB]() (6; 0% instances), [bg-pos/ADJ]()-[bg-pos/PRON]() (5; 0% instances), [bg-pos/ADV]()-[bg-pos/PRON]() (3; 0% instances), [bg-pos/NOUN]()-[bg-pos/PRON]() (1; 0% instances), [bg-pos/VERB]()-[bg-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 dobj	color:blue
1	Съвсем	съвсем	ADV	Dq	_	2	advmod	_	_
2	загуби	загубя-(се)	VERB	Vpptf-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	власт	власт	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	2	dobj	_	_
4	над	над	ADP	R	_	5	case	_	_
5	себе	себе	PRON	Ppxla	Case=Acc|PronType=Prs|Reflex=Yes	3	nmod	_	_
6	си	си	PART	T	_	5	mwe	_	_
7	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dobj	color:blue
1	Ще	ще	PART	Tx	_	3	aux	_	_
2	ги	аз	PRON	Ppetap3	Case=Acc|Number=Plur|Person=3|PronType=Prs	3	dobj	_	_
3	защитава	защитавам	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	безплатно	безплатно	ADV	Dm	Degree=Pos	3	advmod	_	_
5	.	.	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 dobj	color:blue
1	Очите	око	NOUN	Ncnpd	Definite=Def|Gender=Neut|Number=Plur	4	nsubj	_	_
2	на	на	ADP	R	_	3	case	_	_
3	Марга	марга	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	1	nmod	_	_
4	почнаха	почна-(се)	VERB	Vpptf-o3p	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	да	да	PART	Tx	_	6	aux	_	_
6	стават	ставам	VERB	Vpiif-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	ccomp	_	_
7	големи	голям	ADJ	A-pi	Definite=Ind|Degree=Pos|Number=Plur	6	dobj	_	_
8	.	.	PUNCT	punct	_	4	punct	_	_

~~~


