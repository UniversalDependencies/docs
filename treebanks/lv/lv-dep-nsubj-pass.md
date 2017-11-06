---
layout: base
title:  'Statistics of nsubj:pass in UD_Latvian'
udver: '2'
---

## Treebank Statistics: UD_Latvian: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="lv-dep-nsubj.html">nsubj</a></tt>.

493 nodes (1%) are attached to their parents as `nsubj:pass`.

326 instances of `nsubj:pass` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.86815415821501.

The following 15 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="lv-pos-VERB.html">VERB</a></tt>-<tt><a href="lv-pos-NOUN.html">NOUN</a></tt> (349; 71% instances), <tt><a href="lv-pos-VERB.html">VERB</a></tt>-<tt><a href="lv-pos-PRON.html">PRON</a></tt> (113; 23% instances), <tt><a href="lv-pos-VERB.html">VERB</a></tt>-<tt><a href="lv-pos-PROPN.html">PROPN</a></tt> (14; 3% instances), <tt><a href="lv-pos-VERB.html">VERB</a></tt>-<tt><a href="lv-pos-SYM.html">SYM</a></tt> (3; 1% instances), <tt><a href="lv-pos-VERB.html">VERB</a></tt>-<tt><a href="lv-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="lv-pos-VERB.html">VERB</a></tt>-<tt><a href="lv-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="lv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lv-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="lv-pos-ADV.html">ADV</a></tt>-<tt><a href="lv-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="lv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="lv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="lv-pos-PRON.html">PRON</a></tt>-<tt><a href="lv-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="lv-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="lv-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="lv-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="lv-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="lv-pos-VERB.html">VERB</a></tt>-<tt><a href="lv-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="lv-pos-VERB.html">VERB</a></tt>-<tt><a href="lv-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 nsubj:pass	color:blue
1	Bijis	būt	VERB	vcnpdmsnasnp	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	aux	6:aux	_
2	kopā	kopā	ADV	r0m	_	6	advmod	6:advmod	_
3	ar	ar	ADP	sppd	_	4	case	4:case	_
4	kalpiem	kalps	NOUN	ncmpd1	Case=Dat|Gender=Masc|Number=Plur	2	iobj	2:iobj	_
5	smagi	smagi	ADV	rpm	Degree=Pos	6	advmod	6:advmod	_
6	jāstrādā	strādāt	VERB	vmnd0t200an	Mood=Nec|Polarity=Pos|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
7	,	,	PUNCT	zc	_	12	punct	12:punct	_
8	bet	bet	CCONJ	cc	_	12	cc	12:cc	_
9	alga	alga	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	12	nsubj:pass	12:nsubj:pass	_
10	gan	gan	PART	q	_	9	discourse	9:discourse	_
11	nav	nebūt	VERB	vcnipii30ay	Evident=Fh|Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux	12:aux	_
12	maksāta	maksāt	VERB	vmnpdfsnpsnp	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	6	conj	6:conj	SpaceAfter=No
13	.	.	PUNCT	zs	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Viņa	viņa	PRON	pp3fsnn	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	3:nsubj:pass	_
2	nav	nebūt	VERB	vcnipii30ay	Evident=Fh|Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	3:aux	_
3	precēta	precēt	VERB	vmnpdfsnpsnp	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	SpaceAfter=No
4	.	.	PUNCT	zs	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nsubj:pass	color:blue
1	Tā	tā	ADV	r0m	PronType=Dem	3	advmod	3:advmod	_
2	tikšot	tikt	VERB	vtnrfi100an	Evident=Nfh|Mood=Qot|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	3	aux	3:aux	_
3	attīstīta	attīstīt	VERB	vmnpdfsnpsnp	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	7	ccomp	7:ccomp	_
4	Latvija	Latvija	PROPN	npfsn4	Case=Nom|Gender=Fem|Number=Sing	3	nsubj:pass	3:nsubj:pass	SpaceAfter=No
5	,	,	PUNCT	zc	_	3	punct	3:punct	_
6	Mūrs	Mūrs	PROPN	npmsn1	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	7:nsubj	_
7	sacīja	sacīt	VERB	vmnist330an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	zs	_	7	punct	7:punct	_

~~~


