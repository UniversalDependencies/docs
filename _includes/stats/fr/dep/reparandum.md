

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

3 nodes (0%) are attached to their parents as `reparandum`.

3 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `reparandum`: [fr-pos/ADP]()-[fr-pos/ADP]() (1; 33% instances), [fr-pos/DET]()-[fr-pos/ADP]() (1; 33% instances), [fr-pos/PRON]()-[fr-pos/PRON]() (1; 33% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 reparandum	color:blue
1	Beneš	Beneš	PROPN	_	_	2	nsubj	_	_
2	part	partir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	pour	pour	ADP	_	_	4	reparandum	_	_
4	à	à	ADP	_	_	5	case	_	_
5	Londres	Londres	PROPN	_	_	2	nmod	_	_
6	où	où	PRON	_	PronType=Rel	8	nmod	_	_
7	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
8	fonde	fonder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
9	en	en	ADP	_	_	10	case	_	_
10	1940	1940	NUM	_	_	8	nmod	_	_
11	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	gouvernement	gouvernement	NOUN	_	Gender=Masc|Number=Sing	8	dobj	_	_
13	tchécoslovaque	tchécoslovaque	ADJ	_	Gender=Masc|Number=Sing	12	amod	_	_
14	en	en	ADP	_	_	15	case	_	_
15	exil	exil	NOUN	_	Gender=Masc|Number=Sing	8	nmod	_	_
16	,	,	PUNCT	_	_	8	punct	_	_
17	et	et	CONJ	_	_	8	cc	_	_
18	en	en	PRON	_	Person=3	21	nmod	_	_
19	assume	assumer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	conj	_	_
20	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	présidence	présidence	NOUN	_	Gender=Fem|Number=Sing	19	dobj	_	_
22	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 reparandum	color:blue
1	En	en	ADP	_	_	2	case	_	_
2	fonction	fonction	NOUN	_	Gender=Fem|Number=Sing	13	nmod	_	_
3	de	de	ADP	_	_	6	case	_	_
4	toutes	tout	DET	_	Gender=Fem|Number=Plur	6	det	_	_
5	les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	_	_
6	données	donnée	NOUN	_	Gender=Fem|Number=Plur	2	nmod	_	_
7	présentées	présenter	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	6	acl	_	_
8	dans	dans	ADP	_	_	10	case	_	_
9	les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	sections	section	NOUN	_	Gender=Fem|Number=Plur	7	nmod	_	_
11	précédentes	précédent	ADJ	_	Gender=Fem|Number=Plur	10	amod	_	_
12	,	,	PUNCT	_	_	2	punct	_	_
13	quel	quel	PRON	_	Gender=Masc|Number=Sing	0	root	_	_
14	serait	être	VERB	_	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
15	,	,	PUNCT	_	_	13	punct	_	_
16	en	en	ADP	_	_	17	mark	_	_
17	simplifiant	simplifier	VERB	_	Tense=Pres|VerbForm=Part	13	advcl	_	_
18	,	,	PUNCT	_	_	13	punct	_	_
19	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	développement	développement	NOUN	_	Gender=Masc|Number=Sing	13	nsubj	_	_
21	et	et	CONJ	_	_	20	cc	_	_
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


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 reparandum	color:blue
1	Les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	officiers	officier	NOUN	_	Gender=Masc|Number=Plur	8	nsubj	_	_
3	restés	rester	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	acl	_	_
4	fidèles	fidèle	ADJ	_	Gender=Masc|Number=Plur	3	xcomp	_	_
5	à	à	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	vice-amiral	vice-amiral	PROPN	_	_	4	nmod	_	_
8	cachèrent	cacher	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	corps	corps	NOUN	_	Gender=Masc|Number=Sing	8	dobj	_	_
11	et	et	CONJ	_	_	8	cc	_	_
12	le	le	PRON	_	Number=Sing|Person=3|PronType=Prs	13	reparandum	_	_
13	l'	le	PRON	_	Number=Sing|Person=3|PronType=Prs	14	dobj	_	_
14	inhumèrent	inhumer	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	8	conj	_	_
15	secrètement	secrètement	ADV	_	_	14	advmod	_	_
16	dans	dans	ADP	_	_	18	case	_	_
17	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	cimetière	cimetière	NOUN	_	Gender=Masc|Number=Sing	14	nmod	_	_
19	orthodoxe	orthodoxe	ADJ	_	Gender=Masc|Number=Sing	18	amod	_	_
20	de	de	ADP	_	_	21	case	_	_
21	Helsingfors	Helsingfors	PROPN	_	_	18	nmod	_	_
22	(	(	PUNCT	_	_	24	punct	_	_
23	aujourd'hui	aujourd'hui	ADV	_	_	24	advmod	_	_
24	Helsinki	Helsinki	PROPN	_	_	21	nmod	_	_
25	)	)	PUNCT	_	_	24	punct	_	_
26	.	.	PUNCT	_	_	8	punct	_	_

~~~


