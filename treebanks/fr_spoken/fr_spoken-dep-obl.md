---
layout: base
title:  'Statistics of obl in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `obl`

This relation is universal.
There are 3 language-specific subtypes of `obl`: <tt><a href="fr_spoken-dep-obl-comp.html">obl:comp</a></tt>, <tt><a href="fr_spoken-dep-obl-mod.html">obl:mod</a></tt>, <tt><a href="fr_spoken-dep-obl-periph.html">obl:periph</a></tt>.

4 nodes (0%) are attached to their parents as `obl`.

3 instances of `obl` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.25.

The following 2 pairs of parts of speech are connected with `obl`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (3; 75% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 obl	color:blue
1	qu'	qu'	PRON	_	_	0	root	_	_
2	est	être	AUX	_	_	1	cop	_	_
3	-	-	PUNCT	_	_	4	punct	_	_
4	ce	ce	PRON	_	_	1	nsubj	_	_
5	qu'	que	SCONJ	_	_	8	obj	_	_
6	vous	vous	PRON	_	_	8	nsubj	_	_
7	en	en	PRON	_	_	8	obl	_	_
8	pensez	penser	VERB	_	_	1	advcl:cleft	_	_
9	de	de	ADP	_	_	11	case	_	_
10	la	le	DET	_	_	11	det	_	_
11	boule	boule	NOUN	_	_	8	obl:periph	_	_
12	magique	magique	ADJ	_	_	11	amod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 obl	color:blue
1	et	et	CCONJ	_	_	3	cc	_	_
2	tout	tout	ADJ	_	_	3	amod	_	_
3	cela	cela	PRON	_	_	0	root	_	_
4	grâce	grâce	ADV	_	_	7	case	_	_
5	à	à	ADP	_	_	4	fixed	_	_
6	notre	son	DET	_	_	7	det	_	_
7	boule	boule	NOUN	_	_	3	obl	_	_
8	de	de	ADP	_	_	9	case	_	_
9	lavage	lavage	NOUN	_	_	7	nmod	_	_
10	maître	maître	NOUN	_	_	3	dislocated	_	_

~~~


