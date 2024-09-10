---
layout: base
title:  'Statistics of ccomp in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `ccomp`

This relation is universal.

1475 nodes (1%) are attached to their parents as `ccomp`.

1337 instances of `ccomp` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.16745762711864.

The following 20 pairs of parts of speech are connected with `ccomp`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (893; 61% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (182; 12% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (160; 11% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (65; 4% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (34; 2% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (29; 2% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt> (28; 2% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (20; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (18; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (13; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (10; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (9; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 ccomp	color:blue
1	You	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	4:nsubj	Discourse=evaluation-comment:11->13:1:lex-indwd-68|Entity=(12-person-new-cf3-1-ana)
2	're	be	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
3	so	so	ADV	RB	_	4	advmod	4:advmod	_
4	stupid	stupid	ADJ	JJ	Degree=Pos	0	root	0:root	_
5	thinking	think	VERB	VBG	Tense=Pres|VerbForm=Part	4	advcl	4:advcl	Discourse=attribution-positive:12->13:0:sem-atsrc-65+lex-indwd-69|MSeg=think-ing
6	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	7:nsubj	Discourse=adversative-antithesis:13->14:1:_|Entity=(11-person-giv:act-cf1*-1-ana)
7	spent	spend	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	5	ccomp	5:ccomp	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	9:det	Entity=(6-time-giv:inact-cf2-2-coref
9	night	night	NOUN	NN	Number=Sing	7	obj	7:obj	Entity=6)|SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp	color:blue
1	Know	know	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=attribution-positive:126->127:1:lex-indwd-881+sem-atsrc-881
2	the	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Discourse=explanation-justify:127->137:2:_|Entity=(141-abstract-new-cf3-8-disc(51-object-giv:inact-cf1-2-coref
3	body	body	NOUN	NN	Number=Sing	5	nsubj	5:nsubj	Entity=51)
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
5	lazy	lazy	ADJ	JJ	Degree=Pos	1	ccomp	1:ccomp	MSeg=laz-y|SpaceAfter=No
6	,	,	PUNCT	,	_	9	punct	9:punct	_
7	because	because	SCONJ	IN	_	9	mark	9:mark	Discourse=causal-cause:128->127:0:dm-because-887
8	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	nsubj	9:nsubj|11:nsubj:xsubj	Entity=(51-object-giv:act-cf1-1-ana)
9	wants	want	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	advcl	1:advcl:because	MSeg=want-s
10	to	to	PART	TO	_	11	mark	11:mark	_
11	save	save	VERB	VB	VerbForm=Inf	9	xcomp	9:xcomp	_
12	precious	precious	ADJ	JJ	Degree=Pos	13	amod	13:amod	Entity=(142-abstract-new-cf2-2-sgl
13	energy	energy	NOUN	NN	Number=Sing	11	obj	11:obj	Entity=142)141)|SpaceAfter=No
14	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 ccomp	color:blue
1	So	so	ADV	RB	_	4	discourse	4:discourse	Discourse=attribution-positive:19->20:0:sem-atsrc-176+lex-indwd-178+lex-indwd-179
2	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	4:nsubj	Entity=(24-person-giv:act-cf1*-1-ana)
3	might	might	AUX	MD	VerbForm=Fin	4	aux	4:aux	_
4	be	be	VERB	VB	VerbForm=Inf	0	root	0:root	_
5	like	like	ADP	RP	_	4	compound:prt	4:compound:prt	_
6	this	this	PRON	DT	Number=Sing|PronType=Dem	10	nsubj	10:nsubj	Discourse=evaluation-comment:20->16:2:_|Entity=(25-abstract-new-cf2-1-cata)
7	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	10:cop	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	10	det	10:det	Entity=(25-abstract-acc:com-cf2-3-coref
9	terrible	terrible	ADJ	JJ	Degree=Pos	10	amod	10:amod	_
10	list	list	NOUN	NN	Number=Sing	4	ccomp	4:ccomp	Entity=25)|SpaceAfter=No
11	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


