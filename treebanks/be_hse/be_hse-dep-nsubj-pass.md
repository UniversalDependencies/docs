---
layout: base
title:  'Statistics of nsubj:pass in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="be_hse-dep-nsubj.html">nsubj</a></tt>.

998 nodes (0%) are attached to their parents as `nsubj:pass`.

624 instances of `nsubj:pass` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.18436873747495.

The following 15 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (771; 77% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-PRON.html">PRON</a></tt> (124; 12% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt> (62; 6% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-DET.html">DET</a></tt> (6; 1% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (6; 1% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-X.html">X</a></tt> (6; 1% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-SYM.html">SYM</a></tt> (4; 0% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-ADV.html">ADV</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-NUM.html">NUM</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nsubj:pass	color:blue
1	Затрыманыя	затрымаць	VERB	VBNH	Aspect=Perf|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
2	трое	трое	NUM	CD	Case=Nom|NumType=Sets	1	nummod:gov	1:nummod:gov	_
3	ўдзельнікаў	удзельнік	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	1	nsubj:pass	1:nsubj:pass	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Ён	ён	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	3:nsubj:pass	_
2	не	не	PART	NEG	Polarity=Neg	3	advmod	3:advmod	_
3	апячатаны	апячатаць	VERB	VBNH	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 nsubj:pass	color:blue
1	Вызвалены	вызваліць	VERB	VBNH	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
2	затрыманы	затрымаць	VERB	VBNH	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	9	acl	9:acl	_
3	ў	у	ADP	IN	_	4	case	4:case	_
4	справе	справа	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	2	obl	2:obl:у:loc	_
5	«	«	PUNCT	PUNCT	_	7	punct	7:punct	SpaceAfter=No
6	Белага	белы	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	7	amod	7:amod	_
7	Легіёну	легіён	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	4:nmod:gen	SpaceAfter=No
8	»	»	PUNCT	PUNCT	_	7	punct	7:punct	_
9	Сяргей	Сяргей	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	nsubj:pass	1:nsubj:pass	_
10	Стрыбульскі	Стрыбульскі	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	9	flat:name	9:flat:name	_

~~~


