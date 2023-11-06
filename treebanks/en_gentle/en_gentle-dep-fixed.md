---
layout: base
title:  'Statistics of fixed in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `fixed`

This relation is universal.

57 nodes (0%) are attached to their parents as `fixed`.

57 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.01754385964912.

The following 12 pairs of parts of speech are connected with `fixed`: <tt><a href="en_gentle-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gentle-pos-ADP.html">ADP</a></tt> (14; 25% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-ADP.html">ADP</a></tt> (12; 21% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-SCONJ.html">SCONJ</a></tt> (7; 12% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-ADV.html">ADV</a></tt> (5; 9% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-ADP.html">ADP</a></tt> (3; 5% instances), <tt><a href="en_gentle-pos-DET.html">DET</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (3; 5% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-ADP.html">ADP</a></tt> (3; 5% instances), <tt><a href="en_gentle-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gentle-pos-ADP.html">ADP</a></tt> (3; 5% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADP.html">ADP</a></tt> (3; 5% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-AUX.html">AUX</a></tt> (2; 4% instances), <tt><a href="en_gentle-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gentle-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances), <tt><a href="en_gentle-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 fixed	color:blue
1	Shot	shot	NOUN	NN	Number=Sing	2	nsubj	2:nsubj	Discourse=adversative-concession:79->80:0:_|Entity=(95-object-new-cf2-1-sgl)
2	comes	come	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Cxn=Interrogative-Wh|MSeg=come-s
3	on	on	ADV	RB	Degree=Pos	2	advmod	2:advmod	_
4	through	through	ADP	RP	_	2	compound:prt	2:compound:prt	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	7:punct	_
6	not	not	PART	RB	Polarity=Neg	7	advmod	7:advmod	Discourse=joint-sequence_m:80->55:1:_
7	able	able	ADJ	JJ	Degree=Pos	2	parataxis	2:parataxis	_
8	to	to	PART	TO	_	9	mark	9:mark	_
9	get	get	VERB	VB	VerbForm=Inf	7	xcomp	7:xcomp	_
10	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	obj	9:obj|11:nsubj:pass:xsubj	Entity=(96-event-new-cf1-1-sgl)
11	done	do	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	9	xcomp	9:xcomp	_
12	as	as	ADP	IN	_	14	case	14:case	_
13	of	of	ADP	IN	_	12	fixed	12:fixed	_
14	yet	yet	ADV	RB	_	9	obl	9:obl:as_of	SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 fixed	color:blue
1	Till	till	SCONJ	IN	_	6	mark	6:mark	Discourse=attribution-positive:98->101:2:_
2	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	6:nsubj	Entity=(3-person-giv:inact-cf1-1-ana)
3	scarcely	scarcely	ADV	RB	Degree=Pos	4	advmod	4:advmod	_
4	more	more	ADV	RBR	Degree=Cmp	6	advmod	6:advmod	_
5	than	than	ADP	IN	_	4	fixed	4:fixed	Discourse=adversative-antithesis:99->98:0:_
6	muttered	mutter	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 fixed	color:blue
1	Let	let	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=explanation-evidence:12->16:0:_
2	the	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Entity=(22-abstract-new-cf1-2-coref
3	rectangle	rectangle	NOUN	NN	Number=Sing	1	obj	1:obj|6:nsubj:pass:xsubj	Entity=22)|XML=<ref target:::"https://proofwiki.org/wiki/Definition:Rectangle"></ref>
4	DH	DH	NOUN	NN	Abbr=Yes|Number=Sing	3	dep	3:dep	Entity=(22-abstract-giv:act-cf1-1-coref)
5	be	be	AUX	VB	VerbForm=Inf	6	aux:pass	6:aux:pass	_
6	applied	apply	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	1	xcomp	1:xcomp	MSeg=appl-i-ed
7	to	to	ADP	IN	_	8	case	8:case	_
8	DE	DE	NOUN	NN	Number=Sing	6	obl	6:obl:to	Entity=(8-abstract-giv:inact-cf3-1-coref)
9	such	such	ADJ	JJ	Degree=Pos	12	mark	12:mark	Discourse=mode-manner:13->12:0:_
10	that	that	SCONJ	IN	_	9	fixed	9:fixed	_
11	DH	DH	NOUN	NN	Abbr=Yes|Number=Sing	12	nsubj	12:nsubj	Entity=(22-abstract-giv:act-cf1-1-coref)
12	=	=	SYM	SYM	_	6	advcl	6:advcl:such_that	_
13	AC2	AC2	NOUN	NN	Number=Sing	12	obj	12:obj	Entity=(18-abstract-giv:act-cf2*-1-coref)|SpaceAfter=No
14	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


