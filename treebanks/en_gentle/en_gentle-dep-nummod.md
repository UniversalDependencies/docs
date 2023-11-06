---
layout: base
title:  'Statistics of nummod in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `nummod`

This relation is universal.

181 nodes (1%) are attached to their parents as `nummod`.

138 instances of `nummod` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19337016574586.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (150; 83% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (15; 8% instances), <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (15; 8% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Samuels	Samuels	PROPN	NNP	Number=Sing	0	root	0:root	Discourse=explanation-evidence:63->58:1:_|Entity=(76-abstract-new-cf1-1,3-coref(77-person-new-cf2-1-sgl)
2	v.	versus	ADP	IN	_	3	case	3:case	_
3	Mackell	Mackell	PROPN	NNP	Number=Sing	1	nmod	1:nmod:versus	Entity=(78-person-new-cf3-1-sgl)76)|SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	7:punct	_
5	401	401	NUM	CD	NumForm=Digit|NumType=Card	6	nummod	6:nummod	Entity=(76-abstract-giv:act-cf1-3-appos|XML=<ref target:::"https://en.wikisource.org/wiki/Samuels_v._Mackell">
6	U.S.	U.S.	PROPN	NNP	Abbr=Yes|Number=Sing	7	compound	7:compound	_
7	66	66	NUM	CD	NumForm=Digit|NumType=Card	1	appos	1:appos	Entity=76)|SpaceAfter=No|XML=</ref>
8	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nummod	color:blue
1	ACH	ACH	PROPN	NNP	Number=Sing	2	compound	2:compound	Discourse=joint-list_m:59->30:4:_|Entity=(83-abstract-new-cf1-2-sgl(84-abstract-new-cf3-1-coref-National_Automated_Clearing_House)
2	transaction	transaction	NOUN	NN	Number=Sing	4	dep	4:dep	Entity=83)|MSeg=transact-ion|SpaceAfter=No
3	:	:	PUNCT	:	_	2	punct	2:punct	_
4	$	$	SYM	SYM	_	0	root	0:root	Discourse=elaboration-additional:60->59:0:_|Entity=(85-abstract-new-cf2-1-sgl
5	1	1	NUM	CD	NumForm=Digit|NumType=Card	4	nummod	4:nummod	Entity=85)

~~~


