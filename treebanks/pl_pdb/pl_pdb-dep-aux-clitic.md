---
layout: base
title:  'Statistics of aux:clitic in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `aux:clitic`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-aux.html">aux</a></tt>.
There are also 3 other language-specific subtypes of `aux`: <tt><a href="pl_pdb-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="pl_pdb-dep-aux-imp.html">aux:imp</a></tt>, <tt><a href="pl_pdb-dep-aux-pass.html">aux:pass</a></tt>.

2145 nodes (1%) are attached to their parents as `aux:clitic`.

1957 instances of `aux:clitic` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14405594405594.

The following 6 pairs of parts of speech are connected with `aux:clitic`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (2071; 97% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (51; 2% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (17; 1% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-PART.html">PART</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux:clitic	color:blue
1	Ukląkł	uklęknąć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Clitic=Yes|Number=Sing|Person=1|Variant=Long	1	aux:clitic	1:aux:clitic	_
3	przy	przy	ADP	prep:loc	AdpType=Prep	4	case	4:case	Case=Loc
4	Mateuszu	Mateusz	PROPN	subst:sg:loc:m1	Animacy=Hum|Case=Loc|Gender=Masc|Number=Sing	1	obl	1:obl	_
5	i	i	CCONJ	conj	_	7	cc	7:cc	_
6	szybko	szybko	ADV	adv:pos	Degree=Pos	7	advmod	7:advmod	_
7	wcisnął	wcisnąć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	0:root|1:conj	_
8	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Clitic=Yes|Number=Sing|Person=1|Variant=Long	7	aux:clitic	7:aux:clitic	_
9	mu	on	PRON	ppron3:sg:dat:m1:ter:nakc:npraep	Animacy=Hum|Case=Dat|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	7	iobj	7:iobj	_
10	woreczek	woreczek	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	obj	7:obj	_
11	do	do	ADP	prep:gen	AdpType=Prep	12	case	12:case	Case=Gen
12	ręki	ręka	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	7	obl:arg	7:obl:arg	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:clitic	color:blue
1	Była	być	AUX	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
2	m	być	AUX	aglt:sg:pri:imperf:nwok	Aspect=Imp|Clitic=Yes|Number=Sing|Person=1|Variant=Short	3	aux:clitic	3:aux:clitic	_
3	pewna	pewny	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	5	parataxis:obj	5:parataxis:obj	_
4	-	-	PUNCT	interp	PunctType=Hyph	5	punct	5:punct	_
5	dziwi	dziwić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	się	się	PRON	part	PronType=Prs|Reflex=Yes	5	expl:pv	5:expl:pv	_
7	pani	pani	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	5:nsubj	_
8	Teresa	Teresa	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	7	appos	7:appos	SpaceAfter=No
9	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
10	słysząc	słyszeć	VERB	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	5	advcl	5:advcl	SpaceAfter=No
11	,	,	PUNCT	interp	PunctType=Comm	14	punct	14:punct	_
12	że	że	SCONJ	comp	_	14	mark	14:mark	_
13	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	14	cop	14:cop	_
14	sobowtór	sobowtór	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	10	ccomp	10:ccomp	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 aux:clitic	color:blue
1	"	"	PUNCT	interp	PunctType=Quot	8	punct	8:punct	SpaceAfter=No
2	W	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	3	case	3:case	Case=Loc
3	dzieciństwie	dzieciństwo	NOUN	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing	8	obl	8:obl	_
4	była	być	AUX	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
5	m	być	AUX	aglt:sg:pri:imperf:nwok	Aspect=Imp|Clitic=Yes|Number=Sing|Person=1|Variant=Short	8	aux:clitic	8:aux:clitic	_
6	często	często	ADV	adv:pos	Degree=Pos	8	advmod	8:advmod	_
7	smutną	smutny	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	8	amod	8:amod	_
8	dziewczynką	dziewczynka	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No
9	"	"	PUNCT	interp	PunctType=Quot	8	punct	8:punct	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	_

~~~


