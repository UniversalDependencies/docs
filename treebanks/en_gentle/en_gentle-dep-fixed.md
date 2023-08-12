---
layout: base
title:  'Statistics of fixed in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `fixed`

This relation is universal.

50 nodes (0%) are attached to their parents as `fixed`.

50 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.02.

The following 11 pairs of parts of speech are connected with `fixed`: <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-ADP.html">ADP</a></tt> (14; 28% instances), <tt><a href="en_gentle-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gentle-pos-ADP.html">ADP</a></tt> (13; 26% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-ADV.html">ADV</a></tt> (5; 10% instances), <tt><a href="en_gentle-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gentle-pos-ADP.html">ADP</a></tt> (4; 8% instances), <tt><a href="en_gentle-pos-DET.html">DET</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (3; 6% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADP.html">ADP</a></tt> (3; 6% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-ADP.html">ADP</a></tt> (2; 4% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-ADP.html">ADP</a></tt> (2; 4% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="en_gentle-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 fixed	color:blue
1	Till	till	SCONJ	IN	_	6	mark	6:mark	Discourse=attribution-positive:98->101:2
2	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	6:nsubj	Entity=(3-person-giv:inact-cf1-1-ana)
3	scarcely	scarcely	ADV	RB	Degree=Pos	4	advmod	4:advmod	_
4	more	more	ADV	RBR	Degree=Cmp	6	advmod	6:advmod	_
5	than	than	ADP	IN	_	4	fixed	4:fixed	Discourse=adversative-antithesis:99->98:0
6	muttered	mutter	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 fixed	color:blue
1	Shot	shot	NOUN	NN	Number=Sing	2	nsubj	2:nsubj	Discourse=adversative-concession:79->80:0|Entity=(95-object-new-cf2-1-sgl)
2	comes	come	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	on	on	ADV	RB	Degree=Pos	2	advmod	2:advmod	_
4	through	through	ADP	RP	_	2	compound:prt	2:compound:prt	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	7:punct	_
6	not	not	PART	RB	Polarity=Neg	7	advmod	7:advmod	Discourse=joint-sequence_m:80->55:1
7	able	able	ADJ	JJ	Degree=Pos	2	parataxis	2:parataxis	_
8	to	to	PART	TO	_	9	mark	9:mark	_
9	get	get	VERB	VB	VerbForm=Inf	7	xcomp	7:xcomp	_
10	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	obj	9:obj|11:nsubj:pass:xsubj	Entity=(96-event-new-cf1-1-sgl)
11	done	do	VERB	VBN	Tense=Past|VerbForm=Part	9	xcomp	9:xcomp	_
12	as	as	ADP	IN	_	14	case	14:case	_
13	of	of	ADP	IN	_	12	fixed	12:fixed	_
14	yet	yet	ADV	RB	_	9	obl	9:obl:as_of	SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 fixed	color:blue
1	If	if	SCONJ	IN	_	3	mark	3:mark	Discourse=contingency-condition:53->55:1
2	x	x	NOUN	NN	Number=Sing	3	nsubj	3:nsubj	Entity=(47-abstract-giv:act-cf1*-1-coref)
3	∈	∈	SYM	SYM	_	12	advcl	12:advcl:if	Entity=(47-abstract-giv:act-cf1*-1-coref
4	S	S	NOUN	NN	Number=Sing	3	nmod:npmod	3:nmod:npmod	Entity=(3-abstract-giv:inact-cf4-1-coref)47)
5	and	and	CCONJ	CC	_	7	cc	7:cc	Discourse=joint-list_m:54->53:0
6	y	y	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	Entity=(48-abstract-giv:act-cf2-1-coref)
7	∈	∈	SYM	SYM	_	3	conj	3:conj:and|12:advcl:if	Entity=(48-abstract-giv:act-cf2-1-coref
8	T	T	NOUN	NN	Number=Sing	7	nmod:npmod	7:nmod:npmod	Entity=(4-abstract-giv:act-cf3-1-coref)48)|SpaceAfter=No
9	,	,	PUNCT	,	_	3	punct	3:punct	_
10	then	then	ADV	RB	PronType=Dem	12	advmod	12:advmod	Discourse=joint-disjunction_m:55->50:2
11	y	y	NOUN	NN	Number=Sing	12	nsubj	12:nsubj	Entity=(48-abstract-giv:act-cf2-1-coref)
12	∈	∈	SYM	SYM	_	0	root	0:root	Entity=(48-abstract-giv:act-cf2-1-coref
13	S	S	NOUN	NN	Number=Sing	12	nmod:npmod	12:nmod:npmod	Entity=(3-abstract-giv:act-cf4-1-coref)48)
14	and	and	CCONJ	CC	_	16	cc	16:cc	Discourse=joint-list_m:56->55:0
15	x	x	NOUN	NN	Number=Sing	16	nsubj	16:nsubj	Entity=(47-abstract-giv:act-cf1*-1-coref)
16	∈	∈	SYM	SYM	_	12	conj	12:conj:and	Entity=(47-abstract-giv:act-cf1*-1-coref
17	T	T	NOUN	NN	Number=Sing	16	nmod:npmod	16:nmod:npmod	Entity=(4-abstract-giv:act-cf3-1-coref)47)
18	as	as	ADV	RB	_	12	advmod	12:advmod	_
19	well	well	ADV	RB	Degree=Pos	18	fixed	18:fixed	SpaceAfter=No
20	.	.	PUNCT	.	_	12	punct	12:punct	_

~~~


