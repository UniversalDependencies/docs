---
layout: base
title:  'Statistics of mark in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `mark`

This relation is universal.

456 nodes (3%) are attached to their parents as `mark`.

453 instances of `mark` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.53947368421053.

The following 16 pairs of parts of speech are connected with `mark`: <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PART.html">PART</a></tt> (206; 45% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-SCONJ.html">SCONJ</a></tt> (158; 35% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-SCONJ.html">SCONJ</a></tt> (30; 7% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-SCONJ.html">SCONJ</a></tt> (21; 5% instances), <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-SCONJ.html">SCONJ</a></tt> (9; 2% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-PART.html">PART</a></tt> (6; 1% instances), <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-PART.html">PART</a></tt> (5; 1% instances), <tt><a href="en_gentle-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gentle-pos-SCONJ.html">SCONJ</a></tt> (5; 1% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gentle-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 mark	color:blue
1	Next	next	ADJ	JJ	Degree=Pos	2	amod	2:amod	Discourse=explanation-evidence:82->80:1:_|Entity=(114-time-acc:com-cf1-2-coref|XML=<hi rend:::"italic">
2	week	week	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	Entity=114)
3	would	would	AUX	MD	VerbForm=Fin	7	aux	7:aux	_
4	be	be	AUX	VB	VerbForm=Inf	7	cop	7:cop	_
5	a	a	DET	DT	Definite=Ind|PronType=Art	7	det	7:det	Entity=(114-time-giv:act-cf1-3-pred
6	good	good	ADJ	JJ	Degree=Pos	7	amod	7:amod	_
7	time	time	NOUN	NN	Number=Sing	0	root	0:root	_
8	to	to	PART	TO	_	9	mark	9:mark	Discourse=purpose-attribute:83->82:0:_
9	meet	meet	VERB	VB	VerbForm=Inf	7	acl	7:acl:to	Entity=114)|SpaceAfter=No
10	.	.	PUNCT	.	_	7	punct	7:punct	XML=</hi>

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 mark	color:blue
1	He	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj|4:nsubj:xsubj	Discourse=explanation-evidence:47->46:0:_|Entity=(66-person-new-cf2-1-cata)
2	needs	need	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	MSeg=need-s
3	to	to	PART	TO	_	4	mark	4:mark	_
4	regain	regain	VERB	VB	VerbForm=Inf	2	xcomp	2:xcomp	Cxn=Conditional-UnspecifiedEpistemic-NoInversion
5	her	her	PRON	PRP$	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	nmod:poss	6:nmod:poss	Entity=(67-abstract-new-cf3-2-sgl(68-person-acc:com-cf1-1-ana)
6	trust	trust	NOUN	NN	Number=Sing	4	obj	4:obj	Entity=67)|XML=<hi rend:::"bold"></hi>
7	if	if	SCONJ	IN	_	11	mark	11:mark	Discourse=contingency-condition:48->47:0:_
8	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nsubj	11:nsubj|13:nsubj:xsubj	Entity=(66-person-acc:com-cf2-1-coref)
9	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux	11:aux	_
10	ever	ever	ADV	RB	Degree=Pos	11	advmod	11:advmod	_
11	going	go	VERB	VBG	Tense=Pres|VerbForm=Part	4	advcl	4:advcl:if	MSeg=go-ing
12	to	to	PART	TO	_	13	mark	13:mark	_
13	win	win	VERB	VB	VerbForm=Inf	11	xcomp	11:xcomp	MSeg=w-in
14	her	she	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	obj	13:obj	Entity=(68-person-giv:act-cf1-1-ana)
15	back	back	ADV	RB	Degree=Pos	13	advmod	13:advmod	SpaceAfter=No
16	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 mark	color:blue
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


