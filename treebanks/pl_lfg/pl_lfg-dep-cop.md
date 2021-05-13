---
layout: base
title:  'Statistics of cop in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `cop`

This relation is universal.
There are 1 language-specific subtypes of `cop`: <tt><a href="pl_lfg-dep-cop-locat.html">cop:locat</a></tt>.

1016 nodes (1%) are attached to their parents as `cop`.

765 instances of `cop` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49114173228346.

The following 6 pairs of parts of speech are connected with `cop`: <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (552; 54% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (337; 33% instances), <tt><a href="pl_lfg-pos-DET.html">DET</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (64; 6% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (41; 4% instances), <tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (21; 2% instances), <tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 cop	color:blue
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


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	"	"	PUNCT	interp	PunctSide=Ini|PunctType=Quot	4	punct	4:punct	SpaceAfter=No
2	Antoni	Antoni	PROPN	subst:sg:nom:m1	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc1	4	nsubj	4:nsubj	_
3	był	być	AUX	praet:sg:m1:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
4	człowiekiem	człowiek	NOUN	subst:sg:inst:m1	Case=Ins|Gender=Masc|Number=Sing|SubGender=Masc1	0	root	0:root	_
5	niewątpliwie	niewątpliwie	ADV	adv:pos	Degree=Pos	6	advmod	6:advmod	_
6	serio	serio	ADJ	adj:sg:inst:m1:pos	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|SubGender=Masc1	4	amod	4:amod	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cop	color:blue
1	Analiza	analiza	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	_
2	wykazała	wykazać	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
4	że	że	SCONJ	comp	_	8	mark	8:mark	_
5	powód	powód	NOUN	subst:sg:nom:m3	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc3	8	nsubj	8:nsubj	_
6	zawsze	zawsze	ADV	adv	PronType=Tot	8	advmod	8:advmod	_
7	był	być	AUX	praet:sg:m3:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc3|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
8	ten	ten	DET	adj:sg:nom:m3:pos	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem|SubGender=Masc3	2	ccomp:obj	2:ccomp:obj	_
9	sam	sam	ADJ	adj:sg:nom:m3:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|SubGender=Masc3	8	amod	8:amod	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


