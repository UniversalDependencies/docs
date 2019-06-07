---
layout: base
title:  'Statistics of csubj:cop in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `csubj:cop`

This relation is a language-specific subtype of <tt><a href="et_ewt-dep-csubj.html">csubj</a></tt>.

82 nodes (0%) are attached to their parents as `csubj:cop`.

77 instances of `csubj:cop` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.13414634146341.

The following 11 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (50; 61% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (18; 22% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (3; 4% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj:cop	color:blue
1	Jumala	Jumal	PROPN	S	Case=Gen|Number=Sing	2	nmod	2:nmod	_
2	saladustest	saladus	NOUN	S	Case=Ela|Number=Plur	5	obl	5:obl	_
3	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
4	raske	raske	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	0:root	_
5	kõnelda	kõnelema	VERB	V	VerbForm=Inf	4	csubj:cop	4:csubj	_
6	teistmoodi	teist_moodi	ADV	D	_	5	advmod	5:advmod	_
7	kui	kui	SCONJ	J	_	8	mark	8:mark	_
8	piltides	pilt	NOUN	S	Case=Ine|Number=Plur	6	advcl	6:advcl	SpaceAfter=No
9	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj:cop	color:blue
1	"	"	PUNCT	Z	_	2	punct	2:punct	_
2	Arvan	arvama	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	Z	_	6	punct	6:punct	_
4	et	et	SCONJ	J	_	6	mark	6:mark	_
5	parim	parim	ADJ	A	Case=Nom|Degree=Sup|Number=Sing	6	amod	6:amod	_
6	otsus	otsus	NOUN	S	Case=Nom|Number=Sing	2	ccomp	2:ccomp	_
7	oleks	olema	AUX	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
8	teha	tegema	VERB	V	VerbForm=Inf	6	csubj:cop	6:csubj	_
9	üks	üks	NUM	P	Case=Nom|Number=Sing|NumType=Card	11	nummod	11:nummod	_
10	sanyaku	sanyaku	NOUN	S	Case=Gen|Number=Sing	11	nmod	11:nmod	_
11	koht	koht	NOUN	S	Case=Nom|Number=Sing	8	obj	8:obj	_
12	juurde	juurde	ADV	D	_	8	compound:prt	8:compound	SpaceAfter=No
13	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 csubj:cop	color:blue
1	Need	see	PRON	P	Case=Nom|Number=Plur|PronType=Dem	4	nsubj:cop	4:nsubj	_
2	on	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
3	minu	mina	PRON	P	Case=Gen|Number=Sing|Person=1|PronType=Prs	4	nmod	4:nmod	_
4	teadmised	teadmine	NOUN	S	Case=Nom|Number=Plur	0	root	0:root	_
5	aga	aga	CCONJ	J	_	7	cc	7:cc	_
6	võib-olla	võib-olla	ADV	D	_	7	advmod	7:advmod	_
7	kellelgi	keegi	PRON	P	Case=Ade|Number=Sing|PronType=Ind	4	conj	4:conj	_
8	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
9	just	just	ADV	D	_	10	advmod	10:advmod	_
10	positiivseid	positiivne	ADJ	A	Case=Par|Degree=Pos|Number=Plur	11	amod	11:amod	_
11	näiteid	näide	NOUN	S	Case=Par|Number=Plur	12	obj	12:obj	_
12	tuua	tooma	VERB	V	VerbForm=Inf	7	csubj:cop	7:csubj	_

~~~


