

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

8 nodes (0%) are attached to their parents as `dislocated`.

7 instances of `dislocated` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.375.

The following 4 pairs of parts of speech are connected with `dislocated`: [pt-pos/VERB]()-[pt-pos/NOUN]() (5; 63% instances), [pt-pos/ADV]()-[pt-pos/DET]() (1; 13% instances), [pt-pos/NUM]()-[pt-pos/PRON]() (1; 13% instances), [pt-pos/VERB]()-[pt-pos/DET]() (1; 13% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 dislocated	color:blue
1	Os	o	DET	<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	automobilistas	automobilista	NOUN	<np-def>|N|M|P|@TOP	Gender=Masc|Number=Plur	6	dislocated	_	SpaceAfter=No
3	,	,	PUNCT	PU|@PU	_	2	punct	_	_
4	esses	esse	PRON	<dem>|DET|M|P|@SUBJ>	Gender=Masc|Number=Plur|PronType=Dem	6	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	PU|@PU	_	4	punct	_	_
6	continuam	continuar	VERB	<mv>|V|PR|3P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	a	a	ADP	<sam->|PRP|@<ADVL	_	9	case	_	_
8	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	espera	espera	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	6	obl	_	_
10	...	...	PUNCT	PU|@PU	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 dislocated	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	fado	fado	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	6	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	PU|@PU	_	2	punct	_	_
4	esse	esse	DET	<dem>|<foc>|DET|M|S|@TOP	Gender=Masc|Number=Sing|PronType=Dem	6	dislocated	_	SpaceAfter=No
5	,	,	PUNCT	PU|@PU	_	4	punct	_	_
6	ficou	ficar	VERB	<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
7	aquém	aquém	ADV	ADV|@<SA	_	6	advmod	_	SpaceAfter=No
8	.	.	PUNCT	PU|@PU	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 dislocated	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	PCP	PCP	PROPN	PROP|M|S|@SUBJ>	Gender=Masc|Number=Sing	8	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	PU|@PU	_	2	punct	_	_
4	esse	esse	DET	<dem>|DET|M|S|@TOP	Gender=Masc|Number=Sing|PronType=Dem	8	dislocated	_	SpaceAfter=No
5	,	,	PUNCT	PU|@PU	_	4	punct	_	_
6	está	estar	AUX	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	sempre	sempre	ADV	ADV|@>A	_	8	advmod	_	_
8	bem	bem	ADV	<first-cjt>|<quant>|ADV|@<SC	_	0	root	_	_
9	e	e	CCONJ	<co-sc>|KC|@CO	_	12	cc	_	_
10	com	com	ADP	<cjt>|PRP|@<SC	_	12	case	_	_
11	pouco	pouco	DET	<quant>|DET|M|S|@>N	Gender=Masc|Number=Sing|PronType=Ind	12	det	_	_
12	trabalho	trabalho	NOUN	<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	8	conj	_	_
13	por	por	ADP	<sam->|PRP|@N<	_	15	case	_	_
14	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	frente	frente	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
16	.	.	PUNCT	PU|@PU	_	8	punct	_	_

~~~


