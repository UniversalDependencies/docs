---
layout: base
title:  'Statistics of nmod:nmlz in UD_Chintang-CTNTB'
udver: '2'
---

## Treebank Statistics: UD_Chintang-CTNTB: Relations: `nmod:nmlz`

This relation is a language-specific subtype of <tt><a href="ctn_ctntb-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="ctn_ctntb-dep-nmod-poss.html">nmod:poss</a></tt>.

128 nodes (1%) are attached to their parents as `nmod:nmlz`.

128 instances of `nmod:nmlz` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.171875.

The following 8 pairs of parts of speech are connected with `nmod:nmlz`: <tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt> (82; 64% instances), <tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ctn_ctntb-pos-PRON.html">PRON</a></tt> (28; 22% instances), <tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt> (6; 5% instances), <tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ctn_ctntb-pos-PROPN.html">PROPN</a></tt> (5; 4% instances), <tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ctn_ctntb-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ctn_ctntb-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ctn_ctntb-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ctn_ctntb-pos-INTJ.html">INTJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:nmlz	color:blue
1	Satte	satya	NOUN	_	Case=Abs|Number=Sing	2	nmod:nmlz	2:nmod:nmlz	Gloss=truth|MSeg=sʌt̪t̪e
2	kha	kha	NOUN	NMLZ2	Case=Abs|Number=Sing	0	root	0:root	Gloss=NMLZ2|MSeg=kha
3	gone	gonei	PART	ATTN	_	2	discourse	2:discourse	Gloss=ATTN|MSeg=gonei|SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	6:punct	_
5	o	oi	INTJ	_	_	6	discourse	6:discourse	Gloss=oh|MSeg=o
6	baba	buwa	NOUN	_	Case=Abs|Number=Sing	2	vocative	2:vocative	Gloss=father|MSeg=baba|SpaceAfter=No
7	!	!	PUNCT	_	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:nmlz	color:blue
1	Ba	ba	PRON	_	Case=Abs|Deixis=Prox|Number=Sing|PronType=Dem	3	nsubj	3:nsubj	Gloss=PROX|MSeg=ba
2	ta	ta	PART	FOC	InfStruct=Foc	1	advmod:emph	1:advmod:emph	Gloss=FOC|MSeg=ta
3	hanako	hana	PRON	GEN	Case=Abs,Erg|Number=Sing|Person=2|Poss=Yes|PronType=Prs	10	ccomp	10:ccomp	Gloss=2SG-GEN|MSeg=hana-ko|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	3:punct	_
5	thembeʔ	them	PRON	LOC2	Case=Loc|Number=Sing|PronType=Int	6	nmod:nmlz	6:nmod:nmlz	Gloss=what-LOC2|MSeg=them-beʔ
6	ko	go	NOUN	NMLZ1	Case=Abs|Number=Sing	7	nmod	7:nmod	Gloss=NMLZ1|MSeg=go
7	binti-sewa	binti-sewak	NOUN	_	Case=Abs|Number=Sing	3	conj	3:conj|10:ccomp	Gloss=request-service|MSeg=bin̪t̪i-sewa
8	ta	ta	PART	FOC	InfStruct=Foc	7	advmod:emph	7:advmod:emph	Gloss=FOC|MSeg=ta
9	mahaʔ	maha	PART	NEG.IDENT	Polarity=Neg	3	advmod:cop	3:advmod:cop|7:advmod:cop	Gloss=NEG.IDENT|MSeg=mahãʔ
10	bhanikana	bhan	VERB	_	Aspect=Imp|VerbForm=Conv|Voice=Act	0	root	0:root	Gloss=say-CVB|MSeg=bhʌn̪-ikʌn̪ʌ|SpaceAfter=No
11	...	...	PUNCT	_	_	10	punct	10:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:nmlz	color:blue
1	Budaceŋa	budha	NOUN	_	Case=Erg|Number=Plur	2	nsubj	2:nsubj	Gloss=old_man-NSG-ERG|MSeg=buda-ce-ŋa
2	khemmettaŋnɨŋ	khems	VERB	_	Aspect=Perfv|Mood=Ind|Number=Plur|Number[p]=Sing|Person=3|Person[p]=3|Tense=Past|VerbForm=Fin|Voice=Cau	3	nmod:nmlz	3:nmod:nmlz	Gloss=hear-CAUS-PST-1SG-3PL[.A]-1SG[.P]|MSeg=khems-mett-a-ŋ-nĩ-ŋ
3	kha	kha	NOUN	NMLZ2	Case=Abs|Number=Sing	0	root	0:root	Gloss=NMLZ2|MSeg=kha
4	.	.	PUNCT	_	_	3	punct	3:punct	SpacesAfter=\n

~~~


