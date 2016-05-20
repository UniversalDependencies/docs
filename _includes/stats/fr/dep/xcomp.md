

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

841 nodes (0%) are attached to their parents as `xcomp`.

834 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.96432818073722.

The following 24 pairs of parts of speech are connected with `xcomp`: [fr-pos/VERB]()-[fr-pos/VERB]() (574; 68% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (150; 18% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (55; 7% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (20; 2% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (6; 1% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (5; 1% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (5; 1% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (4; 0% instances), [fr-pos/AUX]()-[fr-pos/VERB]() (3; 0% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (2; 0% instances), [fr-pos/VERB]()-[fr-pos/ADV]() (2; 0% instances), [fr-pos/VERB]()-[fr-pos/NUM]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/ADP]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/AUX]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADP]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/NUM]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 xcomp	color:blue
1	Vraiment	vraiment	ADV	_	_	6	advmod	_	_
2	,	,	PUNCT	_	_	6	punct	_	_
3	j'	je	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
4	y	y	ADV	_	_	6	advmod	_	_
5	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	passé	passer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	du	du	DET	_	Gender=Masc|Number=Sing	9	det	_	_
8	bon	bon	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	_
9	temps	temps	NOUN	_	Gender=Masc|Number=Sing	6	dobj	_	_
10	et	et	CONJ	_	_	6	cc	_	_
11	compte	compter	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	conj	_	_
12	y	y	ADV	_	_	13	advmod	_	_
13	retourner	retourner	VERB	_	VerbForm=Inf	11	xcomp	_	_
14	!	!	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing	2	det	_	_
2	junk-food	junk-food	NOUN	_	Gender=Fem|Number=Sing	3	nsubj	_	_
3	rend	rendre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	aussi	aussi	ADV	_	_	5	advmod	_	_
5	accro	accro	ADJ	_	Gender=Masc|Number=Sing	3	xcomp	_	_
6	que	que	SCONJ	_	_	8	mark	_	_
7	les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur	8	det	_	_
8	drogues	drogue	NOUN	_	Gender=Fem|Number=Plur	5	nmod	_	_
9	dures	dur	ADJ	_	Gender=Fem|Number=Plur	8	amod	_	_
10	!	!	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 13 xcomp	color:blue
1	De	de	ADP	_	_	3	case	_	_
2	son	son	DET	_	Gender=Masc|Number=Sing	3	nmod:poss	_	_
3	vivant	vivant	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3	7	nsubj	_	_
6	l'	le	PRON	_	Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
7	appelait	appeler	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
8	«	«	PUNCT	_	_	7	punct	_	_
9	»	»	PUNCT	_	_	7	punct	_	_
10	(	(	PUNCT	_	_	13	punct	_	_
11	«	«	PUNCT	_	_	13	punct	_	_
12	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	13	det	_	_
13	roi	roi	NOUN	_	Gender=Masc|Number=Sing	7	xcomp	_	_
14	de	de	ADP	_	_	16	case	_	_
15	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing	16	det	_	_
16	comédie	comédie	NOUN	_	Gender=Fem|Number=Sing	13	nmod	_	_
17	»	»	PUNCT	_	_	13	punct	_	_
18	)	)	PUNCT	_	_	13	punct	_	_
19	.	.	PUNCT	_	_	7	punct	_	_

~~~


