

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

2864 nodes (1%) are attached to their parents as `neg`.

2092 instances of `neg` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.60125698324022.

The following 16 pairs of parts of speech are connected with `neg`: [no-pos/VERB]()-[no-pos/ADV]() (1842; 64% instances), [no-pos/ADJ]()-[no-pos/ADV]() (409; 14% instances), [no-pos/NOUN]()-[no-pos/ADV]() (243; 8% instances), [no-pos/NOUN]()-[no-pos/DET]() (173; 6% instances), [no-pos/ADV]()-[no-pos/ADV]() (96; 3% instances), [no-pos/PRON]()-[no-pos/ADV]() (44; 2% instances), [no-pos/PROPN]()-[no-pos/ADV]() (15; 1% instances), [no-pos/DET]()-[no-pos/ADV]() (11; 0% instances), [no-pos/SCONJ]()-[no-pos/ADV]() (10; 0% instances), [no-pos/ADP]()-[no-pos/ADV]() (8; 0% instances), [no-pos/PROPN]()-[no-pos/DET]() (4; 0% instances), [no-pos/ADJ]()-[no-pos/DET]() (3; 0% instances), [no-pos/DET]()-[no-pos/DET]() (2; 0% instances), [no-pos/INTJ]()-[no-pos/ADV]() (2; 0% instances), [no-pos/AUX]()-[no-pos/ADV]() (1; 0% instances), [no-pos/NUM]()-[no-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 neg	color:blue
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
14	valgseier	valgseier	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	10	nmod	_	_
15	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 neg	color:blue
1	Risikofritt	risikofri	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
2	er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	1	expl	_	_
4	ikke	ikke	ADV	_	_	1	neg	_	_
5	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 neg	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	expl	_	_
2	er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	7	cop	_	_
3	ikke	ikke	ADV	_	_	7	neg	_	_
4	bare	bare	ADV	_	_	7	advmod	_	_
5	de	de	DET	_	Number=Plur|PronType=Dem	7	det	_	_
6	slemme	slem	ADJ	_	Degree=Pos|Number=Plur	7	amod	_	_
7	naturkreftene	naturkraft	NOUN	_	Definite=Def|Gender=Fem|Number=Plur	0	root	_	_
8	som	som	PRON	_	PronType=Rel	9	nsubj	_	_
9	truer	true	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	_
10	Venezia	Venezia	PROPN	_	_	9	dobj	_	_
11	.	$.	PUNCT	_	_	7	punct	_	_

~~~


