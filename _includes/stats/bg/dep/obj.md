

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

6012 nodes (4%) are attached to their parents as `obj`.

4872 instances of `obj` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.71872920825017.

The following 15 pairs of parts of speech are connected with `obj`: [bg-pos/VERB]()-[bg-pos/NOUN]() (4336; 72% instances), [bg-pos/VERB]()-[bg-pos/PRON]() (1029; 17% instances), [bg-pos/VERB]()-[bg-pos/ADV]() (199; 3% instances), [bg-pos/VERB]()-[bg-pos/ADJ]() (176; 3% instances), [bg-pos/VERB]()-[bg-pos/PROPN]() (129; 2% instances), [bg-pos/VERB]()-[bg-pos/DET]() (100; 2% instances), [bg-pos/VERB]()-[bg-pos/NUM]() (20; 0% instances), [bg-pos/PART]()-[bg-pos/NOUN]() (7; 0% instances), [bg-pos/VERB]()-[bg-pos/PUNCT]() (4; 0% instances), [bg-pos/ADJ]()-[bg-pos/PRON]() (3; 0% instances), [bg-pos/ADV]()-[bg-pos/PRON]() (3; 0% instances), [bg-pos/NOUN]()-[bg-pos/PRON]() (2; 0% instances), [bg-pos/VERB]()-[bg-pos/VERB]() (2; 0% instances), [bg-pos/ADJ]()-[bg-pos/PROPN]() (1; 0% instances), [bg-pos/PART]()-[bg-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	Съвсем	съвсем	ADV	Dq	Degree=Pos	2	advmod	_	_
2	загуби	загубя-(се)	VERB	Vpptf-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	власт	власт	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	2	obj	_	_
4	над	над	ADP	R	_	5	case	_	_
5	себе	себе	PRON	Ppxla	Case=Acc|PronType=Prs|Reflex=Yes	3	nmod	_	_
6	си	си	PART	T	_	5	fixed	_	SpaceAfter=No
7	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obj	color:blue
1	Ще	ще	AUX	Tx	_	3	aux	_	_
2	ги	аз	PRON	Ppetap3	Case=Acc|Number=Plur|Person=3|PronType=Prs	3	obj	_	_
3	защитава	защитавам	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	безплатно	безплатно	ADV	Dm	Degree=Pos	3	advmod	_	SpaceAfter=No
5	.	.	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	Аз	аз	PRON	Ppe-os1	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	останах	остана	VERB	Vppif-o1s	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	долу	долу	ADV	Dl	Degree=Pos	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	punct	_	6	punct	_	_
5	докато	докато	SCONJ	Cs	_	6	mark	_	_
6	почнаха	почна-(се)	VERB	Vpptf-o3p	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	_	_
7	да	да	AUX	Tx	_	8	aux	_	_
8	гаснат	гасна	VERB	Vpiif-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	ccomp	_	_
9	лампите	лампа	NOUN	Ncfpd	Definite=Def|Gender=Fem|Number=Plur	8	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	2	punct	_	_

~~~


