

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is a language-specific subtype of [acl]().
There are also 2 other language-specific subtypes of `acl`: [acl:inf](), [acl:relcl]().

2576 nodes (1%) are attached to their parents as `acl:part`.

2396 instances of `acl:part` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.34316770186335.

The following 23 pairs of parts of speech are connected with `acl:part`: [pt-pos/NOUN]()-[pt-pos/VERB]() (1587; 62% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (688; 27% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (176; 7% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (36; 1% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (22; 1% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (14; 1% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (14; 1% instances), [pt-pos/PART]()-[pt-pos/VERB]() (10; 0% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (7; 0% instances), [pt-pos/X]()-[pt-pos/VERB]() (4; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/ADP]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/AUX]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/PUNCT]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl:part	color:blue
1	Tome	_	VERB	VERB	_	0	root	_	_
2	cuidado	_	NOUN	NOUN	_	1	obj	_	_
3	com	_	ADP	ADP	_	4	case	_	_
4	inimigos	_	NOUN	NOUN	_	2	nmod	_	_
5	declarados	_	VERB	VERB	_	4	acl:part	_	SpaceAfter=No
6	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl:part	color:blue
1	Muitos	_	PRON	PRON	_	2	nsubj	_	_
2	aprendem	_	VERB	VERB	_	0	root	_	_
3	errando	_	VERB	VERB	_	2	acl:part	_	SpaceAfter=No
4	,	_	PUNCT	.	_	5	punct	_	_
5	infelizmente	_	ADV	ADV	_	2	advmod	_	SpaceAfter=No
6	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl:part	color:blue
1	Foi	_	VERB	VERB	_	4	cop	_	_
2	o	_	DET	DET	_	4	det	_	_
3	primeiro	_	ADJ	ADJ	_	4	amod	_	_
4	RPG	_	PROPN	PNOUN	_	0	root	_	_
5	baseado	_	VERB	VERB	_	4	acl:part	_	_
6	em	_	ADP	ADP	_	7	case	_	_
7	sistema	_	NOUN	NOUN	_	5	nmod	_	_
8	de	_	ADP	ADP	_	9	case	_	_
9	perícias	_	NOUN	NOUN	_	7	nmod	_	SpaceAfter=No
10	.	_	PUNCT	.	_	4	punct	_	_

~~~


