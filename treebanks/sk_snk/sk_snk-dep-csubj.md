---
layout: base
title:  'Statistics of csubj in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="sk_snk-dep-csubj-pass.html">csubj:pass</a></tt>.

164 nodes (0%) are attached to their parents as `csubj`.

152 instances of `csubj` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.74390243902439.

The following 14 pairs of parts of speech are connected with `csubj`: <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (69; 42% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (41; 25% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (28; 17% instances), <tt><a href="sk_snk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (8; 5% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="sk_snk-pos-DET.html">DET</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sk_snk-pos-NUM.html">NUM</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sk_snk-pos-PART.html">PART</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 csubj	color:blue
1	Spornou	sporný	ADJ	AAfs7x	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	2	amod	2:amod	_
2	otázkou	otázka	NOUN	SSfs7	Case=Ins|Gender=Fem|Number=Sing	3	obl:arg	3:obl:arg:ins	_
3	zostávalo	zostávať	VERB	VLescn+	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Z	_	9	punct	9:punct	_
5	či	či	CCONJ	O	_	9	mark	9:mark	_
6	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	10	expl:pv	10:expl:pv	_
7	rysy	rys	NOUN	SSip1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	9	nsubj	9:nsubj|10:nsubj	_
8	Mesiaca	mesiac	PROPN	SSis2:r	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod	7:nmod:gen	_
9	môžu	môcť	VERB	VKepc+	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	csubj	3:csubj	_
10	meniť	meniť	VERB	VIe+	Aspect=Imp|Polarity=Pos|VerbForm=Inf	9	xcomp	9:xcomp	SpaceAfter=No
11	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj	color:blue
1	Nie	nie	PART	T	_	3	advmod	3:advmod	_
2	je	byť	AUX	VKesc-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	potrebné	potrebný	ADJ	AAns1x	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	0:root	_
4	hľadať	hľadať	VERB	VIe+	Aspect=Imp|Polarity=Pos|VerbForm=Inf	3	csubj	3:csubj	_
5	dôvod	dôvod	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	4:obj	SpaceAfter=No
6	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Cieľom	cieľ	NOUN	SSis7	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	0	root	0:root	_
2	bolo	byť	AUX	VLescn+	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	1	cop	1:cop	_
3	vytvoriť	vytvoriť	VERB	VId+	Aspect=Perf|Polarity=Pos|VerbForm=Inf	1	csubj	1:csubj	_
4	samostatný	samostatný	ADJ	AAis4x	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	_
5	štát	štát	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	obj	3:obj	_
6	do	do	ADP	Eu2	AdpType=Prep|Case=Gen	7	case	7:case	_
7	roku	rok	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	obl	3:obl:do:gen	_
8	2005	2005	NUM	0	NumForm=Digit	7	nummod	7:nummod	SpaceAfter=No
9	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


