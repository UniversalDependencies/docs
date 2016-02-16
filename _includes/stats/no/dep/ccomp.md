

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

2215 nodes (1%) are attached to their parents as `ccomp`.

2202 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.60180586907449.

The following 15 pairs of parts of speech are connected with `ccomp`: [no-pos/VERB]()-[no-pos/VERB]() (1694; 76% instances), [no-pos/VERB]()-[no-pos/ADJ]() (277; 13% instances), [no-pos/VERB]()-[no-pos/NOUN]() (193; 9% instances), [no-pos/VERB]()-[no-pos/ADP]() (11; 0% instances), [no-pos/VERB]()-[no-pos/ADV]() (11; 0% instances), [no-pos/VERB]()-[no-pos/PRON]() (8; 0% instances), [no-pos/VERB]()-[no-pos/DET]() (6; 0% instances), [no-pos/ADJ]()-[no-pos/VERB]() (5; 0% instances), [no-pos/VERB]()-[no-pos/PROPN]() (4; 0% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/ADV]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/ADV]()-[no-pos/VERB]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/VERB]() (1; 0% instances), [no-pos/PRON]()-[no-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	Jeg	jeg	PRON	_	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	håper	håpe	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	du	du	PRON	_	Animacy=Anim|Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	_
4	virkelig	virkelig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	5	advmod	_	_
5	forteller	fortelle	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
6	nordmennene	nordmann	NOUN	_	Definite=Def|Gender=Masc|Number=Plur	5	iobj	_	_
7	hva	hva	PRON	_	PronType=Int	9	dobj	_	_
8	vi	vi	PRON	_	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	9	nsubj	_	_
9	synes	synes	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
10	om	om	ADP	_	_	11	case	_	_
11	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	nmod	_	_
12	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	Regjeringen	regjering	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	_
2	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	fastslått	fastslå	VERB	_	VerbForm=Part	0	root	_	_
4	at	at	SCONJ	_	_	7	mark	_	_
5	røyking	røyking	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	7	nsubj	_	_
6	er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	farlig	farlig	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	3	ccomp	_	_
8	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	Noen	noen	PRON	_	Gender=Fem,Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	trodde	tro	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
4	var	være	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	cop	_	_
5	spøk	spøk	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	2	ccomp	_	_
6	:	$:	PUNCT	_	_	2	punct	_	_

~~~


