

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

12677 nodes (5%) are attached to their parents as `root`.

12677 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.59493571034156.

The following 12 pairs of parts of speech are connected with `root`: [it-pos/ROOT]()-[it-pos/VERB]() (8809; 69% instances), [it-pos/ROOT]()-[it-pos/NOUN]() (2092; 17% instances), [it-pos/ROOT]()-[it-pos/PRON]() (691; 5% instances), [it-pos/ROOT]()-[it-pos/ADJ]() (689; 5% instances), [it-pos/ROOT]()-[it-pos/PROPN]() (221; 2% instances), [it-pos/ROOT]()-[it-pos/NUM]() (86; 1% instances), [it-pos/ROOT]()-[it-pos/ADV]() (72; 1% instances), [it-pos/ROOT]()-[it-pos/INTJ]() (6; 0% instances), [it-pos/ROOT]()-[it-pos/AUX]() (4; 0% instances), [it-pos/ROOT]()-[it-pos/SCONJ]() (3; 0% instances), [it-pos/ROOT]()-[it-pos/X]() (3; 0% instances), [it-pos/ROOT]()-[it-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
1	I	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	tre	tre	NUM	N	NumType=Card	6	nsubj	_	_
3	avevano	avere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	6	aux	_	_
4	da	da	ADP	E	_	5	case	_	_
5	poco	poco	ADV	B	_	6	advmod	_	_
6	lasciato	lasciare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	cima	cima	NOUN	S	Gender=Fem|Number=Sing	6	dobj	_	_
9	e	e	CONJ	CC	_	6	cc	_	_
10	stavano	stare	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	11	aux	_	_
11	cominciando	cominciare	VERB	V	VerbForm=Ger	6	conj	_	_
12	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	discesa	discesa	NOUN	S	Gender=Fem|Number=Sing	11	dobj	_	_
14	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Sorpresa	sorpresa	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
2	in	in	ADP	E	_	4	case	_	_
3	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	sorpresa	sorpresa	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	_
5	:	:	PUNCT	FC	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
2	stata	essere	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	cop	_	_
3	quello	quello	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	0	root	_	_
4	che	che	PRON	PR	PronType=Rel	7	dobj	_	_
5	ci	ci	PRON	PC	PronType=Clit	7	expl	_	_
6	si	si	PRON	PC	Person=3|PronType=Clit	7	expl:impers	_	_
7	attendeva	attendere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	acl:relcl	_	_
8	:	:	PUNCT	FC	_	3	punct	_	_

~~~


