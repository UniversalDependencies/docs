

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

199 nodes (0%) are attached to their parents as `dep`.

163 instances of `dep` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.79899497487437.

The following 38 pairs of parts of speech are connected with `dep`: [pt-pos/VERB]()-[pt-pos/VERB]() (37; 19% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (24; 12% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (19; 10% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (17; 9% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (17; 9% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (10; 5% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (7; 4% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (6; 3% instances), [pt-pos/ADP]()-[pt-pos/NOUN]() (5; 3% instances), [pt-pos/INTJ]()-[pt-pos/INTJ]() (5; 3% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (5; 3% instances), [pt-pos/ADP]()-[pt-pos/VERB]() (4; 2% instances), [pt-pos/ADV]()-[pt-pos/NOUN]() (4; 2% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (4; 2% instances), [pt-pos/ADV]()-[pt-pos/PRON]() (3; 2% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (3; 2% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (2; 1% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (2; 1% instances), [pt-pos/NOUN]()-[pt-pos/INTJ]() (2; 1% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (2; 1% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (2; 1% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (2; 1% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (2; 1% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (1; 1% instances), [pt-pos/DET]()-[pt-pos/NOUN]() (1; 1% instances), [pt-pos/DET]()-[pt-pos/PROPN]() (1; 1% instances), [pt-pos/INTJ]()-[pt-pos/NOUN]() (1; 1% instances), [pt-pos/INTJ]()-[pt-pos/PROPN]() (1; 1% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (1; 1% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (1; 1% instances), [pt-pos/NUM]()-[pt-pos/PRON]() (1; 1% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (1; 1% instances), [pt-pos/PRON]()-[pt-pos/ADV]() (1; 1% instances), [pt-pos/PRON]()-[pt-pos/INTJ]() (1; 1% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (1; 1% instances), [pt-pos/PROPN]()-[pt-pos/ADP]() (1; 1% instances), [pt-pos/PROPN]()-[pt-pos/INTJ]() (1; 1% instances), [pt-pos/SCONJ]()-[pt-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 dep	color:blue
1	Sabe	saber	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	que	que	SCONJ	conj-s	_	1	dobj	_	_
3	se	se	SCONJ	conj-s	_	5	mark	_	_
4	não	não	ADV	adv	_	5	neg	_	_
5	chegar	chegar	VERB	v-fin|FUT|3S|SUBJ	Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	2	advcl	_	_
6	a	a	ADP	prp	AdpType=Prep	7	case	_	_
7	acordo	acordo	NOUN	n|M|S	Gender=Masc|Number=Sing	5	nmod	_	_
8	,	,	PUNCT	punc	_	1	punct	_	_
9	é	ser	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	auxpass	_	_
10	chumbado	chumbar	VERB	v-pcp|M|S	Gender=Masc|Number=Sing|VerbForm=Part	1	dep	_	_
11	.	.	PUNCT	punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 dep	color:blue
1	Um	um	NUM	num|<card>|M|S	Gender=Masc|Number=Sing|NumType=Card	8	cop	_	_
2	de	de	ADP	prp|<sam->	AdpType=Prep	5	case	_	_
3	estes	este	DET	pron-det|<-sam>|<dem>|M|P	Gender=Masc|Number=Plur|PronType=Dem	5	det	_	_
4	trágicos	trágico	ADJ	adj|M|P	Gender=Masc|Number=Plur	5	amod	_	_
5	erros	erro	NOUN	n|M|P	Gender=Masc|Number=Plur	8	nmod	_	_
6	foi	ser	VERB	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	dep	_	_
7	o	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	maniqueísmo	maniqueísmo	NOUN	n|M|S	Gender=Masc|Number=Sing	0	root	_	_
9	.	.	PUNCT	punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 dep	color:blue
1	O	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	fado	fado	NOUN	n|M|S	Gender=Masc|Number=Sing	6	nsubj	_	_
3	,	,	PUNCT	punc	_	6	punct	_	_
4	esse	esse	PRON	pron-det|<dem>|<foc>|M|S	Gender=Masc|Number=Sing|PronType=Dem	6	dep	_	_
5	,	,	PUNCT	punc	_	6	punct	_	_
6	ficou	ficar	VERB	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
7	aquém	aquém	ADV	adv	_	6	advmod	_	_
8	.	.	PUNCT	punc	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-Bosque)

This relation is universal.

1010 nodes (0%) are attached to their parents as `dep`.

679 instances of `dep` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.10594059405941.

The following 50 pairs of parts of speech are connected with `dep`: [pt-pos/VERB]()-[pt-pos/VERB]() (448; 44% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (85; 8% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (56; 6% instances), [pt-pos/NUM]()-[pt-pos/NUM]() (55; 5% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (54; 5% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (39; 4% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (27; 3% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (26; 3% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (20; 2% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (19; 2% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (17; 2% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (14; 1% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (12; 1% instances), [pt-pos/ADJ]()-[pt-pos/DET]() (11; 1% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (11; 1% instances), [pt-pos/VERB]()-[pt-pos/DET]() (9; 1% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (8; 1% instances), [pt-pos/ADV]()-[pt-pos/PRON]() (7; 1% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (7; 1% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (6; 1% instances), [pt-pos/ADJ]()-[pt-pos/PROPN]() (6; 1% instances), [pt-pos/NUM]()-[pt-pos/DET]() (6; 1% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (6; 1% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (6; 1% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (6; 1% instances), [pt-pos/ADJ]()-[pt-pos/PRON]() (4; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (4; 0% instances), [pt-pos/ADV]()-[pt-pos/ADJ]() (3; 0% instances), [pt-pos/ADV]()-[pt-pos/DET]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/PART]() (3; 0% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (3; 0% instances), [pt-pos/SCONJ]()-[pt-pos/VERB]() (3; 0% instances), [pt-pos/ADV]()-[pt-pos/PROPN]() (2; 0% instances), [pt-pos/DET]()-[pt-pos/PROPN]() (2; 0% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/SCONJ]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/ADJ]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/ADP]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/CONJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/PART]() (1; 0% instances), [pt-pos/SCONJ]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/SCONJ]()-[pt-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 dep	color:blue
1	«	«	PUNCT	PU|@PU	_	5	punct	_	_
2	Também	também	ADV	ADV|@ADVL>	_	5	advmod	_	_
3	não	não	ADV	ADV|@ADVL>	_	5	neg	_	_
4	nos	nós	PRON	<refl>|PERS|M/F|1P|ACC|@ACC>	Case=Acc|Gender=Unsp|Number=Plur|Person=1|PronType=Prs	5	dobj	_	_
5	interessa	interessar	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	se	se	SCONJ	KS|@SUB	_	10	mark	_	_
7	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	jogador	jogador	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	10	nsubj	_	_
9	estava	estar	VERB	<first-cjt>|<mv>|V|IMPF|3S|IND|@FS-<SUBJ	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	10	cop	_	_
10	internado	internar	VERB	<mv>|V|PCP|M|S|@ICL-<SC	Gender=Masc|Number=Sing|VerbForm=Part	5	dep	_	_
11	ou	ou	CONJ	<co-sc>|KC|@CO	_	10	cc	_	_
12	não	não	ADV	ADV|@<SC	_	10	xcomp	_	_
13	.	.	PUNCT	PU|@PU	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 dep	color:blue
1	Se	se	SCONJ	KS|@SUB	_	3	mark	_	_
2	estamos	estar	VERB	<mv>|V|PR|1P|IND|@FS-ADVL>	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	atrasados	atrasar	VERB	<mv>|V|PCP|M|P|@ICL-<SC	Gender=Masc|Number=Plur|VerbForm=Part	7	dep	_	_
4	,	,	PUNCT	PU|@PU	_	3	punct	_	_
5	é	ser	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	um	um	NUM	<card>|NUM|M|S|@>N	_	7	nummod	_	_
7	ano	ano	NOUN	<first-cjt>|<np-def>|N|M|S|@<SC	Gender=Masc|Number=Sing	0	root	_	_
8	ou	ou	CONJ	<co-sc>|KC|@CO	_	7	cc	_	_
9	dois	dois	NUM	<cjt>|<card>|NUM|M|P|@<SC	_	7	conj	_	_
10	.	.	PUNCT	PU|@PU	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 dep	color:blue
1	Tinham	ter	VERB	<mv>|<first-cjt>|V|IMPF|3P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	a	o	DET	<artd>|DET|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	barba	barba	NOUN	<np-def>|N|F|S|@<ACC	Gender=Fem|Number=Sing	1	dobj	_	_
4	por	por	ADP	<first-cjt>|PRP|@<PIV	_	5	mark	_	_
5	fazer	fazer	VERB	<mv>|<first-cjt>|V|INF|@ICL-<PIV	VerbForm=Inf	1	dep	_	_
6	,	,	PUNCT	PU|@PU	_	8	punct	_	_
7	estavam	estar	VERB	<mv>|<cjt>|V|IMPF|3P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
8	exaustos	exaurir	VERB	<mv>|<first-cjt>|V|PCP|M|P|@ICL-<SC	Gender=Masc|Number=Plur|VerbForm=Part	1	dep	_	_
9	e	e	CONJ	<co-sc>|KC|@CO	_	8	cc	_	_
10	famintos	faminto	ADJ	ADJ|M|P|@ICL-<SC	Gender=Masc|Number=Plur	8	dep	_	_
11	.	.	PUNCT	PU|@PU	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

278 nodes (0%) are attached to their parents as `dep`.

162 instances of `dep` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.79856115107914.

The following 48 pairs of parts of speech are connected with `dep`: [pt-pos/VERB]()-[pt-pos/PRON]() (38; 14% instances), [pt-pos/VERB]()-[pt-pos/PART]() (30; 11% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (27; 10% instances), [pt-pos/VERB]()-[pt-pos/CONJ]() (24; 9% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (16; 6% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (14; 5% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (10; 4% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (10; 4% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (8; 3% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (7; 3% instances), [pt-pos/NOUN]()-[pt-pos/PART]() (6; 2% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (6; 2% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (6; 2% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (5; 2% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (5; 2% instances), [pt-pos/PROPN]()-[pt-pos/ADP]() (5; 2% instances), [pt-pos/X]()-[pt-pos/X]() (5; 2% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (4; 1% instances), [pt-pos/NOUN]()-[pt-pos/X]() (4; 1% instances), [pt-pos/VERB]()-[pt-pos/AUX]() (4; 1% instances), [pt-pos/NUM]()-[pt-pos/NUM]() (3; 1% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (3; 1% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (3; 1% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (3; 1% instances), [pt-pos/VERB]()-[pt-pos/DET]() (3; 1% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (2; 1% instances), [pt-pos/ADV]()-[pt-pos/CONJ]() (2; 1% instances), [pt-pos/NOUN]()-[pt-pos/CONJ]() (2; 1% instances), [pt-pos/PRON]()-[pt-pos/PART]() (2; 1% instances), [pt-pos/PROPN]()-[pt-pos/X]() (2; 1% instances), [pt-pos/VERB]()-[pt-pos/X]() (2; 1% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/ADJ]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/ADP]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/AUX]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/CONJ]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/CONJ]()-[pt-pos/X]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/X]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/CONJ]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PUNCT]() (1; 0% instances), [pt-pos/X]()-[pt-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 dep	color:blue
1	Segundo	_	ADP	ADP	_	3	case	_	_
2	a	_	DET	DET	_	3	det	_	_
3	tradição	_	NOUN	NOUN	_	5	nmod	_	_
4	que	_	PRON	PRON	_	5	dep	_	_
5	tinha	_	VERB	VERB	_	0	root	_	_
6	oito	_	NUM	NUM	NumType=Card	7	nummod	_	_
7	irmãs	_	NOUN	NOUN	_	5	dobj	_	_
8	gémeas	_	ADJ	ADJ	_	7	amod	_	_
9	:	_	PUNCT	.	_	7	punct	_	_
10	Basília	_	PROPN	PNOUN	_	7	appos	_	_
11	;	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 dep	color:blue
1	E	_	CONJ	CONJ	_	6	cc	_	_
2	aí	_	PART	PRT	_	6	dep	_	_
3	,	_	PUNCT	.	_	2	punct	_	_
4	o	_	DET	DET	_	5	det	_	_
5	que	_	PRON	PRON	_	6	dobj	_	_
6	acharam	_	VERB	VERB	_	0	root	_	_
7	?	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 dep	color:blue
1	Anos	_	NOUN	NOUN	_	2	nmod	_	_
2	depois	_	ADV	ADV	_	5	mark	_	_
3	de	_	ADP	ADP	_	2	mwe	_	_
4	ter	_	AUX	AUX	_	5	aux	_	_
5	entregue	_	VERB	VERB	_	0	root	_	_
6	o	_	DET	DET	_	7	det	_	_
7	governo	_	NOUN	NOUN	_	5	dobj	_	_
8	do	_	ADP	ADP	_	9	case	_	_
9	Paraná	_	PROPN	PNOUN	_	7	nmod	_	_
10	,	_	PUNCT	.	_	12	punct	_	_
11	o	_	DET	DET	_	12	det	_	_
12	dr	_	NOUN	NOUN	_	5	dep	_	_
13	.	_	PUNCT	.	_	5	punct	_	_

~~~


