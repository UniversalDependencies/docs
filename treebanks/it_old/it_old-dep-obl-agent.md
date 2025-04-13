---
layout: base
title:  'Statistics of obl:agent in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="it_old-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="it_old-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="it_old-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="it_old-dep-obl-tmod.html">obl:tmod</a></tt>.

168 nodes (0%) are attached to their parents as `obl:agent`.

85 instances of `obl:agent` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.19642857142857.

The following 7 pairs of parts of speech are connected with `obl:agent`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (87; 52% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (54; 32% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (16; 10% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (8; 5% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 14 obl:agent	color:blue
1	Con	con	ADP	epskc	_	2	case	_	Canto=17|Verso=76
2	lui	lui	PRON	pp3mslco	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obl	_	Canto=17|Verso=76
3	vedrai	vedere	VERB	vta2ifs2	Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	Canto=17|Verso=76
4	colui	colui	PRON	pdms	Gender=Masc|Number=Sing|PronType=Dem	3	obj	_	Canto=17|Verso=76
5	che	che	PRON	pr	PronType=Rel	6	nsubj:pass	_	Canto=17|Verso=76
6	'mpresso	imprimere	VERB	vtp2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	4	acl:relcl	_	Canto=17|Verso=76
7	fue	essere	AUX	vi4irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	aux:pass	_	Canto=17|Verso=76|SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	nascendo	nascere	VERB	vi2gp	VerbForm=Conv|Voice=Act	6	advcl	_	Canto=17|Verso=77|SpaceAfter=No
10	,	,	PUNCT	_	_	9	punct	_	_
11	sì	così	ADV	b	_	15	advmod	_	Canto=17|Verso=77
12	da	da	ADP	epsk6	_	14	case	_	Canto=17|Verso=77
13	questa	questo	DET	ad1fs	Gender=Fem|Number=Sing|PronType=Dem	14	det	_	Canto=17|Verso=77
14	stella	stella	NOUN	sf1fs	Gender=Fem|Number=Sing	6	obl:agent	_	Canto=17|Verso=77
15	forte	forte	ADV	b	_	6	advmod	_	Canto=17|Verso=77|SpaceAfter=No
16	,	,	PUNCT	_	_	18	punct	_	_
17	che	che	SCONJ	cssu	_	18	mark	_	Canto=17|Verso=78
18	notabili	notabile	ADJ	a2fp	Gender=Fem|Number=Plur	15	advcl:cmp	_	Canto=17|Verso=78
19	fier	essere	AUX	vi4ifp3	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	18	cop	_	Canto=17|Verso=78
20	l'	il	DET	rdfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	21	det	_	Canto=17|Verso=78
21	opere	opera	NOUN	sf1fp	Gender=Fem|Number=Plur	18	nsubj	_	Canto=17|Verso=78
22	sue	suo	DET	as1fp	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	21	det:poss	_	Canto=17|Verso=78|SpaceAfter=No
23	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 obl:agent	color:blue
1	Queste	questo	DET	ad1fp	Gender=Fem|Number=Plur|PronType=Dem	2	det	_	Canto=5|Verso=108
2	parole	parola	NOUN	sf1fp	Gender=Fem|Number=Plur	7	nsubj:pass	_	Canto=5|Verso=108
3	da	da	ADP	epski	_	4	case	_	Canto=5|Verso=108
4	lor	loro	PRON	pp3plco	Number=Plur|Person=3|PronType=Prs	7	obl:agent	_	Canto=5|Verso=108
5	ci	ci	PRON	pp1pyda	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	7	iobj	_	Canto=5|Verso=108
6	fuor	essere	AUX	vi4irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	_	Canto=5|Verso=108
7	porte	porgere	VERB	vtp2irp3	Aspect=Perf|Gender=Fem|Number=Plur|Person=3|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Canto=5|SpaceAfter=No|Verso=108
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 obl:agent	color:blue
1	Non	non	ADV	b	PronType=Neg	3	advmod:neg	_	Canto=15|Verso=109
2	era	essere	AUX	vi4iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	Canto=15|Verso=109
3	vinto	vincere	VERB	vtp2iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Canto=15|Verso=109
4	ancora	ancora	ADV	b	_	3	advmod:tmod	_	Canto=15|Verso=109
5	Montemalo	Montemalo	PROPN	np	_	3	nsubj:pass	_	Canto=15|Verso=109
6	da	da	ADP	_	_	9	case	_	_
7	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	vostro	vostro	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	9	det:poss	_	Canto=15|Verso=110
9	Uccellatoio	Uccellatoio	PROPN	np	_	3	obl:agent	_	Canto=15|Verso=110|SpaceAfter=No
10	,	,	PUNCT	_	_	25	punct	_	_
11	che	che	PRON	pr	PronType=Rel	25	nsubj:pass	_	Canto=15|Verso=110|SpaceAfter=No
12	,	,	PUNCT	_	_	15	punct	_	_
13	com'	come	ADV	b	_	15	mark	_	Canto=15|Verso=110
14	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	aux:pass	_	Canto=15|Verso=110
15	vinto	vincere	VERB	vtp2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	25	advcl:cmp	_	Canto=15|Verso=110
16	in	in	ADP	_	_	18	case	_	_
17	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	montar	montare	VERB	vi1fpsm3ms	Tense=Pres|VerbForm=Inf	15	obl	_	Canto=15|Verso=111
19	sù	sù	ADV	b	_	18	advmod:lmod	_	Canto=15|Verso=111|SpaceAfter=No
20	,	,	PUNCT	_	_	15	punct	_	_
21	così	così	ADV	b	_	25	advmod	_	Canto=15|Verso=111
22	sarà	essere	AUX	vi4ifs3	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	25	cop	_	Canto=15|Verso=111
23	in	in	ADP	_	_	25	case	_	_
24	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	calo	calo	NOUN	sm2ms	Gender=Masc|Number=Sing	9	acl:relcl	_	Canto=15|Verso=111|SpaceAfter=No
26	.	.	PUNCT	_	_	3	punct	_	_

~~~


