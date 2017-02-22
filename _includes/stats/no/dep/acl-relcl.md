

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Bokmaal)

This relation is a language-specific subtype of [acl]().

3892 nodes (1%) are attached to their parents as `acl:relcl`.

3891 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.60097636176773.

The following 35 pairs of parts of speech are connected with `acl:relcl`: [no-pos/NOUN]()-[no-pos/VERB]() (2401; 62% instances), [no-pos/PRON]()-[no-pos/VERB]() (651; 17% instances), [no-pos/PROPN]()-[no-pos/VERB]() (222; 6% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (177; 5% instances), [no-pos/ADJ]()-[no-pos/VERB]() (113; 3% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (71; 2% instances), [no-pos/PRON]()-[no-pos/ADJ]() (56; 1% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (37; 1% instances), [no-pos/PRON]()-[no-pos/NOUN]() (35; 1% instances), [no-pos/DET]()-[no-pos/VERB]() (31; 1% instances), [no-pos/NUM]()-[no-pos/VERB]() (23; 1% instances), [no-pos/PROPN]()-[no-pos/ADJ]() (12; 0% instances), [no-pos/NOUN]()-[no-pos/ADP]() (8; 0% instances), [no-pos/PRON]()-[no-pos/ADP]() (7; 0% instances), [no-pos/PRON]()-[no-pos/ADV]() (6; 0% instances), [no-pos/NOUN]()-[no-pos/ADV]() (5; 0% instances), [no-pos/NOUN]()-[no-pos/DET]() (5; 0% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (4; 0% instances), [no-pos/NUM]()-[no-pos/ADJ]() (4; 0% instances), [no-pos/NOUN]()-[no-pos/NUM]() (3; 0% instances), [no-pos/NOUN]()-[no-pos/PRON]() (3; 0% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (2; 0% instances), [no-pos/DET]()-[no-pos/NOUN]() (2; 0% instances), [no-pos/PRON]()-[no-pos/DET]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/ADV]() (1; 0% instances), [no-pos/DET]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/NUM]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/PRON]()-[no-pos/PRON]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/ADP]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/DET]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/NUM]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/X]()-[no-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl:relcl	color:blue
1	Dette	dette	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	rører	røre	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ved	ved	ADP	_	_	6	case	_	_
4	de	de	DET	_	Number=Plur|PronType=Dem	6	det	_	_
5	dypeste	dyp	ADJ	_	Definite=Def|Degree=Sup	6	amod	_	_
6	verdiene	verdi	NOUN	_	Definite=Def|Gender=Masc|Number=Plur	2	obl	_	_
7	og	og	CCONJ	_	_	8	cc	_	_
8	holdningene	holdning	NOUN	_	Definite=Def|Gender=Fem|Number=Plur	6	conj	_	_
9	vi	vi	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	10	nsubj	_	_
10	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	8	acl:relcl	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	2	punct	_	SpaceAfter=No
12	»	$"	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 acl:relcl	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Eller	eller	CCONJ	_	_	4	cc	_	_
2	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	cop	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
4	Sacha	Sacha	PROPN	_	_	0	root	_	_
5	Baron	Baron	PROPN	_	_	4	flat:name	_	_
6	Cohen	Cohen	PROPN	_	_	4	flat:name	_	_
7	han	han	PRON	_	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
8	siktet	sikte	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	acl:relcl	_	_
9	til	til	ADP	_	_	8	compound:prt	_	SpaceAfter=No
10	?	$?	PUNCT	_	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Nynorsk)

This relation is a language-specific subtype of [acl]().

3484 nodes (1%) are attached to their parents as `acl:relcl`.

3475 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.52898966704937.

The following 34 pairs of parts of speech are connected with `acl:relcl`: [no-pos/NOUN]()-[no-pos/VERB]() (2188; 63% instances), [no-pos/PRON]()-[no-pos/VERB]() (611; 18% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (142; 4% instances), [no-pos/PROPN]()-[no-pos/VERB]() (132; 4% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (105; 3% instances), [no-pos/ADJ]()-[no-pos/VERB]() (69; 2% instances), [no-pos/PRON]()-[no-pos/ADJ]() (49; 1% instances), [no-pos/PRON]()-[no-pos/NOUN]() (40; 1% instances), [no-pos/DET]()-[no-pos/VERB]() (27; 1% instances), [no-pos/NUM]()-[no-pos/VERB]() (21; 1% instances), [no-pos/NOUN]()-[no-pos/ADP]() (19; 1% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (15; 0% instances), [no-pos/NOUN]()-[no-pos/PRON]() (10; 0% instances), [no-pos/PROPN]()-[no-pos/ADJ]() (8; 0% instances), [no-pos/NOUN]()-[no-pos/ADV]() (7; 0% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (5; 0% instances), [no-pos/PRON]()-[no-pos/ADP]() (5; 0% instances), [no-pos/NOUN]()-[no-pos/DET]() (4; 0% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (3; 0% instances), [no-pos/PRON]()-[no-pos/ADV]() (3; 0% instances), [no-pos/ADJ]()-[no-pos/ADP]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (2; 0% instances), [no-pos/DET]()-[no-pos/ADJ]() (2; 0% instances), [no-pos/DET]()-[no-pos/ADP]() (2; 0% instances), [no-pos/NUM]()-[no-pos/ADJ]() (2; 0% instances), [no-pos/PRON]()-[no-pos/PROPN]() (2; 0% instances), [no-pos/X]()-[no-pos/VERB]() (2; 0% instances), [no-pos/NUM]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/PRON]()-[no-pos/DET]() (1; 0% instances), [no-pos/PRON]()-[no-pos/PRON]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/ADP]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/DET]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/PRON]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:relcl	color:blue
1	Dette	dette	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	døme	døme	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	0	root	_	_
4	på	på	ADP	_	_	6	case	_	_
5	ulike	ulik	ADJ	_	Degree=Pos|Number=Plur	6	amod	_	_
6	økonomiar	økonomi	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	3	nmod	_	_
7	som	som	PRON	_	PronType=Rel	9	nsubj	_	_
8	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	makta	makte	VERB	_	VerbForm=Part	6	acl:relcl	_	_
10	omstilling	omstilling	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	9	obj	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl:relcl	color:blue
1	Du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	_	_
2	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	alt	alt	ADV	_	_	4	advmod	_	_
4	fått	få	VERB	_	VerbForm=Part	0	root	_	_
5	med	med	ADP	_	_	6	case	_	_
6	deg	du	PRON	_	Animacy=Hum|Case=Acc|Number=Sing|Person=2|PronType=Prs	4	obl	_	_
7	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	obj	_	_
8	alle	all	DET	_	Number=Plur|PronType=Tot	9	det	_	_
9	grekarar	grekar	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	10	nsubj	_	_
10	veit	vite	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	SpaceAfter=No
11	:	$:	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 acl:relcl	color:blue
1	Svart	svart	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	2	amod	_	_
2	tv	tv	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
3	og	og	CCONJ	_	_	5	cc	_	_
4	kvit	kvit	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	5	amod	_	_
5	tv	tv	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	2	conj	_	SpaceAfter=No
6	,	$,	PUNCT	_	_	5	punct	_	_
7	som	som	PRON	_	PronType=Rel	10	nsubj	_	_
8	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	10	cop	_	_
9	heilt	heil	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	10	advmod	_	_
10	lik	lik	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	5	acl:relcl	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	2	punct	_	_

~~~


