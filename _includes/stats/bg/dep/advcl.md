

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

1516 nodes (1%) are attached to their parents as `advcl`.

999 instances of `advcl` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.35224274406332.

The following 3 pairs of parts of speech are connected with `advcl`: [bg-pos/VERB]()-[bg-pos/VERB]() (1509; 100% instances), [bg-pos/VERB]()-[bg-pos/PART]() (6; 0% instances), [bg-pos/VERB]()-[bg-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advcl	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 advcl	color:blue
1	Нека	нека	PART	Tv	_	7	advcl	_	_
2	не	не	INTJ	Tn	_	3	neg	_	_
3	започваме	започвам-(се)	VERB	Vpitf-r1p	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	_
4	отново	отново	ADV	Dt	_	3	advmod	_	_
5	-	-	PUNCT	punct	_	1	punct	_	_
6	вие	аз	PRON	Ppe-op2	Case=Nom|Number=Plur|Person=2|PronType=Prs	7	nsubj	_	_
7	сте	съм	VERB	Vxitf-r2p	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	публични	публичен	ADJ	A-pi	Definite=Ind|Degree=Pos|Number=Plur	9	amod	_	_
9	личности	личност	NOUN	Ncfpi	Definite=Ind|Gender=Fem|Number=Plur	7	cop	_	_
10	.	.	PUNCT	punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advcl	color:blue
1	И	и	CONJ	Cp	_	3	cc	_	_
2	заради	заради	ADP	R	_	3	case	_	_
3	нея	аз	PRON	Ppelas3f	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	advcl	_	_
4	ние	аз	PRON	Ppe-op1	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
5	трябва	трябва	VERB	Vniif-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	...	...	PUNCT	punct	_	5	punct	_	_

~~~


