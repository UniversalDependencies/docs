

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is a language-specific subtype of [acl]().

436 nodes (2%) are attached to their parents as `acl:relcl`.

436 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.15137614678899.

The following 15 pairs of parts of speech are connected with `acl:relcl`: [ga-pos/NOUN]()-[ga-pos/VERB]() (387; 89% instances), [ga-pos/PRON]()-[ga-pos/VERB]() (13; 3% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (9; 2% instances), [ga-pos/ADP]()-[ga-pos/VERB]() (4; 1% instances), [ga-pos/PROPN]()-[ga-pos/VERB]() (4; 1% instances), [ga-pos/ADJ]()-[ga-pos/VERB]() (3; 1% instances), [ga-pos/NOUN]()-[ga-pos/ADJ]() (3; 1% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (3; 1% instances), [ga-pos/CONJ]()-[ga-pos/VERB]() (2; 0% instances), [ga-pos/SCONJ]()-[ga-pos/VERB]() (2; 0% instances), [ga-pos/X]()-[ga-pos/VERB]() (2; 0% instances), [ga-pos/NOUN]()-[ga-pos/X]() (1; 0% instances), [ga-pos/PRON]()-[ga-pos/ADJ]() (1; 0% instances), [ga-pos/PRON]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 acl:relcl	color:blue
1	'	'	PUNCT	Punct	_	15	punct	_	_
2	Tá	bí	VERB	VI	Mood=Ind|Tense=Pres	15	ccomp	_	_
3	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	méid	méid	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	_
5	sin	sin	DET	Det	PronType=Dem	4	det	_	_
6	suimiúil	suimiúil	ADJ	Adj	Degree=Pos	2	xcomp:pred	_	_
7	a	a	PART	Vb	PartType=Vb|PronType=Rel	9	dobj	_	_
8	d'	do	PART	Vb	PartType=Vb	9	mark:prt	_	_
9	inis	inis	VERB	VTI	Mood=Ind|Tense=Past	4	acl:relcl	_	_
10	tú	tú	PRON	Pers	Number=Sing|Person=2	9	nsubj	_	_
11	dom	do	ADP	Prep	Number=Sing|Person=1	9	nmod:prep	_	_
12	,	,	PUNCT	Punct	_	15	punct	_	_
13	'	'	PUNCT	Punct	_	15	punct	_	_
14	a	a	PART	Vb	PartType=Vb|PronType=Rel	15	mark:prt	_	_
15	dúirt	abair	VERB	VTI	Mood=Ind|Tense=Past	0	root	_	_
16	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	15	nsubj	_	_
17	.	.	PUNCT	.	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl:relcl	color:blue
1	Is	is	VERB	Cop	Tense=Pres|VerbForm=Cop	2	cop	_	_
2	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	0	root	_	_
3	atá	bí	VERB	PresInd	Mood=Ind|PronType=Rel|Tense=Pres	2	acl:relcl	_	_
4	i	i	ADP	Simp	_	5	case	_	_
5	gceist	ceist	NOUN	Noun	Case=Com|Form=Ecl|Gender=Fem|Number=Sing	2	xcomp:pred	_	_
6	leis	le	ADP	Simp	_	8	case	_	_
7	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	8	det	_	_
8	heagrais	eagras	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Plur	5	nmod	_	_
9	dheonacha	deonach	ADJ	Adj	Case=Com|NounType=Slender|Number=Plur	8	amod	_	_
10	ná	ná	PART	Vb	Mood=Imp|PartType=Vb	13	mark	_	_
11	eagrais	eagras	NOUN	Noun	Case=Com|Gender=Masc|Number=Plur	10	nmod	_	_
12	nach	is	VERB	Cop	Negative=Neg|PronType=Rel|Tense=Pres|VerbForm=Cop	13	cop	_	_
13	eagrais	eagras	NOUN	Noun	Case=Com|Gender=Masc|Number=Plur	2	ccomp	_	_
14	Stáit	stát	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	13	compound	_	_
15	iad	iad	PRON	Pers	Number=Plur|Person=3	13	nsubj	_	_
16	'	'	PUNCT	Punct	_	15	punct	_	_
17	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	Ach	ach	SCONJ	Subord	_	3	advmod	_	_
2	is	is	VERB	Cop	PronType=Rel|Tense=Pres|VerbForm=Cop	3	cop	_	_
3	lena	le	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	0	root	_	_
4	aghaidh	aghaidh	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	3	nmod	_	_
5	sin	sin	DET	Det	PronType=Dem	4	det	_	_
6	a	a	PART	Inf	PartType=Inf	7	dobj	_	_
7	ceapadh	ceapadh	NOUN	Noun	VerbForm=Inf	4	acl:relcl	_	_
8	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	boinn	bonn	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	7	dobj	_	_
10	ídín	ídín	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	9	compound	_	_
11	,	,	PUNCT	Punct	_	14	punct	_	_
12	leis	le	ADP	Simp	_	14	case	_	_
13	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	14	det	_	_
14	bhfuil	fuil	NOUN	Noun	Case=Com|Form=Ecl|Gender=Fem|Number=Sing	3	nmod	_	_
15	a	a	PART	Inf	PartType=Inf	16	mark	_	_
16	choinneáil	coinneáil	NOUN	Noun	Form=Len|VerbForm=Inf	14	xcomp	_	_
17	ag	ag	ADP	Simp	_	18	case	_	_
18	sodarnaíl	sodarnaíl	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	16	xcomp	_	_
19	.	.	PUNCT	.	_	3	punct	_	_

~~~


