---
layout: base
title:  'Statistics of csubj in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `csubj`

This relation is universal.
There are 2 language-specific subtypes of `csubj`: <tt><a href="hy_armtdp-dep-csubj-outer.html">csubj:outer</a></tt>, <tt><a href="hy_armtdp-dep-csubj-pass.html">csubj:pass</a></tt>.

364 nodes (0%) are attached to their parents as `csubj`.

323 instances of `csubj` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.00824175824176.

The following 14 pairs of parts of speech are connected with `csubj`: <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (194; 53% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (86; 24% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (49; 13% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj	color:blue
1	Գեղեցկությանը	գեղեցկություն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Coll	2	obl	_	Translit=Geġec’kowt’yanë|LTranslit=geġec’kowt’yown
2	հասնելու	հասնել	VERB	_	Case=Dat|Definite=Ind|Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	4	obl	_	Translit=hasnelow|LTranslit=hasnel
3	համար	համար	ADP	_	AdpType=Post	2	case	_	Translit=hamar|LTranslit=hamar
4	պետք	պետք	ADJ	_	_	0	root	_	Translit=petk’|LTranslit=petk’
5	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	_	Translit=ē|LTranslit=em
6	գեղեցիկ	գեղեցիկ	ADJ	_	Degree=Pos	7	xcomp	_	Translit=geġec’ik|LTranslit=geġec’ik
7	լինել	լինել	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	4	csubj	_	Translit=linel|LTranslit=linel|SpaceAfter=No
8	:	:	PUNCT	_	Foreign=Yes	4	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Մնաց	մնալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	Translit=Mnac’|LTranslit=mnal
2	միայն	միայն	ADV	_	_	1	advmod	_	Translit=miayn|LTranslit=miayn
3	ասել	ասել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	1	csubj	_	Translit=asel|LTranslit=asel|SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
5	որ	որ	SCONJ	_	_	7	mark	_	Translit=or|LTranslit=or
6	անունս	անուն	NOUN	_	Animacy=Nhum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	7	nsubj	_	Translit=anowns|LTranslit=anown
7	Նիկոլ	Նիկոլ	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	3	ccomp	_	Translit=Nikol|LTranslit=Nikol
8	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	cop	_	Translit=ē|LTranslit=em|SpaceAfter=No
9	։	։	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	Անմտություն	անմտություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	0	root	_	Translit=Anmtowt’yown|LTranslit=anmtowt’yown
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	Translit=ē|LTranslit=em
3	նման	նման	ADJ	_	_	4	amod	_	Translit=nman|LTranslit=nman
4	ձևով	ձև	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	5	obl	_	Translit=jewov|LTranslit=jew
5	մտածելը	մտածել	VERB	_	Case=Nom|Definite=Def|Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	1	csubj	_	Translit=mtaçelë|LTranslit=mtaçel|SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	Translit=,|LTranslit=,
7	առնվազն	առնվազն	ADV	_	_	9	advmod	_	Translit=aṙnvazn|LTranslit=aṙnvazn|SpaceAfter=No
8	՝	՝	PUNCT	_	_	9	punct	_	Translit=,|LTranslit=,
9	զավեշտական	զավեշտական	ADJ	_	_	1	conj	_	Translit=zaveštakan|LTranslit=zaveštakan|SpaceAfter=No
10	...	...	PUNCT	_	_	1	punct	_	Translit=...|LTranslit=...

~~~


