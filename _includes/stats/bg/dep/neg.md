

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

1424 nodes (1%) are attached to their parents as `neg`.

1423 instances of `neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41994382022472.

The following 14 pairs of parts of speech are connected with `neg`: [bg-pos/VERB]()-[bg-pos/INTJ]() (1341; 94% instances), [bg-pos/ADV]()-[bg-pos/INTJ]() (31; 2% instances), [bg-pos/NOUN]()-[bg-pos/INTJ]() (15; 1% instances), [bg-pos/NUM]()-[bg-pos/PART]() (10; 1% instances), [bg-pos/NOUN]()-[bg-pos/PART]() (8; 1% instances), [bg-pos/DET]()-[bg-pos/PART]() (6; 0% instances), [bg-pos/PRON]()-[bg-pos/INTJ]() (3; 0% instances), [bg-pos/DET]()-[bg-pos/INTJ]() (2; 0% instances), [bg-pos/NUM]()-[bg-pos/INTJ]() (2; 0% instances), [bg-pos/VERB]()-[bg-pos/PART]() (2; 0% instances), [bg-pos/ADJ]()-[bg-pos/INTJ]() (1; 0% instances), [bg-pos/ADP]()-[bg-pos/INTJ]() (1; 0% instances), [bg-pos/ADV]()-[bg-pos/PART]() (1; 0% instances), [bg-pos/SCONJ]()-[bg-pos/INTJ]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 neg	color:blue
1	Но	но	CONJ	Cc	_	7	cc	_	_
2	ти	аз	PRON	Ppe-os2	Case=Nom|Number=Sing|Person=2|PronType=Prs	7	nsubj	_	_
3	,	,	PUNCT	punct	_	4	punct	_	_
4	малкият	малък	ADJ	Amsf	Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
5	,	,	PUNCT	punct	_	4	punct	_	_
6	не	не	INTJ	Tn	_	7	neg	_	_
7	мисли	мисля	VERB	Vpitz--2s	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
8	,	,	PUNCT	punct	_	12	punct	_	_
9	че	че	SCONJ	Cs	_	12	mark	_	_
10	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	12	expl	_	_
11	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux	_	_
12	свършило	свърша-(се)	VERB	Vpptcao-sni	Aspect=Perf|Definite=Ind|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	7	ccomp	_	_
13	.	.	PUNCT	punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 neg	color:blue
1	В	в	ADP	R	_	6	case	_	_
2	онова	този	DET	Pde-os-n	Gender=Neut|Number=Sing|PronType=Dem	6	det	_	_
3	не	не	INTJ	Tn	_	4	neg	_	_
4	толкова	толкова	ADV	Pdq	NumType=Card|PronType=Dem	5	advmod	_	_
5	далечно	далечен	ADJ	Ansi	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	6	amod	_	_
6	време	време	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	8	nmod	_	_
7	всичко	всеки	PRON	Pce-os-n	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	8	nsubj	_	_
8	свършва	свършвам-(се)	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	дотук	там	ADV	Pdl	PronType=Dem	8	advmod	_	_
10	.	.	PUNCT	punct	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 neg	color:blue
1	Не	не	INTJ	Tn	_	2	neg	_	_
2	студентите	студент	NOUN	Ncmpd	Definite=Def|Gender=Masc|Number=Plur	4	nsubj	_	_
3	ли	ли	PART	Ti	_	2	discourse	_	_
4	искат	искам	VERB	Vpitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	това	този	PRON	Pde-os-n	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	dobj	_	_
6	?	?	PUNCT	punct	_	4	punct	_	_

~~~


