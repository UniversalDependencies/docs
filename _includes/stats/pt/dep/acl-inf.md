

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is a language-specific subtype of [acl]().
There are also 2 other language-specific subtypes of `acl`: [acl:part](), [acl:relcl]().

56 nodes (0%) are attached to their parents as `acl:inf`.

55 instances of `acl:inf` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.16071428571429.

The following 4 pairs of parts of speech are connected with `acl:inf`: [pt-pos/NOUN]()-[pt-pos/VERB]() (38; 68% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (8; 14% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (8; 14% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (2; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:inf	color:blue
1	A	_	DET	DET	_	3	det	_	_
2	única	_	ADJ	ADJ	_	3	amod	_	_
3	coisa	_	NOUN	NOUN	_	0	root	_	_
4	a	_	ADP	ADP	_	5	mark	_	_
5	fazer	_	VERB	VERB	_	3	acl:inf	_	_
6	agora	_	ADV	ADV	_	5	advmod	_	_
7	era	_	VERB	VERB	_	3	cop	_	_
8	atacar	_	VERB	VERB	_	3	csubj	_	_
9	a	_	DET	DET	_	10	det	_	_
10	posição	_	NOUN	NOUN	_	8	obj	_	_
11	de	_	ADP	ADP	_	12	case	_	_
12	Valmy	_	PROPN	PNOUN	_	10	nmod	_	SpaceAfter=No
13	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:inf	color:blue
1	Patrick	_	PROPN	PNOUN	_	2	nsubj	_	_
2	vê	_	VERB	VERB	_	0	root	_	_
3	Sandro	_	PROPN	PNOUN	_	2	obj	_	_
4	ser	_	AUX	AUX	_	5	aux:pass	_	_
5	levado	_	VERB	VERB	_	3	acl:inf	_	_
6	por	por	ADP	ADP	_	8	case	_	_
7	os	o	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	policiais	_	NOUN	NOUN	_	5	nmod	_	SpaceAfter=No
9	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:inf	color:blue
1	Não	_	ADV	ADV	Polarity=Neg	2	advmod	_	_
2	tenho	_	VERB	VERB	_	0	root	_	_
3	nada	_	PRON	PRON	_	2	obj	_	_
4	a	_	ADP	ADP	_	5	mark	_	_
5	perder	_	VERB	VERB	_	3	acl:inf	_	SpaceAfter=No
6	!	_	PUNCT	.	_	2	punct	_	_

~~~


