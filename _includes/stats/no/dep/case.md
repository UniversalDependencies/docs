

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

32681 nodes (11%) are attached to their parents as `case`.

32452 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.58743612496558.

The following 11 pairs of parts of speech are connected with `case`: [no-pos/NOUN]()-[no-pos/ADP]() (23274; 71% instances), [no-pos/PROPN]()-[no-pos/ADP]() (5271; 16% instances), [no-pos/PRON]()-[no-pos/ADP]() (1790; 5% instances), [no-pos/NUM]()-[no-pos/ADP]() (778; 2% instances), [no-pos/ADJ]()-[no-pos/ADP]() (770; 2% instances), [no-pos/DET]()-[no-pos/ADP]() (291; 1% instances), [no-pos/VERB]()-[no-pos/ADP]() (264; 1% instances), [no-pos/ADV]()-[no-pos/ADP]() (142; 0% instances), [no-pos/ADP]()-[no-pos/ADP]() (88; 0% instances), [no-pos/X]()-[no-pos/ADP]() (10; 0% instances), [no-pos/SYM]()-[no-pos/ADP]() (3; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	Thomassen	Thomassen	PROPN	_	_	4	nsubj	_	_
2	er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	på	på	ADP	_	_	4	case	_	_
4	vei	vei	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
5	til	til	ADP	_	_	8	case	_	_
6	sin	sin	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	8	nmod	_	_
7	neste	neste	DET	_	Definite=Def|PronType=Dem	8	det	_	_
8	gjerning	gjerning	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
9	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	var	være	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	cop	_	_
3	en	en	DET	_	Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
4	fremmed	fremmed	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	5	amod	_	_
5	tanke	tanke	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
6	for	for	ADP	_	_	7	case	_	_
7	Borten	Borten	PROPN	_	_	5	nmod	_	SpaceAfter=No
8	.	$.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 case	color:blue
1	Man	man	PRON	_	Animacy=Anim|Case=Nom|Number=Sing|PronType=Prs	2	nsubj	_	_
2	bryter	bryte	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	anstendighet	anstendighet	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	2	dobj	_	_
4	for	for	ADP	_	_	6	mark	_	_
5	å	å	PART	_	_	6	mark	_	_
6	si	si	VERB	_	VerbForm=Inf	2	advcl	_	_
7	seg	seg	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	6	dobj	_	_
8	enig	enig	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	6	xcomp	_	_
9	i	i	ADP	_	_	10	case	_	_
10	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	nmod	_	_
11	alle	alle	PRON	_	Number=Plur|Person=3|PronType=Prs,Tot	13	nsubj	_	_
12	er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	13	cop	_	_
13	enige	enig	ADJ	_	Degree=Pos|Number=Plur	10	acl:relcl	_	_
14	om	om	ADP	_	_	13	nmod	_	SpaceAfter=No
15	.	$.	PUNCT	_	_	2	punct	_	_

~~~


