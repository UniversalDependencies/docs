

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

1 nodes (0%) are attached to their parents as `reparandum`.

1 instances of `reparandum` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `reparandum`: [sv-pos/PRON]()-[sv-pos/PRON]() (1; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 reparandum	color:blue
1	Jag	_	PRON	PERS-P1SG-NOM	_	3	nsubj	_	_
2	jag	_	PRON	PERS-SG-NOM	_	1	reparandum	_	_
3	menar	_	VERB	PRES-ACT	_	0	root	_	_
4	"	_	PUNCT	Quote	_	6	punct	_	_
5	,	_	PUNCT	Comma	_	4	punct	_	_
6	sade	_	VERB	PAST-ACT	_	3	amod	_	_
7	han	_	PRON	PERS-P3SG-NOM	_	6	nsubj	_	_
8	svävande	_	VERB	NDE	_	6	advcl	_	_
9	då	_	SCONJ	_	_	7	mark	_	_
10	mrs	_	NOUN	SG-IND-NOM	_	11	nmod	_	_
11	Weasleys	_	PROPN	SG-GEN	_	13	nmod:poss	_	_
12	ögon	_	NOUN	PL-IND-NOM	_	13	nsubj	_	_
13	sköt	_	VERB	PAST-ACT	_	6	advcl	_	_
14	nya	_	ADJ	POS-PL-IND	_	15	amod	_	_
15	blixtar	_	NOUN	PL-IND-NOM	_	13	dobj	_	_
16	,	_	PUNCT	Comma	_	3	punct	_	_
17	"	_	PUNCT	Quote	_	6	punct	_	_
18	att	_	SCONJ	_	_	23	mark	_	_
19	det	_	PRON	PERS-P3SG	_	23	nsubj	_	_
20	var	_	VERB	PAST-ACT	_	23	cop	_	_
21	väldigt	_	ADV	POS	_	22	advmod	_	_
22	illa	_	ADV	_	_	23	advmod	_	_
23	gjort	_	VERB	AD-SG-IND	_	3	xcomp	_	_
24	,	_	PUNCT	Comma	_	3	punct	_	_
25	pojkar	_	NOUN	PL-IND-NOM	_	23	vocative	_	_
26	,	_	PUNCT	Comma	_	29	punct	_	_
27	verkligen	_	ADV	_	_	29	advmod	_	_
28	mycket	_	ADV	_	_	30	advmod	_	_
29	illa	_	ADV	_	_	24	advmod	_	_
30	gjort	_	VERB	SUP-ACT	_	26	amod	_	_
31	"	_	PUNCT	Quote	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is universal.

6 nodes (1%) are attached to their parents as `reparandum`.

6 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 4 pairs of parts of speech are connected with `reparandum`: [sv-pos/NOUN]()-[sv-pos/X]() (2; 33% instances), [sv-pos/VERB]()-[sv-pos/X]() (2; 33% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (1; 17% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (1; 17% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 reparandum	color:blue
1	tp@&	_	X	?	_	2	reparandum	_	_
2	POJKE	_	NOUN	NN	_	3	nsubj	_	_
3	LÄGGA-SIG	_	VERB	VB	_	0	root	_	_
4	HUND	_	NOUN	NN	_	2	conj	_	_
5	VARELSE(VVb)+BEFINNA@p	_	VERB	VBAV	_	3	conj	_	_
6	SOVA(Jv)	_	VERB	VB	_	3	conj	_	_
7	TIDEN-GÅR@z	_	VERB	VB	_	6	advcl	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 reparandum	color:blue
1	TRÖTT	_	VERB	VBS	_	0	root	_	_
2	glosa@&	_	X	?	_	3	reparandum	_	_
3	MÖRK	_	VERB	VBS	_	1	conj	_	_
4	LÅTA-VARA@z	_	X	G	_	1	discourse	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 reparandum	color:blue
1	HUND	_	NOUN	NN	_	2	nsubj	_	_
2	VARELSE(VVb)+FÖRFLYTTA@p	_	VERB	VBAV	_	0	root	_	_
3	PEK	_	DET	PEK	_	4	det	_	_
4	TRÄD	_	NOUN	NN	_	2	nmod	_	_
5	BI	_	NOUN	NN	_	8	compound	_	_
6	form(jj)@p@&	_	VERB	VBAV	_	7	reparandum	_	_
7	GETING	_	NOUN	NN	_	8	compound	_	_
8	FORM(JJb)+BESKRIVNING@p	_	VERB	VBAV	_	2	nmod	_	_

~~~


