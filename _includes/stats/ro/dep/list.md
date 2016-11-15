

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

10 nodes (0%) are attached to their parents as `list`.

10 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.2.

The following 2 pairs of parts of speech are connected with `list`: [ro-pos/NOUN]()-[ro-pos/NOUN]() (9; 90% instances), [ro-pos/PROPN]()-[ro-pos/PROPN]() (1; 10% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 15 list	color:blue
1	Servicii	serviciu	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	0	root	_	_
2	curățenie	curățenie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	1	nmod	_	_
3	generală	general	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	_
4	,	,	PUNCT	COMMA	_	6	punct	_	_
5	după	după	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	constructor	constructor	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	2	nmod	_	_
7	,	,	PUNCT	COMMA	_	2	punct	_	_
8	spălat	spăla	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	2	conj	_	_
9	mochete	mochetă	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	8	dobj	_	_
10	,	,	PUNCT	COMMA	_	9	punct	_	_
11	geamuri	geam	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	9	conj	_	_
12	,	,	PUNCT	COMMA	_	9	punct	_	_
13	gresie	gresie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	9	conj	_	_
14	etc.	etcetera	ADV	Yr	Abbr=Yes	9	conj	_	_
15	buonoserv@yahoo.com	buonoserv@yahoo.com	NOUN	Nc	_	1	list	_	_
16	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 list	color:blue
1	Fenton	Fenton	PROPN	Np	_	3	nsubj	_	_
2	a	avea	AUX	Va--3s	Number=Sing|Person=3	3	aux	_	_
3	recunoscut	recunoaște	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
4	un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	5	det	_	_
5	jaf	jaf	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	3	dobj	_	_
6	mai	mai	ADV	Rp	_	7	advmod	_	_
7	serios	serios	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
8	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
9	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	10	det	_	_
10	casă	casă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	5	nmod	_	_
11	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
12	Roseberry	Roseberry	PROPN	Np	_	10	nmod	_	_
13	Road	Road	X	X	_	12	foreign	_	_
14	,	,	PUNCT	COMMA	_	15	punct	_	_
15	Billingham	Billingham	PROPN	Np	_	12	list	_	_
16	,	,	PUNCT	COMMA	_	28	punct	_	_
17	unde	unde	ADV	Rw	PronType=Int,Rel	28	advmod	_	_
18	Graham	Graham	PROPN	Np	_	28	nsubj	_	_
19	Watson	Watson	PROPN	Np	_	18	name	_	_
20	,	,	PUNCT	COMMA	_	23	punct	_	_
21	20	20	NUM	M	_	23	nummod	_	_
22	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	20	case	_	_
23	ani	an	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	18	nmod	_	_
24	,	,	PUNCT	COMMA	_	23	punct	_	_
25	și	și	CONJ	Crssp	Negative=Pos	18	cc	_	_
26	Dolan	Dolan	PROPN	Np	_	18	conj	_	_
27	au	avea	AUX	Va--3p	Number=Plur|Person=3	28	aux	_	_
28	recunoscut	recunoaște	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	10	acl	_	_
29	jaful	jaf	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	28	dobj	_	_
30	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


