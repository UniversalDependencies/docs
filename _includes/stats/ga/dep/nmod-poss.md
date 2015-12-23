

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:prep](), [nmod:tmod]().

234 nodes (1%) are attached to their parents as `nmod:poss`.

234 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08547008547009.

The following 4 pairs of parts of speech are connected with `nmod:poss`: [ga-pos/NOUN]()-[ga-pos/DET]() (228; 97% instances), [ga-pos/NOUN]()-[ga-pos/PART]() (4; 2% instances), [ga-pos/ADJ]()-[ga-pos/DET]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nmod:poss	color:blue
1	Cad	cad	PRON	Q	PronType=Int	0	root	_	_
2	ina	i	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	3	case	_	_
3	thaobh	taobh	NOUN	Noun	Case=Com|Form=Len|Gender=Masc|Number=Sing	1	xcomp:pred	_	_
4	ná	nach	PART	Vb	Negative=Neg|PartType=Cmpl	5	dobj	_	_
5	haithneodh	haithneodh	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	1	acl:relcl	_	_
6	,	,	PUNCT	Punct	_	8	punct	_	_
7	ná	nach	PART	Vb	Negative=Neg|PartType=Cmpl	8	mark:prt	_	_
8	fuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	5	ccomp	_	_
9	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	8	nsubj	_	_
10	do	do	ADP	Simp	_	12	case	_	_
11	mo	mo	DET	Det	Number=Sing|Person=1|Poss=Yes	12	nmod:poss	_	_
12	mhúineadh	múineadh	NOUN	Noun	Form=Len|VerbForm=Inf	8	xcomp	_	_
13	?	?	PUNCT	?	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Ar	ar	ADP	Simp	_	0	root	_	_
2	dhá	dó	NUM	Num	NumType=Card	3	nummod	_	_
3	chúis	cúis	NOUN	Noun	Case=Com|Form=Len|Gender=Fem|Number=Sing	1	nmod	_	_
4	ar	ar	ADP	Simp	_	6	case	_	_
5	a	a	PART	Inf	PartType=Inf	6	nmod:poss	_	_
6	laghad	laghad	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	3	nmod	_	_
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 nmod:poss	color:blue
1	Mínigh	mínigh	VERB	VT	Mood=Imp|Number=Sing|Person=2	0	root	_	_
2	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	chaoi	caoi	NOUN	Noun	Case=Com|Definite=Def|Gender=Fem|Number=Sing	1	dobj	_	_
4	a	a	PART	Vb	PartType=Vb|PronType=Rel	5	nsubj	_	_
5	dtéann	téigh	VERB	VTI	Form=Ecl|Mood=Ind|Tense=Pres	3	acl:relcl	_	_
6	a	a	DET	Det	Number=Plur|Person=3|Poss=Yes	8	nmod:poss	_	_
7	gcuid	cuid	NOUN	Noun	Case=Com|Form=Ecl|Gender=Fem|Number=Sing	8	advmod	_	_
8	suíomh	suíomh	NOUN	Noun	Case=Gen|Gender=Masc|NounType=Weak|Number=Plur	5	nsubj	_	_
9	chun	chun	ADP	Simp	_	10	case	_	_
10	tairbhe	tairbhe	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	5	nmod	_	_
11	dá	do	ADP	Poss	Number=Plur|Person=3|Poss=Yes	13	nmod:poss	_	_
12	gcuid	cuid	NOUN	Noun	Case=Com|Form=Ecl|Gender=Fem|Number=Sing	13	advmod	_	_
13	feidhmeanna	feidhm	NOUN	Noun	Case=Com|Gender=Fem|Number=Plur	10	compound	_	_
14	.	.	PUNCT	.	_	1	punct	_	_

~~~


