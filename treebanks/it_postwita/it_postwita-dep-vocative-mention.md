---
layout: base
title:  'Statistics of vocative:mention in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `vocative:mention`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-vocative.html">vocative</a></tt>.

2578 nodes (2%) are attached to their parents as `vocative:mention`.

2066 instances of `vocative:mention` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.94181536074476.

The following 12 pairs of parts of speech are connected with `vocative:mention`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (1382; 54% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (496; 19% instances), <tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (179; 7% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (177; 7% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (100; 4% instances), <tt><a href="it_postwita-pos-ADV.html">ADV</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (88; 3% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (76; 3% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (38; 1% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (28; 1% instances), <tt><a href="it_postwita-pos-NUM.html">NUM</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (7; 0% instances), <tt><a href="it_postwita-pos-AUX.html">AUX</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (5; 0% instances), <tt><a href="it_postwita-pos-DET.html">DET</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 vocative:mention	color:blue
1	@user	@user	SYM	SYM	_	8	vocative:mention	_	_
2	si	sì	INTJ	I	_	8	discourse	_	CorrectForm=sì
3	cazzo	cazzo	INTJ	I	_	8	discourse	_	_
4	c'	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	8	expl	_	SpaceAfter=No
5	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	dep	_	_
6	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
7	devo	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	fare	fare	VERB	V	VerbForm=Inf	0	root	_	_
9	c'	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	13	expl	_	SpaceAfter=No
10	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	dep	_	_
11	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	obj	_	_
12	posso	potere	AUX	VM	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	13	aux	_	_
13	fare	fare	VERB	V	VerbForm=Inf	8	conj	_	SpaceAfter=No
14	!	!	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 vocative:mention	color:blue
1	@user	@user	SYM	SYM	_	5	vocative:mention	_	_
2	Mario	mario	PROPN	SP	_	5	nsubj	_	_
3	Monti	Monti	PROPN	SP	_	2	flat:name	_	_
4	ennesimo	ennesimo	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	5	amod	_	_
5	regalo	regalo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
6	a	a	ADP	E	_	8	case	_	_
7	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
8	Banche	Banche	PROPN	SP	_	5	nmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 vocative:mention	color:blue
1	RT	retweet	NOUN	S	_	4	dep	_	_
2	@user	@user	SYM	SYM	_	4	vocative:mention	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	2	punct	_	_
4	Buongiorno	buongiorno	INTJ	I	_	0	root	_	_
5	#abbestia	#abbestia	SYM	SYM	_	4	vocative	_	_
6	!!!!	!!!!	PUNCT	FS	_	4	punct	_	_
7	http://t.co/wcBSl992Jq	http://t.co/wcBSl992Jq	SYM	X	_	4	dep	_	_

~~~


