---
layout: base
title:  'Statistics of advmod:neg in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-advmod.html">advmod</a></tt>.
There are also 1 other language-specific subtypes of `advmod`: <tt><a href="pl_pdb-dep-advmod-arg.html">advmod:arg</a></tt>.

3892 nodes (1%) are attached to their parents as `advmod:neg`.

3882 instances of `advmod:neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04033915724563.

The following 16 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (3243; 83% instances), <tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (406; 10% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (64; 2% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (60; 2% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (56; 1% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (19; 0% instances), <tt><a href="pl_pdb-pos-PART.html">PART</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (14; 0% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (12; 0% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (7; 0% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (3; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-PART.html">PART</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod:neg	color:blue
1	-	-	PUNCT	interp	PunctType=Hyph	11	punct	11:punct	_
2	Jak	jak	ADV	adv:pos	Degree=Pos|PronType=Int	6	advmod	6:advmod	_
3	to	to	PART	part	_	2	fixed	2:fixed	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
5	nie	nie	PART	part	Polarity=Neg	6	advmod:neg	6:advmod:neg	_
6	należysz	należeć	VERB	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	11	parataxis:obj	11:parataxis:obj	_
7	do	do	ADP	prep:gen	AdpType=Prep	8	case	8:case	Case=Gen
8	partii	partia	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	6	obl:arg	6:obl:arg	SpaceAfter=No
9	?	?	PUNCT	interp	PunctType=Qest	6	punct	6:punct	_
10	-	-	PUNCT	interp	PunctType=Hyph	11	punct	11:punct	_
11	zdumiał	zdumieć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
12	się	się	PRON	part	PronType=Prs|Reflex=Yes	11	expl:pv	11:expl:pv	_
13	Lolek	Lolek	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	11	nsubj	11:nsubj	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 advmod:neg	color:blue
1	-	-	PUNCT	interp	PunctType=Hyph	2	punct	2:punct	_
2	Ma	mieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	dość	dość	PART	part	_	4	advmod	4:advmod	_
4	ciemną	ciemny	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	5	amod	5:amod	_
5	skórę	skóra	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	2	iobj	2:iobj	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
7	ale	ale	CCONJ	conj	_	11	cc	11:cc	_
8	chyba	chyba	PART	part	_	11	parataxis:insert	11:parataxis:insert	_
9	nie	nie	PART	part	Polarity=Neg	10	advmod:neg	10:advmod:neg	_
10	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	11:cop	_
11	Murzynem	Murzyn	PROPN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	2	conj	0:root|2:conj	SpaceAfter=No
12	?	?	PUNCT	interp	PunctType=Qest	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 advmod:neg	color:blue
1	Dla	dla	ADP	prep:gen	AdpType=Prep	2	case	2:case	Case=Gen
2	mnie	ja	PRON	ppron12:sg:gen:m1:pri:akc	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing|Person=1|PronType=Prs|Variant=Long	7	obl	7:obl	_
3	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
4	to	to	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	7	nsubj	7:nsubj	_
5	nie	nie	PART	part	Polarity=Neg	7	advmod:neg	7:advmod:neg	_
6	do	do	ADP	prep:gen	AdpType=Prep	7	case	7:case	Case=Gen
7	pomyślenia	pomyślenie	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


