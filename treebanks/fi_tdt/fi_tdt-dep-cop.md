---
layout: base
title:  'Statistics of cop in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `cop`

This relation is universal.
There are 1 language-specific subtypes of `cop`: <tt><a href="fi_tdt-dep-cop-own.html">cop:own</a></tt>.

5153 nodes (3%) are attached to their parents as `cop`.

4166 instances of `cop` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.09780710265865.

The following 10 pairs of parts of speech are connected with `cop`: <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (2425; 47% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (1577; 31% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (419; 8% instances), <tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (341; 7% instances), <tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (154; 3% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (153; 3% instances), <tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (64; 1% instances), <tt><a href="fi_tdt-pos-SYM.html">SYM</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (15; 0% instances), <tt><a href="fi_tdt-pos-ADP.html">ADP</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="fi_tdt-pos-X.html">X</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cop	color:blue
1	Bagelit	bagel	NOUN	N	Case=Nom|Number=Plur	6	nsubj:cop	6:nsubj:cop	_
2	ja	ja	CCONJ	C	_	3	cc	3:cc	_
3	smoothiet	smoothie	NOUN	N	Case=Nom|Number=Plur	1	conj	1:conj|6:nsubj:cop	_
4	olivat	olla	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
5	ihana	ihana	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	amod	6:amod	_
6	tapa	tapa	NOUN	N	Case=Nom|Number=Sing	0	root	0:root	_
7	aloittaa	aloittaa	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	6	acl	6:acl	_
8	aamu	aamu	NOUN	N	Case=Nom|Number=Sing	7	obj	7:obj	SpaceAfter=No
9	.	.	PUNCT	Punct	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cop	color:blue
1	On	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
2	kyllä	kyllä	ADV	Adv	_	3	advmod	3:advmod	_
3	kiva	kiva	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Punct	_	7	punct	7:punct	_
5	kun	kun	SCONJ	C	_	7	mark	7:mark	_
6	tuolla	tuolla	ADV	Adv	_	7	advmod	7:advmod	_
7	sai	saada	VERB	V	Mood=Ind|Number=Sing|Person=0|Tense=Past|VerbForm=Fin|Voice=Act	3	csubj:cop	3:csubj:cop	_
8	hipelöidä	hipelöidä	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	7	xcomp	7:xcomp	_
9	kaikkea	kaikki	PRON	Pron	Case=Par|Number=Sing|PronType=Ind	8	obj	8:obj	SpaceAfter=No
10	.	.	PUNCT	Punct	_	3	punct	3:punct	SpaceAfter=No
11	:)	:)	SYM	Symb	_	3	discourse	3:discourse	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cop	color:blue
1	Oliko	olla	AUX	V	Clitic=Ko|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	cop	2:cop	_
2	nyt	nyt	ADV	Adv	_	0	root	0:root	_
3	muuten	muuten	ADV	Adv	_	2	advmod	2:advmod	_
4	tarpeeksi	tarpeeksi	ADV	Adv	_	5	advmod	5:advmod|7:advmod	_
5	höpötystä	höpötys	NOUN	N	Case=Par|Number=Sing	2	nsubj:cop	2:nsubj:cop	_
6	ja	ja	CCONJ	C	_	7	cc	7:cc	_
7	kuulumisia	kuulumiset	NOUN	N	Case=Par|Number=Plur	5	conj	2:nsubj:cop|5:conj	SpaceAfter=No
8	?	?	PUNCT	Punct	_	2	punct	2:punct	SpaceAfter=No
9	:)	:)	SYM	Symb	_	2	discourse	2:discourse	_

~~~


