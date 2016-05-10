

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

3363 nodes (1%) are attached to their parents as `acl`.

3272 instances of `acl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.71840618495391.

The following 6 pairs of parts of speech are connected with `acl`: [it-pos/NOUN]()-[it-pos/VERB]() (3071; 91% instances), [it-pos/PROPN]()-[it-pos/VERB]() (163; 5% instances), [it-pos/PRON]()-[it-pos/VERB]() (112; 3% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (11; 0% instances), [it-pos/NOUN]()-[it-pos/ADJ]() (5; 0% instances), [it-pos/NOUN]()-[it-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 acl	color:blue
1	Esodo	esodo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
2	controllato	controllare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	1	acl	_	_
3	a	a	ADP	E	_	4	case	_	_
4	Civitavecchia	Civitavecchia	PROPN	SP	_	1	nmod	_	_
5	:	:	PUNCT	FC	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 acl	color:blue
1	Evacuata	evacuare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	acl	_	_
2	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Tate	Tate	PROPN	SP	_	0	root	_	_
4	Gallery	Gallery	PROPN	SP	_	3	name	_	_
5	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl	color:blue
1	Ma	ma	CONJ	CC	_	4	cc	_	_
2	non	non	ADV	BN	PronType=Neg	4	neg	_	_
3	gli	lo	PRON	PC	Gender=Masc|Number=Sing|Person=3|PronType=Clit	4	iobj	_	_
4	chiedete	chiedere	VERB	V	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
5	qualcosa	qualcosa	PRON	PI	Number=Sing|PronType=Ind	4	dobj	_	_
6	da	da	ADP	E	_	7	mark	_	_
7	bere	bere	VERB	V	VerbForm=Inf	5	acl	_	_
8	.	.	PUNCT	FS	_	4	punct	_	_

~~~


