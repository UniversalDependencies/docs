

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

1321 nodes (0%) are attached to their parents as `ccomp`.

1197 instances of `ccomp` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.37320211960636.

The following 19 pairs of parts of speech are connected with `ccomp`: [fr-pos/VERB]()-[fr-pos/VERB]() (912; 69% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (128; 10% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (104; 8% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (85; 6% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (25; 2% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (20; 2% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (9; 1% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (8; 1% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (6; 0% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (5; 0% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (4; 0% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (3; 0% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (3; 0% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/ADV]()-[fr-pos/ADJ]() (2; 0% instances), [fr-pos/NUM]()-[fr-pos/VERB]() (2; 0% instances), [fr-pos/INTJ]()-[fr-pos/NUM]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	«	«	PUNCT	_	_	2	punct	_	_
2	Est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	-ce	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	2	expl	_	_
4	qu'	que	SCONJ	_	_	7	mark	_	_
5	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
6	y	y	PRON	_	_	7	expl	_	_
7	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
8	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	poème	poème	NOUN	_	Gender=Masc|Number=Sing	7	dobj	_	_
10	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	11	det	_	_
11	matin	matin	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	_
12	?	?	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp	color:blue
1	C'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
2	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	an	an	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
5	plus	plus	ADV	_	_	6	advmod	_	_
6	tard	tard	ADV	_	_	4	advmod	_	_
7	qu'	que	SCONJ	_	_	9	mark	_	_
8	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
9	accomplira	accomplir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	ccomp	_	_
10	son	son	DET	_	Gender=Masc|Number=Sing|PronType=Prs	11	nmod:poss	_	_
11	rêve	rêve	NOUN	_	Gender=Masc|Number=Sing	9	dobj	_	_
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp	color:blue
1	Je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	confirme	confirmer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	que	que	SCONJ	_	_	8	mark	_	_
4	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	clinique	clinique	NOUN	_	Gender=Fem|Number=Sing	8	nsubj	_	_
6	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	très	très	ADV	_	_	8	advmod	_	_
8	recommandable	recommandable	ADJ	_	Gender=Fem|Number=Sing	2	ccomp	_	_
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


