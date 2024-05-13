---
layout: base
title:  'Statistics of cop in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `cop`

This relation is universal.

277 nodes (2%) are attached to their parents as `cop`.

271 instances of `cop` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.24909747292419.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-AUX.html">AUX</a></tt> (114; 41% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-AUX.html">AUX</a></tt> (110; 40% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-AUX.html">AUX</a></tt> (15; 5% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-AUX.html">AUX</a></tt> (12; 4% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-AUX.html">AUX</a></tt> (10; 4% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-AUX.html">AUX</a></tt> (8; 3% instances), <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gentle-pos-AUX.html">AUX</a></tt> (5; 2% instances), <tt><a href="en_gentle-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gentle-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 cop	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Which	which	PRON	WDT	PronType=Int	3	nsubj	3:nsubj	Discourse=evaluation-comment:59->56:2:_
2	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	good	good	ADJ	JJ	Degree=Pos	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	7:punct	_
5	anything	anything	PRON	NN	Number=Sing|PronType=Ind	7	nsubj	7:nsubj	Discourse=explanation-justify:60->59:0:_|Entity=(76-abstract-new-cf1-1-sgl
6	good	good	ADJ	JJ	Degree=Pos	5	amod	5:amod	Entity=76)
7	counts	count	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	3:parataxis	MSeg=count-s|SpaceAfter=No
8	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
1	One	one	NUM	CD	NumForm=Word|NumType=Card	2	nummod	2:nummod	Discourse=joint-list_m:132->130:1:_|Entity=(176-time-new-cf3-2-coref|XML=<hi rend:::"italic">
2	moment	moment	NOUN	NN	Number=Sing	5	obl:npmod	5:obl:npmod	Entity=176)
3	she	she	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nsubj	5:nsubj	Entity=(177-person-acc:com-cf1-1-ana)
4	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	5:cop	_
5	there	there	ADV	RB	PronType=Dem	0	root	0:root	SpaceAfter=No
6	,	,	PUNCT	,	_	10	punct	10:punct	_
7	the	the	DET	DT	Definite=Def|PronType=Art	8	det	8:det	Bridge=176<178|Discourse=adversative-contrast_m:133->132:0:_|Entity=(178-time-acc:inf-cf2-2-sgl
8	next	next	ADJ	JJ	Degree=Pos	10	obl:tmod	10:obl:tmod	Entity=178)
9	she	she	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	10	nsubj	10:nsubj	Entity=(177-person-giv:act-cf1-1-ana)
10	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	parataxis	5:parataxis	_
11	n't	not	PART	RB	Polarity=Neg	10	advmod	10:advmod	_
12	.	.	PUNCT	.	_	5	punct	5:punct	XML=</hi>

~~~


