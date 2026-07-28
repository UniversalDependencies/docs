---
layout: base
title:  'Statistics of advcl:cmp in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `advcl:cmp`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-advcl.html">advcl</a></tt>.
There are also 1 other language-specific subtypes of `advcl`: <tt><a href="pl_pud-dep-advcl-relcl.html">advcl:relcl</a></tt>.

23 nodes (0%) are attached to their parents as `advcl:cmp`.

21 instances of `advcl:cmp` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.26086956521739.

The following 9 pairs of parts of speech are connected with `advcl:cmp`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (13; 57% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (3; 13% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 advcl:cmp	color:blue
1	Jego	on	PRON	ppron3:sg:gen:m1:ter:akc:npraep	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	2	nmod:poss	2:nmod:poss	_
2	ręce	ręka	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	3	nsubj	3:nsubj	_
3	przekładały	przekładać	VERB	praet:pl:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	piłkę	piłka	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	3	obj	3:obj	_
5	jak	jak	SCONJ	comp	ConjType=Comp	7	mark	7:mark	_
6	przy	przy	ADP	prep:loc	AdpType=Prep	7	case	7:case	Case=Loc
7	grze	gra	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	3	advcl:cmp	3:advcl:cmp	_
8	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Acc
9	trzy	trzy	NUM	num:pl:acc:m3:congr:ncol	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|NumForm=Word	10	nummod	10:nummod	_
10	kubki	kubek	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	7	nmod	7:nmod	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 advcl:cmp	color:blue
1	Czasem	czas	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	4	nmod	4:nmod	_
2	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	4	cop	4:cop	_
3	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
4	takie	taki	DET	adj:sg:nom:n:pos	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	0	root	0:root	_
5	jak	jak	SCONJ	comp	ConjType=Comp	6	mark	6:mark	_
6	supermoc	supermoc	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	4	advcl:cmp	4:advcl:cmp	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 advcl:cmp	color:blue
1	Kiedy	kiedy	ADV	adv	PronType=Int	5	advmod	5:advmod	_
2	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	3	case	3:case	Case=Loc
3	Indiach	Indie	PROPN	subst:pl:loc:n:pt	Case=Loc|Gender=Neut|Number=Ptan	5	obl	5:obl	_
4	ktoś	ktoś	PRON	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	5	nsubj	5:nsubj	_
5	umiera	umierać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl	9:advcl	_
6	ze	z	ADP	prep:gen:wok	AdpType=Prep|Variant=Long	7	case	7:case	Case=Gen
7	starości	starość	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	5	obl	5:obl	SpaceAfter=No
8	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	_
9	traktowane	traktować	ADJ	ppas:sg:nom:n:imperf:aff	Aspect=Imp|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
10	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux:pass	9:aux:pass	_
11	to	to	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	9	nsubj:pass	9:nsubj:pass	_
12	jak	jak	SCONJ	comp	ConjType=Comp	13	mark	13:mark	_
13	święto	święto	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	9	advcl:cmp	9:advcl:cmp	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	9	punct	9:punct	_

~~~


