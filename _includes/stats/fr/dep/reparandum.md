

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

6 nodes (0%) are attached to their parents as `reparandum`.

6 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 5 pairs of parts of speech are connected with `reparandum`: [fr-pos/PRON]()-[fr-pos/PRON]() (2; 33% instances), [fr-pos/ADP]()-[fr-pos/ADP]() (1; 17% instances), [fr-pos/ADP]()-[fr-pos/CCONJ]() (1; 17% instances), [fr-pos/DET]()-[fr-pos/ADP]() (1; 17% instances), [fr-pos/PROPN]()-[fr-pos/PUNCT]() (1; 17% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 reparandum	color:blue
1	Un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	coup	coup	NOUN	_	Gender=Masc|Number=Sing	19	nsubj	_	_
3	de	de	ADP	_	_	4	case	_	_
4	pied	pied	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	_
5	donné	donner	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl	_	_
6	à	à	ADP	_	_	8	case	_	_
7	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	spectateur	spectateur	NOUN	_	Gender=Masc|Number=Sing	5	obl	_	_
9	à	à	ADP	_	_	11	case	_	_
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	cours	cours	NOUN	_	Gender=Masc|Number=Sing	5	obl	_	_
12	de	de	ADP	_	_	14	case	_	_
13	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	Druivencross	Druivencross	PROPN	_	_	11	nmod	_	_
15	d'	de	ADP	_	_	16	case	_	SpaceAfter=No
16	Overijse	Overijse	PROPN	_	_	14	nmod	_	_
17	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	18	reparandum	_	_
18	lui	lui	PRON	_	Number=Sing|Person=3|PronType=Prs	19	iobj	_	_
19	vaut	valoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
20	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	suspension	suspension	NOUN	_	Gender=Fem|Number=Sing	19	obj	_	_
22	de	de	ADP	_	_	23	case	_	_
23	compétition	compétition	NOUN	_	Gender=Fem|Number=Sing	21	nmod	_	_
24	durant	durant	ADP	_	_	26	case	_	_
25	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
26	mois	mois	NOUN	_	Gender=Masc|Number=Sing	21	nmod	_	_
27	de	de	ADP	_	_	28	case	_	_
28	septembre	septembre	NOUN	_	Gender=Masc|Number=Sing	26	nmod	_	_
29	2006	2006	NUM	_	_	28	nmod	_	SpaceAfter=No
30	.	.	PUNCT	_	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 reparandum	color:blue
1	L'	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	assemblée	assemblée	NOUN	_	Gender=Fem|Number=Sing	4	nsubj:pass	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	convoquée	convoquer	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	et	et	CCONJ	_	_	6	reparandum	_	_
6	par	par	ADP	_	_	8	case	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	roi	roi	NOUN	_	Gender=Masc|Number=Sing	4	obl	_	_
9	de	de	ADP	_	_	11	case	_	_
10	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	11	det	_	_
11	Francs	Francs	PROPN	_	_	8	nmod	_	_
12	Clovis	Clovis	PROPN	_	_	8	appos	_	_
13	Ier	Ier	NUM	_	_	12	nummod	_	_
14	et	et	CCONJ	_	_	17	cc	_	_
15	en	en	ADP	_	_	17	case	_	_
16	sa	son	DET	_	Gender=Fem|Number=Sing|PronType=Prs	17	nmod:poss	_	_
17	présence	présence	NOUN	_	Gender=Fem|Number=Sing	4	conj	_	SpaceAfter=No
18	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 reparandum	color:blue
1	En	en	ADP	_	_	2	case	_	_
2	fonction	fonction	NOUN	_	Gender=Fem|Number=Sing	13	obl	_	_
3	de	de	ADP	_	_	6	case	_	_
4	toutes	tout	DET	_	Gender=Fem|Number=Plur	6	det	_	_
5	les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	_	_
6	données	donnée	NOUN	_	Gender=Fem|Number=Plur	2	nmod	_	_
7	présentées	présenter	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	6	acl	_	_
8	dans	dans	ADP	_	_	10	case	_	_
9	les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	sections	section	NOUN	_	Gender=Fem|Number=Plur	7	obl	_	_
11	précédentes	précédent	ADJ	_	Gender=Fem|Number=Plur	10	amod	_	SpaceAfter=No
12	,	,	PUNCT	_	_	2	punct	_	_
13	quel	quel	PRON	_	Gender=Masc|Number=Sing	0	root	_	_
14	serait	être	AUX	_	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	SpaceAfter=No
15	,	,	PUNCT	_	_	13	punct	_	_
16	en	en	ADP	_	_	17	mark	_	_
17	simplifiant	simplifier	VERB	_	Tense=Pres|VerbForm=Part	13	advcl	_	SpaceAfter=No
18	,	,	PUNCT	_	_	13	punct	_	_
19	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	développement	développement	NOUN	_	Gender=Masc|Number=Sing	13	nsubj	_	_
21	et	et	CCONJ	_	_	24	cc	_	_
22	de	de	ADP	_	_	23	reparandum	_	_
23	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	24	det	_	_
24	dynamique	dynamique	NOUN	_	Gender=Fem|Number=Sing	20	conj	_	_
25	de	de	ADP	_	_	27	case	_	_
26	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	det	_	_
27	comportement	comportement	NOUN	_	Gender=Masc|Number=Sing	24	nmod	_	_
28	de	de	ADP	_	_	29	case	_	_
29	reproduction	reproduction	NOUN	_	Gender=Fem|Number=Sing	27	nmod	_	_
30	de	de	ADP	_	_	32	case	_	_
31	les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	32	det	_	_
32	mammifères	mammifère	NOUN	_	Gender=Masc|Number=Plur	29	nmod	_	_
33	?	?	PUNCT	_	_	13	punct	_	_

~~~


