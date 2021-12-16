---
layout: base
title:  'Statistics of goeswith in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `goeswith`

This relation is universal.

13 nodes (0%) are attached to their parents as `goeswith`.

13 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 5 pairs of parts of speech are connected with `goeswith`: <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (6; 46% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (4; 31% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 8% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 8% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 goeswith	color:blue
1	So	so	ADV	RB	_	6	advmod	6:advmod	Discourse=concession:32->24:1
2	before	before	ADV	IN	Typo=Yes	6	advmod	6:advmod	XML=<sic>
3	hand	hand	X	NN	Typo=Yes	2	goeswith	2:goeswith	XML=</sic>
4	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	6:nsubj	Entity=(person-4-giv:act-1-ana)
5	kinda	kinda	ADV	RB	Degree=Pos	6	advmod	6:advmod	_
6	knew	know	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	_
7	about	about	ADP	IN	_	8	case	8:case	_
8	him	he	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obl	6:obl:about	Entity=(person-3-giv:act-1-ana)|SpaceAfter=No
9	,	,	PUNCT	,	_	13	punct	13:punct	_
10	but	but	CCONJ	CC	_	13	cc	13:cc	Discourse=contrast_m:33->32:0
11	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	13:nsubj	Entity=(person-4-giv:act-1-ana)
12	never	never	ADV	RB	Polarity=Neg	13	advmod	13:advmod	_
13	met	meet	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	6	conj	6:conj:but	_
14	him	he	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obj	13:obj	Entity=(person-3-giv:act-1-ana)|SpaceAfter=No
15	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 goeswith	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Discourse=contrast_m:101->96:0|Entity=(abstract-101-new-3-sgl
2	simplest	simple	ADJ	JJS	Degree=Sup	3	amod	3:amod	_
3	way	way	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	Entity=101)
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	_
5	to	to	PART	TO	_	7	mark	7:mark	_
6	just	just	ADV	RB	_	7	advmod	7:advmod	_
7	peg	peg	VERB	VB	VerbForm=Inf	0	root	0:root	_
8	players	player	NOUN	NNS	Number=Plur	7	obj	7:obj	Entity=(person-24-giv:inact-1-coref)
9	by	by	SCONJ	IN	_	10	mark	10:mark	Discourse=means:102->101:0
10	throwing	throw	VERB	VBG	VerbForm=Ger	7	advcl	7:advcl:by	_
11	dodge	dodge	NOUN	NN	Number=Sing	10	obj	10:obj	Entity=(object-102-new-1-sgl|XML=<sic>
12	balls	ball	X	NNS	Typo=Yes	11	goeswith	11:goeswith	Entity=102)|SpaceAfter=No|XML=</sic>
13	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 goeswith	color:blue
1	Oh	oh	INTJ	UH	_	13	discourse	13:discourse	Discourse=evaluation:79->80:0
2	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	_
3	god	god	INTJ	UH	_	13	discourse	13:discourse	_
4	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	5:nsubj	Discourse=elaboration:80->78:0|Entity=(person-21-giv:inact-1-ana)
5	had	have	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	13	csubj	13:csubj	_
6	this	this	PRON	DT	Number=Sing|PronType=Dem	5	obj	5:obj	Entity=(object-47-giv:act-1-ana)
7	back	back	ADV	RB	Degree=Pos	9	advmod	9:advmod	_
8	in	in	ADP	IN	_	9	case	9:case	_
9	college	college	NOUN	NN	Number=Sing	5	obl	5:obl:in	Entity=(organization-48-new-1-coref)
10	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	13:cop	Discourse=elaboration:81->80:1
11	when	when	SCONJ	WRB	PronType=Int	13	mark	13:mark	_
12	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	13:nsubj	Entity=(person-21-giv:act-1-ana)
13	ordered	order	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root|20:nsubj	_
14	this	this	PRON	DT	Number=Sing|PronType=Dem	13	obj	13:obj	Entity=(object-47-giv:act-1-ana)|SpaceAfter=No
15	,	,	PUNCT	,	_	20	punct	20:punct	_
16	which	which	PRON	WDT	PronType=Rel	20	nsubj	13:ref	Discourse=elaboration:82->81:0
17	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	20:cop	_
18	probably	probably	ADV	RB	Degree=Pos	20	advmod	20:advmod	_
19	around	around	ADP	IN	_	20	case	20:case	_
20	twenty	twenty	NUM	CD	NumForm=Word|NumType=Card	13	acl:relcl	13:acl:relcl	Entity=(time-49-new-1-sgl|XML=<date when:::"2016"></date>
21	sixteen	sixteen	X	CD	_	20	goeswith	20:goeswith	Entity=49)|SpaceAfter=No
22	.	.	PUNCT	.	_	13	punct	13:punct	_

~~~


