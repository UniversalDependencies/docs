

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Bokmaal)

This relation is a language-specific subtype of [flat]().
There are also 1 other language-specific subtypes of `flat`: [flat:foreign]().

4771 nodes (2%) are attached to their parents as `flat:name`.

4771 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.40075455879271.

The following 29 pairs of parts of speech are connected with `flat:name`: [no-pos/PROPN]()-[no-pos/PROPN]() (3796; 80% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (402; 8% instances), [no-pos/PROPN]()-[no-pos/ADJ]() (169; 4% instances), [no-pos/PROPN]()-[no-pos/X]() (142; 3% instances), [no-pos/PROPN]()-[no-pos/ADP]() (74; 2% instances), [no-pos/PROPN]()-[no-pos/NUM]() (73; 2% instances), [no-pos/PROPN]()-[no-pos/CCONJ]() (43; 1% instances), [no-pos/PROPN]()-[no-pos/VERB]() (13; 0% instances), [no-pos/PROPN]()-[no-pos/DET]() (9; 0% instances), [no-pos/PROPN]()-[no-pos/PRON]() (8; 0% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (6; 0% instances), [no-pos/NOUN]()-[no-pos/NUM]() (4; 0% instances), [no-pos/NUM]()-[no-pos/NUM]() (4; 0% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (3; 0% instances), [no-pos/VERB]()-[no-pos/ADP]() (3; 0% instances), [no-pos/VERB]()-[no-pos/NOUN]() (3; 0% instances), [no-pos/VERB]()-[no-pos/PROPN]() (3; 0% instances), [no-pos/ADJ]()-[no-pos/ADP]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (2; 0% instances), [no-pos/NOUN]()-[no-pos/CCONJ]() (2; 0% instances), [no-pos/PROPN]()-[no-pos/PART]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/DET]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/DET]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/ADP]() (1; 0% instances), [no-pos/PRON]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/PRON]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/PRON]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Den	den	DET	_	Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
2	albanske	albansk	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	3	amod	_	_
3	ambassador	ambassadør	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	_
4	Aleksander	Aleksander	PROPN	_	_	6	nsubj	_	_
5	Sallabanda	Sallabanda	PROPN	_	_	4	flat:name	_	_
6	fulgte	følge	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	opp	opp	ADP	_	_	6	compound:prt	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat:name	color:blue
1	Vi	vi	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	skyver	skyve	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	opp	opp	ADP	_	_	2	compound:prt	_	_
4	døren	dør	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	2	obj	_	_
5	til	til	ADP	_	_	6	case	_	_
6	Mulligan's	Mulligan's	PROPN	_	_	4	nmod	_	_
7	pub	pub	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	6	flat:name	_	SpaceAfter=No
8	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat:name	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
2	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	nok	nok	ADV	_	_	0	root	_	_
4	å	å	PART	_	_	6	mark	_	_
5	være	være	AUX	_	VerbForm=Inf	6	aux	_	_
6	døpt	døpe	VERB	_	VerbForm=Part	3	csubj	_	_
7	og	og	CCONJ	_	_	8	cc	_	_
8	medlem	medlem	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	6	conj	_	_
9	i	i	ADP	_	_	10	case	_	_
10	Den	Den	PROPN	_	_	8	nmod	_	_
11	norske	norsk	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	10	flat:name	_	_
12	kirke	kirke	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	10	flat:name	_	SpaceAfter=No
13	.	$.	PUNCT	_	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Nynorsk)

This relation is a language-specific subtype of [flat]().
There are also 1 other language-specific subtypes of `flat`: [flat:foreign]().

5434 nodes (2%) are attached to their parents as `flat:name`.

5434 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.43853514906146.

The following 45 pairs of parts of speech are connected with `flat:name`: [no-pos/NOUN]()-[no-pos/PROPN]() (1816; 33% instances), [no-pos/PROPN]()-[no-pos/PROPN]() (1810; 33% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (670; 12% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (309; 6% instances), [no-pos/PROPN]()-[no-pos/X]() (217; 4% instances), [no-pos/PROPN]()-[no-pos/CCONJ]() (170; 3% instances), [no-pos/PROPN]()-[no-pos/ADP]() (135; 2% instances), [no-pos/PROPN]()-[no-pos/ADJ]() (70; 1% instances), [no-pos/PROPN]()-[no-pos/NUM]() (59; 1% instances), [no-pos/NOUN]()-[no-pos/CCONJ]() (35; 1% instances), [no-pos/PROPN]()-[no-pos/VERB]() (25; 0% instances), [no-pos/PROPN]()-[no-pos/DET]() (15; 0% instances), [no-pos/NOUN]()-[no-pos/NUM]() (12; 0% instances), [no-pos/PROPN]()-[no-pos/SYM]() (11; 0% instances), [no-pos/PROPN]()-[no-pos/PRON]() (9; 0% instances), [no-pos/NOUN]()-[no-pos/ADP]() (8; 0% instances), [no-pos/NOUN]()-[no-pos/VERB]() (6; 0% instances), [no-pos/NUM]()-[no-pos/NUM]() (5; 0% instances), [no-pos/NUM]()-[no-pos/PROPN]() (5; 0% instances), [no-pos/DET]()-[no-pos/NOUN]() (4; 0% instances), [no-pos/PROPN]()-[no-pos/ADV]() (4; 0% instances), [no-pos/ADV]()-[no-pos/NOUN]() (3; 0% instances), [no-pos/DET]()-[no-pos/PROPN]() (3; 0% instances), [no-pos/NUM]()-[no-pos/NOUN]() (3; 0% instances), [no-pos/PROPN]()-[no-pos/PART]() (3; 0% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (2; 0% instances), [no-pos/ADV]()-[no-pos/PRON]() (2; 0% instances), [no-pos/ADV]()-[no-pos/VERB]() (2; 0% instances), [no-pos/DET]()-[no-pos/ADJ]() (2; 0% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (2; 0% instances), [no-pos/NOUN]()-[no-pos/DET]() (2; 0% instances), [no-pos/NOUN]()-[no-pos/PART]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/ADP]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/DET]()-[no-pos/DET]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/ADV]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/PRON]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/X]() (1; 0% instances), [no-pos/NUM]()-[no-pos/ADP]() (1; 0% instances), [no-pos/NUM]()-[no-pos/CCONJ]() (1; 0% instances), [no-pos/PRON]()-[no-pos/ADP]() (1; 0% instances), [no-pos/PRON]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/PRON]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/VERB]()-[no-pos/CCONJ]() (1; 0% instances), [no-pos/VERB]()-[no-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	Marie	Marie	NOUN	_	Gender=Fem	5	nsubj	_	_
2	Høeg	Høeg	PROPN	_	_	1	flat:name	_	_
3	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	cop	_	_
4	ikkje	ikkje	ADV	_	Polarity=Neg	5	advmod	_	_
5	åleine	åleine	ADV	_	_	0	root	_	_
6	om	om	ADP	_	_	8	mark	_	_
7	å	å	PART	_	_	8	mark	_	_
8	eksperimentere	eksperimentere	VERB	_	VerbForm=Inf	5	advcl	_	_
9	på	på	ADP	_	_	11	case	_	_
10	denne	denne	DET	_	Gender=Masc|Number=Sing|PronType=Dem	11	det	_	_
11	måten	måte	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
12	.	$.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 flat:name	color:blue
1	I	i	ADP	_	_	2	case	_	_
2	1896	1896	NUM	_	Number=Plur|NumType=Card	3	obl	_	_
3	skipa	skipe	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	Marie	Marie	NOUN	_	Gender=Fem	3	nsubj	_	_
5	Høeg	Høeg	PROPN	_	_	4	flat:name	_	_
6	Hortens	Hortens	PROPN	_	_	3	obj	_	_
7	selskabelige	selskabelig	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	6	flat:name	_	_
8	Diskussionsforening	Diskussionsforening	PROPN	_	_	6	flat:name	_	SpaceAfter=No
9	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat:name	color:blue
1	Tala	tal	NOUN	_	Definite=Def|Gender=Neut|Number=Plur	7	nsubj	_	_
2	Robolis	Robolis	PROPN	_	_	3	nsubj	_	_
3	presenterer	presentere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	SpaceAfter=No
4	,	$,	PUNCT	_	_	1	punct	_	_
5	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	som	som	ADP	_	_	7	case	_	_
7	henta	hente	ADJ	_	Number=Plur|VerbForm=Part	0	root	_	_
8	frå	frå	ADP	_	_	9	case	_	_
9	Sataniske	Sataniske	PROPN	_	_	7	obl	_	_
10	vers	vers	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	9	flat:name	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	7	punct	_	_

~~~


