

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

6925 nodes (2%) are attached to their parents as `acl`.

6536 instances of `acl` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.79696750902527.

The following 26 pairs of parts of speech are connected with `acl`: [fr-pos/NOUN]()-[fr-pos/VERB]() (4154; 60% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (1689; 24% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (504; 7% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (252; 4% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (206; 3% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (46; 1% instances), [fr-pos/NUM]()-[fr-pos/VERB]() (20; 0% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (8; 0% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (8; 0% instances), [fr-pos/PROPN]()-[fr-pos/ADJ]() (7; 0% instances), [fr-pos/X]()-[fr-pos/VERB]() (5; 0% instances), [fr-pos/PRON]()-[fr-pos/ADJ]() (4; 0% instances), [fr-pos/ADP]()-[fr-pos/VERB]() (3; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (3; 0% instances), [fr-pos/SYM]()-[fr-pos/VERB]() (3; 0% instances), [fr-pos/INTJ]()-[fr-pos/VERB]() (2; 0% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/DET]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/SCONJ]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 acl	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	verra	voir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	puits	puits	NOUN	_	Gender=Masc|Number=Sing	2	obj	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	plus	plus	ADV	_	_	7	advmod	_	_
7	profond	profond	ADJ	_	Gender=Masc|Number=Sing	4	amod	_	_
8	de	de	ADP	_	_	9	case	_	_
9	France	France	PROPN	_	_	4	nmod	_	_
10	porter	porter	VERB	_	VerbForm=Inf	4	acl	_	_
11	son	son	DET	_	Gender=Masc|Number=Sing|PronType=Prs	12	nmod:poss	_	_
12	nom	nom	NOUN	_	Gender=Masc|Number=Sing	10	obj	_	_
13	:	:	PUNCT	_	_	2	punct	_	SpaceAfter=No
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
5	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obj	_	_
6	faire	faire	VERB	_	VerbForm=Inf	3	acl	_	SpaceAfter=No
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
3	Mitterrand	Mitterrand	PROPN	_	_	1	obl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	_
5	Marguerite	Marguerite	PROPN	_	_	7	nsubj	_	_
6	Duras	Duras	PROPN	_	_	5	flat:name	_	_
7	réussit	réussir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	à	à	ADP	_	_	10	mark	_	_
9	s'	se	PRON	_	Person=3|PronType=Prs	10	expl	_	SpaceAfter=No
10	échapper	échapper	VERB	_	VerbForm=Inf	7	acl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

291 nodes (2%) are attached to their parents as `acl`.

277 instances of `acl` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.40549828178694.

The following 6 pairs of parts of speech are connected with `acl`: [fr-pos/NOUN]()-[fr-pos/VERB]() (272; 93% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (10; 3% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (5; 2% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (2; 1% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 acl	color:blue
1	créer	créer	VERB	V	VerbForm=Inf	0	root	_	_
2	et	et	CCONJ	CC	_	3	cc	_	_
3	reproduire	reproduire	VERB	V	VerbForm=Inf	1	conj	_	_
4	des	un	DET	RI	Definite=Ind|Gender=Fem|Number=Plur|PronType=Dem	5	det	_	_
5	oeuvres	oeuvre	NOUN	S	Gender=Fem|Number=Plur	1	obj	_	_
6	dites	dire	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	5	acl	_	_
7	derivées	dérivé	ADJ	A	Gender=Fem|Number=Plur	6	xcomp	_	SpaceAfter=No
8	;	;	PUNCT	FC	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl	color:blue
1	Toute	tout	DET	DI	Gender=Fem|Number=Sing|PronType=Ind	2	det	_	_
2	personne	personne	NOUN	S	Gender=Fem|Number=Sing	3	nsubj	_	_
3	a	avoir	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	droit	droit	NOUN	S	Gender=Masc|Number=Sing	3	obj	_	_
5	à	à	ADP	E	_	6	case	_	_
6	ce	ce	PRON	PD	Number=Sing|PronType=Dem	3	obl	_	_
7	que	que	SCONJ	CS	_	8	mark	_	_
8	règne	règner	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	acl	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	8	punct	_	_
10	sur	sur	ADP	E	_	12	case	_	_
11	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	plan	plan	NOUN	S	Gender=Masc|Number=Sing	8	obl	_	_
13	social	social	ADJ	A	Gender=Masc|Number=Sing	12	amod	_	_
14	et	et	CCONJ	CC	_	17	cc	_	_
15	sur	sur	ADP	E	_	17	case	_	_
16	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	plan	plan	NOUN	S	Gender=Masc|Number=Sing	12	conj	_	_
18	international	international	ADJ	A	Gender=Masc|Number=Sing	17	amod	_	SpaceAfter=No
19	,	,	PUNCT	FF	_	8	punct	_	_
20	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	ordre	ordre	NOUN	S	Gender=Masc|Number=Sing	8	nsubj	_	_
22	tel	tel	ADJ	A	Gender=Masc|Number=Sing|PronType=Dem	21	amod	_	_
23	que	que	SCONJ	CS	_	35	mark	_	_
24	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	25	det	_	_
25	droits	droit	NOUN	S	Gender=Masc|Number=Plur	35	nsubj	_	_
26	et	et	CCONJ	CC	_	27	cc	_	_
27	libertés	liberté	NOUN	S	Gender=Fem|Number=Plur	25	conj	_	_
28	énoncés	énoncer	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	25	acl	_	_
29	dans	dans	ADP	E	_	32	case	_	_
30	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	32	det	_	_
31	présente	présent	ADJ	A	Gender=Fem|Number=Sing	32	amod	_	_
32	déclaration	déclaration	NOUN	S	Gender=Fem|Number=Sing	28	obl	_	_
33	puissent	pouvoir	AUX	VM	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	35	aux	_	_
34	y	y	PRON	P	PronType=Prs	35	obl	_	_
35	trouver	trouver	VERB	V	VerbForm=Inf	21	acl	_	_
36	plein	plein	ADJ	A	Gender=Masc|Number=Sing	37	amod	_	_
37	effet	effet	NOUN	S	Gender=Masc|Number=Sing	35	obj	_	SpaceAfter=No
38	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl	color:blue
1	Les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	crédits	crédits	NOUN	S	Gender=Fem|Number=Plur	4	nsubj:pass	_	_
3	sont	être	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	autorisés	autoriser	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
5	par	par	ADP	E	_	7	case	_	_
6	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	7	det	_	SpaceAfter=No
7	autorité	autorité	NOUN	S	Gender=Fem|Number=Sing	4	obl:agent	_	_
8	budgétaire	budgétaire	ADJ	A	Number=Sing	7	acl	_	_
9	dans	dans	ADP	E	_	11	case	_	_
10	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	limite	limite	NOUN	S	Gender=Fem|Number=Sing	4	obl	_	_
12	de	de	ADP	E	_	14	case	_	_
13	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	14	det	_	_
14	perspectives	perspectives	NOUN	S	Gender=Fem|Number=Plur	11	nmod	_	_
15	financières	financier	ADJ	A	Gender=Fem|Number=Plur	14	amod	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

1040 nodes (2%) are attached to their parents as `acl`.

996 instances of `acl` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.01923076923077.

The following 16 pairs of parts of speech are connected with `acl`: [fr-pos/NOUN]()-[fr-pos/VERB]() (878; 84% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (53; 5% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (42; 4% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (20; 2% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (14; 1% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (7; 1% instances), [fr-pos/PRON]()-[fr-pos/ADJ]() (7; 1% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (4; 0% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (4; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (3; 0% instances), [fr-pos/DET]()-[fr-pos/ADJ]() (2; 0% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl	color:blue
1	Quel	quel	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	risque	risque	NOUN	_	Gender=Masc|Number=Sing	1	nsubj	_	_
5	associé	associer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	acl	_	_
6	à	à	ADP	_	_	8	case	_	_
7	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	utilisation	utilisation	NOUN	_	Gender=Fem|Number=Sing	5	obl	_	_
9	d'	de	ADP	_	_	10	case	_	SpaceAfter=No
10	Aclasta	Aclasta	PROPN	_	_	8	nmod	_	_
11	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 3 acl	color:blue
1	-	-	PUNCT	_	_	11	punct	_	_
2	^	^	PUNCT	_	_	11	punct	_	_
3	cf.	cf.	VERB	_	VerbForm=Inf	11	acl	_	_
4	"	"	PUNCT	_	_	7	punct	_	SpaceAfter=No
5	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	conseil	conseil	NOUN	_	Gender=Masc|Number=Sing	7	nsubj	_	_
7	démissionne	démissionner	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	SpaceAfter=No
8	"	"	PUNCT	_	_	7	punct	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	L'	L'	PROPN	_	_	11	det	_	SpaceAfter=No
11	Équipe	Équipe	PROPN	_	_	0	root	_	SpaceAfter=No
12	,	,	PUNCT	_	_	11	punct	_	_
13	11	11	NUM	_	NumType=Card	14	nummod	_	_
14	mai	mai	NOUN	_	Gender=Masc|Number=Sing	11	nmod	_	_
15	2006	2006	NUM	_	NumType=Card	14	nummod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl	color:blue
1	Voilà	voilà	VERB	_	Mood=Ind|VerbForm=Fin	0	root	_	_
2	qui	qui	PRON	_	PronType=Rel	1	obj	_	_
3	n'	ne	ADV	_	_	4	advmod	_	SpaceAfter=No
4	augure	augurer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl	_	_
5	rien	rien	PRON	_	Number=Sing|PronType=Rel	4	obj	_	_
6	de	de	ADP	_	_	7	mark	_	_
7	bon	bon	ADJ	_	Gender=Masc|Number=Sing	5	acl	_	_
8	selon	selon	ADP	_	_	9	case	_	_
9	moi	soi	PRON	_	Number=Sing|Person=1|PronType=Prs	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


