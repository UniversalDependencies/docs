---
layout: base
title:  'Statistics of nsubj:pass in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="lt_alksnis-dep-nsubj.html">nsubj</a></tt>.

473 nodes (1%) are attached to their parents as `nsubj:pass`.

251 instances of `nsubj:pass` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5369978858351.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (423; 89% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (21; 4% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (21; 4% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nsubj:pass	color:blue
1	„	„	PUNCT	skyr.	_	2	punct	2:punct	SpaceAfter=No
2	Nežinau	nežinoti	VERB	vksm.asm.neig.tiesiog.es.vns.1.	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	skyr.	_	7	punct	7:punct	_
4	kaip	kaip	SCONJ	jng.	_	7	mark	7:mark	_
5	tas	tas	DET	įv.vyr.vns.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|PronType=Dem	6	det	6:det	_
6	sąrašas	sąrašas	NOUN	dkt.vyr.vns.V.	Case=Nom|Gender=Masc|Number=Sing	7	nsubj:pass	7:nsubj:pass	_
7	sudarytas	sudaryti	VERB	vksm.dlv.neveik.būt.vyr.vns.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	2	ccomp	2:ccomp	SpaceAfter=No
8	.	.	PUNCT	skyr.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nsubj:pass	color:blue
1	Dokumentui	dokumentas	NOUN	dkt.vyr.vns.N.	Case=Dat|Gender=Masc|Number=Sing	2	obl:arg	2:obl:arg:dat	_
2	liko	likti	VERB	vksm.asm.tiesiog.būt-k.vns.3.	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	peržengti	peržengti	VERB	vksm.bndr.	Polarity=Pos|VerbForm=Inf	2	xcomp	2:xcomp	_
4	paskutinį	paskutinis	ADJ	bdv.nelygin.vyr.vns.G.	Case=Acc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	_
5	laiptelį	laiptelis	NOUN	dkt.vyr.vns.G.	Case=Acc|Gender=Masc|Number=Sing	3	obj	3:obj	_
6	-	-	PUNCT	skyr.	_	7	punct	7:punct	_
7	priėmimą	priėmimas	NOUN	dkt.vyr.vns.G.	Case=Acc|Gender=Masc|Number=Sing	5	flat	5:flat|10:nsubj:pass	SpaceAfter=No
8	,	,	PUNCT	skyr.	_	10	punct	10:punct	_
9	kuris	kuris	DET	įv.vyr.vns.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|PronType=Int,Rel	10	nsubj:pass	7:ref	_
10	planuojamas	planuoti	VERB	vksm.dlv.neveik.es.vyr.vns.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	7	acl:relcl	7:acl:relcl	_
11	gruodį	gruodis	NOUN	dkt.vyr.vns.G.	Case=Acc|Gender=Masc|Number=Sing	10	obl	10:obl:acc	SpaceAfter=No
12	.	.	PUNCT	skyr.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Ji	jis	PRON	įv.mot.vns.V.	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj:pass	2:nsubj:pass	_
2	sudaryta	sudaryti	VERB	vksm.dlv.neveik.būt.mot.vns.V.	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
3	naudojant	naudoti	VERB	vksm.pad.es.	Polarity=Pos|Tense=Pres|VerbForm=Ger	2	advcl	2:advcl	_
4	empirinę	empirinis	ADJ	bdv.nelygin.mot.vns.G.	Case=Acc|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	7	amod	7:amod	_
5	skalių	skalė	NOUN	dkt.mot.dgs.K.	Case=Gen|Gender=Fem|Number=Plur	6	obl:arg	6:obl:arg:gen	_
6	konstravimo	konstravimas	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	7	nmod	7:nmod:gen	_
7	strategiją	strategija	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	3	obj	3:obj	SpaceAfter=No
8	.	.	PUNCT	skyr.	_	2	punct	2:punct	_

~~~


