

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

5744 nodes (4%) are attached to their parents as `aux`.

5642 instances of `aux` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37325905292479.

The following 16 pairs of parts of speech are connected with `aux`: [bg-pos/VERB]()-[bg-pos/PART]() (4043; 70% instances), [bg-pos/VERB]()-[bg-pos/AUX]() (1527; 27% instances), [bg-pos/NOUN]()-[bg-pos/PART]() (55; 1% instances), [bg-pos/ADJ]()-[bg-pos/PART]() (41; 1% instances), [bg-pos/NOUN]()-[bg-pos/AUX]() (27; 0% instances), [bg-pos/ADJ]()-[bg-pos/AUX]() (10; 0% instances), [bg-pos/ADV]()-[bg-pos/PART]() (10; 0% instances), [bg-pos/ADV]()-[bg-pos/AUX]() (9; 0% instances), [bg-pos/PRON]()-[bg-pos/PART]() (8; 0% instances), [bg-pos/PROPN]()-[bg-pos/PART]() (5; 0% instances), [bg-pos/VERB]()-[bg-pos/INTJ]() (3; 0% instances), [bg-pos/NOUN]()-[bg-pos/INTJ]() (2; 0% instances), [bg-pos/ADJ]()-[bg-pos/INTJ]() (1; 0% instances), [bg-pos/NOUN]()-[bg-pos/VERB]() (1; 0% instances), [bg-pos/PRON]()-[bg-pos/AUX]() (1; 0% instances), [bg-pos/PROPN]()-[bg-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	На	на	ADP	R	_	2	case	_	_
2	заека	заек	NOUN	Ncmsh	Definite=Def|Gender=Masc|Number=Sing	4	iobj	_	_
3	му	аз	PRON	Ppetds3m	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
4	омръзна	омръзне-ми	VERB	Vnpif-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	да	да	PART	Tx	_	6	aux	_	_
6	студува	студувам	VERB	Vpiif-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	csubj	_	_
7	.	.	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	При	при	ADP	R	_	2	case	_	_
2	стареца	старец	NOUN	Ncmsh	Definite=Def|Gender=Masc|Number=Sing	4	iobj	_	_
3	бе	съм	AUX	Vxitf-t3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	_	_
4	останала	остана	VERB	Vppicao-sfi	Aspect=Perf|Definite=Ind|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	Христина	христина	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	4	nsubj	_	_
6	,	,	PUNCT	punct	_	9	punct	_	_
7	хубавата	хубав	ADJ	Afsd	Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
8	му	мой	PRON	Psot--3--m	Person=3|Poss=Yes|PronType=Prs	7	det	_	_
9	внучка	внучка	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	5	nmod	_	_
10	.	.	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux	color:blue
1	Наше	наш	DET	Pszl-s1ni	Definite=Ind|Gender=Neut|Number=Sing|Person=1|Poss=Yes|PronType=Prs	2	det	_	_
2	предимство	предимство	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
3	ще	ще	PART	Tx	_	2	aux	_	_
4	е	съм	VERB	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
5	,	,	PUNCT	punct	_	8	punct	_	_
6	че	че	SCONJ	Cs	_	8	mark	_	_
7	ще	ще	PART	Tx	_	8	aux	_	_
8	почнем	почна-(се)	VERB	Vpptf-r1p	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj	_	_
9	отначало	отначало	ADV	Dt	_	8	advmod	_	_
10	.	.	PUNCT	punct	_	2	punct	_	_

~~~


