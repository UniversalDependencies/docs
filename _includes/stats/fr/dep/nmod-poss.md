

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is a language-specific subtype of [nmod]().

4362 nodes (1%) are attached to their parents as `nmod:poss`.

4359 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11600183402109.

The following 10 pairs of parts of speech are connected with `nmod:poss`: [fr-pos/NOUN]()-[fr-pos/DET]() (4298; 99% instances), [fr-pos/PROPN]()-[fr-pos/DET]() (45; 1% instances), [fr-pos/ADJ]()-[fr-pos/DET]() (5; 0% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (5; 0% instances), [fr-pos/X]()-[fr-pos/DET]() (3; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (2; 0% instances), [fr-pos/ADP]()-[fr-pos/DET]() (1; 0% instances), [fr-pos/DET]()-[fr-pos/DET]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nmod:poss	color:blue
1	Elle	_	PRON	_	_	2	nsubj	_	_
2	lutte	_	VERB	_	_	0	root	_	_
3	pour	_	ADP	_	_	4	mark	_	_
4	échapper	_	VERB	_	_	2	advcl	_	_
5	à	_	ADP	_	_	7	case	_	_
6	les	_	DET	_	_	7	det	_	_
7	tueurs	_	NOUN	_	_	4	nmod	_	_
8	à	_	ADP	_	_	10	case	_	_
9	ses	_	DET	_	_	10	nmod:poss	_	_
10	trousses	_	NOUN	_	_	4	nmod	_	_
11	.	_	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nmod:poss	color:blue
1	Bonnes	_	ADJ	_	_	2	amod	_	_
2	idées	_	NOUN	_	_	0	root	_	_
3	de	_	ADP	_	_	4	case	_	_
4	recherche	_	NOUN	_	_	2	nmod	_	_
5	de	_	ADP	_	_	6	case	_	_
6	financement	_	NOUN	_	_	4	nmod	_	_
7	pour	_	ADP	_	_	9	case	_	_
8	ma	_	DET	_	_	9	nmod:poss	_	_
9	TPE	_	PROPN	_	_	6	nmod	_	_
10	(	_	PUNCT	_	_	11	punct	_	_
11	logiciel	_	NOUN	_	_	9	appos	_	_
12	)	_	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 nmod:poss	color:blue
1	Plusieurs	_	DET	_	_	2	det	_	_
2	biographes	_	NOUN	_	_	3	nsubj	_	_
3	notent	_	VERB	_	_	0	root	_	_
4	qu'	_	SCONJ	_	_	7	mark	_	_
5	il	_	PRON	_	_	7	nsubj	_	_
6	doit	_	AUX	_	_	7	aux	_	_
7	fréquenter	_	VERB	_	_	3	ccomp	_	_
8	ensuite	_	ADV	_	_	7	advmod	_	_
9	la	_	DET	_	_	12	det	_	_
10	Lincoln	_	PROPN	_	_	12	nmod:poss	_	_
11	's	_	ADP	_	_	10	case	_	_
12	Inn	_	PROPN	_	_	7	dobj	_	_
13	,	_	PUNCT	_	_	12	punct	_	_
14	une	_	PRON	_	_	12	appos	_	_
15	de	_	ADP	_	_	19	case	_	_
16	les	_	DET	_	_	19	det	_	_
17	Inns	_	PROPN	_	_	14	nmod	_	_
18	of	_	ADP	_	_	19	case	_	_
19	Court	_	PROPN	_	_	17	nmod	_	_
20	,	_	PUNCT	_	_	19	punct	_	_
21	écoles	_	NOUN	_	_	17	appos	_	_
22	de	_	ADP	_	_	23	case	_	_
23	droit	_	NOUN	_	_	21	nmod	_	_
24	de	_	ADP	_	_	25	case	_	_
25	Londres	_	PROPN	_	_	21	nmod	_	_
26	.	_	PUNCT	_	_	3	punct	_	_

~~~


