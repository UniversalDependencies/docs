---
layout: base
title:  'Statistics of nsubj in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `nsubj`

This relation is universal.
There are 2 language-specific subtypes of `nsubj`: <tt><a href="vi_tuecl-dep-nsubj-outer.html">nsubj:outer</a></tt>, <tt><a href="vi_tuecl-dep-nsubj-pass.html">nsubj:pass</a></tt>.

170 nodes (9%) are attached to their parents as `nsubj`.

162 instances of `nsubj` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.30588235294118.

The following 14 pairs of parts of speech are connected with `nsubj`: <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt> (97; 57% instances), <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt> (36; 21% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt> (16; 9% instances), <tt><a href="vi_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="vi_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="vi_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_tuecl-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="vi_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="vi_tuecl-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="vi_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj	color:blue
1	Đức	đức	NOUN	_	_	2	clf	_	_
2	vua	vua	NOUN	_	Case=Voc|Polite=Elev	7	vocative	_	SpaceAfter=No
3	,	,	PUNCT	_	_	7	punct	_	_
4	các	các	DET	_	Number=Plur	5	det	_	_
5	chòm sao	chòm sao	NOUN	_	_	7	nsubj	_	_
6	đã	đã	ADV	_	AdvType=Tim|Tense=Past	7	advmod	_	_
7	nói	nói	VERB	_	_	0	root	_	_
8	về	về	ADP	_	_	9	case	_	_
9	việc	việc	NOUN	_	_	7	obl	_	_
10	chúng ta	chúng ta	PRON	_	Number=Plur|Person=1|PronType=Prs	9	nmod	_	_
11	ở	ở	ADP	_	_	12	case	_	_
12	đây	đây	PRON	_	Deixis=Prox|PronType=Dem	7	obl	_	_
13	.	.	PUNCT	_	_	7	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 nsubj	color:blue
1	Dù sao	dù sao	ADV	_	_	8	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	8	punct	_	_
3	thực ra	thực ra	ADV	_	_	8	advcl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	_
5	đó	đó	PRON	_	Deixis=Remt|PronType=Dem	8	nsubj	_	_
6	là	là	AUX	_	VerbType=Cop	8	cop	_	_
7	một	một	NUM	_	NumType=Card	8	nummod	_	_
8	băng	băng	NOUN	_	_	0	root	_	_
9	đảng	đảng	NOUN	_	_	8	compound	_	_
10	những	những	DET	_	_	11	det	_	_
11	tay	tay	NOUN	_	_	8	compound	_	_
12	Na Uy	Na Uy	PROPN	_	NameType=Nat	8	compound	_	_
13	lớn tuổi	lớn tuổi	ADJ	_	_	12	amod	_	_
14	.	.	PUNCT	_	_	8	punct	_	SpaceAfter=No

~~~


