---
layout: base
title:  'Statistics of obl:npmod in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `obl:npmod`

This relation is a language-specific subtype of <tt><a href="en_gentle-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="en_gentle-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="en_gentle-dep-obl-tmod.html">obl:tmod</a></tt>.

60 nodes (0%) are attached to their parents as `obl:npmod`.

38 instances of `obl:npmod` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.06666666666667.

The following 12 pairs of parts of speech are connected with `obl:npmod`: <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (15; 25% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (10; 17% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (10; 17% instances), <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (8; 13% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (6; 10% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-DET.html">DET</a></tt> (2; 3% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (2; 3% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl:npmod	color:blue
1	Let	let	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=joint-list_m:4->2:1:_
2	AC	AC	NOUN	NN	Number=Sing	1	obj	1:obj|3:nsubj:xsubj	Entity=(6-abstract-new-cf1-1-coref)
3	>	>	SYM	SYM	_	1	xcomp	1:xcomp	_
4	CB	CB	NOUN	NN	Number=Sing	3	obl:npmod	3:obl:npmod	Entity=(7-abstract-new-cf2-1-coref)|SpaceAfter=No
5	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:npmod	color:blue
1	4.	4.	X	LS	_	2	dep	2:dep	Discourse=joint-list_m:35->32:0:_
2	Flagyl	Flagyl	PROPN	NNP	Number=Sing	0	root	0:root	Entity=(6-substance-giv:inact-cf2-1-coref-Metronidazole)
3	500	500	NUM	CD	NumForm=Digit|NumType=Card	4	nummod	4:nummod	Entity=(45-substance-new-cf3-2-sgl
4	mg	milligram	NOUN	NNS	Number=Plur	2	appos	2:appos	Entity=45)
5	four	four	NUM	CD	NumForm=Word|NumType=Card	6	nummod	6:nummod	_
6	times	time	NOUN	NNS	Number=Plur	4	obl:npmod	4:obl:npmod	MSeg=time-s
7	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	8:det	Entity=(42-time-giv:act-cf1*-2-coref
8	day	day	NOUN	NN	Number=Sing	6	obl:tmod	6:obl:tmod	Entity=42)|SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 obl:npmod	color:blue
1	He	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	4:nsubj	Discourse=joint-other_m:14->10:1:_|Entity=(13-person-giv:act-cf1*-1-ana)
2	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	4:aux	MSeg=ha-s
3	been	be	AUX	VBN	Tense=Past|VerbForm=Part	4	aux	4:aux	_
4	working	work	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	MSeg=work-ing
5	with	with	ADP	IN	_	7	case	7:case	_
6	physical	physical	ADJ	JJ	Degree=Pos	7	amod	7:amod	Entity=(21-abstract-new-cf2-2-coref|MSeg=physic-al
7	therapy	therapy	NOUN	NN	Number=Sing	4	obl	4:obl:with	Entity=21)
8	two	two	NUM	CD	NumForm=Word|NumType=Card	11	nummod	11:nummod	Entity=(22-time-new-cf3-4-sgl
9	to	to	ADP	IN	_	10	case	10:case	_
10	three	three	NUM	CD	NumForm=Word|NumType=Card	8	nmod	8:nmod:to	_
11	times	time	NOUN	NNS	Number=Plur	4	obl:npmod	4:obl:npmod	Entity=22)|MSeg=time-s
12	a	a	DET	DT	Definite=Ind|PronType=Art	13	det	13:det	Entity=(23-time-new-cf4-2-sgl
13	week	week	NOUN	NN	Number=Sing	11	nmod:npmod	11:nmod:npmod	Entity=23)|SpaceAfter=No
14	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


