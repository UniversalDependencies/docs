---
layout: base
title:  'Statistics of advcl:cmpr in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `advcl:cmpr`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-advcl.html">advcl</a></tt>.
There are also 1 other language-specific subtypes of `advcl`: <tt><a href="pl_mpdt-dep-advcl-relcl.html">advcl:relcl</a></tt>.

21 nodes (0%) are attached to their parents as `advcl:cmpr`.

20 instances of `advcl:cmpr` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.47619047619048.

The following 6 pairs of parts of speech are connected with `advcl:cmpr`: <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (7; 33% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (4; 19% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (4; 19% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (3; 14% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (2; 10% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 20 advcl:cmpr	color:blue
1	Daruj	darować	VERB	impt:sg:sec:imperf	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=Daruy
2	Wmć	wmć	NOUN	subst:sg:voc:f	Case=Voc|Gender=Fem|Number=Sing	1	vocative	1:vocative	Translit=Wmc
3	Pani	pani	NOUN	subst:sg:voc:f	Case=Voc|Gender=Fem|Number=Sing	2	appos	2:appos	Translit=Pani
4	prostocie	prostota	NOUN	subst:sg:dat:f	Case=Dat|Gender=Fem|Number=Sing	1	iobj	1:iobj	Translit=prostocie
5	wyrazów	wyraz	NOUN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	4	nmod:arg	4:nmod:arg	Translit=wyrazow
6	kobiety	kobieta	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	5	nmod:poss	5:nmod:poss	Translit=kobiety
7	wychowanej	wychować	ADJ	ppas:sg:gen:f:perf:aff:pos	Aspect=Perf|Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	6	acl	6:acl	Translit=wychowaney
8	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Loc|Translit=w
9	stanie	stan	NOUN	subst:sg:loc:m	Case=Loc|Gender=Masc|Number=Sing	7	obl	7:obl	Translit=stanie
10	natury	natura	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	9	nmod:arg	9:nmod:arg	SpaceAfter=No|Translit=natury
11	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	Translit=,
12	nieumiejącej	umieć	ADJ	pact:sg:gen:f:imperf:neg:pos	Aspect=Imp|Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Neg|VerbForm=Part|Voice=Act	7	conj	6:acl|7:conj	Translit=nie umieiącey
13	inaczej	inaczej	ADV	adv	_	14	advmod	14:advmod	Translit=inaczey
14	pisać	pisać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	12	xcomp	12:xcomp	SpaceAfter=No|Translit=pisać
15	,	,	PUNCT	interp	PunctType=Comm	17	punct	17:punct	Translit=,
16	tylko	tylko	SCONJ	comp	_	17	mark	17:mark	Translit=tylko
17	tak	tak	ADV	adv	PronType=Dem	13	obl:cmpr	13:obl:cmpr	SpaceAfter=No|Translit=tak
18	,	,	PUNCT	interp	PunctType=Comm	20	punct	20:punct	Translit=,
19	jak	jak	SCONJ	comp	ConjType=Comp	20	mark	20:mark	Translit=iak
20	myśli	myśleć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	17	advcl:cmpr	17:advcl:cmpr	SpaceAfter=No|Translit=myśli
21	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl:cmpr	color:blue
1	Ja	ja	PRON	ppron12:sg:nom:pri	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	3:nsubj|8:nsubj	Translit=Ja
2	jestem	być	AUX	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	Translit=iestem
3	roztropniejszy	roztropny	ADJ	adj:sg:nom:m:com	Case=Nom|Degree=Cmp|Gender=Masc|Number=Sing	0	root	0:root	Translit=rostropnieyszy
4	niż	niż	SCONJ	comp	ConjType=Comp	5	mark	5:mark	Translit=niż
5	rozumiesz	rozumieć	VERB	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl:cmpr	3:advcl:cmpr	SpaceAfter=No|Translit=rozumiesz
6	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	Translit=,
7	nie	nie	PART	part	Polarity=Neg	8	advmod:neg	8:advmod:neg	Translit=nie
8	chcę	chcieć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	3:conj	Translit=chcę
9	niewolić	niewolić	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	8	xcomp	8:xcomp	Translit=niewolić
10	cię	ty	PRON	ppron12:sg:gen:sec:nakc	Case=Gen|Number=Sing|Person=2|PronType=Prs|Variant=Short	9	obj	9:obj	Translit=cię
11	przeciwko	przeciwko	ADP	prep:dat	AdpType=Prep	12	case	12:case	Case=Dat|Translit=przeciwko
12	skłonności	skłonność	NOUN	subst:sg:dat:f	Case=Dat|Gender=Fem|Number=Sing	9	obl:arg	9:obl:arg	Translit=skłonności
13	twojej	twój	DET	adj:sg:dat:f:pos	Case=Dat|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	12	det:poss	12:det:poss	SpaceAfter=No|Translit=twoiey
14	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	Translit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 advcl:cmpr	color:blue
1	CUdowne	cudowny	ADJ	adj:pl:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	3	amod	3:amod	Translit=CUdowne
2	Dyszkurować	dyszkurować	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	6	xcomp:subj	6:xcomp:subj	Translit=dyszkurowáć
3	rzeczy	rzecz	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	2	obj	2:obj	SpaceAfter=No|Translit=rzeczy
4	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	Translit=,
5	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	Translit=iest
6	jedno	jedno	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	Translit=iedno
7	co	co	SCONJ	comp	_	9	mark	9:mark	Translit=co
8	cudaki	cudak	NOUN	subst:pl:acc:m	Case=Acc|Gender=Masc|Number=Plur	9	obj	9:obj	Translit=cudaki
9	prawić	prawić	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	6	advcl:cmpr	6:advcl:cmpr	SpaceAfter=No|Translit=práwić
10	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	Translit=.

~~~


