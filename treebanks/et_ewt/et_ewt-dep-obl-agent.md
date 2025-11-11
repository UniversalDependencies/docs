---
layout: base
title:  'Statistics of obl:agent in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="et_ewt-dep-obl.html">obl</a></tt>.

42 nodes (0%) are attached to their parents as `obl:agent`.

39 instances of `obl:agent` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.88095238095238.

The following 6 pairs of parts of speech are connected with `obl:agent`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (14; 33% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (10; 24% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (9; 21% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (5; 12% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (2; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:agent	color:blue
1	Ja	ja	CCONJ	J	_	7	cc	7:cc	_
2	selliseid	selline	PRON	P	Case=Par|Number=Plur|PronType=Dem	7	obj	7:obj	_
3	sinu	sina	PRON	P	Case=Gen|Number=Sing|Person=2|PronType=Prs	4	obl:agent	4:obl:agent	_
4	arvates	arvama	VERB	V	VerbForm=Conv	7	advcl	7:advcl	_
5	siis	siis	ADV	D	_	7	advmod	7:advmod	_
6	ei	ei	AUX	V	Polarity=Neg	7	aux	7:aux	_
7	pakutagi	pakkuma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	või	või	ADV	D	_	7	advmod	7:advmod	SpaceAfter=No
9	?	?	PUNCT	Z	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	Need	see	DET	P	Case=Nom|Number=Plur|PronType=Dem	2	det	2:det	_
2	ohvrid	ohver	NOUN	S	Case=Nom|Number=Plur	4	obj	4:obj	_
3	on	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
4	tekitatud	tekitama	VERB	V	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	inimliku	inimlik	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	6	amod	6:amod	_
6	kurjuse	kurjus	NOUN	S	Case=Gen|Number=Sing	4	obl:agent	4:obl:agent	_
7	poolt	poolt	ADP	K	AdpType=Post	6	case	6:case	SpaceAfter=No
8	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 obl:agent	color:blue
1	Karbunkel	Karbunkel	PROPN	S	Case=Nom|Number=Sing	10	parataxis	10:parataxis	NE=B-Per|SpaceAfter=No
2	:	:	PUNCT	Z	_	1	punct	1:punct	_
3	aga	aga	CCONJ	J	_	10	cc	10:cc	_
4	kas	kas	ADV	D	_	10	advmod	10:advmod	_
5	kult	kult	NOUN	S	Case=Nom|Number=Sing	10	nsubj:cop	10:nsubj	NE=B-Per
6	rukkis	rukis	NOUN	S	Case=Ine|Number=Sing	5	nmod	5:nmod	NE=I-Per
7	ons	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	10:cop	_
8	vanemate	vanem	NOUN	S	Case=Gen|Number=Plur	9	obl:agent	9:obl:agent	_
9	pandu	pan=dud	ADJ	A	Degree=Pos|Tense=Past|Typo=Yes|VerbForm=Part|Voice=Pass	10	acl	10:acl	CorrectForm=pandud
10	nimi	nimi	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	_
11	ikke	ikke	ADV	D	_	10	advmod	10:advmod	_

~~~


