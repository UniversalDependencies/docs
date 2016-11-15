

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

1422 nodes (1%) are attached to their parents as `neg`.

1418 instances of `neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.58579465541491.

The following 15 pairs of parts of speech are connected with `neg`: [bg-pos/VERB]()-[bg-pos/INTJ]() (1175; 83% instances), [bg-pos/NOUN]()-[bg-pos/INTJ]() (75; 5% instances), [bg-pos/ADJ]()-[bg-pos/INTJ]() (66; 5% instances), [bg-pos/ADV]()-[bg-pos/INTJ]() (62; 4% instances), [bg-pos/NUM]()-[bg-pos/PART]() (10; 1% instances), [bg-pos/NOUN]()-[bg-pos/PART]() (9; 1% instances), [bg-pos/PRON]()-[bg-pos/INTJ]() (9; 1% instances), [bg-pos/DET]()-[bg-pos/PART]() (6; 0% instances), [bg-pos/DET]()-[bg-pos/INTJ]() (2; 0% instances), [bg-pos/NUM]()-[bg-pos/INTJ]() (2; 0% instances), [bg-pos/PROPN]()-[bg-pos/INTJ]() (2; 0% instances), [bg-pos/ADP]()-[bg-pos/INTJ]() (1; 0% instances), [bg-pos/ADV]()-[bg-pos/PART]() (1; 0% instances), [bg-pos/SCONJ]()-[bg-pos/INTJ]() (1; 0% instances), [bg-pos/VERB]()-[bg-pos/PART]() (1; 0% instances).


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
12	свършило	свърша-(се)	VERB	Vpptcao-sni	Aspect=Perf|Definite=Ind|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	7	ccomp	_	_
13	.	.	PUNCT	punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 neg	color:blue
1	Това	този	PRON	Pde-os-n	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	nsubj	_	_
2	не	не	INTJ	Tn	_	5	neg	_	_
3	е	съм	VERB	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	ли	ли	PART	Ti	_	5	discourse	_	_
5	оценка	оценка	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	0	root	_	_
6	за	за	ADP	R	_	8	case	_	_
7	българската	български	ADJ	Afsd	Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
8	администрация	администрация	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	5	nmod	_	_
9	?	?	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 neg	color:blue
1	Макар	макар	ADP	R	_	8	case	_	_
2	че	че	SCONJ	Cs	_	8	mark	_	_
3	нашият	наш	DET	Pszl-s1mf	Definite=Def|Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	det	_	_
4	парламент	парламент	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	8	nsubj	_	_
5	не	не	INTJ	Tn	_	8	neg	_	_
6	е	съм	VERB	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
7	много	много	ADV	Md-pi	Definite=Ind|Number=Plur|NumType=Card	8	advmod	_	_
8	обективен	обективен	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
9	.	.	PUNCT	punct	_	8	punct	_	_

~~~


