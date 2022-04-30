---
layout: relation
title: 'xcomp:subj'
shortdef: 'infinitival and adverbial subjects'
udver: '2'
---

The `xcomp:subj` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks for a subject realised as an infinitival or adverbial phrase.


~~~ conllu
# visual-style 10 2 xcomp:subj color:blue
1	Czy	czy	PART	part	PartType=Int	10	advmod	_	_
2	korzystać	korzystać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	10	xcomp:subj	_	_
3	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	5	case	_	Case=Gen
4	takiego	taki	DET	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	podręcznika	podręcznik	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	obl:arg	_	_
6	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
7	może	może	PART	part	PartType=Mod	9	advmod:emph	_	_
8	dla	dla	ADP	prep:gen	AdpType=Prep	9	case	_	Case=Gen
9	kogoś	ktoś	PRON	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing|PronType=Ind	10	nmod	_	_
10	uchybieniem	uchybienie	NOUN	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
11	?	?	PUNCT	interp	PunctType=Qest	10	punct	_	_
~~~

~~~ conllu
1	Is	_	_	_	_	_	_	_	_
2	using	_	_	_	_	_	_	_	_
3	such	_	_	_	_	_	_	_	_
4	a	_	_	_	_	_	_	_	_
5	handbook	_	_	_	_	_	_	_	_
6	a	_	_	_	_	_	_	_	_
7	fault	_	_	_	_	_	_	_	_
8	for	_	_	_	_	_	_	_	_
9	someone	_	_	_	_	_	_	_	_
10	?	_	_	_	_	_	_	_	_
~~~

~~~ conllu
# visual-style 4 2 xcomp:subj color:blue
1	-	-	PUNCT	interp	PunctType=Hyph	7	punct	_	_
2	Rzadko	rzadko	ADV	adv:pos	Degree=Pos	4	xcomp:subj	_	_
3	nie	nie	PART	part	Polarity=Neg	4	advmod:neg	_	_
4	znaczy	znaczyć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis:obj	_	_
5	wcale	wcale	ADV	adv	_	4	advmod:arg	_	_
6	-	-	PUNCT	interp	PunctType=Hyph	7	punct	_	_
7	ripostowali	ripostować	VERB	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	sędziowie	sędzia	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	7	punct	_	_
~~~

~~~ conllu
1	-	_	_	_	_	_	_	_	_
2	Rarely	_	_	_	_	_	_	_	_
3	does	_	_	_	_	_	_	_	_
4	not	_	_	_	_	_	_	_	_
5	mean	_	_	_	_	_	_	_	_
6	at	_	_	_	_	_	_	_	_
7	all	_	_	_	_	_	_	_	_
8	-	_	_	_	_	_	_	_	_
9	the	_	_	_	_	_	_	_	_
10	judges	_	_	_	_	_	_	_	_
11	retorted	_	_	_	_	_	_	_	_
12	.	_	_	_	_	_	_	_	_
~~~	
<!-- Interlanguage links updated St lis 3 20:59:12 CET 2021 -->
