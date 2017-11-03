---
layout: base
title:  'Statistics of csubj in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `csubj`

This relation is universal.

5 nodes (0%) are attached to their parents as `csubj`.

4 instances of `csubj` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.8.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (2; 40% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (2; 40% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 19 csubj	color:blue
1	In	in	ADP	_	_	3	case	_	_
2	de	de	DET	_	Definite=Def	3	det	_	_
3	loop	loop	NOUN	_	Gender=Com|Number=Sing	11	obl	_	_
4	der	de	DET	_	Definite=Def	5	det	_	_
5	jaren	jaar	NOUN	_	Number=Plur	3	nmod	_	_
6	werd	worden	AUX	_	Number=Sing|Tense=Past|VerbForm=Fin	11	cop	_	_
7	het	het	PRON	_	Person=3|PronType=Prs	11	expl	_	_
8	in	in	ADP	_	_	9	case	_	_
9	Vlaanderen	Vlaanderen	PROPN	_	Gender=Neut|Number=Sing	11	obl	_	_
10	een	een	DET	_	Definite=Ind	11	det	_	_
11	traditie	traditie	NOUN	_	Gender=Com|Number=Sing	0	root	_	_
12	de	de	DET	_	Definite=Def	13	det	_	_
13	krant	krant	NOUN	_	Gender=Com|Number=Sing	19	obj	_	_
14	van	van	ADP	_	_	15	case	_	_
15	achter	achter	ADP	_	_	19	obl	_	_
16	naar	naar	ADP	_	_	17	case	_	_
17	voren	voren	ADV	_	_	19	obl	_	_
18	te	te	ADP	_	_	19	mark	_	_
19	lezen	lezen	VERB	_	VerbForm=Inf	11	csubj	_	SpaceAfter=No
20	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 csubj	color:blue
1	Wanneer	wanneer	ADV	_	_	6	advmod	_	_
2	ze	ze	PRON	_	Person=3|PronType=Prs	6	nsubj	_	_
3	Leopold	Leopold	PROPN	_	_	6	obj	_	_
4	III	III	PROPN	_	_	3	flat:name	_	_
5	heeft	hebben	AUX	_	Number=Sing|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	ontmoet	ontmoeten	VERB	_	VerbForm=Part	10	csubj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	is	zijn	AUX	_	Number=Sing|Tense=Pres|VerbForm=Fin	10	cop	_	_
9	niet	niet	ADV	_	_	10	advmod	_	_
10	bekend	bekend	ADJ	_	Degree=Pos	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 12 csubj	color:blue
1	Wonder	wonder	NOUN	_	Gender=Neut|Number=Sing	4	advmod	_	_
2	boven	boven	ADP	_	_	3	case	_	_
3	wonder	wonder	NOUN	_	Gender=Neut|Number=Sing	1	obl	_	_
4	lukte	lukken	VERB	_	Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
5	het	het	PRON	_	Person=3|PronType=Prs	4	expl	_	_
6	de	de	DET	_	Definite=Def	8	det	_	_
7	oude	oud	ADJ	_	Degree=Pos	8	amod	_	_
8	garde	garde	NOUN	_	Gender=Com|Number=Sing	4	iobj	_	_
9	het	het	DET	_	Definite=Def	10	det	_	_
10	tij	tij	NOUN	_	Gender=Neut|Number=Sing	12	obj	_	_
11	te	te	ADP	_	_	12	mark	_	_
12	keren	keren	VERB	_	VerbForm=Inf	4	csubj	_	_
13	en	en	CCONJ	_	_	4	cc	_	_
14	de	de	DET	_	Definite=Def	15	det	_	_
15	Pruisen	Pruis	PROPN	_	Number=Plur	18	nsubj:pass	_	_
16	werden	worden	AUX	_	Number=Plur|Tense=Past|VerbForm=Fin	18	aux:pass	_	_
17	voorlopig	voorlopig	ADJ	_	Degree=Pos	18	advmod	_	_
18	teruggedrongen	terugdringen	VERB	_	VerbForm=Part	4	conj	_	SpaceAfter=No
19	.	.	PUNCT	_	_	4	punct	_	_

~~~


