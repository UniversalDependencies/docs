

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

1703 nodes (0%) are attached to their parents as `xcomp`.

1690 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.91544333529066.

The following 24 pairs of parts of speech are connected with `xcomp`: [fr-pos/VERB]()-[fr-pos/VERB]() (602; 35% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (470; 28% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (363; 21% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (182; 11% instances), [fr-pos/VERB]()-[fr-pos/NUM]() (24; 1% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (20; 1% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (5; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (5; 0% instances), [fr-pos/VERB]()-[fr-pos/X]() (5; 0% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (4; 0% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (4; 0% instances), [fr-pos/VERB]()-[fr-pos/SYM]() (4; 0% instances), [fr-pos/VERB]()-[fr-pos/ADV]() (3; 0% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/AUX]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADP]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/NUM]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (1; 0% instances).


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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	roi	roi	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
3	Mutesa	Mutesa	PROPN	_	_	2	appos	_	_
4	II	II	NUM	_	_	3	nummod	_	_
5	en	en	PRON	_	Person=3	6	iobj	_	_
6	devient	devenir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	président	président	NOUN	_	Gender=Masc|Number=Sing	6	xcomp	_	_
9	à	à	ADP	_	_	10	case	_	_
10	vie	vie	NOUN	_	Gender=Fem|Number=Sing	8	nmod	_	_
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	junk-food	junk-food	NOUN	_	Gender=Fem|Number=Sing	3	nsubj	_	_
3	rend	rendre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	aussi	aussi	ADV	_	_	5	advmod	_	_
5	accro	accro	ADJ	_	Gender=Masc|Number=Sing	3	xcomp	_	_
6	que	que	SCONJ	_	_	8	mark	_	_
7	les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
8	drogues	drogue	NOUN	_	Gender=Fem|Number=Plur	5	nmod	_	_
9	dures	dur	ADJ	_	Gender=Fem|Number=Plur	8	amod	_	_
10	!	!	PUNCT	_	_	3	punct	_	_

~~~


