

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

17 nodes (0%) are attached to their parents as `goeswith`.

15 instances of `goeswith` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05882352941176.

The following 11 pairs of parts of speech are connected with `goeswith`: [fr-pos/NOUN]()-[fr-pos/NOUN]() (4; 24% instances), [fr-pos/PRON]()-[fr-pos/PART]() (3; 18% instances), [fr-pos/ADV]()-[fr-pos/ADJ]() (2; 12% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (1; 6% instances), [fr-pos/ADJ]()-[fr-pos/SCONJ]() (1; 6% instances), [fr-pos/DET]()-[fr-pos/ADP]() (1; 6% instances), [fr-pos/NOUN]()-[fr-pos/X]() (1; 6% instances), [fr-pos/VERB]()-[fr-pos/ADV]() (1; 6% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (1; 6% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (1; 6% instances), [fr-pos/VERB]()-[fr-pos/X]() (1; 6% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 goeswith	color:blue
1	Nous	nous	PRON	_	Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
2	avons	avoir	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	testé	tester	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	5	det	_	_
5	restaurant	restaurant	NOUN	_	Gender=Masc|Number=Sing	3	dobj	_	_
6	ce	ce	DET	_	Gender=Masc|Number=Sing	7	det	_	_
7	week	weekend	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	_
8	end	end	NOUN	_	Gender=Fem|Number=Sing	7	goeswith	_	_
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 goeswith	color:blue
1	On	on	PRON	_	Gender=Masc|Number=Sing|Person=3	4	nsubj	_	_
2	en	en	PRON	_	Person=3	4	iobj	_	_
3	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	aux	_	_
4	vue	voir	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Dem	6	det	_	_
6	dizaine	dizaine	NOUN	_	Gender=Fem|Number=Sing	4	dobj	_	_
7	à	à	ADP	_	_	10	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	10	det	_	_
9	premier	premier	NUM	_	_	10	nummod	_	_
10	contrôle	contrôle	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_
11	mais	mais	CONJ	_	_	4	cc	_	_
12	pas	pas	ADV	_	_	13	neg	_	_
13	celle	celui	PRON	_	Gender=Fem|Number=Sing|PronType=Dem	4	conj	_	_
14	là	là	PART	_	_	13	goeswith	_	_
15	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 goeswith	color:blue
1	J'	je	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	enterrement	enterrement	NOUN	_	Gender=Masc|Number=Sing	3	dobj	_	_
6	de	de	ADP	_	_	7	case	_	_
7	vie	vie	NOUN	_	Gender=Fem|Number=Sing	5	nmod	_	_
8	de	de	ADP	_	_	9	case	_	_
9	garçon	garçon	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	_
10	avec	avec	ADP	_	_	12	case	_	_
11	mes	son	DET	_	Gender=Masc|Number=Plur	12	nmod:poss	_	_
12	potes	pote	NOUN	_	Gender=Masc|Number=Plur	5	nmod	_	_
13	la	la	ADV	_	_	3	advmod	_	_
14	bas	bas	ADJ	_	Gender=Masc|Number=Plur	13	goeswith	_	_
15	,	,	PUNCT	_	_	3	punct	_	_
16	nickel	nickel	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	_
17	.	.	PUNCT	_	_	3	punct	_	_

~~~


