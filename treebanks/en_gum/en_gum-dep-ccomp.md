---
layout: base
title:  'Statistics of ccomp in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `ccomp`

This relation is universal.

967 nodes (1%) are attached to their parents as `ccomp`.

844 instances of `ccomp` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.24612202688728.

The following 16 pairs of parts of speech are connected with `ccomp`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (604; 62% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (119; 12% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (106; 11% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (53; 5% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt> (18; 2% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (17; 2% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (12; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (10; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (6; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 ccomp	color:blue
1	You	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	4:nsubj	Discourse=evaluation:11->13:1|Entity=(person-12-new-1-ana)|SpaceAfter=No
2	're	be	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
3	so	so	ADV	RB	_	4	advmod	4:advmod	_
4	stupid	stupid	ADJ	JJ	Degree=Pos	0	root	0:root	_
5	thinking	think	VERB	VBG	VerbForm=Ger	4	advcl	4:advcl	Discourse=attribution:12->13:0
6	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	7:nsubj	Discourse=antithesis:13->14:1|Entity=(person-4-giv:act-1-ana)
7	spent	spend	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	5	ccomp	5:ccomp	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	9:det	Entity=(time-7-giv:inact-2-coref
9	night	night	NOUN	NN	Number=Sing	7	obj	7:obj	Entity=7)|SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 ccomp	color:blue
1	“	''	PUNCT	``	_	5	punct	5:punct	Discourse=evaluation:85->74:2|SpaceAfter=No|XML=<sp who:::"#Derya">
2	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	5:nsubj	Entity=(event-87-giv:inact-1-coref)
3	’s	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
4	not	not	PART	RB	Polarity=Neg	5	advmod	5:advmod	_
5	funny	funny	ADJ	JJ	Degree=Pos	9	ccomp	9:ccomp	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	5:punct	SpaceAfter=No
7	”	''	PUNCT	''	_	5	punct	5:punct	XML=</sp>
8	Derya	Derya	PROPN	NNP	Number=Sing	9	nsubj	9:nsubj	Discourse=attribution:86->85:0|Entity=(person-8-giv:inact-1-coref)
9	says	say	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 ccomp	color:blue
1	“	''	PUNCT	``	_	3	punct	3:punct	Discourse=evaluation:61->59:1|SpaceAfter=No|XML=<sp who:::"#Derya">
2	Fucking	fucking	INTJ	UH	_	3	discourse	3:discourse	Entity=(person-88-new-2-coref
3	airsurfers	airsurfer	NOUN	NNS	Number=Plur	6	ccomp	6:ccomp	Entity=88)|SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	3:punct	SpaceAfter=No
5	”	''	PUNCT	''	_	3	punct	3:punct	XML=</sp>
6	says	say	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Discourse=attribution:62->61:0
7	Derya	Derya	PROPN	NNP	Number=Sing	6	nsubj	6:nsubj	Entity=(person-8-giv:inact-1-coref)|SpaceAfter=No
8	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


