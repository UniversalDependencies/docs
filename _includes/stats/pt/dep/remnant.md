

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-Bosque)

This relation is universal.

28 nodes (0%) are attached to their parents as `remnant`.

28 instances of `remnant` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.28571428571429.

The following 9 pairs of parts of speech are connected with `remnant`: [pt-pos/NOUN]()-[pt-pos/NOUN]() (11; 39% instances), [pt-pos/ADP]()-[pt-pos/NOUN]() (4; 14% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (4; 14% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (3; 11% instances), [pt-pos/ADP]()-[pt-pos/PROPN]() (2; 7% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (1; 4% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (1; 4% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (1; 4% instances), [pt-pos/SYM]()-[pt-pos/SYM]() (1; 4% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 remnant	color:blue
1	De	de	ADP	<sam->|PRP|@ADVL>	_	3	case	_	_
2	os	o	DET	<-sam>|<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	fumantes	fumante	NOUN	<np-def>|N|M|P|@P<	Gender=Masc|Number=Plur	8	nmod	_	_
4	,	,	PUNCT	PU|@PU	_	3	punct	_	_
5	18,1	18,1	NUM	<card>|NUM|M|P|@>N	_	6	nummod	_	_
6	milhões	milhão	NOUN	<np-def>|N|M|P|@SUBJ>	Gender=Masc|Number=Plur	8	nsubj	_	_
7	são	ser	VERB	<first-cjt>|<mv>|V|PR|3P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	homens	homem	NOUN	<np-idf>|N|M|P|@<SC	Gender=Masc|Number=Plur	0	root	_	_
9	e	e	CONJ	<co-fcl>|KC|@CO	_	8	cc	_	_
10	12,5	12,5	NUM	<card>|NUM|M|P|@>N	_	11	nummod	_	_
11	milhões	milhão	NOUN	<np-def>|N|M|P|@SUBJ>	Gender=Masc|Number=Plur	6	remnant	_	_
12	,	,	PUNCT	PU|@PU	_	8	punct	_	_
13	mulheres	mulher	NOUN	<np-idf>|N|F|P|@<SC	Gender=Fem|Number=Plur	8	remnant	_	_
14	.	.	PUNCT	PU|@PU	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 remnant	color:blue
1	George	George	PROPN	PROP|M|S|@SUBJ>	Gender=Masc|Number=Sing	2	nsubj	_	_
2	fazia	fazer	VERB	<first-cjt>|<mv>|V|IMPF|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	música	música	NOUN	<np-def>|N|F|S|@<ACC	Gender=Fem|Number=Sing	2	dobj	_	_
5	,	,	PUNCT	PU|@PU	_	2	punct	_	_
6	Ira	Ira	PROPN	PROP|M|S|@SUBJ>	Gender=Masc|Number=Sing	1	remnant	_	_
7	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	letra	letra	NOUN	<np-def>|N|F|S|@<ACC	Gender=Fem|Number=Sing	4	remnant	_	_
9	,	,	PUNCT	PU|@PU	_	2	punct	_	_
10	embora	embora	SCONJ	KS|@SUB	_	19	mark	_	_
11	,	,	PUNCT	PU|@PU	_	10	punct	_	_
12	como	como	ADP	<com>|PRP|@ADVL>	_	15	case	_	_
13	em	em	ADP	PRP|@P<	_	15	case	_	_
14	toda	todo	DET	<quant>|DET|F|S|@>N	Gender=Fem|Number=Sing	15	det	_	_
15	parceria	parceria	NOUN	<com>|<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	19	nmod	_	_
16	,	,	PUNCT	PU|@PU	_	15	punct	_	_
17	cada	cada	PRON	DET|M/F|S|@SUBJ>	Gender=Unsp|Number=Sing	19	nsubj	_	MWE:cada=qual
18	qual	qual	DET	DET|M/F|S|@A<	Gender=Unsp|Number=Sing	17	mwe	_	_
19	desse	dar	VERB	<mv>|V|IMPF|3S|SUBJ|@FS-<ADVL	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	2	advcl	_	_
20	palpites	palpite	NOUN	<np-idf>|N|M|P|@<ACC	Gender=Masc|Number=Plur	19	dobj	_	_
21	em	em	ADP	<sam->|PRP|@N<	_	23	case	_	_
22	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	23	det	_	_
23	especialidade	especialidade	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	20	nmod	_	_
24	de	de	ADP	<sam->|PRP|@N<	_	26	case	_	_
25	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
26	outro	outro	PRON	<diff>|<KOMP>|<np-def>|DET|M|S|@P<	Gender=Masc|Number=Sing	23	det	_	_
27	.	.	PUNCT	PU|@PU	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 15 remnant	color:blue
1	Covas	Covas	PROPN	PROP|M|S|@NPHR	Gender=Masc|Number=Sing	0	root	_	_
2	--	--	PUNCT	PU|@PU	_	1	punct	_	_
3	Quando	quando	ADV	<rel>|ADV|@ADVL>	_	5	advmod	_	_
4	se	se	PRON	PERS|M/F|3S/P|ACC|@SUBJ>	Case=Acc|Gender=Unsp|PronType=Prs	5	nsubj	_	_
5	falando	falar	VERB	<first-cjt>|<mv>|V|GER|@ICL-UTT	VerbForm=Ger	1	parataxis	_	_
6	em	em	ADP	<first-cjt>|PRP|@<PIV	_	7	case	_	_
7	emprego	emprego	NOUN	<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	5	nmod	_	_
8	,	,	PUNCT	PU|@PU	_	5	punct	_	_
9	não	não	ADV	ADV|@ADVL>	_	11	neg	_	_
10	se	se	PRON	PERS|M/F|3S/P|ACC|@SUBJ>	Case=Acc|Gender=Unsp|PronType=Prs	11	nsubj	_	_
11	tratando	tratar	VERB	<cjt>|<mv>|V|GER|@ICL-UTT	VerbForm=Ger	5	conj	_	_
12	só	só	ADV	ADV|@<ADVL	_	11	advmod	_	_
13	de	de	ADP	PRP|@<PIV	_	15	case	_	_
14	uma	um	DET	<arti>|ART|F|S|@>N	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	questão	questão	NOUN	<np-idf>|N|F|S|@P<	Gender=Fem|Number=Sing	6	remnant	_	_
16	administrativa	administrativo	ADJ	ADJ|F|S|@N<	Gender=Fem|Number=Sing	15	amod	_	_
17	.	.	PUNCT	PU|@PU	_	1	punct	_	_

~~~


