

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

20 nodes (0%) are attached to their parents as `goeswith`.

18 instances of `goeswith` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05.

The following 12 pairs of parts of speech are connected with `goeswith`: [fr-pos/NOUN]()-[fr-pos/NOUN]() (4; 20% instances), [fr-pos/PRON]()-[fr-pos/PART]() (3; 15% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (3; 15% instances), [fr-pos/ADV]()-[fr-pos/ADJ]() (2; 10% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (1; 5% instances), [fr-pos/ADJ]()-[fr-pos/SCONJ]() (1; 5% instances), [fr-pos/DET]()-[fr-pos/ADP]() (1; 5% instances), [fr-pos/NOUN]()-[fr-pos/X]() (1; 5% instances), [fr-pos/PRON]()-[fr-pos/ADV]() (1; 5% instances), [fr-pos/VERB]()-[fr-pos/ADV]() (1; 5% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (1; 5% instances), [fr-pos/VERB]()-[fr-pos/X]() (1; 5% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 goeswith	color:blue
1	Nous	nous	PRON	_	Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
2	avons	avoir	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	testé	tester	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	restaurant	restaurant	NOUN	_	Gender=Masc|Number=Sing	3	dobj	_	_
6	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	7	det	_	_
7	week	weekend	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	_
8	end	end	NOUN	_	Gender=Fem|Number=Sing	7	goeswith	_	_
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 goeswith	color:blue
1	Pas	pas	ADV	_	_	3	neg	_	_
2	de	un	DET	_	Definite=Ind|PronType=Art	3	det	_	_
3	sèche	sécher	VERB	_	_	0	root	_	_
4	cheveux	cheveu	NOUN	_	Gender=Masc|Number=Plur	3	goeswith	_	_
5	ni	ni	CONJ	_	_	3	cc	_	_
6	de	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	prise	prise	NOUN	_	Gender=Fem|Number=Sing	3	conj	_	_
8	rasoir	rasoir	NOUN	_	Gender=Masc|Number=Sing	7	compound	_	_
9	dans	dans	ADP	_	_	11	case	_	_
10	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	salle	salle	NOUN	_	Gender=Fem|Number=Sing	3	nmod	_	_
12	de	de	ADP	_	_	13	case	_	_
13	bains	bain	NOUN	_	Gender=Masc|Number=Plur	11	nmod	_	_
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 goeswith	color:blue
1	On	on	PRON	_	Gender=Masc|Number=Sing|Person=3	4	nsubj	_	_
2	en	en	PRON	_	Person=3	6	nmod	_	_
3	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	aux	_	_
4	vue	voir	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	dizaine	dizaine	NOUN	_	Gender=Fem|Number=Sing	4	dobj	_	_
7	à	à	ADP	_	_	10	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
9	premier	premier	NUM	_	_	10	nummod	_	_
10	contrôle	contrôle	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_
11	mais	mais	CONJ	_	_	6	cc	_	_
12	pas	pas	ADV	_	_	13	neg	_	_
13	celle	celui	PRON	_	Gender=Fem|Number=Sing|PronType=Dem	6	conj	_	_
14	là	là	PART	_	_	13	goeswith	_	_
15	.	.	PUNCT	_	_	4	punct	_	_

~~~


