

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

7109 nodes (2%) are attached to their parents as `acl`.

6711 instances of `acl` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.80686453790969.

The following 26 pairs of parts of speech are connected with `acl`: [fr-pos/NOUN]()-[fr-pos/VERB]() (4256; 60% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (1751; 25% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (516; 7% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (254; 4% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (210; 3% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (47; 1% instances), [fr-pos/NUM]()-[fr-pos/VERB]() (20; 0% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (9; 0% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (8; 0% instances), [fr-pos/PROPN]()-[fr-pos/ADJ]() (7; 0% instances), [fr-pos/X]()-[fr-pos/VERB]() (5; 0% instances), [fr-pos/PRON]()-[fr-pos/ADJ]() (4; 0% instances), [fr-pos/ADP]()-[fr-pos/VERB]() (3; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (3; 0% instances), [fr-pos/SYM]()-[fr-pos/VERB]() (3; 0% instances), [fr-pos/INTJ]()-[fr-pos/VERB]() (2; 0% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/DET]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/SCONJ]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 acl	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	verra	voir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	puits	puits	NOUN	_	Gender=Masc|Number=Sing	2	dobj	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	plus	plus	ADV	_	_	7	advmod	_	_
7	profond	profond	ADJ	_	Gender=Masc|Number=Sing	4	amod	_	_
8	de	de	ADP	_	_	9	case	_	_
9	France	France	PROPN	_	_	4	nmod	_	_
10	porter	porter	VERB	_	VerbForm=Inf	4	acl	_	_
11	son	son	DET	_	Gender=Masc|Number=Sing|PronType=Prs	12	nmod:poss	_	_
12	nom	nom	NOUN	_	Gender=Masc|Number=Sing	10	dobj	_	_
13	:	:	PUNCT	_	_	2	punct	_	_
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	fini	finir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	par	par	ADP	_	_	6	mark	_	_
5	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	dobj	_	_
6	faire	faire	VERB	_	VerbForm=Inf	3	acl	_	_
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 acl	color:blue
1	Secourue	secourir	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	5	acl	_	_
2	par	par	ADP	_	_	3	case	_	_
3	Mitterrand	Mitterrand	PROPN	_	_	1	nmod	_	_
4	,	,	PUNCT	_	_	7	punct	_	_
5	Marguerite	Marguerite	PROPN	_	_	7	nsubj	_	_
6	Duras	Duras	PROPN	_	_	5	name	_	_
7	réussit	réussir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	à	à	ADP	_	_	10	mark	_	_
9	s'	se	PRON	_	Person=3|PronType=Prs	10	dobj	_	_
10	échapper	échapper	VERB	_	VerbForm=Inf	7	acl	_	_
11	.	.	PUNCT	_	_	7	punct	_	_

~~~


