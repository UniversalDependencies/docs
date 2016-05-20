

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is a language-specific subtype of [nmod]().

4372 nodes (1%) are attached to their parents as `nmod:poss`.

4368 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11733760292772.

The following 11 pairs of parts of speech are connected with `nmod:poss`: [fr-pos/NOUN]()-[fr-pos/DET]() (4307; 99% instances), [fr-pos/PROPN]()-[fr-pos/DET]() (42; 1% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (6; 0% instances), [fr-pos/ADJ]()-[fr-pos/DET]() (5; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (3; 0% instances), [fr-pos/VERB]()-[fr-pos/DET]() (3; 0% instances), [fr-pos/X]()-[fr-pos/DET]() (2; 0% instances), [fr-pos/ADP]()-[fr-pos/DET]() (1; 0% instances), [fr-pos/DET]()-[fr-pos/DET]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nmod:poss	color:blue
1	Elle	elle	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	lutte	lutter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	pour	pour	ADP	_	_	4	mark	_	_
4	échapper	échapper	VERB	_	VerbForm=Inf	2	advcl	_	_
5	à	à	ADP	_	_	7	case	_	_
6	les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur	7	det	_	_
7	tueurs	tueur	NOUN	_	Gender=Masc|Number=Plur	4	nmod	_	_
8	à	à	ADP	_	_	10	case	_	_
9	ses	son	DET	_	Gender=Fem|Number=Plur	10	nmod:poss	_	_
10	trousses	trousses	NOUN	_	Gender=Fem|Number=Plur	4	nmod	_	_
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nmod:poss	color:blue
1	Bonnes	bon	ADJ	_	Gender=Fem|Number=Plur	2	amod	_	_
2	idées	idée	NOUN	_	Gender=Fem|Number=Plur	0	root	_	_
3	de	de	ADP	_	_	4	case	_	_
4	recherche	recherche	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
5	de	de	ADP	_	_	6	case	_	_
6	financement	financement	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_
7	pour	pour	ADP	_	_	9	case	_	_
8	ma	son	DET	_	Gender=Fem|Number=Sing	9	nmod:poss	_	_
9	TPE	TPE	PROPN	_	_	6	nmod	_	_
10	(	(	PUNCT	_	_	11	punct	_	_
11	logiciel	logiciel	NOUN	_	Gender=Masc|Number=Sing	9	appos	_	_
12	)	)	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 20 nmod:poss	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	2	det	_	_
2	cabinet	cabinet	NOUN	_	Gender=Masc|Number=Sing	14	nsubj	_	_
3	d'	de	ADP	_	_	4	case	_	_
4	architectes	architecte	NOUN	_	Gender=Masc|Number=Plur	2	nmod	_	_
5	de	de	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	7	det	_	_
7	Harmon	Harmon	PROPN	_	_	2	nmod	_	_
8	Hotel	Hotel	PROPN	_	_	7	name	_	_
9	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	_
10	Lord	Lord	PROPN	_	_	0	root	_	_
11	Norman	Norman	PROPN	_	_	10	name	_	_
12	Foster	Foster	PROPN	_	_	10	name	_	_
13	&	&	SYM	_	_	10	cc	_	_
14	Partners	Partners	PROPN	_	_	10	conj	_	_
15	et	et	CONJ	_	_	10	cc	_	_
16	son	son	DET	_	Gender=Masc|Number=Sing	17	nmod:poss	_	_
17	maître	maître	NOUN	_	Gender=Masc|Number=Sing	25	nsubj	_	_
18	d'	de	ADP	_	_	19	case	_	_
19	œuvre	œuvre	NOUN	_	Gender=Fem|Number=Sing	17	nmod	_	_
20	Andrew	Andrew	PROPN	_	_	25	nmod:poss	_	_
21	Sasson	Sasson	PROPN	_	_	20	name	_	_
22	's	's	PART	_	_	20	case	_	_
23	The	the	DET	_	Definite=Def	25	det	_	_
24	Light	Light	PROPN	_	_	25	compound	_	_
25	Group	Group	PROPN	_	_	10	conj	_	_
26	.	.	PUNCT	_	_	14	punct	_	_

~~~


