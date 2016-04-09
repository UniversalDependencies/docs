

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

1838 nodes (1%) are attached to their parents as `mark`.

1838 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.2829162132753.

The following 5 pairs of parts of speech are connected with `mark`: [bg-pos/VERB]()-[bg-pos/SCONJ]() (1498; 82% instances), [bg-pos/VERB]()-[bg-pos/ADP]() (260; 14% instances), [bg-pos/VERB]()-[bg-pos/ADV]() (73; 4% instances), [bg-pos/VERB]()-[bg-pos/PART]() (4; 0% instances), [bg-pos/VERB]()-[bg-pos/CONJ]() (3; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 mark	color:blue
1	Щом	щом	SCONJ	Cs	_	3	mark	_	_
2	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	3	expl	_	_
3	наям	наям-(се)	VERB	Vpptf-r1s	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	_	_
4	,	,	PUNCT	punct	_	3	punct	_	_
5	ставам	ставам	VERB	Vpiif-r1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	.	.	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 mark	color:blue
1	Успокоява	успокоявам-(се)	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	ме	аз	PRON	Ppetas1	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	dobj	_	_
3	,	,	PUNCT	punct	_	6	punct	_	_
4	за	за	ADP	R	_	6	mark	_	_
5	да	да	PART	Tx	_	4	mwe	_	_
6	може	мога	VERB	Vpiif-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl	_	_
7	Манол	манол	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	10	nsubj	_	_
8	да	да	PART	Tx	_	10	aux	_	_
9	си	си	PRON	Ppxts	Case=Dat|Poss=Yes|PronType=Prs|Reflex=Yes	10	expl	_	_
10	разиграва	разигравам-(се)	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	ccomp	_	_
11	коня	кон	NOUN	Ncmsh	Definite=Def|Gender=Masc|Number=Sing	10	dobj	_	_
12	.	.	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 mark	color:blue
1	Няма	нямам	VERB	Vnitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	пострадали	пострадам	ADJ	Vppicao-p-i	Aspect=Perf|Definite=Ind|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	1	dobj	_	_
3	,	,	PUNCT	punct	_	7	punct	_	_
4	тъй	така	ADV	Pdm	PronType=Dem	7	mark	_	_
5	като	като	SCONJ	Cs	_	4	mwe	_	_
6	шофьорът	шофьор	NOUN	Ncmsf	Definite=Def|Gender=Masc|Number=Sing	7	nsubj	_	_
7	бил	съм	VERB	Vxitcat-smi	Aspect=Imp|Definite=Ind|Gender=Masc|Mood=Ind|Number=Sing|VerbForm=Part|Voice=Act	1	advcl	_	_
8	в	в	ADP	R	_	10	case	_	_
9	близкото	близък	ADJ	Ansd	Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	10	amod	_	_
10	кафене	кафене	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	7	cop	_	_
11	.	.	PUNCT	punct	_	1	punct	_	_

~~~


