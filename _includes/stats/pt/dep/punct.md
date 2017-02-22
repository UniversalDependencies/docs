

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

28687 nodes (13%) are attached to their parents as `punct`.

19421 instances of `punct` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.25467982012758.

The following 21 pairs of parts of speech are connected with `punct`: [pt-pos/VERB]()-[pt-pos/PUNCT]() (13803; 48% instances), [pt-pos/NOUN]()-[pt-pos/PUNCT]() (7238; 25% instances), [pt-pos/PROPN]()-[pt-pos/PUNCT]() (3513; 12% instances), [pt-pos/ADJ]()-[pt-pos/PUNCT]() (1829; 6% instances), [pt-pos/ADV]()-[pt-pos/PUNCT]() (841; 3% instances), [pt-pos/NUM]()-[pt-pos/PUNCT]() (464; 2% instances), [pt-pos/PRON]()-[pt-pos/PUNCT]() (398; 1% instances), [pt-pos/DET]()-[pt-pos/PUNCT]() (141; 0% instances), [pt-pos/SYM]()-[pt-pos/PUNCT]() (126; 0% instances), [pt-pos/X]()-[pt-pos/PUNCT]() (99; 0% instances), [pt-pos/CCONJ]()-[pt-pos/PUNCT]() (90; 0% instances), [pt-pos/ADP]()-[pt-pos/PUNCT]() (57; 0% instances), [pt-pos/INTJ]()-[pt-pos/PUNCT]() (35; 0% instances), [pt-pos/SCONJ]()-[pt-pos/PUNCT]() (35; 0% instances), [pt-pos/AUX]()-[pt-pos/PUNCT]() (9; 0% instances), [pt-pos/PART]()-[pt-pos/PUNCT]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/CCONJ]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/CCONJ]() (1; 0% instances), [pt-pos/PUNCT]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 punct	color:blue
1	Ela	ela	PRON	PERS|F|3S|NOM|@SUBJ>	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	tem	ter	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	também	também	ADV	ADV|@<ADVL	_	2	advmod	_	_
4	textos	texto	NOUN	<np-idf>|N|M|P|@<ACC	Gender=Masc|Number=Plur	2	obj	_	_
5	com	com	ADP	PRP|@N<	_	6	case	_	_
6	explicações	explicação	NOUN	<np-idf>|N|F|P|@P<	Gender=Fem|Number=Plur	4	nmod	_	_
7	sobre	sobre	ADP	PRP|@N<	_	9	case	_	_
8	cada	cada	DET	<quant>|DET|M|S|@>N	Gender=Masc|Number=Sing|PronType=Tot	9	det	_	_
9	item	item	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	6	nmod	_	_
10	pesquisado	pesquisar	VERB	<mv>|V|PCP|M|S|@ICL-N<	Gender=Masc|Number=Sing|VerbForm=Part	9	acl	_	SpaceAfter=No
11	.	.	PUNCT	PU|@PU	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 punct	color:blue
1	Um	um	NUM	<card>|NUM|M|S|@SUBJ>	NumType=Card	6	nsubj	_	_
2	de	de	ADP	<sam->|PRP|@N<	_	3	case	_	_
3	eles	eles	PRON	<-sam>|PERS|M|3P|NOM/PIV|@P<	Gender=Masc|Number=Plur|Person=3|PronType=Prs	1	nmod	_	_
4	era	ser	AUX	<mv>|V|IMPF|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
5	seu	seu	DET	<poss>|DET|M|S|@>N	Gender=Masc|Number=Sing|PronType=Prs	6	det	_	_
6	filho	filho	NOUN	<np-def>|N|M|S|@<SC	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	,	,	PUNCT	PU|@PU	_	8	punct	_	_
8	Sérgio	Sérgio	PROPN	_	Gender=Masc|Number=Sing	6	appos	_	MWE=Sérgio_Fioravanti|MWEPOS=PROPN
9	Fioravanti	Fioravanti	PROPN	_	Number=Sing	8	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	PU|@PU	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 punct	color:blue
1	Um	um	NUM	<card>|NUM|M|S|@SUBJ>	NumType=Card	6	nsubj	_	_
2	de	de	ADP	<sam->|PRP|@N<	_	3	case	_	_
3	eles	eles	PRON	<-sam>|PERS|M|3P|NOM/PIV|@P<	Gender=Masc|Number=Plur|Person=3|PronType=Prs	1	nmod	_	_
4	era	ser	AUX	<mv>|V|IMPF|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
5	seu	seu	DET	<poss>|DET|M|S|@>N	Gender=Masc|Number=Sing|PronType=Prs	6	det	_	_
6	filho	filho	NOUN	<np-def>|N|M|S|@<SC	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	,	,	PUNCT	PU|@PU	_	8	punct	_	_
8	Sérgio	Sérgio	PROPN	_	Gender=Masc|Number=Sing	6	appos	_	MWE=Sérgio_Fioravanti|MWEPOS=PROPN
9	Fioravanti	Fioravanti	PROPN	_	Number=Sing	8	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	PU|@PU	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

37911 nodes (13%) are attached to their parents as `punct`.

21890 instances of `punct` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.20068054126771.

The following 14 pairs of parts of speech are connected with `punct`: [pt-pos/VERB]()-[pt-pos/PUNCT]() (17049; 45% instances), [pt-pos/NOUN]()-[pt-pos/PUNCT]() (9392; 25% instances), [pt-pos/PROPN]()-[pt-pos/PUNCT]() (6955; 18% instances), [pt-pos/NUM]()-[pt-pos/PUNCT]() (1493; 4% instances), [pt-pos/ADV]()-[pt-pos/PUNCT]() (1127; 3% instances), [pt-pos/ADJ]()-[pt-pos/PUNCT]() (749; 2% instances), [pt-pos/PRON]()-[pt-pos/PUNCT]() (604; 2% instances), [pt-pos/PART]()-[pt-pos/PUNCT]() (341; 1% instances), [pt-pos/X]()-[pt-pos/PUNCT]() (100; 0% instances), [pt-pos/ADP]()-[pt-pos/PUNCT]() (42; 0% instances), [pt-pos/CCONJ]()-[pt-pos/PUNCT]() (39; 0% instances), [pt-pos/AUX]()-[pt-pos/PUNCT]() (10; 0% instances), [pt-pos/PUNCT]()-[pt-pos/PUNCT]() (6; 0% instances), [pt-pos/DET]()-[pt-pos/PUNCT]() (4; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 12 punct	color:blue
1	Ver	_	VERB	VERB	_	0	root	_	_
2	também	_	ADV	ADV	_	1	advmod	_	_
3	a	_	DET	DET	_	4	det	_	_
4	lista	_	NOUN	NOUN	_	1	obj	_	_
5	de	_	ADP	ADP	_	6	case	_	_
6	entidades	_	NOUN	NOUN	_	4	nmod	_	_
7	que	_	PRON	PRON	_	9	nsubj	_	_
8	tenham	_	AUX	AUX	_	9	aux	_	_
9	emitido	_	VERB	VERB	_	6	acl:relcl	_	_
10	selos	_	NOUN	NOUN	_	9	obj	_	_
11	postais	_	ADJ	ADJ	_	10	amod	_	SpaceAfter=No
12	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 punct	color:blue
1	A	_	DET	DET	_	2	det	_	_
2	Nina	_	PROPN	PNOUN	_	5	nsubj	_	_
3	é	_	VERB	VERB	_	5	cop	_	_
4	a	_	DET	DET	_	5	det	_	_
5	chance	_	NOUN	NOUN	_	0	root	_	_
6	de	_	ADP	ADP	_	8	mark	_	_
7	ele	_	PRON	PRON	_	8	nsubj	_	_
8	ser	_	VERB	VERB	_	5	nmod	_	_
9	feliz	_	ADJ	ADJ	_	8	xcomp:adj	_	SpaceAfter=No
10	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 punct	color:blue
1	Com	_	ADP	ADP	_	3	case	_	_
2	menor	_	ADJ	ADJ	_	3	amod	_	_
3	índice	_	NOUN	NOUN	_	5	nmod	_	SpaceAfter=No
4	,	_	PUNCT	.	_	3	punct	_	_
5	Piauí	_	PROPN	PNOUN	_	0	root	_	SpaceAfter=No
6	,	_	PUNCT	.	_	7	punct	_	_
7	Santa	_	PROPN	PNOUN	_	5	conj	_	_
8	Catarina	_	PROPN	PNOUN	_	7	flat	_	_
9	e	_	CCONJ	CONJ	_	10	cc	_	_
10	Alagoas	_	PROPN	PNOUN	_	5	conj	_	SpaceAfter=No
11	.	_	PUNCT	.	_	5	punct	_	_

~~~


