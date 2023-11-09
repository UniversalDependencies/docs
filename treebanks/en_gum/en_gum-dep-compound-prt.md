---
layout: base
title:  'Statistics of compound:prt in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-compound.html">compound</a></tt>.

733 nodes (0%) are attached to their parents as `compound:prt`.

733 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26330150068213.

The following 4 pairs of parts of speech are connected with `compound:prt`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (719; 98% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (12; 2% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 compound:prt	color:blue
1	Next	next	ADJ	JJ	Degree=Pos	2	amod	2:amod	Discourse=joint-other_m:115->109:3:_|Entity=(50-time-new-cf4-2-sgl
2	time	time	NOUN	NN	Number=Sing	12	obl:tmod	12:obl:tmod	Entity=50)
3	if	if	SCONJ	IN	_	5	mark	5:mark	Discourse=contingency-condition:116->117:0:dm-if-634
4	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	5:nsubj	Entity=(4-person-giv:inact-cf1-1-ana)
5	leave	leave	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	12	advcl	12:advcl:if	Cxn=Condition-Realistic
6	in	in	ADP	IN	_	8	case	8:case	_
7	the	the	DET	DT	Definite=Def|PronType=Art	8	det	8:det	Entity=(51-time-new-cf3-2-sgl
8	morning	morning	NOUN	NN	Number=Sing	5	obl	5:obl:in	Entity=51)|MSeg=morn-ing|SpaceAfter=No
9	,	,	PUNCT	,	_	5	punct	5:punct	_
10	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	12:nsubj	Discourse=same-unit_m:117->115:0:_|Entity=(4-person-giv:act-cf1-1-ana)
11	'll	will	AUX	MD	VerbForm=Fin	12	aux	12:aux	_
12	wake	wake	VERB	VB	VerbForm=Inf	0	root	0:root	_
13	you	you	PRON	PRP	Case=Acc|Number=Sing|Person=2|PronType=Prs	12	obj	12:obj	Entity=(10-person-giv:inact-cf2-1-ana)
14	up	up	ADP	RP	_	12	compound:prt	12:compound:prt	SpaceAfter=No
15	.	.	PUNCT	.	_	12	punct	12:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 compound:prt	color:blue
1	And	and	CCONJ	CC	_	8	cc	8:cc	Discourse=joint-other_m:174->166:2:dm-and-1212
2	if	if	SCONJ	IN	_	4	mark	4:mark	Discourse=contingency-condition:175->176:0:dm-if-1213
3	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	4:nsubj	Entity=(9-person-giv:inact-cf1-1-ana)
4	have	have	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	8	advcl	8:advcl:if	Cxn=Condition-Realistic
5	n't	not	PART	RB	Polarity=Neg	4	advmod	4:advmod	_
6	already	already	ADV	RB	_	4	advmod	4:advmod	MSeg=al-ready
7	be	be	AUX	VB	Mood=Imp|Person=2|VerbForm=Fin	8	cop	8:cop	Discourse=same-unit_m:176->174:0:_
8	sure	sure	ADJ	JJ	Degree=Pos	0	root	0:root	_
9	to	to	PART	TO	_	10	mark	10:mark	_
10	give	give	VERB	VB	VerbForm=Inf	8	xcomp	8:xcomp	Cxn=Ditransitive
11	this	this	DET	DT	Number=Sing|PronType=Dem	12	det	12:det	Entity=(110-abstract-acc:com-cf2-2-sgl
12	video	video	NOUN	NN	Number=Sing	10	iobj	10:iobj	Entity=110)
13	a	a	DET	DT	Definite=Ind|PronType=Art	14	det	14:det	Entity=(111-abstract-new-cf3-2-sgl
14	thumbs	thumb	NOUN	NN	Number=Sing	10	obj	10:obj	_
15	up	up	ADP	RP	_	14	compound:prt	14:compound:prt	Entity=111)|SpaceAfter=No
16	.	.	PUNCT	.	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:prt	color:blue
1	Do	do	AUX	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=joint-sequence_m:86->14:3:_
2	over	over	ADP	RP	_	1	compound:prt	1:compound:prt	SpaceAfter=No
3	!	!	PUNCT	.	_	1	punct	1:punct	_

~~~


