

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Bokmaal)

This relation is universal.

3607 nodes (1%) are attached to their parents as `xcomp`.

3544 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.98696978098143.

The following 34 pairs of parts of speech are connected with `xcomp`: [no-pos/VERB]()-[no-pos/VERB]() (1168; 32% instances), [no-pos/VERB]()-[no-pos/ADJ]() (1116; 31% instances), [no-pos/VERB]()-[no-pos/NOUN]() (933; 26% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (88; 2% instances), [no-pos/VERB]()-[no-pos/ADV]() (55; 2% instances), [no-pos/VERB]()-[no-pos/PROPN]() (51; 1% instances), [no-pos/VERB]()-[no-pos/PRON]() (40; 1% instances), [no-pos/VERB]()-[no-pos/ADP]() (38; 1% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (18; 0% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (18; 0% instances), [no-pos/VERB]()-[no-pos/NUM]() (16; 0% instances), [no-pos/VERB]()-[no-pos/DET]() (11; 0% instances), [no-pos/NOUN]()-[no-pos/ADP]() (8; 0% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (5; 0% instances), [no-pos/ADJ]()-[no-pos/VERB]() (5; 0% instances), [no-pos/NOUN]()-[no-pos/VERB]() (5; 0% instances), [no-pos/VERB]()-[no-pos/X]() (5; 0% instances), [no-pos/PROPN]()-[no-pos/ADJ]() (4; 0% instances), [no-pos/NOUN]()-[no-pos/PRON]() (3; 0% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (3; 0% instances), [no-pos/PRON]()-[no-pos/NOUN]() (3; 0% instances), [no-pos/NOUN]()-[no-pos/ADV]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/ADJ]()-[no-pos/PRON]() (1; 0% instances), [no-pos/ADP]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/ADP]()-[no-pos/VERB]() (1; 0% instances), [no-pos/ADV]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/ADV]()-[no-pos/DET]() (1; 0% instances), [no-pos/NUM]()-[no-pos/ADP]() (1; 0% instances), [no-pos/NUM]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/PRON]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/PRON]()-[no-pos/ADP]() (1; 0% instances), [no-pos/PRON]()-[no-pos/VERB]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 xcomp	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	blir	bli	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	mer	mye	ADJ	_	Degree=Cmp	4	advmod	_	_
4	forsettlig	forsettlig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	2	xcomp	_	SpaceAfter=No
5	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	ble	bli	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	rene	ren	ADJ	_	Degree=Pos|Number=Plur	4	amod	_	_
4	ord	ord	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	2	xcomp	_	SpaceAfter=No
5	:	$:	PUNCT	_	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Nynorsk)

This relation is universal.

3398 nodes (1%) are attached to their parents as `xcomp`.

3345 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.15509123013537.

The following 38 pairs of parts of speech are connected with `xcomp`: [no-pos/VERB]()-[no-pos/ADJ]() (1060; 31% instances), [no-pos/VERB]()-[no-pos/VERB]() (992; 29% instances), [no-pos/VERB]()-[no-pos/NOUN]() (853; 25% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (80; 2% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (58; 2% instances), [no-pos/VERB]()-[no-pos/PRON]() (53; 2% instances), [no-pos/VERB]()-[no-pos/ADP]() (48; 1% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (45; 1% instances), [no-pos/VERB]()-[no-pos/ADV]() (43; 1% instances), [no-pos/VERB]()-[no-pos/PROPN]() (33; 1% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (25; 1% instances), [no-pos/VERB]()-[no-pos/DET]() (17; 1% instances), [no-pos/ADJ]()-[no-pos/VERB]() (14; 0% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (14; 0% instances), [no-pos/NOUN]()-[no-pos/ADP]() (13; 0% instances), [no-pos/VERB]()-[no-pos/NUM]() (11; 0% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (6; 0% instances), [no-pos/VERB]()-[no-pos/X]() (5; 0% instances), [no-pos/PROPN]()-[no-pos/ADP]() (3; 0% instances), [no-pos/ADJ]()-[no-pos/ADP]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/DET]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/X]() (2; 0% instances), [no-pos/PRON]()-[no-pos/VERB]() (2; 0% instances), [no-pos/PROPN]()-[no-pos/ADJ]() (2; 0% instances), [no-pos/VERB]()-[no-pos/INTJ]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/PRON]() (1; 0% instances), [no-pos/ADP]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/ADV]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/DET]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/NUM]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/PRON]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/NUM]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/NUM]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/PRON]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/PRON]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/SCONJ]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/X]()-[no-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp	color:blue
1	Ha	ha	VERB	_	Mood=Imp|VerbForm=Fin	0	root	_	_
2	i	i	ADP	_	_	1	compound:prt	_	_
3	kyllingkjøtdeigen	kyllingkjøtdeig	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	1	obj	_	SpaceAfter=No
4	,	$,	PUNCT	_	_	1	punct	_	_
5	og	og	CCONJ	_	_	6	cc	_	_
6	steik	steikje	VERB	_	Mood=Imp|VerbForm=Fin	1	conj	_	_
7	den	den	PRON	_	Gender=Fem,Masc|Number=Sing|Person=3|PronType=Prs	6	obj	_	_
8	gyllen	gyllen	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	6	xcomp	_	SpaceAfter=No
9	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 xcomp	color:blue
1	Hell	helle	VERB	_	Mood=Imp|VerbForm=Fin	0	root	_	_
2	kjøtdeigen	kjøtdeig	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	1	obj	_	_
3	på	på	ADP	_	_	5	case	_	_
4	ein	ein	DET	_	Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	tallerken	tallerken	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	1	obl	_	SpaceAfter=No
6	,	$,	PUNCT	_	_	1	punct	_	_
7	og	og	CCONJ	_	_	8	cc	_	_
8	la	la	VERB	_	Mood=Imp|VerbForm=Fin	1	conj	_	_
9	den	den	PRON	_	Gender=Fem,Masc|Number=Sing|Person=3|PronType=Prs	8	iobj	_	_
10	kolne	kolne	VERB	_	VerbForm=Inf	8	xcomp	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Grekarane	grekar	NOUN	_	Definite=Def|Gender=Masc|Number=Plur	2	nsubj	_	_
2	vert	verte	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ikkje	ikkje	ADV	_	Polarity=Neg	2	advmod	_	_
4	tyskarar	tyskar	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	2	xcomp	_	_
5	same	same	DET	_	Definite=Def|PronType=Dem	6	obl	_	_
6	kor	kor	ADV	_	_	7	advmod	_	_
7	mykje	mykje	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	9	advmod	_	_
8	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	9	nsubj	_	_
9	prøver	prøve	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	2	advcl	_	SpaceAfter=No
10	.	$.	PUNCT	_	_	2	punct	_	_

~~~


