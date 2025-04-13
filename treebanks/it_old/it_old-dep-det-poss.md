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

The following 10 pairs of parts of speech are connected with `det:poss`: <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (1901; 91% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (142; 7% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (21; 1% instances), <tt><a href="it_old-pos-AUX.html">AUX</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="it_old-pos-NUM.html">NUM</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_old-pos-X.html">X</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:poss	color:blue
1	Or	ora	ADV	b	_	2	nsubj	_	Canto=7|Verso=72
2	vo'	volere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Canto=7|Verso=72
3	che	che	SCONJ	csso	_	8	mark	_	Canto=7|Verso=72
4	tu	tu	PRON	pp2slso	Number=Sing|Person=2|PronType=Prs	8	nsubj	_	Canto=7|Verso=72
5	mia	mio	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	6	det:poss	_	Canto=7|Verso=72
6	sentenza	sentenza	NOUN	sf1fs	Gender=Fem|Number=Sing	8	obj	_	Canto=7|Verso=72
7	ne	ne	PRON	pp3ypt	Clitic=Yes|Person=3|PronType=Prs	8	obl:arg	_	Canto=7|Verso=72
8	'mbocche	imboccare	VERB	vta1cps2	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	Canto=7|SpaceAfter=No|Verso=72
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 det:poss	color:blue
1	Tu	tu	PRON	pp2slso	Person=2|Poss=Yes|PronType=Prs	3	nsubj	_	Canto=25|Verso=76
2	mi	mi	PRON	pp1syda	Clitic=Yes|Person=1|Poss=Yes|PronType=Prs	3	iobj	_	Canto=25|Verso=76
3	stillasti	stillare	VERB	vta1irs2	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=25|Verso=76|SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	_
5	con	con	ADP	epsku	_	7	case	_	Canto=25|Verso=76
6	lo	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	Canto=25|Verso=76
7	stillar	stillare	VERB	vi1fpsm3ms	Tense=Pres|VerbForm=Inf	3	obl	_	Canto=25|Verso=76
8	suo	suo	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	7	det:poss	_	Canto=25|Verso=76|SpaceAfter=No
9	,	,	PUNCT	_	_	12	punct	_	_
10	ne	in	ADP	epaksl	_	12	case	_	Canto=25|Verso=77
11	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	Canto=25|Verso=77
12	pistola	epistola	NOUN	sf1fs	Gender=Fem|Number=Sing	3	obl:lmod	_	Canto=25|Verso=77
13	poi	poi	ADV	b	_	3	advmod:tmod	_	Canto=25|Verso=77|SpaceAfter=No
14	;	;	PUNCT	_	_	19	punct	_	_
15	sì	sì	ADV	_	_	19	advmod	_	_
16	ch'	che	SCONJ	_	_	19	mark	_	_
17	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	19	nsubj	_	Canto=25|Verso=77
18	son	essere	AUX	vi4ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	19	cop	_	Canto=25|Verso=77
19	pieno	pieno	ADJ	a1ms	Gender=Masc|Number=Sing	3	advcl	_	Canto=25|Verso=77|SpaceAfter=No
20	,	,	PUNCT	_	_	26	punct	_	_
21	e	e	CCONJ	cscc	_	26	cc	_	Canto=25|Verso=78
22	in	in	ADP	epskml	_	23	case	_	Canto=25|Verso=78
23	altrui	altrui	PRON	pi	PronType=Ind	26	obl:lmod	_	Canto=25|Verso=78
24	vostra	vostro	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	25	det:poss	_	Canto=25|Verso=78
25	pioggia	pioggia	NOUN	sf1fs	Gender=Fem|Number=Sing	26	obj	_	Canto=25|Verso=78
26	repluo	repluere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	19	conj	_	Canto=25|Verso=78|SpaceAfter=No
27	»	»	PUNCT	_	_	19	punct	_	SpaceAfter=No
28	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:poss	color:blue
1	Sie	essere	AUX	_	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Pass	3	aux:pass	_	Canto=15|Comment=sie-ti|Verso=119
2	ti	ti	PRON	_	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	3	iobj	_	Canto=15|Comment=sie-ti|Verso=119
3	raccomandato	raccomandare	VERB	vtp1cps2	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Canto=15|Verso=119
4	il	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	Canto=15|Verso=119
5	mio	mio	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	6	det:poss	_	Canto=15|Verso=119
6	Tesoro	tesoro	PROPN	sm2ms	Gender=Masc|Number=Sing	3	nsubj:pass	_	Canto=15|SpaceAfter=No|Verso=119
7	,	,	PUNCT	_	_	12	punct	_	_
8	in	in	ADP	_	_	10	case	_	Canto=15|Comment=ne-l|Verso=120
9	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	Canto=15|Comment=ne-l|Verso=120
10	qual	quale	PRON	pr2ms	Number=Sing|PronType=Rel	12	obl:lmod	_	Canto=15|Verso=120
11	io	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	12	nsubj	_	Canto=15|Verso=120
12	vivo	vivere	VERB	vi2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	Canto=15|Verso=120
13	ancora	ancora	ADV	b	_	12	advmod:tmod	_	Canto=15|SpaceAfter=No|Verso=120
14	,	,	PUNCT	_	_	18	punct	_	_
15	e	e	CCONJ	cscc	_	18	cc	_	Canto=15|Verso=120
16	più	più	ADV	b	_	18	advmod	_	Canto=15|Verso=120
17	non	non	ADV	b	PronType=Neg	18	advmod:neg	_	Canto=15|Verso=120
18	cheggio	chiedere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	Canto=15|SpaceAfter=No|Verso=120
19	»	»	PUNCT	_	_	3	punct	_	SpaceAfter=No
20	.	.	PUNCT	_	_	3	punct	_	_

~~~


