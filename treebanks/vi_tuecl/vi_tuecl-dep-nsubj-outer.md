---
layout: base
title:  'Statistics of nsubj:outer in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="vi_tuecl-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="vi_tuecl-dep-nsubj-pass.html">nsubj:pass</a></tt>.

3 nodes (0%) are attached to their parents as `nsubj:outer`.

3 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.33333333333333.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 67% instances), <tt><a href="vi_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 1 nsubj:outer	color:blue
1	Ý	ý	NOUN	_	_	13	nsubj:outer	_	_
2	tôi	tôi	PRON	_	Number=Sing|Person=1|PronType=Prs	1	nmod:poss	_	_
3	là	là	AUX	_	VerbType=Cop	13	cop	_	SpaceAfter=No
4	,	,	PUNCT	,	_	13	punct	_	_
5	khi	khi	ADV	_	_	10	advmod	_	_
6	còn	còn	ADV	_	_	10	advmod	_	_
7	là	là	AUX	_	VerbType=Cop	10	cop	_	_
8	những	những	DET	_	_	10	det	_	_
9	bé	bé	ADJ	_	_	10	amod	_	_
10	gái	gái	NOUN	_	_	13	advcl	_	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	chúng ta	chúng ta	PRON	_	Number=Plur|Person=1|PronType=Prs	13	nsubj	_	_
13	bắt đầu	bắt đầu	VERB	_	_	0	root	_	_
14	một	một	NUM	_	NumType=Card	15	nummod	_	_
15	cách	cách	NOUN	_	_	13	obj	_	_
16	mạnh mẽ	mạnh mẽ	ADJ	_	_	15	amod	_	_
17	và	và	CCONJ	_	_	19	cc	_	_
18	đầy	đầy	ADV	_	_	19	advmod	_	_
19	quyết tâm	quyết tâm	ADJ	_	_	15	conj	_	_
20	--	--	PUNCT	_	_	13	punct	_	_
21	"	"	PUNCT	_	_	13	punct	_	SpaceAfter=No
22	Yeah	Yeah	INTJ	_	Foreign=Yes	25	discourse	_	SpaceAfter=No
23	,	,	PUNCT	_	_	25	punct	_	_
24	ai	ai	PRON	_	PronType=Int	25	nsubj	_	_
25	bảo	bảo	VERB	_	_	13	parataxis	_	_
26	đấy	đấy	PART	_	_	25	discourse	_	_
27	?	?	PUNCT	_	_	13	punct	_	_
28	"	"	PUNCT	_	_	13	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:outer	color:blue
1	Đó	đó	PRON	_	Deixis=Remt|PronType=Dem	3	nsubj:outer	_	_
2	là	là	AUX	_	VerbType=Cop	3	cop	_	_
3	vì sao	vì sao	ADV	_	AdvType=Cau	0	root	_	_
4	họ	họ	PRON	_	Number=Plur|Person=3|PronType=Prs	6	nsubj	_	_
5	đã	đã	ADV	_	AdvType=Tim|Tense=Past	6	advmod	_	_
6	bắt đầu	bắt đầu	VERB	_	_	3	advcl	_	_
7	cung cấp	cung cấp	VERB	_	_	6	xcomp	_	_
8	những	những	DET	_	_	9	det	_	_
9	ống	ống	NOUN	_	_	7	obj	_	_
10	nhôm	nhôm	NOUN	_	_	9	compound	_	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	những	những	DET	_	_	13	det	_	_
13	trại	trại	NOUN	_	_	9	appos	_	_
14	làm	làm	VERB	_	_	13	acl	_	_
15	bằng	bằng	ADP	_	_	16	case	_	_
16	nhôm	nhôm	NOUN	_	_	14	obl	_	_
17	.	.	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


