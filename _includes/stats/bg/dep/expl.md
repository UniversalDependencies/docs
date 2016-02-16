

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

3505 nodes (2%) are attached to their parents as `expl`.

3027 instances of `expl` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04650499286733.

The following 7 pairs of parts of speech are connected with `expl`: [bg-pos/VERB]()-[bg-pos/PRON]() (3437; 98% instances), [bg-pos/ADJ]()-[bg-pos/PRON]() (57; 2% instances), [bg-pos/ADV]()-[bg-pos/PRON]() (6; 0% instances), [bg-pos/NOUN]()-[bg-pos/PRON]() (2; 0% instances), [bg-pos/DET]()-[bg-pos/PRON]() (1; 0% instances), [bg-pos/PART]()-[bg-pos/PRON]() (1; 0% instances), [bg-pos/PRON]()-[bg-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl	color:blue
1	Щом	щом	SCONJ	Cs	_	3	mark	_	_
2	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	3	expl	_	_
3	наям	наям-(се)	VERB	Vpptf-r1s	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	_	_
4	,	,	PUNCT	punct	_	3	punct	_	_
5	ставам	ставам	VERB	Vpiif-r1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	.	.	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 expl	color:blue
1	Той	аз	PRON	Ppe-os3m	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	гледаше	гледам	VERB	Vpitf-m3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
3	към	към	ADP	R	_	8	case	_	_
4	бясно	бясно	ADV	Dm	Degree=Pos	5	advmod	_	_
5	въртящия	въртя-(се)	ADJ	Vpitcar-smh	Aspect=Imp|Definite=Def|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	8	amod	_	_
6	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	5	expl	_	_
7	цифров	цифров	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
8	брояч	брояч	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	2	iobj	_	_
9	на	на	ADP	R	_	10	case	_	_
10	годините	година	NOUN	Ncfpd	Definite=Def|Gender=Fem|Number=Plur	8	nmod	_	_
11	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl	color:blue
1	Увеличавайки	увеличавам-(се)	ADV	Vpitg	_	5	advmod	_	_
2	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	1	expl	_	_
3	,	,	PUNCT	punct	_	1	punct	_	_
4	количеството	количество	NOUN	Ncnsd	Definite=Def|Gender=Neut|Number=Sing	5	nsubj	_	_
5	става	ставам	VERB	Vpiif-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	по-голямо	голям	ADJ	Ansi	Definite=Ind|Degree=Cmp|Gender=Neut|Number=Sing	7	amod	_	_
7	количество	количество	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	5	dobj	_	_
8	.	.	PUNCT	punct	_	5	punct	_	_

~~~


