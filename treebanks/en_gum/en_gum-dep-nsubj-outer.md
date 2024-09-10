---
layout: base
title:  'Statistics of nsubj:outer in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="en_gum-dep-nsubj-pass.html">nsubj:pass</a></tt>.

208 nodes (0%) are attached to their parents as `nsubj:outer`.

208 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.59615384615385.

The following 19 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (110; 53% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (57; 27% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (12; 6% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (4; 2% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PART.html">PART</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 nsubj:outer	color:blue
1	One	one	NUM	CD	NumForm=Word|NumType=Card	2	nummod	2:nummod	Discourse=mode-means:100->98:2:_|Entity=(101-abstract-new-cf3-2-coref
2	way	way	NOUN	NN	Number=Sing	9	nsubj:outer	9:nsubj:outer	_
3	to	to	PART	TO	_	4	mark	4:mark	Discourse=purpose-attribute:101->100:0:syn-mdf-757+syn-inf-758
4	personalize	personalize	VERB	VB	VerbForm=Inf	2	acl	2:acl:to	MSeg=person-al-ize
5	a	a	DET	DT	Definite=Ind|PronType=Art	6	det	6:det	Entity=(66-abstract-giv:act-cf1*-2-coref
6	joke	joke	NOUN	NN	Number=Sing	4	obj	4:obj	Entity=66)101)
7	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	9:cop	Discourse=same-unit_m:102->100:1:_
8	to	to	PART	TO	_	9	mark	9:mark	_
9	change	change	VERB	VB	VerbForm=Inf	0	root	0:root	_
10	the	the	DET	DT	Definite=Def|PronType=Art	11	det	11:det	Entity=(87-abstract-giv:inact-cf2-2-coref
11	ending	ending	NOUN	NN	Number=Sing	9	obj	9:obj	Entity=87)|MSeg=end-ing|SpaceAfter=No
12	.	.	PUNCT	.	_	9	punct	9:punct	_
13	[	[	PUNCT	-LRB-	_	14	punct	14:punct	Discourse=explanation-evidence:103->100:2:grf-prn-768,770|SpaceAfter=No|XML=<ref>
14	5	5	NUM	CD	NumForm=Digit|NumType=Card	9	dep	9:dep	Entity=(102-abstract-new-cf4-1-sgl)|SpaceAfter=No
15	]	]	PUNCT	-RRB-	_	14	punct	14:punct	XML=</ref>

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:outer	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj:outer	4:nsubj:outer	Discourse=evaluation-comment:71->65:2:_|Entity=(76-abstract-giv:act-cf1*-1-coref)
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
3	like	like	SCONJ	IN	_	4	mark	4:mark	_
4	giving	give	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	MSeg=giv-ing
5	full	full	ADJ	JJ	Degree=Pos	7	amod	7:amod	Entity=(81-abstract-new-cf4-3-sgl
6	fridge	fridge	NOUN	NN	Number=Sing	7	compound	7:compound	Entity=(79-object-giv:act-cf2-1-coref)
7	privileges	privilege	NOUN	NNS	Number=Plur	4	obj	4:obj	Entity=81)|MSeg=privilege-s
8	to	to	ADP	IN	_	10	case	10:case	_
9	your	your	PRON	PRP$	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	10	nmod:poss	10:nmod:poss	Entity=(82-animal-new-cf5-2-sgl-Labrador_Retriever(36-person-giv:inact-cf3-1-ana)
10	Labrador	Labrador	PROPN	NNP	Number=Sing	4	obl	4:obl:to	Entity=82)|SpaceAfter=No
11	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:outer	color:blue
1	And	and	CCONJ	CC	_	7	cc	7:cc	Discourse=elaboration-additional:34->32:1:ref-dem-190-193,196+dm-and-195
2	that	that	PRON	DT	Number=Sing|PronType=Dem	7	nsubj:outer	7:nsubj:outer	Entity=(18-abstract-giv:act-cf1*-1-ana)
3	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	_
4	where	where	ADV	WRB	PronType=Int	7	advmod	7:advmod	_
5	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	nsubj	7:nsubj	Entity=(18-abstract-giv:act-cf1*-1-ana)
6	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	_
7	fatal	fatal	ADJ	JJ	Degree=Pos	0	root	0:root	MSeg=fat-al|SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


