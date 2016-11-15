

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

22075 nodes (14%) are attached to their parents as `punct`.

15350 instances of `punct` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.11379388448471.

The following 14 pairs of parts of speech are connected with `punct`: [bg-pos/VERB]()-[bg-pos/PUNCT]() (13611; 62% instances), [bg-pos/NOUN]()-[bg-pos/PUNCT]() (3452; 16% instances), [bg-pos/PROPN]()-[bg-pos/PUNCT]() (2365; 11% instances), [bg-pos/ADJ]()-[bg-pos/PUNCT]() (1234; 6% instances), [bg-pos/CONJ]()-[bg-pos/PUNCT]() (580; 3% instances), [bg-pos/ADV]()-[bg-pos/PUNCT]() (468; 2% instances), [bg-pos/PRON]()-[bg-pos/PUNCT]() (110; 0% instances), [bg-pos/INTJ]()-[bg-pos/PUNCT]() (105; 0% instances), [bg-pos/PART]()-[bg-pos/PUNCT]() (70; 0% instances), [bg-pos/NUM]()-[bg-pos/PUNCT]() (48; 0% instances), [bg-pos/DET]()-[bg-pos/PUNCT]() (24; 0% instances), [bg-pos/SCONJ]()-[bg-pos/PUNCT]() (4; 0% instances), [bg-pos/X]()-[bg-pos/PUNCT]() (3; 0% instances), [bg-pos/ADP]()-[bg-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 punct	color:blue
1	Щом	щом	SCONJ	Cs	_	3	mark	_	_
2	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	3	expl	_	_
3	наям	наям-(се)	VERB	Vpptf-r1s	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	_	_
4	,	,	PUNCT	punct	_	3	punct	_	_
5	ставам	ставам	VERB	Vpiif-r1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	.	.	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 punct	color:blue
1	Страх	страх	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
2	ли	ли	PART	Ti	_	1	discourse	_	_
3	те	аз	PRON	Ppetas2	Case=Acc|Number=Sing|Person=2|PronType=Prs	1	dobj	_	_
4	е	съм	VERB	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
5	?	?	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 punct	color:blue
1	Отговор	отговор	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
2	на	на	ADP	R	_	3	case	_	_
3	Габриел	габриел	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	1	nmod	_	_
4	Марсел	марсел	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	3	nmod	_	_
5	,	,	PUNCT	punct	_	7	punct	_	_
6	"	"	PUNCT	punct	_	7	punct	_	_
7	Комба	комба	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	1	nmod	_	_
8	"	"	PUNCT	punct	_	7	punct	_	_
9	,	,	PUNCT	punct	_	10	punct	_	_
10	декември	декември	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	7	nmod	_	_
11	1948	1948	ADJ	Mofsi	Definite=Ind|Gender=Fem|Number=Sing|NumType=Ord	12	amod	_	_
12	г.	година	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	10	nmod	_	_
13	.	.	PUNCT	punct	_	1	punct	_	_

~~~


