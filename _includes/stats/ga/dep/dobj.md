

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

863 nodes (4%) are attached to their parents as `dobj`.

503 instances of `dobj` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.6234067207416.

The following 26 pairs of parts of speech are connected with `dobj`: [ga-pos/VERB]()-[ga-pos/NOUN]() (348; 40% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (257; 30% instances), [ga-pos/VERB]()-[ga-pos/PART]() (106; 12% instances), [ga-pos/VERB]()-[ga-pos/PRON]() (73; 8% instances), [ga-pos/NOUN]()-[ga-pos/PRON]() (27; 3% instances), [ga-pos/VERB]()-[ga-pos/PROPN]() (11; 1% instances), [ga-pos/VERB]()-[ga-pos/X]() (6; 1% instances), [ga-pos/NOUN]()-[ga-pos/PROPN]() (5; 1% instances), [ga-pos/NOUN]()-[ga-pos/PART]() (4; 0% instances), [ga-pos/X]()-[ga-pos/NOUN]() (4; 0% instances), [ga-pos/VERB]()-[ga-pos/ADP]() (3; 0% instances), [ga-pos/VERB]()-[ga-pos/SCONJ]() (3; 0% instances), [ga-pos/PROPN]()-[ga-pos/NOUN]() (2; 0% instances), [ga-pos/SCONJ]()-[ga-pos/NOUN]() (2; 0% instances), [ga-pos/ADJ]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/ADP]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/ADP]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/NUM]() (1; 0% instances), [ga-pos/PART]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/CONJ]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/NUM]() (1; 0% instances), [ga-pos/X]()-[ga-pos/PART]() (1; 0% instances), [ga-pos/X]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/X]()-[ga-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 dobj	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dobj	color:blue
1	Tabharfadsa	tabharfads	NOUN	Noun	Case=Com|Gender=Masc|Number=Plur	0	root	_	_
2	náire	náire	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	1	dobj	_	_
3	fén	faoi	ADP	Art	Number=Sing|PronType=Art	4	case	_	_
4	bpoll	poll	NOUN	Noun	Case=Com|Form=Ecl|Gender=Masc|Number=Sing	1	nmod	_	_
5	dóibh	do	ADP	Prep	Number=Plur|Person=3	1	nmod:prep	_	_
6	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 dobj	color:blue
1	Seo	seo	VERB	Cop	PronType=Dem|VerbForm=Cop	0	root	_	_
2	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	fear	fear	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Sing	1	xcomp:pred	_	_
4	a	a	PART	Vb	PartType=Vb|PronType=Rel	5	dobj	_	_
5	chonaic	feic	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	1	csubj:cleft	_	_
6	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	7	det	_	_
7	bhean	bean	NOUN	Noun	Case=Com|Definite=Def|Gender=Fem|Number=Sing	5	nsubj	_	_
8	.	.	PUNCT	.	_	1	punct	_	_

~~~


