---
layout: base
title:  'Statistics of xcomp in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `xcomp`

This relation is universal.

214 nodes (1%) are attached to their parents as `xcomp`.

213 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.63084112149533.

The following 9 pairs of parts of speech are connected with `xcomp`: <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (140; 65% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (30; 14% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (17; 8% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (10; 5% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADV.html">ADV</a></tt> (5; 2% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-SYM.html">SYM</a></tt> (5; 2% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	He	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj|4:nsubj:xsubj	Discourse=explanation-evidence:47->46:0:_|Entity=(63-person-new-cf2-1-cata)|PDTB=Implicit:Expansion.Level-of-detail.Arg2-as-detail:for example:_:227-236:237-252
2	needs	need	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	MSeg=need-s
3	to	to	PART	TO	_	4	mark	4:mark	_
4	regain	regain	VERB	VB	VerbForm=Inf	2	xcomp	2:xcomp	Cxn=Conditional-UnspecifiedEpistemic-NoInversion|CxnElt=4:Conditional-UnspecifiedEpistemic-NoInversion.Apodosis
5	her	her	PRON	PRP$	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	nmod:poss	6:nmod:poss	Entity=(64-abstract-new-cf3-2-sgl(65-person-acc:com-cf1-1-ana)
6	trust	trust	NOUN	NN	Number=Sing	4	obj	4:obj	Entity=64)|XML=<hi rend:::"bold"></hi>
7	if	if	SCONJ	IN	_	11	mark	11:mark	Discourse=contingency-condition:48->47:0:dm-if-243|PDTB=Explicit:Contingency.Condition.Arg1-as-cond:if:_:237-242:243-252
8	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nsubj	11:nsubj|13:nsubj:xsubj	Entity=(63-person-acc:com-cf2-1-coref)
9	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux	11:aux	_
10	ever	ever	ADV	RB	Degree=Pos	11	advmod	11:advmod	_
11	going	go	VERB	VBG	Tense=Pres|VerbForm=Part	4	advcl	4:advcl:if	CxnElt=4:Conditional-UnspecifiedEpistemic-NoInversion.Protasis|MSeg=go-ing
12	to	to	PART	TO	_	13	mark	13:mark	_
13	win	win	VERB	VB	VerbForm=Inf	11	xcomp	11:xcomp	MSeg=w-in
14	her	she	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	obj	13:obj	Entity=(65-person-giv:act-cf1-1-ana)
15	back	back	ADV	RB	Degree=Pos	13	advmod	13:advmod	SpaceAfter=No
16	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 xcomp	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	Discourse=joint-other_m:37->36:1:_|Entity=(31-organization-giv:act-cf1*-2-coref-United_States_District_Court_for_the_Northern_District_of_Texas|PDTB=Implicit:Expansion.Conjunction:further:_:188-220:221-230
2	court	court	NOUN	NN	Number=Sing	3	nsubj	3:nsubj	Entity=31)
3	ruled	rule	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	Cxn=Resultative|CxnElt=3:Resultative.Predicate|MSeg=rul-ed
4	the	the	DET	DT	Definite=Def|PronType=Art	5	det	5:det	Entity=(13-event-giv:inact-cf2-4-coref(22-person-giv:inact-cf3-2-coref
5	Does	Doe	PROPN	NNPS	Number=Plur	7	nmod:poss	7:nmod:poss	MSeg=Doe-s
6	'	's	PART	POS	_	5	case	5:case	Entity=22)
7	complaint	complaint	NOUN	NN	Number=Sing	3	obj	3:obj|9:nsubj:xsubj	Entity=13)|MSeg=complain-t
8	not	not	PART	RB	Polarity=Neg	9	advmod	9:advmod	Negation=Yes
9	justiciable	justiciable	ADJ	JJ	Degree=Pos	3	xcomp	3:xcomp	CxnElt=3:Resultative.Result|MSeg=justic-i-able|SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 xcomp	color:blue
1	We	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=joint-sequence_m:19->8:1:_|Entity=(4-person-giv:inact-cf1-1-ana)
2	paused	pause	VERB	VBD	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	MSeg=paus-ed
3	before	before	ADP	IN	_	5	case	5:case	_
4	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	Entity=(22-place-new-cf3-2-coref
5	House	House	NOUN	NN	Number=Sing	2	obl	2:obl:before|7:nsubj	_
6	that	that	PRON	WDT	PronType=Rel	7	nsubj	5:ref	Discourse=elaboration-attribute:20->19:0:syn-mdf-110+syn-relcl-111-112
7	seemed	seem	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	acl:relcl	5:acl:relcl	MSeg=seem-ed
8	A	a	DET	DT	Definite=Ind|PronType=Art	9	det	9:det	Entity=(23-object-new-cf4-2-sgl
9	Swelling	swelling	NOUN	NN	Number=Sing	7	xcomp	7:xcomp	MSeg=Swell-ing
10	of	of	ADP	IN	_	12	case	12:case	_
11	the	the	DET	DT	Definite=Def|PronType=Art	12	det	12:det	Entity=(24-place-new-cf2-2-coref
12	Ground	Ground	PROPN	NNP	Number=Sing	9	nmod	9:nmod:of	Entity=24)23)22)
13	—	—	PUNCT	:	_	2	punct	2:punct	_

~~~


