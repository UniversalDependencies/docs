---
layout: base
title:  'Statistics of advmod:quant in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `advmod:quant`

This relation is a language-specific subtype of <tt><a href="et-dep-advmod.html">advmod</a></tt>.

151 nodes (0%) are attached to their parents as `advmod:quant`.

145 instances of `advmod:quant` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40397350993377.

The following 5 pairs of parts of speech are connected with `advmod:quant`: <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (72; 48% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (48; 32% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (20; 13% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (9; 6% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:quant	color:blue
1	Kas	kas	ADV	D	_	2	advmod	_	_
2	neil	tema	PRON	P	Case=Ade|Number=Plur|Person=3|PronType=Prs	0	root	_	_
3	oleks	olema	AUX	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
4	piisavalt	piisavalt	ADV	D	_	5	advmod:quant	_	_
5	mune	muna	NOUN	S	Case=Par|Number=Plur	2	nsubj:cop	_	SpaceAfter=No
6	,	,	PUNCT	Z	_	11	punct	_	_
7	et	et	SCONJ	J	_	11	mark	_	_
8	see	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	11	obj	_	_
9	mulle	mina	PRON	P	Case=All|Number=Sing|Person=1|PronType=Prs	11	obl	_	_
10	silma	silm	NOUN	S	Case=Add|Number=Sing	11	obl	_	_
11	suruda	suruma	VERB	V	VerbForm=Inf	2	advcl	_	SpaceAfter=No
12	?	?	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod:quant	color:blue
1	Hetk	hetk	NOUN	S	Case=Nom|Number=Sing	2	advmod:quant	_	_
2	kõhklust	kõhklus	NOUN	S	Case=Par|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	5	punct	_	_
4	siis	siis	ADV	D	_	5	advmod	_	_
5	tõttas	tõttama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
6	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
7	rõdule	rõdu	NOUN	S	Case=All|Number=Sing	5	obl	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod:quant	color:blue
1	Olin	olema	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	_	_
2	haigena	haige	NOUN	S	Case=Ess|Number=Sing	5	obl	_	_
3	mitu	mitu	PRON	P	Case=Nom|Number=Sing|PronType=Ind	4	advmod:quant	_	_
4	korda	kord	NOUN	S	Case=Par|Number=Sing	5	obl	_	_
5	tõusnud	tõusma	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
6	,	,	PUNCT	Z	_	8	punct	_	_
7	et	et	SCONJ	J	_	8	mark	_	_
8	lahkuda	lahkuma	VERB	V	VerbForm=Inf	5	advcl	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	5	punct	_	_

~~~


