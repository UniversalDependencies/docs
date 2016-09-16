

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is a language-specific subtype of [mark]().

764 nodes (3%) are attached to their parents as `mark:prt`.

745 instances of `mark:prt` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.06937172774869.

The following 19 pairs of parts of speech are connected with `mark:prt`: [ga-pos/VERB]()-[ga-pos/PART]() (526; 69% instances), [ga-pos/ADJ]()-[ga-pos/PART]() (131; 17% instances), [ga-pos/ADJ]()-[ga-pos/NOUN]() (40; 5% instances), [ga-pos/VERB]()-[ga-pos/SCONJ]() (22; 3% instances), [ga-pos/NUM]()-[ga-pos/PART]() (9; 1% instances), [ga-pos/NOUN]()-[ga-pos/PART]() (7; 1% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (6; 1% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (5; 1% instances), [ga-pos/ADJ]()-[ga-pos/ADV]() (4; 1% instances), [ga-pos/VERB]()-[ga-pos/X]() (3; 0% instances), [ga-pos/ADJ]()-[ga-pos/VERB]() (2; 0% instances), [ga-pos/NOUN]()-[ga-pos/SCONJ]() (2; 0% instances), [ga-pos/ADP]()-[ga-pos/SCONJ]() (1; 0% instances), [ga-pos/NUM]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/X]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/CONJ]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/VERB]() (1; 0% instances), [ga-pos/X]()-[ga-pos/PART]() (1; 0% instances), [ga-pos/X]()-[ga-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mark:prt	color:blue
1	Seasadh	seas	VERB	VTI	Mood=Ind|Tense=Past|Voice=Auto	0	root	_	_
2	leis	le	ADP	Simp	_	4	case	_	_
3	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	diúltú	diúltú	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Sing	1	nmod	_	_
5	nuair	nuair	SCONJ	Subord	_	7	mark	_	_
6	a	a	PART	Vb	PartType=Vb|PronType=Rel	7	mark:prt	_	_
7	rinne	déan	VERB	VTI	Mood=Ind|Tense=Past	1	advcl	_	_
8	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	7	nsubj	_	_
9	achomharc	achomharc	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	7	dobj	_	_
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark:prt	color:blue
1	Níor	níor	PART	Vb	Negative=Neg|PartType=Vb|Tense=Past	2	neg	_	_
2	tháinig	tar	VERB	VI	Form=Len|Mood=Ind|Negative=Neg|Tense=Past	0	root	_	_
3	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
4	go	go	PART	Ad	PartType=Ad	5	mark:prt	_	_
5	fóill	fóill	ADJ	Adj	Degree=Pos	2	advmod	_	_
6	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark:prt	color:blue
1	(	(	PUNCT	Punct	_	2	punct	_	_
2	postas	postas	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	0	root	_	_
3	níos	níos	NOUN	Subst	Number=Sing|PartType=Comp	4	mark:prt	_	_
4	mó	mór	ADJ	Adj	Degree=Cmp,Sup	2	amod	_	_
5	)	)	PUNCT	Punct	_	4	punct	_	_
6	.	.	PUNCT	.	_	2	punct	_	_

~~~


