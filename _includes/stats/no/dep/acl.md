

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

1769 nodes (1%) are attached to their parents as `acl`.

1708 instances of `acl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.527981910684.

The following 34 pairs of parts of speech are connected with `acl`: [no-pos/NOUN]()-[no-pos/VERB]() (1214; 69% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (119; 7% instances), [no-pos/PRON]()-[no-pos/NOUN]() (85; 5% instances), [no-pos/PRON]()-[no-pos/VERB]() (54; 3% instances), [no-pos/ADJ]()-[no-pos/VERB]() (47; 3% instances), [no-pos/PRON]()-[no-pos/ADJ]() (43; 2% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (41; 2% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (41; 2% instances), [no-pos/PROPN]()-[no-pos/VERB]() (35; 2% instances), [no-pos/PROPN]()-[no-pos/ADJ]() (26; 1% instances), [no-pos/DET]()-[no-pos/VERB]() (7; 0% instances), [no-pos/NOUN]()-[no-pos/PRON]() (7; 0% instances), [no-pos/NOUN]()-[no-pos/ADV]() (6; 0% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (4; 0% instances), [no-pos/NOUN]()-[no-pos/NUM]() (4; 0% instances), [no-pos/NUM]()-[no-pos/VERB]() (4; 0% instances), [no-pos/PROPN]()-[no-pos/ADV]() (4; 0% instances), [no-pos/NOUN]()-[no-pos/ADP]() (3; 0% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (3; 0% instances), [no-pos/PROPN]()-[no-pos/NUM]() (3; 0% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (2; 0% instances), [no-pos/ADV]()-[no-pos/VERB]() (2; 0% instances), [no-pos/NOUN]()-[no-pos/DET]() (2; 0% instances), [no-pos/PRON]()-[no-pos/ADV]() (2; 0% instances), [no-pos/PRON]()-[no-pos/PROPN]() (2; 0% instances), [no-pos/DET]()-[no-pos/PRON]() (1; 0% instances), [no-pos/NUM]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/PRON]()-[no-pos/ADP]() (1; 0% instances), [no-pos/PRON]()-[no-pos/DET]() (1; 0% instances), [no-pos/PRON]()-[no-pos/NUM]() (1; 0% instances), [no-pos/PRON]()-[no-pos/X]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/DET]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/VERB]()-[no-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 acl	color:blue
1	Ap	Ap	PROPN	_	_	2	nsubj	_	_
2	ønsker	ønske	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ikke	ikke	ADV	_	_	2	neg	_	_
4	å	å	PART	_	_	5	mark	_	_
5	så	så	VERB	_	VerbForm=Inf	2	xcomp	_	_
6	tvil	tvil	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	dobj	_	_
7	om	om	ADP	_	_	10	mark	_	_
8	at	at	SCONJ	_	_	10	mark	_	_
9	de	de	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	10	nsubj	_	_
10	tror	tro	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	6	acl	_	_
11	på	på	ADP	_	_	14	case	_	_
12	ny	ny	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	14	amod	_	_
13	rødgrønn	rødgrønn	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	14	amod	_	_
14	valgseier	valgseier	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	10	nmod	_	SpaceAfter=No
15	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 acl	color:blue
1	Boken	bok	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	3	nsubjpass	_	_
2	ble	bli	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	auxpass	_	_
3	filmatisert	filmatisere	VERB	_	VerbForm=Part	0	root	_	_
4	og	og	CONJ	_	_	3	cc	_	_
5	vist	vise	VERB	_	VerbForm=Part	3	conj	_	_
6	som	som	ADP	_	_	7	mark	_	_
7	serie	serie	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	1	acl	_	_
8	på	på	ADP	_	_	9	case	_	_
9	NRK	NRK	PROPN	_	_	5	nmod	_	_
10	tidligere	tidlig	ADJ	_	Degree=Cmp	12	advmod	_	_
11	i	i	ADP	_	_	12	case	_	_
12	år	år	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	5	nmod	_	SpaceAfter=No
13	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 acl	color:blue
1	Han	han	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	i	i	ADP	_	_	5	case	_	_
4	alle	all	DET	_	Number=Plur|PronType=Tot	5	det	_	_
5	fall	fall	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	2	nmod	_	_
6	min	min	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	7	nmod	_	_
7	respekt	respekt	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	2	dobj	_	SpaceAfter=No
8	,	$,	PUNCT	_	_	7	punct	_	_
9	som	som	ADP	_	_	10	mark	_	_
10	menneske	menneske	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	1	acl	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~


