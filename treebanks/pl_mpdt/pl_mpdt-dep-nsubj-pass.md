---
layout: base
title:  'Statistics of nsubj:pass in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="pl_mpdt-dep-nsubj-outer.html">nsubj:outer</a></tt>.

109 nodes (0%) are attached to their parents as `nsubj:pass`.

88 instances of `nsubj:pass` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.15596330275229.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (77; 71% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (9; 8% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (6; 6% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (5; 5% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (5; 5% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (5; 5% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nsubj:pass	color:blue
1	Kończy	kończyć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=Kończy
2	żądając	żądać	VERB	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	1	advcl	1:advcl	SpaceAfter=No|Translit=żądając
3	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	Translit=,
4	aby	aby	SCONJ	comp	_	8	mark	8:mark	Translit=aby
5	przeciw	przeciw	ADP	prep:dat	AdpType=Prep	6	case	6:case	Case=Dat|Translit=przeciw
6	oskarżonym	oskarżony	NOUN	subst:pl:dat:m	Case=Dat|Gender=Masc|Number=Plur	8	obl	8:obl	Translit=oskarżonym
7	dowody	dowód	NOUN	subst:pl:nom:m	Case=Nom|Gender=Masc|Number=Plur	8	nsubj:pass	8:nsubj:pass	Translit=dowody
8	złożone	złożyć	ADJ	ppas:pl:nom:m:perf:aff:pos	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	2	ccomp	2:ccomp	Translit=złożone
9	były	być	AUX	praet:pl:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	8	aux:pass	8:aux:pass	SpaceAfter=No|Translit=były
10	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nsubj:pass	color:blue
1	A	a	CCONJ	conj	_	12	cc	12:cc	Translit=A
2	choćby	choćby	SCONJ	comp	_	6	mark	6:mark	Translit=choćby
3	który	który	DET	adj:sg:nom:m:pos	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	6	nsubj:pass	6:nsubj:pass	Translit=ktory
4	był	być	AUX	praet:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	aux:pass	6:aux:pass	Translit=był
5	i	i	PART	part	_	6	advmod:emph	6:advmod:emph	Translit=y
6	obrany	obrać	ADJ	ppas:sg:nom:m:perf:aff:pos	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	12	advcl	12:advcl	SpaceAfter=No|Translit=obrany
7	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	Translit=,
8	takowy	takowy	ADJ	adj:sg:nom:m:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	12	nsubj	12:nsubj	Translit=takowy
9	miejsca	miejsce	NOUN	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing	12	iobj	12:iobj	Translit=mieysca
10	miedzy	miedzy	ADP	prep:inst	AdpType=Prep	11	case	11:case	Case=Ins|Translit=miedzy
11	Komisarzami	komisarz	NOUN	subst:pl:inst:m	Case=Ins|Gender=Masc|Number=Plur	12	obl	12:obl	Translit=Kommissarzami
12	mieć	mieć	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	0	root	0:root	Translit=mieć
13	nie	nie	PART	part	Polarity=Neg	14	advmod:neg	14:advmod:neg	Translit=nie
14	będzie	być	AUX	fut:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	12	aux	12:aux	Translit=będźie
15	.	.	PUNCT	interp	PunctType=Peri	12	punct	12:punct	Translit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 nsubj:pass	color:blue
1	Prawdziwy	prawdziwy	ADJ	adj:sg:nom:m:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	2:amod	Translit=Prawdziwy
2	Bóg	Bóg	PROPN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	9	nsubj:pass	9:nsubj:pass	Translit=Bog
3	czy	czy	PART	part	PartType=Int	9	advmod	9:advmod	Translit=czy
4	nie	nie	PART	part	Polarity=Neg	5	advmod:neg	5:advmod:neg	Translit=nie
5	był	być	AUX	praet:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	9	aux:pass	9:aux:pass	Translit=był
6	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Gen|Translit=od
7	kogo	kto	PRON	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing|PronType=Int	9	obl:agent	9:obl:agent	Translit=kogo
8	innego	inny	ADJ	adj:sg:gen:m:pos	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	7	amod	7:amod	Translit=innego
9	Znany	znać	ADJ	ppas:sg:nom:m:imperf:aff:pos	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	Translit=Znany
10	tylko	tylko	SCONJ	comp	_	12	mark	12:mark	Translit=tylko
11	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	12	case	12:case	Case=Gen|Translit=od
12	Izraelitów	Izraelita	PROPN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	8	obl:cmpr	8:obl:cmpr	SpaceAfter=No|Translit=Israelitow
13	?	?	PUNCT	interp	PunctType=Qest	9	punct	9:punct	Translit=?

~~~


