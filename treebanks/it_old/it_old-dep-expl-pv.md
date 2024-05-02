---
layout: base
title:  'Statistics of expl:pv in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="it_old-dep-expl.html">expl</a></tt>.
There are also 2 other language-specific subtypes of `expl`: <tt><a href="it_old-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="it_old-dep-expl-pass.html">expl:pass</a></tt>.

393 nodes (1%) are attached to their parents as `expl:pv`.

343 instances of `expl:pv` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11450381679389.

The following 4 pairs of parts of speech are connected with `expl:pv`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (389; 99% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl:pv	color:blue
1	E	e	CCONJ	cscc	_	2	cc	_	Canto=22|Verso=66
2	quelli	quello	PRON	pd1ms	Gender=Masc|Number=Sing|Person=1|PronType=Dem	0	root	_	Canto=22|SpaceAfter=No|Verso=66
3	:	:	PUNCT	_	_	7	punct	_	_
4	«	«	PUNCT	_	_	7	punct	_	SpaceAfter=No
5	I'	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	7	nsubj	_	Canto=22|Verso=66
6	mi	mi	PRON	pf1syle	Clitic=Yes|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	7	expl:pv	_	Canto=22|Verso=66
7	partii	partire	VERB	vi+3irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	2	ccomp:reported	_	Canto=22|SpaceAfter=No|Verso=66
8	,	,	PUNCT	_	_	9	punct	_	_
9	poco	poco	PRON	pi1ms	Gender=Masc|Number=Sing|PronType=Ind	7	advcl	_	Canto=22|Verso=67
10	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	Canto=22|SpaceAfter=No|Verso=67
11	,	,	PUNCT	_	_	13	punct	_	_
12	da	da	ADP	epska	_	13	case	_	Canto=22|Verso=67
13	un	uno	PRON	pi1ms	Gender=Masc|Number=Sing|PronType=Ind	7	obl	_	Canto=22|Verso=67
14	che	che	PRON	pr	PronType=Rel	18	nsubj	_	Canto=22|Verso=67
15	fu	essere	AUX	vi4irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	18	cop	_	Canto=22|Verso=67
16	di	di	ADP	_	_	17	case	_	Canto=22|Verso=67
17	là	là	ADV	_	_	18	advmod:lmod	_	Canto=22|Verso=67
18	vicino	vicino	ADJ	a1msxc5	Gender=Masc|Number=Sing	13	acl:relcl	_	Canto=22|SpaceAfter=No|Verso=67
19	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 18 expl:pv	color:blue
1	Quei	quello	PRON	pd1ms	Gender=Masc|Number=Sing|Person=1|PronType=Dem	6	nsubj	_	Canto=8|Verso=46
2	fu	essere	AUX	vi4irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	Canto=8|Verso=46
3	a	a	ADP	_	_	5	case	_	Canto=8|Comment=a-l|Verso=46
4	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	Canto=8|Comment=a-l|Verso=46
5	mondo	mondo	NOUN	sm2ms	Gender=Masc|Number=Sing	6	obl:tmod	_	Canto=8|Verso=46
6	persona	persona	NOUN	sf1fs	Gender=Fem|Number=Sing	0	root	_	Canto=8|Verso=46
7	orgogliosa	orgoglioso	ADJ	a1fs	Gender=Fem|Number=Sing	6	amod	_	Canto=8|SpaceAfter=No|Verso=46
8	;	;	PUNCT	_	_	11	punct	_	_
9	bontà	bonta'	NOUN	sf3fs	Gender=Fem|Number=Sing	11	nsubj	_	Canto=8|Verso=47
10	non	non	ADV	b	PronType=Neg	11	advmod:neg	_	Canto=8|Verso=47
11	è	essere	VERB	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	parataxis	_	Canto=8|Verso=47
12	che	che	PRON	pr	PronType=Rel	15	nsubj	_	Canto=8|Verso=47
13	sua	suo	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	14	det:poss	_	Canto=8|Verso=47
14	memoria	memoria	NOUN	sf1fs	Gender=Fem|Number=Sing	15	obj	_	Canto=8|Verso=47
15	fregi	fregiare	VERB	vta1cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	acl:relcl	_	Canto=8|SpaceAfter=No|Verso=47
16	:	:	PUNCT	_	_	24	punct	_	_
17	così	così	ADV	b	_	24	advmod	_	Canto=8|Verso=48
18	s'	si	PRON	pf3yle	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	24	expl:pv	_	Canto=8|SpaceAfter=No|Verso=48
19	è	essere	AUX	vi+4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	cop	_	Canto=8|Verso=48
20	l'	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	Canto=8|SpaceAfter=No|Verso=48
21	ombra	ombra	NOUN	sf1fs	Gender=Fem|Number=Sing	24	nsubj	_	Canto=8|Verso=48
22	sua	suo	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	21	det:poss	_	Canto=8|Verso=48
23	qui	qui	ADV	b	_	24	advmod:lmod	_	Canto=8|Verso=48
24	furiosa	furioso	ADJ	a1fs	Gender=Fem|Number=Sing	11	parataxis	_	Canto=8|SpaceAfter=No|Verso=48
25	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 expl:pv	color:blue
1	piange	piangere	VERB	vtp2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Canto=26|Verso=61
2	vi	vi	ADV	bx	Clitic=Yes	1	advmod:lmod	_	Canto=26|Verso=61
3	si	si	PRON	pf3xpa	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	1	expl:impers	_	Canto=26|Verso=61
4	entro	entro	ADV	b	_	1	advmod:lmod	_	Canto=26|Verso=61
5	l'	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	Canto=26|SpaceAfter=No|Verso=61
6	arte	arte	NOUN	sf3fs	Gender=Fem|Number=Sing	1	obj	_	Canto=26|Verso=61
7	per	per	ADP	epskr	_	8	case	_	Canto=26|Verso=61
8	che	che	PRON	pr	PronType=Rel	15	obl	_	Canto=26|SpaceAfter=No|Verso=61
9	,	,	PUNCT	_	_	8	punct	_	_
10	morta	morire	VERB	vi3pr	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	12	acl	_	Canto=26|SpaceAfter=No|Verso=61
11	,	,	PUNCT	_	_	10	punct	_	_
12	Deidamìa	Deidamia	PROPN	np	_	15	nsubj	_	Canto=26|Verso=62
13	ancor	ancora	ADV	b	_	15	advmod:tmod	_	Canto=26|Verso=62
14	si	si	PRON	pf3yle	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	15	expl:pv	_	Canto=26|Verso=62
15	duol	duolo	NOUN	sm2ms	Gender=Masc|Number=Sing	6	acl:relcl	_	Canto=26|Verso=62
16	d'	di	ADP	eps	_	17	case	_	Canto=26|SpaceAfter=No|Verso=62
17	Achille	Achille	PROPN	np	_	15	obl	_	Canto=26|SpaceAfter=No|Verso=62
18	,	,	PUNCT	_	_	26	punct	_	_
19	e	e	CCONJ	cscc	_	26	cc	_	Canto=26|Verso=63
20	di	di	ADP	_	_	22	case	_	Canto=26|Comment=de-l|Verso=63
21	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	Canto=26|Comment=de-l|Verso=63
22	Palladio	Palladio	PROPN	np	_	23	nmod	_	Canto=26|Verso=63
23	pena	pena	NOUN	sf1fs	Gender=Fem|Number=Sing	26	obj	_	Canto=26|Verso=63
24	vi	vi	ADV	by	Clitic=Yes	26	advmod:lmod	_	Canto=26|Verso=63
25	si	si	PRON	pf3ypa	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	26	expl:impers	_	Canto=26|Verso=63
26	porta	portare	VERB	vtp1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	conj	_	Canto=26|SpaceAfter=No|Verso=63
27	»	»	PUNCT	_	_	1	punct	_	SpaceAfter=No
28	.	.	PUNCT	_	_	1	punct	_	_

~~~


