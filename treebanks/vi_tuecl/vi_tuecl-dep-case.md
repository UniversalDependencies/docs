---
layout: base
title:  'Statistics of case in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `case`

This relation is universal.

155 nodes (8%) are attached to their parents as `case`.

150 instances of `case` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35483870967742.

The following 9 pairs of parts of speech are connected with `case`: <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-ADP.html">ADP</a></tt> (103; 66% instances), <tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_tuecl-pos-ADP.html">ADP</a></tt> (32; 21% instances), <tt><a href="vi_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_tuecl-pos-ADP.html">ADP</a></tt> (9; 6% instances), <tt><a href="vi_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="vi_tuecl-pos-ADP.html">ADP</a></tt> (4; 3% instances), <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-ADP.html">ADP</a></tt> (3; 2% instances), <tt><a href="vi_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="vi_tuecl-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_tuecl-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case	color:blue
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 case	color:blue
1	Đây	đây	PRON	_	Deixis=Prox|PronType=Dem	3	nsubj	_	_
2	là	là	AUX	_	VerbType=Cop	3	cop	_	_
3	vị trí	vị trí	NOUN	_	_	0	root	_	_
4	mục tiêu	mục tiêu	NOUN	_	_	3	compound	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	suối	suối	NOUN	_	_	3	appos	_	_
7	nước	nước	NOUN	_	_	6	compound	_	_
8	nóng	nóng	ADJ	_	_	7	amod	_	_
9	sâu	sâu	ADJ	_	_	6	amod	_	_
10	nhất	nhất	ADV	_	AdvType=Deg	9	advmod	_	_
11	thế giới	thế giới	NOUN	_	_	6	nmod:poss	_	_
12	tại	tại	ADP	_	_	14	case	_	_
13	Cenote	Cenote	PROPN	_	Foreign=Yes|NameType=Geo	14	compound	_	_
14	Zacaton	Zacaton	PROPN	_	Foreign=Yes|NameType=Geo	6	nmod	_	_
15	phía	phía	NOUN	_	_	14	nmod	_	_
16	bắc	bắc	ADJ	_	_	15	amod	_	_
17	Mexico	Mexico	PROPN	_	NameType=Geo|Typo=Yes	15	nmod	_	CorrectForm=México
18	.	.	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


