---
layout: base
title:  'Statistics of nsubj in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="et_ewt-dep-nsubj-cop.html">nsubj:cop</a></tt>.

1553 nodes (6%) are attached to their parents as `nsubj`.

1187 instances of `nsubj` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.35801674179008.

The following 12 pairs of parts of speech are connected with `nsubj`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (733; 47% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (659; 42% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (131; 8% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (14; 1% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 nsubj	color:blue
1	See	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	3	nsubj:cop	3:nsubj	_
2	ongi	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
3	leib	leib	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Z	_	8	punct	8:punct	_
5	mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	8	nsubj	8:nsubj	_
6	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	8:aux	_
7	alla	alla	ADV	D	_	8	compound:prt	8:compound	_
8	tulnud	tulema	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	3	acl:relcl	3:acl	_
9	taevast	taevas	NOUN	S	Case=Ela|Number=Sing	8	obl	8:obl	SpaceAfter=No
10	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 nsubj	color:blue
1	Zoppile	Zopp	PROPN	S	Case=All|Number=Sing	2	obl	2:obl	_
2	tõi	tooma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	edu	edu	NOUN	S	Case=Gen|Number=Sing	2	obj	2:obj	_
4	eelkõige	eel_kõige	ADV	D	_	2	advmod	2:advmod	_
5	hea	hea	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	amod	6:amod	_
6	serv	serv	NOUN	S	Case=Nom|Number=Sing	2	nsubj	2:nsubj	SpaceAfter=No
7	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Zopp	Zopp	PROPN	S	Case=Nom|Number=Sing	2	nsubj	2:nsubj	_
2	servis	servima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	ka	ka	ADV	D	_	4	advmod	4:advmod	_
4	täna	täna	ADV	D	_	2	advmod	2:advmod	_
5	[	[	PUNCT	Z	_	2	punct	2:punct	SpaceAfter=No
6	...	...	PUNCT	Z	_	2	punct	2:punct	SpaceAfter=No
7	]	]	PUNCT	Z	_	2	punct	2:punct	_

~~~


