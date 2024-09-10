---
layout: base
title:  'Statistics of compound:prt in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-compound.html">compound</a></tt>.

850 nodes (0%) are attached to their parents as `compound:prt`.

849 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.27411764705882.

The following 6 pairs of parts of speech are connected with `compound:prt`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (834; 98% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (12; 1% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 compound:prt	color:blue
1	Next	next	ADJ	JJ	Degree=Pos	2	amod	2:amod	Discourse=joint-other_m:115->109:3:_|Entity=(50-time-new-cf4-2-sgl
2	time	time	NOUN	NN	Number=Sing	12	obl:tmod	12:obl:tmod	Entity=50)
3	if	if	SCONJ	IN	_	5	mark	5:mark	Discourse=contingency-condition:116->117:0:dm-if-634
4	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	5:nsubj	Entity=(11-person-giv:inact-cf1-1-ana)
5	leave	leave	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	12	advcl	12:advcl:if	_
6	in	in	ADP	IN	_	8	case	8:case	_
7	the	the	DET	DT	Definite=Def|PronType=Art	8	det	8:det	Entity=(51-time-new-cf3-2-sgl
8	morning	morning	NOUN	NN	Number=Sing	5	obl	5:obl:in	Entity=51)|MSeg=morn-ing|SpaceAfter=No
9	,	,	PUNCT	,	_	5	punct	5:punct	_
10	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	12:nsubj	Discourse=same-unit_m:117->115:0:_|Entity=(11-person-giv:act-cf1-1-ana)
11	'll	will	AUX	MD	VerbForm=Fin	12	aux	12:aux	_
12	wake	wake	VERB	VB	VerbForm=Inf	0	root	0:root	Cxn=Conditional-UnspecifiedEpistemic-NoInversion
13	you	you	PRON	PRP	Case=Acc|Number=Sing|Person=2|PronType=Prs	12	obj	12:obj	Entity=(9-person-giv:inact-cf2-1-ana)
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
4	have	have	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	8	advcl	8:advcl:if	_
5	n't	not	PART	RB	Polarity=Neg	4	advmod	4:advmod	_
6	already	already	ADV	RB	_	4	advmod	4:advmod	MSeg=al-ready
7	be	be	AUX	VB	Mood=Imp|Person=2|VerbForm=Fin	8	cop	8:cop	Discourse=same-unit_m:176->174:0:_
8	sure	sure	ADJ	JJ	Degree=Pos	0	root	0:root	Cxn=Conditional-UnspecifiedEpistemic-NoInversion
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
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 27 compound:prt	color:blue
1	So	so	ADV	RB	_	5	advmod	5:advmod	Discourse=context-background:15->19:3:ref-dem-161-165,192-194+sem-synym-175,196-198
2	Secretary	Secretary	PROPN	NNP	Number=Sing	5	nsubj	5:nsubj	Bridge=28<42|Entity=(42-person-acc:inf-cf5-1,2-coref-Miguel_Cardona
3	Cardona	Cardona	PROPN	NNP	Number=Sing	2	flat	2:flat	Entity=42)
4	again	again	ADV	RB	Degree=Pos	5	advmod	5:advmod	_
5	invoked	invoke	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	Entity=(43-event-new-cf8-1-disc|MSeg=invok-ed
6	the	the	DET	DT	Definite=Def|PronType=Art	8	det	8:det	Entity=(30-abstract-giv:inact-cf3-2,3-coref-Higher_Education_Relief_Opportunities_For_Students_Act
7	HEROES	HEROES	PROPN	NNP	Number=Sing	8	compound	8:compound	XML=<hi rend:::"caps"></hi>
8	Act	Act	PROPN	NNP	Number=Sing	5	obj	5:obj	Entity=30)
9	to	to	PART	TO	_	10	mark	10:mark	Discourse=purpose-goal:16->15:0:syn-inf-159
10	provide	provide	VERB	VB	VerbForm=Inf	5	advcl	5:advcl:to	_
11	a	a	DET	DT	Definite=Ind|PronType=Art	12	det	12:det	Entity=(44-abstract-new-cf6-2-coref
12	measure	measure	NOUN	NN	Number=Sing	10	obj	10:obj	_
13	of	of	ADP	IN	_	15	case	15:case	_
14	loan	loan	NOUN	NN	Number=Sing	15	compound	15:compound	Entity=(45-abstract-new-cf7-2-coref
15	forgiveness	forgiveness	NOUN	NN	Number=Sing	12	nmod	12:nmod:of	Entity=45)44)|MSeg=for-give-ness
16	to	to	PART	TO	_	17	mark	17:mark	Discourse=attribution-positive:17->18:0:sem-atsrc-161-165+lex-indwd-167+syn-rpr-168
17	ensure	ensure	VERB	VB	VerbForm=Inf	10	advcl	10:advcl:to	MSeg=en-sure
18	that	that	SCONJ	IN	_	24	mark	24:mark	Discourse=purpose-goal:18->15:1:syn-inf-166
19	this	this	DET	DT	Number=Sing|PronType=Dem	21	det	21:det	Entity=(12-event-giv:inact-cf2-3-coref-COVID%2D19_pandemic
20	unprecedented	unprecedented	ADJ	JJ	Degree=Pos|Polarity=Neg	21	amod	21:amod	MSeg=un-preced-ent-ed
21	pandemic	pandemic	NOUN	NN	Number=Sing	24	nsubj	24:nsubj	Entity=12)
22	does	do	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	aux	24:aux	MSeg=doe-s
23	not	not	PART	RB	Polarity=Neg	24	advmod	24:advmod	_
24	leave	leave	VERB	VB	VerbForm=Inf	17	ccomp	17:ccomp	_
25	borrowers	borrower	NOUN	NNS	Number=Plur	24	obj	24:obj|26:nsubj:xsubj	Entity=(26-person-giv:inact-cf1-1-coref)
26	worse	badly	ADV	RBR	Degree=Cmp	24	xcomp	24:xcomp	_
27	off	off	ADP	RP	_	26	compound:prt	26:compound:prt	_
28	in	in	ADP	IN	_	29	case	29:case	_
29	relation	relation	NOUN	NN	Number=Sing	26	obl	26:obl:in	MSeg=relat-ion
30	to	to	ADP	IN	_	33	case	33:case	_
31	their	their	PRON	PRP$	Case=Gen|Number=Plur|Person=3|Poss=Yes|PronType=Prs	33	nmod:poss	33:nmod:poss	Entity=(27-abstract-giv:inact-cf4-3-coref(26-person-giv:act-cf1-1-ana)
32	student	student	NOUN	NN	Number=Sing	33	compound	33:compound	MSeg=stud-ent
33	loans	loan	NOUN	NNS	Number=Plur	29	nmod	29:nmod:to	Entity=27)43)|SpaceAfter=No
34	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


