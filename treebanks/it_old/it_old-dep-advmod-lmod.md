---
layout: base
title:  'Statistics of advmod:lmod in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `advmod:lmod`

This relation is a language-specific subtype of <tt><a href="it_old-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="it_old-dep-advmod-neg.html">advmod:neg</a></tt>, <tt><a href="it_old-dep-advmod-tmod.html">advmod:tmod</a></tt>.

692 nodes (2%) are attached to their parents as `advmod:lmod`.

454 instances of `advmod:lmod` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.6228323699422.

The following 8 pairs of parts of speech are connected with `advmod:lmod`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (567; 82% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (62; 9% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (25; 4% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (11; 2% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (10; 1% instances), <tt><a href="it_old-pos-AUX.html">AUX</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (10; 1% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 advmod:lmod	color:blue
1	Certo	certo	ADV	b	_	3	nsubj	_	Canto=19|Verso=93
2	non	non	ADV	b	PronType=Neg	3	advmod:neg	_	Canto=19|Verso=93
3	chiese	chiedere	VERB	vta2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=19|Verso=93
4	se	se	SCONJ	_	_	5	mark	_	Canto=19|Verso=93
5	non	non	ADV	b	PronType=Neg	3	advmod:neg	_	Canto=19|Verso=93
6	“	“	PUNCT	_	_	7	punct	_	SpaceAfter=No
7	vieni	venire	VERB	vi3mps2	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	5	ccomp:reported	_	Canto=19|Verso=93
8	mi	mi	PRON	pp1sxda	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	7	iobj	_	Canto=19|Verso=93
9	retro	retro	ADV	eiskml	_	7	advmod:lmod	_	Canto=19|SpaceAfter=No|Verso=93
10	”	”	PUNCT	_	_	7	punct	_	SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 advmod:lmod	color:blue
1	Quivi	quivi	ADV	b	_	2	advmod:lmod	_	Canto=18|Verso=112
2	venimmo	venire	VERB	vi3irp1	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	0	root	_	Canto=18|SpaceAfter=No|Verso=112
3	;	;	PUNCT	_	_	10	punct	_	_
4	e	e	CCONJ	cscc	_	10	cc	_	Canto=18|Verso=112
5	quindi	quindi	ADV	b	_	10	advmod:lmod	_	Canto=18|Verso=112
6	giù	giù	ADV	b	_	9	advmod:lmod	_	Canto=18|Verso=112
7	in	in	ADP	_	_	9	case	_	Canto=18|Comment=ne-l|Verso=112
8	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	Canto=18|Comment=ne-l|Verso=112
9	fosso	fosso	NOUN	sm2ms	Gender=Masc|Number=Sing	10	obl:lmod	_	Canto=18|Verso=112
10	vidi	vedere	VERB	vta2irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	parataxis	_	Canto=18|Verso=113
11	gente	gente	NOUN	sf3fs	Gender=Fem|Number=Sing	10	obj	_	Canto=18|Verso=113
12	attuffata	attuffare	VERB	vta1pr	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	11	acl	_	Canto=18|Verso=113
13	in	in	ADP	epsksl	_	15	case	_	Canto=18|Verso=113
14	uno	uno	DET	rims	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	15	det	_	Canto=18|Verso=113
15	sterco	sterco	NOUN	sm2ms	Gender=Masc|Number=Sing	12	obl:lmod	_	Canto=18|Verso=113
16	che	che	PRON	pr	PronType=Rel	21	nsubj	_	Canto=18|Verso=114
17	da	da	ADP	epskdl	_	20	case	_	Canto=18|Verso=114
18	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	20	det	_	Canto=18|Verso=114
19	uman	umano	ADJ	a1mp	Gender=Masc|Number=Plur	20	amod	_	Canto=18|Verso=114
20	privadi	privato	NOUN	sm2mp	Gender=Masc|Number=Plur	22	obl	_	Canto=18|Verso=114
21	parea	parere	VERB	vi2iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	acl:relcl	_	Canto=18|Verso=114
22	mosso	muovere	VERB	vta2pr	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	21	xcomp	_	Canto=18|SpaceAfter=No|Verso=114
23	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 advmod:lmod	color:blue
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


