---
layout: base
title:  'Statistics of flat:redup in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `flat:redup`

This relation is a language-specific subtype of <tt><a href="it_old-dep-flat.html">flat</a></tt>.
There are also 2 other language-specific subtypes of `flat`: <tt><a href="it_old-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="it_old-dep-flat-name.html">flat:name</a></tt>.

62 nodes (0%) are attached to their parents as `flat:redup`.

62 instances of `flat:redup` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.41935483870968.

The following 10 pairs of parts of speech are connected with `flat:redup`: <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (19; 31% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (13; 21% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (11; 18% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (5; 8% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (5; 8% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (4; 6% instances), <tt><a href="it_old-pos-NUM.html">NUM</a></tt>-<tt><a href="it_old-pos-NUM.html">NUM</a></tt> (2; 3% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 23 flat:redup	color:blue
1	E	e	CCONJ	cscc	_	8	cc	_	Canto=5|Verso=22
2	'ntanto	intanto	ADV	b	_	8	advmod:tmod	_	Canto=5|Verso=22
3	per	per	ADP	epskpl	_	5	case	_	Canto=5|Verso=22
4	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	Canto=5|Verso=22
5	costa	costa	NOUN	sf1fs	Gender=Fem|Number=Sing	8	obl	_	Canto=5|Verso=22
6	di	di	ADP	_	_	7	case	_	Canto=5|Verso=22
7	traverso	traverso	ADV	_	_	5	nmod	_	Canto=5|Verso=22
8	venivan	venire	VERB	vi3iip3	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Canto=5|Verso=23
9	genti	gente	NOUN	sf3fp	Gender=Fem|Number=Plur	8	nsubj	_	Canto=5|Verso=23
10	innanzi	innanzi	ADV	_	_	12	advmod:tmod	_	Canto=5|Verso=23
11	a	a	ADP	_	_	12	case	_	Canto=5|Verso=23
12	noi	noi	PRON	pp1plco	Number=Plur|Person=1|PronType=Prs	8	obl:lmod	_	Canto=5|Verso=23
13	un	uno	DET	_	Gender=Masc|Number=Sing	14	det	_	Canto=5|Verso=23
14	poco	poco	DET	_	Gender=Masc|Number=Sing|PronType=Ind	12	det	_	Canto=5|SpaceAfter=No|Verso=23
15	,	,	PUNCT	_	_	16	punct	_	_
16	cantando	cantare	VERB	vta1gp	VerbForm=Conv|Voice=Act	8	advcl	_	Canto=5|Verso=24
17	«	«	PUNCT	_	_	18	punct	_	SpaceAfter=No
18	Miserere	miserere	X	_	Foreign=Yes	16	ccomp:reported	_	Canto=5|SpaceAfter=No|Verso=24
19	»	»	PUNCT	_	_	18	punct	_	_
20	a	a	ADP	_	_	21	case	_	Canto=5|Verso=24
21	verso	verso	NOUN	_	Gender=Masc|Number=Sing	16	obl:lmod	_	Canto=5|Verso=24
22	a	a	ADP	_	_	23	case	_	Canto=5|Verso=24
23	verso	verso	NOUN	_	Gender=Masc|Number=Sing	21	flat:redup	_	Canto=5|SpaceAfter=No|Verso=24
24	.	.	PUNCT	_	_	21	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 flat:redup	color:blue
1	«	«	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Ratto	ratto	ADV	b	_	17	ccomp:reported	_	Canto=18|SpaceAfter=No|Verso=103
3	,	,	PUNCT	_	_	2	punct	_	_
4	ratto	ratto	ADV	b	_	2	flat:redup	_	Canto=18|SpaceAfter=No|Verso=103
5	,	,	PUNCT	_	_	11	punct	_	_
6	che	che	SCONJ	cssp	_	11	mark	_	Canto=18|Verso=103
7	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	Canto=18|Verso=103
8	tempo	tempo	NOUN	sm2ms	Gender=Masc|Number=Sing	11	obj	_	Canto=18|Verso=103
9	non	non	ADV	b	PronType=Neg	11	advmod:neg	_	Canto=18|Verso=103
10	si	si	PRON	pf3ypa	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	11	expl:impers	_	Canto=18|Verso=103
11	perda	perdere	VERB	vtp2cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	2	advcl	_	Canto=18|Verso=103
12	per	per	ADP	epskr	_	14	case	_	Canto=18|Verso=104
13	poco	poco	DET	ai1ms	Gender=Masc|Number=Sing|PronType=Ind	14	det	_	Canto=18|Verso=104
14	amor	amore	NOUN	sm3ms	Gender=Masc|Number=Sing	11	obl	_	Canto=18|SpaceAfter=No|Verso=104
15	»	»	PUNCT	_	_	14	punct	_	SpaceAfter=No
16	,	,	PUNCT	_	_	14	punct	_	_
17	gridavan	gridare	VERB	vta1iip3	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=18|Verso=104
18	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	19	det	_	Canto=18|Verso=104
19	altri	altro	PRON	pi	Gender=Masc|Number=Plur|PronType=Ind	17	nsubj	_	Canto=18|Verso=104
20	appresso	appresso	ADV	b	_	17	advmod:lmod	_	Canto=18|SpaceAfter=No|Verso=104
21	,	,	PUNCT	_	_	17	punct	_	_
22	«	«	PUNCT	_	_	29	punct	_	SpaceAfter=No
23	che	che	SCONJ	cssp	_	29	mark	_	Canto=18|Verso=105
24	studio	studio	NOUN	sm2ms	Gender=Masc|Number=Sing	29	nsubj	_	Canto=18|Verso=105
25	di	di	ADP	epsd	_	27	mark	_	Canto=18|Verso=105
26	ben	bene	NOUN	sm3ms	Gender=Masc|Number=Sing	27	obj	_	Canto=18|Verso=105
27	far	fare	VERB	vta1fp	Tense=Pres|VerbForm=Inf|Voice=Act	24	acl	_	Canto=18|Verso=105
28	grazia	grazia	NOUN	sf1fs	Gender=Fem|Number=Sing	29	obj	_	Canto=18|Verso=105
29	rinverda	rinverdire	VERB	vta3cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	advcl	_	Canto=18|SpaceAfter=No|Verso=105
30	»	»	PUNCT	_	_	17	punct	_	SpaceAfter=No
31	.	.	PUNCT	_	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 flat:redup	color:blue
1	ricordare	ricordare	VERB	vi+1cps2	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	Canto=27|Verso=22
2	ti	ti	PRON	pf2sxle	Clitic=Yes|Person=2|Poss=Yes|PronType=Prs|Reflex=Yes	1	expl:pv	_	Canto=27|Verso=22
3	,	,	PUNCT	_	_	4	punct	_	_
4	ricordare	ricordare	VERB	vi+1cps2	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	1	flat:redup	_	Canto=27|Verso=22
5	ti	ti	PRON	pf2sxle	Clitic=Yes|Person=2|Poss=Yes|PronType=Prs|Reflex=Yes	4	expl:pv	_	Canto=27|Verso=22
6	!	!	PUNCT	_	_	1	punct	_	_
7	E	e	CCONJ	cscc	_	17	cc	_	Canto=27|Verso=22
8	se	se	SCONJ	cssv	_	13	mark	_	Canto=27|Verso=22
9	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	13	nsubj	_	Canto=27|Verso=22
10	sovresso	sovresso	ADP	eickml	_	11	case	_	Canto=27|Verso=23
11	Gerion	Gerione	PROPN	np	_	13	obl:lmod	_	Canto=27|Verso=23
12	ti	ti	PRON	pp2syac	Clitic=Yes|Person=2|Poss=Yes|PronType=Prs	13	obj	_	Canto=27|Verso=23
13	guidai	guidare	VERB	vta1irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	17	advcl	_	Canto=27|Verso=23
14	salvo	salvo	ADJ	a1ms	Gender=Masc|Number=Sing	13	xcomp	_	Canto=27|SpaceAfter=No|Verso=23
15	,	,	PUNCT	_	_	13	punct	_	_
16	che	che	PRON	pt	PronType=Int	17	obj	_	Canto=27|Verso=24
17	farò	fare	VERB	vta1ifs1	Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	1	parataxis	_	Canto=27|Verso=24
18	ora	ora	ADV	b	_	17	advmod:tmod	_	Canto=27|Verso=24
19	presso	presso	ADV	_	_	22	advmod	_	Canto=27|Verso=24
20	più	più	ADV	b	_	22	advmod	_	Canto=27|Verso=24
21	a	a	ADP	_	_	22	case	_	Canto=27|Verso=24
22	Dio	Dio	PROPN	np	_	17	obl:lmod	_	Canto=27|SpaceAfter=No|Verso=24
23	?	?	PUNCT	_	_	17	punct	_	_

~~~


