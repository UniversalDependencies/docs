

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

2 nodes (0%) are attached to their parents as `parataxis`.

2 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 2 pairs of parts of speech are connected with `parataxis`: [bg-pos/ADJ]()-[bg-pos/VERB]() (1; 50% instances), [bg-pos/NOUN]()-[bg-pos/VERB]() (1; 50% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 parataxis	color:blue
1	Този	този	DET	Pde-os-m	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	гражданин	гражданин	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	20	nsubj	_	_
3	на	на	ADP	R	_	4	case	_	_
4	планетата	планета	NOUN	Ncfsd	Definite=Def|Gender=Fem|Number=Sing	2	nmod	_	_
5	Земя	земя	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	4	nmod	_	_
6	-	-	PUNCT	punct	_	7	punct	_	_
7	огледайте	огледам-(се)	VERB	Vpptz--2p	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	2	parataxis	_	_
8	го	аз	PRON	Ppetas3m	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	dobj	_	_
9	добре	добре	ADV	Dm	Degree=Pos	7	advmod	_	_
10	и	и	CONJ	Cp	_	7	cc	_	_
11	го	аз	PRON	Ppetas3m	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	dobj	_	_
12	запомнете	запомня	VERB	Vpptz--2p	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	7	conj	_	_
13	,	,	PUNCT	punct	_	7	punct	_	_
14	-	-	PUNCT	punct	_	7	punct	_	_
15	този	този	DET	Pde-os-m	Gender=Masc|Number=Sing|PronType=Dem	16	det	_	_
16	гражданин	гражданин	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	2	nmod	_	_
17	на	на	ADP	R	_	18	case	_	_
18	планетата	планета	NOUN	Ncfsd	Definite=Def|Gender=Fem|Number=Sing	16	nmod	_	_
19	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	20	aux	_	_
20	решил	реша	VERB	Vpptcao-smi	Aspect=Perf|Definite=Ind|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
21	да	да	PART	Tx	_	23	aux	_	_
22	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	23	expl	_	_
23	самоубие	самоубия-се	VERB	Vppif-r3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	20	ccomp	_	_
24	.	.	PUNCT	punct	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 parataxis	color:blue
1	Не	не	INTJ	Tn	_	7	discourse	_	_
2	,	,	PUNCT	punct	_	1	punct	_	_
3	моята	мой	DET	Psol-s1fd	Definite=Def|Gender=Fem|Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	det	_	_
4	хитрост	хитрост	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	7	nsubj	_	_
5	е	съм	VERB	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
6	още	още	ADV	Dq	_	7	advmod	_	_
7	по-голяма	голям	ADJ	Afsi	Definite=Ind|Degree=Cmp|Gender=Fem|Number=Sing	0	root	_	_
8	:	:	PUNCT	punct	_	10	punct	_	_
9	аз	аз	PRON	Ppe-os1	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
10	пиша	пиша	VERB	Vpitf-r1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	_
11	само	само	ADV	Dd	_	12	advmod	_	_
12	добрите	добър	ADJ	A-pd	Definite=Def|Degree=Pos|Number=Plur	10	dobj	_	_
13	.	.	PUNCT	punct	_	7	punct	_	_

~~~


