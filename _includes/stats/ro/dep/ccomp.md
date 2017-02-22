

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: [ccomp:pmod]().

2119 nodes (1%) are attached to their parents as `ccomp`.

2111 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.40962718263332.

The following 20 pairs of parts of speech are connected with `ccomp`: [ro-pos/VERB]()-[ro-pos/VERB]() (1926; 91% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (61; 3% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (55; 3% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (15; 1% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (14; 1% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (10; 0% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (9; 0% instances), [ro-pos/INTJ]()-[ro-pos/VERB]() (8; 0% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (4; 0% instances), [ro-pos/PART]()-[ro-pos/VERB]() (3; 0% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (3; 0% instances), [ro-pos/AUX]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/SCONJ]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/AUX]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 ccomp	color:blue
1	Cum	cum	ADV	Rw	PronType=Int,Rel	2	advmod	_	_
2	puteai	putea	VERB	Vmii2s	Mood=Ind|Number=Sing|Person=2|Tense=Imp|VerbForm=Fin	0	root	_	_
3	să	să	PART	Qs	Mood=Sub	4	mark	_	_
4	comunici	comunica	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
5	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	viitorul	viitor	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
7	?	?	PUNCT	QUEST	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 ccomp	color:blue
1	Intră	intra	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	dindos	dindos	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	1	obl	_	_
4	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	sufragerie	sufragerie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	1	nmod:pmod	_	SpaceAfter=No
6	,	,	PUNCT	COMMA	_	8	punct	_	_
7	unde	unde	ADV	Rw	PronType=Int,Rel	12	advmod	_	_
8	constată	constata	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	acl	_	_
9	că	că	SCONJ	Csssp	Polarity=Pos	12	mark	_	_
10	masa	masă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	12	nsubj	_	_
11	era	fi	AUX	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	12	cop	_	_
12	nepusă	nepus	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Știi	ști	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
2	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	4	nmod	_	ToDo=nmod
3	șarmant	șarmant	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
4	băiet	băiet	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	1	ccomp	_	_
5	este	fi	AUX	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	SpaceAfter=No
6	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


