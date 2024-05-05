---
layout: base
title:  'Statistics of ccomp in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `ccomp`

This relation is universal.

23 nodes (1%) are attached to their parents as `ccomp`.

22 instances of `ccomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.39130434782609.

The following 3 pairs of parts of speech are connected with `ccomp`: <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt> (17; 74% instances), <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt> (5; 22% instances), <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 ccomp	color:blue
1	Mày	mày	PRON	_	Number=Sing|Person=2|Polite=Infm|PronType=Prs	3	nsubj	_	_
2	đang	đang	ADV	_	AdvType=Tim|Tense=Pres	3	advmod	_	_
3	thắc mắc	thắc mắc	VERB	_	_	0	root	_	_
4	không	không	ADV	_	Polarity=Neg	5	advmod	_	_
5	biết	biết	VERB	_	_	3	xcomp	_	_
6	tụi	tụi	PART	_	Number=Plur	7	compound	_	_
7	tao	tao	PRON	_	Number=Sing|Person=1|Polite=Infm|PronType=Prs	10	nsubj	_	_
8	từ	từ	ADP	_	_	9	case	_	_
9	đâu	đâu	PRON	_	PronType=Int	10	obl	_	_
10	tới	tới	VERB	_	_	3	ccomp	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	phải	phải	ADJ	_	_	10	conj	_	_
13	không	không	ADV	_	Polarity=Neg	12	advmod	_	_
14	?	?	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Hóa ra	hóa ra	VERB	_	_	0	root	_	_
2	đây	đây	PRON	_	Deixis=Prox|PronType=Dem	4	nsubj	_	_
3	là	là	AUX	_	_	4	cop	_	_
4	sinh vật	sinh vật	NOUN	_	_	1	ccomp	_	_
5	dài	dài	ADJ	_	_	4	amod	_	_
6	nhất	nhất	ADV	_	AdvType=Deg	5	advmod	_	_
7	dưới	dưới	ADP	_	_	8	case	_	_
8	đáy	đáy	NOUN	_	_	4	nmod	_	_
9	đại dương	đại dương	NOUN	_	_	8	compound	_	_
10	.	.	PUNCT	_	_	1	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 ccomp	color:blue
1	Những	những	DET	_	_	2	det	_	_
2	quyết định	quyết định	NOUN	_	_	7	obj	_	_
3	này	này	DET	_	PronType=Dem	2	det	_	_
4	ta	ta	PRON	_	Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
5	không	không	ADV	_	Polarity=Neg	7	advmod	_	_
6	hề	hề	PART	_	Polarity=Neg	7	advmod	_	_
7	đưa ra	đưa ra	VERB	_	_	0	root	_	_
8	hấp tấp	hấp tấp	ADJ	_	_	7	ccomp	_	_
9	đâu	đâu	PART	_	_	7	discourse	_	_
10	.	.	PUNCT	_	_	7	punct	_	SpaceAfter=No

~~~


