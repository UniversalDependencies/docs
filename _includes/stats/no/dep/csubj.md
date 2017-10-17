

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Bokmaal)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:pass]().

919 nodes (0%) are attached to their parents as `csubj`.

813 instances of `csubj` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.92165397170838.

The following 24 pairs of parts of speech are connected with `csubj`: [no-pos/ADJ]()-[no-pos/VERB]() (447; 49% instances), [no-pos/VERB]()-[no-pos/VERB]() (226; 25% instances), [no-pos/NOUN]()-[no-pos/VERB]() (140; 15% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (21; 2% instances), [no-pos/ADV]()-[no-pos/VERB]() (14; 2% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (13; 1% instances), [no-pos/VERB]()-[no-pos/ADJ]() (11; 1% instances), [no-pos/VERB]()-[no-pos/NOUN]() (11; 1% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (8; 1% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (7; 1% instances), [no-pos/ADJ]()-[no-pos/PRON]() (3; 0% instances), [no-pos/PRON]()-[no-pos/VERB]() (3; 0% instances), [no-pos/ADJ]()-[no-pos/ADP]() (2; 0% instances), [no-pos/PROPN]()-[no-pos/VERB]() (2; 0% instances), [no-pos/VERB]()-[no-pos/PRON]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/ADV]() (1; 0% instances), [no-pos/ADJ]()-[no-pos/NUM]() (1; 0% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/ADV]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/DET]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/DET]()-[no-pos/VERB]() (1; 0% instances), [no-pos/PRON]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/VERB]()-[no-pos/ADV]() (1; 0% instances), [no-pos/VERB]()-[no-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 csubj	color:blue
1	Etter	etter	ADP	_	_	2	case	_	_
2	seieren	seier	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	8	obl	_	_
3	på	på	ADP	_	_	4	case	_	_
4	fredag	fredag	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	2	nmod	_	_
5	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	8	cop	_	_
6	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	expl	_	_
7	veldig	veldig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	8	advmod	_	_
8	vanskelig	vanskelig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
9	å	å	PART	_	_	11	mark	_	_
10	få	få	AUX	_	VerbForm=Inf	11	aux	_	_
11	sove	sove	VERB	_	VerbForm=Inf	8	csubj	_	SpaceAfter=No
12	.	$.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj	color:blue
1	Men	men	CCONJ	_	_	3	cc	_	_
2	snart	snar	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	3	advmod	_	_
3	blir	bli	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
5	forbudt	forbudt	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	3	xcomp	_	_
6	å	å	PART	_	_	7	mark	_	_
7	puste	puste	VERB	_	VerbForm=Inf	3	csubj	_	_
8	der	der	ADV	_	_	7	advmod	_	_
9	inne	inne	ADP	_	_	8	nmod	_	SpaceAfter=No
10	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 7 csubj	color:blue
1	Hvor	hvor	ADV	_	_	2	advmod	_	_
2	lenge	lenge	ADJ	_	Degree=Pos	7	advmod	_	_
3	en	en	DET	_	Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
4	slik	slik	DET	_	Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	regjering	regjering	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	7	nsubj	_	_
6	kan	kunne	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	leve	leve	VERB	_	VerbForm=Inf	13	csubj	_	SpaceAfter=No
8	,	$,	PUNCT	_	_	7	punct	_	_
9	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	13	cop	_	_
10	en	en	DET	_	Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
11	helt	hel	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	12	advmod	_	_
12	annen	annen	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Dem	13	det	_	_
13	sak	sak	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
14	.	$.	PUNCT	_	_	13	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Nynorsk)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:pass]().

925 nodes (0%) are attached to their parents as `csubj`.

831 instances of `csubj` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.9145945945946.

The following 20 pairs of parts of speech are connected with `csubj`: [no-pos/ADJ]()-[no-pos/VERB]() (471; 51% instances), [no-pos/VERB]()-[no-pos/VERB]() (220; 24% instances), [no-pos/NOUN]()-[no-pos/VERB]() (126; 14% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (24; 3% instances), [no-pos/VERB]()-[no-pos/ADJ]() (18; 2% instances), [no-pos/VERB]()-[no-pos/NOUN]() (14; 2% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (13; 1% instances), [no-pos/ADV]()-[no-pos/VERB]() (9; 1% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (6; 1% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (4; 0% instances), [no-pos/DET]()-[no-pos/VERB]() (3; 0% instances), [no-pos/PRON]()-[no-pos/VERB]() (3; 0% instances), [no-pos/VERB]()-[no-pos/ADP]() (3; 0% instances), [no-pos/ADJ]()-[no-pos/DET]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (2; 0% instances), [no-pos/ADV]()-[no-pos/ADJ]() (2; 0% instances), [no-pos/NUM]()-[no-pos/VERB]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/NUM]() (1; 0% instances), [no-pos/ADP]()-[no-pos/VERB]() (1; 0% instances), [no-pos/ADV]()-[no-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 csubj	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 csubj	color:blue
1	-	$-	PUNCT	_	_	7	punct	_	_
2	Kor	kor	ADV	_	_	3	advmod	_	_
3	lang	lang	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	4	amod	_	_
4	tid	tid	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	7	obj	_	_
5	vil	vilje	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	expl	_	_
7	taka	take	VERB	_	VerbForm=Inf	0	root	_	_
8	å	å	PART	_	_	9	mark	_	_
9	få	få	VERB	_	VerbForm=Inf	7	csubj	_	_
10	Hellas	Hellas	PROPN	_	_	9	obj	_	_
11	på	på	ADP	_	_	12	case	_	_
12	fote	fote	NOUN	_	_	9	obl	_	SpaceAfter=No
13	?	$?	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 csubj	color:blue
1	-	$-	PUNCT	_	_	4	punct	_	_
2	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
3	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	galenskap	galenskap	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
5	å	å	PART	_	_	6	mark	_	_
6	øydeleggja	øydeleggje	VERB	_	VerbForm=Inf	4	csubj	_	_
7	ein	ein	DET	_	Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	økonomi	økonomi	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	6	obj	_	_
9	på	på	ADP	_	_	11	case	_	_
10	denne	denne	DET	_	Gender=Masc|Number=Sing|PronType=Dem	11	det	_	_
11	måten	måte	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
12	.	$.	PUNCT	_	_	4	punct	_	_

~~~


