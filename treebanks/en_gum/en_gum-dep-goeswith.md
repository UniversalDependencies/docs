---
layout: base
title:  'Statistics of goeswith in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `goeswith`

This relation is universal.

14 nodes (0%) are attached to their parents as `goeswith`.

14 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07142857142857.

The following 4 pairs of parts of speech are connected with `goeswith`: <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (8; 57% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (4; 29% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 7% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 goeswith	color:blue
1	So	so	ADV	RB	_	6	advmod	6:advmod	Discourse=adversative-concession:32->24:1
2	before	beforehand	ADV	RB	Degree=Pos|Typo=Yes	6	advmod	6:advmod	CorrectForm=beforehand|XML=<sic ana:::"beforehand">
3	hand	_	X	NN	_	2	goeswith	2:goeswith	CorrectForm=_|XML=</sic>
4	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	6:nsubj	Entity=(4-person-giv:act-cf1*-1-ana)
5	kinda	kinda	ADV	RB	Degree=Pos	6	advmod	6:advmod	_
6	knew	know	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	_
7	about	about	ADP	IN	_	8	case	8:case	_
8	him	he	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obl	6:obl:about	Entity=(3-person-giv:act-cf2-1-ana)|SpaceAfter=No
9	,	,	PUNCT	,	_	13	punct	13:punct	_
10	but	but	CCONJ	CC	_	13	cc	13:cc	Discourse=adversative-contrast_m:33->32:0
11	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	13:nsubj	Entity=(4-person-giv:act-cf1*-1-ana)
12	never	never	ADV	RB	Polarity=Neg	13	advmod	13:advmod	_
13	met	meet	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	6	conj	6:conj:but	_
14	him	he	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obj	13:obj	Entity=(3-person-giv:act-cf2-1-ana)|SpaceAfter=No
15	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 goeswith	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Discourse=adversative-contrast_m:101->96:1|Entity=(101-abstract-new-cf2-3-sgl
2	simplest	simple	ADJ	JJS	Degree=Sup	3	amod	3:amod	_
3	way	way	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	Entity=101)
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	_
5	to	to	PART	TO	_	7	mark	7:mark	_
6	just	just	ADV	RB	_	7	advmod	7:advmod	_
7	peg	peg	VERB	VB	VerbForm=Inf	0	root	0:root	_
8	players	player	NOUN	NNS	Number=Plur	7	obj	7:obj	Entity=(24-person-giv:inact-cf1-1-coref)
9	by	by	SCONJ	IN	_	10	mark	10:mark	Discourse=mode-means:102->101:0
10	throwing	throw	VERB	VBG	VerbForm=Ger	7	advcl	7:advcl:by	_
11	dodge	dodgeball	NOUN	NNS	Number=Plur|Typo=Yes	10	obj	10:obj	CorrectForm=dodgeballs|Entity=(102-object-new-cf3-1-sgl|XML=<sic ana:::"dodgeballs">
12	balls	_	X	NNS	_	11	goeswith	11:goeswith	CorrectForm=_|Entity=102)|SpaceAfter=No|XML=</sic>
13	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 goeswith	color:blue
1	Unfortunately	unfortunately	ADV	RB	Degree=Pos|Polarity=Neg	12	advmod	12:advmod	Discourse=causal-cause:63->65:0|SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	1:punct	_
3	most	most	ADJ	JJS	Degree=Sup	12	obl:tmod	12:obl:tmod	_
4	of	of	ADP	IN	_	6	case	6:case	_
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	6:det	_
6	time	time	NOUN	NN	Number=Sing	3	obl	3:obl:of	SpaceAfter=No
7	,	,	PUNCT	,	_	3	punct	3:punct	_
8	people	person	NOUN	NNS	Number=Plur	12	nsubj	12:nsubj|14:nsubj:xsubj	Entity=(103-person-new-cf5-1-sgl
9	in	in	ADP	IN	_	11	case	11:case	_
10	the	the	DET	DT	Definite=Def|PronType=Art	11	det	11:det	Entity=(65-abstract-giv:inact-cf4-2-coref
11	residential	residential	ADJ	JJ	Degree=Pos	8	nmod	8:nmod:in	CorrectForm=residential sector|Entity=65)103)|XML=<sic ana:::"residential sector"></sic>
12	end	end	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
13	up	up	ADP	RP	_	12	compound:prt	12:compound:prt	_
14	choosing	choose	VERB	VBG	VerbForm=Ger	12	xcomp	12:xcomp	Entity=(104-event-new-cf1-1-disc
15	a	a	DET	DT	Definite=Ind|PronType=Art	16	det	16:det	Entity=(105-object-new-cf3-2-coref
16	lamp	lamp	NOUN	NN	Number=Sing	14	obj	14:obj	Entity=105)
17	based	base	VERB	VBN	Tense=Past|VerbForm=Part	14	advcl	14:advcl	Discourse=elaboration-additional:64->63:0
18	on	on	ADP	IN	_	21	case	21:case	_
19	it	its	PRON	PRP$	PronType=Prs|Typo=Yes	21	nmod:poss	21:nmod:poss	CorrectForm=its|Entity=(106-abstract-new-cf6-3-sgl(105-object-giv:act-cf3-1-ana|XML=<sic ana:::"its">
20	is	_	X	POS	_	19	goeswith	19:goeswith	CorrectForm=_|Entity=105)|XML=</sic>
21	price	price	NOUN	NN	Number=Sing	17	obl	17:obl:on	Entity=106)
22	rather	rather	ADV	RB	_	25	cc	25:cc	_
23	than	than	ADP	IN	_	22	fixed	22:fixed	_
24	its	its	PRON	PRP$	Gender=Neut|Number=Sing|Person=3|Poss=Yes|PronType=Prs	25	nmod:poss	25:nmod:poss	Entity=(107-abstract-new-cf7-2-coref(105-object-giv:act-cf3-1-ana)
25	efficiency	efficiency	NOUN	NN	Number=Sing	21	conj	17:obl:on|21:conj:rather_than	Entity=107)104)
26	and	and	CCONJ	CC	_	28	cc	28:cc	Discourse=elaboration-additional:65->61:1
27	this	this	PRON	DT	Number=Sing|PronType=Dem	28	nsubj	28:nsubj	Entity=(104-event-giv:act-cf1-1-coref)
28	cause	cause	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	12	conj	12:conj:and	CorrectForm=causes|XML=<sic ana:::"causes"></sic>
29	us	we	PRON	PRP	Case=Acc|Number=Plur|Person=1|PronType=Prs	28	obj	28:obj|31:nsubj:xsubj	Entity=(108-person-acc:com-cf2-1-ana)
30	to	to	PART	TO	_	31	mark	31:mark	_
31	pay	pay	VERB	VB	VerbForm=Inf	28	xcomp	28:xcomp	_
32	for	for	ADP	IN	_	34	case	34:case	_
33	our	our	PRON	PRP$	Number=Plur|Person=1|Poss=Yes|PronType=Prs	34	nmod:poss	34:nmod:poss	Entity=(109-abstract-new-cf8-2-sgl(108-person-giv:act-cf2-1-ana)
34	lighting	lighting	NOUN	NN	Number=Sing	31	obl	31:obl:for	Entity=109)
35	more	more	ADJ	JJR	Degree=Cmp	31	obj	31:obj	_
36	than	than	ADP	IN	_	37	case	37:case	_
37	necessary	necessary	ADJ	JJ	Degree=Pos	35	obl	35:obl:than	SpaceAfter=No
38	.	.	PUNCT	.	_	12	punct	12:punct	_

~~~


