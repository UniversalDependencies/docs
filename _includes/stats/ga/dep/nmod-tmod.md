

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:poss](), [nmod:prep]().

51 nodes (0%) are attached to their parents as `nmod:tmod`.

37 instances of `nmod:tmod` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.11764705882353.

The following 6 pairs of parts of speech are connected with `nmod:tmod`: [ga-pos/VERB]()-[ga-pos/NOUN]() (28; 55% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (10; 20% instances), [ga-pos/VERB]()-[ga-pos/PART]() (9; 18% instances), [ga-pos/ADJ]()-[ga-pos/NOUN]() (2; 4% instances), [ga-pos/ADV]()-[ga-pos/NOUN]() (1; 2% instances), [ga-pos/PROPN]()-[ga-pos/NOUN]() (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 nmod:tmod	color:blue
1	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	1	nsubj	_	_
3	ann	i	ADP	Prep	Gender=Masc|Number=Sing|Person=3	1	xcomp:pred	_	_
4	ar_feadh	ar_feadh	ADP	Cmpd	PrepForm=Cmpd	5	case	_	_
5	bliana	bliain	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	1	nmod:tmod	_	_
6	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 nmod:tmod	color:blue
1	Is	is	VERB	Cop	Tense=Pres|VerbForm=Cop	3	cop	_	_
2	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	5	nmod	_	_
3	Micheal	Micheal	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	0	root	_	_
4	D.	D.	X	Abr	_	3	name	_	_
5	Higgins	Higgins	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	3	name	_	_
6	ba	is	VERB	Cop	PronType=Rel|Tense=Past|VerbForm=Cop	7	cop	_	_
7	chionsiocair	cionsiocair	NOUN	Noun	Case=Com|Form=Len|Gender=Fem|Number=Sing	3	nsubj	_	_
8	leis	le	ADP	Simp	_	7	nmod:prep	_	_
9	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	10	det	_	_
10	Roinn	roinn	NOUN	Noun	Case=Com|Definite=Def|Gender=Fem|Number=Sing	12	dobj	_	_
11	a	a	PART	Inf	PartType=Inf	12	mark	_	_
12	bhunú	bunú	NOUN	Noun	Form=Len|VerbForm=Inf	7	xcomp	_	_
13	sa	i	ADP	Art	Number=Sing|PronType=Art	14	case	_	_
14	bhliain	bliain	NOUN	Noun	Case=Com|Definite=Def|Gender=Fem|Number=Sing	12	nmod:tmod	_	_
15	1992	1992	NUM	Num	_	14	nummod	_	_
16	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:tmod	color:blue
1	An	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	2	det	_	_
2	lá	lá	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
3	a	a	PART	Vb	PartType=Vb|PronType=Rel	4	nmod:tmod	_	_
4	cuireadh	cuir	VERB	VTI	Mood=Ind|Tense=Past|Voice=Auto	2	acl:relcl	_	_
5	Butt	Butt	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	4	dobj	_	_
6	...	...	PUNCT	...	_	2	punct	_	_

~~~


