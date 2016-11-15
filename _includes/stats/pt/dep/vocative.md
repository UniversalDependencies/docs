

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-Bosque)

This relation is universal.

31 nodes (0%) are attached to their parents as `vocative`.

24 instances of `vocative` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.29032258064516.

The following 6 pairs of parts of speech are connected with `vocative`: [pt-pos/VERB]()-[pt-pos/PRON]() (18; 58% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (7; 23% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (2; 6% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (2; 6% instances), [pt-pos/INTJ]()-[pt-pos/NOUN]() (1; 3% instances), [pt-pos/INTJ]()-[pt-pos/PROPN]() (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 vocative	color:blue
1	Pense-	pensar	VERB	<mv>|V|PR|3S|SUBJ|@FS-STA	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	se	se	PRON	PERS|M/F|3S/P|ACC|@VOC	Case=Acc|Gender=Unsp|PronType=Prs	1	vocative	_	_
3	em	em	ADP	PRP|@<PIV	_	4	case	_	_
4	Kingsley	Kingsley	PROPN	<first-cjt>|PROP|M/F|S|@P<	Gender=Unsp|Number=Sing	1	nmod	_	MWE:Kingsley=Amis
5	Amis	Amis	PROPN	PROP|@N<	Number=Sing	4	name	_	_
6	,	,	PUNCT	PU|@PU	_	1	punct	_	_
7	Malcolm	Malcolm	PROPN	PROP|M|S|@P<	Gender=Masc|Number=Sing	4	nmod	_	MWE:Malcolm=Bradbury
8	Bradbury	Bradbury	PROPN	PROP|@N<	Number=Sing	7	name	_	_
9	e	e	CONJ	<co-prparg>|KC|@CO	_	4	cc	_	_
10	Albert	Albert	PROPN	PROP|M|S|@P<	Gender=Masc|Number=Sing	4	nmod	_	MWE:Albert=Finney
11	Finney	Finney	PROPN	PROP|@N<	Number=Sing	10	name	_	_
12	.	.	PUNCT	PU|@PU	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 vocative	color:blue
1	Eu	eu	PRON	PERS|M|1S|NOM|@SUBJ>	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	precisava	precisar	VERB	<mv>|V|IMPF|1S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	_
3	de	de	ADP	PRP|@<PIV	_	5	case	_	_
4	uma	um	DET	<arti>|ART|F|S|@>N	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	ajuda	ajuda	NOUN	<np-idf>|N|F|S|@P<	Gender=Fem|Number=Sing	2	nmod	_	_
6	de	de	ADP	<sam->|PRP|@N<	_	8	case	_	_
7	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	senhor	senhor	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	5	nmod	_	_
9	,	,	PUNCT	PU|@PU	_	2	punct	_	_
10	deputado	deputado	NOUN	<np-idf>|N|M|S|@VOK	Gender=Masc|Number=Sing	2	vocative	_	_
11	...	...	PUNCT	PU|@PU	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 vocative	color:blue
1	Alec	Alec	PROPN	PROP|F|S|@VOK	Gender=Fem|Number=Sing	3	vocative	_	_
2	Eu	eu	PRON	PERS|M|1S|NOM|@SUBJ>	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	quero	querer	VERB	<mv>|V|PR|1S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	viver	viver	VERB	<mv>|V|INF|@ICL-<ACC	VerbForm=Inf	3	xcomp	_	_
5	,	,	PUNCT	PU|@PU	_	4	punct	_	_
6	eu	eu	PRON	PERS|M|1S|NOM|@SUBJ>	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
7	quero	querer	VERB	<mv>|V|PR|1S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
8	não	não	ADV	ADV|@ADVL>	_	9	neg	_	_
9	fazer	fazer	VERB	<mv>|V|INF|@ICL-<ACC	VerbForm=Inf	7	xcomp	_	_
10	nada	nada	PRON	<quant>|INDP|M|S|@<ACC	Gender=Masc|Number=Sing|PronType=Ind	9	dobj	_	_
11	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


