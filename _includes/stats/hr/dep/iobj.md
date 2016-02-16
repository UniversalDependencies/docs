

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

195 nodes (0%) are attached to their parents as `iobj`.

142 instances of `iobj` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.03076923076923.

The following 11 pairs of parts of speech are connected with `iobj`: [hr-pos/VERB]()-[hr-pos/NOUN]() (118; 61% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (35; 18% instances), [hr-pos/VERB]()-[hr-pos/PROPN]() (23; 12% instances), [hr-pos/ADV]()-[hr-pos/NOUN]() (7; 4% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (3; 2% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (2; 1% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (2; 1% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (2; 1% instances), [hr-pos/ADJ]()-[hr-pos/PROPN]() (1; 1% instances), [hr-pos/ADV]()-[hr-pos/PRON]() (1; 1% instances), [hr-pos/ADV]()-[hr-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 iobj	color:blue
1	Ashdownov	Ashdownov	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Poss=Yes	2	nmod	_	_
2	ured	ured	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	okreće	okretati	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	3	dobj	_	_
5	tranziciji	tranzicija	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	3	iobj	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 iobj	color:blue
1	"	"	PUNCT	_	_	15	punct	_	_
2	Ukoliko	ukoliko	SCONJ	_	_	4	mark	_	_
3	nam	mi	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	4	iobj	_	_
4	ponude	ponuditi	VERB	_	Number=Plur|Person=3|Tense=Pres	15	advcl	_	_
5	sporazum	sporazum	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	dobj	_	_
6	MMF-a	MMF	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
7	koji	koji	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	10	mark	_	_
8	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	10	cop	_	_
9	u	u	ADP	_	Case=Loc	10	case	_	_
10	skladu	sklad	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	5	acl	_	_
11	s	s	ADP	_	Case=Ins	12	case	_	_
12	interesima	interes	NOUN	_	Case=Ins|Gender=Masc|Number=Plur	10	nmod	_	_
13	Turske	Turska	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	_
14	,	,	PUNCT	_	_	4	punct	_	_
15	potpisat	potpisati	VERB	_	VerbForm=Inf	0	root	_	_
16	ćemo	htjeti	AUX	_	Number=Plur|Person=1|Tense=Pres	15	aux	_	_
17	ga	on	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	dobj	_	_
18	.	.	PUNCT	_	_	15	punct	_	_
19	.	.	PUNCT	_	_	15	punct	_	_
20	.	.	PUNCT	_	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 iobj	color:blue
1	Mi	mi	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	trebamo	trebati	VERB	_	Number=Plur|Person=1|Tense=Pres	0	root	_	_
3	.	.	PUNCT	_	_	2	punct	_	_
4	.	.	PUNCT	_	_	2	punct	_	_
5	.	.	PUNCT	_	_	2	punct	_	_
6	dati	dati	VERB	_	VerbForm=Inf	2	xcomp	_	_
7	potporu	potpora	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	6	dobj	_	_
8	Jeremiću	Jeremić	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	6	iobj	_	_
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


