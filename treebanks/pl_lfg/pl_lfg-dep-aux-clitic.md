---
layout: base
title:  'Statistics of aux:clitic in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `aux:clitic`

This relation is a language-specific subtype of <tt><a href="pl_lfg-dep-aux.html">aux</a></tt>.
There are also 3 other language-specific subtypes of `aux`: <tt><a href="pl_lfg-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="pl_lfg-dep-aux-imp.html">aux:imp</a></tt>, <tt><a href="pl_lfg-dep-aux-pass.html">aux:pass</a></tt>.

1697 nodes (1%) are attached to their parents as `aux:clitic`.

1581 instances of `aux:clitic` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.12315851502652.

The following 7 pairs of parts of speech are connected with `aux:clitic`: <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (1643; 97% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (21; 1% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (18; 1% instances), <tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="pl_lfg-pos-DET.html">DET</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 aux:clitic	color:blue
1	A	a	CCONJ	conj	_	4	cc	4:cc	_
2	ptaki	ptak	NOUN	subst:pl:acc:m2	Case=Acc|Gender=Masc|Number=Plur|SubGender=Masc2	4	obj	4:obj	_
3	jakby	jakby	PART	qub	_	4	advmod	4:advmod	_
4	wymiotło	wymieść	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
6	najmarniejszego	marny	ADJ	adj:sg:gen:m2:sup	Case=Gen|Degree=Sup|Gender=Masc|Number=Sing|SubGender=Masc2	7	amod	7:amod	_
7	wróbla	wróbel	NOUN	subst:sg:gen:m2	Case=Gen|Gender=Masc|Number=Sing|SubGender=Masc2	9	obj	9:obj	_
8	nie	nie	PART	qub	Polarity=Neg	9	advmod	9:advmod	_
9	spotkał	spotkać	VERB	praet:sg:m1:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	4	conj	4:conj	SpaceAfter=No
10	eś	być	AUX	aglt:sg:sec:imperf:wok	Aspect=Imp|Number=Sing|Person=2|Variant=Long	9	aux:clitic	9:aux:clitic	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux:clitic	color:blue
1	Była	być	AUX	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	cop:locat	6:cop:locat	SpaceAfter=No
2	m	być	AUX	aglt:sg:pri:imperf:nwok	Aspect=Imp|Number=Sing|Person=1|Variant=Short	6	aux:clitic	6:aux:clitic	_
3	na	na	ADP	prep:loc	AdpType=Prep	4	case	4:case	Case=Loc
4	oczyszczeniu	oczyścić	NOUN	ger:sg:loc:n:perf:aff	Aspect=Perf|Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	6	obl	6:obl:na	_
5	u	u	ADP	prep:gen	AdpType=Prep	6	case	6:case	Case=Gen
6	kosmetyczki	kosmetyczka	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 aux:clitic	color:blue
1	Ale	ale	CCONJ	conj	_	5	cc	5:cc	_
2	demon	demon	NOUN	subst:sg:nom:m2	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc2	5	nsubj	5:nsubj	_
3	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Loc
4	intuicji	intuicja	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	2	nmod	2:nmod:w	_
5	podpowiada	podpowiadać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	mi	ja	PRON	ppron12:sg:dat:m1:pri:nakc	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs|SubGender=Masc1|Variant=Short	5	iobj	5:iobj	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
8	żeby	żeby	SCONJ	comp	_	11	mark	11:mark	SpaceAfter=No
9	m	być	AUX	aglt:sg:pri:imperf:nwok	Aspect=Imp|Number=Sing|Person=1|Variant=Short	11	aux:clitic	11:aux:clitic	_
10	był	być	AUX	praet:sg:m1:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	11	cop	11:cop	_
11	ostrożny	ostrożny	ADJ	adj:sg:nom:m1:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|SubGender=Masc1	5	ccomp	5:ccomp	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


