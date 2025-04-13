---
layout: base
title:  'Statistics of obl:agent in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_ewt-dep-obl-unmarked.html">obl:unmarked</a></tt>.

376 nodes (0%) are attached to their parents as `obl:agent`.

375 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.75531914893617.

The following 6 pairs of parts of speech are connected with `obl:agent`: <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (220; 59% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (140; 37% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (9; 2% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 obl:agent	color:blue
1	i	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	_
2	think	think	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	5	nsubj	5:nsubj	_
4	could	could	AUX	MD	VerbForm=Fin	5	aux	5:aux	_
5	get	get	VERB	VB	VerbForm=Inf	2	ccomp	2:ccomp	_
6	their	their	PRON	PRP$	Case=Gen|Number=Plur|Person=3|Poss=Yes|PronType=Prs	7	nmod:poss	7:nmod:poss	_
7	asses	ass	NOUN	NNS	Number=Plur	5	obj	5:obj|8:nsubj:xsubj	_
8	kicked	kick	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	5	xcomp	5:xcomp	_
9	by	by	ADP	IN	_	10	case	10:case	_
10	cats	cat	NOUN	NNS	Number=Plur	8	obl:agent	8:obl:agent	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:agent	color:blue
1	Posted	post	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
2	by	by	ADP	IN	_	3	case	3:case	_
3	darin	darin	PROPN	NNP	Number=Sing	1	obl:agent	1:obl:agent	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 obl:agent	color:blue
1	You	your	PRON	PRP$	Case=Gen|Person=2|Poss=Yes|PronType=Prs|Typo=Yes	2	nmod:poss	2:nmod:poss	CorrectForm=Your
2	company	company	NOUN	NN	Number=Sing	7	nsubj:pass	7:nsubj:pass	_
3	and	and	CCONJ	CC	_	4	cc	4:cc	_
4	services	service	NOUN	NNS	Number=Plur	2	conj	2:conj:and|7:nsubj:pass	_
5	will	will	AUX	MD	VerbForm=Fin	7	aux	7:aux	_
6	be	be	AUX	VB	VerbForm=Inf	7	aux:pass	7:aux:pass	_
7	recommended	recommend	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
8	by	by	ADP	IN	_	9	case	9:case	_
9	us	we	PRON	PRP	Case=Acc|Number=Plur|Person=1|PronType=Prs	7	obl:agent	7:obl:agent	_
10	to	to	ADP	IN	_	11	case	11:case	_
11	everyone	everyone	PRON	NN	Number=Sing|PronType=Tot	7	obl	7:obl:to	SpaceAfter=No
12	.	.	PUNCT	.	_	7	punct	7:punct	SpaceAfter=No
13	"	"	PUNCT	''	_	7	punct	7:punct	_

~~~


