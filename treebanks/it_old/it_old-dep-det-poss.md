---
layout: base
title:  'Statistics of det:poss in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="it_old-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it_old-dep-det-predet.html">det:predet</a></tt>.

2079 nodes (2%) are attached to their parents as `det:poss`.

1561 instances of `det:poss` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04954304954305.

The following 10 pairs of parts of speech are connected with `det:poss`: <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (1901; 91% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (141; 7% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (21; 1% instances), <tt><a href="it_old-pos-AUX.html">AUX</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="it_old-pos-NUM.html">NUM</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_old-pos-X.html">X</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:poss	color:blue
1	Or	ora	ADV	b	_	2	nsubj	2:nsubj	Canto=7|Verso=72|UniqueTokenId=OldItalian_Dante_Inferno-252_1
2	vo'	volere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Canto=7|Verso=72|UniqueTokenId=OldItalian_Dante_Inferno-252_2
3	che	che	SCONJ	csso	_	8	mark	8:mark	Canto=7|Verso=72|UniqueTokenId=OldItalian_Dante_Inferno-252_3
4	tu	tu	PRON	pp2slso	Number=Sing|Person=2|PronType=Prs	8	nsubj	8:nsubj	Canto=7|Verso=72|UniqueTokenId=OldItalian_Dante_Inferno-252_4
5	mia	mio	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	6	det:poss	6:det:poss	Canto=7|Verso=72|UniqueTokenId=OldItalian_Dante_Inferno-252_5
6	sentenza	sentenza	NOUN	sf1fs	Gender=Fem|Number=Sing	8	obj	8:obj	Canto=7|Verso=72|UniqueTokenId=OldItalian_Dante_Inferno-252_6
7	ne	ne	PRON	pp3ypt	Clitic=Yes|Person=3|PronType=Prs	8	obl:arg	8:obl:arg	Canto=7|Verso=72|UniqueTokenId=OldItalian_Dante_Inferno-252_7
8	'mbocche	imboccare	VERB	vta1cps2	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	2:ccomp	Canto=7|SpaceAfter=No|Verso=72|UniqueTokenId=OldItalian_Dante_Inferno-252_8
9	.	.	PUNCT	_	_	2	punct	2:punct	UniqueTokenId=OldItalian_Dante_Inferno-252_9

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 det:poss	color:blue
1	Tu	tu	PRON	pp2slso	Person=2|Poss=Yes|PronType=Prs	3	nsubj	3:nsubj	Canto=25|Verso=76|UniqueTokenId=OldItalian_Dante_Paradiso-761_1
2	mi	mi	PRON	pp1syda	Person=1|Poss=Yes|PronType=Prs	3	iobj	3:iobj	Canto=25|Clitic=Yes|Verso=76|UniqueTokenId=OldItalian_Dante_Paradiso-761_2
3	stillasti	stillare	VERB	vta1irs2	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Canto=25|SpaceAfter=No|Verso=76|UniqueTokenId=OldItalian_Dante_Paradiso-761_3
4	,	,	PUNCT	_	_	7	punct	7:punct	UniqueTokenId=OldItalian_Dante_Paradiso-761_4
5	con	con	ADP	epsku	_	7	case	7:case	Canto=25|Verso=76|UniqueTokenId=OldItalian_Dante_Paradiso-761_5
6	lo	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	7:det	Canto=25|Verso=76|UniqueTokenId=OldItalian_Dante_Paradiso-761_6
7	stillar	stillare	VERB	vi1fpsm3ms	Tense=Pres|VerbForm=Inf	3	obl	3:obl	Canto=25|Verso=76|UniqueTokenId=OldItalian_Dante_Paradiso-761_7
8	suo	suo	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	7	det:poss	7:det:poss	Canto=25|SpaceAfter=No|Verso=76|UniqueTokenId=OldItalian_Dante_Paradiso-761_8
9	,	,	PUNCT	_	_	12	punct	12:punct	UniqueTokenId=OldItalian_Dante_Paradiso-761_9
10	ne	in	ADP	epaksl	_	12	case	12:case	Canto=25|Verso=77|UniqueTokenId=OldItalian_Dante_Paradiso-761_10
11	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	12:det	Canto=25|Verso=77|UniqueTokenId=OldItalian_Dante_Paradiso-761_11
12	pistola	epistola	NOUN	sf1fs	Gender=Fem|Number=Sing	3	obl:lmod	3:obl:lmod	Canto=25|Verso=77|UniqueTokenId=OldItalian_Dante_Paradiso-761_12
13	poi	poi	ADV	b	_	3	advmod:tmod	3:advmod:tmod	Canto=25|SpaceAfter=No|Verso=77|UniqueTokenId=OldItalian_Dante_Paradiso-761_13
14	;	;	PUNCT	_	_	19	punct	19:punct	UniqueTokenId=OldItalian_Dante_Paradiso-761_14
15	sì	sì	ADV	_	_	19	advmod	19:advmod	UniqueTokenId=OldItalian_Dante_Paradiso-761_15
16	ch'	che	SCONJ	_	_	19	mark	19:mark	UniqueTokenId=OldItalian_Dante_Paradiso-761_16
17	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	19	nsubj	19:nsubj	Canto=25|Verso=77|UniqueTokenId=OldItalian_Dante_Paradiso-761_17
18	son	essere	AUX	vi4ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	19	cop	19:cop	Canto=25|Verso=77|UniqueTokenId=OldItalian_Dante_Paradiso-761_18
19	pieno	pieno	ADJ	a1ms	Gender=Masc|Number=Sing	3	advcl	3:advcl	Canto=25|SpaceAfter=No|Verso=77|UniqueTokenId=OldItalian_Dante_Paradiso-761_19
20	,	,	PUNCT	_	_	26	punct	26:punct	UniqueTokenId=OldItalian_Dante_Paradiso-761_20
21	e	e	CCONJ	cscc	_	26	cc	26:cc	Canto=25|Verso=78|UniqueTokenId=OldItalian_Dante_Paradiso-761_21
22	in	in	ADP	epskml	_	23	case	23:case	Canto=25|Verso=78|UniqueTokenId=OldItalian_Dante_Paradiso-761_22
23	altrui	altrui	PRON	pi	PronType=Ind	26	obl:lmod	26:obl:lmod	Canto=25|Verso=78|UniqueTokenId=OldItalian_Dante_Paradiso-761_23
24	vostra	vostro	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	25	det:poss	25:det:poss	Canto=25|Verso=78|UniqueTokenId=OldItalian_Dante_Paradiso-761_24
25	pioggia	pioggia	NOUN	sf1fs	Gender=Fem|Number=Sing	26	obj	26:obj	Canto=25|Verso=78|UniqueTokenId=OldItalian_Dante_Paradiso-761_25
26	repluo	repluere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	19	conj	19:conj	Canto=25|SpaceAfter=No|Verso=78|UniqueTokenId=OldItalian_Dante_Paradiso-761_26
27	»	»	PUNCT	_	_	19	punct	19:punct	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Paradiso-761_27
28	.	.	PUNCT	_	_	3	punct	3:punct	UniqueTokenId=OldItalian_Dante_Paradiso-761_28

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:poss	color:blue
1	Sie	essere	AUX	_	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Pass	3	aux:pass	3:aux:pass	Canto=15|Comment=sie-ti|Verso=119|UniqueTokenId=OldItalian_Dante_Inferno-555_1
2	ti	ti	PRON	_	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	3	iobj	3:iobj	Canto=15|Comment=sie-ti|Verso=119|UniqueTokenId=OldItalian_Dante_Inferno-555_2
3	raccomandato	raccomandare	VERB	vtp1cps2	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	Canto=15|Verso=119|UniqueTokenId=OldItalian_Dante_Inferno-555_3
4	il	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	6:det	Canto=15|Verso=119|UniqueTokenId=OldItalian_Dante_Inferno-555_4
5	mio	mio	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	6	det:poss	6:det:poss	Canto=15|Verso=119|UniqueTokenId=OldItalian_Dante_Inferno-555_5
6	Tesoro	tesoro	PROPN	sm2ms	Gender=Masc|Number=Sing	3	nsubj:pass	3:nsubj:pass	Canto=15|SpaceAfter=No|Verso=119|UniqueTokenId=OldItalian_Dante_Inferno-555_6
7	,	,	PUNCT	_	_	12	punct	12:punct	UniqueTokenId=OldItalian_Dante_Inferno-555_7
8	in	in	ADP	_	_	10	case	10:case	Canto=15|Comment=ne-l|Verso=120|UniqueTokenId=OldItalian_Dante_Inferno-555_8
9	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	10:det	Canto=15|Comment=ne-l|Verso=120|UniqueTokenId=OldItalian_Dante_Inferno-555_9
10	qual	quale	PRON	pr2ms	Number=Sing|PronType=Rel	12	obl:lmod	12:obl:lmod	Canto=15|Verso=120|UniqueTokenId=OldItalian_Dante_Inferno-555_10
11	io	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	12	nsubj	12:nsubj	Canto=15|Verso=120|UniqueTokenId=OldItalian_Dante_Inferno-555_11
12	vivo	vivere	VERB	vi2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	acl:relcl	6:acl:relcl	Canto=15|Verso=120|UniqueTokenId=OldItalian_Dante_Inferno-555_12
13	ancora	ancora	ADV	b	_	12	advmod:tmod	12:advmod:tmod	Canto=15|SpaceAfter=No|Verso=120|UniqueTokenId=OldItalian_Dante_Inferno-555_13
14	,	,	PUNCT	_	_	18	punct	18:punct	UniqueTokenId=OldItalian_Dante_Inferno-555_14
15	e	e	CCONJ	cscc	_	18	cc	18:cc	Canto=15|Verso=120|UniqueTokenId=OldItalian_Dante_Inferno-555_15
16	più	più	ADV	b	_	18	advmod	18:advmod	Canto=15|Verso=120|UniqueTokenId=OldItalian_Dante_Inferno-555_16
17	non	non	ADV	b	PronType=Neg	18	advmod:neg	18:advmod:neg	Canto=15|Verso=120|UniqueTokenId=OldItalian_Dante_Inferno-555_17
18	cheggio	chiedere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	3:conj	Canto=15|SpaceAfter=No|Verso=120|UniqueTokenId=OldItalian_Dante_Inferno-555_18
19	»	»	PUNCT	_	_	3	punct	3:punct	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Inferno-555_19
20	.	.	PUNCT	_	_	3	punct	3:punct	UniqueTokenId=OldItalian_Dante_Inferno-555_20

~~~


