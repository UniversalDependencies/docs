

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

1140 nodes (1%) are attached to their parents as `compound`.

1036 instances of `compound` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.94385964912281.

The following 25 pairs of parts of speech are connected with `compound`: [pt-pos/NOUN]()-[pt-pos/NOUN]() (609; 53% instances), [pt-pos/DET]()-[pt-pos/SCONJ]() (197; 17% instances), [pt-pos/NUM]()-[pt-pos/NUM]() (148; 13% instances), [pt-pos/DET]()-[pt-pos/PRON]() (56; 5% instances), [pt-pos/PRON]()-[pt-pos/DET]() (45; 4% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (21; 2% instances), [pt-pos/PRON]()-[pt-pos/SCONJ]() (13; 1% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (8; 1% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (8; 1% instances), [pt-pos/NOUN]()-[pt-pos/CONJ]() (7; 1% instances), [pt-pos/DET]()-[pt-pos/DET]() (5; 0% instances), [pt-pos/NUM]()-[pt-pos/CONJ]() (5; 0% instances), [pt-pos/NOUN]()-[pt-pos/PUNCT]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/DET]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/ADJ]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/ADP]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 compound	color:blue
1	Paulo	Paulo	PROPN	prop|M|S	_	9	nsubj	_	MWE=Paulo_Pereira|MWEPOS=PROPN
2	Pereira	Pereira	PROPN	PROPN	_	1	name	_	_
3	,	,	PUNCT	punc	_	1	punct	_	_
4	vice-presidente	vice-presidente	NOUN	n|M|S	_	1	nmod	_	MWE=vice-presidente_do_Ippar|MWEPOS=NOUN
5	de	de	ADP	prp|<sam->	AdpType=Prep	7	case	_	_
6	o	o	DET	art|<-sam>|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Ippar	Ippar	NOUN	NOUN	_	4	compound	_	_
8	,	,	PUNCT	punc	_	1	punct	_	_
9	acrescenta	acrescentar	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	:	:	PUNCT	punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	Folha	Folha	PROPN	prop|F|S	Gender=Fem|Number=Sing	0	root	_	_
2	--	--	PUNCT	punc	_	1	punct	_	_
3	o	o	DET	pron-indp|<interr>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	dobj	_	MWE=o_que|MWEPOS=PRON
4	que	que	SCONJ	SCONJ	_	3	compound	_	_
5	a	o	DET	art|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	mulher	mulher	NOUN	n|F|S	Gender=Fem|Number=Sing	7	nsubj	_	_
7	precisa	precisar	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
8	hoje	hoje	ADV	adv	_	7	advmod	_	_
9	,	,	PUNCT	punc	_	7	punct	_	_
10	em	em	ADP	prp	AdpType=Prep	13	case	_	MWE=em_termos_de|MWEPOS=ADP
11	termos	termos	NOUN	NOUN	_	10	mwe	_	_
12	de	de	ADP	ADP	AdpType=Prep	10	mwe	_	_
13	roupas	roupa	NOUN	n|F|P	Gender=Fem|Number=Plur	7	nmod	_	_
14	?	?	PUNCT	punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 compound	color:blue
1	Lisboa	Lisboa	PROPN	prop|F|S	Gender=Fem|Number=Sing	0	root	_	_
2	,	,	PUNCT	punc	_	1	punct	_	_
3	18	18	NUM	num|<card>|M|S/P	Gender=Masc|NumType=Card	1	nummod	_	_
4	de	de	ADP	prp	AdpType=Prep	5	case	_	_
5	Fevereiro	fevereiro	NOUN	n|<prop>|M|S	Gender=Masc|Number=Sing	3	nmod	_	_
6	de	de	ADP	prp	AdpType=Prep	7	case	_	_
7	1992	1992	NUM	num|<card>|M|S	Gender=Masc|Number=Sing|NumType=Card	3	compound	_	_
8	.	.	PUNCT	punc	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-Bosque)

This relation is universal.

161 nodes (0%) are attached to their parents as `compound`.

157 instances of `compound` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.97515527950311.

The following 7 pairs of parts of speech are connected with `compound`: [pt-pos/NOUN]()-[pt-pos/NOUN]() (149; 93% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (7; 4% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (1; 1% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (1; 1% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (1; 1% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (1; 1% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Parece	parecer	VERB	<mv>|V|PR|3S|IND|@FS-EXC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	remador	remador	NOUN	<np-idf>|N|M|S|@<SC	Gender=Masc|Number=Sing	1	xcomp	_	_
3	de	de	ADP	PRP|@N<	_	5	case	_	_
4	porta	porta	NOUN	N|@>N	_	5	compound	_	MWE:porta=avião
5	avião	avião	NOUN	N|@P<	_	2	nmod	_	_
6	!	!	PUNCT	PU|@PU	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound	color:blue
1	As	o	DET	<artd>|ART|F|P|@>N	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	4	det	_	_
2	duas	dois	NUM	<card>|NUM|F|P|@>N	_	4	nummod	_	_
3	primeiras	primeiro	NOUN	N|F|P|@>N	Gender=Fem|Number=Plur	4	compound	_	_
4	jovens	jovem	ADJ	<n>|<np-def>|ADJ|F|P|@SUBJ>	Gender=Fem|Number=Plur	5	nsubj	_	_
5	fraquejam	fraquejar	VERB	<first-cjt>|<mv>|V|PR|3P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	e	e	CONJ	<co-fcl>|<co-fmc>|<co-vfin>|KC|@CO	_	5	cc	_	_
7	Miguel	Miguel	PROPN	PROP|M|S|@SUBJ>	Gender=Masc|Number=Sing	10	nsubj	_	_
8	vai	ir	AUX	<cjt>|<aux>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
9	logo	logo	ADV	<kc>|ADV|@ADVL>	_	10	advmod	_	_
10	buscar	buscar	VERB	<mv>|V|INF|@ICL-AUX<	VerbForm=Inf	5	conj	_	_
11	outra	outro	PRON	<diff>|DET|F|S|@<ACC	Gender=Fem|Number=Sing	10	dobj	_	_
12	.	.	PUNCT	PU|@PU	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 25 compound	color:blue
1	A	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	diferença	diferença	NOUN	<np-def>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	7	nsubj	_	_
3	mínima	pequeno	ADJ	ADJ|F|S|@N<	Gender=Fem|Number=Sing	2	amod	_	_
4	entre	entre	ADP	PRP|@N<	_	6	case	_	_
5	os	o	DET	<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	primeiros	primeiro	ADJ	<NUM-ord>|<n>|<np-def>|ADJ|M|P|@P<	Gender=Masc|Number=Plur	2	nmod	_	_
7	reflecte	reflectir	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	um	umo	DET	<arti>|DET|F|S|@>N	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	MWE:um=vez
9	vez	vez	NOUN	N|F|S|@<ADVL	Gender=Fem|Number=Sing	7	nmod	_	_
10	mais	muito	DET	<quant>|DET|F|S|@A<	Gender=Fem|Number=Sing	9	advmod	_	_
11	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	equilíbrio	equilíbrio	NOUN	<np-def>|N|M|S|@<ACC	Gender=Masc|Number=Sing	7	dobj	_	_
13	de	de	ADP	<sam->|PRP|@N<	_	15	case	_	_
14	a	o	DET	<-sam>|<artd>|ART|@>N	Definite=Def|PronType=Art	15	det	_	_
15	prova	prova	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	12	nmod	_	_
16	,	,	PUNCT	PU|@PU	_	7	punct	_	_
17	tanto	tanto	ADV	ADV|@>A	_	18	mwe	_	MWE:tanto=mais=que
18	mais	mais	ADV	ADV|@>S	_	19	mwe	_	_
19	que	que	SCONJ	KS|@SUB	_	31	mark	_	_
20	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	primeiro	primeiro	ADJ	<first-cjt>|<NUM-ord>|<n>|<np-def>|ADJ|M|S|@SUBJ>	Gender=Masc|Number=Sing	31	nsubj	_	_
22	e	e	CONJ	<co-subj>|KC|@CO	_	21	cc	_	_
23	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	_	_
24	décimo	décimo	ADJ	<cjt>|<NUM-ord>|<n>|<np-def>|ADJ|M|S|@SUBJ>	Gender=Masc|Number=Sing	21	conj	_	MWE:décimo=quarto
25	quarto	quarto	ADJ	<NUM-ord>|ADJ|@A<	_	24	compound	_	_
26	de	de	ADP	<sam->|PRP|@N<ARG	_	28	case	_	_
27	a	o	DET	<-sam>|<artd>|ART|@>N	Definite=Def|PronType=Art	28	det	_	_
28	classificação	classificação	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	24	nmod	_	_
29	geral	geral	ADJ	ADJ|F|S|@N<	Gender=Fem|Number=Sing	28	amod	_	_
30	estão	estar	VERB	<mv>|V|PR|3P|IND|@FS-<ADVL	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	31	cop	_	_
31	separados	separar	VERB	<mv>|V|PCP|M|P|@ICL-<SC	Gender=Masc|Number=Plur|VerbForm=Part	7	dep	_	_
32	somente	somente	ADV	ADV|@>A	_	35	advmod	_	_
33	por	por	ADP	PRP|@PASS	_	35	case	_	_
34	quatro	quatro	NUM	<card>|NUM|M|P|@>N	_	35	nummod	_	_
35	pontos	ponto	NOUN	<np-def>|N|M|P|@P<	Gender=Masc|Number=Plur	31	nmod	_	_
36	.	.	PUNCT	PU|@PU	_	7	punct	_	_

~~~


