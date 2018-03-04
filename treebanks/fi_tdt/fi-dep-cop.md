---
layout: base
title:  'Statistics of cop in UD_Finnish'
udver: '2'
---

## Treebank Statistics: UD_Finnish: Relations: `cop`

This relation is universal.
There are 1 language-specific subtypes of `cop`: <tt><a href="fi-dep-cop-own.html">cop:own</a></tt>.

5165 nodes (3%) are attached to their parents as `cop`.

4178 instances of `cop` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.09428848015489.

The following 13 pairs of parts of speech are connected with `cop`: <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (2431; 47% instances), <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (1581; 31% instances), <tt><a href="fi-pos-ADV.html">ADV</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (412; 8% instances), <tt><a href="fi-pos-PRON.html">PRON</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (343; 7% instances), <tt><a href="fi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (155; 3% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (151; 3% instances), <tt><a href="fi-pos-NUM.html">NUM</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (63; 1% instances), <tt><a href="fi-pos-SYM.html">SYM</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (15; 0% instances), <tt><a href="fi-pos-ADP.html">ADP</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="fi-pos-AUX.html">AUX</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="fi-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="fi-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fi-pos-X.html">X</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cop	color:blue
1	Bagelit	bagel	NOUN	N	Case=Nom|Number=Plur	6	nsubj:cop	_	_
2	ja	ja	CCONJ	C	_	3	cc	_	_
3	smoothiet	smoothie	NOUN	N	Case=Nom|Number=Plur	1	conj	6:nsubj:cop	_
4	olivat	olla	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
5	ihana	ihana	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	amod	_	_
6	tapa	tapa	NOUN	N	Case=Nom|Number=Sing	0	root	_	_
7	aloittaa	aloittaa	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	6	acl	_	_
8	aamu	aamu	NOUN	N	Case=Nom|Number=Sing	7	obj	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cop	color:blue
1	On	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
2	kyllä	kyllä	ADV	Adv	_	3	advmod	_	_
3	kiva	kiva	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	7	punct	_	_
5	kun	kun	SCONJ	C	_	7	mark	_	_
6	tuolla	tuolla	ADV	Adv	_	7	advmod	_	_
7	sai	saada	VERB	V	Mood=Ind|Number=Sing|Person=0|Tense=Past|VerbForm=Fin|Voice=Act	3	csubj:cop	_	_
8	hipelöidä	hipelöidä	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	7	xcomp	_	_
9	kaikkea	kaikki	PRON	Pron	Case=Par|Number=Sing|PronType=Ind	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
11	:)	:)	SYM	Symb	_	3	discourse	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cop	color:blue
1	Oliko	olla	AUX	V	Clitic=Ko|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	cop	_	_
2	nyt	nyt	ADV	Adv	_	0	root	_	_
3	muuten	muuten	ADV	Adv	_	2	advmod	_	_
4	tarpeeksi	tarpeeksi	ADV	Adv	_	5	advmod	7:advmod	_
5	höpötystä	höpötys	NOUN	N	Case=Par|Number=Sing	2	nsubj:cop	_	_
6	ja	ja	CCONJ	C	_	7	cc	_	_
7	kuulumisia	kuulumiset	NOUN	N	Case=Par|Number=Plur	5	conj	2:nsubj:cop	SpaceAfter=No
8	?	?	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
9	:)	:)	SYM	Symb	_	2	discourse	_	_

~~~


