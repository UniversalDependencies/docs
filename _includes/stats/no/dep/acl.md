

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Bokmaal)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

1605 nodes (1%) are attached to their parents as `acl`.

1546 instances of `acl` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.54890965732087.

The following 34 pairs of parts of speech are connected with `acl`: [no-pos/NOUN]()-[no-pos/VERB]() (1100; 69% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (110; 7% instances), [no-pos/PRON]()-[no-pos/NOUN]() (80; 5% instances), [no-pos/PRON]()-[no-pos/VERB]() (47; 3% instances), [no-pos/ADJ]()-[no-pos/VERB]() (42; 3% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (37; 2% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (37; 2% instances), [no-pos/PRON]()-[no-pos/ADJ]() (35; 2% instances), [no-pos/PROPN]()-[no-pos/VERB]() (32; 2% instances), [no-pos/PROPN]()-[no-pos/ADJ]() (25; 2% instances), [no-pos/DET]()-[no-pos/VERB]() (7; 0% instances), [no-pos/NOUN]()-[no-pos/PRON]() (7; 0% instances), [no-pos/NOUN]()-[no-pos/ADV]() (6; 0% instances), [no-pos/NOUN]()-[no-pos/NUM]() (4; 0% instances), [no-pos/NUM]()-[no-pos/VERB]() (4; 0% instances), [no-pos/PROPN]()-[no-pos/ADV]() (4; 0% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (3; 0% instances), [no-pos/NOUN]()-[no-pos/ADP]() (3; 0% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (3; 0% instances), [no-pos/ADV]()-[no-pos/VERB]() (2; 0% instances), [no-pos/NOUN]()-[no-pos/DET]() (2; 0% instances), [no-pos/PRON]()-[no-pos/PROPN]() (2; 0% instances), [no-pos/PROPN]()-[no-pos/NUM]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/DET]()-[no-pos/PRON]() (1; 0% instances), [no-pos/NUM]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/PRON]()-[no-pos/ADP]() (1; 0% instances), [no-pos/PRON]()-[no-pos/ADV]() (1; 0% instances), [no-pos/PRON]()-[no-pos/DET]() (1; 0% instances), [no-pos/PRON]()-[no-pos/NUM]() (1; 0% instances), [no-pos/PRON]()-[no-pos/X]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/DET]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/VERB]()-[no-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 acl	color:blue
1	Ap	Ap	PROPN	_	Abbr=Yes	2	nsubj	_	_
2	ønsker	ønske	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ikke	ikke	ADV	_	Polarity=Neg	2	advmod	_	_
4	å	å	PART	_	_	5	mark	_	_
5	så	så	VERB	_	VerbForm=Inf	2	xcomp	_	_
6	tvil	tvil	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	obj	_	_
7	om	om	ADP	_	_	10	mark	_	_
8	at	at	SCONJ	_	_	10	mark	_	_
9	de	de	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	10	nsubj	_	_
10	tror	tro	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	6	acl	_	_
11	på	på	ADP	_	_	14	case	_	_
12	ny	ny	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	14	amod	_	_
13	rødgrønn	rødgrønn	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	14	amod	_	_
14	valgseier	valgseier	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No
15	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 acl	color:blue
1	Boken	bok	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	ble	bli	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	filmatisert	filmatisere	VERB	_	VerbForm=Part	0	root	_	_
4	og	og	CCONJ	_	_	5	cc	_	_
5	vist	vise	VERB	_	VerbForm=Part	3	conj	_	_
6	som	som	ADP	_	_	7	mark	_	_
7	serie	serie	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	1	acl	_	_
8	på	på	ADP	_	_	9	case	_	_
9	NRK	NRK	PROPN	_	_	5	obl	_	_
10	tidligere	tidlig	ADJ	_	Degree=Cmp	12	advmod	_	_
11	i	i	ADP	_	_	12	case	_	_
12	år	år	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	5	obl	_	SpaceAfter=No
13	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 acl	color:blue
1	Han	han	PRON	_	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	i	i	ADP	_	_	5	case	_	_
4	alle	all	DET	_	Number=Plur|PronType=Tot	5	det	_	_
5	fall	fall	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	2	obl	_	_
6	min	min	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	7	nmod	_	_
7	respekt	respekt	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	2	obj	_	SpaceAfter=No
8	,	$,	PUNCT	_	_	7	punct	_	_
9	som	som	ADP	_	_	10	mark	_	_
10	menneske	menneske	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	1	acl	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Nynorsk)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

1586 nodes (1%) are attached to their parents as `acl`.

1555 instances of `acl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.62736443883985.

The following 29 pairs of parts of speech are connected with `acl`: [no-pos/NOUN]()-[no-pos/VERB]() (1165; 73% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (93; 6% instances), [no-pos/PRON]()-[no-pos/NOUN]() (64; 4% instances), [no-pos/ADJ]()-[no-pos/VERB]() (51; 3% instances), [no-pos/PRON]()-[no-pos/VERB]() (42; 3% instances), [no-pos/PROPN]()-[no-pos/VERB]() (37; 2% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (32; 2% instances), [no-pos/PRON]()-[no-pos/ADJ]() (28; 2% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (23; 1% instances), [no-pos/PROPN]()-[no-pos/ADJ]() (8; 1% instances), [no-pos/NOUN]()-[no-pos/ADP]() (7; 0% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (5; 0% instances), [no-pos/NOUN]()-[no-pos/DET]() (5; 0% instances), [no-pos/NUM]()-[no-pos/VERB]() (4; 0% instances), [no-pos/DET]()-[no-pos/VERB]() (3; 0% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (2; 0% instances), [no-pos/DET]()-[no-pos/NOUN]() (2; 0% instances), [no-pos/PRON]()-[no-pos/PRON]() (2; 0% instances), [no-pos/PROPN]()-[no-pos/PROPN]() (2; 0% instances), [no-pos/VERB]()-[no-pos/ADJ]() (2; 0% instances), [no-pos/ADV]()-[no-pos/VERB]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/NUM]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/PRON]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/NUM]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/NUM]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/PRON]()-[no-pos/DET]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/DET]() (1; 0% instances), [no-pos/VERB]()-[no-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 acl	color:blue
1	Då	då	ADV	_	_	4	advmod	_	_
2	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
4	viktig	viktig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
5	å	å	PART	_	_	6	mark	_	_
6	ha	ha	VERB	_	VerbForm=Inf	4	csubj	_	_
7	eit	ein	DET	_	Gender=Neut|Number=Sing|PronType=Art	9	det	_	_
8	godt	god	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	9	amod	_	_
9	brød	brød	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	6	obj	_	_
10	å	å	PART	_	_	11	mark	_	_
11	smøre	smøre	VERB	_	VerbForm=Inf	9	acl	_	_
12	matpakke	matpakke	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	11	obj	_	_
13	av	av	ADP	_	_	12	nmod	_	SpaceAfter=No
14	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 acl	color:blue
1	Som	som	ADP	_	_	2	mark	_	_
2	døme	døme	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	5	acl	_	_
3	vart	verte	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
4	nemnt	nemne	ADJ	_	Definite=Ind|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	_
5	tilhøvet	tilhøve	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	4	nsubj:pass	_	_
6	mellom	mellom	ADP	_	_	7	case	_	_
7	morsmål	morsmål	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	5	nmod	_	_
8	og	og	CCONJ	_	_	9	cc	_	_
9	nasjonalspråk	nasjonalspråk	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	7	conj	_	SpaceAfter=No
10	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 acl	color:blue
1	Så	så	CCONJ	_	_	3	cc	_	_
2	dette	dette	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	kom	kome	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	altså	altså	ADV	_	_	3	advmod	_	_
5	som	som	ADP	_	_	7	mark	_	_
6	eit	ein	DET	_	Gender=Neut|Number=Sing|PronType=Art	7	det	_	_
7	sjokk	sjokk	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	2	acl	_	_
8	på	på	ADP	_	_	9	case	_	_
9	meg	eg	PRON	_	Animacy=Hum|Case=Acc|Number=Sing|Person=1|PronType=Prs	3	obl	_	SpaceAfter=No
10	.	$.	PUNCT	_	_	3	punct	_	_

~~~


