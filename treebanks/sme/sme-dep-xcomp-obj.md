---
layout: base
title:  'Statistics of xcomp:obj in UD_North_Sami'
udver: '2'
---

## Treebank Statistics: UD_North_Sami: Relations: `xcomp:obj`

This relation is a language-specific subtype of <tt><a href="sme-dep-xcomp.html">xcomp</a></tt>.
There are also 1 other language-specific subtypes of `xcomp`: <tt><a href="sme-dep-xcomp-pred.html">xcomp:pred</a></tt>.

16 nodes (0%) are attached to their parents as `xcomp:obj`.

16 instances of `xcomp:obj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.1875.

The following 6 pairs of parts of speech are connected with `xcomp:obj`: <tt><a href="sme-pos-PRON.html">PRON</a></tt>-<tt><a href="sme-pos-NOUN.html">NOUN</a></tt> (5; 31% instances), <tt><a href="sme-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sme-pos-NOUN.html">NOUN</a></tt> (4; 25% instances), <tt><a href="sme-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sme-pos-ADJ.html">ADJ</a></tt> (2; 13% instances), <tt><a href="sme-pos-PRON.html">PRON</a></tt>-<tt><a href="sme-pos-ADJ.html">ADJ</a></tt> (2; 13% instances), <tt><a href="sme-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sme-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="sme-pos-PRON.html">PRON</a></tt>-<tt><a href="sme-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp:obj	color:blue
1	Mo	mo	ADV	Adv	_	4	advmod	_	_
2	dalle	dalle	ADV	Adv	_	4	advmod	_	_
3	sáhttet	sáhttit	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	4	aux	_	_
4	dadjat	dadjat	VERB	V	VerbForm=Inf	0	root	_	_
5	su	son	PRON	Pron	Case=Acc|Number=Sing|Person=3|PronType=Prs	4	obj	_	_
6	iežat	ieš	PRON	Pron	Case=Gen|Number[psor]=Sing|Person[psor]=2|PronType=Prs|Reflex=Yes	7	nmod:poss	_	_
7	oabbán	oabbá	NOUN	N	Case=Ess	5	xcomp:obj	_	SpaceAfter=No
8	?	?	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp:obj	color:blue
1	Eanetlohku	eanetlohku	NOUN	N	Case=Nom|Number=Sing	5	nsubj	_	_
2	lea	leat	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	menddo	menddo	ADV	Adv	_	4	advmod	_	_
4	unnán	unnán	ADV	Adv	_	5	advmod	_	_
5	bidjan	bidjat	VERB	V	Aspect=Perf|VerbForm=Part	0	root	_	_
6	Finnmárkku	Finnmárku	PROPN	N	Case=Gen|Number=Sing	7	nmod:poss	_	_
7	mihtilmas	mihtilmas	ADJ	A	_	8	amod	_	_
8	diliid	dilli	NOUN	N	Case=Acc|Number=Plur	5	obj	_	_
9	vuođđun	vuođđu	NOUN	N	Case=Ess	8	xcomp:obj	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 17 xcomp:obj	color:blue
1	1936:s	1936	NUM	Num	Case=Loc|Number=Sing|NumType=Card	2	obl	_	_
2	válddii	váldit	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	stáhta	stáhta	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	_
4	badjelasas	badjelii	ADV	Adv	Number[psor]=Sing|Person[psor]=3	2	advmod	_	_
5	dáid	dát	PRON	Pron	Case=Acc|Number=Plur|PronType=Dem	6	det	_	_
6	goluid	gollu	NOUN	N	Case=Acc|Number=Plur	2	obj	_	SpaceAfter=No
7	,	,	PUNCT	CLB	_	2	punct	_	_
8	muhto	muhto	CCONJ	CC	_	2	cc	_	_
9	gielda	gielda	NOUN	N	Case=Nom|Number=Sing	11	nsubj	_	_
10	galggai	galgat	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	aux	_	_
11	máksit	máksit	VERB	V	VerbForm=Inf	2	parataxis	_	_
12	elrávnnji	elrávdnji	NOUN	N	Case=Acc|Number=Sing	11	obj	_	SpaceAfter=No
13	,	,	PUNCT	CLB	_	2	punct	_	_
14	lieggasa	liekkas	NOUN	N	Case=Acc|Number=Sing	12	conj	_	_
15	ja	ja	CCONJ	CC	_	14	cc	_	_
16	klássalanjaid	klássalatnja	NOUN	N	Case=Gen|Number=Plur	17	nmod:poss	_	_
17	buhtisin	buhtis	ADJ	A	Case=Ess	14	xcomp:obj	_	_
18	doallama	doallan	NOUN	N	Case=Acc|Number=Sing	12	conj	_	SpaceAfter=No
19	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


