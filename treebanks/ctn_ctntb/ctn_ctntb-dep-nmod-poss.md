---
layout: base
title:  'Statistics of nmod:poss in UD_Chintang-CTNTB'
udver: '2'
---

## Treebank Statistics: UD_Chintang-CTNTB: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="ctn_ctntb-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="ctn_ctntb-dep-nmod-nmlz.html">nmod:nmlz</a></tt>.

169 nodes (1%) are attached to their parents as `nmod:poss`.

166 instances of `nmod:poss` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28402366863905.

The following 8 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt> (95; 56% instances), <tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ctn_ctntb-pos-PRON.html">PRON</a></tt> (37; 22% instances), <tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ctn_ctntb-pos-PROPN.html">PROPN</a></tt> (31; 18% instances), <tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ctn_ctntb-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ctn_ctntb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ctn_ctntb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ctn_ctntb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ctn_ctntb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ctn_ctntb-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt>-<tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod:poss	color:blue
1	Lu	lo	INTJ	_	_	7	discourse	7:discourse	Gloss=okay|MSeg=lʌ|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	1:punct	_
3	abo	abo	ADV	_	_	7	advmod	7:advmod	Gloss=now|MSeg=abo
4	tupla	tupla	NOUN	_	Case=Abs|Number=Sing	7	nsubj	7:nsubj	Gloss=banana_leaf|MSeg=tupla
5	basaiʔ	ba	ADV	OBL-LOC1	AdvType=Loc|Case=Loc|Deixis=Prox|PronType=Dem	7	advmod:nmlz	7:advmod:nmlz	Gloss=PROX-OBL-LOC1|MSeg=ba-sa-iʔ
6	ko	go	NOUN	NMLZ1	Case=Abs|Number=Sing	7	nmod:poss	7:nmod:poss	Gloss=NMLZ1|MSeg=go
7	ubheĩbe	bheĩ	NOUN	LOC2	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3	0	root	0:root	Gloss=3SG.POSS-place_below-LOC2|MSeg=u-bheĩ-beʔ|SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	7:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:poss	color:blue
1	Basako	ba	PRON	OBL-GEN	Case=Abs|Deixis=Prox|Number=Sing|Poss=Yes|PronType=Dem	3	nmod:poss	3:nmod:poss	Gloss=PROX-OBL-GEN|MSeg=ba-sa-ko
2	arko	arko	DET	_	PronType=Ind	3	amod	3:amod	Gloss=other|MSeg=ʌrko
3	usurwala	surwal	NOUN	NTVZ	Case=Abs|Number=Sing|Number[psor]=Sing|Person=3	4	obj	4:obj	Gloss=3SG.POSS-pants-NTVZ|MSeg=u-surwʌl-a
4	waiʔamettoŋso	wat	VERB	_	Aspect=Perf|Mood=Sub|Number=Sing|Number[p]=Sing|Person=2|Person[p]=3|Tense=Past|VerbForm=Fin|Voice=Cau	5	acl:nmlz	5:acl:nmlz	Gloss=wear-2[SG].A-CAUS-PST-3.P-PRF-[SUBJ.]PST-3[SG].P|MSeg=[wat]-[a-mett-a-u-ŋs-a-u]
5	kha	kha	NOUN	NMLZ2	Case=Abs|Number=Sing	0	root	0:root	Gloss=NMLZ2|MSeg=kha|SpaceAfter=No
6	?	?	PUNCT	_	_	5	punct	5:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Surje	Surya	PROPN	_	Case=Abs|Number=Sing	2	nmod:poss	2:nmod:poss	Gloss=a_name|MSeg=suryʌ
2	ujhola	jhola	NOUN	_	Case=Abs|Number=Sing|Number[psor]=Sing|Person=3	4	obj	4:obj	Gloss=3SG.POSS-bag|MSeg=u-jhola
3	ta	ta	PART	FOC	InfStruct=Foc	2	advmod:emph	2:advmod:emph	Gloss=FOC|MSeg=ta
4	khawanduŋsuhẽ	khag	VERB	COMPL1	Aspect=ComplPerf|Mood=Ind|Number=Sing|Number[p]=Sing|Person=1|Person[p]=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Gloss=see-PST-3.P-COMPL1-PST-3.P-PRF-PST-3[SG].P-1SG[.A]-IND.PST|MSeg=khag-a-u-dhend-a-u-ŋs-a-u-ŋ-e|SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	4:punct	SpacesAfter=\n

~~~


