---
layout: base
title:  'Statistics of aux in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="en_gentle-dep-aux-pass.html">aux:pass</a></tt>.

339 nodes (2%) are attached to their parents as `aux`.

338 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.54867256637168.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-AUX.html">AUX</a></tt> (324; 96% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-AUX.html">AUX</a></tt> (8; 2% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="en_gentle-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gentle-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	On	on	ADP	IN	_	2	case	2:case	Discourse=joint-list_m:59->58:0:_|XML=<hi rend:::"italic">
2	Wednesday	Wednesday	PROPN	NNP	Number=Sing	7	obl	7:obl:on	Entity=(83-time-acc:com-cf2-1-sgl
3	next	next	ADJ	JJ	Degree=Pos	2	amod	2:amod	Entity=83)|SpaceAfter=No
4	,	,	PUNCT	,	_	2	punct	2:punct	_
5	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	7:nsubj	Entity=(84-person-acc:com-cf1-1-sgl)
6	'm	be	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	aux	7:aux	_
7	going	go	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	MSeg=go-ing
8	to	to	ADP	IN	_	9	case	9:case	_
9	Spain	Spain	PROPN	NNP	Number=Sing	7	obl	7:obl:to	Entity=(85-place-new-cf3-1-sgl-Spain)|SpaceAfter=No
10	.	.	PUNCT	.	_	7	punct	7:punct	XML=</hi>

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 aux	color:blue
1	After	after	SCONJ	IN	_	2	mark	2:mark	Discourse=organization-preparation:78->79:2:_
2	completing	complete	VERB	VBG	VerbForm=Ger	10	advcl	10:advcl:after	MSeg=complet-ing
3	this	this	DET	DT	Number=Sing|PronType=Dem	4	det	4:det	Entity=(1-abstract-giv:act-cf1*-2-coref
4	course	course	NOUN	NN	Number=Sing	2	obj	2:obj	Entity=1)|SpaceAfter=No
5	,	,	PUNCT	,	_	2	punct	2:punct	_
6	the	the	DET	DT	Definite=Def|PronType=Art	7	det	7:det	Entity=(120-person-new-cf2-2-coref
7	student	student	NOUN	NN	Number=Sing	10	nsubj	10:nsubj	Entity=120)|MSeg=stud-ent
8	will	will	AUX	MD	VerbForm=Fin	10	aux	10:aux	_
9	be	be	AUX	VB	VerbForm=Inf	10	cop	10:cop	_
10	able	able	ADJ	JJ	Degree=Pos	0	root	0:root	_
11	to	to	PART	TO	_	10	mark	10:mark	SpaceAfter=No
12	:	:	PUNCT	:	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 aux	color:blue
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


