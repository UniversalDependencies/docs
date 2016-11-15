

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician-TreeGal)

This relation is universal.

39 nodes (0%) are attached to their parents as `mwe`.

37 instances of `mwe` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17948717948718.

The following 13 pairs of parts of speech are connected with `mwe`: [gl-pos/VERB]()-[gl-pos/ADP]() (10; 26% instances), [gl-pos/VERB]()-[gl-pos/NOUN]() (8; 21% instances), [gl-pos/ADP]()-[gl-pos/NOUN]() (6; 15% instances), [gl-pos/ADV]()-[gl-pos/ADP]() (5; 13% instances), [gl-pos/ADV]()-[gl-pos/PRON]() (2; 5% instances), [gl-pos/ADP]()-[gl-pos/PRON]() (1; 3% instances), [gl-pos/ADV]()-[gl-pos/ADV]() (1; 3% instances), [gl-pos/ADV]()-[gl-pos/SCONJ]() (1; 3% instances), [gl-pos/NOUN]()-[gl-pos/ADP]() (1; 3% instances), [gl-pos/PRON]()-[gl-pos/ADP]() (1; 3% instances), [gl-pos/VERB]()-[gl-pos/ADJ]() (1; 3% instances), [gl-pos/VERB]()-[gl-pos/ADV]() (1; 3% instances), [gl-pos/VERB]()-[gl-pos/PRON]() (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 mwe	color:blue
1	João_Pedro_Stedile	João_Pedro_Stedile	PROPN	Spm0	Gender=Masc	2	nsubj	_	_
2	dá	dar	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	conta	conta	NOUN	Scfs	Gender=Fem|Number=Sing	2	mwe	_	_
4	de	de	ADP	P	AdpType=Prep	2	mwe	_	_
5	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	relación	relación	NOUN	Scfs	Gender=Fem|Number=Sing	2	nmod	_	_
7	entre	entre	ADP	P	AdpType=Prep	9	case	_	_
8	os	o	DET	Ddmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	gobernos	goberno	NOUN	Scmp	Gender=Masc|Number=Plur	6	nmod	_	_
10	brasileiros	brasileiro	ADJ	A0mp	Gender=Masc|Number=Plur	9	amod	_	_
11	e	e	CONJ	Cc	_	9	cc	_	_
12	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	terra	terra	NOUN	Scfs	Gender=Fem|Number=Sing	9	conj	_	_
14	.	.	PUNCT	Q.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 mwe	color:blue
1	de	de	ADP	P	AdpType=Prep	2	case	_	_
2	aí	aí	ADV	Wn	_	5	advmod	_	_
3	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
4	súa	seu	DET	Md3sfs	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes	5	det	_	_
5	chamada	chamada	NOUN	Scfs	Gender=Fem|Number=Sing	0	root	_	_
6	de	de	ADP	P	AdpType=Prep	7	case	_	_
7	atención	atención	NOUN	Scfs	Gender=Fem|Number=Sing	5	nmod	_	_
8	en	en	ADP	P	AdpType=Prep	10	case	_	_
9	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	prensa	prensa	NOUN	Scfs	Gender=Fem|Number=Sing	5	nmod	_	_
11	,	,	PUNCT	Q,	_	5	punct	_	_
12	de	de	ADP	P	AdpType=Prep	14	case	_	_
13	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	que	que	PRON	Tnfs	Gender=Fem|Number=Sing|PronType=Rel	16	nmod	_	_
15	rapidamente	rapidamente	ADV	Wn	_	16	advmod	_	_
16	tomou	tomar	VERB	Vei30s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	ccomp	_	_
17	nota	nota	NOUN	Scfs	Gender=Fem|Number=Sing	16	mwe	_	_
18	López_Peña	López_Peña	PROPN	Sp00	_	16	nsubj	_	_
19	.	.	PUNCT	Q.	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 mwe	color:blue
1	ademais	ademais	ADV	Wn	_	7	advmod	_	_
2	,	,	PUNCT	Q,	_	5	punct	_	_
3	cando	cando	ADV	Wr	PronType=Rel	5	advmod	_	_
4	se	se	PRON	Rao3aa	Gender=Com|Number=Dual|Person=3|PronType=Clit	5	expl	_	_
5	privatizou	privatizar	VERB	Vei30s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	advcl	_	_
6	ENCE	ENCE	PROPN	Zg00	_	5	dobj	_	_
7	pagou	pagar	VERB	Vei30s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	se	se	PRON	Rao3aa	Gender=Com|Number=Dual|Person=3|PronType=Clit	7	expl	_	_
9	un	un	DET	Dims	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	prezo	prezo	NOUN	Scms	Gender=Masc|Number=Sing	7	dobj	_	_
11	que	que	PRON	Tnms	Gender=Masc|Number=Sing|PronType=Rel	12	nsubj	_	_
12	tiña	ter	VERB	Vii30s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	10	acl	_	_
13	en	en	ADP	P	AdpType=Prep	12	mwe	_	_
14	conta	conta	NOUN	Scfs	Gender=Fem|Number=Sing	13	mwe	_	_
15	que	que	SCONJ	Cs	_	18	mark	_	_
16	en	en	ADP	P	AdpType=Prep	17	case	_	_
17	2018	2018	NUM	Ncnms	Gender=Masc|Number=Sing|NumType=Card	18	nmod	_	_
18	remataba	rematar	VERB	Vii30s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	12	ccomp	_	_
19	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	_	_
20	concesión	concesión	NOUN	Scfs	Gender=Fem|Number=Sing	18	nsubj	_	_
21	de	de	ADP	P	AdpType=Prep	23	case	_	_
22	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	23	det	_	_
23	fábrica	fábrica	NOUN	Scfs	Gender=Fem|Number=Sing	20	nmod	_	_
24	.	.	PUNCT	Q.	_	18	punct	_	_

~~~


