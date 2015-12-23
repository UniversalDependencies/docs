

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

3518 nodes (1%) are attached to their parents as `acl`.

3416 instances of `acl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.7640704945992.

The following 11 pairs of parts of speech are connected with `acl`: [it-pos/NOUN]()-[it-pos/VERB]() (3064; 87% instances), [it-pos/PROPN]()-[it-pos/VERB]() (163; 5% instances), [it-pos/ADJ]()-[it-pos/VERB]() (148; 4% instances), [it-pos/PRON]()-[it-pos/VERB]() (115; 3% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (11; 0% instances), [it-pos/ADV]()-[it-pos/VERB]() (5; 0% instances), [it-pos/NOUN]()-[it-pos/ADJ]() (5; 0% instances), [it-pos/NUM]()-[it-pos/VERB]() (3; 0% instances), [it-pos/NOUN]()-[it-pos/AUX]() (2; 0% instances), [it-pos/DET]()-[it-pos/VERB]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/PRON]() (1; 0% instances).


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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 acl	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
2	stato	essere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	cop	_	_
3	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	primo	primo	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	0	root	_	_
5	di	di	ADP	E	_	7	case	_	_
6	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	_	_
7	Mayo	Mayo	PROPN	SP	_	4	nmod	_	_
8	a	a	ADP	E	_	9	mark	_	_
9	portar	portare	VERB	V	VerbForm=Inf	4	acl	_	_
10	lo	lo	PRON	PC	Gender=Masc|Number=Sing|Person=3|PronType=Clit	9	dobj	_	_
11	da	da	ADP	E	_	13	case	_	_
12	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	13	det	_	_
13	Inghilterra	Inghilterra	PROPN	SP	_	9	nmod	_	_
14	:	:	PUNCT	FC	_	4	punct	_	_

~~~


