

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is a language-specific subtype of [csubj]().
There are also 1 other language-specific subtypes of `csubj`: [csubj:cop]().

133 nodes (1%) are attached to their parents as `csubj:cleft`.

132 instances of `csubj:cleft` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.12781954887218.

The following 9 pairs of parts of speech are connected with `csubj:cleft`: [ga-pos/NOUN]()-[ga-pos/VERB]() (43; 32% instances), [ga-pos/ADP]()-[ga-pos/VERB]() (37; 28% instances), [ga-pos/PRON]()-[ga-pos/VERB]() (20; 15% instances), [ga-pos/VERB]()-[ga-pos/VERB]() (10; 8% instances), [ga-pos/ADJ]()-[ga-pos/VERB]() (7; 5% instances), [ga-pos/PROPN]()-[ga-pos/VERB]() (7; 5% instances), [ga-pos/ADV]()-[ga-pos/VERB]() (6; 5% instances), [ga-pos/X]()-[ga-pos/VERB]() (2; 2% instances), [ga-pos/SCONJ]()-[ga-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj:cleft	color:blue
1	Maidin	maidin	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	0	root	_	_
2	thirim	tirim	ADJ	Adj	Case=Com|Gender=Fem|Number=Sing	1	amod	_	_
3	fhionnuar	fionnuar	ADJ	Adj	Case=Com|Gender=Fem|Number=Sing	1	amod	_	_
4	a	a	PART	Vb	PartType=Vb|PronType=Rel	5	mark:prt	_	_
5	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	1	csubj:cleft	_	_
6	ann	i	ADP	Prep	Gender=Masc|Number=Sing|Person=3	5	xcomp:pred	_	_
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj:cleft	color:blue
1	Ní	is	VERB	Cop	Negative=Neg|Tense=Pres|VerbForm=Cop	2	cop	_	_
2	mar	mar	ADP	Simp	_	0	root	_	_
3	sin	sin	PRON	Dem	PronType=Dem	2	nmod	_	_
4	atá	bí	VERB	PresInd	Mood=Ind|PronType=Rel|Tense=Pres	2	csubj:cleft	_	_
5	áfach	áfach	ADV	Gn	_	2	advmod	_	_
6	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj:cleft	color:blue
1	'	'	PUNCT	Punct	_	3	punct	_	_
2	'	'	PUNCT	Punct	_	3	punct	_	_
3	Cén	cé	PRON	Q	Number=Sing|PronType=Int	0	root	_	_
4	chaoi	caoi	NOUN	Noun	Case=Com|Definite=Def|Gender=Fem|Number=Sing	3	xcomp:pred	_	_
5	a	a	PART	Vb	PartType=Vb|PronType=Rel	6	mark:prt	_	_
6	raibh	bí	VERB	PastInd	Form=Ecl|Mood=Ind|Tense=Past	3	csubj:cleft	_	_
7	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	drama	dram	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	6	nsubj	_	_
9	úd	úd	DET	Det	PronType=Dem	8	det	_	_
10	i	i	ADP	Simp	_	11	case	_	_
11	mBéarla	béarla	NOUN	Noun	Case=Com|Form=Ecl|Gender=Masc|Number=Sing	6	xcomp:pred	_	_
12	Inis	inis	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	11	compound	_	_
13	Meáin	meán	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	12	compound	_	_
14	?	?	PUNCT	?	_	3	punct	_	_

~~~


