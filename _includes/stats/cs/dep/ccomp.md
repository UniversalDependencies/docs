

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

10997 nodes (1%) are attached to their parents as `ccomp`.

8827 instances of `ccomp` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.73992907156497.

The following 29 pairs of parts of speech are connected with `ccomp`: [cs-pos/VERB]()-[cs-pos/VERB]() (9116; 83% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (929; 8% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (626; 6% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (89; 1% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (88; 1% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (31; 0% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (24; 0% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (21; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (19; 0% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (9; 0% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (7; 0% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (7; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (6; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (4; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (3; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (3; 0% instances), [cs-pos/PROPN]()-[cs-pos/VERB]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/PART]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/ADJ]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/CONJ]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/INTJ]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/PUNCT]()-[cs-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp	color:blue
1	Na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	2	case	_	LId=na-1
2	požádání	požádání	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	5	nmod	_	LDeriv=požádat
3	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
4	být	být	AUX	Vf--------A----	Negative=Pos|VerbForm=Inf	5	auxpass	_	_
5	zaslán	zaslat	VERB	VsYS---XX-AP---	Gender=Masc|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	3	ccomp	_	_
6	seznam	seznam	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	3	nsubj	_	_
7	firem	firma	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	6	nmod	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 ccomp	color:blue
1	A	a	CONJ	J^-------------	_	2	cc	_	LId=a-1
2	řekněme	říci	VERB	Vi-P---1--A----	Aspect=Perf|Mood=Imp|Negative=Pos|Number=Plur|Person=1|VerbForm=Fin	0	root	_	_
3	rovnou	rovnou	ADV	Db-------------	_	2	advmod	_	SpaceAfter=No|LGloss=(hned,_najednou)
4	,	,	PUNCT	Z:-------------	_	10	punct	_	_
5	že	že	SCONJ	J,-------------	_	10	mark	_	_
6	chalupa	chalupa	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	10	nsubj	_	_
7	našeho	můj	DET	PSZS2-P1-------	Case=Gen|Gender=Masc,Neut|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	8	det	_	LGloss=(přivlast.)
8	čtenáře	čtenář	NOUN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	6	nmod	_	_
9	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
10	problémová	problémový	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	2	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 ccomp	color:blue
1	To	ten	PRON	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj	_	_
2	znamená	znamenat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	11	punct	_	_
4	že	že	SCONJ	J,-------------	_	11	mark	_	_
5	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	8	case	_	LId=v-1
6	vztahu	vztah	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	5	mwe	_	_
7	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	5	mwe	_	LId=k-1
8	občanům	občan	NOUN	NNMP3-----A----	Animacy=Anim|Case=Dat|Gender=Masc|Negative=Pos|Number=Plur	11	nmod	_	_
9	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
10	veřejným	veřejný	ADJ	AAMS7----1A----	Animacy=Anim|Case=Ins|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	11	amod	_	_
11	činitelem	činitel	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	2	ccomp	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


