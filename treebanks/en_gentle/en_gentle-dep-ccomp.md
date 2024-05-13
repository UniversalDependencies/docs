---
layout: base
title:  'Statistics of ccomp in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `ccomp`

This relation is universal.

100 nodes (1%) are attached to their parents as `ccomp`.

97 instances of `ccomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.42.

The following 10 pairs of parts of speech are connected with `ccomp`: <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (56; 56% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (11; 11% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (7; 7% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADV.html">ADV</a></tt> (7; 7% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (5; 5% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-SYM.html">SYM</a></tt> (5; 5% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (4; 4% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=attribution-positive:128->129:0:_|Entity=(161-person-acc:com-cf2-1-sgl)
2	trust	trust	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	Cxn=Interrogative-Polar-DeclarativeDirect|XML=<hi rend:::"bold"></hi>
3	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	5:nsubj	Discourse=explanation-evidence:129->125:3:_|Entity=(162-person-acc:com-cf1-1-ana)
4	have	have	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
5	cleaned	clean	VERB	VBN	Tense=Past|VerbForm=Part	2	ccomp	2:ccomp	MSeg=clean-ed
6	your	your	PRON	PRP$	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	7	nmod:poss	7:nmod:poss	Entity=(163-place-new-cf3-2-sgl(162-person-giv:act-cf1-1-ana)
7	room	room	NOUN	NN	Number=Sing	5	obj	5:obj	Entity=163)|SpaceAfter=No
8	?	?	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 ccomp	color:blue
1	Much	much	ADV	RB	Degree=Pos	3	advmod	3:advmod	Discourse=evaluation-comment:88->87:2:_
2	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	3:nsubj|8:nsubj:xsubj	Entity=(3-person-giv:inact-cf2-1-ana)
3	marvelled	marvel	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	MSeg=marvell-ed
4	this	this	DET	DT	Number=Sing|PronType=Dem	6	det	6:det	Entity=(1-animal-giv:act-cf1*-3-coref
5	ungainly	ungainly	ADV	RB	Degree=Pos|Polarity=Neg	6	amod	6:amod	_
6	fowl	fowl	NOUN	NN	Number=Sing	9	nsubj	9:nsubj	Entity=1)
7	to	to	PART	TO	_	8	mark	8:mark	_
8	hear	hear	VERB	VB	VerbForm=Inf	3	xcomp	3:xcomp	_
9	discourse	discourse	NOUN	NN	Number=Sing	8	ccomp	8:ccomp	_
10	so	so	ADV	RB	_	11	advmod	11:advmod	_
11	plainly	plainly	ADV	RB	Degree=Pos	9	advmod	9:advmod	MSeg=plain-ly|SpaceAfter=No
12	,	,	PUNCT	,	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	We	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=attribution-positive:44->45:0:_|Entity=(33-person-giv:inact-cf2-1-ana)
2	have	have	VERB	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	that	that	SCONJ	IN	_	6	mark	6:mark	Discourse=context-background:45->50:1:_
4	AC	AC	NOUN	NN	Number=Sing	6	nsubj	6:nsubj	Entity=(6-abstract-giv:inact-cf3-1-coref)
5	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
6	incommensurable	incommensurable	ADJ	JJ	Degree=Pos	2	ccomp	2:ccomp	MSeg=in-commensur-able|XML=<ref target:::"https://proofwiki.org/wiki/Definition:Incommensurable_in_Length">
7	in	in	ADP	IN	_	8	case	8:case	_
8	length	length	NOUN	NN	Number=Sing	6	obl	6:obl:in	Entity=(47-abstract-giv:act-cf1*-1-coref)|MSeg=leng-th|XML=</ref>
9	with	with	ADP	IN	_	10	case	10:case	_
10	CB	CB	NOUN	NN	Number=Sing	6	obl	6:obl:with	Entity=(36-abstract-giv:inact-cf4-1-coref)|SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


