---
layout: base
title:  'Statistics of advmod in UD_Chintang-CTNTB'
udver: '2'
---

## Treebank Statistics: UD_Chintang-CTNTB: Relations: `advmod`

This relation is universal.
There are 3 language-specific subtypes of `advmod`: <tt><a href="ctn_ctntb-dep-advmod-cop.html">advmod:cop</a></tt>, <tt><a href="ctn_ctntb-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="ctn_ctntb-dep-advmod-nmlz.html">advmod:nmlz</a></tt>.

817 nodes (6%) are attached to their parents as `advmod`.

746 instances of `advmod` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.27294981640147.

The following 14 pairs of parts of speech are connected with `advmod`: <tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt>-<tt><a href="ctn_ctntb-pos-ADV.html">ADV</a></tt> (711; 87% instances), <tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ctn_ctntb-pos-ADV.html">ADV</a></tt> (50; 6% instances), <tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt>-<tt><a href="ctn_ctntb-pos-CCONJ.html">CCONJ</a></tt> (23; 3% instances), <tt><a href="ctn_ctntb-pos-ADV.html">ADV</a></tt>-<tt><a href="ctn_ctntb-pos-ADV.html">ADV</a></tt> (12; 1% instances), <tt><a href="ctn_ctntb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ctn_ctntb-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="ctn_ctntb-pos-NUM.html">NUM</a></tt>-<tt><a href="ctn_ctntb-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ctn_ctntb-pos-PART.html">PART</a></tt> (3; 0% instances), <tt><a href="ctn_ctntb-pos-PART.html">PART</a></tt>-<tt><a href="ctn_ctntb-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ctn_ctntb-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="ctn_ctntb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ctn_ctntb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt>-<tt><a href="ctn_ctntb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt>-<tt><a href="ctn_ctntb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt>-<tt><a href="ctn_ctntb-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ctn_ctntb-pos-X.html">X</a></tt>-<tt><a href="ctn_ctntb-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 advmod	color:blue
1	Abo	abo	ADV	_	_	5	advmod	5:advmod	Gloss=now|MSeg=abo
2	hunceŋa	hun	PRON	_	Case=Erg|Deixis=Med|Number=Plur|PronType=Dem	5	nsubj	5:nsubj	Gloss=MED-NSG-ERG|MSeg=hun-ce-ŋa
3	le	le	PART	RESTR	InfStruct=Foc	2	advmod:emph	2:advmod:emph	Gloss=RESTR|MSeg=le
4	sahayog	sahayog	NOUN	_	Case=Abs|Number=Sing	5	obj	5:obj	Gloss=help|MSeg=sʌhʌyog
5	maipi	pid	VERB	_	Aspect=Imp|Clusivity[p]=In|Mood=Sub|Number[p]=Plur|Person=3|Person[p]=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Gloss=1NSG.INCL.P-give[.SUBJ.NPST.3.A]|MSeg=mai-pid|SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	5:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 advmod	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advmod	color:blue
1	Utti	u	ADV	_	AdvType=Qua|Deixis=Remt|PronType=Dem	4	advmod	4:advmod	Gloss=DIST-QUANT|MSeg=w-ʌt̪i
2	kina	kina	CCONJ	SEQ	_	4	advmod	4:advmod	Gloss=SEQ|MSeg=kina
3	yaŋ	yaŋ	PART	ADD	InfStruct=Foc	2	advmod:emph	2:advmod:emph	Gloss=ADD|MSeg=yaŋ
4	maimainute	nud	VERB	_	Aspect=Perfv|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Gloss=NEG-NEG-become_well-NEG-IND.PST[.3SG.S]|MSeg=mai-mai-nud-t-e
5	kina	kina	CCONJ	SEQ	_	8	cc	8:cc	Gloss=SEQ|MSeg=kina
6	Dhankuta	Dhankuta	PROPN	_	Case=Abs|Number=Sing	7	obl	7:obl	Gloss=a_place|MSeg=d̪hʌn̪kuʈa
7	khattumma	khatt	VERB	_	Aspect=Imp|Clusivity=Ex|Mood=Sub|Number=Plur|Number[p]=Sing|Person=1|Person[p]=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	acl:nmlz	8:acl:nmlz	Gloss=take-3[SG].P-1PL.A-EXCL|MSeg=khatt-u-m-ŋa
8	kha	kha	NOUN	NMLZ2	Case=Abs|Number=Sing	4	parataxis	4:parataxis	Gloss=NMLZ2|MSeg=kha
9	.	.	PUNCT	_	_	4	punct	4:punct	SpacesAfter=\n

~~~


