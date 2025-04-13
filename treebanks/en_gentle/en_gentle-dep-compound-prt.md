---
layout: base
title:  'Statistics of compound:prt in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="en_gentle-dep-compound.html">compound</a></tt>.

63 nodes (0%) are attached to their parents as `compound:prt`.

62 instances of `compound:prt` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.46031746031746.

The following 3 pairs of parts of speech are connected with `compound:prt`: <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADP.html">ADP</a></tt> (61; 97% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-ADP.html">ADP</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 compound:prt	color:blue
1	Next	next	ADJ	JJ	Degree=Pos	0	root	0:root	Discourse=explanation-evidence:130->128:1:_|SpaceAfter=No|XML=<hi rend:::"italic">
2	,	,	PUNCT	,	_	3	punct	3:punct	_
3	please	please	INTJ	UH	_	1	discourse	1:discourse	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	7:punct	_
5	do	do	AUX	VB	VerbForm=Inf	7	aux	7:aux	Discourse=joint-list_m:131->130:0:_
6	n't	not	PART	RB	Polarity=Neg	7	advmod	7:advmod	Negation=Yes
7	hold	hold	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	1	parataxis	1:parataxis	_
8	up	up	ADP	RP	_	7	compound:prt	7:compound:prt	_
9	the	the	DET	DT	Definite=Def|PronType=Art	10	det	10:det	Entity=(170-abstract-acc:com-cf1-2-sgl
10	queue	queue	NOUN	NN	Number=Sing	7	obj	7:obj	Entity=170)|SpaceAfter=No
11	!	!	PUNCT	.	_	1	punct	1:punct	XML=</hi>

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:prt	color:blue
1	So	so	INTJ	UH	_	5	discourse	5:discourse	Discourse=evaluation-comment:43->40:3:lex-indwd-263;explanation-motivation:43->40:1:3:orp-so-259|PDTB=Explicit:Contingency.Cause.Result:so:259:238-258:260-280
2	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	5:nsubj	Entity=(1-person-giv:act-cf1*-1-ana)
3	will	will	AUX	MD	VerbForm=Fin	5	aux	5:aux	_
4	be	be	AUX	VB	VerbForm=Inf	5	cop	5:cop	_
5	better	good	ADJ	JJR	Degree=Cmp	0	root	0:root	MSeg=bett-er
6	off	off	ADP	RP	_	5	compound:prt	5:compound:prt	_
7	or	or	CCONJ	CC	_	10	cc	10:cc	Discourse=adversative-antithesis:44->43:0:dm-or-265|PDTB=Explicit:Comparison.Concession.Arg1-as-denier:or:265:259-264:266-280
8	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	10:nsubj	Entity=(8-person-giv:act-cf2-1-ana)
9	will	will	AUX	MD	VerbForm=Fin	10	aux	10:aux	_
10	do	do	VERB	VB	VerbForm=Inf	5	conj	5:conj:or	_
11	what	whatever	PRON	GW	Typo=Yes	10	obj	10:obj	CorrectForm=whatever|Entity=(30-abstract-new-cf5-6-sgl|XML=<sic ana:::"whatever">
12	ever	_	X	WP	_	11	goeswith	11:goeswith	CorrectForm=_|XML=</sic>
13	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	nsubj	14:nsubj	Entity=(31-event-new-cf4-1-cata)
14	takes	take	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	11:acl:relcl	MSeg=take-s
15	to	to	PART	TO	_	16	mark	16:mark	Discourse=purpose-goal:45->44:0:syn-inf-273|Entity=(31-event-acc:com-cf4-2-coref|PDTB=Implicit:Contingency.Purpose.Arg2-as-goal:in order:_:265-272:273-280
16	have	have	VERB	VB	VerbForm=Inf	10	advcl	10:advcl:to	_
17	you	you	PRON	PRP	Case=Acc|Number=Sing|Person=2|PronType=Prs	16	obj	16:obj|19:nsubj:xsubj	Entity=(1-person-giv:act-cf1*-1-ana)
18	in	in	ADP	IN	_	19	case	19:case	_
19	jail	jail	NOUN	NN	Number=Sing	16	xcomp	16:xcomp	Entity=(17-place-giv:inact-cf3-1-coref-Prison)
20	like	like	ADP	IN	_	21	case	21:case	_
21	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	16	obl	16:obl:like	Entity=(8-person-giv:act-cf2-1-ana)31)30)|SpaceAfter=No
22	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 compound:prt	color:blue
1	He	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj	Discourse=joint-list_m:19->13:1:_|Entity=(6-person-giv:act-cf1*-1-ana)|PDTB=Implicit:Expansion.Conjunction:and:_:104-124:125-139
2	comes	come	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	MSeg=come-s
3	in	in	ADP	RP	_	2	compound:prt	2:compound:prt	_
4	to	to	ADP	IN	_	5	case	5:case	_
5	clinic	clinic	NOUN	NN	Number=Sing	2	obl	2:obl:to	Entity=(19-place-new-cf2-1-coref)
6	today	today	NOUN	NN	Number=Sing	2	obl:unmarked	2:obl:unmarked	Entity=(20-time-new-cf3-1-sgl)|MSeg=to-day
7	for	for	ADP	IN	_	8	case	8:case	_
8	follow	follow	NOUN	NN	Number=Sing	2	obl	2:obl:for	Entity=(21-event-new-cf4-1,7-sgl|SpaceAfter=No|XML=<w>
9	-	-	PUNCT	HYPH	_	10	punct	10:punct	SpaceAfter=No
10	up	up	ADP	RP	_	8	compound:prt	8:compound:prt	XML=</w>
11	and	and	CCONJ	CC	_	14	cc	14:cc	_
12	complete	complete	ADJ	JJ	Degree=Pos	14	amod	14:amod	_
13	blood	blood	NOUN	NN	Number=Sing	14	compound	14:compound	_
14	count	count	NOUN	NN	Number=Sing	8	conj	2:obl:for|8:conj:and	Entity=21)|SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


