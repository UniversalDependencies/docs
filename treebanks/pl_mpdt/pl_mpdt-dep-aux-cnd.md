---
layout: base
title:  'Statistics of aux:cnd in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `aux:cnd`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-aux.html">aux</a></tt>.
There are also 3 other language-specific subtypes of `aux`: <tt><a href="pl_mpdt-dep-aux-clitic.html">aux:clitic</a></tt>, <tt><a href="pl_mpdt-dep-aux-imp.html">aux:imp</a></tt>, <tt><a href="pl_mpdt-dep-aux-pass.html">aux:pass</a></tt>.

148 nodes (0%) are attached to their parents as `aux:cnd`.

107 instances of `aux:cnd` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.23648648648649.

The following 6 pairs of parts of speech are connected with `aux:cnd`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (131; 89% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (9; 6% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (4; 3% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux:cnd	color:blue
1	Nie	nie	PART	part	Polarity=Neg	2	advmod:neg	2:advmod:neg	SpaceAfter=No|Translit=Nie
2	przydał	przydać	VERB	praet:sg:m:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=przydał
3	by	by	AUX	part	_	2	aux:cnd	2:aux:cnd	Translit=by
4	był	być	AUX	plusq:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	aux	2:aux	Translit=był
5	że	że	SCONJ	comp	_	7	mark	7:mark	Translit=że
6	on	on	PRON	ppron3:sg:nom:m:ter:neut:npraep	Case=Nom|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	7	nsubj	7:nsubj	Translit=on
7	Dobry	dobry	ADJ	adj:sg:nom:m:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	ccomp:obj	2:ccomp:obj	SpaceAfter=No|Translit=Dobry
8	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	Translit=,
9	gdyby	gdyby	SCONJ	comp	_	11	mark	11:mark	Translit=gdyby
10	nie	nie	PART	part	Polarity=Neg	11	advmod:neg	11:advmod:neg	Translit=nie
11	było	być	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	2:advcl	Translit=było
12	pasterzów	pasterz	NOUN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	11	nsubj	11:nsubj	Translit=pásterzow
13	złych	zły	ADJ	adj:pl:gen:m:pos	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	12	amod	12:amod	SpaceAfter=No|Translit=złych
14	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	Translit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 aux:cnd	color:blue
1	Inszym	inszy	ADJ	adj:pl:dat:m:pos	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	3	iobj	3:iobj	Translit=Inszym
2	nie	nie	PART	part	Polarity=Neg	3	advmod:neg	3:advmod:neg	Translit=nie
3	może	móc	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=może
4	być	być	AUX	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	5	cop	5:cop	Translit=być
5	dobrym	dobry	ADJ	adj:sg:inst:m:pos	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	3	xcomp	3:xcomp	SpaceAfter=No|Translit=dobrym
6	/	/	PUNCT	interp	PunctType=Slsh	12	punct	12:punct	Translit=/
7	kto	kto	PRON	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	12	nsubj	12:nsubj	Translit=kto
8	by	by	AUX	part	_	12	aux:cnd	12:aux:cnd	Translit=by
9	sam	sam	ADJ	adj:sg:nom:m:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	12	amod	12:amod	Translit=sam
10	sobie	siebie	PRON	siebie:dat	Case=Dat|PronType=Prs|Reflex=Yes	12	iobj	12:iobj	Translit=sobie
11	był	być	AUX	praet:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	12	cop	12:cop	Translit=był
12	złym	zły	ADJ	adj:sg:inst:m:pos	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	SpaceAfter=No|Translit=złym
13	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	Translit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 6 aux:cnd	color:blue
1	i	i	CCONJ	conj	_	3	cc	3:cc	Translit=y
2	zaraz	zaraz	ADV	adv	_	3	advmod	3:advmod	Translit=záraz
3	Konkludujesz	konkludować	VERB	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Translit=Concuduiesz
4	:	:	PUNCT	interp	PunctType=Colo	3	punct	3:punct	Translit=:
5	jako	jako	SCONJ	comp	_	3	dep	3:dep	Translit=iáko
6	by	by	AUX	part	_	18	aux:cnd	18:aux:cnd	Translit=by
7	nie	nie	PART	part	Polarity=Neg	9	advmod:neg	9:advmod:neg	Translit=nie
8	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Ins|SpaceAfter=No|Translit=z
9	strachem	strach	NOUN	subst:sg:inst:m	Case=Ins|Gender=Masc|Number=Sing	17	obl	17:obl	Translit=stráchem
10	Bożym	boży	ADJ	adj:sg:inst:m:pos	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	9	amod	9:amod	Translit=Bożym
11	i	i	CCONJ	conj	_	13	cc	13:cc	Translit=y
12	bez	bez	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	13	case	13:case	Case=Gen|Translit=bez
13	wiary	wiara	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	9	conj	9:conj|17:obl	Translit=wiáry
14	do	do	ADP	prep:gen	AdpType=Prep	16	case	16:case	Case=Gen|Translit=do
15	tego	ten	DET	adj:sg:gen:m:pos	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	16	det	16:det	Translit=tego
16	SAKRAMENTU	sakrament	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	17	obl:arg	17:obl:arg	Translit=SAKRAMENTV
17	przystępować	przystępować	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	18	xcomp	18:xcomp	Translit=przystępowáć
18	potrzeba	potrzeba	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	5	ccomp	5:ccomp	SpaceAfter=No|Translit=potrzebá
19	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	Translit=.

~~~


