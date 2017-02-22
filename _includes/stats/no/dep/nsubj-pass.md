

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Bokmaal)

This relation is a language-specific subtype of [nsubj]().

1665 nodes (1%) are attached to their parents as `nsubj:pass`.

1571 instances of `nsubj:pass` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.08048048048048.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: [no-pos/VERB]()-[no-pos/NOUN]() (874; 52% instances), [no-pos/VERB]()-[no-pos/PRON]() (574; 34% instances), [no-pos/VERB]()-[no-pos/PROPN]() (162; 10% instances), [no-pos/VERB]()-[no-pos/ADJ]() (35; 2% instances), [no-pos/VERB]()-[no-pos/DET]() (13; 1% instances), [no-pos/VERB]()-[no-pos/NUM]() (7; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Fangene	fange	NOUN	_	Definite=Def|Gender=Masc|Number=Plur	2	nsubj:pass	_	_
2	slippes	slippe	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	fri	fri	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	2	xcomp	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:pass	color:blue
1	-	$-	PUNCT	_	_	4	punct	_	_
2	Men	men	CCONJ	_	_	4	cc	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj:pass	_	_
4	innføres	innføre	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
5	jo	jo	ADV	_	_	4	advmod	_	_
6	for	for	ADP	_	_	8	mark	_	_
7	å	å	PART	_	_	8	mark	_	_
8	beskytte	beskytte	VERB	_	VerbForm=Inf	4	advcl	_	_
9	dere	dere	PRON	_	Animacy=Hum|Case=Acc|Number=Plur|Person=2|PronType=Prs	8	obj	_	_
10	som	som	PRON	_	PronType=Rel	11	nsubj	_	_
11	jobber	jobbe	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	9	acl:relcl	_	_
12	her	her	ADV	_	_	11	advmod	_	SpaceAfter=No
13	?	$?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	Finn	Finn	PROPN	_	Gender=Masc	4	nsubj:pass	_	_
2	Gustavsen	Gustavsen	PROPN	_	_	1	flat:name	_	_
3	ble	bli	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
4	født	føde	VERB	_	VerbForm=Part	0	root	_	_
5	i	i	ADP	_	_	6	case	_	_
6	Drammen	Drammen	PROPN	_	_	4	obl	_	_
7	i	i	ADP	_	_	8	case	_	_
8	1926	1926	NUM	_	Number=Plur|NumType=Card	4	obl	_	SpaceAfter=No
9	.	$.	PUNCT	_	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Nynorsk)

This relation is a language-specific subtype of [nsubj]().

862 nodes (0%) are attached to their parents as `nsubj:pass`.

859 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.37238979118329.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: [no-pos/ADJ]()-[no-pos/NOUN]() (487; 56% instances), [no-pos/ADJ]()-[no-pos/PRON]() (280; 32% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (66; 8% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (17; 2% instances), [no-pos/ADJ]()-[no-pos/DET]() (6; 1% instances), [no-pos/ADJ]()-[no-pos/NUM]() (4; 0% instances), [no-pos/ADJ]()-[no-pos/X]() (1; 0% instances), [no-pos/VERB]()-[no-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	Denne	denne	DET	_	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	skatten	skatt	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	4	nsubj:pass	_	_
3	vert	verte	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	lagd	leggje	ADJ	_	Definite=Ind|Number=Sing|VerbForm=Part	0	root	_	_
5	på	på	ADP	_	_	6	case	_	_
6	kraftrekninga	kraftrekning	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
7	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubj:pass	color:blue
1	Jaudå	jaudå	INTJ	_	_	4	discourse	_	SpaceAfter=No
2	,	$,	PUNCT	_	_	1	punct	_	_
3	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
5	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	obj	_	SpaceAfter=No
6	,	$,	PUNCT	_	_	4	punct	_	_
7	og	og	CCONJ	_	_	10	cc	_	_
8	den	den	PRON	_	Gender=Fem,Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj:pass	_	_
9	vert	verte	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
10	brukt	bruke	ADJ	_	Definite=Ind|Number=Sing|VerbForm=Part	4	conj	_	_
11	rett	rett	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	10	advmod	_	_
12	som	som	PRON	_	PronType=Rel	14	nsubj	_	_
13	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	expl	_	_
14	er	vere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	11	advcl	_	SpaceAfter=No
15	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 nsubj:pass	color:blue
1	Sist	sist	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	2	amod	_	_
2	gong	gong	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	nsubj	_	_
3	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	cop	_	_
4	i	i	ADP	_	_	5	case	_	_
5	1958	1958	NUM	_	Number=Plur|NumType=Card	0	root	_	_
6	då	då	SCONJ	_	_	10	mark	_	_
7	Kilen	Kilen	PROPN	_	_	10	nsubj:pass	_	_
8	kapell	kapell	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	7	flat:name	_	_
9	vart	verte	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	10	aux:pass	_	_
10	vigsla	vigsle	ADJ	_	Definite=Ind|Gender=Neut|Number=Sing|VerbForm=Part	5	advmod	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	5	punct	_	_

~~~


