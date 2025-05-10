---
layout: base
title:  'Statistics of obj in UD_Esperanto-Cairo'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Cairo: Relations: `obj`

This relation is universal.

14 nodes (8%) are attached to their parents as `obj`.

13 instances of `obj` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.57142857142857.

The following 3 pairs of parts of speech are connected with `obj`: <tt><a href="eo_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_cairo-pos-NOUN.html">NOUN</a></tt> (11; 79% instances), <tt><a href="eo_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_cairo-pos-PRON.html">PRON</a></tt> (2; 14% instances), <tt><a href="eo_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_cairo-pos-NUM.html">NUM</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 obj	color:blue
1	Ili	il	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	_
2	ne	ne	ADV	_	_	3	advmod	_	_
3	havas	havi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	ideon	ideo	NOUN	_	Case=Acc|Number=Sing	3	obj	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	kiu	kiu	PRON	_	Case=Nom|Number=Sing|PronType=Rel	7	nsubj	_	_
7	skribis	skribi	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	acl:relcl	_	_
8	ĝin	ĝi	PRON	_	Case=Acc|Number=Sing|PronType=Dem	7	obj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obj	color:blue
1	Petro	Petro	PROPN	_	Case=Nom|Number=Sing	4	nsubj	_	_
2	kaj	kaj	CCONJ	_	_	3	cc	_	_
3	Maria	Maria	PROPN	_	Case=Nom|Number=Sing	1	conj	_	_
4	brakumis	brakumi	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
5	unu	unu	NUM	_	_	4	obj	_	_
6	la	la	DET	_	_	7	det	_	_
7	alian	alia	ADJ	_	Case=Acc|Degree=Pos|Number=Sing	5	compound	_	_
8	kaj	kaj	CCONJ	_	_	10	cc	_	_
9	poste	poste	ADV	_	_	10	advmod	_	_
10	forlasis	forlasi	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	conj	_	_
11	la	la	DET	_	_	12	det	_	_
12	ĉambron	ĉambron	NOUN	_	Case=Acc|Number=Sing	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


