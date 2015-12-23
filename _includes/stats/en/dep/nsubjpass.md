

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

1402 nodes (1%) are attached to their parents as `nsubjpass`.

1365 instances of `nsubjpass` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.84022824536377.

The following 11 pairs of parts of speech are connected with `nsubjpass`: [en-pos/VERB]()-[en-pos/NOUN]() (713; 51% instances), [en-pos/VERB]()-[en-pos/PRON]() (415; 30% instances), [en-pos/VERB]()-[en-pos/DET]() (118; 8% instances), [en-pos/VERB]()-[en-pos/PROPN]() (112; 8% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (12; 1% instances), [en-pos/VERB]()-[en-pos/ADJ]() (10; 1% instances), [en-pos/ADJ]()-[en-pos/PRON]() (7; 0% instances), [en-pos/VERB]()-[en-pos/SYM]() (5; 0% instances), [en-pos/VERB]()-[en-pos/NUM]() (4; 0% instances), [en-pos/ADV]()-[en-pos/PRON]() (3; 0% instances), [en-pos/NOUN]()-[en-pos/PRON]() (3; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubjpass	color:blue
1	In	in	ADP	IN	_	3	case	_	_
2	other	other	ADJ	JJ	Degree=Pos	3	amod	_	_
3	words	word	NOUN	NNS	Number=Plur	7	nmod	_	_
4	the	the	DET	DT	Definite=Def|PronType=Art	5	det	_	_
5	table	table	NOUN	NN	Number=Sing	7	nsubjpass	_	_
6	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	auxpass	_	_
7	set	set	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubjpass	color:blue
1	Four	four	NUM	CD	NumType=Card	2	nummod	_	_
2	months	month	NOUN	NNS	Number=Plur	3	nmod:npmod	_	_
3	later	later	ADV	RB	_	7	advmod	_	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	_	_
5	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubjpass	_	_
6	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	7	auxpass	_	_
7	married	marry	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubjpass	color:blue
1	One	one	NUM	CD	NumType=Card	5	nsubj	_	_
2	of	of	ADP	IN	_	4	case	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	_	_
4	pictures	picture	NOUN	NNS	Number=Plur	1	nmod	_	_
5	shows	show	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	a	a	DET	DT	Definite=Ind|PronType=Art	7	det	_	_
7	flag	flag	NOUN	NN	Number=Sing	5	dobj	_	_
8	that	that	DET	WDT	PronType=Rel	10	nsubjpass	_	_
9	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	auxpass	_	_
10	found	find	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	7	acl:relcl	_	_
11	in	in	ADP	IN	_	12	case	_	_
12	Fallujah	Fallujah	PROPN	NNP	Number=Sing	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	5	punct	_	_

~~~


