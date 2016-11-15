

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

2841 nodes (1%) are attached to their parents as `xcomp`.

2824 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.18585005279831.

The following 16 pairs of parts of speech are connected with `xcomp`: [pt-pos/VERB]()-[pt-pos/VERB]() (2399; 84% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (196; 7% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (176; 6% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (16; 1% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (13; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (11; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (10; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (5; 0% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (4; 0% instances), [pt-pos/VERB]()-[pt-pos/DET]() (4; 0% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/ADP]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/SCONJ]()-[pt-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	O	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	governo	governo	NOUN	n|M|S	Gender=Masc|Number=Sing	3	nsubj	_	_
3	vai	ir	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	ccomp	_	_
4	usar	usar	VERB	v-inf	VerbForm=Inf	3	xcomp	_	_
5	a	o	DET	art|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	URV	URV	PROPN	prop|F|S	Gender=Fem|Number=Sing	4	dobj	_	_
7	para	para	ADP	prp	AdpType=Prep	8	mark	_	_
8	corrigir	corrigir	VERB	v-inf	VerbForm=Inf	4	advcl	_	_
9	impostos	imposto	NOUN	n|M|P	Gender=Masc|Number=Plur	8	dobj	_	_
10	,	,	PUNCT	punc	_	11	punct	_	_
11	garantiu	garantir	VERB	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
12	FHC	FHC	PROPN	prop|M|S	Gender=Masc|Number=Sing	11	nsubj	_	_
13	.	.	PUNCT	punc	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	«	«	PUNCT	punc	_	4	punct	_	_
2	Senão	senão	ADV	adv	_	6	advmod	_	_
3	ele	ele	PRON	pron-pers|M|3S|NOM	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
4	vai	ir	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	ser	ser	VERB	v-inf	VerbForm=Inf	6	cop	_	_
6	alvo	alvo	NOUN	n|M|S	Gender=Masc|Number=Sing	4	xcomp	_	_
7	fácil	fácil	ADJ	adj|M|S	Gender=Masc|Number=Sing	6	amod	_	_
8	de	de	ADP	prp|<sam->	AdpType=Prep	10	case	_	_
9	as	o	DET	art|<-sam>|<artd>|F|P	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	críticas	crítica	NOUN	n|F|P	Gender=Fem|Number=Plur	6	nmod	_	_
11	se	se	SCONJ	conj-s	_	14	mark	_	_
12	o	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	time	time	NOUN	n|M|S	Gender=Masc|Number=Sing	14	nsubj	_	_
14	perder	perder	VERB	v-fin|FUT|3S|SUBJ	Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	6	advcl	_	_
15	.	.	PUNCT	punc	_	4	punct	_	_
16	»	»	PUNCT	punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 xcomp	color:blue
1	É	ser	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	de	de	ADP	prp	AdpType=Prep	3	mark	_	_
3	crer	crer	VERB	v-inf	VerbForm=Inf	1	ccomp	_	_
4	que	que	SCONJ	conj-s	_	5	mark	_	_
5	estivesse	estar	VERB	v-fin|IMPF|3S|SUBJ	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	ccomp	_	_
6	a	a	ADP	prp	AdpType=Prep	8	mark	_	_
7	ser	ser	VERB	v-inf	VerbForm=Inf	8	cop	_	_
8	sincero	sincero	ADJ	adj|M|S	Gender=Masc|Number=Sing	5	xcomp	_	_
9	.	.	PUNCT	punc	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-Bosque)

This relation is universal.

1918 nodes (1%) are attached to their parents as `xcomp`.

1891 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.06412930135558.

The following 35 pairs of parts of speech are connected with `xcomp`: [pt-pos/VERB]()-[pt-pos/VERB]() (1263; 66% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (282; 15% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (205; 11% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (27; 1% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (23; 1% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (15; 1% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (15; 1% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (15; 1% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (9; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (8; 0% instances), [pt-pos/ADV]()-[pt-pos/NOUN]() (6; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (6; 0% instances), [pt-pos/ADV]()-[pt-pos/ADJ]() (4; 0% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (3; 0% instances), [pt-pos/DET]()-[pt-pos/ADJ]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (3; 0% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (3; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/SCONJ]()-[pt-pos/ADJ]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/DET]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/SCONJ]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/ADV]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/SCONJ]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Reis	Reis	PROPN	PROP|M|S|@SUBJ>	Gender=Masc|Number=Sing	3	nsubj	_	_
2	não	não	ADV	ADV|@ADVL>	_	3	neg	_	_
3	quis	querer	VERB	<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	dizer	dizer	VERB	<mv>|V|INF|@ICL-<ACC	VerbForm=Inf	3	xcomp	_	_
5	se	se	SCONJ	KS|@SUB	_	7	mark	_	_
6	também	também	ADV	ADV|@ADVL>	_	7	advmod	_	_
7	abandonará	abandonar	VERB	<mv>|V|FUT|3S|IND|@FS-<ACC	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	ccomp	_	_
8	Esperidião	Esperidião	PROPN	PROP|M|S|@<ACC	Gender=Masc|Number=Sing	7	dobj	_	MWE:Esperidião=Amin
9	Amin	Amin	PROPN	PROP|@N<	Number=Sing	8	name	_	_
10	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 xcomp	color:blue
1	Parece	parecer	VERB	<mv>|V|PR|3S|IND|@FS-EXC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	remador	remador	NOUN	<np-idf>|N|M|S|@<SC	Gender=Masc|Number=Sing	1	xcomp	_	_
3	de	de	ADP	PRP|@N<	_	5	case	_	_
4	porta	porta	NOUN	N|@>N	_	5	compound	_	MWE:porta=avião
5	avião	avião	NOUN	N|@P<	_	2	nmod	_	_
6	!	!	PUNCT	PU|@PU	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	Ainda	Ainda	ADV	ADV|@>A	_	2	advmod	_	MWE:Ainda=assim
2	assim	assim	ADV	ADV|@ADVL>	_	8	advmod	_	_
3	,	,	PUNCT	PU|@PU	_	2	punct	_	_
4	em	em	ADP	<sam->|PRP|@ADVL>	_	6	case	_	_
5	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	final	final	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	8	nmod	_	_
7	todos	todo	PRON	<quant>|DET|M|P|@SUBJ>	Gender=Masc|Number=Plur	8	nsubj	_	_
8	ficaram	ficar	VERB	<mv>|V|PS|3P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
9	contentes	contente	ADJ	ADJ|M|P|@<SC	Gender=Masc|Number=Plur	8	xcomp	_	_
10	.	.	PUNCT	PU|@PU	_	8	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: [xcomp:adj]().

966 nodes (0%) are attached to their parents as `xcomp`.

961 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.74120082815735.

The following 13 pairs of parts of speech are connected with `xcomp`: [pt-pos/VERB]()-[pt-pos/VERB]() (761; 79% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (151; 16% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (37; 4% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (4; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (3; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (2; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/AUX]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/X]()-[pt-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 xcomp	color:blue
1	Quero	_	VERB	VERB	_	10	ccomp	_	_
2	dar	_	VERB	VERB	_	1	xcomp	_	_
3	o	_	DET	DET	_	4	det	_	_
4	máximo	_	NOUN	NOUN	_	2	dobj	_	_
5	e	_	CONJ	CONJ	_	2	cc	_	_
6	sair	_	VERB	VERB	_	2	conj	_	_
7	satisfeito	_	ADJ	ADJ	_	6	xcomp:adj	_	_
8	'	_	PUNCT	.	_	1	punct	_	_
9	,	_	PUNCT	.	_	10	punct	_	_
10	afirmou	_	VERB	VERB	_	0	root	_	_
11	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
1	E	_	CONJ	CONJ	_	4	cc	_	_
2	era	_	VERB	VERB	_	4	cop	_	_
3	uma	_	DET	DET	_	4	det	_	_
4	coisa	_	NOUN	NOUN	_	0	root	_	_
5	que	_	PRON	PRON	_	7	nsubj	_	_
6	nos	_	PRON	PRON	_	8	nsubj	_	_
7	deixava	_	VERB	VERB	_	4	acl:relcl	_	_
8	confortáveis	_	ADJ	ADJ	_	7	xcomp	_	_
9	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 xcomp	color:blue
1	Por	_	ADP	ADP	_	2	case	_	_
2	isso	_	PRON	PRON	_	7	nmod	_	_
3	,	_	PUNCT	.	_	2	punct	_	_
4	administrar	_	VERB	VERB	_	7	csubj	_	_
5	nem	_	ADV	ADV	_	7	neg	_	_
6	sempre	_	ADV	ADV	_	7	advmod	_	_
7	significa	_	VERB	VERB	_	0	root	_	_
8	ser	_	VERB	VERB	_	9	cop	_	_
9	estadista	_	NOUN	NOUN	_	7	xcomp	_	_
10	.	_	PUNCT	.	_	7	punct	_	_

~~~


