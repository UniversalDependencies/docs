---
layout: base
title:  'Statistics of vocative in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `vocative`

This relation is universal.

25 nodes (0%) are attached to their parents as `vocative`.

17 instances of `vocative` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.84.

The following 10 pairs of parts of speech are connected with `vocative`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (11; 44% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (6; 24% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 vocative	color:blue
1	KaptenTrumm	Kapten_Trumm	PROPN	S	Case=Nom|Number=Sing	7	vocative	7:vocative	SpaceAfter=No
2	,	,	PUNCT	Z	_	7	punct	7:punct	_
3	mille	mis	PRON	P	Case=Gen|Number=Sing|PronType=Int,Rel	7	obl	7:obl	_
4	suhtes	suhtes	ADP	K	AdpType=Post	3	case	3:case	_
5	meie	mina	PRON	P	Case=Gen|Number=Plur|Person=1|PronType=Prs	6	nmod	6:nmod	_
6	maailmavaade	maa_ilma_vaade	NOUN	S	Case=Nom|Number=Sing	7	nsubj	7:nsubj	_
7	kivistunud	kivistuma	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
8	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	7:aux	SpaceAfter=No
9	?	?	PUNCT	Z	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 vocative	color:blue
1	Kuidas	kuidas	ADV	D	_	3	mark	3:mark	_
2	te	sina	PRON	P	Case=Nom|Number=Plur|Person=2|PronType=Prs	3	nsubj	3:nsubj	_
3	saate	saama	VERB	V	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	välja	välja	ADV	D	_	3	compound:prt	3:compound	SpaceAfter=No
5	,	,	PUNCT	Z	_	3	punct	3:punct	_
6	leitnant	leitnant	NOUN	S	Case=Nom|Number=Sing	3	vocative	3:vocative	_
7	Smith	Smith	PROPN	S	Case=Nom|Number=Sing	6	appos	6:appos	SpaceAfter=No
8	?	?	PUNCT	Z	_	3	punct	3:punct	_
9	”	”	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 vocative	color:blue
1	Kallid	kallis	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	2	amod	2:amod	_
2	naised	naine	NOUN	S	Case=Nom|Number=Plur	7	vocative	7:vocative	SpaceAfter=No
3	,	,	PUNCT	Z	_	7	punct	7:punct	_
4	te	sina	PRON	P	Case=Nom|Number=Plur|Person=2|PronType=Prs	7	nsubj:cop	7:nsubj	_
5	olete	olema	AUX	V	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
6	meestega	mees	NOUN	S	Case=Com|Number=Plur	7	obl	7:obl	_
7	võrdsed	võrdne	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	0	root	0:root	_
8	alles	alles	ADV	D	_	9	advmod	9:advmod	_
9	siis	siis	ADV	D	_	7	advmod	7:advmod	_
10	kui	kui	SCONJ	J	_	17	mark	17:mark	_
11	te	sina	PRON	P	Case=Nom|Number=Plur|Person=2|PronType=Prs	17	nsubj	17:nsubj	_
12	saate	saama	AUX	V	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	17	aux	17:aux	_
13	ka	ka	ADV	D	_	17	advmod	17:advmod	_
14	püstijalu	püsti_jalu	ADV	D	_	17	advmod	17:advmod	_
15	seina	sein	NOUN	S	Case=Gen|Number=Sing	17	obl	17:obl	_
16	peale	peale	ADP	K	AdpType=Post	15	case	15:case	_
17	pissida	pissima	VERB	V	VerbForm=Inf	7	advcl	7:advcl	SpaceAfter=No
18	.	.	PUNCT	Z	_	7	punct	7:punct	_

~~~


