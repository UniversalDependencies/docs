---
layout: base
title:  'Statistics of goeswith in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `goeswith`

This relation is universal.

21 nodes (0%) are attached to their parents as `goeswith`.

21 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.04761904761905.

The following 6 pairs of parts of speech are connected with `goeswith`: <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (9; 43% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (4; 19% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (4; 19% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (2; 10% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 5% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 goeswith	color:blue
1	So	so	ADV	RB	_	6	advmod	6:advmod	Discourse=adversative-concession:32->24:1:dm-but-202;context-background:32->24:1:0:lex-indwd-273+orp-before hand-263-264;causal-result:32->26:1:3:orp-so-262|PDTB=Explicit:Contingency.Cause.Result:so:262:202-232:263-276
2	before	beforehand	ADV	GW	Typo=Yes	6	advmod	6:advmod	CorrectForm=beforehand|PDTB=Explicit:Expansion.Conjunction:before hand:263-264:182-188:262,265-276|XML=<sic ana:::"beforehand">
3	hand	_	X	RB	_	2	goeswith	2:goeswith	CorrectForm=_|XML=</sic>
4	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	6:nsubj	Entity=(4-person-giv:act-cf1*-1-ana)
5	kinda	kinda	ADV	RB	Degree=Pos	6	advmod	6:advmod	MSeg=kind-a
6	knew	know	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	_
7	about	about	ADP	IN	_	8	case	8:case	_
8	him	he	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obl	6:obl:about	Entity=(3-person-giv:act-cf2-1-ana)|SpaceAfter=No
9	,	,	PUNCT	,	_	13	punct	13:punct	_
10	but	but	CCONJ	CC	_	13	cc	13:cc	Discourse=adversative-contrast_m:33->32:0:dm-but-271|PDTB=Explicit:Comparison.Contrast:but:271:262-270:272-276
11	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	13:nsubj	Entity=(4-person-giv:act-cf1*-1-ana)
12	never	never	ADV	RB	_	13	advmod	13:advmod	Negation=Yes
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
1	The	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Discourse=adversative-contrast_m:102->97:1:_|Entity=(101-abstract-new-cf2-3-sgl
2	simplest	simple	ADJ	JJS	Degree=Sup	3	amod	3:amod	_
3	way	way	NOUN	NN	Number=Sing	7	nsubj:outer	7:nsubj:outer	Entity=101)
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	_
5	to	to	PART	TO	_	7	mark	7:mark	_
6	just	just	ADV	RB	_	7	advmod	7:advmod	_
7	peg	peg	VERB	VB	VerbForm=Inf	0	root	0:root	_
8	players	player	NOUN	NNS	Number=Plur	7	obj	7:obj	Entity=(24-person-giv:inact-cf1-1-coref)|MSeg=play-er-s
9	by	by	SCONJ	IN	_	10	mark	10:mark	Discourse=mode-means:103->102:0:dm-by-720+syn-pres-721|PDTB=Explicit:Contingency.Purpose.Arg1-as-goal:by:720:712-719:721-724;Explicit:Expansion.Manner.Arg2-as-manner:by:720:712-719:721-724
10	throwing	throw	VERB	VBG	Tense=Pres|VerbForm=Part	7	advcl	7:advcl:by	MSeg=throw-ing
11	dodge	dodgeball	NOUN	GW	Number=Plur|Typo=Yes	10	obj	10:obj	CorrectForm=dodgeballs|Entity=(102-object-new-cf3-1-sgl|XML=<sic ana:::"dodgeballs">
12	balls	_	X	NNS	_	11	goeswith	11:goeswith	CorrectForm=_|Entity=102)|MSeg=ball-s|SpaceAfter=No|XML=</sic>
13	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 goeswith	color:blue
1	Right	right	ADJ	JJ	Degree=Pos	6	discourse	6:discourse	Discourse=organization-phatic:162->156:4:_|SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	1:punct	_
3	so	so	ADV	RB	_	6	discourse	6:discourse	_
4	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	6	nsubj	6:nsubj	Bridge=1<35|Entity=(35-person-acc:inf-cf1-1-ana)
5	are	be	AUX	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	6	aux	6:aux	_
6	gon	go	VERB	GW	Style=Vrnc|Typo=Yes	0	root	0:root	XML=<w>
7	na	_	X	VBG	_	6	goeswith	6:goeswith	XML=</w>
8	--	-	PUNCT	:	_	6	punct	6:punct	_

~~~


