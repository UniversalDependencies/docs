---
layout: base
title:  'Statistics of det in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="en_gum-dep-det-predet.html">det:predet</a></tt>.

14841 nodes (8%) are attached to their parents as `det`.

14809 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.61410956135031.

The following 11 pairs of parts of speech are connected with `det`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (13067; 88% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (1428; 10% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (205; 1% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (44; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (43; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (23; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (11; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (10; 0% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (8; 0% instances), <tt><a href="en_gum-pos-PART.html">PART</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det	color:blue
1	In	in	ADP	IN	_	3	case	3:case	Discourse=elaboration-additional:71->66:3:ref-prs-499-502,549+sem-synym-499,551
2	his	his	PRON	PRP$	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	Entity=(96-abstract-new-cf4-2-sgl(90-person-giv:act-cf1*-1-ana)
3	memory	memory	NOUN	NN	Number=Sing	5	obl	5:obl:in	Entity=96)
4	Byron	Byron	PROPN	NNP	Number=Sing	5	nsubj	5:nsubj	Entity=(3-person-giv:act-cf2-1-coref-Lord_Byron)
5	composed	compose	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	MSeg=compos-ed
6	Thyrza	Thyrza	PROPN	NNP	Number=Sing	5	obj	5:obj	Entity=(97-abstract-new-cf3-1-coref)|SpaceAfter=No|XML=<hi rend:::"italic"></hi>
7	,	,	PUNCT	,	_	9	punct	9:punct	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	9:det	Entity=(97-abstract-giv:act-cf3-2-appos
9	series	series	NOUN	NN	Number=Sing	6	appos	6:appos	_
10	of	of	ADP	IN	_	11	case	11:case	_
11	elegies	elegy	NOUN	NNS	Number=Plur	9	nmod	9:nmod:of	Entity=97)|MSeg=elegie-s|SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	5:punct	_
13	[	[	PUNCT	-LRB-	_	14	punct	14:punct	Discourse=explanation-evidence:72->71:0:grf-prn-560,562|SpaceAfter=No
14	25	25	NUM	CD	NumForm=Digit|NumType=Card	5	dep	5:dep	Entity=(98-abstract-new-cf5-1-sgl)|SpaceAfter=No
15	]	]	PUNCT	-RRB-	_	14	punct	14:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 det	color:blue
1	—	—	PUNCT	:	_	2	punct	2:punct	Discourse=attribution-positive:60->54:1:grf-dsh-629+sem-atsrc-630-637
2	NORTON	Norton	PROPN	NNP	Number=Sing	0	root	0:root	Entity=(102-abstract-new-cf3-1,4-coref(1-person-giv:act-cf2-1-coref-Emperor_Norton
3	I	I	NUM	CD	NumForm=Roman|NumType=Card	2	dep	2:dep	Entity=1)|SpaceAfter=No
4	,	,	PUNCT	,	_	5	punct	5:punct	_
5	Emperor	Emperor	PROPN	NNP	Number=Sing	2	appos	2:appos	Entity=(1-person-giv:act-cf2-1,4,5-appos-Emperor_Norton
6	of	of	ADP	IN	_	9	case	9:case	_
7	the	the	DET	DT	Definite=Def|PronType=Art	9	det	9:det	Entity=(8-place-giv:act-cf1*-2,3-coref-United_States
8	United	Unite	VERB	NNP	Tense=Past|VerbForm=Part	9	amod	9:amod	MSeg=Unit-ed
9	States	State	PROPN	NNPS	Number=Plur	5	nmod	5:nmod:of	Entity=8)1)102)|MSeg=State-s|SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	See	see	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Discourse=joint-other_m:11->8:2:_
2	this	this	PRON	DT	Number=Sing|PronType=Dem	5	nsubj	5:nsubj	Entity=(11-abstract-acc:com-cf1-1-sgl)
3	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
4	the	the	DET	DT	Definite=Def|PronType=Art	5	det	5:det	_
5	little	little	ADJ	JJ	Degree=Pos	1	parataxis	1:parataxis	_
6	-	-	PUNCT	:	_	1	punct	1:punct	XML=<incident who:::"#Dan" type:::"computer beeping"></incident>

~~~


