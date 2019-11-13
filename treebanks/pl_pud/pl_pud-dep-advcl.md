---
layout: base
title:  'Statistics of advcl in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `advcl`

This relation is universal.
There are 1 language-specific subtypes of `advcl`: <tt><a href="pl_pud-dep-advcl-relcl.html">advcl:relcl</a></tt>.

171 nodes (1%) are attached to their parents as `advcl`.

109 instances of `advcl` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.92982456140351.

The following 10 pairs of parts of speech are connected with `advcl`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (136; 80% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (16; 9% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (6; 4% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (5; 3% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 advcl	color:blue
1	Bouchard	Bouchard	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	_
2	doznała	doznać	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	szokującej	szokujący	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	amod	4:amod	_
4	porażki	porażka	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	2	obj	2:obj	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
6	tracąc	tracić	VERB	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	2	advcl	2:advcl	_
7	trzy	trzy	NUM	num:pl:acc:m3:congr:ncol	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|NumForm=Word	8	nummod	8:nummod	_
8	sety	set	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	6	obj	6:obj	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 advcl	color:blue
1	Proces	proces	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj:pass	5:nsubj:pass	_
2	ten	ten	DET	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	1	det	1:det	_
3	został	zostać	AUX	praet:sg:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	aux:pass	5:aux:pass	_
4	jednak	jednak	PART	part	_	5	advmod:emph	5:advmod:emph	_
5	odwrócony	odwrócić	ADJ	ppas:sg:nom:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
7	kiedy	kiedy	ADV	adv	PronType=Int	9	advmod	9:advmod	_
8	Julian	Julian	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	9:nsubj	_
9	zginął	zginąć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	advcl	5:advcl	_
10	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	11	case	11:case	Case=Loc
11	bitwie	bitwa	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	9	obl:arg	9:obl:arg	_
12	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	14	case	14:case	Case=Loc
13	363	363	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	14	amod:flat	14:amod:flat	_
14	r	rok	X	brev:pun	Abbr=Yes|Pun=Yes	9	obl	9:obl	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 advcl	color:blue
1	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	6	punct	6:punct	SpaceAfter=No
2	Norman	Norman	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
3	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	6	cop	6:cop	_
4	mój	mój	DET	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	6	det:poss	6:det:poss	_
5	dobry	dobry	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	6	amod	6:amod	_
6	kolega	kolega	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
8	okropnie	okropnie	ADV	adv:pos	Degree=Pos	11	advmod	11:advmod	_
9	więc	więc	SCONJ	comp	_	10	mark	10:mark	_
10	było	być	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	advcl	6:advcl	_
11	oglądać	oglądać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	10	xcomp	10:xcomp	_
12	go	on	PRON	ppron3:sg:acc:m1:ter:nakc:npraep	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	11	obj	11:obj	_
13	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	15	case	15:case	Case=Loc
14	takim	taki	DET	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	15	det	15:det	_
15	stanie	stan	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	11	obl	11:obl	_
16	emocjonalnym	emocjonalny	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	15	amod	15:amod	SpaceAfter=No
17	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	SpaceAfter=No
18	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	6	punct	6:punct	_

~~~


