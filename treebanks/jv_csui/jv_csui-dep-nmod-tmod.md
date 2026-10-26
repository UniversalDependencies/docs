---
layout: base
title:  'Statistics of nmod:tmod in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="jv_csui-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="jv_csui-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="jv_csui-dep-nmod-poss.html">nmod:poss</a></tt>.

18 nodes (0%) are attached to their parents as `nmod:tmod`.

15 instances of `nmod:tmod` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.55555555555556.

The following 5 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (10; 56% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (4; 22% instances), <tt><a href="jv_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-NUM.html">NUM</a></tt> (1; 6% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 nmod:tmod	color:blue
1	Apa	apa	ADV	_	Polite=Infm|PronType=Int	4	advmod	_	_
2	durung	durung	PART	_	Polarity=Neg|Polite=Infm	4	advmod	_	_
3	mbok	mbok	PRON	_	Number=Sing|Person=2|Polite=Infm|PronType=Prs	4	nsubj	_	_
4	pikir	pikir	NOUN	_	Number=Sing	0	root	_	_
5	guneman	gunem	NOUN	_	Number=Sing	4	obj	_	_
6	ku	ku	PRON	_	Number=Sing|Person=1|Polite=Infm|PronType=Prs	5	nmod:poss	_	_
7	rong	rong	NUM	_	NumType=Card|Polite=Infm	8	nummod	_	_
8	minggu	minggu	NOUN	_	Number=Sing	5	nmod:tmod	_	_
9	kapungkur	pungkur	ADV	_	_	8	advmod	_	SpaceAfter=No
10	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nmod:tmod	color:blue
1	Idulfitri	idulfitri	PROPN	_	_	7	nsubj	_	_
2	utawa	utawa	CCONJ	_	Polite=Infm	3	cc	_	_
3	Lebaran	lebaran	PROPN	_	_	1	conj	_	_
4	taun	taun	NOUN	_	Number=Sing	1	nmod:tmod	_	_
5	iki	iki	DET	_	Polite=Infm|PronType=Dem	4	det	_	_
6	pancen	pancen	ADV	_	_	7	advmod	_	_
7	mirunggan	mirungga	ADJ	_	_	0	root	_	_
8	tumrape	tumrap	ADP	_	_	9	case	_	_
9	warga	warga	NOUN	_	Number=Sing|Polite=Infm	7	obl	_	_
10	Dhusun	dhusun	PROPN	_	_	9	nmod	_	_
11	Selamarta	selamarta	PROPN	_	_	10	flat:name	_	SpaceAfter=No
12	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod:tmod	color:blue
1	Antara	antara	NOUN	_	Number=Sing|Polite=Infm	4	nmod:lmod	_	_
2	e	e	DET	_	Definite=Def|Polite=Infm|PronType=Art	1	det	_	_
3	rong	rong	NUM	_	NumType=Card|Polite=Infm	4	nummod	_	_
4	bengi	bengi	NOUN	_	Number=Sing|Polite=Infm	6	nmod:tmod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	aku	aku	PRON	_	Number=Sing|Person=1|Polite=Infm|PronType=Prs	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	kakang	kakang	NOUN	_	Number=Sing	6	conj	_	_
9	ku	ku	PRON	_	Number=Sing|Person=1|Polite=Infm|PronType=Prs	8	nmod:poss	_	_
10	lan	lan	CCONJ	_	Polite=Infm	11	cc	_	_
11	Simbah	simbah	PROPN	_	_	6	conj	_	_
12	Kakung	kakung	PROPN	_	_	11	flat:name	_	_
13	kang	kang	PRON	_	Polite=Infm|PronType=Rel	14	nsubj	_	_
14	ngrumat	rumat	VERB	_	Voice=Act	6	acl:relcl	_	_
15	Simbah	simbah	PROPN	_	_	14	obl	_	_
16	Putri	putri	PROPN	_	_	15	flat:name	_	SpaceAfter=No
17	.	.	PUNCT	_	_	6	punct	_	SpacesAfter=\n

~~~


