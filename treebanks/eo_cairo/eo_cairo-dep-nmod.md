---
layout: base
title:  'Statistics of nmod in UD_Esperanto-Cairo'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Cairo: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="eo_cairo-dep-nmod-poss.html">nmod:poss</a></tt>.

5 nodes (3%) are attached to their parents as `nmod`.

5 instances of `nmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.2.

The following 4 pairs of parts of speech are connected with `nmod`: <tt><a href="eo_cairo-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_cairo-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="eo_cairo-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eo_cairo-pos-PRON.html">PRON</a></tt> (1; 20% instances), <tt><a href="eo_cairo-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_cairo-pos-PROPN.html">PROPN</a></tt> (1; 20% instances), <tt><a href="eo_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_cairo-pos-PROPN.html">PROPN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 nmod	color:blue
1	La	la	DET	_	_	2	det	_	_
2	knabino	knabino	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	_
3	skribis	skribi	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	leteron	letero	NOUN	_	Case=Acc|Number=Sing	3	obj	_	_
5	al	al	ADP	_	_	7	case	_	_
6	sia	si	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	7	nmod:poss	_	_
7	amiko	amimo	NOUN	_	Case=Nom|Number=Sing	4	nmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod	color:blue
1	Mia	mi	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	2	nmod:poss	_	_
2	patro	patro	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	_
3	estas	esti	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	pli	pli	ADV	_	_	5	advmod	_	_
5	moda	moda	ADJ	_	Case=Nom|Number=Sing	0	root	_	_
6	ol	ol	ADV	_	_	7	case	_	_
7	via	vi	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod	color:blue
1	La	la	DET	_	_	2	det	_	_
2	najbaro	najbaro	NOUN	_	Case=Nom|Number=Sing	6	nsubj	_	_
3	de	de	ADP	_	_	4	case	_	_
4	Petro	Petro	PROPN	_	Case=Nom|Number=Sing	2	nmod	_	_
5	ruĝe	ruĝe	ADV	_	_	6	advmod	_	_
6	farbis	farbi	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	la	la	DET	_	_	8	det	_	_
8	barilon	barilo	NOUN	_	Case=Acc|Number=Sing	6	obj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


