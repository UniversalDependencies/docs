---
layout: base
title:  'Statistics of acl in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="en_gentle-dep-acl-relcl.html">acl:relcl</a></tt>.

153 nodes (1%) are attached to their parents as `acl`.

151 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.2156862745098.

The following 13 pairs of parts of speech are connected with `acl`: <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (115; 75% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (13; 8% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-SYM.html">SYM</a></tt> (4; 3% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-X.html">X</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 acl	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 acl	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	Discourse=ROOT:20:0|Entity=(20-abstract-new-cf5-11-disc(14-person-giv:inact-cf3-2-coref
2	angels	angel	NOUN	NNS	Number=Plur	11	nsubj	11:nsubj|12:nsubj:xsubj	Entity=14)|MSeg=angel-s|SpaceAfter=No
3	,	,	PUNCT	,	_	7	punct	7:punct	_
4	not	not	PART	RB	Polarity=Neg	7	advmod	7:advmod	_
5	half	half	ADV	RB	Degree=Pos|NumForm=Word|NumType=Frac	7	advmod	7:advmod	_
6	so	so	ADV	RB	_	7	advmod	7:advmod	_
7	happy	happy	ADJ	JJ	Degree=Pos	2	acl	2:acl	MSeg=happ-y
8	in	in	ADP	IN	_	9	case	9:case	_
9	heaven	heaven	NOUN	NN	Number=Sing	7	obl	7:obl:in	Entity=(15-place-giv:inact-cf4-1-coref-Heaven)|SpaceAfter=No
10	,	,	PUNCT	,	_	2	punct	2:punct	_
11	Went	went	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
12	envying	envy	VERB	VBG	VerbForm=Ger	11	xcomp	11:xcomp	MSeg=envy-ing
13	her	she	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	12	obj	12:obj	Entity=(1-person-giv:act-cf1*-1-ana)
14	and	and	CCONJ	CC	_	15	cc	15:cc	_
15	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	13	conj	12:obj|13:conj:and	Entity=(10-person-giv:act-cf2-1-ana)20)
16	—	—	PUNCT	:	_	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 acl	color:blue
1	That	that	PRON	DT	Number=Sing|PronType=Dem	0	root	0:root|4:nsubj	Discourse=joint-disjunction_m:59->46:1:_|Entity=(86-abstract-new-cf4-1-sgl
2	which	which	PRON	WDT	PronType=Rel	4	nsubj	1:ref	Discourse=elaboration-attribute:60->59:0:_
3	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	4:aux:pass|6:aux:pass	_
4	committed	commit	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	1	acl:relcl	1:acl:relcl	MSeg=committ-ed
5	or	or	CCONJ	CC	_	6	cc	6:cc	_
6	entrusted	entrust	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	4	conj	1:acl:relcl|4:conj:or	Entity=86)|MSeg=en-trust-ed|SpaceAfter=No
7	;	;	PUNCT	:	_	8	punct	8:punct	_
8	something	something	PRON	NN	Number=Sing|PronType=Ind	1	parataxis	1:parataxis	Discourse=same-unit_m:61->59:1:_|Entity=(87-abstract-new-cf1-1-sgl
9	received	receive	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	8	acl	8:acl	Discourse=elaboration-attribute:62->61:0:_|MSeg=receiv-ed
10	in	in	ADP	IN	_	11	case	11:case	_
11	confidence	confidence	NOUN	NN	Number=Sing	9	obl	9:obl:in	Entity=(88-abstract-new-cf2-1-sgl)87)|MSeg=confid-ence|SpaceAfter=No
12	;	;	PUNCT	:	_	14	punct	14:punct	_
13	a	a	DET	DT	Definite=Ind|PronType=Art	14	det	14:det	Discourse=same-unit_m:63->59:1:_|Entity=(89-abstract-new-cf3-2-sgl
14	charge	charge	NOUN	NN	Number=Sing	1	parataxis	1:parataxis	Entity=89)|SpaceAfter=No
15	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


